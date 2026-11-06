/* Sportovní masáž. Keywords: sportovní masáž praha, sportovní masáž praha 4,
   masáž po tréninku, regenerační masáž svalů, masáž pro sportovce

   Cena 1 600 Kč / 60 min podle ceníku v content.js. */
module.exports = {
  slug: 'sportovni-masaz',
  hero: '20-sportovni-masaz-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 1600,
  minutes: 60,
  related: ['klasicka-masaz', 'masaz-zad', 'vakuova-masaz-tela', 'lymfaticka-masaz'],

  meta: {
    cs: {
      title: 'Sportovní masáž Praha - 1 600 Kč | Massage 4 Beauty',
      desc: 'Sportovní masáž v Praze 4. Regenerace svalů po zátěži a tréninku, uvolnění napětí a menší bolestivost. 60 minut za 1 600 Kč, online rezervace.',
      ogTitle: 'Sportovní masáž Praha | Massage 4 Beauty',
      ogDesc: 'Regenerace svalů po tréninku v Praze 4 - uvolnění napětí a rychlejší zotavení. 60 minut za 1 600 Kč.'
    },
    en: {
      title: 'Sports Massage Prague - 1 600 CZK | Massage 4 Beauty',
      desc: 'Sports massage in Prague 4. Muscle recovery after exertion and training: releases tension, eases soreness and speeds up recovery. 60 minutes, 1 600 CZK.',
      ogTitle: 'Sports Massage Prague | Massage 4 Beauty',
      ogDesc: 'Muscle recovery after training in Prague 4 - less tension, faster recovery. 60 minutes, 1 600 CZK.'
    },
    ru: {
      title: 'Спортивный массаж Прага - 1 600 Kč | Massage 4 Beauty',
      desc: 'Спортивный массаж в Праге 4. Восстановление мышц после нагрузок и тренировок: снимает напряжение и болезненность, ускоряет восстановление. 60 минут, 1 600 Kč.',
      ogTitle: 'Спортивный массаж Прага | Massage 4 Beauty',
      ogDesc: 'Восстановление мышц после тренировок в Праге 4 - меньше напряжения, быстрее восстановление. 60 минут, 1 600 Kč.'
    }
  },

  schema: {
    name: 'Sportovní masáž',
    alternateName: ['Regenerační masáž', 'Masáž po tréninku', 'Masáž pro sportovce'],
    serviceType: 'Sportovní masáž',
    description: 'Sportovní masáž pro regeneraci svalů po fyzické zátěži a intenzivním tréninku. Uvolňuje napětí, zmírňuje bolestivost a urychluje zotavení.'
  },

  strings: {
    cs: {
      crumb: 'Sportovní masáž',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Sportovní masáž Praha',
      lead: 'Regenerace svalů po fyzické zátěži a intenzivním tréninku. Masáž uvolní napětí, zmírní bolestivost a pomůže tělu rychleji se zotavit.',
      photoAlt: 'Sportovní masáž lýtka ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Sportovní masáž - práce s lýtkovým svalem.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je sportovní masáž',
      what: [
        'Sportovní masáž je intenzivnější ruční masáž zaměřená na svaly, které nesou největší zátěž. Pracuje hlouběji než relaxační masáž a soustředí se na místa, kde se po tréninku drží napětí a ztuhlost.',
        'Hodí se pro rekreační i pravidelné sportovce a pro každého, kdo má za sebou fyzicky náročné dny. Tlak a tempo přizpůsobím tomu, jak se cítíte a jakou zátěž vaše tělo právě má za sebou.'
      ],

      h2How: 'Jak sportovní masáž probíhá',
      steps: [
        { t: 'Krátká konzultace', d: 'Probereme, jaký sport děláte, kdy jste naposledy trénovali a kde cítíte napětí nebo bolest.' },
        { t: 'Prohřátí svalů', d: 'Úvodní hmaty s olejem svaly prokrví a připraví na hlubší práci.' },
        { t: 'Hloubková práce', d: 'Soustředím se na zatížené partie, typicky nohy, záda a ramena. Tlak upravuji podle vaší reakce.' },
        { t: 'Uvolnění a protažení', d: 'Závěrečné hmaty svaly uvolní a vyrovnají napětí v celém těle.' }
      ],

      h2Effects: 'Účinky sportovní masáže',
      effects: [
        'rychlejší regenerace svalů po tréninku',
        'uvolnění napětí a ztuhlosti',
        'menší bolestivost svalů po zátěži',
        'lepší prokrvení svalové tkáně',
        'větší pohyblivost a lehkost v těle',
        'prevence přetížení při pravidelném tréninku'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Sportovní masáž je pro běžce, cyklisty, lidi z posilovny i všechny, kdo trénují pravidelně nebo mají za sebou náročný výkon. Pomůže také, pokud máte svaly ztuhlé z fyzické práce nebo dlouhého stání.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'čerstvé zranění, natržený sval nebo výron (prvních několik dní)',
        'záněty, horečka a akutní onemocnění',
        'kožní onemocnění nebo poranění v masírované oblasti',
        'trombóza nebo závažné potíže s žilami',
        'těhotenství bez konzultace s lékařem'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena sportovní masáže',
      priceName: 'Sportovní masáž',
      priceDesc: 'Regenerační masáž svalů po zátěži. Cena je konečná - nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kdy po tréninku je nejlepší přijít?', a: 'Ideálně den až dva po náročném tréninku nebo závodu. Hned po výkonu jsou svaly unavené a hluboká masáž by je mohla spíš zatížit.' },
        { q: 'Bolí sportovní masáž?', a: 'Je intenzivnější než relaxační masáž a v ztuhlých místech můžete cítit tlak. Neměla by ale bolet tak, abyste se museli napínat. Sílu vždy přizpůsobím.' },
        { q: 'Mohu jít den po masáži trénovat?', a: 'Ano, lehký trénink je v pořádku. Den po hlubší masáži se ale vyplatí vynechat maximální zátěž.' },
        { q: 'Jak často chodit na sportovní masáž?', a: 'Při pravidelném tréninku se osvědčuje jednou za dva až čtyři týdny, před důležitým závodem i častěji. Plán probereme podle vaší zátěže.' }
      ],

      h2Book: 'Objednejte se na sportovní masáž',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Sports Massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Sports Massage in Prague',
      lead: 'Muscle recovery after physical exertion and intense training. The massage releases tension, eases soreness and helps the body recover faster.',
      photoAlt: 'Sports massage of the calf at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Sports massage - working on the calf muscle.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What sports massage is',
      what: [
        'Sports massage is a more intensive manual massage focused on the muscles that carry the most load. It works deeper than a relaxing massage and concentrates on the places where tension and stiffness settle after training.',
        'It suits both recreational and regular athletes, and anyone who has had physically demanding days. I adjust the pressure and pace to how you feel and to the load your body has just been through.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'A short consultation', d: 'We talk about your sport, when you last trained and where you feel tension or pain.' },
        { t: 'Warming the muscles', d: 'Opening strokes with oil bring blood to the muscles and prepare them for deeper work.' },
        { t: 'Deep work', d: 'I focus on the loaded areas, usually legs, back and shoulders, and adjust the pressure to your response.' },
        { t: 'Release and stretch', d: 'Closing strokes relax the muscles and even out tension across the body.' }
      ],

      h2Effects: 'What sports massage does',
      effects: [
        'faster muscle recovery after training',
        'releases tension and stiffness',
        'less muscle soreness after exertion',
        'better blood flow to the muscles',
        'more mobility and a lighter feeling in the body',
        'helps prevent overload with regular training'
      ],

      h2Who: 'Who it suits',
      who: 'Sports massage is for runners, cyclists, gym-goers and anyone who trains regularly or has just completed a demanding effort. It also helps if your muscles are stiff from physical work or long hours on your feet.',
      h3Contra: 'When we do not massage',
      contra: [
        'a fresh injury, torn muscle or sprain (the first few days)',
        'inflammation, fever and acute illness',
        'skin conditions or wounds in the area to be massaged',
        'thrombosis or serious vein problems',
        'pregnancy without a doctor’s approval'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of sports massage',
      priceName: 'Sports Massage',
      priceDesc: 'Muscle recovery massage after exertion. The price is final - we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'When is the best time to come after training?', a: 'Ideally a day or two after a hard session or race. Straight after the effort the muscles are tired and deep massage could load them further.' },
        { q: 'Does sports massage hurt?', a: 'It is more intense than a relaxing massage and you may feel pressure in stiff spots. It should never hurt so much that you tense up. I always adjust the pressure.' },
        { q: 'Can I train the day after?', a: 'Yes, light training is fine. The day after a deeper massage it is worth skipping maximum effort.' },
        { q: 'How often should I come?', a: 'With regular training, once every two to four weeks works well, more often before an important race. We will plan it around your training load.' }
      ],

      h2Book: 'Book your sports massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Спортивный массаж',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Спортивный массаж в Праге',
      lead: 'Восстановление мышц после физических нагрузок и интенсивных тренировок. Массаж снимает напряжение, уменьшает болезненность и помогает телу быстрее восстановиться.',
      photoAlt: 'Спортивный массаж икроножной мышцы в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Спортивный массаж - работа с икроножной мышцей.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое спортивный массаж',
      what: [
        'Спортивный массаж - это более интенсивный ручной массаж, направленный на мышцы, которые несут наибольшую нагрузку. Он работает глубже расслабляющего массажа и сосредоточен на местах, где после тренировок остаются напряжение и скованность.',
        'Подходит и любителям, и тем, кто тренируется регулярно, а также всем, у кого позади физически тяжёлые дни. Силу и темп я подбираю под ваше самочувствие и нагрузку, которую тело только что перенесло.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Короткая консультация', d: 'Обсуждаем, каким спортом вы занимаетесь, когда была последняя тренировка и где чувствуется напряжение или боль.' },
        { t: 'Разогрев мышц', d: 'Вводные движения с маслом усиливают приток крови и готовят мышцы к более глубокой работе.' },
        { t: 'Глубокая проработка', d: 'Сосредотачиваюсь на нагруженных зонах, обычно ногах, спине и плечах. Силу давления подстраиваю под вашу реакцию.' },
        { t: 'Расслабление', d: 'Завершающие движения расслабляют мышцы и выравнивают напряжение во всём теле.' }
      ],

      h2Effects: 'Эффект спортивного массажа',
      effects: [
        'более быстрое восстановление мышц после тренировок',
        'снятие напряжения и скованности',
        'меньше болезненности мышц после нагрузки',
        'улучшение кровоснабжения мышц',
        'больше подвижности и лёгкости в теле',
        'профилактика перегрузок при регулярных тренировках'
      ],

      h2Who: 'Кому подходит',
      who: 'Спортивный массаж подойдёт бегунам, велосипедистам, посетителям спортзала и всем, кто тренируется регулярно или только что перенёс серьёзную нагрузку. Он поможет и тогда, когда мышцы скованы от физической работы или долгого стояния.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'свежая травма, надрыв мышцы или растяжение (первые несколько дней)',
        'воспаления, высокая температура и острые заболевания',
        'кожные заболевания или повреждения в зоне массажа',
        'тромбоз или серьёзные проблемы с венами',
        'беременность без согласования с врачом'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена спортивного массажа',
      priceName: 'Спортивный массаж',
      priceDesc: 'Восстанавливающий массаж мышц после нагрузок. Цена окончательная - мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Когда лучше прийти после тренировки?', a: 'Идеально через день-два после тяжёлой тренировки или соревнования. Сразу после нагрузки мышцы устали, и глубокий массаж может их скорее перегрузить.' },
        { q: 'Больно ли это?', a: 'Массаж интенсивнее расслабляющего, и в скованных местах вы можете чувствовать давление. Но он не должен быть настолько болезненным, чтобы вы напрягались. Силу я всегда подстраиваю.' },
        { q: 'Можно ли тренироваться на следующий день?', a: 'Да, лёгкая тренировка допустима. Но на следующий день после глубокого массажа лучше обойтись без максимальной нагрузки.' },
        { q: 'Как часто приходить на спортивный массаж?', a: 'При регулярных тренировках хорошо работает раз в две-четыре недели, перед важными стартами чаще. План составим с учётом вашей нагрузки.' }
      ],

      h2Book: 'Запишитесь на спортивный массаж',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
