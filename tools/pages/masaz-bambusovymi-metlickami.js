/* Masáž bambusovými metličkami. Keywords: masáž bambusovými metličkami praha,
   bambusová masáž, masáž bambusovými košťátky, prohřívací masáž těla

   Cena 1 600 Kč / 60 min podle ceníku v content.js. */
module.exports = {
  slug: 'masaz-bambusovymi-metlickami',
  hero: '21-masaz-bambusovymi-metlickami-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 1600,
  minutes: 60,
  related: ['aroma-masaz', 'klasicka-masaz', 'medova-masaz', 'lymfaticka-masaz'],

  meta: {
    cs: {
      title: 'Masáž bambusovými metličkami Praha - 1 600 Kč | Massage 4 Beauty',
      desc: 'Masáž bambusovými metličkami v Praze 4. Tělo se jemně prohřeje, zlepší se prokrvení, tok lymfy i tonus pokožky. 60 minut za 1 600 Kč, online rezervace.',
      ogTitle: 'Masáž bambusovými metličkami Praha | Massage 4 Beauty',
      ogDesc: 'Prohřívací masáž bambusovými metličkami v Praze 4 - prokrvení a tonus pokožky. 60 minut za 1 600 Kč.'
    },
    en: {
      title: 'Massage with Bamboo Brooms Prague - 1 600 CZK | Massage 4 Beauty',
      desc: 'Massage with bamboo brooms in Prague 4. The body is gently warmed, improving circulation, lymph flow and skin tone. 60 minutes, 1 600 CZK. Book online.',
      ogTitle: 'Massage with Bamboo Brooms Prague | Massage 4 Beauty',
      ogDesc: 'A warming bamboo broom massage in Prague 4 - better circulation and skin tone. 60 minutes, 1 600 CZK.'
    },
    ru: {
      title: 'Массаж бамбуковыми вениками Прага - 1 600 Kč | Massage 4 Beauty',
      desc: 'Массаж бамбуковыми вениками в Праге 4. Тело мягко прогревается, улучшаются кровообращение, лимфоток и тонус кожи. 60 минут, 1 600 Kč. Запись онлайн.',
      ogTitle: 'Массаж бамбуковыми вениками Прага | Massage 4 Beauty',
      ogDesc: 'Прогревающий массаж бамбуковыми вениками в Праге 4 - кровообращение и тонус кожи. 60 минут, 1 600 Kč.'
    }
  },

  schema: {
    name: 'Masáž bambusovými metličkami',
    alternateName: ['Bambusová masáž', 'Masáž bambusovými košťátky'],
    serviceType: 'Masáž těla',
    description: 'Masáž těla bambusovými metličkami. Tělo se jemně prohřeje a promasíruje, zlepšuje se prokrvení, tok lymfy i tonus pokožky.'
  },

  strings: {
    cs: {
      crumb: 'Masáž bambusovými metličkami',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Masáž bambusovými metličkami Praha',
      lead: 'Tělo se jemně prohřeje a promasíruje svazky tenkých bambusových prutů. Rytmické poklepávání zlepšuje prokrvení, tok lymfy i tonus pokožky.',
      photoAlt: 'Masáž zad bambusovými metličkami ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Masáž bambusovými metličkami - práce na zádech.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je masáž bambusovými metličkami',
      what: [
        'Metlička je svazek tenkých bambusových prutů. Při masáži s ní rytmicky poklepávám a přejíždím po těle, což pokožku a svaly pod ní příjemně prohřeje a rozproudí krev i lymfu.',
        'Masáž kombinuje práci metličkami s ručními hmaty. Výsledkem je hluboké prohřátí, lehkost v těle a svěží, pevnější pokožka. Intenzitu poklepávání vždy přizpůsobím tomu, co je vám příjemné.'
      ],

      h2How: 'Jak masáž probíhá',
      steps: [
        { t: 'Olej a zahřátí', d: 'Nanesu olej a krátkou ruční masáží tělo připravím.' },
        { t: 'Práce metličkami', d: 'Rytmickým poklepáváním a tahy metliček prohřeji záda, nohy a paže.' },
        { t: 'Ruční masáž', d: 'Prohřáté svaly dále uvolním ručními hmaty.' },
        { t: 'Zklidnění', d: 'Závěrečné pomalé tahy tělo zklidní a vyrovnají prokrvení.' }
      ],

      h2Effects: 'Účinky masáže bambusovými metličkami',
      effects: [
        'hluboké prohřátí těla',
        'lepší prokrvení a tok lymfy',
        'pevnější a pružnější pokožka',
        'uvolnění ztuhlých svalů',
        'pocit lehkosti a svěžesti',
        'odpočinek a uvolnění napětí'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž bambusovými metličkami se hodí, pokud chcete tělo prohřát, cítíte se ztuhle nebo unaveně a chcete podpořit tonus pokožky. Je příjemná zejména v chladnějších měsících a pro ty, kdo mají rádi rytmické, povzbuzující masáže.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'rozšířené žíly, křečové žíly nebo trombóza',
        'kožní onemocnění, poranění nebo záněty v masírované oblasti',
        'horečka a akutní onemocnění',
        'sklon k modřinám nebo užívání léků na ředění krve',
        'těhotenství'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže bambusovými metličkami',
      priceName: 'Masáž bambusovými metličkami',
      priceDesc: 'Prohřívací masáž těla bambusovými metličkami. Cena je konečná - nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Bolí masáž metličkami?', a: 'Nebolí. Poklepávání je rytmické a příjemně hřeje. Sílu přizpůsobím vašim pocitům a kdykoli ji můžeme zjemnit.' },
        { q: 'Zůstanou mi na těle stopy?', a: 'Pokožka může být po masáži krátce zarudlá, což je známka prokrvení. Do několika hodin se vše vrátí do normálu.' },
        { q: 'Jak se liší od klasické masáže?', a: 'Klasická masáž pracuje jen rukama. Metličky přidávají rytmické poklepávání, které tělo víc prohřeje a povzbudí prokrvení.' },
        { q: 'Jak často masáž opakovat?', a: 'Pro udržení tonusu pokožky se osvědčuje jednou za dva až tři týdny. Jako jednorázový odpočinek je příjemná kdykoli.' }
      ],

      h2Book: 'Objednejte se na masáž bambusovými metličkami',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Massage with Bamboo Brooms',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Massage with Bamboo Brooms in Prague',
      lead: 'The body is gently warmed and massaged with bundles of thin bamboo sticks. The rhythmic tapping improves circulation, lymph flow and skin tone.',
      photoAlt: 'Back massage with bamboo brooms at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Massage with bamboo brooms - working on the back.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What bamboo broom massage is',
      what: [
        'A bamboo broom is a bundle of thin bamboo sticks. During the massage I tap and sweep it rhythmically over the body, which pleasantly warms the skin and the muscles underneath and gets blood and lymph moving.',
        'The massage combines work with the brooms and manual strokes. The result is deep warmth, a light feeling in the body and fresh, firmer skin. I always adjust the tapping to what feels good to you.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Oil and warm-up', d: 'I apply oil and prepare the body with a short manual massage.' },
        { t: 'Working with the brooms', d: 'Rhythmic tapping and sweeps warm up the back, legs and arms.' },
        { t: 'Manual massage', d: 'I then relax the warmed muscles further with manual strokes.' },
        { t: 'Settling', d: 'Slow closing strokes calm the body and even out the flush.' }
      ],

      h2Effects: 'What bamboo broom massage does',
      effects: [
        'warms the body deeply',
        'improved circulation and lymph flow',
        'firmer, more elastic skin',
        'relaxes stiff muscles',
        'a light, refreshed feeling',
        'rest and release of tension'
      ],

      h2Who: 'Who it suits',
      who: 'Bamboo broom massage suits you if you want to warm up, feel stiff or tired, or want to support your skin tone. It is especially pleasant in the colder months and for anyone who likes rhythmic, invigorating massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'dilated or varicose veins, or thrombosis',
        'skin conditions, wounds or inflammation in the area to be massaged',
        'fever and acute illness',
        'a tendency to bruise or blood-thinning medication',
        'pregnancy'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of bamboo broom massage',
      priceName: 'Massage with Bamboo Brooms',
      priceDesc: 'A warming body massage with bamboo brooms. The price is final - we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does it hurt?', a: 'It does not. The tapping is rhythmic and pleasantly warm. I adjust the strength to how you feel and can soften it at any time.' },
        { q: 'Will it leave marks?', a: 'The skin may be briefly flushed afterwards, which is a sign of better circulation. It settles within a few hours.' },
        { q: 'How is it different from a classic massage?', a: 'A classic massage uses only the hands. The brooms add rhythmic tapping that warms the body more and boosts circulation.' },
        { q: 'How often should I repeat it?', a: 'To keep the skin toned, once every two to three weeks works well. As a one-off treat it is pleasant any time.' }
      ],

      h2Book: 'Book your bamboo broom massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Массаж бамбуковыми вениками',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Массаж бамбуковыми вениками в Праге',
      lead: 'Тело мягко прогревается и массируется пучками тонких бамбуковых прутьев. Ритмичное похлопывание улучшает кровообращение, лимфоток и тонус кожи.',
      photoAlt: 'Массаж спины бамбуковыми вениками в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Массаж бамбуковыми вениками - работа со спиной.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое массаж бамбуковыми вениками',
      what: [
        'Бамбуковый веник - это пучок тонких бамбуковых прутьев. Во время массажа я ритмично похлопываю и провожу им по телу, что приятно прогревает кожу и мышцы под ней и ускоряет движение крови и лимфы.',
        'Массаж сочетает работу вениками с ручными приёмами. В результате - глубокое прогревание, лёгкость в теле и свежая, более упругая кожа. Интенсивность похлопываний я всегда подбираю под ваши ощущения.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Масло и разогрев', d: 'Наношу масло и готовлю тело коротким ручным массажем.' },
        { t: 'Работа вениками', d: 'Ритмичным похлопыванием и движениями вениками прогреваю спину, ноги и руки.' },
        { t: 'Ручной массаж', d: 'Прогретые мышцы дополнительно расслабляю ручными приёмами.' },
        { t: 'Успокоение', d: 'Медленные завершающие движения успокаивают тело и выравнивают прилив крови.' }
      ],

      h2Effects: 'Эффект массажа бамбуковыми вениками',
      effects: [
        'глубокое прогревание тела',
        'улучшение кровообращения и лимфотока',
        'более упругая и эластичная кожа',
        'расслабление скованных мышц',
        'ощущение лёгкости и свежести',
        'отдых и снятие напряжения'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж бамбуковыми вениками подойдёт, если хочется прогреть тело, вы чувствуете скованность или усталость и хотите поддержать тонус кожи. Особенно приятен в холодное время года и для тех, кто любит ритмичный, бодрящий массаж.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'расширенные или варикозные вены, тромбоз',
        'кожные заболевания, повреждения или воспаления в зоне массажа',
        'высокая температура и острые заболевания',
        'склонность к синякам или приём препаратов, разжижающих кровь',
        'беременность'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа бамбуковыми вениками',
      priceName: 'Массаж бамбуковыми вениками',
      priceDesc: 'Прогревающий массаж тела бамбуковыми вениками. Цена окончательная - мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Больно ли это?', a: 'Нет. Похлопывание ритмичное и приятно согревает. Силу я подбираю под ваши ощущения и могу смягчить в любой момент.' },
        { q: 'Останутся ли следы?', a: 'После массажа кожа может ненадолго покраснеть - это признак улучшения кровообращения. В течение нескольких часов всё проходит.' },
        { q: 'Чем он отличается от классического массажа?', a: 'Классический массаж выполняется только руками. Веники добавляют ритмичное похлопывание, которое сильнее прогревает тело и усиливает кровообращение.' },
        { q: 'Как часто повторять массаж?', a: 'Для поддержания тонуса кожи хорошо работает раз в две-три недели. Как разовый отдых он приятен в любое время.' }
      ],

      h2Book: 'Запишитесь на массаж бамбуковыми вениками',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
