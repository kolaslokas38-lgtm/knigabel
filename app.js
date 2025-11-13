// Конфигурация
const CONFIG = {
    USE_MOCK_DATA: true
};

// Mock данные книг
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
    cover: "https://cv6.litres.ru/pub/c/cover_415/66809843.jpg",
    readLink: "https://ilibrary.ru/text/11/index.html",
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
    cover: "https://cv0.litres.ru/pub/c/cover_415/10235628.jpg",
    readLink: "https://www.litres.ru/book/fedor-dostoevskiy/prestuplenie-i-nakazanie-139491/chitat-onlayn/",
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
    cover: "https://cv5.litres.ru/pub/c/cover_415/17829610.jpg",
    readLink: "https://author.today/reader/428523",
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
    cover: "https://cv8.litres.ru/pub/c/cover_415/69495660.jpg",
    readLink: "https://ilibrary.ru/text/436/p.2/in-/index.html",
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
    cover: "https://cv5.litres.ru/pub/c/cover_415/10321963.jpg",
    readLink: "https://kartaslov.ru/%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%A8%D0%BE%D0%BB%D0%BE%D1%85%D0%BE%D0%B2_%D0%A2%D0%B8%D1%85%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD",
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
    cover: "https://cv9.litres.ru/pub/c/cover_415/10235779.jpg",
    readLink: "https://ilibrary.ru/text/96/p.1/index.html",
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
    cover: "https://cv8.litres.ru/pub/c/cover_415/10235657.jpg",
    readLink: "https://ilibrary.ru/text/1099/p.1/index.html",
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
    cover: "https://cv5.litres.ru/pub/c/cover_415/10235746.jpg",
    readLink: "https://ilibrary.ru/text/78/p.1/index.html",
    pages: 352
  },
  {
    id: 9,
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: 1840,
    genre: "Психологический роман",
    description: "Первый в русской прозе лирико-психологический роман.",
    isbn: "978-5-389-04222-7",
    available: true,
    cover: "https://cv6.litres.ru/pub/c/cover_415/10235713.jpg",
    readLink: "https://ilibrary.ru/text/71/p.1/index.html",
    pages: 224
  },
  {
    id: 10,
    title: "Братья Карамазовы",
    author: "Федор Достоевский",
    year: 1880,
    genre: "Философский роман",
    description: "Последний роман Достоевского, затрагивающий глубокие философские вопросы.",
    isbn: "978-5-389-04223-4",
    available: true,
    cover: "https://cv1.litres.ru/pub/c/cover_415/10235641.jpg",
    readLink: "https://ilibrary.ru/text/1045/p.1/index.html",
    pages: 824
  },
  {
    id: 11,
    title: "Капитанская дочка",
    author: "Александр Пушкин",
    year: 1836,
    genre: "Исторический роман",
    description: "Исторический роман о событиях крестьянского восстания под предводительством Емельяна Пугачёва.",
    isbn: "978-5-4453-0154-7",
    available: true,
    cover: "https://cv7.litres.ru/pub/c/cover_415/10235760.jpg",
    readLink: "https://ilibrary.ru/text/359/p.1/index.html",
    pages: 320
  },
  {
    id: 12,
    title: "Обломов",
    author: "Иван Гончаров",
    year: 1859,
    genre: "Социально-психологический роман",
    description: "Роман о жизни Ильи Ильича Обломова, воплощающий тип «лишнего человека».",
    isbn: "978-5-04-116641-2",
    available: true,
    cover: "https://cv2.litres.ru/pub/c/cover_415/10235734.jpg",
    readLink: "https://ilibrary.ru/text/110/p.1/index.html",
    pages: 480
  },
  {
    id: 13,
    title: "Вишнёвый сад",
    author: "Антон Чехов",
    year: 1904,
    genre: "Драма",
    description: "Лирическая пьеса в четырёх действиях о вынужденной продаже родового имения.",
    isbn: "978-5-4453-0155-4",
    available: true,
    cover: "https://cv4.litres.ru/pub/c/cover_415/10235694.jpg",
    readLink: "https://ilibrary.ru/text/1190/p.1/index.html",
    pages: 96
  },
  {
    id: 14,
    title: "Ревизор",
    author: "Николай Гоголь",
    year: 1836,
    genre: "Комедия",
    description: "Комедия в пяти действиях о чиновничьем произволе и страхе перед высшей властью.",
    isbn: "978-5-4453-0156-1",
    available: true,
    cover: "https://cv3.litres.ru/pub/c/cover_415/10235727.jpg",
    readLink: "https://ilibrary.ru/text/74/p.1/index.html",
    pages: 128
  },
  {
    id: 15,
    title: "Горе от ума",
    author: "Александр Грибоедов",
    year: 1825,
    genre: "Комедия",
    description: "Комедия в стихах, сатира на аристократическое московское общество первой половины XIX века.",
    isbn: "978-5-4453-0157-8",
    available: true,
    cover: "https://cv0.litres.ru/pub/c/cover_415/10235675.jpg",
    readLink: "https://ilibrary.ru/text/60/p.1/index.html",
    pages: 160
  },
  {
    id: 16,
    title: "Доктор Живаго",
    author: "Борис Пастернак",
    year: 1957,
    genre: "Роман",
    description: "Роман о жизни русской интеллигенции в период революции и Гражданской войны.",
    isbn: "978-5-699-80700-5",
    available: true,
    cover: "https://cv8.litres.ru/pub/c/cover_415/10235788.jpg",
    readLink: "https://ilibrary.ru/text/1120/p.1/index.html",
    pages: 592
  },
  {
    id: 17,
    title: "Идиот",
    author: "Федор Достоевский",
    year: 1869,
    genre: "Психологический роман",
    description: "Роман о князе Мышкине, «положительно прекрасном человеке», пытающемся принести добро в жестокий мир.",
    isbn: "978-5-17-145137-5",
    available: true,
    cover: "https://cv9.litres.ru/pub/c/cover_415/10235662.jpg",
    readLink: "https://ilibrary.ru/text/1030/p.1/index.html",
    pages: 640
  },
  {
    id: 18,
    title: "Бесы",
    author: "Федор Достоевский",
    year: 1872,
    genre: "Политический роман",
    description: "Роман-предупреждение о разрушительной силе революционных идей.",
    isbn: "978-5-17-145138-2",
    available: true,
    cover: "https://cv6.litres.ru/pub/c/cover_415/10235701.jpg",
    readLink: "https://ilibrary.ru/text/1040/p.1/index.html",
    pages: 768
  },
  {
    id: 19,
    title: "Двенадцать стульев",
    author: "Илья Ильф, Евгений Петров",
    year: 1928,
    genre: "Сатирический роман",
    description: "Сатирический роман о поисках бриллиантов, спрятанных в одном из двенадцати стульев гостиного гарнитура.",
    isbn: "978-5-699-80701-2",
    available: true,
    cover: "https://cv1.litres.ru/pub/c/cover_415/10235795.jpg",
    readLink: "https://ilibrary.ru/text/1130/p.1/index.html",
    pages: 416
  },
  {
    id: 20,
    title: "Золотой телёнок",
    author: "Илья Ильф, Евгений Петров",
    year: 1931,
    genre: "Сатирический роман",
    description: "Продолжение приключений Остапа Бендера в поисках миллиона рублей.",
    isbn: "978-5-699-80702-9",
    available: true,
    cover: "https://cv4.litres.ru/pub/c/cover_415/10235686.jpg",
    readLink: "https://ilibrary.ru/text/1140/p.1/index.html",
    pages: 384
  },
  {
    id: 21,
    title: "Петербургские повести",
    author: "Николай Гоголь",
    year: 1842,
    genre: "Повести",
    description: "Цикл повестей, посвящённых жизни Петербурга и его обитателей.",
    isbn: "978-5-4453-0158-5",
    available: true,
    cover: "https://cv7.litres.ru/pub/c/cover_415/10235768.jpg",
    readLink: "https://ilibrary.ru/text/77/p.1/index.html",
    pages: 256
  },
  {
    id: 22,
    title: "Гранатовый браслет",
    author: "Александр Куприн",
    year: 1911,
    genre: "Повесть",
    description: "Повесть о безответной любви мелкого чиновника к замужней княгине.",
    isbn: "978-5-4453-0159-2",
    available: true,
    cover: "https://cv2.litres.ru/pub/c/cover_415/10235653.jpg",
    readLink: "https://ilibrary.ru/text/1150/p.1/index.html",
    pages: 96
  },
  {
    id: 23,
    title: "Старик и море",
    author: "Эрнест Хемингуэй",
    year: 1952,
    genre: "Повесть",
    description: "Повесть о кубинском рыбаке Сантьяго и его борьбе с гигантской рыбой.",
    isbn: "978-5-699-80703-6",
    available: true,
    cover: "https://cv5.litres.ru/pub/c/cover_415/10235782.jpg",
    readLink: "https://ilibrary.ru/text/1160/p.1/index.html",
    pages: 112
  },
  {
    id: 24,
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    genre: "Философская сказка",
    description: "Самое известное произведение Экзюпери, обращённое к детям и взрослым.",
    isbn: "978-5-699-80704-3",
    available: true,
    cover: "https://cv8.litres.ru/pub/c/cover_415/10235619.jpg",
    readLink: "https://ilibrary.ru/text/1170/p.1/index.html",
    pages: 96
  },
  {
    id: 25,
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "Антиутопия",
    description: "Роман-антиутопия о тоталитарном обществе под постоянным контролем «Старшего Брата».",
    isbn: "978-5-699-80705-0",
    available: true,
    cover: "https://cv3.litres.ru/pub/c/cover_415/10235705.jpg",
    readLink: "https://ilibrary.ru/text/1180/p.1/index.html",
    pages: 320
  }
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

// Социальные данные
let bookOfTheDay = null;
let booksOfTheWeek = [];
let bookRatings = {};
let bookReviews = {};
let currentBookRating = 0;

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

// Рассчитываем статистику библиотеки
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: MOCK_BOOKS.filter(book => !book.available).length,
    totalGenres: MOCK_GENRES.length - 1
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeTelegramApp();
    initializeSocialFeatures();
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
        
        // Получаем данные пользователя из Telegram
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

// Инициализация социальных функций
function initializeSocialFeatures() {
    initializeBookRatings();
    initializeBookReviews();
    updateBookOfTheDay();
    updateBooksOfTheWeek();
}

// Инициализация рейтингов книг
function initializeBookRatings() {
    const savedRatings = localStorage.getItem('bookRatings');
    if (savedRatings) {
        bookRatings = JSON.parse(savedRatings);
    } else {
        // Начальные рейтинги для некоторых книг
        MOCK_BOOKS.forEach(book => {
            if (Math.random() > 0.3) {
                bookRatings[book.id] = {
                    average: parseFloat((4 + Math.random()).toFixed(1)),
                    count: Math.floor(Math.random() * 50) + 1,
                    distribution: {
                        5: Math.floor(Math.random() * 20),
                        4: Math.floor(Math.random() * 15),
                        3: Math.floor(Math.random() * 10),
                        2: Math.floor(Math.random() * 5),
                        1: Math.floor(Math.random() * 3)
                    }
                };
            }
        });
        saveBookRatings();
    }
}

// Инициализация отзывов
function initializeBookReviews() {
    const savedReviews = localStorage.getItem('bookReviews');
    if (savedReviews) {
        bookReviews = JSON.parse(savedReviews);
    } else {
        bookReviews = {
            1: [
                {
                    id: 1,
                    userId: 1,
                    userName: "Анна Петрова",
                    rating: 5,
                    text: "Великолепная книга! Перечитываю каждый год, каждый раз находя что-то новое. Толстой - гений!",
                    date: "2024-01-15",
                    likes: 12,
                    userAvatar: "👩"
                },
                {
                    id: 2,
                    userId: 2,
                    userName: "Михаил Иванов",
                    rating: 4,
                    text: "Классика, которую должен прочитать каждый. Немного тяжеловато читается, но оно того стоит.",
                    date: "2024-01-10",
                    likes: 8,
                    userAvatar: "👨"
                }
            ],
            2: [
                {
                    id: 3,
                    userId: 3,
                    userName: "Екатерина Смирнова",
                    rating: 5,
                    text: "Потрясающая глубина психологического анализа. Достоевский как всегда на высоте!",
                    date: "2024-01-12",
                    likes: 15,
                    userAvatar: "👩‍💼"
                }
            ],
            3: [
                {
                    id: 4,
                    userId: 4,
                    userName: "Дмитрий Козлов",
                    rating: 5,
                    text: "Мистика, философия и юмер - идеальное сочетание! Одна из лучших книг в мировой литературе.",
                    date: "2024-01-08",
                    likes: 20,
                    userAvatar: "👨‍🎓"
                }
            ]
        };
        saveBookReviews();
    }
}

// Книга дня
function updateBookOfTheDay() {
    const today = new Date().toDateString();
    const savedBookOfTheDay = localStorage.getItem('bookOfTheDay');
    
    if (savedBookOfTheDay) {
        const data = JSON.parse(savedBookOfTheDay);
        if (data.date === today) {
            bookOfTheDay = MOCK_BOOKS.find(book => book.id === data.bookId);
            return;
        }
    }
    
    // Выбираем новую книгу дня
    const availableBooks = MOCK_BOOKS.filter(book => book.available);
    const randomIndex = Math.floor(Math.random() * availableBooks.length);
    bookOfTheDay = availableBooks[randomIndex];
    
    localStorage.setItem('bookOfTheDay', JSON.stringify({
        bookId: bookOfTheDay.id,
        date: today
    }));
}

// Книги недели
function updateBooksOfTheWeek() {
    const thisWeek = getWeekNumber(new Date());
    const savedBooksOfTheWeek = localStorage.getItem('booksOfTheWeek');
    
    if (savedBooksOfTheWeek) {
        const data = JSON.parse(savedBooksOfTheWeek);
        if (data.week === thisWeek) {
            booksOfTheWeek = data.books.map(bookId => MOCK_BOOKS.find(book => book.id === bookId));
            return;
        }
    }
    
    // Выбираем новые книги недели (топ-5 по рейтингу)
    booksOfTheWeek = MOCK_BOOKS
        .filter(book => bookRatings[book.id])
        .sort((a, b) => (bookRatings[b.id]?.average || 0) - (bookRatings[a.id]?.average || 0))
        .slice(0, 5);
    
    localStorage.setItem('booksOfTheWeek', JSON.stringify({
        books: booksOfTheWeek.map(book => book.id),
        week: thisWeek
    }));
}

// Вспомогательная функция для получения номера недели
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Сохранение данных
function saveBookRatings() {
    localStorage.setItem('bookRatings', JSON.stringify(bookRatings));
}

function saveBookReviews() {
    localStorage.setItem('bookReviews', JSON.stringify(bookReviews));
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
    
    // Если открыли главную - обновляем данные
    if (sectionName === 'home') {
        updateHomeSection();
    }
}

// Обновление главной страницы
function updateHomeSection() {
    const homeSection = document.getElementById('homeSection');
    
    homeSection.innerHTML = `
        <div class="home-container">
            <!-- Книга дня -->
            <div class="featured-section">
                <h3 class="section-title">📖 Книга дня</h3>
                ${bookOfTheDay ? renderBookOfTheDay(bookOfTheDay) : '<p>Загрузка...</p>'}
            </div>
            
            <!-- Книги недели -->
            <div class="featured-section">
                <h3 class="section-title">⭐ Книги недели</h3>
                <div class="books-of-week">
                    ${booksOfTheWeek.length > 0 ? 
                        booksOfTheWeek.map(book => renderBookOfWeek(book)).join('') : 
                        '<p>Загрузка...</p>'
                    }
                </div>
            </div>
            
            <!-- Популярные книги -->
            <div class="featured-section">
                <h3 class="section-title">🔥 Популярные сейчас</h3>
                <div class="popular-books">
                    ${renderPopularBooks()}
                </div>
            </div>
        </div>
    `;
}

// Рендер книги дня
function renderBookOfTheDay(book) {
    const rating = bookRatings[book.id] || { average: 0, count: 0 };
    
    return `
        <div class="book-of-day" onclick="showBookDetails(${book.id})">
            <div class="book-of-day-content">
                <div class="book-of-day-cover">
                    <img src="${book.cover}" alt="${book.title}" 
                         onerror="this.src='https://via.placeholder.com/120x180/4CAF50/white?text=📖'">
                    <div class="day-badge">День</div>
                </div>
                <div class="book-of-day-info">
                    <h4>${book.title}</h4>
                    <p class="book-author">${book.author}</p>
                    <div class="book-rating-large">
                        <div class="stars">${renderStars(rating.average)}</div>
                        <span class="rating-value">${rating.average > 0 ? rating.average.toFixed(1) : 'Нет оценок'}</span>
                        <span class="rating-count">${rating.count > 0 ? `(${rating.count})` : ''}</span>
                    </div>
                    <p class="book-description-short">${book.description.substring(0, 150)}...</p>
                    <div class="book-meta">
                        <span>📅 ${book.year} год</span>
                        <span>🏷️ ${book.genre}</span>
                        <span>📄 ${book.pages} стр.</span>
                    </div>
                    <button class="borrow-btn" onclick="event.stopPropagation(); borrowBook(${book.id})">
                        📚 Забронировать
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Рендер книги недели
function renderBookOfWeek(book) {
    const rating = bookRatings[book.id] || { average: 0, count: 0 };
    
    return `
        <div class="book-week-card" onclick="showBookDetails(${book.id})">
            <div class="week-badge">Неделя</div>
            <img src="${book.cover}" alt="${book.title}" class="book-week-cover"
                 onerror="this.src='https://via.placeholder.com/80x120/2196F3/white?text=📖'">
            <div class="book-week-info">
                <div class="book-week-title">${book.title}</div>
                <div class="book-week-author">${book.author}</div>
                <div class="book-week-rating">
                    ${renderStars(rating.average)}
                    <span>${rating.average > 0 ? rating.average.toFixed(1) : 'Нет'}</span>
                </div>
            </div>
        </div>
    `;
}

// Рендер популярных книг
function renderPopularBooks() {
    const popularBooks = MOCK_BOOKS
        .filter(book => bookRatings[book.id])
        .sort((a, b) => (bookRatings[b.id]?.count || 0) - (bookRatings[a.id]?.count || 0))
        .slice(0, 6);
    
    return popularBooks.map(book => {
        const rating = bookRatings[book.id] || { average: 0, count: 0 };
        
        return `
            <div class="popular-book-card" onclick="showBookDetails(${book.id})">
                <img src="${book.cover}" alt="${book.title}" class="popular-book-cover"
                     onerror="this.src='https://via.placeholder.com/60x90/FF9800/white?text=📖'">
                <div class="popular-book-info">
                    <div class="popular-book-title">${book.title}</div>
                    <div class="popular-book-rating">
                        ${renderStars(rating.average)}
                        <span>${rating.count}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Рендер звезд рейтинга
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '⭐' : '') + 
           '☆'.repeat(emptyStars);
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
            updateUserProfile();
            updateHomeSection();
            showLoading(false);
        }, 800);
        
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showError('Не удалось загрузить данные. Используются демо-данные.');
        
        // Fallback на mock данные
        updateBooksDisplay(MOCK_BOOKS);
        populateGenreFilter(MOCK_GENRES);
        updateStats(MOCK_STATS);
        updateUserProfile();
        updateHomeSection();
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
    
    container.innerHTML = books.map(book => {
        const isFavorite = userData.favorites.includes(book.id);
        const isBorrowed = userData.borrowedBooks.some(b => b.bookId === book.id && b.status === 'active');
        const rating = bookRatings[book.id] || { average: 0, count: 0 };
        
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
                    <div class="book-rating-small">
                        ${renderStars(rating.average)}
                        ${rating.average > 0 ? `<span>${rating.average.toFixed(1)}</span>` : '<span>Нет оценок</span>'}
                    </div>
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

// Показать детали книги с вкладками
async function showBookDetails(bookId) {
    try {
        showLoading(true);
        
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        if (!book) throw new Error('Книга не найдена');

        const isFavorite = userData.favorites.includes(book.id);
        const isBorrowed = userData.borrowedBooks.some(b => b.bookId === book.id && b.status === 'active');
        const userReview = userData.reviews.find(r => r.bookId === book.id);
        const reviews = bookReviews[book.id] || [];
        const rating = bookRatings[book.id] || { average: 0, count: 0, distribution: {5:0,4:0,3:0,2:0,1:0} };

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="book-tabs">
                <button class="book-tab active" onclick="showBookTab('details', ${book.id})">📖 О книге</button>
                <button class="book-tab" onclick="showBookTab('reviews', ${book.id})">💬 Отзывы (${reviews.length})</button>
                <button class="book-tab" onclick="showBookTab('rating', ${book.id})">⭐ Рейтинг</button>
            </div>
            
            <div class="book-tab-content">
                <!-- Вкладка с деталями книги -->
                <div class="book-tab-pane active" id="details-tab">
                    <div class="book-details">
                        <div class="book-cover-large">
                            ${book.cover ? 
                                `<img src="${book.cover}" alt="${book.title}" class="book-cover-large-img"
                                     onerror="this.onerror=null; this.src='https://via.placeholder.com/200x300/4CAF50/white?text=📖\\n${escapeHtml(book.title)}';">` : 
                                `<div class="book-cover-large-placeholder">📖<br>${escapeHtml(book.title)}</div>`
                            }
                        </div>
                        <div class="book-info-detailed">
                            <div class="book-header-info">
                                <h4>${escapeHtml(book.title)}</h4>
                                <div class="book-rating">
                                    ${rating.average > 0 ? `
                                        <span class="rating-stars-small">
                                            ${renderStars(rating.average)}
                                        </span>
                                        <span class="rating-value">${rating.average}</span>
                                        <span class="reviews-count">(${rating.count} оценок)</span>
                                    ` : '<span class="no-reviews">Нет оценок</span>'}
                                </div>
                            </div>
                            <p><strong>Автор:</strong> ${escapeHtml(book.author)}</p>
                            <p><strong>Год издания:</strong> ${book.year}</p>
                            <p><strong>Жанр:</strong> ${book.genre}</p>
                            <p><strong>ISBN:</strong> ${book.isbn || 'Не указан'}</p>
                            <p><strong>Страниц:</strong> ${book.pages}</p>
                            <p><strong>Статус:</strong> 
                                <span class="book-status ${book.available ? 'status-available' : 'status-unavailable'}">
                                    ${isBorrowed ? '📖 У вас' : (book.available ? '✅ Доступна' : '❌ Выдана')}
                                </span>
                            </p>
                            <div class="book-description">
                                <strong>Описание:</strong>
                                <p>${escapeHtml(book.description || 'Описание отсутствует.')}</p>
                            </div>
                            
                            ${book.readLink ? `
                            <div class="read-section">
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
                </div>
                
                <!-- Вкладка с отзывами -->
                <div class="book-tab-pane" id="reviews-tab">
                    ${renderReviewsTab(book.id, reviews, userReview)}
                </div>
                
                <!-- Вкладка с рейтингом -->
                <div class="book-tab-pane" id="rating-tab">
                    ${renderRatingTab(rating, book.id)}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="borrow-btn" onclick="borrowBook(${book.id})"
                    ${!book.available || isBorrowed ? 'disabled' : ''}
                    style="flex: 1; margin-right: 10px;">
                    ${isBorrowed ? '📖 Уже у вас' : (book.available ? '📚 Забронировать' : 'Недоступна')}
                </button>
                <button class="favorite-btn ${isFavorite ? 'favorite-active' : ''}" 
                    onclick="toggleFavorite(${book.id})" style="padding: 12px;">
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

// Рендер вкладки с отзывами
function renderReviewsTab(bookId, reviews, userReview) {
    let reviewsHTML = `
        <div class="reviews-header">
            <h4>💬 Отзывы о книге</h4>
            <div class="average-rating">
                Средняя оценка: <strong>${calculateAverageRating(reviews)}/5</strong>
            </div>
        </div>
    `;
    
    if (reviews.length === 0) {
        reviewsHTML += `
            <div class="empty-reviews">
                <div class="empty-icon">💬</div>
                <p>Пока нет отзывов</p>
                <p>Будьте первым, кто оставит отзыв!</p>
            </div>
        `;
    } else {
        reviewsHTML += reviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-user">
                        <span class="user-avatar">${review.userAvatar}</span>
                        ${review.userName}
                    </div>
                    <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                </div>
                <div class="review-text">${review.text}</div>
                <div class="review-footer">
                    <span class="review-likes">👍 ${review.likes}</span>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
            </div>
        `).join('');
    }
    
    // Форма для добавления отзыва
    if (userReview) {
        reviewsHTML += `
            <div class="user-review">
                <h5>Ваш отзыв:</h5>
                <div class="review-item">
                    <div class="review-header">
                        <div class="review-user">Вы</div>
                        <div class="review-rating">${'★'.repeat(userReview.rating)}${'☆'.repeat(5-userReview.rating)}</div>
                    </div>
                    <div class="review-text">${userReview.text}</div>
                    <div class="review-date">${formatDate(userReview.date)}</div>
                </div>
            </div>
        `;
    } else {
        reviewsHTML += `
            <div class="review-form">
                <h5>Оставить отзыв:</h5>
                <div class="rating-stars" id="ratingStars">
                    <span class="star" onclick="setRating(1)">☆</span>
                    <span class="star" onclick="setRating(2)">☆</span>
                    <span class="star" onclick="setRating(3)">☆</span>
                    <span class="star" onclick="setRating(4)">☆</span>
                    <span class="star" onclick="setRating(5)">☆</span>
                </div>
                <textarea class="review-textarea" id="reviewText" placeholder="Поделитесь вашим мнением о книге..."></textarea>
                <div class="review-actions">
                    <button class="clear-btn" onclick="clearReviewForm()">Отмена</button>
                    <button class="borrow-btn" onclick="submitReview(${bookId})">Отправить</button>
                </div>
            </div>
        `;
    }
    
    return reviewsHTML;
}

// Рендер вкладки с рейтингом
function renderRatingTab(rating, bookId) {
    const totalRatings = rating.count;
    const distribution = rating.distribution || {5:0,4:0,3:0,2:0,1:0};
    
    return `
        <div class="rating-overview">
            <div class="rating-score">
                <div class="rating-number">${rating.average > 0 ? rating.average.toFixed(1) : '0.0'}</div>
                <div class="rating-stars-large">${renderStars(rating.average)}</div>
                <div class="rating-count">${totalRatings} оценок</div>
            </div>
            
            <div class="rating-distribution">
                <h5>Распределение оценок:</h5>
                ${[5,4,3,2,1].map(star => `
                    <div class="distribution-row">
                        <span class="star-label">${star} звезд</span>
                        <div class="distribution-bar">
                            <div class="distribution-fill" 
                                 style="width: ${totalRatings > 0 ? (distribution[star] / totalRatings * 100) : 0}%">
                            </div>
                        </div>
                        <span class="distribution-count">${distribution[star]}</span>
                    </div>
                `).join('')}
            </div>
            
            ${!userData.reviews.find(r => r.bookId === bookId) ? `
            <div class="add-rating-section">
                <h5>Поставьте оценку:</h5>
                <div class="rating-input">
                    <div class="rating-stars-select" id="ratingStarsSelect">
                        ${[1,2,3,4,5].map(star => `
                            <span class="rating-star" data-rating="${star}" onclick="setBookRating(${star})">☆</span>
                        `).join('')}
                    </div>
                    <button class="borrow-btn" onclick="submitBookRating(${bookId})" style="margin-top: 10px;">
                        Отправить оценку
                    </button>
                </div>
            </div>
            ` : `
            <div class="user-rating-section">
                <h5>Ваша оценка:</h5>
                <div class="user-rating">
                    ${renderStars(userData.reviews.find(r => r.bookId === bookId).rating)}
                    <span>Спасибо за вашу оценку!</span>
                </div>
            </div>
            `}
        </div>
    `;
}

// Функции для работы с рейтингами
function setBookRating(rating) {
    currentBookRating = rating;
    const stars = document.querySelectorAll('#ratingStarsSelect .rating-star');
    stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
        star.classList.toggle('active', index < rating);
    });
}

function submitBookRating(bookId) {
    if (currentBookRating === 0) {
        tg.showAlert('Пожалуйста, выберите оценку');
        return;
    }
    
    // Обновляем рейтинг книги
    if (!bookRatings[bookId]) {
        bookRatings[bookId] = {
            average: currentBookRating,
            count: 1,
            distribution: {5:0,4:0,3:0,2:0,1:0}
        };
    } else {
        const oldRating = bookRatings[bookId];
        const newCount = oldRating.count + 1;
        const newAverage = (oldRating.average * oldRating.count + currentBookRating) / newCount;
        
        bookRatings[bookId] = {
            average: parseFloat(newAverage.toFixed(1)),
            count: newCount,
            distribution: {
                ...oldRating.distribution,
                [currentBookRating]: (oldRating.distribution[currentBookRating] || 0) + 1
            }
        };
    }
    
    saveBookRatings();
    
    tg.showPopup({
        title: 'Оценка сохранена! ★',
        message: 'Спасибо за вашу оценку!',
        buttons: [{ type: 'ok' }]
    });
    
    // Обновляем отображение
    if (!document.getElementById('bookModal').classList.contains('hidden')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        const currentBook = MOCK_BOOKS.find(b => b.title === modalTitle);
        if (currentBook && currentBook.id === bookId) {
            showBookDetails(bookId);
        }
    }
}

// Функции для работы с отзывами
function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('#ratingStars .star');
    stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
        star.classList.toggle('active', index < rating);
    });
}

function submitReview(bookId) {
    const reviewText = document.getElementById('reviewText').value.trim();
    
    if (currentRating === 0) {
        tg.showAlert('Пожалуйста, поставьте оценку');
        return;
    }
    
    if (reviewText.length < 10) {
        tg.showAlert('Отзыв должен содержать минимум 10 символов');
        return;
    }
    
    const book = MOCK_BOOKS.find(b => b.id === bookId);
    const newReview = {
        bookId: bookId,
        bookTitle: book.title,
        rating: currentRating,
        text: reviewText,
        date: new Date().toISOString().split('T')[0]
    };
    
    userData.reviews.push(newReview);
    
    // Добавляем в общие отзывы
    if (!bookReviews[bookId]) {
        bookReviews[bookId] = [];
    }
    bookReviews[bookId].push({
        id: Date.now(),
        userId: 999,
        userName: userData.name,
        rating: currentRating,
        text: reviewText,
        date: newReview.date,
        likes: 0,
        userAvatar: userData.avatar
    });
    
    saveBookReviews();
    
    tg.showPopup({
        title: 'Отзыв добавлен! ★',
        message: 'Спасибо за ваш отзыв!',
        buttons: [{ type: 'ok' }]
    });
    
    updateUserProfile();
    
    if (!document.getElementById('bookModal').classList.contains('hidden')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        const currentBook = MOCK_BOOKS.find(b => b.title === modalTitle);
        if (currentBook && currentBook.id === bookId) {
            showBookDetails(bookId);
        }
    }
}

function clearReviewForm() {
    currentRating = 0;
    document.getElementById('reviewText').value = '';
    const stars = document.querySelectorAll('#ratingStars .star');
    stars.forEach(star => {
        star.textContent = '☆';
        star.classList.remove('active');
    });
}

function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

// Функция переключения вкладок
function showBookTab(tabName, bookId) {
    document.querySelectorAll('.book-tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.book-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.querySelector(`[onclick="showBookTab('${tabName}', ${bookId})"]`).classList.add('active');
}
// Бронирование книги
async function borrowBook(bookId) {
    try {
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        if (book && book.available) {
            // Обновляем статус книги
            book.available = false;
            
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
            MOCK_STATS.availableBooks--;
            MOCK_STATS.borrowedBooks++;
            
            tg.showPopup({
                title: 'Успех! 🎉',
                message: `Книга "${book.title}" успешно забронирована!\nВерните до ${formatDate(borrowRecord.returnDate)}`,
                buttons: [{ type: 'ok' }]
            });
            
            // Обновляем отображение
            updateBooksDisplay(currentBooks);
            updateStats(MOCK_STATS);
            updateUserProfile();
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
    const book = MOCK_BOOKS.find(b => b.id === bookId);
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
        
        MOCK_STATS.availableBooks++;
        MOCK_STATS.borrowedBooks--;
        
        tg.showPopup({
            title: 'Книга возвращена! 📚',
            message: `"${book.title}" успешно возвращена в библиотеку`,
            buttons: [{ type: 'ok' }]
        });
        
        // Обновляем отображение
        updateBooksDisplay(currentBooks);
        updateStats(MOCK_STATS);
        updateUserProfile();
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
    
    // Обновляем отображение
    updateBooksDisplay(currentBooks);
    updateUserProfile();
    
    // Если открыто модальное окно - обновляем его
    if (!document.getElementById('bookModal').classList.contains('hidden')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        const book = MOCK_BOOKS.find(b => b.title === modalTitle);
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
    const favoriteBooks = MOCK_BOOKS.filter(book => userData.favorites.includes(book.id));
    
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
const socialFeaturesStyles = `
/* Книга дня */
.book-of-day {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.book-of-day-content {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.book-of-day-cover {
    position: relative;
    flex-shrink: 0;
}

.book-of-day-cover img {
    width: 120px;
    height: 180px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.day-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #FFD700;
    color: #000;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.book-of-day-info h4 {
    margin: 0 0 10px 0;
    font-size: 1.3em;
    color: white;
}

.book-author {
    opacity: 0.9;
    margin-bottom: 10px;
}

.book-rating-large {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
}

.book-rating-large .stars {
    font-size: 1.2em;
    color: #FFD700;
}

.rating-value {
    font-weight: bold;
    font-size: 1.1em;
}

.rating-count {
    opacity: 0.8;
    font-size: 0.9em;
}

.book-description-short {
    opacity: 0.9;
    line-height: 1.4;
    margin: 10px 0;
}

.book-meta {
    display: flex;
    gap: 15px;
    margin: 10px 0;
    font-size: 0.9em;
    opacity: 0.8;
    flex-wrap: wrap;
}

/* Книги недели */
.books-of-week {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.book-week-card {
    background: var(--bg-light);
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.book-week-card:hover {
    transform: translateY(-5px);
}

.week-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #4CAF50;
    color: white;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.7em;
    font-weight: bold;
}

.book-week-cover {
    width: 80px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

.book-week-title {
    font-weight: 500;
    font-size: 0.9em;
    margin-bottom: 5px;
    line-height: 1.2;
}

.book-week-author {
    font-size: 0.8em;
    opacity: 0.7;
    margin-bottom: 8px;
}

.book-week-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 0.8em;
}

/* Популярные книги */
.popular-books {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
    margin-top: 15px;
}

.popular-book-card {
    background: var(--bg-light);
    border-radius: 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.popular-book-card:hover {
    background: var(--border-color);
}

.popular-book-cover {
    width: 60px;
    height: 90px;
    object-fit: cover;
    border-radius: 6px;
    flex-shrink: 0;
}

.popular-book-info {
    flex: 1;
}

.popular-book-title {
    font-weight: 500;
    font-size: 0.85em;
    line-height: 1.2;
    margin-bottom: 5px;
}

.popular-book-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8em;
    color: var(--text-light);
}

/* Рейтинги в карточках */
.book-rating-small {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0;
    font-size: 0.8em;
}

.book-rating-small .stars {
    color: #FFD700;
}

/* Вкладки */
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

/* Стили для рейтингов и отзывов */
.rating-overview {
    padding: 10px 0;
}

.rating-score {
    text-align: center;
    padding: 20px;
    background: var(--bg-light);
    border-radius: 12px;
    margin-bottom: 20px;
}

.rating-number {
    font-size: 3em;
    font-weight: bold;
    color: var(--primary-color);
    line-height: 1;
}

.rating-stars-large {
    font-size: 1.5em;
    color: #FFD700;
    margin: 10px 0;
}

.rating-count {
    color: var(--text-light);
    font-size: 0.9em;
}

.rating-distribution {
    margin-bottom: 20px;
}

.distribution-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    font-size: 0.9em;
}

.star-label {
    width: 60px;
    color: var(--text-light);
}

.distribution-bar {
    flex: 1;
    height: 8px;
    background: var(--border-color);
    border-radius: 4px;
    overflow: hidden;
}

.distribution-fill {
    height: 100%;
    background: var(--accent-color);
    transition: width 0.3s ease;
}

.distribution-count {
    width: 30px;
    text-align: right;
    color: var(--text-light);
}

.rating-stars-select {
    display: flex;
    gap: 5px;
    margin: 10px 0;
}

.rating-star {
    font-size: 2em;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #ccc;
}

.rating-star.active,
.rating-star:hover {
    color: #FFD700;
    transform: scale(1.2);
}

.user-rating {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background: var(--bg-light);
    border-radius: 10px;
    margin-top: 10px;
}

/* Стили для отзывов */
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

.review-item {
    background: var(--bg-light);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.review-user {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
}

.user-avatar {
    font-size: 1.2em;
}

.review-rating {
    color: #FFD700;
}

.review-text {
    line-height: 1.4;
    margin-bottom: 10px;
}

.review-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    color: var(--text-light);
}

.review-likes {
    color: var(--secondary-color);
}

.user-review {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
}

.review-form {
    margin-top: 20px;
    padding: 20px;
    background: var(--bg-light);
    border-radius: 10px;
}

.rating-stars {
    display: flex;
    gap: 5px;
    margin: 10px 0;
}

.rating-stars .star {
    font-size: 1.5em;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #ccc;
}

.rating-stars .star.active,
.rating-stars .star:hover {
    color: #FFD700;
    transform: scale(1.2);
}

.review-textarea {
    width: 100%;
    height: 100px;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    margin: 10px 0;
}

.review-actions {
    display: flex;
    gap: 10px;
}

.clear-btn {
    flex: 1;
    padding: 12px;
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
}

/* Адаптивность */
@media (max-width: 768px) {
    .book-of-day-content {
        flex-direction: column;
        text-align: center;
    }
    
    .book-of-day-cover {
        align-self: center;
    }
    
    .book-meta {
        justify-content: center;
    }
    
    .books-of-week {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .book-header-info {
        flex-direction: column;
        align-items: flex-start;
    }
}
`;

// Добавляем стили в документ
const socialFeaturesStyleSheet = document.createElement('style');
socialFeaturesStyleSheet.textContent = socialFeaturesStyles;
document.head.appendChild(socialFeaturesStyleSheet);

// Добавляем глобальные функции
window.showBookTab = showBookTab;
window.setBookRating = setBookRating;
window.submitBookRating = submitBookRating;
window.setRating = setRating;
window.submitReview = submitReview;
window.clearReviewForm = clearReviewForm;

// Остальные глобальные функции
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