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
        available: book.available
    }));
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.BOOKS_DATA, booksToSave);
}

function saveLibraryStats() {
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.LIBRARY_STATS, window.APP_DATA.MOCK_STATS);
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
            myReviews: saved.myReviews || []
        };
    }
    return window.APP_DATA.DEFAULT_USER_DATA;
}

function loadBooksData() {
    const saved = loadFromStorage(window.APP_DATA.STORAGE_KEYS.BOOKS_DATA);
    if (saved) {
        // Восстанавливаем статусы книг из сохраненных данных
        saved.forEach(savedBook => {
            const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === savedBook.id);
            if (book) {
                book.available = savedBook.available;
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

// Функция для сохранения темы
function saveTheme(theme) {
    return saveToStorage(window.APP_DATA.STORAGE_KEYS.THEME, theme);
}

function loadTheme() {
    return loadFromStorage(window.APP_DATA.STORAGE_KEYS.THEME, 'light');
}

// Функция для полного сохранения всех данных
function saveAllData(userData) {
    saveUserData(userData);
    saveBooksData();
    saveLibraryStats();
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

// Экспортируем функции хранилища
window.STORAGE = {
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
    loadAllData
};