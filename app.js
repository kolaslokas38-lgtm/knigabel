// Конфигурация
const CONFIG = {
    API_BASE_URL: 'http://localhost:3000/api',
    ITEMS_PER_PAGE: 10
};

// Глобальные переменные
let currentBooks = [];
let currentSearchQuery = '';
let currentGenre = '';
let tg = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeTelegramApp();
    loadInitialData();
    setupEventListeners();
});

// Инициализация Telegram Web App
function initializeTelegramApp() {
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
        
        // Настройка Telegram Web App
        tg.expand();
        tg.enableClosingConfirmation();
        tg.BackButton.onClick(handleBackButton);
        
        // Показываем информацию о пользователе если доступна
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            const user = tg.initDataUnsafe.user;
            console.log('Пользователь Telegram:', {
                id: user.id,
                name: `${user.first_name} ${user.last_name || ''}`,
                username: user.username
            });
        }
        
        console.log('Telegram Web App инициализирован');
    } else {
        console.warn('Telegram Web App не доступен, работаем в режиме браузера');
        tg = {
            showPopup: (params) => alert(params.message),
            showAlert: (message) => alert(message),
            BackButton: {
                show: () => console.log('BackButton show'),
                hide: () => console.log('BackButton hide'),
                onClick: (cb) => console.log('BackButton onClick')
            }
        };
    }
}

// Обработка кнопки "Назад" в Telegram
function handleBackButton() {
    if (document.getElementById('bookModal').classList.contains('hidden')) {
        tg.close();
    } else {
        closeModal();
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    
    // Поиск при вводе (с debounce)
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (e.target.value.length >= 2 || e.target.value.length === 0) {
                searchBooks();
            }
        }, 500);
    });
    
    // Закрытие модального окна при клике вне его
    document.getElementById('bookModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Загрузка начальных данных
async function loadInitialData() {
    try {
        showLoading(true);
        
        // Параллельная загрузка данных
        const [booksResponse, genresResponse, statsResponse] = await Promise.all([
            fetch(`${CONFIG.API_BASE_URL}/books`),
            fetch(`${CONFIG.API_BASE_URL}/genres`),
            fetch(`${CONFIG.API_BASE_URL}/stats`)
        ]);
        
        const booksData = await booksResponse.json();
        const genresData = await genresResponse.json();
        const statsData = await statsResponse.json();
        
        // Обновление интерфейса
        updateBooksDisplay(booksData.books);
        populateGenreFilter(genresData);
        updateStats(statsData);
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные. Проверьте подключение к серверу.');
    } finally {
        showLoading(false);
    }
}

// Поиск книг
async function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    currentSearchQuery = query;
    
    try {
        showLoading(true);
        
        let url = `${CONFIG.API_BASE_URL}/books`;
        if (query) {
            url = `${CONFIG.API_BASE_URL}/books/search?q=${encodeURIComponent(query)}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        updateBooksDisplay(data.books || data);
        updateSectionTitle(query ? `Результаты поиска: "${query}"` : 'Каталог книг');
        
    } catch (error) {
        console.error('Ошибка поиска:', error);
        showError('Ошибка при выполнении поиска');
    } finally {
        showLoading(false);
    }
}

// Фильтрация по жанру
async function filterByGenre() {
    const genreFilter = document.getElementById('genreFilter');
    const genre = genreFilter.value;
    currentGenre = genre;
    
    try {
        showLoading(true);
        
        let url = `${CONFIG.API_BASE_URL}/books`;
        if (genre && genre !== 'Все жанры') {
            url = `${CONFIG.API_BASE_URL}/books/filter?genre=${encodeURIComponent(genre)}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        updateBooksDisplay(data.books || data);
        updateSectionTitle(genre && genre !== 'Все жанры' ? `Жанр: ${genre}` : 'Каталог книг');
        
    } catch (error) {
        console.error('Ошибка фильтрации:', error);
        showError('Ошибка при фильтрации');
    } finally {
        showLoading(false);
    }
}

// Отображение книг
function updateBooksDisplay(books) {
    currentBooks = books || [];
    const container = document.getElementById('booksContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (!books || books.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        updateBooksCount(0);
        return;
    }
    
    emptyState.classList.add('hidden');
    
    container.innerHTML = books.map(book => `
        <div class="book-card" onclick="showBookDetails(${book.id})">
            <div class="book-header">
                <div class="book-cover">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" class="book-cover">` : 
                        `📖<br>${book.title.substring(0, 20)}${book.title.length > 20 ? '...' : ''}`
                    }
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(book.title)}</div>
                    <div class="book-author">👤 ${escapeHtml(book.author)}</div>
                    <div class="book-meta">📅 ${book.year} год</div>
                    <div class="book-meta">🏷️ ${book.genre}</div>
                    <div class="book-meta">📄 ${book.pages || 'N/A'} стр.</div>
                    <div class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                        ${book.available ? '✅ Доступна' : '❌ Выдана'}
                    </div>
                </div>
            </div>
            <button 
                class="borrow-btn" 
                onclick="event.stopPropagation(); borrowBook(${book.id})"
                ${!book.available ? 'disabled' : ''}
            >
                ${book.available ? '📚 Забронировать' : 'Недоступна'}
            </button>
        </div>
    `).join('');
    
    updateBooksCount(books.length);
}

// Показать детали книги
async function showBookDetails(bookId) {
    try {
        showLoading(true);
        
        const response = await fetch(`${CONFIG.API_BASE_URL}/books/${bookId}`);
        const book = await response.json();
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-details">
                <div class="book-cover-large">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" style="width: 150px; height: 220