// Конфигурация
const CONFIG = {
    USE_MOCK_DATA: true
};

// Данные для Красной книги Беларуси
const RED_BOOK_ANIMALS = [
    {
        id: 1,
        name: "Зубр",
        latinName: "Bison bonasus",
        status: "vulnerable",
        description: "Крупнейшее наземное млекопитающее Европы. Символ Беларуси. Восстановлен благодаря программе реинтродукции.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/European_bison_photo.jpg/800px-European_bison_photo.jpg",
        population: "~2000 особей",
        habitat: "Беловежская пуща, другие заповедники"
    },
    {
        id: 2,
        name: "Рысь",
        latinName: "Lynx lynx",
        status: "rare",
        description: "Крупная хищная кошка. Обитает в глухих лесах. Ведут одиночный образ жизни.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/800px-Lynx_lynx2.jpg",
        population: "~500 особей",
        habitat: "Леса северной и центральной Беларуси"
    },
    {
        id: 3,
        name: "Чёрный аист",
        latinName: "Ciconia nigra",
        status: "endangered",
        description: "Редкая птица, более осторожная чем белый аист. Гнездится в глухих лесах near водоёмов.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Black_Stork_%28Ciconia_nigra%29.jpg/800px-Black_Stork_%28Ciconia_nigra%29.jpg",
        population: "~400 пар",
        habitat: "Заболоченные леса"
    },
    {
        id: 4,
        name: "Беркут",
        latinName: "Aquila chrysaetos",
        status: "endangered",
        description: "Крупный орёл, мощный хищник. Размах крыльев до 2,5 метров.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Golden_Eagle_in_flight_2.jpg/800px-Golden_Eagle_in_flight_2.jpg",
        population: "~30 пар",
        habitat: "Лесистые районы с открытыми пространствами"
    },
    {
        id: 5,
        name: "Бурый медведь",
        latinName: "Ursus arctos",
        status: "endangered",
        description: "Крупный хищник, сохранился только в самых глухих уголках страны.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/800px-2010-kodiak-bear-1.jpg",
        population: "~100 особей",
        habitat: "Беловежская пуща"
    },
    {
        id: 6,
        name: "Выдра",
        latinName: "Lutra lutra",
        status: "vulnerable",
        description: "Хищное млекопитающее, отличный пловец. Обитает near чистых рек и озёр.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lutra_lutra2.jpg/800px-Lutra_lutra2.jpg",
        population: "~2000 особей",
        habitat: "Реки и озёра по всей стране"
    },
    {
        id: 7,
        name: "Барсук",
        latinName: "Meles meles",
        status: "rare",
        description: "Крупный представитель куньих. Строит сложные подземные норы.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Meles_meles.jpg/800px-Meles_meles.jpg",
        population: "~5000 особей",
        habitat: "Леса по всей территории"
    },
    {
        id: 8,
        name: "Филин",
        latinName: "Bubo bubo",
        status: "rare",
        description: "Крупнейшая сова Европы. Ночной хищник с великолепным слухом.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eagle_Owl.jpg/800px-Eagle_Owl.jpg",
        population: "~200 пар",
        habitat: "Глухие леса, скалистые местности"
    },
    {
        id: 9,
        name: "Волк",
        latinName: "Canis lupus",
        status: "vulnerable",
        description: "Крупный хищник, играет важную роль в экосистеме.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/800px-Kolm%C3%A5rden_Wolf.jpg",
        population: "~1500 особей",
        habitat: "Леса по всей стране"
    },
    {
        id: 10,
        name: "Лось",
        latinName: "Alces alces",
        status: "vulnerable",
        description: "Крупнейший представитель оленевых. Обитает в лесах и болотах.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/800px-Moose_superior.jpg",
        population: "~10000 особей",
        habitat: "Леса и болотистые местности"
    },
    {
        id: 11,
        name: "Орлан-белохвост",
        latinName: "Haliaeetus albicilla",
        status: "rare",
        description: "Крупная хищная птица, обитает near водоёмов.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/White-tailed_Eagle_-_Haliaeetus_albicilla_%28cropped%29.jpg/800px-White-tailed_Eagle_-_Haliaeetus_albicilla_%28cropped%29.jpg",
        population: "~100 пар",
        habitat: "Побережья крупных озёр и рек"
    },
    {
        id: 12,
        name: "Серый журавль",
        latinName: "Grus grus",
        status: "vulnerable",
        description: "Крупная перелётная птица, известная своими танцами.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Grus_grus_1_%28Lukasz_Lukasik%29.jpg/800px-Grus_grus_1_%28Lukasz_Lukasik%29.jpg",
        population: "~2000 пар",
        habitat: "Болота и заболоченные леса"
    },
    {
        id: 13,
        name: "Бобр",
        latinName: "Castor fiber",
        status: "vulnerable",
        description: "Крупный грызун, известный своими плотинами.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Beaver_pho34.jpg/800px-Beaver_pho34.jpg",
        population: "~50000 особей",
        habitat: "Реки и озёра"
    },
    {
        id: 14,
        name: "Косуля",
        latinName: "Capreolus capreolus",
        status: "rare",
        description: "Небольшой олень, обитатель лесов и полей.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Roe_deer.jpg/800px-Roe_deer.jpg",
        population: "~80000 особей",
        habitat: "Леса и лесостепи"
    },
    {
        id: 15,
        name: "Ушастая сова",
        latinName: "Asio otus",
        status: "vulnerable",
        description: "Среднего размера сова с характерными 'ушками'.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Asio_otus_-_Long-eared_Owl_XC109273.mp3.jpg/800px-Asio_otus_-_Long-eared_Owl_XC109273.mp3.jpg",
        population: "~1000 пар",
        habitat: "Леса и парки"
    },
    {
        id: 16,
        name: "Зелёный дятел",
        latinName: "Picus viridis",
        status: "rare",
        description: "Крупный дятел с зелёным оперением.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Groene_specht.jpg/800px-Groene_specht.jpg",
        population: "~500 пар",
        habitat: "Старые лиственные леса"
    },
    {
        id: 17,
        name: "Гадюка обыкновенная",
        latinName: "Vipera berus",
        status: "vulnerable",
        description: "Единственная ядовитая змея Беларуси.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vipera_berus_%281%29.jpg/800px-Vipera_berus_%281%29.jpg",
        population: "~10000 особей",
        habitat: "Леса, болота, луга"
    },
    {
        id: 18,
        name: "Жук-олень",
        latinName: "Lucanus cervus",
        status: "endangered",
        description: "Крупный жук с характерными 'рогами' у самцов.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Male_stag_beetle_%28cropped%29.jpg/800px-Male_stag_beetle_%28cropped%29.jpg",
        population: "~1000 особей",
        habitat: "Старые дубравы"
    },
    {
        id: 19,
        name: "Белый аист",
        latinName: "Ciconia ciconia",
        status: "vulnerable",
        description: "Символ Беларуси, гнездится near человеческого жилья.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wei%C3%9Fstorch_%28Ciconia_ciconia%29.jpg/800px-Wei%C3%9Fstorch_%28Ciconia_ciconia%29.jpg",
        population: "~20000 пар",
        habitat: "Сельская местность"
    },
    {
        id: 20,
        name: "Обыкновенная гагара",
        latinName: "Gavia immer",
        status: "rare",
        description: "Крупная водоплавающая птица, отличный ныряльщик.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Common_Loon_%2871516%29.jpg/800px-Common_Loon_%2871516%29.jpg",
        population: "~50 пар",
        habitat: "Крупные озёра"
    }
];

// Mock данные книг
const MOCK_BOOKS = [
    // ... (все предыдущие 25 книг остаются без изменений)
    // Для экономии места оставляю структуру, ты можешь вставить свои 25 книг
];

const MOCK_GENRES = [
    "Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика", 
    "Роман в стихах", "Реализм", "Поэма", "Социально-психологический роман",
    "Философский роман", "Исторический роман", "Драма", "Комедия", 
    "Сатирический роман", "Политический роман", "Повести", "Философская сказка",
    "Антиутопия"
];

// Глобальные переменные
let currentBooks = [];
let currentSearchQuery = '';
let currentGenre = '';
let tg = null;

// Данные пользователя
let userData = {
    name: 'Пользователь',
    avatar: '👤',
    registrationDate: new Date().toLocaleDateString('ru-RU'),
    borrowedBooks: [
        {
            id: 1,
            bookId: 3,
            bookTitle: "Мастер и Маргарита",
            borrowDate: "2024-01-10",
            returnDate: "2024-01-24",
            status: "active"
        }
    ],
    history: [
        {
            id: 1,
            bookId: 1,
            bookTitle: "Война и мир",
            borrowDate: "2023-12-01",
            returnDate: "2023-12-15",
            status: "returned"
        },
        {
            id: 2,
            bookId: 2,
            bookTitle: "Преступление и наказание",
            borrowDate: "2023-11-15",
            returnDate: "2023-11-29",
            status: "returned"
        }
    ],
    favorites: [1, 2],
    reviews: [
        { bookId: 1, bookTitle: "Война и мир", rating: 5, text: "Одна из лучших книг в моей жизни!", date: "2024-01-05" },
        { bookId: 2, bookTitle: "Преступление и наказание", rating: 4, text: "Сильное произведение, заставляет задуматься.", date: "2023-12-20" }
    ],
    stats: {
        totalBooks: 3,
        activeBorrows: 1,
        totalRead: 2,
        readingDays: 45
    }
};

// Социальные данные
let bookReviews = {
    1: [
        { userId: 1, userName: "Анна", rating: 5, text: "Великолепная книга! Перечитываю каждый год.", date: "2024-01-15", likes: 12 },
        { userId: 2, userName: "Михаил", rating: 4, text: "Классика, которую должен прочитать каждый.", date: "2024-01-10", likes: 8 }
    ],
    2: [
        { userId: 3, userName: "Екатерина", rating: 5, text: "Потрясающая глубина психологического анализа.", date: "2024-01-12", likes: 15 }
    ],
    3: [
        { userId: 4, userName: "Дмитрий", rating: 5, text: "Мистика, философия и юмор - идеальное сочетание!", date: "2024-01-08", likes: 20 }
    ]
};

let popularBooks = [
    { id: 3, title: "Мастер и Маргарита", author: "Михаил Булгаков", rating: 4.8, reviews: 45 },
    { id: 1, title: "Война и мир", author: "Лев Толстой", rating: 4.7, reviews: 38 },
    { id: 2, title: "Преступление и наказание", author: "Федор Достоевский", rating: 4.6, reviews: 42 },
    { id: 7, title: "Анна Каренина", author: "Лев Толстой", rating: 4.5, reviews: 35 },
    { id: 10, title: "Братья Карамазовы", author: "Федор Достоевский", rating: 4.4, reviews: 28 }
];

// Книга дня и недели
let featuredBooks = {
    bookOfDay: {
        id: 3,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        description: "Мистический роман о визите дьявола в Москву 1930-х годов. Шедевр русской литературы, сочетающий философию, сатиру и мистику.",
        cover: "https://cv5.litres.ru/pub/c/cover_415/17829610.jpg"
    },
    weeklyBooks: [
        { id: 1, title: "Война и мир", author: "Лев Толстой", rating: 4.7, cover: "https://cv6.litres.ru/pub/c/cover_415/66809843.jpg" },
        { id: 2, title: "Преступление и наказание", author: "Федор Достоевский", rating: 4.6, cover: "https://cv0.litres.ru/pub/c/cover_415/10235628.jpg" },
        { id: 4, title: "Евгений Онегин", author: "Александр Пушкин", rating: 4.5, cover: "https://cv8.litres.ru/pub/c/cover_415/69495660.jpg" },
        { id: 5, title: "Тихий Дон", author: "Михаил Шолохов", rating: 4.4, cover: "https://cv5.litres.ru/pub/c/cover_415/10321963.jpg" },
        { id: 8, title: "Мёртвые души", author: "Николай Гоголь", rating: 4.3, cover: "https://cv5.litres.ru/pub/c/cover_415/10235746.jpg" }
    ]
};

// Рассчитываем статистику
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: MOCK_BOOKS.filter(book => !book.available).length,
    totalGenres: MOCK_GENRES.length - 1
};

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
        
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            const tgUser = tg.initDataUnsafe.user;
            userData.name = `${tgUser.first_name} ${tgUser.last_name || ''}`.trim();
            
            if (tgUser.photo_url) {
                document.getElementById('userAvatar').innerHTML = 
                    `<img src="${tgUser.photo_url}" alt="${userData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            } else {
                document.getElementById('userAvatar').querySelector('.avatar-placeholder').textContent = 
                    tgUser.first_name ? tgUser.first_name[0] : '👤';
            }
        }
        
        console.log('Telegram Web App инициализирован');
    } else {
        tg = {
            showPopup: (params) => alert(params.title + ": " + params.message),
            showAlert: (message) => alert(message),
            BackButton: {
                show: () => console.log('BackButton show'),
                hide: () => console.log('BackButton hide'),
                onClick: (cb) => console.log('BackButton onClick')
            }
        };
    }
}

function handleBackButton() {
    if (document.getElementById('bookModal').classList.contains('hidden') && 
        document.getElementById('animalModal').classList.contains('hidden')) {
        tg.close();
    } else {
        closeModal();
        closeAnimalModal();
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
    
    document.getElementById('animalModal').addEventListener('click', function(e) {
        if (e.target === this) closeAnimalModal();
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
        updateUserProfile();
    } else if (sectionName === 'redbook') {
        updateRedBookDisplay();
    }
}

// Загрузка начальных данных
async function loadInitialData() {
    try {
        showLoading(true);
        
        setTimeout(() => {
            updateBooksDisplay(MOCK_BOOKS);
            populateGenreFilter(MOCK_GENRES);
            updateStats(MOCK_STATS);
            updateFeaturedBooks();
            updateUserProfile();
            showLoading(false);
        }, 800);
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные');
        
        updateBooksDisplay(MOCK_BOOKS);
        populateGenreFilter(MOCK_GENRES);
        updateStats(MOCK_STATS);
        updateFeaturedBooks();
        updateUserProfile();
        showLoading(false);
    }
}

// Обновление featured книг
function updateFeaturedBooks() {
    // Книга дня
    const bookOfDay = featuredBooks.bookOfDay;
    const bookOfDayElement = document.getElementById('bookOfDay');
    bookOfDayElement.innerHTML = `
        <img src="${bookOfDay.cover}" alt="${bookOfDay.title}" class="book-of-day-cover"
             onerror="this.src='https://via.placeholder.com/120x180/4CAF50/white?text=📖'">
        <div class="book-of-day-info">
            <div class="book-of-day-badge">📖 Книга дня</div>
            <div class="book-of-day-title">${bookOfDay.title}</div>
            <div class="book-of-day-author">${bookOfDay.author}</div>
            <div class="book-of-day-description">${bookOfDay.description}</div>
            <button class="borrow-btn" onclick="showBookDetails(${bookOfDay.id})" style="margin-top: 15px;">
                Подробнее
            </button>
        </div>
    `;

    // Книги недели
    const weeklyBooksElement = document.getElementById('weeklyBooks');
    weeklyBooksElement.innerHTML = featuredBooks.weeklyBooks.map(book => `
        <div class="weekly-book" onclick="showBookDetails(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="weekly-book-cover"
                 onerror="this.src='https://via.placeholder.com/80x120/4CAF50/white?text=📖'">
            <div class="weekly-book-title">${book.title}</div>
            <div class="weekly-book-author">${book.author}</div>
            <div class="weekly-book-rating">★ ${book.rating}</div>
        </div>
    `).join('');
}

// Обновление Красной книги
function updateRedBookDisplay() {
    const animalsContainer = document.getElementById('animalsContainer');
    const endangeredCount = RED_BOOK_ANIMALS.filter(a => a.status === 'endangered').length;
    const rareCount = RED_BOOK_ANIMALS.filter(a => a.status === 'rare').length;
    
    document.getElementById('totalAnimals').textContent = RED_BOOK_ANIMALS.length;
    document.getElementById('endangeredCount').textContent = endangeredCount;
    document.getElementById('rareCount').textContent = rareCount;
    
    animalsContainer.innerHTML = RED_BOOK_ANIMALS.map(animal => {
        const statusText = {
            'endangered': 'Исчезающий',
            'rare': 'Редкий', 
            'vulnerable': 'Уязвимый'
        }[animal.status];
        
        const statusClass = {
            'endangered': 'status-endangered',
            'rare': 'status-rare',
            'vulnerable': 'status-vulnerable'
        }[animal.status];
        
        return `
            <div class="animal-card" onclick="showAnimalDetails(${animal.id})">
                <img src="${animal.image}" alt="${animal.name}" class="animal-image"
                     onerror="this.src='https://via.placeholder.com/300x200/4CAF50/white?text=🦌'">
                <div class="animal-name">${animal.name}</div>
                <div class="animal-latin">${animal.latinName}</div>
                <div class="animal-status ${statusClass}">${statusText}</div>
                <div class="animal-description">${animal.description}</div>
            </div>
        `;
    }).join('');
}

// Показать детали животного
function showAnimalDetails(animalId) {
    const animal = RED_BOOK_ANIMALS.find(a => a.id === animalId);
    if (!animal) return;
    
    const statusText = {
        'endangered': 'Исчезающий',
        'rare': 'Редкий',
        'vulnerable': 'Уязвимый'
    }[animal.status];
    
    const statusClass = {
        'endangered': 'status-endangered',
        'rare': 'status-rare', 
        'vulnerable': 'status-vulnerable'
    }[animal.status];
    
    document.getElementById('animalModalTitle').textContent = animal.name;
    document.getElementById('animalModalBody').innerHTML = `
        <div class="animal-details">
            <img src="${animal.image}" alt="${animal.name}" class="animal-detail-image"
                 onerror="this.src='https://via.placeholder.com/400x300/4CAF50/white?text=🦌'">
            <div class="animal-detail-info">
                <div class="animal-detail-name">${animal.name}</div>
                <div class="animal-detail-latin">${animal.latinName}</div>
                <div class="animal-status ${statusClass}">${statusText}</div>
                
                <div class="animal-detail-section">
                    <h4>Описание</h4>
                    <p>${animal.description}</p>
                </div>
                
                <div class="animal-detail-section">
                    <h4>Популяция</h4>
                    <p>${animal.population}</p>
                </div>
                
                <div class="animal-detail-section">
                    <h4>Место обитания</h4>
                    <p>${animal.habitat}</p>
                </div>
                
                <div class="animal-detail-section">
                    <h4>Статус охраны</h4>
                    <p>Вид занесён в Красную книгу Беларуси и находится под государственной охраной.</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('animalModal').classList.remove('hidden');
    tg.BackButton.show();
}

function closeAnimalModal() {
    document.getElementById('animalModal').classList.add('hidden');
    tg.BackButton.hide();
}

// Остальные функции (поиск, бронирование, отзывы и т.д.) остаются без изменений
// ... (вставляем все предыдущие функции из социальной версии)

// Добавляем недостающие функции для полноты
function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    currentSearchQuery = query;
    
    try {
        showLoading(true);
        
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

function filterByGenre() {
    const genreFilter = document.getElementById('genreFilter');
    const genre = genreFilter.value;
    currentGenre = genre;
    
    try {
        showLoading(true);
        
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

// Добавляем стили для новых элементов
const additionalStyles = `
.animal-details {
    max-width: 100%;
}

.animal-detail-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 20px;
}

.animal-detail-info {
    color: var(--text-dark);
}

.animal-detail-name {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 5px;
}

.animal-detail-latin {
    font-style: italic;
    color: var(--text-light);
    margin-bottom: 15px;
}

.animal-detail-section {
    margin-bottom: 20px;
}

.animal-detail-section h4 {
    margin-bottom: 8px;
    color: var(--text-dark);
}

.animal-detail-section p {
    color: var(--text-light);
    line-height: 1.4;
}

.book-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.favorite-btn {
    padding: 12px;
    background: var(--bg-light);
    border: 2px solid var(--border-color);
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    min-width: 50px;
}

.favorite-btn:hover {
    background: var(--border-color);
}

.favorite-active {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
}

.modal-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.read-btn {
    display: inline-block;
    background: var(--secondary-color);
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.read-btn:hover {
    background: #1976d2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}

.book-cover-img, .book-cover-large-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.book-cover-large {
    width: 150px;
    height: 220px;
    margin: 0 auto 20px;
    border-radius: 12px;
    overflow: hidden;
    background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
}

.book-cover-large-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 20px;
}

.rating-stars {
    display: flex;
    gap: 2px;
    margin: 10px 0;
}

.star {
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.2s ease;
}

.star.active {
    color: var(--accent-color);
}

.star:hover {
    transform: scale(1.2);
}

.review-form {
    background: var(--bg-light);
    padding: 15px;
    border-radius: 12px;
    margin-top: 15px;
}

.review-textarea {
    width: 100%;
    min-height: 80px;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    margin-bottom: 10px;
}

.review-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.book-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
}

.book-tab {
    flex: 1;
    padding: 10px;
    background: var(--bg-light);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.book-tab.active {
    background: var(--primary-color);
    color: white;
}

.book-tab-content {
    min-height: 300px;
}

.book-tab-pane {
    display: none;
}

.book-tab-pane.active {
    display: block;
}

.book-header-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.book-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9em;
}

.rating-stars-small {
    color: var(--accent-color);
}

.rating-value {
    font-weight: bold;
    color: var(--text-dark);
}

.reviews-count {
    color: var(--text-light);
}

.no-reviews {
    color: var(--text-light);
    font-style: italic;
}

.reviews-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
}

.average-rating {
    font-size: 0.9em;
    color: var(--text-dark);
}

.empty-reviews {
    text-align: center;
    padding: 40px 20px;
    color: var(--text-light);
}

.empty-reviews .empty-icon {
    font-size: 3em;
    margin-bottom: 10px;
    opacity: 0.5;
}

.user-review {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
}

.review-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.review-likes {
    color: var(--secondary-color);
    font-size: 0.9em;
}

.review-user {
    font-weight: 500;
    color: var(--text-dark);
}
`;

// Добавляем стили
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Глобальные функции для HTML
window.searchBooks = searchBooks;
window.filterByGenre = filterByGenre;
window.showBookDetails = showBookDetails;
window.borrowBook = borrowBook;
window.returnBook = returnBook;
window.toggleFavorite = toggleFavorite;
window.removeFavorite = removeFavorite;
window.showSection = showSection;
window.showAnimalDetails = showAnimalDetails;
window.closeModal = closeModal;
window.closeAnimalModal = closeAnimalModal;
window.clearFilters = clearFilters;

// Инициализируем отображение книг при загрузке
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

// Заглушки для отсутствующих функций
function showBookDetails(bookId) {
    const book = MOCK_BOOKS.find(b => b.id === bookId);
    if (!book) return;
    
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalBody').innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 3em; margin-bottom: 20px;">📖</div>
            <h3>${book.title}</h3>
            <p>Автор: ${book.author}</p>
            <p>Год: ${book.year}</p>
            <p>Жанр: ${book.genre}</p>
            <p style="margin-top: 20px;">Функция в разработке</p>
            <button class="borrow-btn" onclick="closeModal()" style="margin-top: 20px;">
                Закрыть
            </button>
        </div>
    `;
    document.getElementById('bookModal').classList.remove('hidden');
    tg.BackButton.show();
}

function borrowBook(bookId) {
    tg.showPopup({
        title: 'В разработке',
        message: 'Функция бронирования книг скоро будет доступна!',
        buttons: [{ type: 'ok' }]
    });
}

function updateUserProfile() {
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userRegistration').textContent = `Зарегистрирован: ${userData.registrationDate}`;
    document.getElementById('userTotalBooks').textContent = userData.stats.totalBooks;
    document.getElementById('userFavorites').textContent = userData.favorites.length;
    document.getElementById('userReviewsCount').textContent = userData.reviews.length;
    document.getElementById('activeBorrows').textContent = userData.stats.activeBorrows;
    document.getElementById('totalRead').textContent = userData.stats.totalRead;
    document.getElementById('readingTime').textContent = userData.stats.readingDays;
    document.getElementById('activeBooksCount').textContent = userData.borrowedBooks.filter(b => b.status === 'active').length;
    document.getElementById('reviewsCount').textContent = userData.reviews.length;
    document.getElementById('favoritesCount').textContent = userData.favorites.length;
}

console.log('Приложение КнігаБел успешно загружено!');