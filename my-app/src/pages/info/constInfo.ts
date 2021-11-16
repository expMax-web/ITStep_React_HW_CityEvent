export interface InfoTypes {
  Cinema: CinemaTypes;
  Perfomances: PerfomancesTypes;
  Concerts: ConcertsTypes;
}

interface CinemaTypes {
  title: string;
  genre: Array<string>;
  year: number;
  country: string;
  description: string;
  length: lengthTimeTypes;
  censorAge: number;
  id: number;
  poster: string;
  type: string;
}

interface lengthTimeTypes {
  hour: string;
  minute: string;
}

interface PerfomancesTypes {
  title: string;
  genre: Array<string>;
  description: string;
  length: lengthTimeTypes;
  censorAge: number;
  id: number;
  poster: string;
  type: string;
}

interface ConcertsTypes {
  title: string;
  genre: Array<string>;
  description: string;
  length: lengthTimeTypes;
  censorAge: number;
  id: number;
  poster: string;
  place: placeTypes;
  type: string;
}

interface placeTypes {
  title: string;
  address: string;
}
export const Info = {
  Cinema: [
    {
      title: "Веном 2",
      genre: ["фантастика", "боевик"],
      year: 2021,
      country: "США",
      description:
        "Более чем через год после тех событий журналист Эдди Брок пытается приспособиться к жизни в качестве хозяина инопланетного симбиота Венома, который наделяет его сверхчеловеческими способностями. Брок пытается возродить свою карьеру и берет интервью у серийного убийцы Клетуса Касади, который по воле случая становится хозяином Карнажа и сбегает из тюрьмы после неудавшейся казни.",
      length: {
        hour: 1,
        minute: 30,
      },
      censorAge: 16,
      id: 1,
      poster:
        "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/3/9/3/8356393/fc2d7830149b85b72d63ae05bf7808f5.jpg",
      type: "movie",
    },
    {
      title: "Вечные",
      genre: ["фантастика", "боевик"],
      year: 2021,
      country: "США",
      description:
        "Вечные — представители расы генетически улучшенных суперлюдей, тайно живущих на Земле. Они появились на свет 5 миллионов лет назад в результате экспериментов могущественных целестиалов. Наделённые невероятными суперспособностями, на протяжении тысячелетий они скрывались от человеческой цивилизации, втайне защищая людей от монструозных девиантов. Однако, последние события и действия Таноса заставили их выйти на свет.",
      length: {
        hour: 2,
        minute: 36,
      },
      censorAge: 18,
      id: 2,
      poster:
        "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/1/5/2/8355251/7603599ee8aee06fbf5bf6b86703ee0b.jpg",
      type: "movie",
    },
    {
      title: "Кощей. Начало",
      genre: ["анимация", "приключение", "семейный"],
      year: 2021,
      country: "Россия",
      description:
        "История приключений молодого воина Кощея в волшебном мире. Герой прибывает в столицу княжества в поисках безжалостного монстра — Белого призрака. Когда-то Кощей поклялся отомстить за гибель близких и уничтожить чудовище. В столице Кощей встречает юную волшебницу — циркачку Мэй. Волею случая они оказываются в Дикоземье, где им предстоит пережить ряд приключений, преодолеть многочисленные испытания, спасти мир и доказать, что настоящая любовь — бессмертна.",
      length: {
        hour: 1,
        minute: 46,
      },
      censorAge: 6,
      id: 3,
      poster:
        "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/0/8/3/8364380/5faedd0c0ecf144ce9e5529261bb1a53.jpg",
      type: "movie",
    },
  ],
  Perfomances: [
    {
      title: "Ревизор",
      genre: ["Спектакль", "Комедия"],
      description:
        "«Ревизор» – это вечная классика, и она не теряет своей актуальности. То, над чем Николай Васильевич смеялся, что его раздражало, и что он не любил в нашем обществе и высмеивал в пьесе – оно сохранилось и по сей день. Сменяются эпохи, происходят катаклизмы, строятся новые города и рушатся старые, а галерея человеческих пороков и страстей остаётся неизменной. К сожалению, зло часто остаётся безнаказанным. Этот спектакль – это попытка восстановить справедливость.",
      length: {
        hour: 2,
        minute: 45,
      },
      censorAge: 6,
      id: 4,
      poster:
        "https://pickimage.ru/wp-content/uploads/images/detskie/playbill/teatralnayaafisha15.jpg",
      type: "perfomances",
    },
    {
      title: "Алексей Каренин",
      genre: ["Спектакль", "драма"],
      description: `Лонг-лист фестиваля «Золотая маска» 2021 года. Лауреат Международного фестиваля русских театров национальных республик России и зарубежных стран «Мост дружбы» (Йошкар-Ола) 2020.
  
        «Все счастливые семьи похожи друг на друга, каждая несчастная семья несчастлива по-своему», – так начинается роман Льва Толстого «Анна Каренина». Казалось бы, про него известно все: красавица Анна полюбила блестящего офицера Вронского, а бесчувственный муж-сухарь не дает ей развода, разлучает с сыном...
        
        Но драматург Василий Сигарев и режиссер Константин Солдатов смотрят на эту ситуацию совсем с другой стороны – глазами Алексея Каренина. И тогда раскрывается еще одна драма, драма не менее сильного чувства – любви мужа, пытающегося отстоять свою семью, свое счастье.`,
      length: {
        hour: 2,
        minute: 50,
      },
      censorAge: 16,
      id: 5,
      poster:
        "data:image/jpeg;base64,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",
      type: "perfomances",
    },
    {
      title: "Гамлет",
      genre: ["Спектакль", "Драма"],
      description:
        "Рядом с Эльсинором, королевским дворцом датских монархов, солдаты ночных караулов несколько раз видели призрака, удивительно похожего на недавно умершего короля. Новость доходит до принца Гамлета, сына покойного короля, он решает увидеть призрака. Встреча с ним приводит принца в ужас и полное смятение – призрак рассказал ему о том, что был убит своим братом Клавдием, нынешним королём, влившим ему в ухо яд во время сна. Тень отца Гамлета завещает сыну месть. Гамлет решает притворяться безумцем, чтобы получить неопровержимые доказательства вины Клавдия.",
      length: {
        hour: 1,
        minute: 30,
      },
      censorAge: 16,
      id: 6,
      poster: "https://izhevskinfo.ru/pictures/afisha/mer/47082.jpg",
      place: {
        title: `ДК "Аксион"`,
        address: "г. Ижевск, ул. М.Горького, д. 92",
      },
      type: "perfomances",
    },
  ],
  Concerts: [
    {
      title: "Jony",
      genre: ["Концерт", "Хип-хоп и рэп", "Поп"],
      description:
        "Мальчик, чье настоящее имя – Джахид Гусейнли, родился в азербайджанской семье в 1996 году. ... В России парню с таким необычным для ушей местных жителей именем пришлось несладко. Псевдоним Jony родился благодаря маме Джахида – он любил смотреть мультик «Джонни Браво», а она в шутку начала называть сына Джонни.",
      length: {
        hour: 2,
        minute: 45,
      },
      censorAge: 18,
      id: 7,
      poster:
        "https://sun9-9.userapi.com/impg/up6LH2i5UqkTRcQWSjL7jgg4CyokNS059Bg9cQ/FhKuDnYZWHI.jpg?size=604x403&quality=96&sign=f9718f617896a79bda435a3788a189db&type=album",
      place: {
        title: "ДК Металлург",
        address: "г.Ижевск, ул.Карла Маркса, 246",
      },
      type: "сoncerts",
    },
    {
      title: "Markul",
      genre: ["Концерт", "Хип-хоп и рэп"],
      description: `Markul отправляется в масштабный тур по СНГ с презентацией нового альбома!`,
      length: {
        hour: 2,
        minute: 50,
      },
      censorAge: 16,
      id: 8,
      poster: "https://uznayvse.ru/images/celebs/2019/9/mark-markul_big.jpg",
      place: { title: "A.T.O.M. HALL", address: "г. Ижевск, ул. Зенитная, 4" },
      type: "сoncerts",
    },
    {
      title: "Любэ",
      genre: ["Концерт", "Эстрада"],
      description:
        "Ярко вспыхнув на российском «музыкальном небосклоне» в конце восьмидесятых, группа «Любэ» за много лет не только не потеряла своих позиций, но и обрела собственную нишу, свой неповторимый стиль и множество поклонников. Начиная с 1989 года композиции в исполнении группы занимают лидирующие строчки российских хит-парадов и становятся не просто шлягерами на один день, а практически народными песнями. «Любэ» получает статус одного из наиболее востребованных, любимых и признанных публикой коллективов.",
      length: {
        hour: 1,
        minute: 30,
      },
      censorAge: 6,
      id: 9,
      poster:
        "data:image/jpeg;base64,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",
      place: {
        title: `ДК "Аксион"`,
        address: "г. Ижевск, ул. М.Горького, д. 92",
      },
      type: "сoncerts",
    },
  ],
};

// export const Cinema: {}[] = [
//   {
//     title: "Веном 2",
//     genre: ["фантастика", "боевик"],
//     year: 2021,
//     country: "США",
//     description:
//       "Более чем через год после тех событий журналист Эдди Брок пытается приспособиться к жизни в качестве хозяина инопланетного симбиота Венома, который наделяет его сверхчеловеческими способностями. Брок пытается возродить свою карьеру и берет интервью у серийного убийцы Клетуса Касади, который по воле случая становится хозяином Карнажа и сбегает из тюрьмы после неудавшейся казни.",
//     length: {
//       hour: 1,
//       minute: 30,
//     },
//     censorAge: 16,
//     id: 1,
//     poster:
//       "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/3/9/3/8356393/fc2d7830149b85b72d63ae05bf7808f5.jpg",
//     type: "movie",
//   },
//   {
//     title: "Вечные",
//     genre: ["фантастика", "боевик"],
//     year: 2021,
//     country: "США",
//     description:
//       "Вечные — представители расы генетически улучшенных суперлюдей, тайно живущих на Земле. Они появились на свет 5 миллионов лет назад в результате экспериментов могущественных целестиалов. Наделённые невероятными суперспособностями, на протяжении тысячелетий они скрывались от человеческой цивилизации, втайне защищая людей от монструозных девиантов. Однако, последние события и действия Таноса заставили их выйти на свет.",
//     length: {
//       hour: 2,
//       minute: 36,
//     },
//     censorAge: 18,
//     id: 2,
//     poster:
//       "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/1/5/2/8355251/7603599ee8aee06fbf5bf6b86703ee0b.jpg",
//     type: "movie",
//   },
//   {
//     title: "Кощей. Начало",
//     genre: ["анимация", "приключение", "семейный"],
//     year: 2021,
//     country: "Россия",
//     description:
//       "История приключений молодого воина Кощея в волшебном мире. Герой прибывает в столицу княжества в поисках безжалостного монстра — Белого призрака. Когда-то Кощей поклялся отомстить за гибель близких и уничтожить чудовище. В столице Кощей встречает юную волшебницу — циркачку Мэй. Волею случая они оказываются в Дикоземье, где им предстоит пережить ряд приключений, преодолеть многочисленные испытания, спасти мир и доказать, что настоящая любовь — бессмертна.",
//     length: {
//       hour: 1,
//       minute: 46,
//     },
//     censorAge: 6,
//     id: 3,
//     poster:
//       "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/0/8/3/8364380/5faedd0c0ecf144ce9e5529261bb1a53.jpg",
//     type: "movie",
//   },
// ];

// export const Perfomances: {}[] = [
//   {
//     title: "Ревизор",
//     genre: ["Спектакль", "Комедия"],
//     description:
//       "«Ревизор» – это вечная классика, и она не теряет своей актуальности. То, над чем Николай Васильевич смеялся, что его раздражало, и что он не любил в нашем обществе и высмеивал в пьесе – оно сохранилось и по сей день. Сменяются эпохи, происходят катаклизмы, строятся новые города и рушатся старые, а галерея человеческих пороков и страстей остаётся неизменной. К сожалению, зло часто остаётся безнаказанным. Этот спектакль – это попытка восстановить справедливость.",
//     length: {
//       hour: 2,
//       minute: 45,
//     },
//     censorAge: 6,
//     id: 4,
//     poster:
//       "https://pickimage.ru/wp-content/uploads/images/detskie/playbill/teatralnayaafisha15.jpg",
//     type: "perfomances",
//   },
//   {
//     title: "Алексей Каренин",
//     genre: ["Спектакль", "драма"],
//     description: `Лонг-лист фестиваля «Золотая маска» 2021 года. Лауреат Международного фестиваля русских театров национальных республик России и зарубежных стран «Мост дружбы» (Йошкар-Ола) 2020.

//       «Все счастливые семьи похожи друг на друга, каждая несчастная семья несчастлива по-своему», – так начинается роман Льва Толстого «Анна Каренина». Казалось бы, про него известно все: красавица Анна полюбила блестящего офицера Вронского, а бесчувственный муж-сухарь не дает ей развода, разлучает с сыном...

//       Но драматург Василий Сигарев и режиссер Константин Солдатов смотрят на эту ситуацию совсем с другой стороны – глазами Алексея Каренина. И тогда раскрывается еще одна драма, драма не менее сильного чувства – любви мужа, пытающегося отстоять свою семью, свое счастье.`,
//     length: {
//       hour: 2,
//       minute: 50,
//     },
//     censorAge: 16,
//     id: 5,
//     poster:
//       "data:image/jpeg;base64,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",
//     type: "perfomances",
//   },
//   {
//     title: "Гамлет",
//     genre: ["Спектакль", "Драма"],
//     description:
//       "Рядом с Эльсинором, королевским дворцом датских монархов, солдаты ночных караулов несколько раз видели призрака, удивительно похожего на недавно умершего короля. Новость доходит до принца Гамлета, сына покойного короля, он решает увидеть призрака. Встреча с ним приводит принца в ужас и полное смятение – призрак рассказал ему о том, что был убит своим братом Клавдием, нынешним королём, влившим ему в ухо яд во время сна. Тень отца Гамлета завещает сыну месть. Гамлет решает притворяться безумцем, чтобы получить неопровержимые доказательства вины Клавдия.",
//     length: {
//       hour: 1,
//       minute: 30,
//     },
//     censorAge: 16,
//     id: 6,
//     poster: "https://izhevskinfo.ru/pictures/afisha/mer/47082.jpg",
//     place: {
//       title: `ДК "Аксион"`,
//       address: "г. Ижевск, ул. М.Горького, д. 92",
//     },
//     type: "perfomances",
//   },
// ];

// export const Concerts: {}[] = [
//   {
//     title: "Jony",
//     genre: ["Концерт", "Хип-хоп и рэп", "Поп"],
//     description:
//       "Мальчик, чье настоящее имя – Джахид Гусейнли, родился в азербайджанской семье в 1996 году. ... В России парню с таким необычным для ушей местных жителей именем пришлось несладко. Псевдоним Jony родился благодаря маме Джахида – он любил смотреть мультик «Джонни Браво», а она в шутку начала называть сына Джонни.",
//     length: {
//       hour: 2,
//       minute: 45,
//     },
//     censorAge: 18,
//     id: 7,
//     poster:
//       "https://sun9-9.userapi.com/impg/up6LH2i5UqkTRcQWSjL7jgg4CyokNS059Bg9cQ/FhKuDnYZWHI.jpg?size=604x403&quality=96&sign=f9718f617896a79bda435a3788a189db&type=album",
//     place: { title: "ДК Металлург", address: "г.Ижевск, ул.Карла Маркса, 246" },
//     type: "сoncerts",
//   },
//   {
//     title: "Markul",
//     genre: ["Концерт", "Хип-хоп и рэп"],
//     description: `Markul отправляется в масштабный тур по СНГ с презентацией нового альбома!`,
//     length: {
//       hour: 2,
//       minute: 50,
//     },
//     censorAge: 16,
//     id: 8,
//     poster: "https://uznayvse.ru/images/celebs/2019/9/mark-markul_big.jpg",
//     place: { title: "A.T.O.M. HALL", address: "г. Ижевск, ул. Зенитная, 4" },
//     type: "сoncerts",
//   },
//   {
//     title: "Любэ",
//     genre: ["Концерт", "Эстрада"],
//     description:
//       "Ярко вспыхнув на российском «музыкальном небосклоне» в конце восьмидесятых, группа «Любэ» за много лет не только не потеряла своих позиций, но и обрела собственную нишу, свой неповторимый стиль и множество поклонников. Начиная с 1989 года композиции в исполнении группы занимают лидирующие строчки российских хит-парадов и становятся не просто шлягерами на один день, а практически народными песнями. «Любэ» получает статус одного из наиболее востребованных, любимых и признанных публикой коллективов.",
//     length: {
//       hour: 1,
//       minute: 30,
//     },
//     censorAge: 6,
//     id: 9,
//     poster:
//       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcVFRUXGBcZGiMaGRoZGR0jIxojIywjIyMsIiIjKDQvIyk1KCIiLz8vNTo6Ozs6Iy9ARj86RjQ7OjoBCwsLDw4PHBERGS8iICE8Oi88Lz06NDg8Ly84Ny8yMTM4NDEvPC8xMTAxLzwvPDwvMT0xPS8zPD09Ly8vLz03Mv/AABEIANIA0gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYCBwj/xABIEAACAQIDBAUIBwYEBAcAAAABAgMAEQQSIQUxQVEGEyJhcRQVIzKBkaHRBzNScqKxwUJic4Lh8DRTY5IlQ5PxFiQ1RHSz4v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgEEAAQHAAMBAAAAAAAAAQIRAwQSITEFFEFRExUiMjNSYXGh8EP/2gAMAwEAAhEDEQA/APMqVdUqAVKlTqt9BQDAVOuGOl9P75UU2ZssEF3YKBvv86nnxUSkCOMG283Yn4gVFlkihBhEBswJPLn+VXfJkGpy6cAv9Kn8siK9qMA8DmPzqu2Vt5ueGt/fUF0jtZ47eqPaotULCJzZky8iv6g12IuVieVxXIhLbxryAqLJplpNhMyZ4jntYWG/jwqOKEqxVhYg2IqRI3j7QJB7qL4WZZbrLYPbsyAAa/vcxSyyiPs+PdWr2fHpWdwkDI+VhYg1q8AulCZBCJKnVK5jqUNQoNkpFK6zUi1ARFKidanZqCy9KcPFIyMryFTbsBbX1O8kXtlPtpwWhjnO9qssYlGA3W8Tb+g8CQe6hD4rWzL7VsbWuTcAmw770Ul6VRlmUxv1ZRWW8erB7ZQO1cljcbt9VYcQsbtPEkmdCEeCVQCgcHKUINgCbAnU2311Q2Nba5OPNiz4/qfCBkrqwJBvY23Ed/HxFC8TRTESFjI7WuzF7KDa97NvN7XvbwNCMS9ZZYbZUTinvjYPnND5TVudqoStVDQivSrjNSqQCaemp6ECqbDyZO1x4VDVmKDMVHOgROkskmnaI5URw+yJDqFIozseBI03ajfWnwjgi9q555a6O3HgTVsymE6Ms7aratDhOiEY9Y0ajkuORqaKTXWsXkkzZYor0KcPRjD2tlued6mbo/EuqqB7L0UicWqRmpuZFUY3pBskAdkDme7lagAiCAG//eth0ne0enE1k7Cw/vfWsJcFJrk0cD9ZEsmmZLKbcRwNF8E4tQDo69ndN+ZCLVPgcXpWqMWaMS0xnoT5XXDYrvoVoMeUU3X0F8q76XlXfQigriZMyMoYqSLZhvHh31ktsbMjiyMjHVgo6xlyrYOd7KRxPDeaLHFVDNKrFSwvlNx3GxH60as6dPneOX8KuDxOHkzqesRVw6ZHLC4aKz6aesM39Klw+2AsZMmdpp8yyMxF1MRUoqqFAN8w5b6p4jDRNcmMXJLE3a5JvfW/fVdiquHVbsDcFmY6nQnU77Aa1aF3wb5Munknutp+hd8tM0DTJFliU5WbOLqWIOi21ALd2/uoPiXsSOVOZgoyqoVdLqC1iRuJW9ifGqE8tXlbdt2cGT4X/mqRFO9UpGruV6qO9VMRXpVFmpVJBTp6alQD1PDLlcHlUFOm+hK7Ntg8SLX50c2e5K1nej8TPGBp7a0mBnygBlsRyriydno4nwFsPcXv8atdVutxqGHFo6G2+x07x/2rjDYsDsk79R8d1ZmoSWM3FuFSsunfVVcegXMWAHiK5wu2YZL5WF/bVlFlG+QftWPOpHGszky6MNRWqxNsxsdKD7Vwumcb6mEqdCceLI9iH0ykHjVV58kjryYj41JsFrzJ40DxmKvLIb73P5mumJySdB7yuuGxVBvKK5OIq1FLDHldLyug3lFLyilCww2KrU4TofNIis0yoWUEr1ZOW+tr5qr/AEeYKGRXlkVSyMMpY6Lpfdu9tekAUSvll5z2cI8U2kDFJJGWzFGK3Ate3dc2o9s3oVNMgd5FiDC4XKWNuF9RagW3zfaEincZdffXtAGnsolZbJLak0uWeet9HDH/ANyP+n/+qx/Sno7Lg2Gchkb1WG4258jXpXRLaEsk2LV3LKktkB/ZF2Fh7hVL6VkHkYPESC3uai6tFXaltlR4271AzUmeomarnOxZqeuL0qEEVKlSoQKuo99c12goSGcBtOSyxx304DfRA9IZUOVwL99r/Cs7GjLqL3tw+NaHZMELkehlJG/Xnz3VlPauzeDk+Ex8Jt5hMDuDCx8d35Vodu7Pm6pJo75QNbH9Kzs2zljxKZLqM17E7q9XwsRkw4U7iLVjOk00jog3VNnjD4l2azu3goo5svHYeMWDSo197A2v32rR7S6M2fMgVRwNvzp8N0fa3bfOv2dwNTvTRKg07sgw2OJNtWBOjAaa/pVzE3y1aw2yI4/VXKOQP5VR2k4F6yvng2XXIK2bZHkckWT9e6hGMRNQsYUWup46c6tSSOCSgzagkVFtGfMhbjY/38a6YnNJKgR1lcdbVfPXJkrU5bLXW03W1VL02egsKYbGuLRhiELC63Nj4ivoiL1R4V8z4R/SJ94V9MR+qPCqrs0yScoRs8R2+3/FWH+r+te4cPZXhfSA/wDFm/ij86904eyke2WzdRPJ8KdorisV5GnZaVrsQLGxPFtOJoV002jtERiLGKAjG4IC2uO8eNeobB215RJiEyBeqkygg+tqdT7vjQP6WUBwNyNRILe41Cjxdmksr3bXFJ/7PEi1cE0xNNetDiY96Vc3pUA1KlSoBU6NY1xTrQG+2VhoZYQW0a++jeCgVAbAWG891ef7Kx5QZb6VtsNirRjvrkyRaZ34pJoC4wh8SFuRmfdytXquzxkiVe6vEcdtK02dBqrb/CtzsvpqZI8uUs/AAamplF1ZEZJto23lSMchOvI8fDnUTQ5NRe1Z/D4qTFgo0TRMuoY668LEcaJ7Ox7m8Uv1icftDgRWPRsl7DYvFrYgVlNqyanvrR7TQC5FZrHJprRdmkuIlfAHK5Omg40I23JZPHQeG+rkMqAsjHU2t8aA7bxQeSym6roK6sa5OLK0olDPXOauCaYmtjkO81LNUd6V6At4JvSJ94V9PReqPCvl3AH0ifeFfUUXqjwqvqav7F/lnhPSE/8AF2/ij86934eyvBek8gXazMdwlH517xG11BG4jSoj2zTN1ExvQb/E47+L+rVz9LP+BP3x+TUS6M7IkgmxbuBllkzJY7xcnXlvoR9LkwGCCk6tILD2H+nvouI8kzkpZbX/AHB4dSpUqucrGvT0qVAcUqVKgFSvTgXNhvNPKtjblQE0TaVs4MQGiUcToKxEJ4UXwzvlUgEgAjThWc42bY5bS4uw87jkT+dbHZWwuodWQKANGJtrWBixcraF8ik2ue7WtLgII2XLJi2Pdcae+9Ukn7m+NRbPQPKAupIHhUWLdWsw3jcRWYTYzDWOeQL3kEH2WrkPPCwWRg6HcwBFvEa1hI2pxZoZzcXoBtO3CjRcdXfurLbWxNrgbybCqwVsvOX0mY2sjPIShuVFio389BxGvChF6tYmW0rX3Zre7T9KUsgcXI158fbz/Ou6PCPMm7ZUNNek2lNVigr1f2NsibFyGOBM7gZiLgWA4kkgDeKoVvvog/xGI/gN+a0LRXIGg6H41MQsfU+kC9aBnSxUEA2a9t5rfRdI9rEoow0OaRM6AuBddOb/ALw030bwP+Mw3/wW/OOsx0mJG2sAg+rVY8neLn5fCq1ZupJLbRmdtdHcficW2aFRKw6wqsiWUA7yc1hqd1602yMftmArhepjkZY86hnTRAbbww499XNkSKdr7RizAPLGAgPGyi/50fyWxwB4YEgkfeG6oob/AOABek21ml6lcPAXydZYSKeyDa989t/Csr0lwW1cZiI4po+2yl40Vky5RvNwbcveK1PRLo2uCx3YkMiS4VnUsACO0nzFFMJj41xuDi6xDIMKyEKwbtdjS4+63upRLl7JI8d230exGDydegTrL5bOrXta/qk8xQqvSfpZgMcWBQkErGykjdoEGlebVZHPJV0KlSpVJQVc11SC0JLmzsPe78BoPE/0+JFVpx2qOvhhHFYjVB+Jt/usB7KBONahclmqIlNjWg2LjlSOVW+zdb0AkWxrpHpJWIy2s02FgSSPJpz/AL76KLsJ7AA+BPD21mtjbREZYOLqw91t1ajFbYVoiUkCsBcd9qwmpJ8HTCUWrZoNnYSWNBmGY7geBq1PICpSRd9Z7ZHS8BQrSeN9Kr9IOlastou0x48B8zWLxys2WWNF19o9WpRrabj3UMijMjZyNOFDtjxSTPnkuV3+NaWRbDSrVtZVPcr9DBTx3JO9Sx15GqbqVNqL4qIRTNG3qPr4X3H2G9UMSlrqd4rrj0cUuymTSpGlUlRVoehvSMYGZ5Gj6xXjMbANY6kHQ2PKs9Wn+jj/ANQh+7L/APW9AnQdj+kZBiUlGHYJHCYlXOL6lTcm37tDcb0zSSXAymFg+FsG7Q9IBa1tNNx99eguOzj2ABkCK0em9vJ/kSa8v6L7DjxEc7yF7xC6qhAJ9HK/EHjGo9tRRfewlhOmsceMxOM6li0qZYxmHo9ACSba7hRFfpGj68SnDuR1HUlc411Bve1anA4QAbMBC+j7BtYntYfMbjhqDvqjjnmQY0wRJI5mSMIwFmi6k940t2rX30ob2Ak+kZBiVlGHYIkBhVc4vqQbk2/drN9EtvR4PEnEPEZDlYIAQLFuO7lce2vWYsMnVYDsglpIWbQf5LgfFb0+zEBldmHaZYWvlBzMYpL3+eu4Uob2eV9LelAxseHXqyphQqSWBzEhde7d8azNaPbuw4ocJh5kLh5cuZWI4oraWHMk+DLWcoVbsVKlSqSoqIbGhzSqbXy9q3Mjd8bUPrR9G8OArOWCnhf4cP7vVZPgvFWx9uydlUsL72Oup9tBsPDnYLzNXcc+Z2N720Fd9GYs+IjXmwvUpUg3bKG2IAkhUVRQ0a6QR3mkI+1QSpIZJlpZa4RrUTwEKyG1xfkTrUN0ErKuGVSwzbq12C2cjKN1qGYno5KozoMw7qkwc8y9kodO6spu+jfGtr5Rp8NGqdkCo53ubVNs2JrZmHChe0tqRwg6hpDuUcPHlWMU2zeUkkZ7pNLmkA4qoB+NUnfMoPG1jUOIlLsWY3JNRq3CutKkcUnbs4NKnpqkqKiOxNsSYSRpIwM7RtGCf2cwtcd44UOpUINxHjNo4tFxKSJEl1jJzZczIoTM176lWt330FUI+huNVlQNGhdig9La7KzJbv1U2qrsjpZNhohEiRMgcydoNe5AHBhy8at4Xp3ikdntG95WlCvnIQsbkKM+i3ubd550BfTAbVCiUTi3ViYdsXAEYA4b+ra3hVDZmMxcj4lBjCuSF3YqcwlESEAKR+7cZuXPdXI6cYjJk6uHL1XU+q+i5Qn2t9l+JoNhtqNHJK8aRr1sckZUBsqrICpy3N9AdLk+2gNviNk4xJcJH5c3pMjLcWKFQFGQX7dg55aXpbWwWMw8U+JGOkZkddMlswtGoN7mxAlta1tDrWcPTCXNC/UwAw26uyuLHS5sHtc2sfE2sdabaXTGeeKWF0iCysGJVWuLZNBdjp6Nd9zv1oSAHlZgAzMQNwJJtuGnsAHsrilSoQKlSpUB1GmYgVtnj6nCgZlva5Wxvciw30C6N7PEj3b1RqfZR/pOf+WBawufZVe2aLhGVG40U6GL/wCZU8FuTQp9F8aP9B47Ozc9BViqFtvAhJbg3Rm916yOTW3OvTNuwAat+wbnlx415xKul+VQS+iJV4Vs3xeBuo6uM3aMEhLZQHcsTpc9kKDbffW9qyLroGFH8Ns6IopK6lQTqePtqk5qHZ06TRz1Dag+jRbP2lh48pMsfVmVmIW98pWVd1tBmCEDhcGwrh+kSk6SxWyuD2Nc+tiCUIy7raewUG82xfZ+J+dLzbF9n4n51l8aHsd/yfP7oJybeikIBdQitCHDA+kUEmQqALDeAb7wON65weM2ehRtAwcnRTcLlkyi4G8kqCedjQLG4KNWjAXRmsdTuq35ri+x8T86t8aKV0Zx8LzTk42uCXZrYMqzOYriZzZhrkIsm9SCLkaWPhaonxWDCAKI8xSzkoD2vQ3y9nTTrfbc8RQTasKpJlUWFhz/AFojs/Z0TxqzLcm99TzPfV5ZEo2c+PQ5J5HjTVotQYvAtJiWZFUGwhGXiFcE6CwucptzI5VLhsbggGd0iJE0hCiMC6hJAv7NgCert3686g80xfY/E3zp/NMX2PxN86p5iJ1fJc3uhhiMCWgzIMgicShRrcxjLY21IYmxPEcrVLjMRgQGaIRgkykKUvYMpEYBI3qUU/z95tH5pi+x+JvnVLAYCNzJmW+VyBqdw9tSs8WrKS8JyxkotrkPPiNm52No/XTL2DYLmjLfs/ZB4cTvOpqwzYHKucJn7WYhdL9ZddyjQLvta40Fqg80xfY/E3zpeaYvsfib51HmI+xf5Lm90dR4jBCaIkRGPqVD9g2zZtbgjVsvH43rpJsHIAirEhvApZgBm3mU+rpvUHUE2vc7qj80xfY/E3zqpiNnxiSNQujZr6nWw041KzxZWfhGWCttBDFTYZHQr5ORnBcCO97xJu7NsubNcc+FPnwPVsAY8xjhFyh0cFhIRodCMpO7f7Kh80xfY/E3zpvNMX2Pi3zqPMRLfJc3ui6mLwB1yxBi4b1AAB1QFrZSB6S+liONjWa2pMjCLIEuI7PlUC7Zm32AucuXWjPmmL7H4m+dUdq4COOPMq2NxxP6mpjmjJ0Uy+E5cUHNtUgLSpUq2PJNv0alSJAQbuR7PdT41CyXytqDYkHXnv4Cslg9oyRm6MR4Uai6UyEBXJIGnLTxHyqC/YOx6ZQL8tO/fR7oy2SJgoJkbUWAOUd+ulDtoY+KWxsl+8/pYVzsnGpHJ9YgBNv2uOmpy2tSxQZx8ryAB7521exFsq2sTY7ydLd1ZOdO0wP93rXRwlCJDLHIJGMZCE9nQ2BuLjjv5Vndow2ynxU+Km35W91SQwdh9QVrWotgByFZXDL6VRzIrV1yal8pH0PgcaUpFfEYxIzZjY79xqdGuARuOtANqPeRhysPhejmH9Rfuis541GKfuehpdXLLmlB9IqbR9eL7/yq/VDaPrxff+VX6rL7Ub4vyTM3tz632CjGyfqk9v5mucXsxJGzMWBtbS3yqzh4RGoQXsOdXnNOCRyabSThqZZH0xsTiljALmwJtuNR4bHxyHKpubX3GqfSH1F+9+hqjsH6w/dP6UjjThuIy62cNUsSXDNJQ/ZW+X+IaIUP2Vvl/iGqR+1nZl/LEuzPlVmtewJ91CPP3+n+L+lF50zKy7rgj30I8wj/ADD/ALf61bHsr6jn1vmty+D0Lz9/p/i/pUE21szo+T1L6X3305VP5hH+Z+H+tUtpYDqsvazZr8LbrfOt4LG3SPK1E9dCG6fSLvn7/T/F/Sl5+/0/xf0oVhIesdUva/Gi3mFftn3UnDHHhjT59dmW6L4QUws3WIHta/CqW3fqv5hV3DQ9WgS97capbd+q/mFc8K38Hsand5SW/ujOUqVKvQPihVaw6BVDsMxJsi87bybcOHefCqtF8LJlmiAAsUUAkbri5ty1JoCsMdIdxIHJRYe4VPHPG7JnUA7sw0/3Abx376WzesVQ/a6tWNlUH0h0uDbhuuTUK9UYmvmz5hwHJt2t7br+yhIYwzEEpoDfW/EjS9/AjxN6rY8lkkBFishf3nWqc+KKyd+VCfHKCfiT7zVjEzhtR+2uo76ElbAJmlj9/uBrSUK2VgyMshI1Xd40UJtXFmkpT4Pq/DMUsWBuS75Mpjn9I5/eNajDeov3RWRdrkmtbhfq0+6Pyq2dfSjm8JluzTfuVNpevF/E+VEKH7T9eL+J8qIVjL7Ueti/JMikxSKbM6g8iakRwwuCCDxFZzbv1vsFGNk/VJ7fzNWnjSgpHPg1ksmolja4RV6Q+ov3v0NUthfWfyn9KL7SwZlUAECxvUGztmGN8xYHS26rxnFY69TlzaXJLWLIl9KCYofsrfL/ABDRCh+yt8v8Q1lH7Well/LEvu4UEncBc1S87Rfa/CflVnFIWRwN5UgVm/Ncv2PiPnVscIyTtnPrNRnxziscbTNQDegvSL/l+39KNILAeFCNuxF2jVRcnNYe6mPiZPiKctK+OWCtnuFkQk2AOprSecIv8xaz/muX7HxHzpea5fsfEfOuicYTdtnjaPLqdPFxjBuzTo4YXBuDuND9u/VfzCrOz4ysaqwsQNRVbbv1X8wrmgqme3qZOWlk5Km0ZylSpV6B8UcdZVuJxIoW4Dr6pJtmB1tfgQSbePhQvrKXWUAQZ5E7Jzr3aj4VJFDls8gsu8KdC/gOXfVFMfIossjgcgxFRPKSbkknmaAty4gsxY7ybmpUn0+Iod1lLrKEo3Gzz6NPuiusa+WNzyU0Kx/Rww4KPFtIcsqJ1Yy+s7F8y3voFVL3tqWAtxq7sHogMRhkxMk7xxsSpyxhrNnSNRq4vfPe/C1c3wPquz3F4xWL4e30oy5etlhfq0+6Pyqti+hgjwsk/WSMUaRbLEuUdW5juzGS4va+gNqsY7oC8UkUbT/XYloR2NQi65yM3GxNuVjfWtMmPclycmi13lpN1dlTaZ7cP8T5URqr/wCDoss0hxMpiijilzLCCxWVWa5UyC1gvM76k2b0GEkUMr4l0WYII7RBrswkJB7YsAI9/wC9urN4LVWdkPGFGUpbezP7eb0v8oozsc+hT2/maFdGOjz47rAjHNH1egANw7BSdSLWBJ77Wos3QhhDLN13YjWY+p6zROyBR2uIVmPK3GtJY7io+xyYdf8ADzyy7bsuUqq4roT1WIihkxDAzM5UiO/o0TNmtm3k3AF+F702E6IRyT9X5U4iMcUiSdVqTMyogK59PWuTc7qy8v8A09H54v1LdD9lHWX+I1cSdE7YM4nrnzBrZOr0y9b1V8+bffW1qj6Z9F/N4jIkkfO8ieki6v6vJqvaOZTm0Om6pWClVmM/GFKcZbegvSqN+gmmHtPJeaSJCWhIUdYhkJRs/bygWO7Wq0vRWGNpTLi5I4o1hYP1BLHrgSMyZ7rlym9rmo8v/TX54v1LtUMYfTQ/zflVXDbCgkgikXFSZ5cQMOF6nQNdbnNnvbKwO7fp30TXoTGz5UxMrqI5JLrh7veKRYiFQSa3JJvfcN1THBXqZ5PGVONbSalQvbPRyLCpIZMTIXE0kMaiIWcx5Lljn7N844HdRN/o9dZljeWQB2mCkRAl1iVWDKM4vmzEAX0tvqvlv6X+dr9B6G7fPov5hVjZPQ+PERzyJiZQkLslzCP2Ezkv6Tsi9xpfhQ7a/RvqcHFiutZjJ1eZDHYKJFdhZ8xzerroN9Whg2u7Ms/i6y43DbVgLrKVVuspV0nhEUM+U3yq2hFmFxqLX8RvFXsDK80qRxxRM8jBEXLYXJW3HutrwJ5mjf0X4HrMbnKI6QxvI4ktktbL2r6W7RPsrc7PxyI0BxPkYnieTEWiMS9XGFKqpK2BPaBA1Jt3UJPLMdK8MrRyRRB4nKuMt9Q2YgkHWx7PhpVVcfYW6uPxKDgCP1v4gV7BsuWOKFZZThJAYpJ3FoT1rP2jmLMXZgSdABwHcKeH2nFCepyYRo4MDmlJEbGRyNAG3kgA6DnQGL6O9F1xGEmxcsxhiidUJCF7k20AGt7svvql0w2CcBiTAXEhyK97Wtm4Ef3vr0LohiJYdm4aOCXCoXmEk3WyRXyEm/ZY77BO+sD0/wAek+PnkjKlSQMym4YgAEg8RcHu5UBA+2sTJCIbZoyiRABL/VlnWx+0M7a77Eip9mdKcVhURFVMgDZRJEGBuyufWGpDIpB4EVHsli0ar2QCHQkuV7I1OuUhTeT1jw0trrcxUEzurNHGSzFgpLFX9WMFQRoLMGvc338hQEOI6WYsRPE6xgSByWaJQ9pGztlYi4UtrYaaU83TfGPIZGdGfO0lyg0ZkEWg4WUC3I61Eu02XrFaJWZGYsSwGUZraZhe4JFvE6USfP1aGPDxlSFy9sZrEBhYlRuBtbU5lvqBqAOw/S+dFKlYZFKxoVliRxaIFU0YEXAJ176kwHTXFQqqp1RCqqrmjVsuTPlKk7j6Rhca61a9M6plwiajKCrx2II0II46HXkSOOlIbRadHWPDxjQhmzAZc+617Wtbw052NADdnbYkgDqhADlC1wD9WwdfiBV+XpfimQxlxkIlBGUf843k9t93Kr2DmkkD5MNCSGKZDbeDc5dLC3Ek6i1t1OJpiQpwsLOjdoF0Ju2guL3Ggvf20BU/8ZYrrFkLIzI7SLmQEAsoRhbkQBcbri9d4jpbi1e7KkbXiIUQqthCbxgLYWUHhuNq6xeHxDML4WNSoZbXTe9t2tgRfS3PnrUmHbEnLfC5rs5GYgXuxvv4AsR4GgKb9KMW0LQ5iYcuVkynKLydbcgaBi3HfbSq+1ukGIxmVZWz2dmUBeL5QQAOFkUAcLVPFinaSWMYeMtmBKdmylLg79+p4EXPMaVCMBKkiyFAqOcoswI9IGFlyXPBrWBtpzFwJxt3GiVJ+3mjAVOycq5V6sWXdcDS/OpoOmuLViW6uRisYJljVyerzFGOa/aGYnNvpsTjZopUVRGWfqyuUhgQC4AzMN5zan51Wkw2KDPL1YFkytkZAAAm+ynTRQw4XtbeKA5h2ligqKqHKk/lC2jP1hsOW7sgW7qvYnpXjZSbKq3RoiIogmjsHa2UaMWS99+h76qYvaD2jeyHOxbRrnRg2VtNBfKbG5177Vftiyip1AzRggMGFwVuxLXJIItfgL30N9AAsuOnkiSNgzIjvICVJOZwua546IDRVumOJUpaOCMR5wI1w6Kh6xQr5kAs11AGtTLLiSigwBb2KWkVSMoVBYMSdLqbeGmlCNs4l5AC4A7bgKG9VgIw1xa24cP01AvYXpniIw4jSBQ7F7CFAEJXISgA7F1005nnVTGdJsTLD1DveICMKltF6sFVyjhoTe2/jQKlQEuelUVKgN19H7EQbQsbf+X/AFNQNEvVydke4cpKVKgIJUGUaD9vh+4lR5B1kmg/sSUqVAdlBroPWbh3pWcx/wBY/wB40qVAdYfFSIpyO6/dYjly8B7qaWdyXuzHfxPMfIe6lSoB5ZWzXzHULfXfu304x8oAtLIOzbR23ct+6lSoDuLak9/rpf8AqN86sLIVXE2JHbA0PDt0qVAVIsVIH0dhdgT2jrY6X8Kd8fLoetkv99uZ7+80qVAO+0pzvmlO79tvnTecZrn0sn+9vnSpUBawWIcOWDsCUFzc3Oo3njVc7RmzD0smhuO22htvGuhpUqAU2JdgpLsSCLEsbjw5Vz5fLa3WyWy7s7fOlSoDhpmMYUsxAIsCTYetuHCuvOc/+dL/AL2+dPSoBHHS2X0snZFl7bdkabtdKieQkakntMdTxNr09KgK9KlSoBUqVKgP/9k=",
//     place: {
//       title: `ДК "Аксион"`,
//       address: "г. Ижевск, ул. М.Горького, д. 92",
//     },
//     type: "сoncerts",
//   },
// ];
