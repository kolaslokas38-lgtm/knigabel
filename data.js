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
    icon: "📖",
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
    icon: "🔪",
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
    icon: "😈",
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
    icon: "✍️",
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
    icon: "⚔️",
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
    icon: "👨‍👦",
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
    icon: "💔",
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
    icon: "👻",
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
    icon: "🦸",
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
    icon: "🙏",
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
    icon: "👨‍✈️",
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
    icon: "🛌",
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
    icon: "🌸",
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
    icon: "🎭",
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
    icon: "🧠",
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
    icon: "⚕️",
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
    icon: "👼",
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
    icon: "👹",
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
    icon: "💎",
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
    icon: "💰",
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
    icon: "🏛️",
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
    icon: "💍",
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
    icon: "🎣",
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
    icon: "👑",
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
    icon: "👁️",
    readLink: "https://ilibrary.ru/text/1180/p.1/index.html",
    pages: 320,
    rating: 4.8,
    reviewsCount: 189
  }
];
const MOCK_GENRES = [
  "Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика", 
  "Роман в стихах", "Реализм", "Поэма", "Социально-психологический роман",
  "Философский роман", "Исторический роман", "Драма", "Комедия", 
  "Сатирический роман", "Политический роман", "Повести", "Философская сказка",
  "Антиутопия"
];

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Встреча с автором: Михаил Булгаков",
    description: "Литературный вечер с обсуждением творчества Михаила Булгакова. Автор расскажет о создании 'Мастера и Маргариты' и ответит на вопросы читателей.",
    date: "2024-12-15",
    time: "18:00",
    location: "Центральная библиотека, Минск",
    type: "встреча с автором",
    availableTickets: 50,
    totalTickets: 100,
    price: 15,
    image: "📖",
    category: "литературный вечер"
  },
  {
    id: 2,
    title: "Книжный клуб: Классика русской литературы",
    description: "Обсуждение произведений Льва Толстого и Фёдора Достоевского. Приглашаются все любители русской классики.",
    date: "2024-12-20",
    time: "19:30",
    location: "Книжный магазин 'КнигиБел', Минск",
    type: "книжный клуб",
    availableTickets: 25,
    totalTickets: 30,
    price: 5,
    image: "📚",
    category: "обсуждение книг"
  },
  {
    id: 3,
    title: "Мастер-класс по писательскому мастерству",
    description: "Практический семинар по созданию персонажей и сюжетов. Ведущий - известный белорусский писатель.",
    date: "2024-12-25",
    time: "16:00",
    location: "Литературный центр, Минск",
    type: "мастер-класс",
    availableTickets: 20,
    totalTickets: 25,
    price: 25,
    image: "✍️",
    category: "мастер-класс"
  },
  {
    id: 4,
    title: "Детский литературный праздник",
    description: "Весёлый праздник для детей с чтением сказок, конкурсами и встречей с иллюстраторами детских книг.",
    date: "2024-12-30",
    time: "14:00",
    location: "Детская библиотека, Минск",
    type: "праздник",
    availableTickets: 80,
    totalTickets: 100,
    price: 8,
    image: "🎉",
    category: "детское мероприятие"
  },
  {
    id: 5,
    title: "Поэтический вечер: Современная поэзия Беларуси",
    description: "Вечер поэзии с участием молодых белорусских поэтов. Чтение стихов и обсуждение современной литературы.",
    date: "2025-01-10",
    time: "20:00",
    location: "Арт-кафе 'Стихи', Минск",
    type: "поэтический вечер",
    availableTickets: 40,
    totalTickets: 50,
    price: 10,
    image: "📝",
    category: "поэзия"
  },
  {
    id: 6,
    title: "Литературная экскурсия по Минску",
    description: "Пешеходная экскурсия по литературным местам Минска. Посещение музеев и памятных мест, связанных с писателями.",
    date: "2025-01-15",
    time: "11:00",
    location: "Центр города, Минск",
    type: "экскурсия",
    availableTickets: 15,
    totalTickets: 20,
    price: 20,
    image: "🏛️",
    category: "экскурсия"
  }
];

const RED_BOOK_ANIMALS = [
  {
    id: 1,
    name: "Зубр",
    species: "Bison bonasus",
    status: "endangered",
    description: "Крупнейшее наземное млекопитающее Европы. Символ Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bison_bonasus_%28Linnaeus_1758%29.jpg/330px-Bison_bonasus_%28Linnaeus_1758%29.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ciconia_nigra_on_Lesbos_Greece.jpg/330px-Ciconia_nigra_on_Lesbos_Greece.jpg",
    population: "~400 пар",
    habitat: "Заболоченные леса"
  },
  {
    id: 4,
    name: "Беркут",
    species: "Aquila chrysaetos",
    status: "endangered",
    description: "Крупный орёл, самый большой хищник Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg/330px-Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg",
    population: "~50 пар",
    habitat: "Северные районы"
  },
  {
    id: 5,
    name: "Выдра",
    species: "Lutra lutra",
    status: "vulnerable",
    description: "Водный хищник с ценным мехом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Young_Otter_%281%29_%285878286924%29.jpg/330px-Young_Otter_%281%29_%285878286924%29.jpg",
    population: "~2000 особей",
    habitat: "Реки и озёра"
  },
  {
    id: 6,
    name: "Барсук",
    species: "Meles meles",
    status: "rare",
    description: "Крупный хищник, роющий глубокие норы.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/%D0%91%D0%BE%D1%80%D1%81%D1%83%D0%BA.jpg/330px-%D0%91%D0%BE%D1%80%D1%81%D1%83%D0%BA.jpg",
    population: "~5000 особей",
    habitat: "Леса по всей стране"
  },
  {
    id: 7,
    name: "Серый журавль",
    species: "Grus grus",
    status: "vulnerable",
    description: "Крупная перелётная птица с громким голосом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Grus_grus_1_%28Marek_Szczepanek%29.jpg/330px-Grus_grus_1_%28Marek_Szczepanek%29.jpg",
    population: "~1500 пар",
    habitat: "Болота и влажные луга"
  },
  {
    id: 8,
    name: "Филин",
    species: "Bubo bubo",
    status: "endangered",
    description: "Крупнейшая сова Европы с характерными 'ушами'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bubo_bubo_winter_1.jpg/330px-Bubo_bubo_winter_1.jpg",
    population: "~100 пар",
    habitat: "Глухие леса"
  },
  {
    id: 9,
    name: "Волк",
    species: "Canis lupus",
    status: "vulnerable",
    description: "Крупный хищник, санитар леса.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/330px-Eurasian_wolf_2.jpg",
    population: "~1500 особей",
    habitat: "Леса по всей стране"
  },
  {
    id: 10,
    name: "Бурый медведь",
    species: "Ursus arctos",
    status: "endangered",
    description: "Крупнейший хищник Беларуси.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/330px-2010-kodiak-bear-1.jpg",
    population: "~100 особей",
    habitat: "Беловежская пуща"
  },
  {
    id: 11,
    name: "Лось",
    species: "Alces alces",
    status: "rare",
    description: "Крупнейший представитель оленевых.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/330px-Moose_superior.jpg",
    population: "~10000 особей",
    habitat: "Леса и болота"
  },
  {
    id: 12,
    name: "Косуля",
    species: "Capreolus capreolus",
    status: "rare",
    description: "Небольшой изящный олень.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Capreolus_capreolus_2_Jojo.jpg/330px-Capreolus_capreolus_2_Jojo.jpg",
    population: "~50000 особей",
    habitat: "Леса и поля"
  },
  {
    id: 13,
    name: "Бобр",
    species: "Castor fiber",
    status: "vulnerable",
    description: "Крупный грызун, строитель плотин.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BE%D0%B1%D1%80_%28Castor_fiber%29%2C_%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5-%D0%A1%D1%82%D1%80%D0%B5%D1%88%D0%BD%D0%B5%D0%B2%D0%BE.jpg/330px-%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BE%D0%B1%D1%80_%28Castor_fiber%29%2C_%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5-%D0%A1%D1%82%D1%80%D0%B5%D1%88%D0%BD%D0%B5%D0%B2%D0%BE.jpg",
    population: "~60000 особей",
    habitat: "Реки и озёра"
  },
  {
    id: 14,
    name: "Ёж",
    species: "Erinaceus europaeus",
    status: "rare",
    description: "Небольшой насекомоядный зверёк с иголками.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/330px-Erinaceus_europaeus_LC0119.jpg",
    population: "~100000 особей",
    habitat: "Леса, парки, сады"
  },
  {
    id: 15,
    name: "Заяц-русак",
    species: "Lepus europaeus",
    status: "rare",
    description: "Крупный заяц с длинными ушами.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lepus_europaeus_%28Causse_M%C3%A9jean%2C_Loz%C3%A8re%29-cropped.jpg/330px-Lepus_europaeus_%28Causse_M%C3%A9jean%2C_Loz%C3%A8re%29-cropped.jpg",
    population: "~80000 особей",
    habitat: "Поля и опушки"
  },
  {
    id: 16,
    name: "Лисица",
    species: "Vulpes vulpes",
    status: "rare",
    description: "Хищник с рыжей шерстью и пушистым хвостом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tiergarten_Worms_Rotfuchs_2011.JPG/330px-Tiergarten_Worms_Rotfuchs_2011.JPG",
    population: "~30000 особей",
    habitat: "Леса и поля"
  },
  {
    id: 17,
    name: "Белка",
    species: "Sciurus vulgaris",
    status: "rare",
    description: "Прыгучий грызун с пушистым хвостом.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/MattiParkkonen_Orava.jpg",
    population: "~150000 особей",
    habitat: "Леса и парки"
  },
  {
    id: 18,
    name: "Уж",
    species: "Natrix natrix",
    status: "vulnerable",
    description: "Неядовитая змея с жёлтыми пятнами за головой.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2017.07.17.-15-Tiefer_See_oder_Grubensee-Storkow_%28Mark%29--Ringelnatter.jpg/330px-2017.07.17.-15-Tiefer_See_oder_Grubensee-Storkow_%28Mark%29--Ringelnatter.jpg",
    population: "~50000 особей",
    habitat: "Водоёмы и влажные места"
  },
  {
    id: 19,
    name: "Ястреб-тетеревятник",
    species: "Accipiter gentilis",
    status: "vulnerable",
    description: "Крупный хищник, охотящийся на птиц.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Northern_Goshawk_ad_M2.jpg/250px-Northern_Goshawk_ad_M2.jpg",
    population: "20000 особей",
    habitat: " Населяют хвойные и лиственные леса."
  },
  ]


// Отзывы пользователей (глобальные, сохраняются для всех)
let BOOK_REVIEWS = [];
const THEMES = {
    LIGHT: {
        name: 'light',
        bg: '#ffffff',
        text: '#333333',
        card: '#f8f9fa',
        border: '#e0e0e0',
        primary: '#4CAF50',
        secondary: '#2196F3',
        accent: '#FF9800'
    },
    DARK: {
        name: 'dark',
        bg: '#1a1a1a',
        text: '#ffffff',
        card: '#2d2d2d',
        border: '#404040',
        primary: '#66BB6A',
        secondary: '#64B5F6',
        accent: '#FFB74D'
    }
};

// Ключи для localStorage
const STORAGE_KEYS = {
    USER_DATA: 'knigabel_user_data',
    BOOKS_DATA: 'knigabel_books_data',
    LIBRARY_STATS: 'knigabel_library_stats',
    USER_REVIEWS: 'knigabel_user_reviews',
    THEME: 'knigabel_theme',
    BOOK_REVIEWS: 'knigabel_global_reviews_v2' // Изменен ключ для сброса старых отзывов
};

// Рассчитываем статистику библиотеки
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: MOCK_BOOKS.filter(book => !book.available).length,
    totalGenres: MOCK_GENRES.length - 1,
    totalReviews: BOOK_REVIEWS.length
};

// Данные пользователя по умолчанию
const DEFAULT_USER_DATA = {
    name: 'Пользователь',
    avatar: '👤',
    registrationDate: new Date().toLocaleDateString('ru-RU'),
    telegramId: null,
    theme: 'light',
    // Система уровней и достижений
    level: 1,
    experience: 0,
    experienceToNext: 100,
    totalPagesRead: 0,
    readingStreak: 0,
    achievements: [],
    bookProgress: {}, // {bookId: {pagesRead: number, completed: boolean, achievements: []}}
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
    myReviews: [], // Новое поле для отзывов пользователя
    bookedEvents: [], // Новое поле для забронированных событий
    stats: {
        totalBooks: 25,
        activeBorrows: 1,
        totalRead: 2,
        readingDays: 45,
        reviewsWritten: 0,
        totalEvents: 0, // Новое поле для статистики событий
        booksCompleted: 0,
        achievementsUnlocked: 0
    }
};

// Функции для работы с рейтингами
const RatingUtils = {
    // Обновление рейтинга книги при добавлении нового отзыва
    updateBookRating(bookId, newRating) {
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        if (book) {
            book.totalRating = (book.totalRating || 0) + newRating;
            book.ratingsCount = (book.ratingsCount || 0) + 1;
            book.rating = Math.round((book.totalRating / book.ratingsCount) * 10) / 10;
            book.reviewsCount = book.ratingsCount;
        }
    },

    // Создание звезд рейтинга
    createStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '⭐';
        if (hasHalfStar) stars += '✨';
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) stars += '☆';
        
        return stars;
    },

    // Текстовое описание рейтинга
    getRatingText(rating) {
        const texts = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];
        return texts[Math.floor(rating) - 1] || 'Не оценено';
    }
};

// Система достижений
const ACHIEVEMENTS = [
    // Достижения за чтение
    { id: 'first_book', name: 'Первый шаг', description: 'Прочитайте первую книгу', icon: '📖', type: 'reading', condition: (user) => user.stats.booksCompleted >= 1 },
    { id: 'bookworm', name: 'Книжный червь', description: 'Прочитайте 5 книг', icon: '📚', type: 'reading', condition: (user) => user.stats.booksCompleted >= 5 },
    { id: 'literature_lover', name: 'Любитель литературы', description: 'Прочитайте 10 книг', icon: '❤️', type: 'reading', condition: (user) => user.stats.booksCompleted >= 10 },
    { id: 'bibliophile', name: 'Библиофил', description: 'Прочитайте 25 книг', icon: '🏆', type: 'reading', condition: (user) => user.stats.booksCompleted >= 25 },

    // Достижения за страницы
    { id: 'page_master', name: 'Мастер страниц', description: 'Прочитайте 1000 страниц', icon: '📄', type: 'pages', condition: (user) => user.totalPagesRead >= 1000 },
    { id: 'page_legend', name: 'Легенда страниц', description: 'Прочитайте 5000 страниц', icon: '📜', type: 'pages', condition: (user) => user.totalPagesRead >= 5000 },

    // Достижения за отзывы
    { id: 'first_review', name: 'Критик', description: 'Напишите первый отзыв', icon: '✍️', type: 'reviews', condition: (user) => user.stats.reviewsWritten >= 1 },
    { id: 'review_expert', name: 'Эксперт по отзывам', description: 'Напишите 10 отзывов', icon: '⭐', type: 'reviews', condition: (user) => user.stats.reviewsWritten >= 10 },

    // Достижения за уровень
    { id: 'level_up', name: 'Рост уровня', description: 'Достигните 5 уровня', icon: '⬆️', type: 'level', condition: (user) => user.level >= 5 },
    { id: 'high_level', name: 'Высокий уровень', description: 'Достигните 10 уровня', icon: '🎯', type: 'level', condition: (user) => user.level >= 10 },

    // Достижения за события
    { id: 'first_event', name: 'Посетитель событий', description: 'Посетите первое мероприятие', icon: '🎫', type: 'events', condition: (user) => user.stats.totalEvents >= 1 },
    { id: 'event_regular', name: 'Постоянный посетитель', description: 'Посетите 5 мероприятий', icon: '🎪', type: 'events', condition: (user) => user.stats.totalEvents >= 5 },

    // Специальные достижения
    { id: 'early_bird', name: 'Ранняя пташка', description: 'Используйте приложение в первые 7 дней', icon: '🐦', type: 'special', condition: (user) => user.stats.readingDays >= 7 },
    { id: 'streak_master', name: 'Мастер серии', description: 'Поддерживайте серию чтения 7 дней', icon: '🔥', type: 'special', condition: (user) => user.readingStreak >= 7 }
];

// Функции для работы с достижениями
const AchievementSystem = {
    checkAchievements(user) {
        const newAchievements = [];
        ACHIEVEMENTS.forEach(achievement => {
            if (!user.achievements.some(a => a.id === achievement.id) && achievement.condition(user)) {
                newAchievements.push({
                    ...achievement,
                    unlockedAt: new Date().toISOString()
                });
            }
        });
        return newAchievements;
    },

    unlockAchievements(user, newAchievements) {
        user.achievements.push(...newAchievements);
        user.stats.achievementsUnlocked = user.achievements.length;
    },

    getAchievementProgress(user, achievementId) {
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!achievement) return null;

        // Здесь можно добавить логику для расчета прогресса
        return {
            current: 0,
            target: 1,
            percentage: 0
        };
    }
};

// Функции для работы с уровнями
const LevelSystem = {
    calculateLevel(experience) {
        // Уровень = floor(опыт / 100) + 1
        return Math.floor(experience / 100) + 1;
    },

    getExperienceForLevel(level) {
        return (level - 1) * 100;
    },

    getExperienceToNextLevel(currentExp) {
        const currentLevel = this.calculateLevel(currentExp);
        const nextLevelExp = this.getExperienceForLevel(currentLevel + 1);
        return nextLevelExp - currentExp;
    },

    addExperience(user, amount) {
        user.experience += amount;
        const newLevel = this.calculateLevel(user.experience);

        if (newLevel > user.level) {
            user.level = newLevel;
            // Показать уведомление о новом уровне
            return { leveledUp: true, newLevel: newLevel };
        }

        user.experienceToNext = this.getExperienceToNextLevel(user.experience);
        return { leveledUp: false };
    }
};

// Экспортируем все данные
window.APP_DATA = {
    CONFIG,
    MOCK_BOOKS,
    MOCK_GENRES,
    MOCK_EVENTS,
    RED_BOOK_ANIMALS,
    STORAGE_KEYS,
    BOOK_REVIEWS,
    MOCK_STATS,
    DEFAULT_USER_DATA,
    THEMES,
    RatingUtils,
    ACHIEVEMENTS,
    AchievementSystem,
    LevelSystem
};