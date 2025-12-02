const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const { books, genres } = require('./books-data');

const app = express();
const PORT = process.env.PORT || 3000;

// WebSocket отключен для serverless среды
// Функция для отправки сообщений всем клиентам (заглушка)
function broadcastToClients(message) {
    // В serverless среде WebSocket не поддерживается
    console.log('WebSocket broadcast:', message.type);
}

// Папка для хранения данных
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

// Файлы для хранения данных
const BOOKS_FILE = path.join(DATA_DIR, 'books.json');
const REVIEWS_FILE = path.join(DATA_DIR, 'reviews.json');
const STATS_FILE = path.join(DATA_DIR, 'stats.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

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

// Хранилище пользователей
let users = [];

// Определения ролей с цветами
const ROLES = {
    user: { name: 'Пользователь', color: '#666666' },
    premium: { name: 'Премиум', color: '#FFD700' },
    vip: { name: 'VIP', color: '#FF6B6B' },
    moderator: { name: 'Модератор', color: '#4ECDC4' },
    administrator: { name: 'Администратор', color: '#45B7D1' },
    owner: { name: 'Владелец', color: '#9B59B6' }
};

// Функция для получения информации о пользователе
function getUserInfo(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        return {
            ...user,
            roleInfo: ROLES[user.role] || ROLES.user
        };
    }
    return null;
}

// Функции для работы с файлами (асинхронные)
async function loadDataFromFiles() {
    try {
        // Загрузка книг
        try {
            const booksData = JSON.parse(await fs.readFile(BOOKS_FILE, 'utf8'));
            // Обновляем существующие книги данными из файла
            booksData.forEach(savedBook => {
                const bookIndex = books.findIndex(b => b.id === savedBook.id);
                if (bookIndex !== -1) {
                    books[bookIndex] = { ...books[bookIndex], ...savedBook };
                }
            });
            console.log('📚 Книги загружены из файла');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('❌ Ошибка загрузки книг:', error);
            }
        }

        // Загрузка отзывов
        try {
            reviews = JSON.parse(await fs.readFile(REVIEWS_FILE, 'utf8'));
            console.log('💬 Отзывы загружены из файла');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('❌ Ошибка загрузки отзывов:', error);
            }
        }

        // Загрузка статистики
        try {
            libraryStats = JSON.parse(await fs.readFile(STATS_FILE, 'utf8'));
            console.log('📊 Статистика загружена из файла');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('❌ Ошибка загрузки статистики:', error);
            }
        }

        // Загрузка пользователей
        try {
            users = JSON.parse(await fs.readFile(USERS_FILE, 'utf8'));
            console.log('👥 Пользователи загружены из файла');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error('❌ Ошибка загрузки пользователей:', error);
            }
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки данных:', error);
    }
}

async function saveBooksToFile() {
    try {
        await fs.writeFile(BOOKS_FILE, JSON.stringify(books, null, 2));
        console.log('💾 Книги сохранены в файл');
    } catch (error) {
        console.error('❌ Ошибка сохранения книг:', error);
    }
}

async function saveReviewsToFile() {
    try {
        await fs.writeFile(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
        console.log('💾 Отзывы сохранены в файл');
    } catch (error) {
        console.error('❌ Ошибка сохранения отзывов:', error);
    }
}

async function saveStatsToFile() {
    try {
        await fs.writeFile(STATS_FILE, JSON.stringify(libraryStats, null, 2));
        console.log('💾 Статистика сохранена в файл');
    } catch (error) {
        console.error('❌ Ошибка сохранения статистики:', error);
    }
}

async function saveUsersToFile() {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        console.log('💾 Пользователи сохранены в файл');
    } catch (error) {
        console.error('❌ Ошибка сохранения пользователей:', error);
    }
}

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
            'POST /api/reviews/:id/like': 'Поставить лайк отзыву',
            'GET /api/admin/users': 'Получить всех пользователей',
            'GET /api/admin/users/:id': 'Получить пользователя по ID',
            'POST /api/admin/users': 'Создать нового пользователя',
            'PUT /api/admin/users/:id/role': 'Изменить роль пользователя',
            'DELETE /api/admin/users/:id': 'Удалить пользователя',
            'GET /api/admin/export/users': 'Экспорт данных пользователей'
        },
        roles: ROLES
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
app.post('/api/books/borrow/:id', async (req, res) => {
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

  // Сохраняем изменения
  await saveBooksToFile();
  await saveStatsToFile();

  // Отправляем обновление через WebSocket
  broadcastToClients({
      type: 'book_borrowed',
      bookId: books[bookIndex].id,
      book: books[bookIndex],
      stats: libraryStats,
      timestamp: new Date().toISOString()
  });

  res.json({
    success: true,
    message: `Книга "${books[bookIndex].title}" успешно забронирована!`,
    book: books[bookIndex]
  });
});

// Возврат книги
app.post('/api/books/return/:id', async (req, res) => {
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

    // Сохраняем изменения
    await saveBooksToFile();
    await saveStatsToFile();

    // Отправляем обновление через WebSocket
    broadcastToClients({
        type: 'book_returned',
        bookId: books[bookIndex].id,
        book: books[bookIndex],
        stats: libraryStats,
        timestamp: new Date().toISOString()
    });

    res.json({
        success: true,
        message: `Книга "${books[bookIndex].title}" успешно возвращена!`,
        book: books[bookIndex]
    });
});

// API для отзывов

// Получить все отзывы
app.get('/api/reviews', (req, res) => {
    const reviewsWithUsers = reviews.map(review => ({
        ...review,
        userInfo: getUserInfo(review.userId)
    }));

    res.json({
        reviews: reviewsWithUsers,
        count: reviews.length
    });
});

// Получить отзывы для конкретной книги
app.get('/api/reviews/book/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookReviews = reviews.filter(review => review.bookId === bookId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const reviewsWithUsers = bookReviews.map(review => ({
        ...review,
        userInfo: getUserInfo(review.userId)
    }));

    res.json({
        reviews: reviewsWithUsers,
        count: bookReviews.length
    });
});

// Добавить новый отзыв
app.post('/api/reviews', async (req, res) => {
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

    // Создаем или обновляем пользователя
    let user = users.find(u => u.id === userId);
    if (!user) {
        user = {
            id: userId,
            name: userName,
            avatar: userAvatar || '👤',
            role: 'user',
            createdAt: new Date().toISOString(),
            lastActive: new Date().toISOString()
        };
        users.push(user);
        await saveUsersToFile();
    } else {
        user.lastActive = new Date().toISOString();
        await saveUsersToFile();
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

    // Сохраняем изменения
    await saveReviewsToFile();
    await saveBooksToFile();

    // Отправляем обновление через WebSocket
    broadcastToClients({
        type: 'review_added',
        review: {
            ...newReview,
            userInfo: getUserInfo(userId)
        },
        bookId: bookId,
        timestamp: new Date().toISOString()
    });

    res.json({
        success: true,
        message: 'Отзыв успешно добавлен',
        review: {
            ...newReview,
            userInfo: getUserInfo(userId)
        }
    });
});

// Удалить отзыв
app.delete('/api/reviews/:id', async (req, res) => {
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

    // Сохраняем изменения
    await saveReviewsToFile();
    await saveBooksToFile();

    // Отправляем обновление через WebSocket
    broadcastToClients({
        type: 'review_deleted',
        reviewId: reviewId,
        bookId: review.bookId,
        timestamp: new Date().toISOString()
    });

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

// API для админ-панели

// Экспорт данных книг
app.get('/api/admin/export/books', (req, res) => {
    const exportData = {
        books: books,
        stats: libraryStats,
        exportedAt: new Date().toISOString(),
        version: '1.0.0'
    };
    res.json(exportData);
});

// Импорт данных книг
app.post('/api/admin/import/books', async (req, res) => {
    try {
        const { books: importedBooks, stats: importedStats } = req.body;

        if (importedBooks && Array.isArray(importedBooks)) {
            // Обновляем книги
            importedBooks.forEach(importedBook => {
                const existingIndex = books.findIndex(b => b.id === importedBook.id);
                if (existingIndex !== -1) {
                    books[existingIndex] = importedBook;
                } else {
                    books.push(importedBook);
                }
            });
            await saveBooksToFile();
        }

        if (importedStats) {
            libraryStats = { ...libraryStats, ...importedStats };
            await saveStatsToFile();
        }

        res.json({
            success: true,
            message: 'Данные успешно импортированы',
            booksCount: books.length,
            stats: libraryStats
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка импорта данных' });
    }
});

// Сброс книг к исходному состоянию
app.post('/api/admin/reset/books', async (req, res) => {
    try {
        // Перезагружаем исходные данные
        const { books: originalBooks, genres: originalGenres } = require('./books-data');

        // Сбрасываем книги к исходному состоянию
        books.length = 0;
        books.push(...originalBooks.map(book => ({ ...book })));

        // Сбрасываем статистику
        libraryStats = {
            totalBooks: books.length,
            availableBooks: books.filter(book => book.available).length,
            borrowedBooks: books.filter(book => !book.available).length,
            totalGenres: originalGenres.length - 1
        };

        // Сохраняем изменения
        await saveBooksToFile();
        await saveStatsToFile();

        res.json({
            success: true,
            message: 'Книги сброшены к исходному состоянию',
            booksCount: books.length,
            stats: libraryStats
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сброса данных' });
    }
});

// Получить всех пользователей
app.get('/api/admin/users', (req, res) => {
    const usersWithRoles = users.map(user => ({
        ...user,
        roleInfo: ROLES[user.role] || ROLES.user
    }));

    res.json({
        users: usersWithRoles,
        count: users.length,
        roles: ROLES
    });
});

// Получить пользователя по ID
app.get('/api/admin/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }

    res.json({
        ...user,
        roleInfo: ROLES[user.role] || ROLES.user
    });
});

// Создать нового пользователя
app.post('/api/admin/users', async (req, res) => {
    const { id, name, avatar, role = 'user' } = req.body;

    if (!id || !name) {
        return res.status(400).json({ error: 'ID и имя пользователя обязательны' });
    }

    if (!ROLES[role]) {
        return res.status(400).json({ error: 'Неверная роль пользователя' });
    }

    // Проверяем, существует ли уже пользователь
    const existingUser = users.find(u => u.id === id);
    if (existingUser) {
        return res.status(400).json({ error: 'Пользователь с таким ID уже существует' });
    }

    const newUser = {
        id,
        name,
        avatar: avatar || '👤',
        role,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
    };

    users.push(newUser);
    await saveUsersToFile();

    res.json({
        success: true,
        message: 'Пользователь успешно создан',
        user: {
            ...newUser,
            roleInfo: ROLES[role]
        }
    });
});

// Изменить роль пользователя
app.put('/api/admin/users/:id/role', async (req, res) => {
    const userId = req.params.id;
    const { role } = req.body;

    if (!ROLES[role]) {
        return res.status(400).json({ error: 'Неверная роль пользователя' });
    }

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }

    users[userIndex].role = role;
    users[userIndex].lastActive = new Date().toISOString();

    await saveUsersToFile();

    res.json({
        success: true,
        message: 'Роль пользователя успешно изменена',
        user: {
            ...users[userIndex],
            roleInfo: ROLES[role]
        }
    });
});

// Удалить пользователя
app.delete('/api/admin/users/:id', async (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    await saveUsersToFile();

    res.json({
        success: true,
        message: 'Пользователь успешно удален',
        user: deletedUser
    });
});

// Экспорт данных пользователей
app.get('/api/admin/export/users', (req, res) => {
    res.json({
        users: users,
        roles: ROLES,
        exportedAt: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Сброс пользователей к исходному состоянию
app.post('/api/admin/reset/users', async (req, res) => {
    try {
        // Очищаем массив пользователей
        users.length = 0;

        // Сохраняем пустой массив
        await saveUsersToFile();

        res.json({
            success: true,
            message: 'Пользователи сброшены к исходному состоянию',
            usersCount: 0
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сброса пользователей' });
    }
});

// Получить статистику сервера
app.get('/api/admin/stats', (req, res) => {
    const serverStats = {
        books: {
            total: books.length,
            available: books.filter(b => b.available).length,
            borrowed: books.filter(b => !b.available).length,
            averageRating: books.reduce((sum, book) => sum + (book.rating || 0), 0) / books.length
        },
        reviews: {
            total: reviews.length,
            averageRating: reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0
        },
        users: {
            total: users.length,
            roles: Object.keys(ROLES).reduce((acc, role) => {
                acc[role] = users.filter(u => u.role === role).length;
                return acc;
            }, {})
        },
        server: {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            version: '1.0.0'
        }
    };
    res.json(serverStats);
});

// Обработка 404
app.use('*', (req, res) => {
   res.status(404).json({ error: 'Маршрут не найден' });
});

// Загрузка данных при запуске сервера (асинхронно)
loadDataFromFiles().catch(error => {
    console.error('Ошибка загрузки данных при запуске:', error);
});

// Экспорт приложения для serverless
module.exports = app;

// Для локального запуска (если не в serverless среде)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Сервер библиотеки "КнігаБел" запущен на порту ${PORT}`);
        console.log(`📚 Доступно книг: ${libraryStats.totalBooks}`);
        console.log(`✅ Доступно для выдачи: ${libraryStats.availableBooks}`);
        console.log(`🔗 API доступно по адресу: http://localhost:${PORT}`);
        console.log(`💾 Постоянное сохранение: АКТИВНО`);
    });
}