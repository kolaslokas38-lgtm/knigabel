// Конфигурация
console.log('data.js loading start');
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/War_and_Peace_-_First_edition%2C_1869.jpg/220px-War_and_Peace_-_First_edition%2C_1869.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Crime_and_Punishment_cover.gif/220px-Crime_and_Punishment_cover.gif",
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
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bulgakov%2C_Mikhail_-_The_Master_and_Margarita_%281967%2C_1st_ed.%29.jpg/220px-Bulgakov%2C_Mikhail_-_The_Master_and_Margarita_%281967%2C_1st_ed.%29.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eugene_Onegin_1833.jpg/220px-Eugene_Onegin_1833.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/And_Quiet_Flows_the_Don_1st_edition.jpg/220px-And_Quiet_Flows_the_Don_1st_edition.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fathers_and_Sons_1862.jpg/220px-Fathers_and_Sons_1862.jpg",
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
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AnnaKareninaTitle.jpg/220px-AnnaKareninaTitle.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dead_Souls_1846.jpg/220px-Dead_Souls_1846.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hero_of_Our_Time_1840.jpg/220px-Hero_of_Our_Time_1840.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/The_Brothers_Karamazov_1881.jpg/220px-The_Brothers_Karamazov_1881.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_Captain%27s_Daughter_1836.jpg/220px-The_Captain%27s_Daughter_1836.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Oblomov_1859.jpg/220px-Oblomov_1859.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Cherry_Orchard_1904.jpg/220px-The_Cherry_Orchard_1904.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_Inspector_General_1836.jpg/220px-The_Inspector_General_1836.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Woe_from_Wit_1833.jpg/220px-Woe_from_Wit_1833.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Doctor_Zhivago_1957.jpg/220px-Doctor_Zhivago_1957.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Idiot_1869.jpg/220px-The_Idiot_1869.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Demons_1873.jpg/220px-Demons_1873.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Twelve_Chairs_1928.jpg/220px-Twelve_Chairs_1928.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_Golden_Calf_1931.jpg/220px-The_Golden_Calf_1931.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Petersburg_Tales_1842.jpg/220px-Petersburg_Tales_1842.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_Garnet_Bracelet_1911.jpg/220px-The_Garnet_Bracelet_1911.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Old_Man_and_the_Sea_1952.jpg/220px-The_Old_Man_and_the_Sea_1952.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Little_Prince_1943.jpg/220px-The_Little_Prince_1943.jpg",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nineteen_Eighty-Four_1984.jpg/220px-Nineteen_Eighty-Four_1984.jpg",
    readLink: "https://ilibrary.ru/text/1180/p.1/index.html",
    pages: 320,
    rating: 4.8,
    reviewsCount: 189
  },
  {
    id: 26,
    title: "Шерлок Холмс: Собака Баскервилей",
    author: "Артур Конан Дойл",
    year: 1902,
    genre: "Детектив",
    description: "Классический детективный роман о знаменитом сыщике Шерлоке Холмсе и докторе Ватсоне.",
    isbn: "978-5-699-80706-7",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Hound_of_the_Baskervilles_1902.jpg/220px-The_Hound_of_the_Baskervilles_1902.jpg",
    readLink: "https://ilibrary.ru/text/1190/p.1/index.html",
    pages: 256,
    rating: 4.6,
    reviewsCount: 145
  },
  {
    id: 27,
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    genre: "Фэнтези",
    description: "Первая книга о приключениях юного волшебника Гарри Поттера в Хогвартсе.",
    isbn: "978-5-699-80707-4",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Harry_Potter_and_the_Philosopher%27s_Stone_1997.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_1997.jpg",
    readLink: "https://ilibrary.ru/text/1200/p.1/index.html",
    pages: 336,
    rating: 4.9,
    reviewsCount: 312
  },
  {
    id: 28,
    title: "Убить пересмешника",
    author: "Харпер Ли",
    year: 1960,
    genre: "Драма",
    description: "Роман о расовой несправедливости и детской невинности в Америке 1930-х годов.",
    isbn: "978-5-699-80708-1",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/To_Kill_a_Mockingbird_1960.jpg/220px-To_Kill_a_Mockingbird_1960.jpg",
    readLink: "https://ilibrary.ru/text/1210/p.1/index.html",
    pages: 376,
    rating: 4.7,
    reviewsCount: 198
  },
  {
    id: 29,
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    year: 1925,
    genre: "Роман",
    description: "История о американской мечте, любви и трагедии в эпоху джаза.",
    isbn: "978-5-699-80709-8",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Great_Gatsby_1925.jpg/220px-The_Great_Gatsby_1925.jpg",
    readLink: "https://ilibrary.ru/text/1220/p.1/index.html",
    pages: 180,
    rating: 4.4,
    reviewsCount: 167
  },
  {
    id: 30,
    title: "Над пропастью во ржи",
    author: "Джером Дэвид Сэлинджер",
    year: 1951,
    genre: "Роман",
    description: "История подростка Холдена Колфилда и его видения мира.",
    isbn: "978-5-699-80710-4",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Catcher_in_the_Rye_1951.jpg/220px-The_Catcher_in_the_Rye_1951.jpg",
    readLink: "https://ilibrary.ru/text/1230/p.1/index.html",
    pages: 277,
    rating: 4.5,
    reviewsCount: 234
  },
  {
    id: 31,
    title: "Сто лет одиночества",
    author: "Габриэль Гарсия Маркес",
    year: 1967,
    genre: "Магический реализм",
    description: "Эпопея семьи Буэндиа в вымышленном городе Макондо.",
    isbn: "978-5-699-80711-1",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/One_Hundred_Years_of_Solitude_1967.jpg/220px-One_Hundred_Years_of_Solitude_1967.jpg",
    readLink: "https://ilibrary.ru/text/1240/p.1/index.html",
    pages: 448,
    rating: 4.8,
    reviewsCount: 189
  },
  {
    id: 32,
    title: "Лолита",
    author: "Владимир Набоков",
    year: 1955,
    genre: "Роман",
    description: "Скандальный роман о сложных взаимоотношениях.",
    isbn: "978-5-699-80712-8",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lolita_1955.jpg/220px-Lolita_1955.jpg",
    readLink: "https://ilibrary.ru/text/1250/p.1/index.html",
    pages: 336,
    rating: 4.3,
    reviewsCount: 156
  },
  {
    id: 33,
    title: "Властелин колец: Братство кольца",
    author: "Джон Рональд Руэл Толкин",
    year: 1954,
    genre: "Фэнтези",
    description: "Первая часть эпической трилогии о Средиземье.",
    isbn: "978-5-699-80713-5",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Fellowship_of_the_Ring_1954.jpg/220px-The_Fellowship_of_the_Ring_1954.jpg",
    readLink: "https://ilibrary.ru/text/1260/p.1/index.html",
    pages: 576,
    rating: 4.9,
    reviewsCount: 278
  },
  {
    id: 34,
    title: "Дон Кихот",
    author: "Мигель де Сервантес",
    year: 1605,
    genre: "Роман",
    description: "Классический роман о рыцаре и его оруженосце.",
    isbn: "978-5-699-80714-2",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Don_Quixote_1605.jpg/220px-Don_Quixote_1605.jpg",
    readLink: "https://ilibrary.ru/text/1270/p.1/index.html",
    pages: 1024,
    rating: 4.6,
    reviewsCount: 134
  },
  {
    id: 35,
    title: "Фауст",
    author: "Иоганн Вольфганг Гёте",
    year: 1808,
    genre: "Трагедия",
    description: "Философская трагедия о сделке с дьяволом.",
    isbn: "978-5-699-80715-9",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Faust_1808.jpg/220px-Faust_1808.jpg",
    readLink: "https://ilibrary.ru/text/1280/p.1/index.html",
    pages: 464,
    rating: 4.4,
    reviewsCount: 98
  },
  {
    id: 36,
    title: "Божественная комедия",
    author: "Данте Алигьери",
    year: 1320,
    genre: "Поэма",
    description: "Эпическая поэма о путешествии по загробному миру.",
    isbn: "978-5-699-80716-6",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Divine_Comedy_1320.jpg/220px-Divine_Comedy_1320.jpg",
    readLink: "https://ilibrary.ru/text/1290/p.1/index.html",
    pages: 688,
    rating: 4.7,
    reviewsCount: 87
  },
  {
    id: 37,
    title: "Искусство войны",
    author: "Сунь Цзы",
    year: -500,
    genre: "Трактат",
    description: "Древний китайский трактат о стратегии и войне.",
    isbn: "978-5-699-80717-3",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Art_of_War.jpg/220px-The_Art_of_War.jpg",
    readLink: "https://ilibrary.ru/text/1300/p.1/index.html",
    pages: 96,
    rating: 4.5,
    reviewsCount: 145
  },
  {
    id: 38,
    title: "Краткая история времени",
    author: "Стивен Хокинг",
    year: 1988,
    genre: "Научно-популярная",
    description: "Введение в современную космологию для широкой аудитории.",
    isbn: "978-5-699-80718-0",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/A_Brief_History_of_Time_1988.jpg/220px-A_Brief_History_of_Time_1988.jpg",
    readLink: "https://ilibrary.ru/text/1310/p.1/index.html",
    pages: 256,
    rating: 4.6,
    reviewsCount: 203
  },
  {
    id: 39,
    title: "Солярис",
    author: "Станислав Лем",
    year: 1961,
    genre: "Научная фантастика",
    description: "Философский роман о контакте с инопланетным разумом.",
    isbn: "978-5-699-80719-7",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Solaris_1961.jpg/220px-Solaris_1961.jpg",
    readLink: "https://ilibrary.ru/text/1320/p.1/index.html",
    pages: 224,
    rating: 4.4,
    reviewsCount: 167
  },
  {
    id: 40,
    title: "Дюна",
    author: "Фрэнк Герберт",
    year: 1965,
    genre: "Научная фантастика",
    description: "Эпическая сага о пустынной планете Арракис.",
    isbn: "978-5-699-80720-3",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dune_1965.jpg/220px-Dune_1965.jpg",
    readLink: "https://ilibrary.ru/text/1330/p.1/index.html",
    pages: 688,
    rating: 4.8,
    reviewsCount: 245
  },
  {
    id: 41,
    title: "Метро 2033",
    author: "Дмитрий Глуховский",
    year: 2005,
    genre: "Постапокалипсис",
    description: "Роман о выживании в московском метро после ядерной войны.",
    isbn: "978-5-699-80721-0",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Metro_2033_2005.jpg/220px-Metro_2033_2005.jpg",
    readLink: "https://ilibrary.ru/text/1340/p.1/index.html",
    pages: 352,
    rating: 4.7,
    reviewsCount: 189
  },
  {
    id: 42,
    title: "Тёмные аллеи",
    author: "Иван Бунин",
    year: 1943,
    genre: "Проза",
    description: "Сборник рассказов о любви и человеческих страстях.",
    isbn: "978-5-699-80722-7",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dark_Avenues_1943.jpg/220px-Dark_Avenues_1943.jpg",
    readLink: "https://ilibrary.ru/text/1350/p.1/index.html",
    pages: 288,
    rating: 4.5,
    reviewsCount: 98
  },
  {
    id: 43,
    title: "Чайка по имени Джонатан Ливингстон",
    author: "Ричард Бах",
    year: 1970,
    genre: "Философская притча",
    description: "История о чайке, которая стремится к совершенству.",
    isbn: "978-5-699-80723-4",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jonathan_Livingston_Seagull_1970.jpg/220px-Jonathan_Livingston_Seagull_1970.jpg",
    readLink: "https://ilibrary.ru/text/1360/p.1/index.html",
    pages: 128,
    rating: 4.6,
    reviewsCount: 234
  },
  {
    id: 44,
    title: "Атлант расправил плечи",
    author: "Айн Рэнд",
    year: 1957,
    genre: "Философский роман",
    description: "Роман о роли разума и индивидуализма в обществе.",
    isbn: "978-5-699-80724-1",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Atlas_Shrugged_1957.jpg/220px-Atlas_Shrugged_1957.jpg",
    readLink: "https://ilibrary.ru/text/1370/p.1/index.html",
    pages: 1168,
    rating: 4.3,
    reviewsCount: 145
  },
  {
    id: 45,
    title: "Общество потребления",
    author: "Жан Бодрийяр",
    year: 1970,
    genre: "Философия",
    description: "Критика общества потребления и симулякров.",
    isbn: "978-5-699-80725-8",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Society_of_Consumption_1970.jpg/220px-The_Society_of_Consumption_1970.jpg",
    readLink: "https://ilibrary.ru/text/1380/p.1/index.html",
    pages: 272,
    rating: 4.2,
    reviewsCount: 76
  },
  {
    id: 46,
    title: "Смерть Ивана Ильича",
    author: "Лев Толстой",
    year: 1886,
    genre: "Философская повесть",
    description: "Размышления о смысле жизни и смерти.",
    isbn: "978-5-699-80726-5",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Death_of_Ivan_Ilyich_1886.jpg/220px-The_Death_of_Ivan_Ilyich_1886.jpg",
    readLink: "https://ilibrary.ru/text/1390/p.1/index.html",
    pages: 96,
    rating: 4.7,
    reviewsCount: 123
  },
  {
    id: 47,
    title: "Записки из подполья",
    author: "Федор Достоевский",
    year: 1864,
    genre: "Философская повесть",
    description: "Монолог «подпольного» человека о свободе воли.",
    isbn: "978-5-699-80727-2",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Notes_from_Underground_1864.jpg/220px-Notes_from_Underground_1864.jpg",
    readLink: "https://ilibrary.ru/text/1400/p.1/index.html",
    pages: 112,
    rating: 4.5,
    reviewsCount: 156
  },
  {
    id: 48,
    title: "Шум и ярость",
    author: "Уильям Фолкнер",
    year: 1929,
    genre: "Модернизм",
    description: "Экспериментальный роман о семье Компсонов.",
    isbn: "978-5-699-80728-9",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Sound_and_the_Fury_1929.jpg/220px-The_Sound_and_the_Fury_1929.jpg",
    readLink: "https://ilibrary.ru/text/1410/p.1/index.html",
    pages: 416,
    rating: 4.4,
    reviewsCount: 89
  },
  {
    id: 49,
    title: "Процесс",
    author: "Франц Кафка",
    year: 1925,
    genre: "Абсурдистская проза",
    description: "История Йозефа К., обвиненного в неизвестном преступлении.",
    isbn: "978-5-699-80729-6",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Trial_1925.jpg/220px-The_Trial_1925.jpg",
    readLink: "https://ilibrary.ru/text/1420/p.1/index.html",
    pages: 256,
    rating: 4.6,
    reviewsCount: 178
  },
  {
    id: 50,
    title: "Замок",
    author: "Франц Кафка",
    year: 1926,
    genre: "Абсурдистская проза",
    description: "История землемера К., пытающегося проникнуть в замок.",
    isbn: "978-5-699-80730-2",
    available: true,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Castle_1926.jpg/220px-The_Castle_1926.jpg",
    readLink: "https://ilibrary.ru/text/1430/p.1/index.html",
    pages: 352,
    rating: 4.5,
    reviewsCount: 134
  }
];
const MOCK_GENRES = [
  "Все жанры", "Роман-эпопея", "Психологический роман", "Фантастика", 
  "Роман в стихах", "Реализм", "Поэма", "Социально-психологический роман",
  "Философский роман", "Исторический роман", "Драма", "Комедия", 
  "Сатирический роман", "Политический роман", "Повести", "Философская сказка",
  "Антиутопия"
];

const DAILY_CHALLENGES = [
   {
     id: 'read_pages',
     title: 'Читатель дня',
     description: 'Прочитайте 20 страниц сегодня',
     type: 'daily',
     target: 20,
     reward: 25,
     icon: '📖',
     category: 'reading'
   },
   {
     id: 'write_review',
     title: 'Критик',
     description: 'Напишите отзыв на книгу',
     type: 'daily',
     target: 1,
     reward: 15,
     icon: '✍️',
     category: 'reviews'
   },
   {
     id: 'borrow_book',
     title: 'Исследователь',
     description: 'Забронируйте новую книгу',
     type: 'daily',
     target: 1,
     reward: 10,
     icon: '📚',
     category: 'borrowing'
   },
   {
     id: 'visit_event',
     title: 'Социофил',
     description: 'Посетите мероприятие',
     type: 'daily',
     target: 1,
     reward: 20,
     icon: '🎭',
     category: 'events'
   },
   {
     id: 'view_author',
     title: 'Любитель авторов',
     description: 'Просмотрите профиль автора',
     type: 'daily',
     target: 1,
     reward: 12,
     icon: '👤',
     category: 'authors'
   },
   {
     id: 'add_favorite',
     title: 'Коллекционер',
     description: 'Добавьте книгу в избранное',
     type: 'daily',
     target: 1,
     reward: 8,
     icon: '❤️',
     category: 'favorites'
   },
   {
     id: 'finish_book',
     title: 'Завершитель',
     description: 'Завершите чтение книги',
     type: 'daily',
     target: 1,
     reward: 30,
     icon: '🏁',
     category: 'completion'
   },
   {
     id: 'read_genre',
     title: 'Жанровый гурман',
     description: 'Прочитайте книгу нового жанра',
     type: 'daily',
     target: 1,
     reward: 18,
     icon: '🎭',
     category: 'genres'
   },
   {
     id: 'visit_education',
     title: 'Ученик',
     description: 'Посетите раздел образования',
     type: 'daily',
     target: 1,
     reward: 14,
     icon: '🎓',
     category: 'education'
   },
   {
     id: 'read_classic',
     title: 'Классик дня',
     description: 'Прочитайте классическую литературу',
     type: 'daily',
     target: 1,
     reward: 22,
     icon: '📜',
     category: 'genres'
   },
   {
     id: 'social_share',
     title: 'Делитель',
     description: 'Поделитесь книгой в социальных сетях',
     type: 'daily',
     target: 1,
     reward: 16,
     icon: '📣',
     category: 'social'
   }
];

const WEEKLY_CHALLENGES = [
   {
     id: 'read_books_week',
     title: 'Недельный читатель',
     description: 'Прочитайте 3 книги за неделю',
     type: 'weekly',
     target: 3,
     reward: 100,
     icon: '📚',
     category: 'reading'
   },
   {
     id: 'write_reviews_week',
     title: 'Супер-критик',
     description: 'Напишите 5 отзывов за неделю',
     type: 'weekly',
     target: 5,
     reward: 75,
     icon: '⭐',
     category: 'reviews'
   },
   {
     id: 'complete_genre',
     title: 'Жанровый эксперт',
     description: 'Прочитайте книги из 3 разных жанров',
     type: 'weekly',
     target: 3,
     reward: 50,
     icon: '🎭',
     category: 'diversity'
   },
   {
     id: 'social_butterfly',
     title: 'Социальная бабочка',
     description: 'Посетите 2 мероприятия за неделю',
     type: 'weekly',
     target: 2,
     reward: 40,
     icon: '🦋',
     category: 'events'
   },
   {
     id: 'author_explorer',
     title: 'Исследователь авторов',
     description: 'Изучите профили 5 разных авторов',
     type: 'weekly',
     target: 5,
     reward: 60,
     icon: '👥',
     category: 'authors'
   },
   {
     id: 'favorite_collector',
     title: 'Коллекционер избранного',
     description: 'Добавьте 7 книг в избранное',
     type: 'weekly',
     target: 7,
     reward: 45,
     icon: '❤️',
     category: 'favorites'
   },
   {
     id: 'reading_streak',
     title: 'Стрик-мастер',
     description: 'Поддерживайте серию чтения 7 дней',
     type: 'weekly',
     target: 7,
     reward: 80,
     icon: '🔥',
     category: 'streak'
   },
   {
     id: 'detailed_reviews',
     title: 'Подробный критик',
     description: 'Напишите 3 отзыва длиннее 100 символов',
     type: 'weekly',
     target: 3,
     reward: 55,
     icon: '📝',
     category: 'reviews'
   },
   {
     id: 'diverse_authors',
     title: 'Разнообразие авторов',
     description: 'Прочитайте книги 4 разных авторов',
     type: 'weekly',
     target: 4,
     reward: 65,
     icon: '👨‍🎨',
     category: 'authors'
   },
   {
     id: 'high_rating_reviews',
     title: 'Мастер рецензий',
     description: 'Напишите 3 отзыва с рейтингом 4+',
     type: 'weekly',
     target: 3,
     reward: 70,
     icon: '🌟',
     category: 'reviews'
   },
   {
     id: 'education_week',
     title: 'Учебная неделя',
     description: 'Пройдите 2 урока в разделе образования',
     type: 'weekly',
     target: 2,
     reward: 50,
     icon: '🎓',
     category: 'education'
   },
   {
     id: 'social_week',
     title: 'Социальный лидер',
     description: 'Поделитесь 5 книгами в социальных сетях',
     type: 'weekly',
     target: 5,
     reward: 55,
     icon: '📱',
     category: 'social'
   }
];

const AUTHOR_BIOS = {
  'Лев Толстой': {
    bio: 'Лев Николаевич Толстой (1828–1910) — великий русский писатель, мыслитель и общественный деятель. Автор эпопеи "Война и мир" и романа "Анна Каренина". Его произведения затрагивают глубокие философские и нравственные вопросы.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Leo_Tolstoy_1897.jpg/330px-Leo_Tolstoy_1897.jpg',
    famousWorks: ['Война и мир', 'Анна Каренина', 'Воскресение'],
    quotes: [
      'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.',
      'Истинная жизнь человека начинается лишь тогда, когда он может сказать: "Я есть, и я хочу быть тем, чем я хочу быть".'
    ]
  },
  'Федор Достоевский': {
    bio: 'Фёдор Михайлович Достоевский (1821–1881) — русский писатель, философ и публицист. Мастер психологического романа, исследующий глубины человеческой души.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dostoevsky_1876.jpg/330px-Dostoevsky_1876.jpg',
    famousWorks: ['Преступление и наказание', 'Идиот', 'Братья Карамазовы'],
    quotes: [
      'Человек есть тайна. Её надо разгадывать, и ежели будешь её разгадывать всю жизнь, то не говори, что потерял время.',
      'Красота спасёт мир.'
    ]
  },
  'Михаил Булгаков': {
    bio: 'Михаил Афанасьевич Булгаков (1891–1940) — русский писатель и драматург. Автор знаменитого романа "Мастер и Маргарита", полного мистики и сатиры.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bulgakov_1930s.jpg/330px-Bulgakov_1930s.jpg',
    famousWorks: ['Мастер и Маргарита', 'Собачье сердце', 'Белая гвардия'],
    quotes: [
      'Рукописи не горят!',
      'Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами всё дадут!'
    ]
  },
  'Янка Купала': {
    bio: 'Янка Купала (1882–1942) — классик белорусской литературы, поэт, драматург и переводчик. Один из основателей современной белорусской литературы. Его произведения пронизаны любовью к родной земле и борьбой за национальное возрождение.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Yanka_Kupala.jpg/330px-Yanka_Kupala.jpg',
    famousWorks: ['Курган', 'Кто ты?', 'Безымянная', 'Тарасова доля'],
    quotes: [
      'Я — сын Беларусі, я — Купала!',
      'Любіць Беларусь — гэта значыць быць чалавекам.'
    ]
  },
  'Якуб Колас': {
    bio: 'Якуб Колас (1882–1956) — белорусский писатель, поэт, драматург и общественный деятель. Классик белорусской литературы, лауреат Государственной премии СССР. Его произведения отражают жизнь белорусского народа.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Yakub_Kolas.jpg/330px-Yakub_Kolas.jpg',
    famousWorks: ['Новая земля', 'Сымон-музыкант', 'Рыбакиня', 'На ростанях'],
    quotes: [
      'Жыві, Беларусь, мая святая зямля!',
      'Любоў да Радзімы — гэта любоў да жыцця.'
    ]
  },
  'Максим Богданович': {
    bio: 'Максим Богданович (1891–1917) — белорусский поэт, переводчик и литературный критик. "Король белорусских поэтов", основоположник белорусской поэзии XX века. Его творчество отличается высокой художественностью и философской глубиной.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Maxim_Bogdanovich.jpg/330px-Maxim_Bogdanovich.jpg',
    famousWorks: ['Вянок', 'Смык беларускі', 'Залатыя яблыкі'],
    quotes: [
      'Я — беларус, і гэта гонар мой!',
      'Паэзія — гэта душа народа.'
    ]
  },
  'Васіль Быкаў': {
    bio: 'Васіль Быкаў (1924–2003) — белорусский писатель, участник Великой Отечественной войны. Лауреат Государственной премии СССР. Его произведения посвящены войне и нравственным проблемам человека в экстремальных условиях.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Vasil_Bykov.jpg/330px-Vasil_Bykov.jpg',
    famousWorks: ['Журавлиный крик', 'Альпийская баллада', 'Сотников', 'Обелиск'],
    quotes: [
      'Война — это ад, и ад этот не кончается никогда.',
      'Человек должен оставаться человеком даже в самых страшных обстоятельствах.'
    ]
  },
  'Уладзімір Караткевіч': {
    bio: 'Уладзімір Караткевіч (1930–1984) — белорусский писатель, поэт, историк и переводчик. Мастер исторической прозы, его произведения сочетают реальные исторические события с элементами фантастики и мистики.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vladimir_Korotkevich.jpg/330px-Vladimir_Korotkevich.jpg',
    famousWorks: ['Дикая охота короля Стаха', 'Христос приземлился в Гродно', 'Чёрный замок Ольшанский'],
    quotes: [
      'История — это не прошлое, а настоящее, которое мы носим в себе.',
      'Белорусская земля — это святая земля, и её нужно защищать.'
    ]
  },
  'Рыгор Барадулін': {
    bio: 'Рыгор Барадулін (1935–2014) — белорусский поэт, переводчик и общественный деятель. Народный поэт Беларуси, лауреат Государственной премии. Его поэзия отличается лиричностью и глубокой связью с природой.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ryhor_Baradulin.jpg/330px-Ryhor_Baradulin.jpg',
    famousWorks: ['А хто там ідзе?', 'Рунь', 'Балада пра чырвонае і белое'],
    quotes: [
      'Поэзия — это молитва души.',
      'Земля — это мать, и мы — её дети.'
    ]
  },
  'Кузьма Чорный': {
    bio: 'Кузьма Чорный (1900–1944) — белорусский писатель, поэт и драматург. Один из основателей белорусской детской литературы. Его произведения для детей полны мудрости и юмора.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kuzma_Chorny.jpg/330px-Kuzma_Chorny.jpg',
    famousWorks: ['Мая краіна', 'Казкі', 'Вершаваныя казкі'],
    quotes: [
      'Дети — это будущее нации.',
      'Смех — лучшее лекарство от бед.'
    ]
  },
  'Алесь Адамовіч': {
    bio: 'Алесь Адамовіч (1927–1994) — белорусский писатель, сценарист и общественный деятель. Участник войны, его произведения посвящены трагедии войны и послевоенной жизни.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ales_Adamovich.jpg/330px-Ales_Adamovich.jpg',
    famousWorks: ['Хатыньская повесть', 'Каратели', 'Последняя пастораль'],
    quotes: [
      'Война не имеет оправдания.',
      'Память о прошлом — залог будущего.'
    ]
  },
  'Ніл Гілевіч': {
    bio: 'Ніл Гілевіч (1931–2016) — белорусский поэт, переводчик и общественный деятель. Народный поэт Беларуси. Его поэзия отличается философской глубиной и гражданственностью.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nil_Hilevich.jpg/330px-Nil_Hilevich.jpg',
    famousWorks: ['Рыбакова хата', 'Паэзія', 'Зямля бацькоў'],
    quotes: [
      'Поэзия — это голос совести.',
      'Родина — это не только земля, но и душа.'
    ]
  }
};

const BOOK_QUOTES = [
  {
    book: 'Война и мир',
    author: 'Лев Толстой',
    quote: 'Человек создан для счастья, как птица для полёта.',
    category: 'философия'
  },
  {
    book: 'Преступление и наказание',
    author: 'Федор Достоевский',
    quote: 'Умный человек не может быть не трусом, а трус не может быть умным.',
    category: 'психология'
  },
  {
    book: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    quote: 'Разруха не в клозетах, а в головах.',
    category: 'сатира'
  },
  {
    book: 'Анна Каренина',
    author: 'Лев Толстой',
    quote: 'Все смешалось в доме Облонских.',
    category: 'семья'
  },
  {
    book: '1984',
    author: 'Джордж Оруэлл',
    quote: 'Война - это мир. Свобода - это рабство. Незнание - сила.',
    category: 'дистопия'
  }
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

const TITLES = [
  // Бесплатные титулы за достижения
  {
    id: 'first_reader',
    name: 'Первый читатель',
    description: 'За первое прочтение книги',
    icon: '📖',
    type: 'achievement',
    condition: (user) => user.stats.booksCompleted >= 1,
    rarity: 'common'
  },
  {
    id: 'bookworm',
    name: 'Книжный червь',
    description: 'Прочитано 10 книг',
    icon: '🐛',
    type: 'achievement',
    condition: (user) => user.stats.booksCompleted >= 10,
    rarity: 'uncommon'
  },
  {
    id: 'literary_critic',
    name: 'Литературный критик',
    description: 'Написано 5 отзывов',
    icon: '📝',
    type: 'achievement',
    condition: (user) => user.myReviews.length >= 5,
    rarity: 'uncommon'
  },
  {
    id: 'event_goer',
    name: 'Посетитель мероприятий',
    description: 'Посещено 3 события',
    icon: '🎭',
    type: 'achievement',
    condition: (user) => (user.stats.totalEvents || 0) >= 3,
    rarity: 'rare'
  },
  {
    id: 'level_master',
    name: 'Мастер уровней',
    description: 'Достигнут 10 уровень',
    icon: '⭐',
    type: 'achievement',
    condition: (user) => user.level >= 10,
    rarity: 'epic'
  },
  {
    id: 'level_expert',
    name: 'Эксперт уровней',
    description: 'Достигнут 15 уровень',
    icon: '🎖️',
    type: 'achievement',
    condition: (user) => user.level >= 15,
    rarity: 'legendary'
  },

  // Покупаемые титулы
  {
    id: 'vip_reader',
    name: 'VIP Читатель',
    description: 'Эксклюзивный статус для активных читателей',
    icon: '👑',
    type: 'purchase',
    rarity: 'legendary'
  },
  {
    id: 'book_collector',
    name: 'Коллекционер книг',
    description: 'Для истинных ценителей литературы',
    icon: '📚',
    type: 'purchase',
    rarity: 'epic'
  },
  {
    id: 'literary_expert',
    name: 'Литературный эксперт',
    description: 'Статус для знатоков литературы',
    icon: '🎓',
    type: 'purchase',
    rarity: 'rare'
  },
  {
    id: 'event_organizer',
    name: 'Организатор событий',
    description: 'Для тех, кто любит культурные мероприятия',
    icon: '🎪',
    type: 'purchase',
    rarity: 'uncommon'
  },
  {
    id: 'supporter',
    name: 'Поддержка проекта',
    description: 'Благодарность за поддержку библиотеки',
    icon: '❤️',
    type: 'purchase',
    rarity: 'common'
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
        bg: '#fafbfc',
        text: '#24292f',
        card: '#ffffff',
        border: '#d1d9e0',
        primary: '#0969da',
        secondary: '#8250df',
        accent: '#f78166'
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
    USER_DATA: 'knigabel_user_data_v2',
    BOOKS_DATA: 'knigabel_books_data_v2',
    LIBRARY_STATS: 'knigabel_library_stats_v2',
    USER_REVIEWS: 'knigabel_user_reviews_v2',
    THEME: 'knigabel_theme_v2',
    BOOK_REVIEWS: 'knigabel_global_reviews_v3' // Изменен ключ для сброса старых отзывов
};

// Игровые данные
const GAME_DATA = {
    // Ежедневные задания
    dailyQuests: [
        {
            id: 'read_pages',
            title: 'Читатель страниц',
            description: 'Прочитайте 10 страниц',
            icon: '📖',
            reward: { exp: 20 },
            progress: 0,
            target: 10,
            completed: false
        },
        {
            id: 'borrow_book',
            title: 'Книжный гурман',
            description: 'Забронируйте книгу',
            icon: '📚',
            reward: { exp: 15 },
            progress: 0,
            target: 1,
            completed: false
        },
        {
            id: 'write_review',
            title: 'Критик',
            description: 'Напишите отзыв о книге',
            icon: '✍️',
            reward: { exp: 25 },
            progress: 0,
            target: 1,
            completed: false
        },
        {
            id: 'favorite_book',
            title: 'Любитель книг',
            description: 'Добавьте книгу в избранное',
            icon: '❤️',
            reward: { exp: 10 },
            progress: 0,
            target: 1,
            completed: false
        }
    ],

    // Недельные челленджи
    weeklyChallenges: [
        {
            id: 'read_books_week',
            title: 'Недельный читатель',
            description: 'Прочитайте 5 книг за неделю',
            icon: '📚',
            reward: { exp: 100 },
            progress: 0,
            target: 5,
            completed: false
        },
        {
            id: 'pages_week',
            title: 'Марафонец чтения',
            description: 'Прочитайте 200 страниц за неделю',
            icon: '🏃',
            reward: { exp: 80 },
            progress: 0,
            target: 200,
            completed: false
        },
        {
            id: 'reviews_week',
            title: 'Супер-критик',
            description: 'Напишите 3 отзыва за неделю',
            icon: '⭐',
            reward: { exp: 60 },
            progress: 0,
            target: 3,
            completed: false
        }
    ],

    // Месячные челленджи
    monthlyChallenges: [
       {
         id: 'read_books_month',
         title: 'Месячный марафон',
         description: 'Прочитайте 20 книг за месяц',
         icon: '📚',
         reward: { exp: 500 },
         progress: 0,
         target: 20,
         completed: false
       },
       {
         id: 'pages_month',
         title: 'Мастер страниц',
         description: 'Прочитайте 1000 страниц за месяц',
         icon: '📄',
         reward: { exp: 400 },
         progress: 0,
         target: 1000,
         completed: false
       },
       {
         id: 'reviews_month',
         title: 'Критик месяца',
         description: 'Напишите 10 отзывов за месяц',
         icon: '✍️',
         reward: { exp: 300 },
         progress: 0,
         target: 10,
         completed: false
       },
       {
         id: 'streak_month',
         title: 'Несокрушимая серия',
         description: 'Поддерживайте серию чтения 30 дней',
         icon: '🔥',
         reward: { exp: 350 },
         progress: 0,
         target: 30,
         completed: false
       },
       {
         id: 'genres_month',
         title: 'Исследователь жанров',
         description: 'Прочитайте книги из 10 разных жанров',
         icon: '🗺️',
         reward: { exp: 250 },
         progress: 0,
         target: 10,
         completed: false
       },
       {
         id: 'level_up_month',
         title: 'Мастер уровней',
         description: 'Получите 5 уровней за месяц',
         icon: '⬆️',
         reward: { exp: 200 },
         progress: 0,
         target: 5,
         completed: false
       },
       {
         id: 'favorites_month',
         title: 'Коллекционер месяца',
         description: 'Добавьте 25 книг в избранное',
         icon: '❤️',
         reward: { exp: 150 },
         progress: 0,
         target: 25,
         completed: false
       },
       {
         id: 'authors_month',
         title: 'Знаток авторов',
         description: 'Изучите профили 15 разных авторов',
         icon: '👥',
         reward: { exp: 180 },
         progress: 0,
         target: 15,
         completed: false
       },
       {
         id: 'events_month',
         title: 'Социальный лидер',
         description: 'Посетите 8 мероприятий за месяц',
         icon: '🎪',
         reward: { exp: 220 },
         progress: 0,
         target: 8,
         completed: false
       },
       {
         id: 'completion_month',
         title: 'Завершитель месяца',
         description: 'Завершите чтение 15 книг',
         icon: '🏁',
         reward: { exp: 300 },
         progress: 0,
         target: 15,
         completed: false
       },
       {
         id: 'education_month',
         title: 'Ученый месяца',
         description: 'Пройдите 8 уроков в разделе образования',
         icon: '🎓',
         reward: { exp: 280 },
         progress: 0,
         target: 8,
         completed: false
       },
       {
         id: 'social_month',
         title: 'Социальный гуру',
         description: 'Поделитесь 20 книгами в социальных сетях',
         icon: '📱',
         reward: { exp: 200 },
         progress: 0,
         target: 20,
         completed: false
       },
       {
         id: 'rating_month',
         title: 'Мастер рейтингов',
         description: 'Получите средний рейтинг отзывов 4.5+',
         icon: '⭐',
         reward: { exp: 320 },
         progress: 0,
         target: 4.5,
         completed: false
       },
       {
         id: 'diversity_month',
         title: 'Мастер разнообразия',
         description: 'Прочитайте книги 12 разных авторов',
         icon: '🌍',
         reward: { exp: 260 },
         progress: 0,
         target: 12,
         completed: false
       },
       {
         id: 'achievement_month',
         title: 'Достиженец',
         description: 'Получите 8 новых достижений',
         icon: '🏆',
         reward: { exp: 240 },
         progress: 0,
         target: 8,
         completed: false
       }
     ],

    // Специальные события
    specialEvents: [
        {
            id: 'reading_challenge',
            title: 'Челлендж чтения',
            description: 'Прочитайте как можно больше страниц за 24 часа',
            icon: '⏰',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 50 }
        },
        {
            id: 'author_quiz',
            title: 'Викторина об авторах',
            description: 'Ответьте на вопросы об авторах книг',
            icon: '🧠',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 30 }
        },
        {
            id: 'genre_marathon',
            title: 'Жанровый марафон',
            description: 'Прочитайте книги из всех жанров за неделю',
            icon: '🎭',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 75 }
        },
        {
            id: 'review_contest',
            title: 'Конкурс отзывов',
            description: 'Напишите самые креативные отзывы',
            icon: '✍️',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 60 }
        },
        {
            id: 'book_club_special',
            title: 'Специальный книжный клуб',
            description: 'Обсудите книгу месяца с другими читателями',
            icon: '📚',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 40 }
        },
        {
            id: 'author_meet_greet',
            title: 'Встреча с автором онлайн',
            description: 'Присоединяйтесь к онлайн-встрече с популярным автором',
            icon: '👤',
            active: true,
            endDate: '2024-12-31',
            reward: { exp: 45 }
        }
    ],


    // Система титулов
    titles: [
        {
            id: 'novice_reader',
            name: 'Начинающий читатель',
            description: 'Первый шаг в мир книг',
            icon: '📖',
            unlocked: false,
            condition: (user) => user.stats.booksCompleted >= 1
        },
        {
            id: 'bookworm',
            name: 'Книжный червь',
            description: 'Любитель чтения',
            icon: '📚',
            unlocked: false,
            condition: (user) => user.stats.booksCompleted >= 10
        },
        {
            id: 'literature_expert',
            name: 'Эксперт литературы',
            description: 'Знаток книжного мира',
            icon: '🎓',
            unlocked: false,
            condition: (user) => user.stats.booksCompleted >= 25
        },
        {
            id: 'bibliophile',
            name: 'Библиофил',
            description: 'Истинный ценитель книг',
            icon: '🏛️',
            unlocked: false,
            condition: (user) => user.stats.booksCompleted >= 50
        },
        {
            id: 'reading_legend',
            name: 'Легенда чтения',
            description: 'Мастер книжного искусства',
            icon: '👑',
            unlocked: false,
            condition: (user) => user.stats.booksCompleted >= 100
        },
        {
            id: 'critic',
            name: 'Критик',
            description: 'Знаток литературной критики',
            icon: '✍️',
            unlocked: false,
            condition: (user) => user.stats.reviewsWritten >= 10
        },
        {
            id: 'social_reader',
            name: 'Социальный читатель',
            description: 'Общительный книголюб',
            icon: '👥',
            unlocked: false,
            condition: (user) => user.stats.totalEvents >= 5
        },
        {
            id: 'speed_demon',
            name: 'Скоростной демон',
            description: 'Быстрый читатель',
            icon: '⚡',
            unlocked: false,
            condition: (user) => user.stats.fastestRead <= 2
        },
        {
            id: 'marathon_runner',
            name: 'Марафонец',
            description: 'Выносливый читатель',
            icon: '🏃',
            unlocked: false,
            condition: (user) => user.readingStreak >= 30
        },
        {
            id: 'achievement_hunter',
            name: 'Охотник за достижениями',
            description: 'Мастер достижений',
            icon: '🎯',
            unlocked: false,
            condition: (user) => user.achievements.length >= 15
        }
    ]
};

// Рассчитываем статистику библиотеки
const MOCK_STATS = {
    totalBooks: MOCK_BOOKS.length,
    availableBooks: MOCK_BOOKS.filter(book => book.available).length,
    borrowedBooks: Math.max(0, MOCK_BOOKS.length - MOCK_BOOKS.filter(book => book.available).length),
    totalGenres: 16,
    totalReviews: BOOK_REVIEWS.length
};

// Данные пользователя по умолчанию
const DEFAULT_USER_DATA = {
    name: 'Пользователь',
    avatar: '👤',
    registrationDate: new Date().toLocaleDateString('ru-RU'),
    telegramId: null,
    theme: 'light',
    profileBackground: 'default',
    // Система уровней и достижений
    level: 1,
    experience: 0,
    experienceToNext: 100,
    totalPagesRead: 0,
    readingStreak: 0,
    achievements: [],
    role: 'Активный пользователь',
    bookProgress: {}, // {bookId: {pagesRead: number, completed: boolean, achievements: []}}
    // Игровые данные
    gameStats: {
        dailyQuestsCompleted: 0,
        weeklyChallengesCompleted: 0,
        specialEventsParticipated: 0
    },
    gameProgress: {
        dailyQuests: [],
        weeklyChallenges: [],
        specialEvents: [],
        shopItems: []
    },
    inventory: [],
    borrowedBooks: [],
    history: [],
    favorites: [],
    myReviews: [],
    bookedEvents: [],
    titles: [],
    stats: {
        totalBooks: 0,
        activeBorrows: 0,
        totalRead: 0,
        readingDays: 0,
        reviewsWritten: 0,
        totalEvents: 0,
        booksCompleted: 0,
        achievementsUnlocked: 0,
        dailyChallengesCompleted: 0,
        weeklyChallengesCompleted: 0,
        totalPagesRead: 0
    },
    achievementRewardsClaimed: [],
    challenges: {
        daily: {
            lastReset: null,
            completed: [],
            claimed: [],
            progress: {}
        },
        weekly: {
            lastReset: null,
            completed: [],
            claimed: [],
            progress: {}
        },
        monthly: {
            lastReset: null,
            completed: [],
            claimed: [],
            progress: {}
        }
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
    { id: 'first_book', name: 'Первый шаг', description: 'Прочитайте первую книгу', icon: '📖', type: 'reading', condition: (user) => user.stats.booksCompleted >= 1, reward: { exp: 20 } },
    { id: 'bookworm', name: 'Книжный червь', description: 'Прочитайте 5 книг', icon: '📚', type: 'reading', condition: (user) => user.stats.booksCompleted >= 5, reward: { exp: 50, title: 'Книжный червь' } },
    { id: 'literature_lover', name: 'Любитель литературы', description: 'Прочитайте 10 книг', icon: '❤️', type: 'reading', condition: (user) => user.stats.booksCompleted >= 10, reward: { exp: 100, title: 'Любитель литературы' } },
    { id: 'bibliophile', name: 'Библиофил', description: 'Прочитайте 25 книг', icon: '🏆', type: 'reading', condition: (user) => user.stats.booksCompleted >= 25, reward: { exp: 200, title: 'Библиофил' } },

    // Достижения за страницы
    { id: 'page_master', name: 'Мастер страниц', description: 'Прочитайте 1000 страниц', icon: '📄', type: 'pages', condition: (user) => user.totalPagesRead >= 1000, reward: { exp: 75 } },
    { id: 'page_legend', name: 'Легенда страниц', description: 'Прочитайте 5000 страниц', icon: '📜', type: 'pages', condition: (user) => user.totalPagesRead >= 5000, reward: { exp: 150, title: 'Легенда страниц' } },

    // Достижения за отзывы
    { id: 'first_review', name: 'Критик', description: 'Напишите первый отзыв', icon: '✍️', type: 'reviews', condition: (user) => user.stats.reviewsWritten >= 1, reward: { exp: 15, title: 'Критик' } },
    { id: 'review_expert', name: 'Эксперт по отзывам', description: 'Напишите 10 отзывов', icon: '⭐', type: 'reviews', condition: (user) => user.stats.reviewsWritten >= 10, reward: { exp: 60 } },

    // Достижения за уровень
    { id: 'level_up', name: 'Рост уровня', description: 'Достигните 5 уровня', icon: '⬆️', type: 'level', condition: (user) => user.level >= 5, reward: { exp: 50 } },
    { id: 'high_level', name: 'Высокий уровень', description: 'Достигните 10 уровня', icon: '🎯', type: 'level', condition: (user) => user.level >= 10, reward: { exp: 100 } },
    { id: 'level_master', name: 'Мастер уровней', description: 'Достигните 15 уровня', icon: '⭐', type: 'level', condition: (user) => user.level >= 15, reward: { exp: 200, title: 'Мастер уровней' } },

    // Достижения за события
    { id: 'first_event', name: 'Посетитель событий', description: 'Посетите первое мероприятие', icon: '🎫', type: 'events', condition: (user) => user.stats.totalEvents >= 1, reward: { exp: 25, title: 'Посетитель событий' } },
    { id: 'event_regular', name: 'Постоянный посетитель', description: 'Посетите 5 мероприятий', icon: '🎪', type: 'events', condition: (user) => user.stats.totalEvents >= 5, reward: { exp: 75 } },

    // Специальные достижения
    { id: 'early_bird', name: 'Ранняя пташка', description: 'Используйте приложение в первые 7 дней', icon: '🐦', type: 'special', condition: (user) => user.stats.readingDays >= 7, reward: { exp: 30 } },
    { id: 'streak_master', name: 'Мастер серии', description: 'Поддерживайте серию чтения 7 дней', icon: '🔥', type: 'special', condition: (user) => user.readingStreak >= 7, reward: { exp: 40 } },

    // Достижения за жанры
    { id: 'classic_reader', name: 'Классик', description: 'Прочитайте 5 классических произведений', icon: '📜', type: 'genres', condition: (user) => user.stats.booksCompleted >= 5, reward: { exp: 45 } },
    { id: 'fantasy_explorer', name: 'Исследователь фантастики', description: 'Прочитайте 3 фантастических книги', icon: '🧙', type: 'genres', condition: (user) => user.stats.booksCompleted >= 3, reward: { exp: 35 } },
    { id: 'mystery_solver', name: 'Разгадыватель тайн', description: 'Прочитайте 3 детективных книги', icon: '🕵️', type: 'genres', condition: (user) => user.stats.booksCompleted >= 3, reward: { exp: 35 } },

    // Достижения за социальную активность
    { id: 'social_butterfly', name: 'Социальная бабочка', description: 'Добавьте 10 друзей', icon: '🦋', type: 'social', condition: (user) => user.stats.friendsCount >= 10, reward: { exp: 40 } },
    { id: 'review_master', name: 'Мастер отзывов', description: 'Получите 50 лайков на отзывы', icon: '👍', type: 'social', condition: (user) => user.stats.reviewLikes >= 50, reward: { exp: 60 } },

    // Достижения за события
    { id: 'event_attendee', name: 'Посетитель', description: 'Посетите 10 мероприятий', icon: '🎭', type: 'events', condition: (user) => user.stats.totalEvents >= 10, reward: { exp: 80 } },
    { id: 'event_organizer', name: 'Организатор', description: 'Организуйте мероприятие', icon: '🎪', type: 'events', condition: (user) => user.stats.eventsOrganized >= 1, reward: { exp: 100 } },

    // Достижения за коллекционирование
    { id: 'collection_starter', name: 'Коллекционер', description: 'Соберите 10 книг в избранное', icon: '⭐', type: 'collection', condition: (user) => user.favorites.length >= 10, reward: { exp: 30 } },
    { id: 'collection_master', name: 'Мастер коллекций', description: 'Соберите 50 книг в избранное', icon: '🏆', type: 'collection', condition: (user) => user.favorites.length >= 50, reward: { exp: 90 } },

    // Достижения за производительность
    { id: 'speed_reader', name: 'Быстрый читатель', description: 'Прочитайте книгу за 1 день', icon: '⚡', type: 'performance', condition: (user) => user.stats.fastestRead <= 1, reward: { exp: 55 } },
    { id: 'consistent_reader', name: 'Последовательный читатель', description: 'Чтение 30 дней подряд', icon: '📅', type: 'performance', condition: (user) => user.readingStreak >= 30, reward: { exp: 120 } },

    // Достижения за викторины
    { id: 'quiz_starter', name: 'Начинающий знаток', description: 'Пройдите первую викторину', icon: '🧠', type: 'education', condition: (user) => user.educationProgress?.quizzes?.length >= 1, reward: { exp: 25 } },
    { id: 'quiz_expert', name: 'Эксперт викторин', description: 'Пройдите 5 викторин', icon: '🎓', type: 'education', condition: (user) => user.educationProgress?.quizzes?.length >= 5, reward: { exp: 75 } },
    { id: 'quiz_master', name: 'Мастер викторин', description: 'Пройдите все викторины', icon: '👑', type: 'education', condition: (user) => user.educationProgress?.quizzes?.length >= 4, reward: { exp: 150, title: 'Мастер викторин' } },
    { id: 'perfect_score', name: 'Идеальный балл', description: 'Получите 100% в любой викторине', icon: '💯', type: 'education', condition: (user) => user.educationProgress?.quizScores && Object.values(user.educationProgress.quizScores).some(score => score === 100), reward: { exp: 50 } },
    { id: 'high_scorer', name: 'Высокий балл', description: 'Получите средний балл выше 80%', icon: '⭐', type: 'education', condition: (user) => {
        const scores = user.educationProgress?.quizScores ? Object.values(user.educationProgress.quizScores) : [];
        return scores.length > 0 && (scores.reduce((a, b) => a + b, 0) / scores.length) >= 80;
    }, reward: { exp: 40 } },

    // Достижения за уроки
    { id: 'lesson_learner', name: 'Учащийся', description: 'Пройдите первый урок', icon: '📖', type: 'education', condition: (user) => user.educationProgress?.lessons?.length >= 1, reward: { exp: 20 } },
    { id: 'knowledge_seeker', name: 'Искатель знаний', description: 'Пройдите 3 урока', icon: '🔍', type: 'education', condition: (user) => user.educationProgress?.lessons?.length >= 3, reward: { exp: 60 } },
    { id: 'scholar', name: 'Ученый', description: 'Пройдите все уроки', icon: '🎓', type: 'education', condition: (user) => user.educationProgress?.lessons?.length >= 6, reward: { exp: 120, title: 'Ученый' } },

    // Достижения за достижения
    { id: 'achievement_hunter', name: 'Охотник за достижениями', description: 'Получите 10 достижений', icon: '🎯', type: 'meta', condition: (user) => user.achievements.length >= 10, reward: { exp: 70 } },
    { id: 'achievement_master', name: 'Мастер достижений', description: 'Получите все достижения', icon: '👑', type: 'meta', condition: (user) => user.achievements.length >= ACHIEVEMENTS.length, reward: { exp: 300, title: 'Мастер достижений' } },

    // Новые достижения
    { id: 'genre_explorer', name: 'Исследователь жанров', description: 'Прочитайте книги из 5 разных жанров', icon: '🗺️', type: 'genres', condition: (user) => user.stats.booksCompleted >= 5, reward: { exp: 50 } },
    { id: 'night_owl', name: 'Ночная сова', description: 'Чтение после полуночи 10 раз', icon: '🦉', type: 'special', condition: (user) => user.stats.nightReading >= 10, reward: { exp: 35 } },
    { id: 'social_reader', name: 'Социальный читатель', description: 'Поделитесь 20 отзывами', icon: '📣', type: 'social', condition: (user) => user.stats.reviewsWritten >= 20, reward: { exp: 65 } },
    { id: 'book_collector', name: 'Коллекционер', description: 'Добавьте 100 книг в избранное', icon: '📚', type: 'collection', condition: (user) => user.favorites.length >= 100, reward: { exp: 110 } },
    { id: 'marathon_reader', name: 'Марафонец чтения', description: 'Прочитайте 1000 страниц за месяц', icon: '🏃‍♂️', type: 'performance', condition: (user) => user.stats.monthlyPages >= 1000, reward: { exp: 85 } },
    { id: 'review_quality', name: 'Критик качества', description: 'Получите 50 лайков на отзывы', icon: '👍', type: 'social', condition: (user) => user.stats.reviewLikes >= 50, reward: { exp: 60 } },
    { id: 'early_adopter', name: 'Ранний пользователь', description: 'Используйте приложение в первые 30 дней', icon: '🚀', type: 'special', condition: (user) => user.stats.readingDays >= 30, reward: { exp: 45 } },
    { id: 'perfect_week', name: 'Идеальная неделя', description: 'Чтение каждый день в течение недели', icon: '📅', type: 'performance', condition: (user) => user.readingStreak >= 7, reward: { exp: 40 } },
    { id: 'author_fan', name: 'Фанат автора', description: 'Прочитайте все книги одного автора', icon: '👨‍🎨', type: 'genres', condition: (user) => user.stats.authorComplete >= 1, reward: { exp: 55 } },
    { id: 'reading_champion', name: 'Чемпион чтения', description: 'Прочитайте 500 книг', icon: '🏆', type: 'reading', condition: (user) => user.stats.booksCompleted >= 500, reward: { exp: 500, title: 'Чемпион чтения' } }
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
        newAchievements.forEach(achievement => {
            // Добавляем достижение
            user.achievements.push(achievement);

            // Автоматически начисляем награду
            if (achievement.reward) {
                let rewardText = '';

                if (achievement.reward.exp > 0) {
                    const levelUp = window.APP_DATA.LevelSystem.addExperience(user, achievement.reward.exp);
                    rewardText += `${achievement.reward.exp} опыта`;
                    if (levelUp.leveledUp) {
                        rewardText += ` (новый уровень ${levelUp.newLevel}!)`;
                    }
                }

                if (achievement.reward.coins > 0) {
                    user.coins = (user.coins || 0) + achievement.reward.coins;
                    rewardText += (rewardText ? ', ' : '') + `${achievement.reward.coins} 💎`;
                }

                if (achievement.reward.title) {
                    if (!user.titles) user.titles = [];
                    if (!user.titles.includes(achievement.reward.title)) {
                        user.titles.push(achievement.reward.title);
                        rewardText += (rewardText ? ', ' : '') + `титул "${achievement.reward.title}"`;
                    }
                }

                // Показываем уведомление о награде
                if (rewardText) {
                    console.log(`Получена награда за достижение "${achievement.name}": ${rewardText}`);
                }
            }

            // Проверяем связанные титулы (старый способ для совместимости)
            const relatedTitle = TITLES.find(title =>
                title.type === 'achievement' && title.condition && title.condition(user)
            );
            if (relatedTitle && !user.titles?.includes(relatedTitle.id)) {
                if (!user.titles) user.titles = [];
                user.titles.push(relatedTitle.id);
                console.log(`Получен титул "${relatedTitle.name}" за достижение "${achievement.name}"`);
            }
        });

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
    },

    claimReward(user, achievementId) {
        // Проверяем, получено ли достижение
        const userAchievement = user.achievements.find(a => a.id === achievementId);
        if (!userAchievement) {
            throw new Error('Достижение не получено');
        }

        // Проверяем, не забрана ли награда
        if (!user.achievementRewardsClaimed) {
            user.achievementRewardsClaimed = [];
        }
        if (user.achievementRewardsClaimed.includes(achievementId)) {
            throw new Error('Награда уже забрана');
        }

        // Получаем данные достижения
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (!achievement || !achievement.reward) {
            throw new Error('Награда недоступна');
        }

        // Выдаем награду
        const reward = achievement.reward;
        let rewardText = '';

        if (reward.exp > 0) {
            const levelUp = window.APP_DATA.LevelSystem.addExperience(user, reward.exp);
            rewardText += `${reward.exp} опыта`;
            if (levelUp.leveledUp) {
                rewardText += ` (новый уровень ${levelUp.newLevel}!)`;
            }
        }

        if (reward.coins > 0) {
            user.coins = (user.coins || 0) + reward.coins;
            rewardText += (rewardText ? ', ' : '') + `${reward.coins} 💎`;
        }

        if (reward.title) {
            if (!user.titles) user.titles = [];
            if (!user.titles.includes(reward.title)) {
                user.titles.push(reward.title);
                rewardText += (rewardText ? ', ' : '') + `титул "${reward.title}"`;
            }
        }

        // Отмечаем награду как забранную
        user.achievementRewardsClaimed.push(achievementId);

        return {
            success: true,
            rewardText: rewardText,
            achievement: achievement
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

// Викторины для раздела образования
const EDUCATION_QUIZZES = [
    {
        id: 'literature_basics',
        title: 'Основы литературы',
        description: 'Базовые знания о литературных жанрах и терминах',
        icon: '📚',
        difficulty: 'Легко',
        questions: [
            {
                text: 'Что такое роман?',
                options: ['Короткий рассказ', 'Большое прозаическое произведение', 'Стихотворение', 'Театральная пьеса'],
                correctAnswer: 1
            },
            {
                text: 'Кто написал "Войну и мир"?',
                options: ['Федор Достоевский', 'Лев Толстой', 'Александр Пушкин', 'Антон Чехов'],
                correctAnswer: 1
            },
            {
                text: 'Что такое поэма?',
                options: ['Короткое стихотворение', 'Большое стихотворное произведение', 'Прозаический текст', 'Театральная пьеса'],
                correctAnswer: 1
            },
            {
                text: 'Какой жанр литературы описывает будущее?',
                options: ['Фэнтези', 'Научная фантастика', 'Детектив', 'Романтика'],
                correctAnswer: 1
            },
            {
                text: 'Что такое новелла?',
                options: ['Длинный роман', 'Короткий рассказ', 'Стихотворение', 'Пьеса'],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'russian_classics',
        title: 'Русские классики',
        description: 'Знаменитые произведения русской литературы',
        icon: '📖',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Главный герой романа "Преступление и наказание"?',
                options: ['Раскольников', 'Обломов', 'Онегин', 'Печорин'],
                correctAnswer: 0
            },
            {
                text: 'Автор пьесы "Вишнёвый сад"?',
                options: ['Чехов', 'Гоголь', 'Тургенев', 'Гончаров'],
                correctAnswer: 0
            },
            {
                text: 'Какое произведение написал Николай Гоголь?',
                options: ['Мёртвые души', 'Война и мир', 'Анна Каренина', 'Братья Карамазовы'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Евгений Онегин"?',
                options: ['Лермонтов', 'Пушкин', 'Тютчев', 'Некрасов'],
                correctAnswer: 1
            },
            {
                text: 'Главный герой романа "Обломов"?',
                options: ['Илья Ильич Обломов', 'Андрей Болконский', 'Левин', 'Базаров'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'world_literature',
        title: 'Мировая литература',
        description: 'Знаменитые произведения мировой литературы',
        icon: '🌍',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Автор романа "1984"?',
                options: ['Оруэлл', 'Хаксли', 'Брэдбери', 'Замятин'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Маленький принц"?',
                options: ['Сент-Экзюпери', 'Верн', 'Гюго', 'Бальзак'],
                correctAnswer: 0
            },
            {
                text: 'Главный герой "Дон Кихота"?',
                options: ['Дон Кихот', 'Санчо Панса', 'Гамлет', 'Фауст'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Фауста"?',
                options: ['Шиллер', 'Гёте', 'Гейне', 'Шеллинг'],
                correctAnswer: 1
            },
            {
                text: 'Какое произведение написал Гомер?',
                options: ['Илиада', 'Одиссея', 'Энеида', 'Все вышеперечисленные'],
                correctAnswer: 3
            }
        ]
    },
    {
        id: 'literary_terms',
        title: 'Литературные термины',
        description: 'Основные понятия и термины литературоведения',
        icon: '📝',
        difficulty: 'Сложно',
        questions: [
            {
                text: 'Что такое метафора?',
                options: ['Сравнение без слов "как" или "словно"', 'Повторение звуков', 'Преувеличение', 'Вопрос к читателю'],
                correctAnswer: 0
            },
            {
                text: 'Что такое аллегория?',
                options: ['Иносказание', 'Прямое описание', 'Юмор', 'Сарказм'],
                correctAnswer: 0
            },
            {
                text: 'Что такое оксюморон?',
                options: ['Соединение противоположных понятий', 'Длинное предложение', 'Короткий рассказ', 'Стихотворение'],
                correctAnswer: 0
            },
            {
                text: 'Что такое катарсис?',
                options: ['Очищение души', 'Напряжение сюжета', 'Кульминация', 'Развязка'],
                correctAnswer: 0
            },
            {
                text: 'Что такое перипетия?',
                options: ['Неожиданный поворот сюжета', 'Описание природы', 'Монолог героя', 'Диалог персонажей'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'poetry_basics',
        title: 'Основы поэзии',
        description: 'Элементы стихосложения и поэтические формы',
        icon: '🎭',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Что такое рифма?',
                options: ['Повторение звуков', 'Длина строки', 'Количество слогов', 'Размер стиха'],
                correctAnswer: 0
            },
            {
                text: 'Что такое ямб?',
                options: ['Ударение на первом слоге', 'Ударение на втором слоге', 'Ударение на третьем слоге', 'Без ударений'],
                correctAnswer: 1
            },
            {
                text: 'Что такое сонет?',
                options: ['Короткое стихотворение из 14 строк', 'Длинная поэма', 'Свободный стих', 'Рапсодия'],
                correctAnswer: 0
            },
            {
                text: 'Что такое аллитерация?',
                options: ['Повторение согласных звуков', 'Повторение гласных звуков', 'Рифма', 'Метр'],
                correctAnswer: 0
            },
            {
                text: 'Что такое метр?',
                options: ['Размер стиха', 'Рифма', 'Ритм', 'Слог'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'belarusian_literature',
        title: 'Белорусская литература',
        description: 'Знаменитые произведения белорусской литературы',
        icon: '🇧🇾',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Кто написал "Новую землю"?',
                options: ['Якуб Колас', 'Янка Купала', 'Максим Богданович', 'Василь Быкаў'],
                correctAnswer: 0
            },
            {
                text: 'Автор поэмы "Курган"?',
                options: ['Максим Богданович', 'Янка Купала', 'Якуб Колас', 'Кузьма Чорный'],
                correctAnswer: 1
            },
            {
                text: 'Кто написал "Дикая охота короля Стаха"?',
                options: ['Василь Быкаў', 'Уладзімір Караткевіч', 'Алесь Адамовіч', 'Ніл Гілевіч'],
                correctAnswer: 1
            },
            {
                text: 'Автор "Вянка" (Венка)?',
                options: ['Янка Купала', 'Максим Богданович', 'Якуб Колас', 'Рыгор Барадулін'],
                correctAnswer: 1
            },
            {
                text: 'Кто написал "Хатыньскую повесть"?',
                options: ['Василь Быкаў', 'Алесь Адамовіч', 'Уладзімір Караткевіч', 'Ніл Гілевіч'],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'modern_literature',
        title: 'Современная литература',
        description: 'Литература XX-XXI веков',
        icon: '📱',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Автор "Метро 2033"?',
                options: ['Дмитрий Глуховский', 'Виктор Пелевин', 'Сергей Лукьяненко', 'Борис Акунин'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Мастер и Маргарита"?',
                options: ['Михаил Булгаков', 'Андрей Битов', 'Василий Аксёнов', 'Георгий Владимов'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Дюны"?',
                options: ['Фрэнк Герберт', 'Айзек Азимов', 'Артур Кларк', 'Филип Дик'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Сто лет одиночества"?',
                options: ['Габриэль Гарсия Маркес', 'Хорхе Борхес', 'Хулио Кортасар', 'Карлос Фуэнтес'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Кода Да Vinci"?',
                options: ['Дэн Браун', 'Стивен Кинг', 'Джон Гришэм', 'Майкл Крайтон'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'literary_genres',
        title: 'Литературные жанры',
        description: 'Различные жанры и их особенности',
        icon: '🎭',
        difficulty: 'Легко',
        questions: [
            {
                text: 'Что характерно для детектива?',
                options: ['Расследование преступления', 'Любовная история', 'Путешествия', 'Фантастика'],
                correctAnswer: 0
            },
            {
                text: 'Что такое триллер?',
                options: ['Жанр, вызывающий напряжение и страх', 'Комедийный жанр', 'Исторический роман', 'Биография'],
                correctAnswer: 0
            },
            {
                text: 'Что характерно для фэнтези?',
                options: ['Магические элементы и мифические существа', 'Реалистическое описание', 'Научные открытия', 'Исторические события'],
                correctAnswer: 0
            },
            {
                text: 'Что такое драма?',
                options: ['Серьёзное произведение с конфликтом', 'Комедийное произведение', 'Поэтическое произведение', 'Научное произведение'],
                correctAnswer: 0
            },
            {
                text: 'Что характерно для сатиры?',
                options: ['Высмеивание пороков общества', 'Восхваление героев', 'Описание природы', 'Любовные истории'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'famous_quotes',
        title: 'Знаменитые цитаты',
        description: 'Цитаты из известных литературных произведений',
        icon: '💬',
        difficulty: 'Сложно',
        questions: [
            {
                text: 'Кому принадлежат слова: "Быть или не быть - вот в чём вопрос"?',
                options: ['Гамлет', 'Отелло', 'Король Лир', 'Макбет'],
                correctAnswer: 0
            },
            {
                text: 'Кто сказал: "Всё смешалось в доме Облонских"?',
                options: ['Лев Толстой', 'Федор Достоевский', 'Иван Тургенев', 'Николай Гоголь'],
                correctAnswer: 0
            },
            {
                text: 'Кому принадлежат слова: "Человек - это звучит гордо"?',
                options: ['Максим Горький', 'Александр Солженицын', 'Борис Пастернак', 'Андрей Платонов'],
                correctAnswer: 0
            },
            {
                text: 'Кто сказал: "Рукописи не горят"?',
                options: ['Михаил Булгаков', 'Александр Солженицын', 'Василий Гроссман', 'Борис Пастернак'],
                correctAnswer: 0
            },
            {
                text: 'Кому принадлежат слова: "Истина где-то рядом"?',
                options: ['Агата Кристи', 'Артур Конан Дойл', 'Жорж Сименон', 'Дэвид Суchet'],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'literary_theory',
        title: 'Литературная теория',
        description: 'Основные понятия теории литературы',
        icon: '🎓',
        difficulty: 'Сложно',
        questions: [
            {
                text: 'Что такое сюжет?',
                options: ['Последовательность событий в произведении', 'Описание героев', 'Язык произведения', 'Композиция'],
                correctAnswer: 0
            },
            {
                text: 'Что такое композиция?',
                options: ['Строение произведения', 'Стиль автора', 'Тема произведения', 'Идея произведения'],
                correctAnswer: 0
            },
            {
                text: 'Что такое конфликт?',
                options: ['Столкновение сил в произведении', 'Описание природы', 'Монолог героя', 'Диалог персонажей'],
                correctAnswer: 0
            },
            {
                text: 'Что такое фабула?',
                options: ['Хронологическая последовательность событий', 'Художественная последовательность', 'Описание героев', 'Тема произведения'],
                correctAnswer: 0
            },
            {
                text: 'Что такое мотив?',
                options: ['Повторяющийся элемент в произведении', 'Главная идея', 'Стиль автора', 'Жанр произведения'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'childrens_literature',
        title: 'Детская литература',
        description: 'Классика детской литературы и её авторы',
        icon: '🧸',
        difficulty: 'Легко',
        questions: [
            {
                text: 'Кто написал "Алису в Стране чудес"?',
                options: ['Льюис Кэрролл', 'Джоан Роулинг', 'Астрид Линдгрен', 'Марк Твен'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Винни-Пуха"?',
                options: ['Алан Александр Милн', 'Беатрис Поттер', 'Рудольф Эрих Распе', 'Кеннет Грэм'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Мэри Поппинс"?',
                options: ['Памела Трэверс', 'Энид Блайтон', 'Джуди Блум', 'Роальд Даль'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Пеппи Длинныйчулок"?',
                options: ['Астрид Линдгрен', 'Туве Янссон', 'Сельма Лагерлёф', 'Мария Грипе'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Гарри Поттера"?',
                options: ['Джоан Роулинг', 'Дж. К. Роулинг', 'Роулинг Джоан', 'Джоан Кэтлин Роулинг'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'fantasy_sci_fi',
        title: 'Фантастика и фэнтези',
        description: 'Мир фантастики и волшебства в литературе',
        icon: '🧙‍♂️',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Автор "Властелина колец"?',
                options: ['Дж. Р. Р. Толкин', 'Дж. К. Роулинг', 'Джордж Мартин', 'Урсула Ле Гуин'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Игра престолов"?',
                options: ['Джордж Мартин', 'Дж. Р. Р. Толкин', 'Роберт Джордан', 'Брендон Сандерсон'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Дюны"?',
                options: ['Фрэнк Герберт', 'Айзек Азимов', 'Артур Кларк', 'Филип Дик'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Нейромант"?',
                options: ['Уильям Гибсон', 'Нил Стивенсон', 'Брюс Стерлинг', 'Руди Рюкер'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Американских богов"?',
                options: ['Нил Гейман', 'Терри Пратчетт', 'Дуглас Адамс', 'Стивен Кинг'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'detective_thriller',
        title: 'Детективы и триллеры',
        description: 'Тайны, расследования и напряжение',
        icon: '🕵️‍♂️',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Кто создал Шерлока Холмса?',
                options: ['Артур Конан Дойл', 'Агата Кристи', 'Жорж Сименон', 'Дэшил Хэммет'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Десяти негритят"?',
                options: ['Агата Кристи', 'Артур Конан Дойл', 'Жорж Сименон', 'Дэшил Хэммет'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Молчание ягнят"?',
                options: ['Томас Харрис', 'Джон Гришэм', 'Стивен Кинг', 'Дин Кунц'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Девушки с татуировкой дракона"?',
                options: ['Стиг Ларссон', 'Хеннинг Манкелль', 'Камилла Лэкберг', 'Ю Несбё'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Собаку Баскервилей"?',
                options: ['Артур Конан Дойл', 'Агата Кристи', 'Жорж Сименон', 'Дэшил Хэммет'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'silver_age_poetry',
        title: 'Поэзия Серебряного века',
        description: 'Русская поэзия начала XX века',
        icon: '🌙',
        difficulty: 'Сложно',
        questions: [
            {
                text: 'Кто написал "Я помню чудное мгновенье"?',
                options: ['Александр Пушкин', 'Михаил Лермонтов', 'Фёдор Тютчев', 'Афанасий Фет'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Стихов о Прекрасной Даме"?',
                options: ['Александр Блок', 'Анна Ахматова', 'Осип Мандельштам', 'Марина Цветаева'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Поэму без героя"?',
                options: ['Анна Ахматова', 'Марина Цветаева', 'Белла Ахмадулина', 'Борис Пастернак'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Сестры моей жизни"?',
                options: ['Борис Пастернак', 'Осип Мандельштам', 'Марина Цветаева', 'Александр Блок'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Реквием"?',
                options: ['Анна Ахматова', 'Марина Цветаева', 'Белла Ахмадулина', 'Иосиф Бродский'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'foreign_classics',
        title: 'Зарубежная классика',
        description: 'Великие произведения зарубежных авторов',
        icon: '🇫🇷',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Автор "Войны и мира" на самом деле написал?',
                options: ['Лев Толстой', 'Виктор Гюго', 'Оноре де Бальзак', 'Стендаль'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Дон Кихота"?',
                options: ['Мигель де Сервантес', 'Лопе де Вега', 'Кальдерон', 'Тирсо де Молина'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Фауста"?',
                options: ['Иоганн Вольфганг Гёте', 'Фридрих Шиллер', 'Генрих Гейне', 'Иоганн Гердер'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Божественную комедию"?',
                options: ['Данте Алигьери', 'Франческо Петрарка', 'Джованни Боккаччо', 'Лоренцо Медичи'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Потерянного рая"?',
                options: ['Джон Мильтон', 'Уильям Шекспир', 'Джон Донн', 'Эдмунд Спенсер'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'modern_russian_lit',
        title: 'Современная русская литература',
        description: 'Русская литература XX-XXI веков',
        icon: '📖',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Автор "Доктора Живаго"?',
                options: ['Борис Пастернак', 'Александр Солженицын', 'Иосиф Бродский', 'Андрей Битов'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Архипелаг ГУЛАГ"?',
                options: ['Александр Солженицын', 'Варлам Шаламов', 'Борис Пастернак', 'Владимир Войнович'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Чонкина"?',
                options: ['Владимир Войнович', 'Георгий Владимов', 'Василий Аксёнов', 'Андрей Битов'],
                correctAnswer: 0
            },
            {
                text: 'Кто написал "Мастер и Маргарита"?',
                options: ['Михаил Булгаков', 'Андрей Платонов', 'Максим Горький', 'Алексей Толстой'],
                correctAnswer: 0
            },
            {
                text: 'Автор "Жизни и судьбы"?',
                options: ['Василий Гроссман', 'Борис Пастернак', 'Александр Солженицын', 'Иосиф Бродский'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'literary_awards',
        title: 'Литературные награды',
        description: 'Престижные литературные премии мира',
        icon: '🏆',
        difficulty: 'Средне',
        questions: [
            {
                text: 'Какая премия считается "Нобелевской" в литературе?',
                options: ['Нобелевская премия', 'Пулитцеровская премия', 'Букеровская премия', 'Гонкуровская премия'],
                correctAnswer: 0
            },
            {
                text: 'Кто первым получил Нобелевскую премию по литературе?',
                options: ['Сюлли-Прюдом', 'Эрнест Хемингуэй', 'Габриэль Гарсия Маркес', 'Эрнест Ренан'],
                correctAnswer: 0
            },
            {
                text: 'Какая премия вручается за детскую литературу?',
                options: ['Медаль Карнеги', 'Премия Х. К. Андерсена', 'Букер', 'Пулитцер'],
                correctAnswer: 1
            },
            {
                text: 'Кто получил Нобелевскую премию в 1987 году?',
                options: ['Иосиф Бродский', 'Борис Пастернак', 'Александр Солженицын', 'Андрей Битов'],
                correctAnswer: 0
            },
            {
                text: 'Какая премия вручается за научную фантастику?',
                options: ['Хьюго', 'Небьюла', 'Обе правильные', 'Премия Артура Кларка'],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'book_records',
        title: 'Книжные рекорды',
        description: 'Самые необычные и впечатляющие книжные рекорды',
        icon: '📊',
        difficulty: 'Легко',
        questions: [
            {
                text: 'Какая книга считается самой продаваемой в мире?',
                options: ['Библия', 'Цитаты Мао', 'Дон Кихот', 'Красная шапочка'],
                correctAnswer: 0
            },
            {
                text: 'Самая длинная книга в мире?',
                options: ['В поисках утраченного времени', 'Война и мир', 'Бесконечная шутка', 'Критика чистого разума'],
                correctAnswer: 0
            },
            {
                text: 'Самая короткая книга?',
                options: ['"Это"', 'Кратчайшая книга', 'Одно слово', 'Пустая книга'],
                correctAnswer: 0
            },
            {
                text: 'Книга с самым большим тиражом?',
                options: ['Цитаты Мао Цзэдуна', 'Библия', 'Коран', 'Дон Кихот'],
                correctAnswer: 0
            },
            {
                text: 'Самая дорогая книга в мире?',
                options: ['Леонардо да Vinci Codex', 'Гутенбергова Библия', 'Кодекс Гамильтона', 'Книга Мормона'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'literary_adaptations',
        title: 'Литературные адаптации',
        description: 'Книги, ставшие фильмами и сериалами',
        icon: '🎬',
        difficulty: 'Средне',
        questions: [
            {
                text: 'По какой книге снят фильм "Властелин колец"?',
                options: ['Дж. Р. Р. Толкин', 'Дж. К. Роулинг', 'Джордж Мартин', 'Урсула Ле Гуин'],
                correctAnswer: 0
            },
            {
                text: 'Книга, по которой снят "Игра престолов"?',
                options: ['Песнь льда и огня', 'Властелин колец', 'Хроники Нарнии', 'Колесо времени'],
                correctAnswer: 0
            },
            {
                text: 'По какой книге снят "Гарри Поттер"?',
                options: ['Дж. К. Роулинг', 'Дж. Р. Р. Толкин', 'Филип Пулман', 'Сьюзен Коллинз'],
                correctAnswer: 0
            },
            {
                text: 'Книга, по которой снят "Голодные игры"?',
                options: ['Сьюзен Коллинз', 'Вероника Рот', 'Джеймс Дэшнер', 'Кассандра Клэр'],
                correctAnswer: 0
            },
            {
                text: 'По какой книге снят "Дивергент"?',
                options: ['Вероника Рот', 'Сьюзен Коллинз', 'Джеймс Дэшнер', 'Кассандра Клэр'],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'modern_genres',
        title: 'Жанры XXI века',
        description: 'Современные литературные жанры и тренды',
        icon: '📱',
        difficulty: 'Легко',
        questions: [
            {
                text: 'Что такое "новая взрослая литература"?',
                options: ['YA для взрослых', 'Литература для пожилых', 'Бизнес-литература', 'Научная литература'],
                correctAnswer: 0
            },
            {
                text: 'Что такое "фэнфик"?',
                options: ['Фанатская литература', 'Научная фантастика', 'Детектив', 'Романтика'],
                correctAnswer: 0
            },
            {
                text: 'Что такое "литRPG"?',
                options: ['Литературная RPG', 'Литература для ролевой игры', 'Литературная критика', 'Литературная премия'],
                correctAnswer: 0
            },
            {
                text: 'Что такое "нон-фикшн"?',
                options: ['Нехудожественная литература', 'Фантастика', 'Детектив', 'Роман'],
                correctAnswer: 0
            },
            {
                text: 'Что такое "бук-ток"?',
                options: ['Книги из TikTok', 'Книжный блог', 'Книжный магазин', 'Книжная премия'],
                correctAnswer: 0
            }
        ]
    }
];

// Экспортируем все данные
window.APP_DATA = {
    CONFIG,
    MOCK_BOOKS,
    MOCK_GENRES,
    MOCK_EVENTS,
    TITLES,
    RED_BOOK_ANIMALS,
    STORAGE_KEYS,
    BOOK_REVIEWS,
    MOCK_STATS,
    DEFAULT_USER_DATA,
    THEMES,
    RatingUtils,
    ACHIEVEMENTS,
    AchievementSystem,
    LevelSystem,
    DAILY_CHALLENGES,
    WEEKLY_CHALLENGES,
    AUTHOR_BIOS,
    BOOK_QUOTES,
    GAME_DATA,
    EDUCATION_QUIZZES
};
console.log('MOCK_BOOKS length:', MOCK_BOOKS.length);
console.log('data.js loaded successfully');