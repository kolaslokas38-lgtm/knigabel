// Конфигурация
const CONFIG = {
    USE_MOCK_DATA: true
};

// Mock данные книг
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
    pages: 1225,
    rating: 4.8,
    reviewsCount: 156
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
    pages: 672,
    rating: 4.7,
    reviewsCount: 89
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
    pages: 480,
    rating: 4.9,
    reviewsCount: 203
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
    pages: 288,
    rating: 4.6,
    reviewsCount: 78
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
    pages: 1504,
    rating: 4.5,
    reviewsCount: 67
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
    pages: 320,
    rating: 4.4,
    reviewsCount: 54
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
    pages: 864,
    rating: 4.8,
    reviewsCount: 134
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
    pages: 352,
    rating: 4.3,
    reviewsCount: 45
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
    pages: 224,
    rating: 4.6,
    reviewsCount: 89
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
    pages: 824,
    rating: 4.7,
    reviewsCount: 112
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
    pages: 320,
    rating: 4.5,
    reviewsCount: 67
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
    pages: 480,
    rating: 4.4,
    reviewsCount: 58
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
    pages: 96,
    rating: 4.2,
    reviewsCount: 34
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
    pages: 128,
    rating: 4.3,
    reviewsCount: 41
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
    pages: 160,
    rating: 4.4,
    reviewsCount: 49
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
    pages: 592,
    rating: 4.6,
    reviewsCount: 78
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
    pages: 640,
    rating: 4.7,
    reviewsCount: 95
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
    pages: 768,
    rating: 4.5,
    reviewsCount: 63
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
    pages: 416,
    rating: 4.8,
    reviewsCount: 121
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
    pages: 384,
    rating: 4.7,
    reviewsCount: 98
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
    pages: 256,
    rating: 4.3,
    reviewsCount: 42
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
    pages: 96,
    rating: 4.5,
    reviewsCount: 56
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
    pages: 112,
    rating: 4.4,
    reviewsCount: 67
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
    pages: 96,
    rating: 4.9,
    reviewsCount: 215
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
    pages: 320,
    rating: 4.8,
    reviewsCount: 189
  },
]

const MOCK_GENRES = [
  "Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика", 
  "Роман в стихах", "Реализм", "Поэма", "Социально-психологический роман",
  "Философский роман", "Исторический роман", "Драма", "Комедия", 
  "Сатирический роман", "Политический роман", "Повести", "Философская сказка",
  "Антиутопия"
];

const RED_BOOK_ANIMALS = [
  {
    id: 1,
    name: "Зубр",
    species: "Bison bonasus",
    status: "endangered",
    description: "Крупнейшее наземное млекопитающее Европы. Символ Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/European_bison_photo.jpg/640px-European_bison_photo.jpg",
    population: "~2000 особей",
    habitat: "Беловежская пуща"
  },
  {
    id: 2,
    name: "Рысь",
    species: "Lynx lynx",
    status: "vulnerable",
    description: "Крупная хищная кошка с кисточками на ушах.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/640px-Lynx_lynx2.jpg",
    population: "~800 особей",
    habitat: "Леса по всей стране"
  },
  {
    id: 3,
    name: "Чёрный аист",
    species: "Ciconia nigra",
    status: "endangered",
    description: "Редкая птица, гнездящаяся в глухих лесах.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Black_Stork_%28Ciconia_nigra%29.jpg/640px-Black_Stork_%28Ciconia_nigra%29.jpg",
    population: "~400 пар",
    habitat: "Заболоченные леса"
  },
  {
    id: 4,
    name: "Беркут",
    species: "Aquila chrysaetos",
    status: "endangered",
    description: "Крупный орёл, самый большой хищник Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Golden_Eagle_in_flight_-_5.jpg/640px-Golden_Eagle_in_flight_-_5.jpg",
    population: "~50 пар",
    habitat: "Северные районы"
  },
  {
    id: 5,
    name: "Выдра",
    species: "Lutra lutra",
    status: "vulnerable",
    description: "Водный хищник с ценным мехом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/LutraLutra.jpg/640px-LutraLutra.jpg",
    population: "~2000 особей",
    habitat: "Реки и озёра"
  },
  {
    id: 6,
    name: "Барсук",
    species: "Meles meles",
    status: "rare",
    description: "Крупный хищник, роющий глубокие норы.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Meles_meles_%28cropped%29.jpg/640px-Meles_meles_%28cropped%29.jpg",
    population: "~5000 особей",
    habitat: "Леса по всей стране"
  },
  {
    id: 7,
    name: "Серый журавль",
    species: "Grus grus",
    status: "vulnerable",
    description: "Крупная перелётная птица с громким голосом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Common_Crane_%28Grus_grus%29.jpg/640px-Common_Crane_%28Grus_grus%29.jpg",
    population: "~1500 пар",
    habitat: "Болота и влажные луга"
  },
  {
    id: 8,
    name: "Филин",
    species: "Bubo bubo",
    status: "endangered",
    description: "Крупнейшая сова Европы с характерными 'ушами'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eagle_Owl.jpg/640px-Eagle_Owl.jpg",
    population: "~100 пар",
    habitat: "Глухие леса"
  },
  {
    id: 9,
    name: "Волк",
    species: "Canis lupus",
    status: "vulnerable",
    description: "Крупный хищник, санитар леса.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Canis_lupus_265b.jpg/640px-Canis_lupus_265b.jpg",
    population: "~1500 особей",
    habitat: "Леса по всей стране"
  },
  {
    id: 10,
    name: "Бурый медведь",
    species: "Ursus arctos",
    status: "endangered",
    description: "Крупнейший хищник Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/640px-2010-kodiak-bear-1.jpg",
    population: "~100 особей",
    habitat: "Беловежская пуща"
  },
  {
    id: 11,
    name: "Лось",
    species: "Alces alces",
    status: "rare",
    description: "Крупнейший представитель оленевых.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Alces_alces_male_in_Finland.jpg/640px-Alces_alces_male_in_Finland.jpg",
    population: "~10000 особей",
    habitat: "Леса и болота"
  },
  {
    id: 12,
    name: "Косуля",
    species: "Capreolus capreolus",
    status: "rare",
    description: "Небольшой изящный олень.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Capreolus_capreolus_2_%28cropped%29.jpg/640px-Capreolus_capreolus_2_%28cropped%29.jpg",
    population: "~50000 особей",
    habitat: "Леса и поля"
  },
  {
    id: 13,
    name: "Бобр",
    species: "Castor fiber",
    status: "vulnerable",
    description: "Крупный грызун, строитель плотин.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Eurasian_Beaver.jpg/640px-Eurasian_Beaver.jpg",
    population: "~60000 особей",
    habitat: "Реки и озёра"
  },
  {
    id: 14,
    name: "Ёж",
    species: "Erinaceus europaeus",
    status: "rare",
    description: "Небольшой насекомоядный зверёк с иголками.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Erinaceus_europaeus_%28Marek_Szczepanek%29.jpg/640px-Erinaceus_europaeus_%28Marek_Szczepanek%29.jpg",
    population: "~100000 особей",
    habitat: "Леса, парки, сады"
  },
  {
    id: 15,
    name: "Заяц-русак",
    species: "Lepus europaeus",
    status: "rare",
    description: "Крупный заяц с длинными ушами.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lepus_europaeus_in_grass.jpg/640px-Lepus_europaeus_in_grass.jpg",
    population: "~80000 особей",
    habitat: "Поля и опушки"
  },
  {
    id: 16,
    name: "Лисица",
    species: "Vulpes vulpes",
    status: "rare",
    description: "Хищник с рыжей шерстью и пушистым хвостом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg/640px-Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg",
    population: "~30000 особей",
    habitat: "Леса и поля"
  },
  {
    id: 17,
    name: "Белка",
    species: "Sciurus vulgaris",
    status: "rare",
    description: "Прыгучий грызун с пушистым хвостом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sciurus_vulgaris_%28Pfalz%29.jpg/640px-Sciurus_vulgaris_%28Pfalz%29.jpg",
    population: "~150000 особей",
    habitat: "Леса и парки"
  },
  {
    id: 18,
    name: "Уж",
    species: "Natrix natrix",
    status: "vulnerable",
    description: "Неядовитая змея с жёлтыми пятнами за головой.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Natrix_natrix_-_adult_female_2.jpg/640px-Natrix_natrix_-_adult_female_2.jpg",
    population: "~50000 особей",
    habitat: "Водоёмы и влажные места"
  },
  {
    id: 19,
    name: "Ястреб-тетеревятник",
    species: "Accipiter gentilis",
    status: "vulnerable",
    description: "Крупный хищник, охотящийся на птиц.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Accipiter_gentilis_"
  },
  ]

const STORAGE_KEYS = {
    USER_DATA: 'knigabel_user_data',
    BOOKS_DATA: 'knigabel_books_data',
    LIBRARY_STATS: 'knigabel_library_stats',
    USER_REVIEWS: 'knigabel_user_reviews'
};

// Отзывы пользователей
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
    bookId: 25,
    rating: 5,
    comment: "Книга, которая заставляет задуматься о современном обществе. Актуально как никогда!",
    date: "2024-01-12",
    likes: 20
  },
  {
    id: 5,
    userName: "София М.",
    bookTitle: "Маленький принц",
    bookId: 24,
    rating: 5,
    comment: "Перечитываю эту книгу в разные периоды жизни и каждый раз нахожу новые смыслы. Бессмертная классика!",
    date: "2024-01-11",
    likes: 25
  },
  {
    id: 6,
    userName: "Алексей В.",
    bookTitle: "Двенадцать стульев",
    bookId: 19,
    rating: 5,
    comment: "Невероятно смешная и умная сатира! Остап Бендер - один из самых харизматичных персонажей в литературе.",
    date: "2024-01-10",
    likes: 18
  }
];

// Рассчитываем статистику библиотеки
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: MOCK_BOOKS.filter(book => !book.available).length,
    totalGenres: MOCK_GENRES.length - 1
};

// Данные пользователя по умолчанию
const DEFAULT_USER_DATA = {
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
    stats: {
        totalBooks: 25,
        activeBorrows: 1,
        totalRead: 2,
        readingDays: 45
    }
};

// Экспортируем все данные
window.APP_DATA = {
    CONFIG,
    MOCK_BOOKS,
    MOCK_GENRES,
    RED_BOOK_ANIMALS,
    STORAGE_KEYS,
    BOOK_REVIEWS,
    MOCK_STATS,
    DEFAULT_USER_DATA
};