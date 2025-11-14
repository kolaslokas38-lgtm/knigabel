// app2.js - Книги недели, книга дня, отзывы и рейтинги

// Данные для книг недели
const WEEKLY_BOOKS = [
    {
        id: 101,
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949,
        genre: "Антиутопия",
        description: "Роман-антиутопия о тоталитарном обществе под постоянным контролем «Старшего Брата».",
        pages: 320,
        rating: 4.8,
        reviewsCount: 128,
        cover: "https://cv3.litres.ru/pub/c/cover_415/10235705.jpg",
        available: true
    },
    {
        id: 102,
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        year: 1943,
        genre: "Философская сказка",
        description: "Самое известное произведение Экзюпери, обращённое к детям и взрослым.",
        pages: 96,
        rating: 4.9,
        reviewsCount: 215,
        cover: "https://cv8.litres.ru/pub/c/cover_415/10235619.jpg",
        available: true
    },
    {
        id: 103,
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        year: 1997,
        genre: "Фэнтези",
        description: "Первая книга о юном волшебнике Гарри Поттере и его приключениях в Хогвартсе.",
        pages: 432,
        rating: 4.7,
        reviewsCount: 189,
        cover: "https://cv1.litres.ru/pub/c/cover_415/66809901.jpg",
        available: true
    },
    {
        id: 104,
        title: "Три товарища",
        author: "Эрих Мария Ремарк",
        year: 1936,
        genre: "Роман",
        description: "Пронзительная история о дружбе и любви в сложное время между двумя войнами.",
        pages: 480,
        rating: 4.9,
        reviewsCount: 167,
        cover: "https://cv6.litres.ru/pub/c/cover_415/10235752.jpg",
        available: true
    }
];

// Данные для книги дня
const BOOK_OF_DAY = {
    id: 201,
    title: "Сто лет одиночества",
    author: "Габриэль Гарсиа Маркес",
    year: 1967,
    genre: "Магический реализм",
    description: "Эпическая сага о семье Буэндиа, живущей в вымышленном городе Макондо. Роман, считающийся шедевром мировой литературы.",
    pages: 416,
    rating: 4.9,
    reviewsCount: 342,
    cover: "https://cv9.litres.ru/pub/c/cover_415/10235773.jpg",
    available: true,
    specialOffer: "Сегодня при бронировании этой книги получаете 2 дополнительных дня чтения!"
};

// Данные для отзывов
const BOOK_REVIEWS = [
    {
        id: 1,
        userName: "Анна К.",
        bookTitle: "Война и мир",
        bookId: 1,
        rating: 5,
        comment: "Великолепное произведение! Перечитываю уже в третий раз. Каждый раз открываю для себя новые глубины характеров и смыслов.",
        date: "2024-01-15",
        likes: 12
    },
    {
        id: 2,
        userName: "Михаил П.",
        bookTitle: "Мастер и Маргарита",
        bookId: 3,
        rating: 4,
        comment: "Интересная книга, но некоторые моменты сложны для понимания. Рекомендую читать со справочным материалом.",
        date: "2024-01-14",
        likes: 8
    },
    {
        id: 3,
        userName: "Екатерина С.",
        bookTitle: "Преступление и наказание",
        bookId: 2,
        rating: 5,
        comment: "Потрясающая психологическая глубина персонажей! Достоевский как всегда гениален в описании внутренних конфликтов.",
        date: "2024-01-13",
        likes: 15
    },
    {
        id: 4,
        userName: "Дмитрий Л.",
        bookTitle: "1984",
        bookId: 101,
        rating: 5,
        comment: "Книга, которая заставляет задуматься о современном обществе. Актуально как никогда!",
        date: "2024-01-12",
        likes: 20
    },
    {
        id: 5,
        userName: "София М.",
        bookTitle: "Маленький принц",
        bookId: 102,
        rating: 5,
        comment: "Перечитываю эту книгу в разные периоды жизни и каждый раз нахожу новые смыслы. Бессмертная классика!",
        date: "2024-01-11",
        likes: 25
    }
];

// Глобальные переменные
let tg = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeTelegramApp();
    renderWeeklyBooks();
    renderBookOfDay();
    renderReviews();
    setupEventListeners();
});

// Инициализация Telegram Web App
function initializeTelegramApp() {
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
        tg.expand();
        console.log('Telegram Web App инициализирован для книг недели и отзывов');
    } else {
        // Режим браузера для тестирования
        tg = {
            showPopup: (params) => {
                alert(params.title + ": " + params.message);
            },
            showAlert: (message) => alert(message)
        };
        console.log('Режим браузера - Telegram Web App не доступен');
    }
}

// Функция для создания звезд рейтинга
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let stars = '';
    
    // Полные звезды
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    
    // Половина звезды
    if (hasHalfStar) {
        stars += '✨';
    }
    
    // Пустые звезды
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Отображение книг недели
function renderWeeklyBooks() {
    const container = document.getElementById('weeklyBooksContainer');
    
    container.innerHTML = WEEKLY_BOOKS.map(book => `
        <div class="weekly-book-card" onclick="showBookDetails(${book.id})">
            <div class="weekly-book-header">
                <div class="weekly-book-cover">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" class="weekly-book-cover-img" 
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/60x90/4CAF50/white?text=📖';">` : 
                        `<div class="weekly-book-cover-placeholder">📖</div>`
                    }
                </div>
                <div class="weekly-book-info">
                    <div class="weekly-book-title">${escapeHtml(book.title)}</div>
                    <div class="weekly-book-author">${escapeHtml(book.author)}</div>
                    <div class="weekly-book-rating">
                        <span class="stars">${createRatingStars(book.rating)}</span>
                        <span class="rating-value">${book.rating}</span>
                        <span class="reviews-count">(${book.reviewsCount})</span>
                    </div>
                    <div class="weekly-book-meta">
                        <span class="book-year">${book.year} год</span>
                        <span class="book-pages">${book.pages} стр.</span>
                    </div>
                </div>
            </div>
            <div class="weekly-book-actions">
                <button class="borrow-weekly-btn" onclick="event.stopPropagation(); borrowBook(${book.id})">
                    📚 Забронировать
                </button>
            </div>
        </div>
    `).join('');
}

// Отображение книги дня
function renderBookOfDay() {
    const container = document.getElementById('bookOfDayContainer');
    const book = BOOK_OF_DAY;
    
    container.innerHTML = `
        <div class="book-of-day-card">
            <div class="book-of-day-badge">⭐ КНИГА ДНЯ</div>
            <div class="book-of-day-content">
                <div class="book-of-day-cover">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" class="book-of-day-cover-img"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/100x150/4CAF50/white?text=📖';">` : 
                        `<div class="book-of-day-cover-placeholder">📖<br>${escapeHtml(book.title)}</div>`
                    }
                </div>
                <div class="book-of-day-info">
                    <h3 class="book-of-day-title">${escapeHtml(book.title)}</h3>
                    <p class="book-of-day-author">${escapeHtml(book.author)}</p>
                    
                    <div class="book-of-day-rating">
                        <span class="stars">${createRatingStars(book.rating)}</span>
                        <span class="rating-value">${book.rating}/5</span>
                        <span class="reviews-count">${book.reviewsCount} отзывов</span>
                    </div>
                    
                    <div class="book-of-day-meta">
                        <span class="meta-item">📅 ${book.year} год</span>
                        <span class="meta-item">🏷️ ${book.genre}</span>
                        <span class="meta-item">📄 ${book.pages} стр.</span>
                    </div>
                    
                    <p class="book-of-day-description">${escapeHtml(book.description)}</p>
                    
                    ${book.specialOffer ? `
                    <div class="special-offer">
                        🎁 ${book.specialOffer}
                    </div>
                    ` : ''}
                </div>
            </div>
            <div class="book-of-day-actions">
                <button class="borrow-today-btn" onclick="borrowBook(${book.id})">
                    📖 Забронировать книгу дня
                </button>
            </div>
        </div>
    `;
}

// Отображение отзывов
function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    
    container.innerHTML = BOOK_REVIEWS.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-user-info">
                    <div class="review-avatar">${review.userName[0]}</div>
                    <div class="review-user-details">
                        <div class="review-user-name">${review.userName}</div>
                        <div class="review-date">${formatReviewDate(review.date)}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${createRatingStars(review.rating)}
                </div>
            </div>
            
            <div class="review-book-title">О книге: "${review.bookTitle}"</div>
            
            <p class="review-comment">${escapeHtml(review.comment)}</p>
            
            <div class="review-footer">
                <button class="like-btn" onclick="likeReview(${review.id})">
                    ❤️ ${review.likes}
                </button>
                <button class="reply-btn" onclick="showReplyForm(${review.id})">
                    💬 Ответить
                </button>
            </div>
        </div>
    `).join('');
    
    // Добавляем кнопку для написания отзыва
    container.innerHTML += `
        <div class="add-review-section">
            <button class="add-review-btn" onclick="showAddReviewForm()">
                ✍️ Написать отзыв
            </button>
        </div>
    `;
}

// Бронирование книги
function borrowBook(bookId) {
    let book;
    
    // Ищем книгу в разных источниках
    book = WEEKLY_BOOKS.find(b => b.id === bookId);
    if (!book) {
        book = BOOK_OF_DAY.id === bookId ? BOOK_OF_DAY : null;
    }
    
    if (book) {
        tg.showPopup({
            title: 'Успех! 🎉',
            message: `Книга "${book.title}" успешно забронирована!`,
            buttons: [{ type: 'ok' }]
        });
    } else {
        tg.showAlert('Книга не найдена');
    }
}

// Лайк отзыва
function likeReview(reviewId) {
    const review = BOOK_REVIEWS.find(r => r.id === reviewId);
    if (review) {
        review.likes++;
        renderReviews();
        tg.showAlert('Спасибо за ваш лайк! ❤️');
    }
}

// Показать форму ответа
function showReplyForm(reviewId) {
    tg.showAlert('Функция ответов на отзывы скоро будет доступна!');
}

// Показать форму добавления отзыва
function showAddReviewForm() {
    tg.showPopup({
        title: 'Написать отзыв',
        message: 'Выберите книгу из каталога и напишите ваш отзыв прямо в карточке книги!',
        buttons: [{ type: 'ok' }]
    });
}

// Показать детали книги (заглушка)
function showBookDetails(bookId) {
    tg.showAlert(`Детали книги #${bookId} - перейдите в основной каталог для просмотра`);
}

// Вспомогательные функции
function formatReviewDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Вчера';
    if (diffDays === 2) return 'Позавчера';
    if (diffDays <= 7) return `${diffDays} дней назад`;
    
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Можно добавить дополнительные обработчики при необходимости
}

// Добавляем стили для новых разделов
const newStyles = `
.weekly-books-section {
    margin: 20px 0;
    padding: 0 15px;
}

.weekly-books-title {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
}

.weekly-books-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.weekly-book-card {
    background: white;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.weekly-book-card:active {
    transform: scale(0.98);
    background: var(--bg-light);
}

.weekly-book-header {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
}

.weekly-book-cover {
    width: 60px;
    height: 90px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
}

.weekly-book-cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.weekly-book-cover-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #666;
}

.weekly-book-info {
    flex: 1;
    min-width: 0;
}

.weekly-book-title {
    font-weight: 600;
    font-size: 1em;
    margin-bottom: 4px;
    color: var(--text-color);
    line-height: 1.3;
}

.weekly-book-author {
    font-size: 0.85em;
    color: var(--text-light);
    margin-bottom: 6px;
}

.weekly-book-rating {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    flex-wrap: wrap;
}

.weekly-book-rating .stars {
    font-size: 0.9em;
}

.rating-value {
    font-weight: 600;
    font-size: 0.85em;
    color: var(--accent-color);
}

.reviews-count {
    font-size: 0.8em;
    color: var(--text-light);
}

.weekly-book-meta {
    display: flex;
    gap: 10px;
    font-size: 0.8em;
    color: var(--text-light);
}

.weekly-book-actions {
    margin-top: 10px;
}

.borrow-weekly-btn {
    width: 100%;
    padding: 10px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.borrow-weekly-btn:active {
    background: var(--accent-dark);
    transform: scale(0.98);
}

/* Стили для книги дня */
.book-of-day-section {
    margin: 25px 0;
    padding: 0 15px;
}

.book-of-day-title {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
}

.book-of-day-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 20px;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.book-of-day-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.75em;
    font-weight: 600;
    backdrop-filter: blur(10px);
}

.book-of-day-content {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.book-of-day-cover {
    width: 100px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.book-of-day-cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.book-of-day-cover-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    color: rgba(255, 255, 255, 0.8);
}

.book-of-day-info {
    flex: 1;
    min-width: 0;
}

.book-of-day-title {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 5px;
    color: white;
}

.book-of-day-author {
    font-size: 1em;
    margin-bottom: 10px;
    opacity: 0.9;
}

.book-of-day-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.book-of-day-rating .stars {
    font-size: 1em;
}

.book-of-day-rating .rating-value {
    font-weight: 700;
    color: white;
}

.book-of-day-rating .reviews-count {
    font-size: 0.85em;
    opacity: 0.8;
    color: white;
}

.book-of-day-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 10px;
    font-size: 0.85em;
    opacity: 0.9;
}

.book-of-day-description {
    font-size: 0.9em;
    line-height: 1.4;
    opacity: 0.9;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.special-offer {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 8px;
    font-size: 0.85em;
    margin-top: 10px;
    backdrop-filter: blur(10px);
}

.book-of-day-actions {
    margin-top: 15px;
}

.borrow-today-btn {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.9);
    color: #667eea;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
}

.borrow-today-btn:active {
    background: white;
    transform: scale(0.98);
}

/* Стили для отзывов */
.reviews-section {
    margin: 25px 0;
    padding: 0 15px;
}

.reviews-title {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
}

.reviews-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.review-card {
    background: white;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border: 1px solid var(--border-color);
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}

.review-user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.review-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9em;
}

.review-user-details {
    flex: 1;
}

.review-user-name {
    font-weight: 600;
    margin-bottom: 2px;
}

.review-date {
    font-size: 0.8em;
    color: var(--text-light);
}

.review-rating {
    font-size: 0.9em;
}

.review-book-title {
    font-size: 0.9em;
    color: var(--text-light);
    margin-bottom: 8px;
    font-style: italic;
}

.review-comment {
    line-height: 1.4;
    margin-bottom: 12px;
    color: var(--text-color);
}

.review-footer {
    display: flex;
    gap: 10px;
}

.like-btn, .reply-btn {
    padding: 6px 12px;
    border: 1px solid var(--border-color);
    background: var(--bg-light);
    border-radius: 20px;
    font-size: 0.8em;
    cursor: pointer;
    transition: all 0.3s ease;
}

.like-btn:active, .reply-btn:active {
    background: var(--border-color);
    transform: scale(0.95);
}

.add-review-section {
    margin-top: 20px;
}

.add-review-btn {
    width: 100%;
    padding: 15px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-review-btn:active {
    background: var(--accent-dark);
    transform: scale(0.98);
}

/* Адаптивность */
@media (max-width: 360px) {
    .book-of-day-content {
        flex-direction: column;
        text-align: center;
    }
    
    .book-of-day-cover {
        margin: 0 auto;
    }
    
    .weekly-book-header {
        flex-direction: column;
        text-align: center;
    }
    
    .weekly-book-cover {
        align-self: center;
    }
}
`;

// Добавляем стили в документ
const styleSheet = document.createElement('style');
styleSheet.textContent = newStyles;
document.head.appendChild(styleSheet);

// Глобальные функции для HTML
window.borrowBook = borrowBook;
window.likeReview = likeReview;
window.showReplyForm = showReplyForm;
window.showAddReviewForm = showAddReviewForm;
window.showBookDetails = showBookDetails;