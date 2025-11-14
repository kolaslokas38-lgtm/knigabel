// Глобальные переменные
let currentBooks = [];
let currentSearchQuery = '';
let currentGenre = '';
let tg = null;
let userData = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeTelegramApp();
    loadInitialData();
    setupEventListeners();
});

// Инициализация Telegram Web App
function initializeTelegramApp() {
    // СНАЧАЛА загружаем сохраненные данные
    userData = window.STORAGE.loadAllData();
    
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
        tg.expand();
        tg.enableClosingConfirmation();
        tg.BackButton.onClick(handleBackButton);
        
        // Получаем данные пользователя из Telegram
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            const tgUser = tg.initDataUnsafe.user;
            userData.name = `${tgUser.first_name} ${tgUser.last_name || ''}`.trim();
            
            // Сохраняем ID пользователя для привязки данных
            userData.telegramId = tgUser.id;
            
            if (tgUser.photo_url) {
                document.getElementById('userAvatar').innerHTML = 
                    `<img src="${tgUser.photo_url}" alt="${userData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            } else {
                document.getElementById('userAvatar').querySelector('.avatar-placeholder').textContent = 
                    tgUser.first_name ? tgUser.first_name[0] : '👤';
            }
        }
        
        // Сохраняем данные при закрытии приложения
        tg.onEvent('viewportChanged', () => window.STORAGE.saveAllData(userData));
        tg.onEvent('closing', () => window.STORAGE.saveAllData(userData));
        
        console.log('Telegram Web App инициализирован, данные загружены');
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
            },
            onEvent: (event, callback) => console.log('Event listener:', event)
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

// Навигация по разделам
function showSection(sectionName) {
    // Скрыть все секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Скрыть/показать поиск
    document.getElementById('searchSection').classList.toggle('hidden', sectionName !== 'catalog');
    
    // Показать выбранную секцию
    document.getElementById(sectionName + 'Section').classList.add('active');
    
    // Обновить навигационные кнопки
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionName}')"]`).classList.add('active');
    
    // Если открыли профиль - обновить данные
    if (sectionName === 'profile') {
        updateProfileDisplay();
    }
}

// Загрузка начальных данных
async function loadInitialData() {
    try {
        showLoading(true);
        
        // Имитируем задержку сети
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
        
        // Fallback на mock данные
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
    
    // Выбираем 4 случайные книги для "Книг недели"
    const weeklyBooks = getRandomBooks(4);
    
    container.innerHTML = weeklyBooks.map(book => `
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
    
    // Выбираем случайную книгу для "Книги дня"
    const bookOfDay = getRandomBooks(1)[0];
    
    container.innerHTML = `
        <div class="book-of-day-card">
            <div class="book-of-day-badge">⭐ КНИГА ДНЯ</div>
            <div class="book-of-day-content">
                <div class="book-of-day-cover">
                    ${bookOfDay.cover ? 
                        `<img src="${bookOfDay.cover}" alt="${bookOfDay.title}" class="book-of-day-cover-img"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/100x150/4CAF50/white?text=📖';">` : 
                        `<div class="book-of-day-cover-placeholder">📖<br>${escapeHtml(bookOfDay.title)}</div>`
                    }
                </div>
                <div class="book-of-day-info">
                    <h3 class="book-of-day-title">${escapeHtml(bookOfDay.title)}</h3>
                    <p class="book-of-day-author">${escapeHtml(bookOfDay.author)}</p>
                    
                    <div class="book-of-day-rating">
                        <span class="stars">${createRatingStars(bookOfDay.rating)}</span>
                        <span class="rating-value">${bookOfDay.rating}/5</span>
                        <span class="reviews-count">${bookOfDay.reviewsCount} отзывов</span>
                    </div>
                    
                    <div class="book-of-day-meta">
                        <span class="meta-item">📅 ${bookOfDay.year} год</span>
                        <span class="meta-item">🏷️ ${bookOfDay.genre}</span>
                        <span class="meta-item">📄 ${bookOfDay.pages} стр.</span>
                    </div>
                    
                    <p class="book-of-day-description">${escapeHtml(bookOfDay.description)}</p>
                    
                    <div class="special-offer">
                        🎁 Сегодня при бронировании этой книги получаете 2 дополнительных дня чтения!
                    </div>
                </div>
            </div>
            <div class="book-of-day-actions">
                <button class="borrow-today-btn" onclick="borrowBook(${bookOfDay.id})">
                    📖 Забронировать книгу дня
                </button>
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
        
        // Mock поиск
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
        
        // Mock фильтрация
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
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" class="book-cover-img" 
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/80x120/4CAF50/white?text=📖';">` : 
                        `📖<br>${book.title.substring(0, 20)}${book.title.length > 20 ? '...' : ''}`
                    }
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
        
        if (!book) {
            throw new Error('Книга не найдена');
        }
        
        const isFavorite = userData.favorites.includes(book.id);
        const isBorrowed = userData.borrowedBooks.some(b => b.bookId === book.id && b.status === 'active');
        const bookReviews = window.APP_DATA.BOOK_REVIEWS.filter(review => review.bookId === bookId);
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-details">
                <div class="book-cover-large">
                    ${book.cover ? 
                        `<img src="${book.cover}" alt="${book.title}" class="book-cover-large-img"
                             onerror="this.onerror=null; this.src='https://via.placeholder.com/200x300/4CAF50/white?text=📖\\n${escapeHtml(book.title)}';">` : 
                        `<div class="book-cover-large-placeholder">📖<br>${escapeHtml(book.title)}</div>`
                    }
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
                        <h5>💬 Отзывы читателей (${bookReviews.length})</h5>
                        <div class="reviews-list">
                            ${bookReviews.length > 0 ? bookReviews.map(review => `
                                <div class="review-item">
                                    <div class="review-header">
                                        <div class="review-user">${review.userName}</div>
                                        <div class="review-rating">${createRatingStars(review.rating)}</div>
                                    </div>
                                    <div class="review-comment">${escapeHtml(review.comment)}</div>
                                    <div class="review-footer">
                                        <span class="review-date">${formatReviewDate(review.date)}</span>
                                        <button class="like-review-btn" onclick="likeReview(${review.id})">
                                            ❤️ ${review.likes}
                                        </button>
                                    </div>
                                </div>
                            `).join('') : `
                                <div class="no-reviews">
                                    <p>Пока нет отзывов. Будьте первым!</p>
                                    <button class="add-review-btn" onclick="addReview(${book.id})">
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

// Бронирование книги
async function borrowBook(bookId) {
    try {
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.id === bookId);
        if (book && book.available) {
            // Обновляем статус книги
            book.available = false;
            window.STORAGE.saveAllData(userData);
            
            // Добавляем в список пользователя
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
            
            // Обновляем статистику библиотеки
            window.APP_DATA.MOCK_STATS.availableBooks--;
            window.APP_DATA.MOCK_STATS.borrowedBooks++;
            
            tg.showPopup({
                title: 'Успех! 🎉',
                message: `Книга "${book.title}" успешно забронирована!\nВерните до ${formatDate(borrowRecord.returnDate)}`,
                buttons: [{ type: 'ok' }]
            });
            
            // Обновляем отображение
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
        // Обновляем статус книги
        book.available = true;
        userData.borrowedBooks[borrowIndex].status = 'returned';
        
        // Добавляем в историю
        userData.history.unshift({
            ...userData.borrowedBooks[borrowIndex],
            status: 'returned'
        });
        
        // Обновляем статистику
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
        
        // Обновляем отображение
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
        // Добавляем в избранное
        userData.favorites.push(bookId);
        tg.showPopup({
            title: 'Добавлено в избранное ★',
            message: 'Книга добавлена в ваш список избранных',
            buttons: [{ type: 'ok' }]
        });
    } else {
        // Удаляем из избранного
        userData.favorites.splice(favoriteIndex, 1);
        tg.showPopup({
            title: 'Удалено из избранного',
            message: 'Книга удалена из вашего списка избранных',
            buttons: [{ type: 'ok' }]
        });
    }
    
    window.STORAGE.saveAllData(userData);
    
    // Обновляем отображение
    updateBooksDisplay(currentBooks);
    updateUserProfile();
    
    // Если открыто модальное окно - обновляем его
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
    // Основная информация
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userRegistration').textContent = `Зарегистрирован: ${userData.registrationDate}`;
    
    // Статистика
    document.getElementById('userTotalBooks').textContent = userData.stats.totalBooks;
    document.getElementById('userFavorites').textContent = userData.favorites.length;
    document.getElementById('activeBorrows').textContent = userData.stats.activeBorrows;
    document.getElementById('totalRead').textContent = userData.stats.totalRead;
    document.getElementById('readingTime').textContent = userData.stats.readingDays;
    
    // Активные книги
    updateActiveBooksList();
    
    // История
    updateHistoryList();
    
    // Избранное
    updateFavoritesList();
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
                <button class="return-btn" onclick="returnBook(${borrow.bookId})">
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

// Новые функции для рейтингов и отзывов
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

function getRandomBooks(count) {
    const shuffled = [...window.APP_DATA.MOCK_BOOKS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function likeReview(reviewId) {
    const review = window.APP_DATA.BOOK_REVIEWS.find(r => r.id === reviewId);
    if (review) {
        review.likes++;
        // Обновляем отображение в модальном окне
        const modalTitle = document.getElementById('modalTitle').textContent;
        const book = window.APP_DATA.MOCK_BOOKS.find(b => b.title === modalTitle);
        if (book) {
            showBookDetails(book.id);
        }
        tg.showAlert('Спасибо за ваш лайк! ❤️');
    }
}

function addReview(bookId) {
    tg.showPopup({
        title: 'Написать отзыв',
        message: 'Функция добавления отзывов скоро будет доступна!',
        buttons: [{ type: 'ok' }]
    });
}
// Функция для отображения животных Красной книги
function loadRedBookAnimals() {
    const container = document.getElementById('animalsContainer');
    const animals = window.APP_DATA.RED_BOOK_ANIMALS;
    
    document.getElementById('animalsCount').textContent = `${animals.length} животных`;
    
    container.innerHTML = animals.map(animal => `
        <div class="animal-card" onclick="showAnimalDetails(${animal.id})">
            <div class="animal-image">
                ${animal.image ? 
                    `<img src="${animal.image}" alt="${animal.name}" class="animal-img"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/200x150/4CAF50/white?text=🐾';">` : 
                    `<div class="animal-image-placeholder">🐾</div>`
                }
                <div class="animal-status ${animal.status}">
                    ${getStatusText(animal.status)}
                </div>
            </div>
            <div class="animal-info">
                <h3 class="animal-name">${escapeHtml(animal.name)}</h3>
                <p class="animal-species">${escapeHtml(animal.species)}</p>
                <p class="animal-description">${escapeHtml(animal.description.substring(0, 100))}...</p>
                <div class="animal-meta">
                    <span class="meta-item">👥 ${animal.population}</span>
                    <span class="meta-item">🏞️ ${animal.habitat}</span>
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
        <div class="animal-details">
            <div class="animal-image-large">
                ${animal.image ? 
                    `<img src="${animal.image}" alt="${animal.name}" class="animal-img-large"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/4CAF50/white?text=🐾';">` : 
                    `<div class="animal-image-large-placeholder">🐾<br>${escapeHtml(animal.name)}</div>`
                }
            </div>
            <div class="animal-info-detailed">
                <h4>${escapeHtml(animal.name)}</h4>
                <p><strong>Вид:</strong> <em>${escapeHtml(animal.species)}</em></p>
                <p><strong>Статус:</strong> 
                    <span class="animal-status ${animal.status}">
                        ${getStatusText(animal.status)}
                    </span>
                </p>
                <p><strong>Популяция:</strong> ${animal.population}</p>
                <p><strong>Место обитания:</strong> ${animal.habitat}</p>
                
                <div class="animal-description-detailed">
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

// Функция для получения текста статуса
function getStatusText(status) {
    const statusMap = {
        'endangered': 'На грани исчезновения',
        'vulnerable': 'Уязвимый',
        'rare': 'Редкий'
    };
    return statusMap[status] || status;
}

// Обновите функцию showSection для загрузки животных при переходе на вкладку
function showSection(sectionName) {
    // Скрыть все секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Скрыть/показать поиск
    document.getElementById('searchSection').classList.toggle('hidden', sectionName !== 'catalog');
    
    // Показать выбранную секцию
    document.getElementById(sectionName + 'Section').classList.add('active');
    
    // Обновить навигационные кнопки
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionName}')"]`).classList.add('active');
    
    // Если открыли профиль - обновить данные
    if (sectionName === 'profile') {
        updateProfileDisplay();
    }
    
    // Если открыли Красную книгу - загрузить животных
    if (sectionName === 'redbook') {
        loadRedBookAnimals();
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
window.addReview = addReview;