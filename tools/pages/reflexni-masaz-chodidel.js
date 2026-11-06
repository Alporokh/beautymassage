/* Reflexní masáž chodidel. Keywords: reflexní masáž chodidel praha,
   reflexologie chodidel, masáž chodidel, reflexní masáž nohou

   Cena 600 Kč / 30 min podle ceníku v content.js. */
module.exports = {
  slug: 'reflexni-masaz-chodidel',
  hero: '28-reflexni-masaz-chodidel-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 600,
  minutes: 30,
  related: ['klasicka-masaz', 'aroma-masaz', 'masaz-zad', 'masaz-hlavy'],

  meta: {
    cs: {
      title: 'Reflexní masáž chodidel Praha - 600 Kč | Massage 4 Beauty',
      desc: 'Reflexní masáž chodidel v Praze 4. Působení na reflexní body a zóny chodidel podporuje regeneraci a celkové uvolnění. 30 minut za 600 Kč, online rezervace.',
      ogTitle: 'Reflexní masáž chodidel Praha | Massage 4 Beauty',
      ogDesc: 'Reflexní masáž chodidel v Praze 4 - regenerace a hluboké uvolnění. 30 minut za 600 Kč.'
    },
    en: {
      title: 'Reflexology Foot Massage Prague | Massage 4 Beauty',
      desc: 'Reflexology foot massage in Prague 4. Working on reflex points and zones of the feet supports regeneration and overall relaxation. 30 minutes, 600 CZK. Book online.',
      ogTitle: 'Reflexology Foot Massage Prague | Massage 4 Beauty',
      ogDesc: 'Reflexology foot massage in Prague 4 - regeneration and deep relaxation. 30 minutes, 600 CZK.'
    },
    ru: {
      title: 'Рефлекторный массаж стоп Прага | Massage 4 Beauty',
      desc: 'Рефлекторный массаж стоп в Праге 4. Воздействие на рефлекторные точки и зоны стоп поддерживает восстановление и общее расслабление. 30 минут, 600 Kč. Запись онлайн.',
      ogTitle: 'Рефлекторный массаж стоп Прага | Massage 4 Beauty',
      ogDesc: 'Рефлекторный массаж стоп в Праге 4 - восстановление и глубокое расслабление. 30 минут, 600 Kč.'
    }
  },

  schema: {
    name: 'Reflexní masáž chodidel',
    alternateName: ['Reflexologie chodidel', 'Masáž chodidel', 'Reflexní masáž nohou'],
    serviceType: 'Reflexní masáž chodidel',
    description: 'Technika působení na biologicky aktivní body a zóny chodidel spojené s vnitřními orgány a soustavami těla. Podporuje přirozenou regeneraci a celkové uvolnění organismu.'
  },

  strings: {
    cs: {
      crumb: 'Reflexní masáž chodidel',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Reflexní masáž chodidel Praha',
      lead: 'Technika působení na biologicky aktivní body a zóny chodidel, které jsou spojené s vnitřními orgány a soustavami těla. Jejich stimulace podporuje přirozenou regeneraci a celkové uvolnění.',
      photoAlt: 'Reflexní masáž chodidel ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Reflexní masáž chodidel - práce s reflexními zónami.',
      factDurationV: '30 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je reflexní masáž chodidel',
      what: [
        'Reflexní masáž chodidel vychází z představy, že na chodidlech jsou zóny spojené s jednotlivými orgány a částmi těla. Cíleným tlakem na tyto body a zóny se podporují přirozené procesy regenerace v organismu.',
        'Pro většinu klientů je to především hluboce uvolňující zážitek. Chodidla nesou celý den naši váhu a jejich masáž přináší pocit lehkosti, zklidnění a odpočinku pro celé tělo.'
      ],

      h2How: 'Jak masáž probíhá',
      steps: [
        { t: 'Pohodlná poloha', d: 'Uložíte se pohodlně na lehátko, nohy podložím a chodidla očistím.' },
        { t: 'Prohřátí', d: 'Jemnými tahy chodidla a kotníky prohřeji a uvolním.' },
        { t: 'Práce se zónami', d: 'Postupně procházím reflexní body a zóny chodidel. Tlak přizpůsobím vaší citlivosti.' },
        { t: 'Zklidnění', d: 'Masáž uzavírám pomalými uvolňujícími hmaty na celých chodidlech.' }
      ],

      h2Effects: 'Účinky reflexní masáže',
      effects: [
        'hluboké uvolnění a zklidnění',
        'podpora přirozené regenerace',
        'lehčí a odpočaté nohy',
        'lepší prokrvení chodidel',
        'zmírnění stresu a únavy',
        'pocit celkové pohody'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Reflexní masáž chodidel se hodí pro každého, kdo celý den stojí nebo chodí, cítí únavu a stres, nebo si chce dopřát krátký, ale hluboce uvolňující odpočinek. Dobře se kombinuje s masáží zad nebo hlavy.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'poranění, záněty nebo plísňové onemocnění chodidel',
        'křečové žíly nebo trombóza dolních končetin',
        'těhotenství',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena reflexní masáže chodidel',
      priceName: 'Reflexní masáž chodidel',
      priceDesc: 'Masáž reflexních bodů a zón chodidel. Cena je konečná - nejsme plátci DPH.',
      priceMin: '30 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Bolí reflexní masáž?', a: 'Některé body mohou být citlivější, ale masáž by bolet neměla. Tlak vždy přizpůsobím vám.' },
        { q: 'Nahradí reflexní masáž léčbu?', a: 'Ne. Jde o relaxační a regenerační péči, která podporuje pohodu. Zdravotní potíže vždy řešte s lékařem.' },
        { q: 'Lechtá to?', a: 'Většinou ne. Pevnější a klidné hmaty lechtání nevyvolávají. Pokud jste hodně citliví, řekněte mi to a přizpůsobím techniku.' },
        { q: 'Můžu ji spojit s jinou masáží?', a: 'Ano. Reflexní masáž chodidel se hodí jako doplněk k masáži zad, klasické nebo aroma masáži. Stačí to uvést při rezervaci.' }
      ],

      h2Book: 'Objednejte se na reflexní masáž chodidel',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Reflexology Foot Massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Reflexology Foot Massage in Prague',
      lead: 'A technique working on biologically active points and zones of the feet linked to the internal organs and body systems. Stimulating them supports natural regeneration and overall relaxation.',
      photoAlt: 'Reflexology foot massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Reflexology foot massage - working with the reflex zones.',
      factDurationV: '30 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What reflexology foot massage is',
      what: [
        'Reflexology foot massage is based on the idea that the feet hold zones connected to individual organs and parts of the body. Targeted pressure on these points and zones supports the body’s natural regeneration processes.',
        'For most clients it is above all a deeply relaxing experience. Our feet carry our weight all day, and massaging them brings a feeling of lightness, calm and rest for the whole body.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'A comfortable position', d: 'You lie comfortably on the table, I support your legs and cleanse your feet.' },
        { t: 'Warming up', d: 'Gentle strokes warm and loosen the feet and ankles.' },
        { t: 'Working the zones', d: 'I work through the reflex points and zones of the feet. I adjust the pressure to your sensitivity.' },
        { t: 'Settling', d: 'I finish with slow, relaxing strokes over the whole foot.' }
      ],

      h2Effects: 'What reflexology massage does',
      effects: [
        'deep relaxation and calm',
        'support for natural regeneration',
        'lighter, rested legs',
        'better circulation in the feet',
        'less stress and fatigue',
        'a sense of overall well-being'
      ],

      h2Who: 'Who it suits',
      who: 'Reflexology foot massage suits anyone who stands or walks all day, feels tired and stressed, or wants a short but deeply relaxing break. It pairs well with a back or head massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'injuries, inflammation or fungal infection of the feet',
        'varicose veins or thrombosis in the legs',
        'pregnancy',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of reflexology foot massage',
      priceName: 'Reflexology Foot Massage',
      priceDesc: 'Massage of the reflex points and zones of the feet. The price is final - we are not VAT payers.',
      priceMin: '30 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does reflexology hurt?', a: 'Some points can be more sensitive, but the massage should not hurt. I always adjust the pressure to you.' },
        { q: 'Does it replace medical treatment?', a: 'No. It is relaxing, restorative care that supports well-being. Always see a doctor about health problems.' },
        { q: 'Does it tickle?', a: 'Usually not. Firm, calm strokes do not tickle. If you are very sensitive, tell me and I will adapt the technique.' },
        { q: 'Can I combine it with another massage?', a: 'Yes. Reflexology foot massage works well alongside a back, classic or aroma massage. Just mention it when booking.' }
      ],

      h2Book: 'Book your reflexology foot massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Рефлекторный массаж стоп',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Рефлекторный массаж стоп в Праге',
      lead: 'Техника воздействия на биологически активные точки и зоны стоп, которые связаны с внутренними органами и системами организма. Их стимуляция поддерживает естественное восстановление и общее расслабление.',
      photoAlt: 'Рефлекторный массаж стоп в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Рефлекторный массаж стоп - работа с рефлекторными зонами.',
      factDurationV: '30 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое рефлекторный массаж стоп',
      what: [
        'Рефлекторный массаж стоп основан на представлении о том, что на стопах есть зоны, связанные с отдельными органами и частями тела. Целенаправленное воздействие на эти точки и зоны поддерживает естественные процессы восстановления в организме.',
        'Для большинства клиентов это прежде всего глубоко расслабляющая процедура. Стопы весь день несут наш вес, и их массаж дарит ощущение лёгкости, спокойствия и отдыха всему телу.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Удобное положение', d: 'Вы удобно располагаетесь на кушетке, я подкладываю валик под ноги и очищаю стопы.' },
        { t: 'Разогрев', d: 'Мягкими движениями разогреваю и расслабляю стопы и лодыжки.' },
        { t: 'Работа с зонами', d: 'Последовательно прорабатываю рефлекторные точки и зоны стоп. Давление подбираю под вашу чувствительность.' },
        { t: 'Успокоение', d: 'Завершаю массаж медленными расслабляющими движениями по всей стопе.' }
      ],

      h2Effects: 'Эффект рефлекторного массажа',
      effects: [
        'глубокое расслабление и спокойствие',
        'поддержка естественного восстановления',
        'лёгкость и отдых для ног',
        'улучшение кровообращения в стопах',
        'меньше стресса и усталости',
        'ощущение общего благополучия'
      ],

      h2Who: 'Кому подходит',
      who: 'Рефлекторный массаж стоп подойдёт всем, кто весь день стоит или ходит, чувствует усталость и стресс или хочет короткий, но глубоко расслабляющий отдых. Хорошо сочетается с массажем спины или головы.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'травмы, воспаления или грибковые заболевания стоп',
        'варикоз или тромбоз нижних конечностей',
        'беременность',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена рефлекторного массажа стоп',
      priceName: 'Рефлекторный массаж стоп',
      priceDesc: 'Массаж рефлекторных точек и зон стоп. Цена окончательная - мы не плательщики НДС.',
      priceMin: '30 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Больно ли это?', a: 'Некоторые точки могут быть чувствительнее, но больно быть не должно. Давление я всегда подбираю под вас.' },
        { q: 'Заменяет ли массаж лечение?', a: 'Нет. Это расслабляющий и восстанавливающий уход, который поддерживает самочувствие. С проблемами здоровья всегда обращайтесь к врачу.' },
        { q: 'Не будет ли щекотно?', a: 'Обычно нет. Уверенные спокойные движения не вызывают щекотки. Если вы очень чувствительны, скажите мне, и я подстрою технику.' },
        { q: 'Можно ли совместить с другим массажем?', a: 'Да. Рефлекторный массаж стоп хорошо дополняет массаж спины, классический или арома-массаж. Просто укажите это при записи.' }
      ],

      h2Book: 'Запишитесь на рефлекторный массаж стоп',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
