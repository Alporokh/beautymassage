/* Medová masáž. Keywords: medová masáž praha, medová masáž zad,
   detoxikační medová masáž, masáž medem

   Cena 1 500 Kč / 60 min podle ceníku v content.js. */
module.exports = {
  slug: 'medova-masaz',
  hero: '23-medova-masaz-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 1500,
  minutes: 60,
  related: ['anticelulitidova-masaz', 'vakuova-masaz-tela', 'lymfaticka-masaz', 'aroma-masaz'],

  meta: {
    cs: {
      title: 'Medová masáž Praha - 1 500 Kč | Massage 4 Beauty',
      desc: 'Medová masáž v Praze 4. Přírodní med čistí pokožku a aktivuje metabolismus - pleť je hladší, jemnější a svěží. 60 minut za 1 500 Kč, online rezervace.',
      ogTitle: 'Medová masáž Praha | Massage 4 Beauty',
      ogDesc: 'Masáž přírodním medem v Praze 4 - hladší, jemnější a svěží pokožka. 60 minut za 1 500 Kč.'
    },
    en: {
      title: 'Honey Massage Prague | Massage 4 Beauty',
      desc: 'Honey massage in Prague 4. Natural honey cleanses the skin and activates metabolism, leaving it smoother, softer and refreshed. 60 minutes, 1 500 CZK. Book online.',
      ogTitle: 'Honey Massage Prague | Massage 4 Beauty',
      ogDesc: 'Natural honey massage in Prague 4 - smoother, softer, refreshed skin. 60 minutes, 1 500 CZK.'
    },
    ru: {
      title: 'Медовый массаж Прага | Massage 4 Beauty',
      desc: 'Медовый массаж в Праге 4. Натуральный мёд очищает кожу и активизирует обмен веществ - кожа становится гладкой, мягкой и свежей. 60 минут, 1 500 Kč. Запись онлайн.',
      ogTitle: 'Медовый массаж Прага | Massage 4 Beauty',
      ogDesc: 'Массаж натуральным мёдом в Праге 4 - гладкая, мягкая и свежая кожа. 60 минут, 1 500 Kč.'
    }
  },

  schema: {
    name: 'Medová masáž',
    alternateName: ['Masáž medem', 'Medová masáž zad'],
    serviceType: 'Medová masáž',
    description: 'Masáž přírodním medem. Čistí pokožku, aktivuje metabolismus a zanechává pleť hladší, jemnější a svěží.'
  },

  strings: {
    cs: {
      crumb: 'Medová masáž',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Medová masáž Praha',
      lead: 'Masáž přírodním medem, která pokožku čistí a aktivuje metabolismus. Po masáži je pleť hladší, jemnější a svěží.',
      photoAlt: 'Příprava přírodního medu na medovou masáž ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Medová masáž - přírodní med připravený k masáži.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je medová masáž',
      what: [
        'Medová masáž je tradiční technika, při které se na pokožku nanáší přírodní med. Dlaně se na medu přisají a s odporem se odlepují - tento efekt prokrvuje tkáně a rozproudí metabolismus.',
        'Med zároveň pokožku jemně čistí a vyživuje. Masáž se nejčastěji dělá na zádech a na partiích, kde chcete pokožku zpevnit a zjemnit. Je intenzivnější než klasická masáž, ale výsledkem je hladká a svěží pleť.'
      ],

      h2How: 'Jak medová masáž probíhá',
      steps: [
        { t: 'Příprava', d: 'Med lehce zahřeji, aby byl tekutý a příjemný na pokožce.' },
        { t: 'Prohřátí', d: 'Krátkou ruční masáží partie prohřeji a připravím na práci s medem.' },
        { t: 'Masáž medem', d: 'Nanáším med a dlaněmi rytmicky přisávám a odlepuji. Intenzitu přizpůsobím vaší citlivosti.' },
        { t: 'Očištění a zklidnění', d: 'Zbytky medu setřu teplým ručníkem a pokožku zklidním.' }
      ],

      h2Effects: 'Účinky medové masáže',
      effects: [
        'čistší a hladší pokožka',
        'aktivace metabolismu',
        'lepší prokrvení tkání',
        'jemnější a svěžejší pleť',
        'pocit lehkosti v těle',
        'vhodný doplněk péče proti celulitidě'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Medová masáž se hodí, pokud chcete pokožku vyčistit, zjemnit a dodat jí svěžest, nebo jako součást péče o problémové partie. Je intenzivnější, proto ji doporučuji těm, kdo snesou výraznější pocit při masáži.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'alergie na med nebo včelí produkty',
        'rozšířené žilky nebo křečové žíly v masírované oblasti',
        'poraněná, podrážděná nebo zanícená pokožka',
        'těhotenství',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena medové masáže',
      priceName: 'Medová masáž',
      priceDesc: 'Masáž přírodním medem. Cena je konečná - nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Bolí medová masáž?', a: 'Je intenzivnější než klasická masáž - přisávání a odlepování dlaní je cítit. Sílu ale vždy přizpůsobím vám a můžeme ji kdykoli upravit.' },
        { q: 'Zůstane mi med na těle?', a: 'Ne. Po masáži med setřu teplým ručníkem. Doporučuji se večer osprchovat.' },
        { q: 'Může po masáži pokožka zčervenat?', a: 'Ano, krátkodobé zarudnutí je běžné a je znakem prokrvení. Obvykle do několika hodin zmizí.' },
        { q: 'Jak často masáž opakovat?', a: 'Pro výraznější efekt se osvědčuje série několika masáží s odstupem několika dní. Plán probereme společně.' }
      ],

      h2Book: 'Objednejte se na medovou masáž',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Honey Massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Honey Massage in Prague',
      lead: 'A massage with natural honey that cleanses the skin and activates metabolism. Afterwards the skin is smoother, softer and refreshed.',
      photoAlt: 'Natural honey being prepared for a honey massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Honey massage - natural honey ready for the treatment.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What honey massage is',
      what: [
        'Honey massage is a traditional technique in which natural honey is applied to the skin. The palms stick to the honey and lift away against its pull - this boosts circulation in the tissues and gets the metabolism going.',
        'At the same time the honey gently cleanses and nourishes the skin. It is most often done on the back and on areas where you want firmer, smoother skin. It is more intense than a classic massage, but leaves the skin smooth and fresh.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Preparation', d: 'I warm the honey slightly so it is runny and pleasant on the skin.' },
        { t: 'Warming up', d: 'A short manual massage warms the area and prepares it for the honey.' },
        { t: 'Honey massage', d: 'I apply the honey and rhythmically press and lift my palms. I adjust the intensity to your sensitivity.' },
        { t: 'Cleansing and settling', d: 'I wipe off the remaining honey with a warm towel and calm the skin.' }
      ],

      h2Effects: 'What honey massage does',
      effects: [
        'cleaner, smoother skin',
        'activated metabolism',
        'better circulation in the tissues',
        'softer, fresher skin',
        'a feeling of lightness in the body',
        'a good addition to anti-cellulite care'
      ],

      h2Who: 'Who it suits',
      who: 'Honey massage suits you if you want to cleanse, soften and refresh your skin, or as part of care for problem areas. It is more intense, so I recommend it to those who are comfortable with a stronger sensation during the massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'allergy to honey or bee products',
        'broken capillaries or varicose veins in the treated area',
        'injured, irritated or inflamed skin',
        'pregnancy',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of honey massage',
      priceName: 'Honey Massage',
      priceDesc: 'Massage with natural honey. The price is final - we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does honey massage hurt?', a: 'It is more intense than a classic massage - you can feel the palms pulling away. I always adjust the strength to you and we can change it at any time.' },
        { q: 'Will honey stay on my body?', a: 'No. After the massage I wipe the honey off with a warm towel. I recommend a shower in the evening.' },
        { q: 'Can the skin turn red afterwards?', a: 'Yes, brief redness is normal and is a sign of increased circulation. It usually fades within a few hours.' },
        { q: 'How often should I repeat it?', a: 'For a stronger effect, a course of several sessions a few days apart works well. We will plan it together.' }
      ],

      h2Book: 'Book your honey massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Медовый массаж',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Медовый массаж в Праге',
      lead: 'Массаж натуральным мёдом, который очищает кожу и активизирует обмен веществ. После процедуры кожа становится более гладкой, мягкой и свежей.',
      photoAlt: 'Подготовка натурального мёда для медового массажа в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Медовый массаж - натуральный мёд, готовый к процедуре.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое медовый массаж',
      what: [
        'Медовый массаж - традиционная техника, при которой на кожу наносится натуральный мёд. Ладони прилипают к мёду и отрываются с усилием - это усиливает кровообращение в тканях и запускает обмен веществ.',
        'Одновременно мёд мягко очищает и питает кожу. Чаще всего массаж делают на спине и на зонах, где хочется сделать кожу более упругой и гладкой. Он интенсивнее классического массажа, но оставляет кожу гладкой и свежей.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Подготовка', d: 'Слегка подогреваю мёд, чтобы он был жидким и приятным для кожи.' },
        { t: 'Разогрев', d: 'Коротким ручным массажем разогреваю зону и готовлю её к работе с мёдом.' },
        { t: 'Массаж мёдом', d: 'Наношу мёд и ритмично прижимаю и отрываю ладони. Интенсивность подбираю под вашу чувствительность.' },
        { t: 'Очищение и успокоение', d: 'Остатки мёда снимаю тёплым полотенцем и успокаиваю кожу.' }
      ],

      h2Effects: 'Эффект медового массажа',
      effects: [
        'более чистая и гладкая кожа',
        'активизация обмена веществ',
        'улучшение кровообращения в тканях',
        'мягкая и свежая кожа',
        'ощущение лёгкости в теле',
        'хорошее дополнение к антицеллюлитному уходу'
      ],

      h2Who: 'Кому подходит',
      who: 'Медовый массаж подойдёт, если хочется очистить, смягчить и освежить кожу, или как часть ухода за проблемными зонами. Он интенсивнее, поэтому я рекомендую его тем, кому комфортны более сильные ощущения во время массажа.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'аллергия на мёд или продукты пчеловодства',
        'расширенные сосуды или варикоз в зоне массажа',
        'повреждённая, раздражённая или воспалённая кожа',
        'беременность',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена медового массажа',
      priceName: 'Медовый массаж',
      priceDesc: 'Массаж натуральным мёдом. Цена окончательная - мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Больно ли это?', a: 'Массаж интенсивнее классического - отрыв ладоней хорошо ощущается. Силу я всегда подбираю под вас, и её можно изменить в любой момент.' },
        { q: 'Останется ли мёд на теле?', a: 'Нет. После массажа я снимаю мёд тёплым полотенцем. Вечером рекомендую принять душ.' },
        { q: 'Может ли кожа покраснеть?', a: 'Да, кратковременное покраснение - это нормально и говорит о приливе крови. Обычно оно проходит за несколько часов.' },
        { q: 'Как часто повторять массаж?', a: 'Для более заметного эффекта хорошо работает курс из нескольких процедур с интервалом в несколько дней. План составим вместе.' }
      ],

      h2Book: 'Запишитесь на медовый массаж',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
