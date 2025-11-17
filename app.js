// Глобальные переменные
let currentBooks = [];
let currentSearchQuery = '';
let currentGenre = '';
let tg = null;
let userData = null;
let currentReviewBookId = null;
let selectedRating = 0;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeTelegramApp();
    loadInitialData();
    setupEventListeners();
    initializeTheme();
});

// Инициализация Telegram Web App
function initializeTelegramApp() {
    userData = window.STORAGE.loadAllData();
    
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
        tg.expand();
        tg.enableClosingConfirmation();
        tg.BackButton.onClick(handleBackButton);
        
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            const tgUser = tg.initDataUnsafe.user;
            userData.name = `${tgUser.first_name} ${tgUser.last_name || ''}`.trim();
            userData.telegramId = tgUser.id;
            
            if (tgUser.photo_url) {
                document.getElementById('userAvatar').innerHTML = 
                    `<img src="${tgUser.photo_url}" alt="${userData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            } else {
                document.getElementById('userAvatar').querySelector('.avatar-placeholder').textContent = 
                    tgUser.first_name ? tgUser.first_name[0] : '👤';
            }
        }
        
        tg.onEvent('viewportChanged', () => window.STORAGE.saveAllData(userData));
        tg.onEvent('closing', () => window.STORAGE.saveAllData(userData));
        
    } else {
        tg = {
            showPopup: (params) => alert(params.title + ": " + params.message),
            showAlert: (message) => alert(message),
            BackButton: {
                show: () => console.log('BackButton show'),
                hide: () => console.log('BackButton hide'),
                onClick: (cb) => console.log('BackButton onClick')
            },
            onEvent: (event, callback) => console.log('Event listener:', event)
        };
    }
}

function handleBackButton() {
    if (document.getElementById('bookModal').classList.contains('hidden') && 
        document.getElementById('reviewModal').classList.contains('hidden')) {
        tg.close();
    } else {
        closeModal();
        closeReviewModal();
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
        if (e.target === this) closeModal();
    });
    
    document.getElementById('reviewModal').addEventListener('click', function(e) {
        if (e.target === this) closeReviewModal();
    });
}

// Навигация по разделам
function showSection(sectionName) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById('searchSection').classList.toggle('hidden', sectionName !== 'catalog');
    document.getElementById(sectionName + 'Section').classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionName}')"]`).classList.add('active');
    
    if (sectionName === 'profile') {
        updateProfileDisplay();
    }
    if (sectionName === 'redbook') {
        loadRedBookAnimals();
    }
}

// Загрузка начальных данных
async function loadInitialData() {
    try {
        showLoading(true);
        
        setTimeout(() => {
            updateBooksDisplay(window.APP_DATA.MOCK_BOOKS);
            populateGenreFilter(window.APP_DATA.MOCK_GENRES);
            updateStats(window.APP_DATA.MOCK_STATS);
            updateUserProfile();
            renderWeeklyBooks();
            renderBookOfDay();
            showLoading(false);
        }, 800);
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные. Используются демо-данные.');
        
        updateBooksDisplay(window.APP_DATA.MOCK_BOOKS);
        populateGenreFilter(window.APP_DATA.MOCK_GENRES);
        updateStats(window.APP_DATA.MOCK_STATS);
        updateUserProfile();
        renderWeeklyBooks();
        renderBookOfDay();
        showLoading(false);
    }
}

// Отображение книг недели
function renderWeeklyBooks() {
    const container = document.getElementById('weeklyBooksContainer');
    const weeklyBooks = getRandomBooks(4);
    
    container.innerHTML = weeklyBooks.map(book => `
        <div class="book-card" onclick="showBookDetails(${book.id})">
            <div class="book-header">
                <div class="book-cover">
                    <div class="book-icon">${book.icon || '📚'}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(book.title)}</div>
                    <div class="book-author">${escapeHtml(book.author)}</div>
                    <div class="book-rating-small">
                        <span class="stars">${createRatingStars(book.rating)}</span>
                        <span class="rating-value">${book.rating}</span>
                    </div>
                    <div class="book-status status-available">⭐ Рекомендуем</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Отображение книги дня
function renderBookOfDay() {
    const container = document.getElementById('bookOfDayContainer');
    const bookOfDay = getRandomBooks(1)[0];
    
    container.innerHTML = `
        <div class="book-card" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; border: none;">
            <div class="book-header">
                <div class="book-cover">
                    <div class="book-icon">${bookOfDay.icon || '📚'}</div>
                </div>
                <div class="book-info">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="flex: 1;">
                            <div class="book-title" style="color: white; font-size: 1.3em;">${escapeHtml(bookOfDay.title)}</div>
                            <div class="book-author" style="color: rgba(255,255,255,0.9);">${escapeHtml(bookOfDay.author)}</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 12px; font-size: 0.8em; white-space: nowrap;">
                            ⭐ Книга дня
                        </div>
                    </div>
                    <div class="book-rating-small">
                        <span class="stars">${createRatingStars(bookOfDay.rating)}</span>
                        <span class="rating-value" style="color: white;">${bookOfDay.rating}/5</span>
                    </div>
                    <button class="borrow-btn" onclick="event.stopPropagation(); borrowBook(${bookOfDay.id})" style="background: rgba(255,255,255,0.9); color: var(--primary-color); margin-top: 10px;">
                        📖 Забронировать
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Поиск книг
async function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    currentSearchQuery = query;
    
    try {
        showLoading(true);
        
        setTimeout(() => {
            let filteredBooks = window.APP_DATA.MOCK_BOOKS;
            
            if (query) {
                filteredBooks = window.APP_DATA.MOCK_BOOKS.filter(book => 
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
        
        setTimeout(() => {
            let filteredBooks = window.APP_DATA.MOCK_BOOKS;
            if (genre && genre !== 'Все жанры') {
                filteredBooks = window.APP_DATA.MOCK_BOOKS.filter(book => book.genre === genre);
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
    
    container.innerHTML = books.map(book => {
        const isFavorite = userData.favorites.includes(book.id);
        const isBorrowed = userData.borrowedBooks.some(b => b.bookId === book.id && b.status === 'active');
        
        return `
        <div class="book-card" onclick="showBookDetails(${book.id})">
            <div class="book-header">
                <div class="book-cover">
                    <div class="book-icon">${book.icon || '📚'}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(book.title)}</div>
                    <div class="book-author">👤 ${escapeHtml(book.author)}</div>
                    <div class="book-meta">📅 ${book.year} год</div>
                    <div class="book-meta">🏷️ ${book.genre}</div>
                    <div class="book-meta">📄 ${book.pages} стр.</div>
                    <div class="book-rating-small">
                        <span class="stars">${createRatingStars(book.rating)}</span>
                        <span class="rating-value">${book.rating}</span>
                        <span class="reviews-count">(${book.reviewsCount})</span>
                    </div>
                    <div class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                        ${book.available ? '✅ Доступна' : '❌ Выдана'}
                    </div>
                </div>
            </div>
            <div class="book-actions">
                <button 
                    class="borrow-btn" 
                    onclick="event.stopPropagation(); borrowBook(${book.id})"
                    ${!book.available || isBorrowed ? 'disabled' : ''}
                >
                    ${isBorrowed ? '📖 Уже у вас' : (book.available ? '📚 Забронировать' : 'Недоступна')}
                </button>
                <button 
                    class="favorite-btn ${isFavorite ? 'favorite-active' : ''}" 
                    onclick="event.stopPropagation(); toggleFavorite(${book.id})"
                >
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>
        </div>
        `;
    }).join('');
    
    updateBooksCount(books.length);
}

// Показать детали книги
async function showBookDetails(bookId) {
    try {
        showLoading(true);
        
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === bookId);
        if (!book) throw new Error('Книга не найдена');
        
        const isFavorite = userData.favorites.includes(book.id);
        const isBorrowed = userData.borrowedBooks.some(b => b.bookId === book.id && b.status === 'active');
        const bookReviews = window.STORAGE.getBookReviews(bookId);
        const userHasReviewed = userData.myReviews.some(review => review.bookId === bookId);
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-details">
                <div class="book-cover-large">
                    <div class="book-icon">${book.icon || '📚'}</div>
                </div>
                <div class="book-info-detailed">
                    <h4>${escapeHtml(book.title)}</h4>
                    <p><strong>Автор:</strong> ${escapeHtml(book.author)}</p>
                    <p><strong>Год издания:</strong> ${book.year}</p>
                    <p><strong>Жанр:</strong> ${book.genre}</p>
                    <p><strong>ISBN:</strong> ${book.isbn || 'Не указан'}</p>
                    <p><strong>Страниц:</strong> ${book.pages}</p>
                    
                    <div class="book-rating-detailed">
                        <strong>Рейтинг:</strong>
                        <div class="rating-display">
                            <span class="stars">${createRatingStars(book.rating)}</span>
                            <span class="rating-value">${book.rating}/5</span>
                            <span class="reviews-count">на основе ${book.reviewsCount} отзывов</span>
                        </div>
                    </div>
                    
                    <p><strong>Статус:</strong> 
                        <span class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                            ${isBorrowed ? '📖 У вас' : (book.available ? '✅ Доступна' : '❌ Выдана')}
                        </span>
                    </p>
                    <div class="book-description">
                        <strong>Описание:</strong>
                        <p>${escapeHtml(book.description || 'Описание отсутствует.')}</p>
                    </div>
                    
                    <!-- Отзывы -->
                    <div class="reviews-section">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h5>💬 Отзывы читателей (${bookReviews.length})</h5>
                            ${!userHasReviewed ? `
                                <button class="add-review-btn" onclick="openReviewModal(${book.id})">
                                    ✍️ Написать отзыв
                                </button>
                            ` : ''}
                        </div>
                        <div class="reviews-list">
                            ${bookReviews.length > 0 ? bookReviews.map(review => `
                                <div class="review-item">
                                    <div class="review-header">
                                        <div class="review-user">${review.userAvatar} ${review.userName}</div>
                                        <div class="review-rating">${createRatingStars(review.rating)}</div>
                                    </div>
                                    <div class="review-comment">${escapeHtml(review.comment)}</div>
                                    <div class="review-footer">
                                        <span class="review-date">${formatReviewDate(review.date)}</span>
                                        <button class="like-review-btn" onclick="event.stopPropagation(); likeReview(${review.id})">
                                            ❤️ ${review.likes}
                                        </button>
                                    </div>
                                </div>
                            `).join('') : `
                                <div class="no-reviews">
                                    <p>Пока нет отзывов. Будьте первым!</p>
                                    <button class="add-review-btn" onclick="openReviewModal(${book.id})">
                                        ✍️ Написать отзыв
                                    </button>
                                </div>
                            `}
                        </div>
                    </div>
                    
                    ${book.readLink ? `
                    <div class="read-section" style="margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border-color);">
                        <a href="${book.readLink}" target="_blank" class="read-btn">
                            📖 Читать книгу онлайн
                        </a>
                        <p style="font-size: 0.8em; color: var(--text-light); margin-top: 5px;">
                            Откроется в новом окне
                        </p>
                    </div>
                    ` : ''}
                </div>
            </div>
            <div class="modal-actions">
                <button 
                    class="borrow-btn" 
                    onclick="borrowBook(${book.id})"
                    ${!book.available || isBorrowed ? 'disabled' : ''}
                    style="flex: 1; margin-right: 10px;"
                >
                    ${isBorrowed ? '📖 Уже у вас' : (book.available ? '📚 Забронировать' : 'Недоступна')}
                </button>
                <button 
                    class="favorite-btn ${isFavorite ? 'favorite-active' : ''}" 
                    onclick="toggleFavorite(${book.id})"
                    style="padding: 12px;"
                >
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>
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

// Система отзывов и рейтингов
function openReviewModal(bookId) {
    currentReviewBookId = bookId;
    selectedRating = 0;
    
    document.getElementById('reviewComment').value = '';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('ratingText').textContent = 'Выберите оценку';
    document.querySelector('.submit-btn').disabled = true;
    
    document.querySelectorAll('.star').forEach(star => {
        star.textContent = '☆';
        star.classList.remove('active');
    });
    
    document.getElementById('reviewModal').classList.remove('hidden');
    tg.BackButton.show();
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.add('hidden');
    tg.BackButton.hide();
}

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '⭐';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
    
    const ratingTexts = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
    ratingText.textContent = ratingTexts[rating - 1] || 'Выберите оценку';
    
    updateSubmitButton();
}

function updateCharCount() {
    const textarea = document.getElementById('reviewComment');
    const charCount = document.getElementById('charCount');
    charCount.textContent = textarea.value.length;
    updateSubmitButton();
}

function updateSubmitButton() {
    const submitBtn = document.querySelector('.submit-btn');
    const hasRating = selectedRating > 0;
    const hasComment = document.getElementById('reviewComment').value.trim().length > 0;
    submitBtn.disabled = !(hasRating && hasComment);
}

function submitReview() {
    if (!currentReviewBookId || !selectedRating) return;
    
    const comment = document.getElementById('reviewComment').value.trim();
    const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === currentReviewBookId);
    
    if (!book) return;
    
    const newReview = {
        id: Date.now(),
        userName: userData.name,
        bookTitle: book.title,
        bookId: currentReviewBookId,
        rating: selectedRating,
        comment: comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        userAvatar: userData.avatar || '👤'
    };
    
    window.STORAGE.addNewReview(newReview);
    
    userData.myReviews.unshift({
        ...newReview,
        id: Date.now() + 1
    });
    userData.stats.reviewsWritten = userData.myReviews.length;
    
    window.STORAGE.saveAllData(userData);
    
    tg.showPopup({
        title: 'Отзыв добавлен! ★',
        message: 'Ваш отзыв успешно опубликован',
        buttons: [{ type: 'ok' }]
    });
    
    closeReviewModal();
    updateMyReviewsList();
    
    if (!document.getElementById('bookModal').classList.contains('hidden')) {
        showBookDetails(currentReviewBookId);
    }
}

function likeReview(reviewId) {
    const newLikes = window.STORAGE.likeReview(reviewId);
    if (newLikes > 0) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.title === modalTitle);
        if (book) {
            showBookDetails(book.id);
        }
        tg.showAlert('Спасибо за ваш лайк! ❤️');
    }
}

// Система тем
function toggleTheme() {
    const currentTheme = userData.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    userData.theme = newTheme;
    window.STORAGE.saveAllData(userData);
    applyTheme(newTheme);
    
    tg.showPopup({
        title: 'Тема изменена',
        message: `Переключено на ${newTheme === 'light' ? 'светлую' : 'тёмную'} тему`,
        buttons: [{ type: 'ok' }]
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeConfig = theme === 'light' ? window.APP_DATA.THEMES.LIGHT : window.APP_DATA.THEMES.DARK;
    
    document.documentElement.style.setProperty('--bg-primary', themeConfig.bg);
    document.documentElement.style.setProperty('--text-primary', themeConfig.text);
    document.documentElement.style.setProperty('--bg-card', themeConfig.card);
    document.documentElement.style.setProperty('--border-primary', themeConfig.border);
    document.documentElement.style.setProperty('--primary-color', themeConfig.primary);
    document.documentElement.style.setProperty('--secondary-color', themeConfig.secondary);
    document.documentElement.style.setProperty('--accent-color', themeConfig.accent);
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

function initializeTheme() {
    const savedTheme = window.STORAGE.loadTheme();
    userData.theme = savedTheme;
    applyTheme(savedTheme);
}

// Бронирование книги
async function borrowBook(bookId) {
    try {
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === bookId);
        if (book && book.available) {
            book.available = false;
            window.STORAGE.saveAllData(userData);
            
            const borrowRecord = {
                id: Date.now(),
                bookId: book.id,
                bookTitle: book.title,
                borrowDate: new Date().toISOString().split('T')[0],
                returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'active'
            };
            
            userData.borrowedBooks.push(borrowRecord);
            userData.stats.totalBooks++;
            userData.stats.activeBorrows++;
            
            window.APP_DATA.MOCK_STATS.availableBooks--;
            window.APP_DATA.MOCK_STATS.borrowedBooks++;
            
            tg.showPopup({
                title: 'Успех! 🎉',
                message: `Книга "${book.title}" успешно забронирована!\nВерните до ${formatDate(borrowRecord.returnDate)}`,
                buttons: [{ type: 'ok' }]
            });
            
            updateBooksDisplay(currentBooks);
            updateStats(window.APP_DATA.MOCK_STATS);
            updateUserProfile();
            renderWeeklyBooks();
            renderBookOfDay();
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

// Возврат книги
function returnBook(bookId) {
    const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === bookId);
    const borrowIndex = userData.borrowedBooks.findIndex(b => b.bookId === bookId && b.status === 'active');
    
    if (book && borrowIndex !== -1) {
        book.available = true;
        userData.borrowedBooks[borrowIndex].status = 'returned';
        
        userData.history.unshift({
            ...userData.borrowedBooks[borrowIndex],
            status: 'returned'
        });
        
        userData.stats.activeBorrows--;
        userData.stats.totalRead++;
        
        window.APP_DATA.MOCK_STATS.availableBooks++;
        window.APP_DATA.MOCK_STATS.borrowedBooks--;
        
        window.STORAGE.saveAllData(userData);
        
        tg.showPopup({
            title: 'Книга возвращена! 📚',
            message: `"${book.title}" успешно возвращена в библиотеку`,
            buttons: [{ type: 'ok' }]
        });
        
        updateBooksDisplay(currentBooks);
        updateStats(window.APP_DATA.MOCK_STATS);
        updateUserProfile();
        renderWeeklyBooks();
        renderBookOfDay();
    }
}

// Добавить/удалить из избранного
function toggleFavorite(bookId) {
    const favoriteIndex = userData.favorites.indexOf(bookId);
    
    if (favoriteIndex === -1) {
        userData.favorites.push(bookId);
        tg.showPopup({
            title: 'Добавлено в избранное ★',
            message: 'Книга добавлена в ваш список избранных',
            buttons: [{ type: 'ok' }]
        });
    } else {
        userData.favorites.splice(favoriteIndex, 1);
        tg.showPopup({
            title: 'Удалено из избранного',
            message: 'Книга удалена из вашего списка избранных',
            buttons: [{ type: 'ok' }]
        });
    }
    
    window.STORAGE.saveAllData(userData);
    
    updateBooksDisplay(currentBooks);
    updateUserProfile();
    
    if (!document.getElementById('bookModal').classList.contains('hidden')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.title === modalTitle);
        if (book) {
            showBookDetails(book.id);
        }
    }
}

// Удалить из избранного
function removeFavorite(bookId) {
    const favoriteIndex = userData.favorites.indexOf(bookId);
    if (favoriteIndex !== -1) {
        userData.favorites.splice(favoriteIndex, 1);
        updateUserProfile();
        window.STORAGE.saveAllData(userData);
        
        tg.showPopup({
            title: 'Удалено из избранного',
            message: 'Книга удалена из вашего списка избранных',
            buttons: [{ type: 'ok' }]
        });
    }
}

// Обновление профиля пользователя
function updateUserProfile() {
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userRegistration').textContent = `Зарегистрирован: ${userData.registrationDate}`;
    
    document.getElementById('userTotalBooks').textContent = userData.stats.totalBooks;
    document.getElementById('userFavorites').textContent = userData.favorites.length;
    document.getElementById('userReviewsCount').textContent = userData.myReviews.length;
    document.getElementById('activeBorrows').textContent = userData.stats.activeBorrows;
    document.getElementById('totalRead').textContent = userData.stats.totalRead;
    document.getElementById('readingTime').textContent = userData.stats.readingDays;
    document.getElementById('userReviewsWritten').textContent = userData.stats.reviewsWritten || 0;
    
    updateActiveBooksList();
    updateHistoryList();
    updateFavoritesList();
    updateMyReviewsList();
}

// Обновление списка активных книг
function updateActiveBooksList() {
    const activeBooksList = document.getElementById('activeBooksList');
    const activeBooks = userData.borrowedBooks.filter(b => b.status === 'active');
    
    document.getElementById('activeBooksCount').textContent = activeBooks.length;
    
    if (activeBooks.length === 0) {
        activeBooksList.innerHTML = `
            <div class="empty-profile">
                <div class="empty-icon">📚</div>
                <h4>Нет активных книг</h4>
                <p>Найдите интересные книги в каталоге</p>
            </div>
        `;
    } else {
        activeBooksList.innerHTML = activeBooks.map(borrow => `
            <div class="borrowed-book-item">
                <div class="book-info">
                    <div class="book-title">${borrow.bookTitle}</div>
                    <div class="borrow-dates">
                        <span>Взята: ${formatDate(borrow.borrowDate)}</span>
                        <span class="return-date">Вернуть до: ${formatDate(borrow.returnDate)}</span>
                    </div>
                </div>
                <button class="return-btn" onclick="event.stopPropagation(); returnBook(${borrow.bookId})">
                    🔄 Вернуть
                </button>
            </div>
        `).join('');
    }
}

// Обновление истории
function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    
    document.getElementById('historyCount').textContent = userData.history.length;
    
    if (userData.history.length === 0) {
        historyList.innerHTML = `
            <div class="empty-profile">
                <div class="empty-icon">🕐</div>
                <h4>История пуста</h4>
                <p>Здесь появятся ваши завершенные бронирования</p>
            </div>
        `;
    } else {
        historyList.innerHTML = userData.history.map(record => `
            <div class="history-item">
                <div class="history-info">
                    <div class="book-title">${record.bookTitle}</div>
                    <div class="history-dates">
                        <span>${formatDate(record.borrowDate)} - ${formatDate(record.returnDate)}</span>
                    </div>
                </div>
                <div class="history-status ${record.status === 'returned' ? 'status-returned' : 'status-expired'}">
                    ${record.status === 'returned' ? 'Возвращена' : 'Просрочена'}
                </div>
            </div>
        `).join('');
    }
}

// Обновление избранного
function updateFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    const favoriteBooks = window.APP_DATA.MOCK_BOOKS.filter(book => userData.favorites.includes(book.id));
    
    document.getElementById('favoritesCount').textContent = favoriteBooks.length;
    
    if (favoriteBooks.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-profile">
                <div class="empty-icon">⭐</div>
                <h4>Нет избранных книг</h4>
                <p>Добавляйте книги в избранное, нажимая на звездочку</p>
            </div>
        `;
    } else {
        favoritesList.innerHTML = favoriteBooks.map(book => `
            <div class="favorite-item" onclick="showBookDetails(${book.id})">
                <div class="favorite-info">
                    <div class="book-title">${book.title}</div>
                    <div class="favorite-author">${book.author}</div>
                </div>
                <button class="remove-favorite" onclick="event.stopPropagation(); removeFavorite(${book.id})">
                    ✕
                </button>
            </div>
        `).join('');
    }
}

// Обновление моих отзывов
function updateMyReviewsList() {
    const myReviewsList = document.getElementById('myReviewsList');
    const myReviewsCount = document.getElementById('myReviewsCount');
    
    myReviewsCount.textContent = userData.myReviews.length;
    
    if (userData.myReviews.length === 0) {
        myReviewsList.innerHTML = `
            <div class="empty-profile">
                <div class="empty-icon">💬</div>
                <h4>Нет отзывов</h4>
                <p>Поделитесь вашим мнением о прочитанных книгах</p>
            </div>
        `;
    } else {
        myReviewsList.innerHTML = userData.myReviews.map(review => `
            <div class="my-review-item" onclick="showBookDetails(${review.bookId})">
                <div class="my-review-header">
                    <div class="my-review-book">${escapeHtml(review.bookTitle)}</div>
                    <div class="my-review-rating">${createRatingStars(review.rating)}</div>
                </div>
                <div class="my-review-comment">${escapeHtml(review.comment)}</div>
                <div class="my-review-date">${formatReviewDate(review.date)}</div>
            </div>
        `).join('');
    }
}

// Функция для отображения животных Красной книги
function loadRedBookAnimals() {
    const container = document.getElementById('animalsContainer');
    const animals = window.APP_DATA.RED_BOOK_ANIMALS;
    
    document.getElementById('animalsCount').textContent = `${animals.length} животных`;
    
    container.innerHTML = animals.map(animal => `
        <div class="book-card" onclick="showAnimalDetails(${animal.id})">
            <div class="book-header">
                <div class="book-cover">
                    <div class="book-icon">🐾</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(animal.name)}</div>
                    <div class="book-author">${escapeHtml(animal.species)}</div>
                    <div class="book-meta">👥 ${animal.population}</div>
                    <div class="book-meta">🏞️ ${animal.habitat}</div>
                    <div class="book-status ${animal.status}">
                        ${getStatusText(animal.status)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Функция для показа деталей животного
function showAnimalDetails(animalId) {
    const animal = window.APP_DATA.RED_BOOK_ANIMALS.find(a => a.id === animalId);
    
    if (!animal) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="book-details">
            <div class="book-cover-large">
                <div class="book-icon">🐾</div>
            </div>
            <div class="book-info-detailed">
                <h4>${escapeHtml(animal.name)}</h4>
                <p><strong>Вид:</strong> <em>${escapeHtml(animal.species)}</em></p>
                <p><strong>Статус:</strong> 
                    <span class="book-status ${animal.status}">
                        ${getStatusText(animal.status)}
                    </span>
                </p>
                <p><strong>Популяция:</strong> ${animal.population}</p>
                <p><strong>Место обитания:</strong> ${animal.habitat}</p>
                
                <div class="book-description">
                    <strong>Описание:</strong>
                    <p>${escapeHtml(animal.description)}</p>
                </div>
                
                <div class="conservation-info">
                    <h5>🛡️ Меры охраны</h5>
                    <p>Вид охраняется в соответствии с законодательством Республики Беларусь. 
                       Запрещена охота, уничтожение мест обитания и любая деятельность, 
                       приводящая к сокращению численности вида.</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalTitle').textContent = animal.name;
    document.getElementById('bookModal').classList.remove('hidden');
    tg.BackButton.show();
}

// Вспомогательные функции
function populateGenreFilter(genres) {
    const genreFilter = document.getElementById('genreFilter');
    genreFilter.innerHTML = '<option value="Все жанры">Все жанры</option>' + 
        genres.filter(genre => genre !== 'Все жанры').map(genre => 
            `<option value="${genre}">${genre}</option>`
        ).join('');
}

function updateStats() {
    const stats = calculateStats();
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

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
}

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

function createRatingStars(rating) {
    return window.APP_DATA.RatingUtils.createStars(rating);
}

function getRandomBooks(count) {
    const shuffled = [...window.APP_DATA.MOCK_BOOKS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getStatusText(status) {
    const statusMap = {
        'endangered': 'На грани исчезновения',
        'vulnerable': 'Уязвимый',
        'rare': 'Редкий'
    };
    return statusMap[status] || status;
}

function calculateStats() {
    const books = window.APP_DATA.MOCK_BOOKS;
    return {
        totalBooks: books.length,
        availableBooks: books.filter(book => book.available).length,
        borrowedBooks: books.filter(book => !book.available).length,
        totalGenres: window.APP_DATA.MOCK_GENRES.length - 1
    };
}

function clearAllData() {
    if (confirm('Вы уверены, что хотите сбросить все данные? Это действие нельзя отменить.')) {
        window.STORAGE.clearAllData();
    }
}

// Экспортируем глобальные функции
window.searchBooks = searchBooks;
window.filterByGenre = filterByGenre;
window.showBookDetails = showBookDetails;
window.borrowBook = borrowBook;
window.returnBook = returnBook;
window.toggleFavorite = toggleFavorite;
window.removeFavorite = removeFavorite;
window.showSection = showSection;
window.closeModal = closeModal;
window.clearFilters = clearFilters;
window.likeReview = likeReview;
window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.setRating = setRating;
window.updateCharCount = updateCharCount;
window.submitReview = submitReview;
window.toggleTheme = toggleTheme;
window.loadRedBookAnimals = loadRedBookAnimals;
window.showAnimalDetails = showAnimalDetails;
window.clearAllData = clearAllData;