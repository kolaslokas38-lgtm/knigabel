// Конфигурация - ЗАМЕНИТЕ НА СВОЙ URL БЭКЕНДА
const CONFIG = {
    // Если бэкенд на другом хостинге, укажите его URL здесь
    API_BASE_URL: 'https://knigabel.onrender.com',
    // Для демо используем mock данные
    USE_MOCK_DATA: true
};

// Mock данные для демонстрации
const MOCK_BOOKS = [
    {
        id: 1,
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        genre: "Роман-эпопея",
        description: "Монументальный роман-эпопея, описывающий русское общество в эпоху войн против Наполеона.",
        isbn: "978-5-699-13799-2",
        available: true,
        cover: "https://via.placeholder.com/200x300/4CAF50/white?text=Война+и+мир",
        pages: 1225
    },
    {
        id: 2,
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        year: 1866,
        genre: "Психологический роман",
        description: "История бывшего студента Родиона Раскольникова, совершившего убийство.",
        isbn: "978-5-17-145136-8",
        available: true,
        cover: "https://via.placeholder.com/200x300/2196F3/white?text=Преступление",
        pages: 672
    },
    {
        id: 3,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        genre: "Фантастика",
        description: "Мистический роман о визите дьявола в Москву 1930-х годов.",
        isbn: "978-5-389-06587-5",
        available: false,
        cover: "https://via.placeholder.com/200x300/9C27B0/white?text=Мастер",
        pages: 480
    }
];

const MOCK_GENRES = ["Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика"];
const MOCK_STATS = { totalBooks: 3, availableBooks: 2, borrowedBooks: 1, totalGenres: 3 };

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
        tg.expand();
        tg.enableClosingConfirmation();
        tg.BackButton.onClick(handleBackButton);
        
        console.log('Telegram Web App инициализирован');
    } else {
        // Режим браузера для тестирования
        tg = {
            showPopup: (params) => {
                alert(params.title + ": " + params.message);
            },
            showAlert: (message) => alert(message),
            BackButton: {
                show: () => console.log('BackButton show'),
                hide: () => console.log('BackButton hide'),
                onClick: (cb) => console.log('BackButton onClick')
            }
        };
        console.log('Режим браузера - Telegram Web App не доступен');
    }
}

function handleBackButton() {
    if (document.getElementById('bookModal').classList.contains('hidden')) {
        tg.close();
    } else {
        closeModal();
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (e.target.value.length >= 2 || e.target.value.length === 0) {
                searchBooks();
            }
        }, 500);
    });
    
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
        
        if (CONFIG.USE_MOCK_DATA) {
            // Используем mock данные
            setTimeout(() => {
                updateBooksDisplay(MOCK_BOOKS);
                populateGenreFilter(MOCK_GENRES);
                updateStats(MOCK_STATS);
                showLoading(false);
            }, 1000);
        } else {
            // Реальные API запросы
            const [booksResponse, genresResponse, statsResponse] = await Promise.all([
                fetch(`${CONFIG.API_BASE_URL}/books`),
                fetch(`${CONFIG.API_BASE_URL}/genres`),
                fetch(`${CONFIG.API_BASE_URL}/stats`)
            ]);
            
            const booksData = await booksResponse.json();
            const genresData = await genresResponse.json();
            const statsData = await statsResponse.json();
            
            updateBooksDisplay(booksData.books);
            populateGenreFilter(genresData);
            updateStats(statsData);
        }
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные. Используются демо-данные.');
        
        // Fallback на mock данные
        updateBooksDisplay(MOCK_BOOKS);
        populateGenreFilter(MOCK_GENRES);
        updateStats(MOCK_STATS);
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
        
        if (CONFIG.USE_MOCK_DATA) {
            // Mock поиск
            setTimeout(() => {
                const filteredBooks = MOCK_BOOKS.filter(book => 
                    book.title.toLowerCase().includes(query.toLowerCase()) || 
                    book.author.toLowerCase().includes(query.toLowerCase()) ||
                    book.genre.toLowerCase().includes(query.toLowerCase())
                );
                updateBooksDisplay(filteredBooks);
                updateSectionTitle(query ? `Результаты поиска: "${query}"` : 'Каталог книг');
                showLoading(false);
            }, 500);
        } else {
            // Реальный поиск
            let url = `${CONFIG.API_BASE_URL}/books`;
            if (query) {
                url = `${CONFIG.API_BASE_URL}/books/search?q=${encodeURIComponent(query)}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            updateBooksDisplay(data.books || data);
            updateSectionTitle(query ? `Результаты поиска: "${query}"` : 'Каталог книг');
        }
        
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
        
        if (CONFIG.USE_MOCK_DATA) {
            // Mock фильтрация
            setTimeout(() => {
                let filteredBooks = MOCK_BOOKS;
                if (genre && genre !== 'Все жанры') {
                    filteredBooks = MOCK_BOOKS.filter(book => book.genre === genre);
                }
                updateBooksDisplay(filteredBooks);
                updateSectionTitle(genre && genre !== 'Все жанры' ? `Жанр: ${genre}` : 'Каталог книг');
                showLoading(false);
            }, 500);
        } else {
            // Реальная фильтрация
            let url = `${CONFIG.API_BASE_URL}/books`;
            if (genre && genre !== 'Все жанры') {
                url = `${CONFIG.API_BASE_URL}/books/filter?genre=${encodeURIComponent(genre)}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            updateBooksDisplay(data.books || data);
            updateSectionTitle(genre && genre !== 'Все жанры' ? `Жанр: ${genre}` : 'Каталог книг');
        }
        
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
        
        let book;
        if (CONFIG.USE_MOCK_DATA) {
            // Mock данные
            book = MOCK_BOOKS.find(b => b.id === bookId);
        } else {
            // Реальные данные
            const response = await fetch(`${CONFIG.API_BASE_URL}/books/${bookId}`);
            book = await response.json();
        }
        
        if (!book) {
            throw new Error('Книга не найдена');
        }
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-details">
                <div class="book-cover-large">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" style="width: 150px; height: 220px; border-radius: 10px; object-fit: cover;">` : 
                        `<div style="width: 150px; height: 220px; background: linear-gradient(135deg, #f0f0f0, #e0e0e0); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 14px; text-align: center; padding: 10px;">📖<br>${book.title}</div>`
                    }
                </div>
                <div class="book-info-detailed">
                    <h4>${escapeHtml(book.title)}</h4>
                    <p><strong>Автор:</strong> ${escapeHtml(book.author)}</p>
                    <p><strong>Год издания:</strong> ${book.year}</p>
                    <p><strong>Жанр:</strong> ${book.genre}</p>
                    <p><strong>ISBN:</strong> ${book.isbn || 'Не указан'}</p>
                    <p><strong>Страниц:</strong> ${book.pages || 'Не указано'}</p>
                    <p><strong>Статус:</strong> 
                        <span class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                            ${book.available ? '✅ Доступна' : '❌ Выдана'}
                        </span>
                    </p>
                    <div class="book-description">
                        <strong>Описание:</strong>
                        <p>${escapeHtml(book.description || 'Описание отсутствует.')}</p>
                    </div>
                </div>
            </div>
            <button 
                class="borrow-btn" 
                onclick="borrowBook(${book.id})"
                ${!book.available ? 'disabled' : ''}
                style="margin-top: 20px;"
            >
                ${book.available ? '📚 Забронировать эту книгу' : 'Книга недоступна для бронирования'}
            </button>
        `;
        
        document.getElementById('modalTitle').textContent = book.title;
        document.getElementById('bookModal').classList.remove('hidden');
        tg.BackButton.show();
        
    } catch (error) {
        console.error('Ошибка загрузки деталей книги:', error);
        showError('Не удалось загрузить информацию о книге');
    } finally {
        showLoading(false);
    }
}

// Бронирование книги
async function borrowBook(bookId) {
    try {
        if (CONFIG.USE_MOCK_DATA) {
            // Mock бронирование
            const book = MOCK_BOOKS.find(b => b.id === bookId);
            if (book && book.available) {
                book.available = false;
                tg.showPopup({
                    title: 'Успех! 🎉',
                    message: `Книга "${book.title}" успешно забронирована!`,
                    buttons: [{ type: 'ok' }]
                });
                loadInitialData();
                closeModal();
            } else {
                throw new Error('Книга недоступна');
            }
        } else {
            // Реальное бронирование
            const response = await fetch(`${CONFIG.API_BASE_URL}/books/borrow/${bookId}`, {
                method: 'POST'
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                tg.showPopup({
                    title: 'Успех! 🎉',
                    message: result.message,
                    buttons: [{ type: 'ok' }]
                });
                loadInitialData();
                closeModal();
            } else {
                throw new Error(result.error);
            }
        }
    } catch (error) {
        console.error('Ошибка бронирования:', error);
        tg.showPopup({
            title: 'Ошибка',
            message: error.message || 'Не удалось забронировать книгу',
            buttons: [{ type: 'ok' }]
        });
    }
}

// Вспомогательные функции
function populateGenreFilter(genres) {
    const genreFilter = document.getElementById('genreFilter');
    genreFilter.innerHTML = genres.map(genre => 
        `<option value="${genre}">${genre}</option>`
    ).join('');
}

function updateStats(stats) {
    document.getElementById('totalBooks').textContent = stats.totalBooks;
    document.getElementById('availableBooks').textContent = stats.availableBooks;
}

function updateBooksCount(count) {
    document.getElementById('booksCount').textContent = `${count} ${getBookWord(count)}`;
}

function updateSectionTitle(title) {
    document.getElementById('sectionTitle').textContent = title;
}

function getBookWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) return 'книга';
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'книги';
    return 'книг';
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    const booksContainer = document.getElementById('booksContainer');
    
    if (show) {
        loading.classList.remove('hidden');
        booksContainer.classList.add('hidden');
    } else {
        loading.classList.add('hidden');
        booksContainer.classList.remove('hidden');
    }
}

function showError(message) {
    tg.showAlert(message);
}

function closeModal() {
    document.getElementById('bookModal').classList.add('hidden');
    tg.BackButton.hide();
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = 'Все жанры';
    currentSearchQuery = '';
    currentGenre = '';
    loadInitialData();
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Глобальные функции для HTML
window.searchBooks = searchBooks;
window.filterByGenre = filterByGenre;
window.showBookDetails = showBookDetails;
window.borrowBook = borrowBook;
window.closeModal = closeModal;
window.clearFilters = clearFilters;