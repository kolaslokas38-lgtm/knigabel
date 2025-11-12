// Конфигурация - ТОЛЬКО MOCK ДАННЫЕ
const CONFIG = {
    API_BASE_URL: 'https://kolaslokas38-lgtm.github.io/knigabel',
    USE_MOCK_DATA: true
};

// Mock данные из вашего backend
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
    cover: "https://ilibrary.ru/text/11/index.html?ysclid=mhvx9vsoeg166766920",
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
    cover: "https://www.litres.ru/book/fedor-dostoevskiy/prestuplenie-i-nakazanie-139491/chitat-onlayn/?ysclid=mhvx9k6i6y430210085",
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
    cover: "https://author.today/reader/428523?ybaip=1&yclid=16299584341587001343",
    pages: 480
  },
  {
    id: 4,
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    year: 1833,
    genre: "Роман в стихах",
    description: "Роман в стихах, одно из самых значительных произведений русской литературы.",
    isbn: "978-5-4453-0152-3",
    available: true,
    cover: "https://ilibrary.ru/text/436/p.2/in-/index.html?ysclid=mhvx8frig492217739",
    pages: 288
  },
  {
    id: 5,
    title: "Тихий Дон",
    author: "Михаил Шолохов",
    year: 1940,
    genre: "Роман-эпопея",
    description: "Эпопея о донском казачестве в годы Первой мировой и Гражданской войны.",
    isbn: "978-5-699-80699-2",
    available: true,
    cover: "https://kartaslov.ru/%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%A8%D0%BE%D0%BB%D0%BE%D1%85%D0%BE%D0%B2_%D0%A2%D0%B8%D1%85%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD",
    pages: 1504
  },
  {
    id: 6,
    title: "Отцы и дети",
    author: "Иван Тургенев",
    year: 1862,
    genre: "Социально-психологический роман",
    description: "Роман о конфликте между либералами и нигилистами в России XIX века.",
    isbn: "978-5-04-116640-5",
    available: true,
    cover: "https://ilibrary.ru/text/96/p.1/index.html?ysclid=mhvx61pphx585214493",
    pages: 320
  },
  {
    id: 7,
    title: "Анна Каренина",
    author: "Лев Толстой",
    year: 1877,
    genre: "Реализм",
    description: "Трагическая история любви замужней женщины к блестящему офицеру.",
    isbn: "978-5-389-04221-0",
    available: false,
    cover: "https://ilibrary.ru/text/1099/p.1/index.html?ysclid=mhvx5p6f7b638150150",
    pages: 864
  },
  {
    id: 8,
    title: "Мёртвые души",
    author: "Николай Гоголь",
    year: 1842,
    genre: "Поэма",
    description: "Сатирическое произведение о российском обществе середины XIX века.",
    isbn: "978-5-4453-0153-0",
    available: true,
    cover: "https://ilibrary.ru/text/78/p.1/index.html?ysclid=mhvwxqpupr161332592",
    pages: 352
  }
];

const MOCK_GENRES = [
  "Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика", 
  "Роман в стихах", "Реализм", "Поэма", "Социально-психологический роман"
];

// Рассчитываем статистику на основе данных
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: MOCK_BOOKS.filter(book => !book.available).length,
    totalGenres: MOCK_GENRES.length - 1
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
        
        // Имитируем задержку сети
        setTimeout(() => {
            updateBooksDisplay(MOCK_BOOKS);
            populateGenreFilter(MOCK_GENRES);
            updateStats(MOCK_STATS);
            showLoading(false);
        }, 800);
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные. Используются демо-данные.');
        
        // Fallback на mock данные
        updateBooksDisplay(MOCK_BOOKS);
        populateGenreFilter(MOCK_GENRES);
        updateStats(MOCK_STATS);
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
        
        // Mock поиск
        setTimeout(() => {
            let filteredBooks = MOCK_BOOKS;
            
            if (query) {
                filteredBooks = MOCK_BOOKS.filter(book => 
                    book.title.toLowerCase().includes(query.toLowerCase()) || 
                    book.author.toLowerCase().includes(query.toLowerCase()) ||
                    book.genre.toLowerCase().includes(query.toLowerCase()) ||
                    (book.description && book.description.toLowerCase().includes(query.toLowerCase()))
                );
            }
            
            updateBooksDisplay(filteredBooks);
            updateSectionTitle(query ? `Результаты поиска: "${query}"` : 'Каталог книг');
            showLoading(false);
        }, 300);
        
    } catch (error) {
        console.error('Ошибка поиска:', error);
        showError('Ошибка при выполнении поиска');
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
        
        // Mock фильтрация
        setTimeout(() => {
            let filteredBooks = MOCK_BOOKS;
            if (genre && genre !== 'Все жанры') {
                filteredBooks = MOCK_BOOKS.filter(book => book.genre === genre);
            }
            
            updateBooksDisplay(filteredBooks);
            updateSectionTitle(genre && genre !== 'Все жанры' ? `Жанр: ${genre}` : 'Каталог книг');
            showLoading(false);
        }, 300);
        
    } catch (error) {
        console.error('Ошибка фильтрации:', error);
        showError('Ошибка при фильтрации');
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
                        `<div class="book-cover-img-container">
                            <img src="${book.cover}" alt="${book.title}" class="book-cover-img" onerror="this.style.display='none'; this.parentNode.innerHTML='📖<br>${book.title.substring(0, 20)}${book.title.length > 20 ? '...' : ''}';">
                         </div>` : 
                        `📖<br>${book.title.substring(0, 20)}${book.title.length > 20 ? '...' : ''}`
                    }
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(book.title)}</div>
                    <div class="book-author">👤 ${escapeHtml(book.author)}</div>
                    <div class="book-meta">📅 ${book.year} год</div>
                    <div class="book-meta">🏷️ ${book.genre}</div>
                    <div class="book-meta">📄 ${book.pages} стр.</div>
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
        
        // Mock данные
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        
        if (!book) {
            throw new Error('Книга не найдена');
        }
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-details">
                <div class="book-cover-large">
                    ${book.cover ? 
                        `<div class="book-cover-large-container">
                            <img src="${book.cover}" alt="${book.title}" class="book-cover-large-img" onerror="this.style.display='none'; this.parentNode.innerHTML='<div style=\\'width: 150px; height: 220px; background: linear-gradient(135deg, #f0f0f0, #e0e0e0); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 14px; text-align: center; padding: 10px;\\'>📖<br>${escapeHtml(book.title)}</div>';">
                         </div>` : 
                        `<div style="width: 150px; height: 220px; background: linear-gradient(135deg, #f0f0f0, #e0e0e0); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 14px; text-align: center; padding: 10px;">📖<br>${escapeHtml(book.title)}</div>`
                    }
                </div>
                <div class="book-info-detailed">
                    <h4>${escapeHtml(book.title)}</h4>
                    <p><strong>Автор:</strong> ${escapeHtml(book.author)}</p>
                    <p><strong>Год издания:</strong> ${book.year}</p>
                    <p><strong>Жанр:</strong> ${book.genre}</p>
                    <p><strong>ISBN:</strong> ${book.isbn || 'Не указан'}</p>
                    <p><strong>Страниц:</strong> ${book.pages}</p>
                    <p><strong>Статус:</strong> 
                        <span class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                            ${book.available ? '✅ Доступна' : '❌ Выдана'}
                        </span>
                    </p>
                    <div class="book-description">
                        <strong>Описание:</strong>
                        <p>${escapeHtml(book.description || 'Описание отсутствует.')}</p>
                    </div>
                    ${book.cover ? `<div style="margin-top: 15px; font-size: 0.9em; color: var(--secondary-color);">
                        <strong>Ссылка на книгу:</strong> 
                        <a href="${book.cover}" target="_blank" style="color: var(--secondary-color); word-break: break-all;">${book.cover.substring(0, 50)}...</a>
                    </div>` : ''}
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
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        if (book && book.available) {
            // Обновляем статус книги
            book.available = false;
            
            // Обновляем статистику
            MOCK_STATS.availableBooks--;
            MOCK_STATS.borrowedBooks++;
            
            tg.showPopup({
                title: 'Успех! 🎉',
                message: `Книга "${book.title}" успешно забронирована!`,
                buttons: [{ type: 'ok' }]
            });
            
            // Обновляем отображение
            updateBooksDisplay(currentBooks);
            updateStats(MOCK_STATS);
            closeModal();
            
        } else {
            throw new Error('Книга недоступна для бронирования');
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
    if (!unsafe) return '';
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