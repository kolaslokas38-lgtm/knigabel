// Функции для работы с localStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return defaultValue;
    }
}

// Функции для сохранения конкретных данных
function saveUserData(userData) {
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.USER_DATA, userData);
}

function saveBooksData() {
    const booksToSave = window.APP_DATA.MOCK_BOOKS.map(book => ({
        id: book.id,
        available: book.available,
        totalRating: book.totalRating,
        ratingsCount: book.ratingsCount,
        rating: book.rating,
        reviewsCount: book.reviewsCount
    }));
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.BOOKS_DATA, booksToSave);
}

function saveLibraryStats() {
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.LIBRARY_STATS, window.APP_DATA.MOCK_STATS);
}

// СОХРАНЕНИЕ ОБЩИХ ОТЗЫВОВ
function saveAllReviews() {
    const allReviews = getAllReviews();
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.SHARED_REVIEWS, allReviews);
}

// Функции для загрузки данных
function loadUserData() {
    const saved = loadFromStorage(window.APP_DATA.STORAGE_KEYS.USER_DATA);
    if (saved) {
        // Объединяем сохраненные данные с дефолтными (на случай добавления новых полей)
        return {
            ...window.APP_DATA.DEFAULT_USER_DATA,
            ...saved,
            stats: {
                ...window.APP_DATA.DEFAULT_USER_DATA.stats,
                ...(saved.stats || {})
            },
            myReviews: saved.myReviews || [],
            theme: saved.theme || 'light'
        };
    }
    return window.APP_DATA.DEFAULT_USER_DATA;
}

function loadBooksData() {
    const saved = loadFromStorage(window.APP_DATA.STORAGE_KEYS.BOOKS_DATA);
    if (saved) {
        // Восстанавливаем статусы книг и рейтинги из сохраненных данных
        saved.forEach(savedBook => {
            const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === savedBook.id);
            if (book) {
                book.available = savedBook.available;
                book.totalRating = savedBook.totalRating || book.totalRating;
                book.ratingsCount = savedBook.ratingsCount || book.ratingsCount;
                book.rating = savedBook.rating || book.rating;
                book.reviewsCount = savedBook.reviewsCount || book.reviewsCount;
            }
        });
    }
}

function loadLibraryStats() {
    const saved = loadFromStorage(window.APP_DATA.STORAGE_KEYS.LIBRARY_STATS);
    if (saved) {
        Object.keys(saved).forEach(key => {
            window.APP_DATA.MOCK_STATS[key] = saved[key];
        });
    }
}

// ЗАГРУЗКА ОБЩИХ ОТЗЫВОВ
function loadAllReviews() {
    const saved = loadFromStorage(window.APP_DATA.STORAGE_KEYS.SHARED_REVIEWS);
    if (saved && saved.length > 0) {
        // Возвращаем сохраненные отзывы
        return saved;
    }
    // Если нет сохраненных, возвращаем начальные отзывы из APP_DATA
    return window.APP_DATA.SHARED_REVIEWS || [];
}

// Функция для сохранения темы
function saveTheme(theme) {
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.THEME, theme);
}

function loadTheme() {
    return loadFromStorage(window.APP_DATA.STORAGE_KEYS.THEME, 'light');
}

// === ОБНОВЛЕННЫЕ ФУНКЦИИ ДЛЯ РАБОТЫ С ОБЩИМИ ОТЗЫВАМИ ===

// Получить ВСЕ отзывы (сохраненные + начальные)
function getAllReviews() {
    const savedReviews = loadFromStorage(window.APP_DATA.STORAGE_KEYS.SHARED_REVIEWS, []);
    const initialReviews = window.APP_DATA.SHARED_REVIEWS || [];
    
    // Объединяем, убирая дубликаты по ID
    const allReviewsMap = new Map();
    
    // Сначала добавляем начальные отзывы
    initialReviews.forEach(review => {
        allReviewsMap.set(review.id, review);
    });
    
    // Затем добавляем/обновляем сохраненными отзывами
    savedReviews.forEach(review => {
        allReviewsMap.set(review.id, review);
    });
    
    return Array.from(allReviewsMap.values());
}

// Добавить новый отзыв
function addNewReview(review) {
    try {
        // Добавляем ID пользователя если его нет
        if (!review.userId) {
            review.userId = 'user_' + Date.now();
        }
        
        // Получаем все текущие отзывы
        const allReviews = getAllReviews();
        
        // Добавляем новый отзыв в начало
        allReviews.unshift(review);
        
        // Сохраняем обновленный список
        saveToStorage(window.APP_DATA.STORAGE_KEYS.SHARED_REVIEWS, allReviews);
        
        // Обновляем рейтинг книги
        if (window.APP_DATA.RatingUtils) {
            window.APP_DATA.RatingUtils.updateBookRating(review.bookId, review.rating);
        }
        
        // Сохраняем изменения в книгах
        saveBooksData();
        
        return review;
    } catch (error) {
        console.error('Ошибка при добавлении отзыва:', error);
        return null;
    }
}

// Получить отзывы пользователя
function getUserReviews(userId) {
    const allReviews = getAllReviews();
    return allReviews.filter(review => review.userId === userId);
}

// Получить отзывы для книги
function getBookReviews(bookId) {
    const allReviews = getAllReviews();
    return allReviews
        .filter(review => review.bookId == bookId) // == для сравнения строки и числа
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Лайкнуть отзыв
function likeReview(reviewId) {
    try {
        const allReviews = getAllReviews();
        const review = allReviews.find(r => r.id == reviewId);
        
        if (review) {
            review.likes = (review.likes || 0) + 1;
            saveToStorage(window.APP_DATA.STORAGE_KEYS.SHARED_REVIEWS, allReviews);
            return review.likes;
        }
    } catch (error) {
        console.error('Ошибка при лайке отзыва:', error);
    }
    return 0;
}

// Функция для полного сохранения всех данных
function saveAllData(userData) {
    saveUserData(userData);
    saveBooksData();
    saveLibraryStats();
    saveAllReviews();
    saveTheme(userData.theme);
}

// Функция для полной загрузки всех данных
function loadAllData() {
    loadBooksData();
    loadLibraryStats();
    const userData = loadUserData();
    userData.theme = loadTheme();
    return userData;
}

// Функция для очистки всех данных (для тестирования)
function clearAllData() {
    try {
        Object.values(window.APP_DATA.STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        
        // Восстанавливаем дефолтные данные
        window.location.reload();
        return true;
    } catch (error) {
        console.error('Ошибка очистки данных:', error);
        return false;
    }
}

// Функция для получения статистики хранилища
function getStorageStats() {
    const stats = {
        totalSize: 0,
        items: {}
    };
    
    Object.values(window.APP_DATA.STORAGE_KEYS).forEach(key => {
        const data = localStorage.getItem(key);
        if (data) {
            stats.items[key] = {
                size: new Blob([data]).size,
                length: data.length
            };
            stats.totalSize += new Blob([data]).size;
        }
    });
    
    return stats;
}

// Экспортируем функции хранилища
window.STORAGE = {
    // Основные функции
    saveToStorage,
    loadFromStorage,
    saveUserData,
    saveBooksData,
    saveLibraryStats,
    loadUserData,
    loadBooksData,
    loadLibraryStats,
    saveTheme,
    loadTheme,
    saveAllData,
    loadAllData,
    
    // Функции для отзывов
    addNewReview,
    getUserReviews,
    getBookReviews,
    likeReview,
    saveAllReviews,
    loadAllReviews,
    getAllReviews,
    
    // Сервисные функции
    clearAllData,
    getStorageStats
};