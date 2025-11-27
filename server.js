const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { books, genres } = require('./books-data');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Статистика библиотеки
let libraryStats = {
   totalBooks: books.length,
   availableBooks: books.filter(book => book.available).length,
   borrowedBooks: books.filter(book => !book.available).length,
   totalGenres: genres.length - 1 // минус "Все жанры"
};

// Хранилище отзывов (в памяти для демо)
let reviews = [];

// Маршруты API

// Главная страница API
app.get('/', (req, res) => {
   res.json({
       message: 'Добро пожаловать в API библиотеки "КнігаБел"',
       version: '1.0.0',
       endpoints: {
           '/api/books': 'Получить все книги',
           '/api/books/search?q=query': 'Поиск книг',
           '/api/books/filter?genre=genreName': 'Фильтр по жанру',
           '/api/books/:id': 'Получить книгу по ID',
           '/api/genres': 'Получить все жанры',
           '/api/stats': 'Статистика библиотеки',
           '/api/reviews': 'Получить все отзывы',
           '/api/reviews/book/:bookId': 'Получить отзывы для книги',
           'POST /api/reviews': 'Добавить новый отзыв',
           'DELETE /api/reviews/:id': 'Удалить отзыв',
           'POST /api/reviews/:id/like': 'Поставить лайк отзыву'
       }
   });
});

// Получить все книги
app.get('/api/books', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  
  const paginatedBooks = books.slice(startIndex, endIndex);
  
  res.json({
    books: paginatedBooks,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(books.length / limit),
      totalBooks: books.length,
      hasNext: endIndex < books.length,
      hasPrev: startIndex > 0
    }
  });
});

// Поиск книг
app.get('/api/books/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  
  if (!query) {
    return res.status(400).json({ error: 'Пустой поисковый запрос' });
  }
  
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(query) || 
    book.author.toLowerCase().includes(query) ||
    book.genre.toLowerCase().includes(query) ||
    book.description.toLowerCase().includes(query)
  );
  
  res.json({
    books: filteredBooks,
    query: query,
    count: filteredBooks.length
  });
});

// Фильтр по жанру
app.get('/api/books/filter', (req, res) => {
  const genre = req.query.genre;
  
  if (!genre || genre === 'Все жанры') {
    return res.json({ books: books });
  }
  
  const filteredBooks = books.filter(book => book.genre === genre);
  
  res.json({
    books: filteredBooks,
    genre: genre,
    count: filteredBooks.length
  });
});

// Получить книгу по ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({ error: 'Книга не найдена' });
  }
  
  res.json(book);
});

// Получить все жанры
app.get('/api/genres', (req, res) => {
  res.json(genres);
});

// Получить статистику
app.get('/api/stats', (req, res) => {
  res.json(libraryStats);
});

// Бронирование книги
app.post('/api/books/borrow/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Книга не найдена' });
  }
  
  if (!books[bookIndex].available) {
    return res.status(400).json({ error: 'Книга уже выдана' });
  }
  
  // Обновляем статус книги
  books[bookIndex].available = false;
  
  // Обновляем статистику
  libraryStats.availableBooks--;
  libraryStats.borrowedBooks++;
  
  res.json({ 
    success: true,
    message: `Книга "${books[bookIndex].title}" успешно забронирована!`,
    book: books[bookIndex]
  });
});

// Возврат книги
app.post('/api/books/return/:id', (req, res) => {
   const bookId = parseInt(req.params.id);
   const bookIndex = books.findIndex(b => b.id === bookId);

   if (bookIndex === -1) {
       return res.status(404).json({ error: 'Книга не найдена' });
   }

   if (books[bookIndex].available) {
       return res.status(400).json({ error: 'Книга уже доступна' });
   }

   // Обновляем статус книги
   books[bookIndex].available = true;

   // Обновляем статистику
   libraryStats.availableBooks++;
   libraryStats.borrowedBooks--;

   res.json({
       success: true,
       message: `Книга "${books[bookIndex].title}" успешно возвращена!`,
       book: books[bookIndex]
   });
});

// API для отзывов

// Получить все отзывы
app.get('/api/reviews', (req, res) => {
   res.json({
       reviews: reviews,
       count: reviews.length
   });
});

// Получить отзывы для конкретной книги
app.get('/api/reviews/book/:bookId', (req, res) => {
   const bookId = parseInt(req.params.bookId);
   const bookReviews = reviews.filter(review => review.bookId === bookId)
       .sort((a, b) => new Date(b.date) - new Date(a.date));

   res.json({
       reviews: bookReviews,
       count: bookReviews.length
   });
});

// Добавить новый отзыв
app.post('/api/reviews', (req, res) => {
   const { userId, userName, bookId, rating, comment, userAvatar } = req.body;

   if (!userId || !userName || !bookId || !rating || !comment) {
       return res.status(400).json({ error: 'Все поля обязательны' });
   }

   // Проверяем, не писал ли уже пользователь отзыв на эту книгу
   const existingReview = reviews.find(review =>
       review.userId === userId && review.bookId === bookId
   );

   if (existingReview) {
       return res.status(400).json({ error: 'Вы уже писали отзыв на эту книгу' });
   }

   const newReview = {
       id: Date.now(),
       userId,
       userName,
       bookId,
       rating: parseInt(rating),
       comment,
       date: new Date().toISOString().split('T')[0],
       likes: 0,
       userAvatar: userAvatar || '👤'
   };

   reviews.push(newReview);

   // Обновляем рейтинг книги
   const book = books.find(b => b.id === bookId);
   if (book) {
       book.totalRating = (book.totalRating || 0) + newReview.rating;
       book.ratingsCount = (book.ratingsCount || 0) + 1;
       book.rating = Math.round((book.totalRating / book.ratingsCount) * 10) / 10;
       book.reviewsCount = book.ratingsCount;
   }

   res.json({
       success: true,
       message: 'Отзыв успешно добавлен',
       review: newReview
   });
});

// Удалить отзыв
app.delete('/api/reviews/:id', (req, res) => {
   const reviewId = parseInt(req.params.id);
   const reviewIndex = reviews.findIndex(review => review.id === reviewId);

   if (reviewIndex === -1) {
       return res.status(404).json({ error: 'Отзыв не найден' });
   }

   const review = reviews[reviewIndex];
   const { userId } = req.body;

   // Проверяем, что отзыв принадлежит пользователю
   if (review.userId !== userId) {
       return res.status(403).json({ error: 'Нельзя удалить чужой отзыв' });
   }

   // Удаляем отзыв
   reviews.splice(reviewIndex, 1);

   // Пересчитываем рейтинг книги
   const book = books.find(b => b.id === review.bookId);
   if (book && book.ratingsCount > 0) {
       book.totalRating -= review.rating;
       book.ratingsCount -= 1;
       if (book.ratingsCount > 0) {
           book.rating = Math.round((book.totalRating / book.ratingsCount) * 10) / 10;
       } else {
           book.rating = 0;
           book.totalRating = 0;
       }
       book.reviewsCount = book.ratingsCount;
   }

   res.json({
       success: true,
       message: 'Отзыв успешно удален'
   });
});

// Лайк отзыва
app.post('/api/reviews/:id/like', (req, res) => {
   const reviewId = parseInt(req.params.id);
   const review = reviews.find(r => r.id === reviewId);

   if (!review) {
       return res.status(404).json({ error: 'Отзыв не найден' });
   }

   review.likes = (review.likes || 0) + 1;

   res.json({
       success: true,
       likes: review.likes
   });
});

// Обработка 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер библиотеки "КнігаБел" запущен на порту ${PORT}`);
  console.log(`📚 Доступно книг: ${libraryStats.totalBooks}`);
  console.log(`✅ Доступно для выдачи: ${libraryStats.availableBooks}`);
  console.log(`🔗 API доступно по адресу: http://localhost:${PORT}`);
});