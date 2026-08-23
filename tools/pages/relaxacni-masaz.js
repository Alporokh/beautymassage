/* Relaxační / antistresová masáž. Keywords: relaxační masáž (praha),
   relaxační masáž hlavy, antistresová masáž praha */
module.exports = {
  slug: 'relaxacni-masaz',
  hero: '10-relaxacni-masaz-hero.webp',
  kind: 'service',
  group: 'body',
  price: 1300,
  minutes: 60,
  related: ['masaz-celeho-tela', 'masaz-zad-a-sije', 'lymfaticka-masaz', 'masaz-obliceje'],

  meta: {
    cs: {
      title: 'Relaxační a antistresová masáž Praha | Massage 4 Beauty',
      desc: 'Relaxační masáž s aromaterapií v Praze 4. Antistresová masáž zad, těla a hlavy — 60 minut za 1 300 Kč. Účinky, průběh a online rezervace.',
      ogTitle: 'Relaxační a antistresová masáž Praha | Massage 4 Beauty',
      ogDesc: 'Aroma relaxační masáž v Praze 4 — hluboké zklidnění včetně masáže hlavy. 60 minut za 1 300 Kč.'
    },
    en: {
      title: "Relaxing Massage Prague — spa & aroma | Massage 4 Beauty",
      desc: "Relaxing aroma massage in Prague 4. Slow full-body work finished with a head massage — 60 minutes, 1,300 CZK. Book online.",
      ogTitle: "Relaxing Massage Prague — spa & aroma | Massage 4 Beauty",
      ogDesc: "Relaxing aroma massage in Prague 4. Slow full-body work finished with a head massage — 60 minutes, 1,300 CZK. Book online."
    },
    ru: {
      title: "Расслабляющий массаж Прага | Massage 4 Beauty",
      desc: "Расслабляющий аромамассаж в Праге 4. Медленная работа по всему телу и массаж головы в финале — 60 минут, 1 300 Kč.",
      ogTitle: "Расслабляющий массаж Прага | Massage 4 Beauty",
      ogDesc: "Расслабляющий аромамассаж в Праге 4. Медленная работа по всему телу и массаж головы в финале — 60 минут, 1 300 Kč."
    }
  },

  schema: {
    name: 'Relaxační masáž',
    alternateName: ['Antistresová masáž', 'Aroma masáž', 'Relaxační masáž hlavy'],
    serviceType: 'Relaxační masáž',
    description: 'Relaxační a antistresová masáž s aromaterapií. Pomalé plynulé tahy celého těla zakončené masáží hlavy — zklidnění nervového systému a úleva od stresu.'
  },

  strings: {
    cs: {
      crumb: 'Relaxační masáž',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Relaxační masáž Praha',
      lead: 'Hodina, ve které nemusíte nic řešit. Pomalé plynulé tahy, teplý aromatický olej a závěrečná masáž hlavy, po které většina klientů usne.',
      photoAlt: 'Relaxační aroma masáž ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Relaxační masáž s aromaterapií — pomalé plynulé tahy.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je relaxační masáž',
      what: [
        'Relaxační masáž — často nazývaná antistresová — necílí na konkrétní bolavé místo. Jejím úkolem je přepnout tělo z režimu neustálé pohotovosti do klidu. Proto se pracuje pomalu, plynule a v předvídatelném rytmu: mozek přestane hlídat, co přijde, a nervový systém se konečně uvolní.',
        'Používám teplý aromatický olej, jehož vůni si vyberete na začátku. Masáž vede přes celá záda, nohy, paže a šíji a končí relaxační masáží hlavy. Právě ta bývá pro klienty nejsilnějším zážitkem — uvolní napětí, o kterém většinou ani nevědí.'
      ],

      h2How: 'Jak relaxační masáž probíhá',
      steps: [
        { t: 'Výběr vůně a zklidnění', d: 'Vyberete si aromatický olej. Ztlumím světla a pustím tichou hudbu.' },
        { t: 'Záda a šíje', d: 'Dlouhé plynulé tahy po celých zádech. Tady se dýchání poprvé zpomalí.' },
        { t: 'Nohy a paže', d: 'Pokračuji na končetiny, stále ve stejném pomalém rytmu bez ostrých přechodů.' },
        { t: 'Relaxační masáž hlavy', d: 'Závěr patří hlavě, spánkům a šíji. Většina klientů u ní usne.' }
      ],

      h2Effects: 'Účinky relaxační masáže',
      effects: [
        'hluboké zklidnění nervového systému',
        'úleva od dlouhodobého stresu a napětí',
        'výrazně lepší spánek už v noci po masáži',
        'uvolnění ztuhlých ramen a šíje',
        'zpomalení tepu a dechu, snížení vnitřního neklidu',
        'celkové prokrvení a pocit lehkosti v těle'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Relaxační masáž je ideální, pokud jste dlouhodobě ve stresu, špatně spíte, cítíte se vyčerpaní nebo prostě potřebujete hodinu úplného klidu. Antistresová masáž je také skvělý dárek pro někoho, kdo si na sebe nikdy neudělá čas.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'horečka, akutní zánět nebo infekční onemocnění',
        'trombóza a záněty žil',
        'čerstvé poranění nebo otevřené rány',
        'alergie na použité aromatické oleje',
        'onkologické onemocnění v aktivní léčbě'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena relaxační masáže',
      priceName: 'Relaxační aroma masáž',
      priceDesc: 'Celotělová relaxační masáž s aromaterapií a masáží hlavy. Cena je konečná — nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Jaký je rozdíl mezi relaxační a klasickou masáží?', a: 'Klasická masáž pracuje hlouběji do svalu a řeší konkrétní ztuhlá místa. Relaxační je pomalejší a jemnější a cílí na nervový systém, ne na sval.' },
        { q: 'Můžu si vybrat vůni oleje?', a: 'Ano. Na začátku vám dám vybrat z několika aromatických olejů — od uklidňující levandule po povzbuzující citrusy.' },
        { q: 'Je součástí i masáž hlavy?', a: 'Ano, relaxační masáž hlavy je součástí každé hodinové relaxační masáže a tvoří její závěr.' },
        { q: 'Jak často chodit na relaxační masáž?', a: 'Při dlouhodobém stresu je ideální jednou za dva až čtyři týdny. Pravidelnost tady funguje mnohem lépe než jedna dlouhá masáž jednou za rok.' },
        { q: 'Můžu po masáži řídit?', a: 'Ano, ale dopřejte si pár minut v klidu. Po hluboké relaxaci bývá reakční doba na chvíli pomalejší.' }
      ],

      h2Book: 'Objednejte se na relaxační masáž',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Relaxation massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Relaxing Massage in Prague',
      lead: 'An hour in which nothing needs solving. Slow flowing strokes, warm aromatic oil and a closing head massage that sends most clients to sleep.',
      photoAlt: 'Relaxation aroma massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Relaxation massage with aromatherapy — slow flowing strokes.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What relaxation massage is',
      what: [
        'Relaxation massage — often called anti-stress massage — does not target a particular painful spot. Its job is to switch the body out of constant alert and into calm. That is why the work is slow, flowing and predictable in rhythm: the brain stops bracing for what comes next, and the nervous system finally lets go.',
        'I use a warm aromatic oil whose scent you choose at the start. The massage travels across the whole back, legs, arms and neck and ends with a relaxing head massage. That last part is usually the strongest experience for clients — it releases tension most people did not know they were holding.'
      ],

      h2How: 'How the massage works',
      steps: [
        { t: 'Choosing a scent and settling', d: 'You pick an aromatic oil. I dim the lights and put on quiet music.' },
        { t: 'Back and neck', d: 'Long flowing strokes across the whole back. This is where the breathing first slows.' },
        { t: 'Legs and arms', d: 'I continue to the limbs, still in the same slow rhythm with no abrupt transitions.' },
        { t: 'The head massage', d: 'The close belongs to the head, temples and nape. Most clients fall asleep during it.' }
      ],

      h2Effects: 'What relaxation massage does',
      effects: [
        'deeply calms the nervous system',
        'relieves long-term stress and tension',
        'markedly better sleep the very night after',
        'releases stiff shoulders and neck',
        'slows the pulse and breath, quiets inner restlessness',
        'overall circulation and a feeling of lightness'
      ],

      h2Who: 'Who it suits',
      who: 'Relaxation massage is ideal if you have been under stress for a long time, sleep badly, feel exhausted, or simply need an hour of complete quiet. An anti-stress massage also makes a wonderful gift for someone who never makes time for themselves.',
      h3Contra: 'When we do not massage',
      contra: [
        'fever, acute inflammation or infectious illness',
        'thrombosis and vein inflammation',
        'fresh injury or open wounds',
        'allergy to the aromatic oils used',
        'cancer under active treatment'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of relaxation massage',
      priceName: 'Relaxation aroma massage',
      priceDesc: 'Full-body relaxation massage with aromatherapy and head massage. The price is final — we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'What is the difference between relaxation and classic massage?', a: 'A classic massage works deeper into the muscle and addresses specific stiff spots. Relaxation massage is slower and gentler and targets the nervous system rather than the muscle.' },
        { q: 'Can I choose the oil scent?', a: 'Yes. At the start I offer you a choice of several aromatic oils — from calming lavender to uplifting citrus.' },
        { q: 'Is a head massage included?', a: 'Yes, a relaxing head massage is part of every hour-long relaxation massage and forms its closing section.' },
        { q: 'How often should I come?', a: 'With long-term stress, once every two to four weeks is ideal. Regularity works far better here than one long massage once a year.' },
        { q: 'Can I drive afterwards?', a: 'Yes, but give yourself a few quiet minutes first. After deep relaxation your reaction time can be slower for a while.' }
      ],

      h2Book: 'Book your relaxation massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Релаксирующий массаж',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Расслабляющий массаж в Праге',
      lead: 'Час, в котором ничего не нужно решать. Медленные плавные движения, тёплое ароматическое масло и завершающий массаж головы, на котором большинство клиентов засыпают.',
      photoAlt: 'Релаксирующий аромамассаж в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Релаксирующий массаж с ароматерапией — медленные плавные движения.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое релаксирующий массаж',
      what: [
        'Релаксирующий массаж — который часто называют антистрессовым — не нацелен на конкретное больное место. Его задача переключить тело из режима постоянной готовности в состояние покоя. Поэтому работа идёт медленно, плавно и в предсказуемом ритме: мозг перестаёт следить за тем, что будет дальше, и нервная система наконец расслабляется.',
        'Я использую тёплое ароматическое масло, аромат которого вы выбираете в начале. Массаж проходит по всей спине, ногам, рукам и шее и завершается расслабляющим массажем головы. Именно он обычно оказывается самым сильным впечатлением — снимает напряжение, о котором большинство даже не подозревает.'
      ],

      h2How: 'Как проходит массаж',
      steps: [
        { t: 'Выбор аромата и настройка', d: 'Вы выбираете ароматическое масло. Я приглушаю свет и включаю тихую музыку.' },
        { t: 'Спина и шея', d: 'Длинные плавные движения по всей спине. Здесь дыхание впервые замедляется.' },
        { t: 'Ноги и руки', d: 'Продолжаю на конечностях, в том же медленном ритме без резких переходов.' },
        { t: 'Массаж головы', d: 'Завершение — голова, виски и шея. Большинство клиентов на нём засыпают.' }
      ],

      h2Effects: 'Эффект релаксирующего массажа',
      effects: [
        'глубокое успокоение нервной системы',
        'облегчение при длительном стрессе и напряжении',
        'заметно лучший сон уже в ночь после массажа',
        'расслабление скованных плеч и шеи',
        'замедление пульса и дыхания, снижение внутреннего беспокойства',
        'общее улучшение кровотока и ощущение лёгкости'
      ],

      h2Who: 'Кому подходит',
      who: 'Релаксирующий массаж идеален, если вы давно живёте в стрессе, плохо спите, чувствуете себя истощёнными или просто нуждаетесь в часе полного покоя. Антистрессовый массаж — ещё и прекрасный подарок тому, кто никогда не находит времени на себя.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'высокая температура, острое воспаление или инфекция',
        'тромбоз и воспаление вен',
        'свежая травма или открытые раны',
        'аллергия на используемые ароматические масла',
        'онкологическое заболевание в активном лечении'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена релаксирующего массажа',
      priceName: 'Релаксирующий аромамассаж',
      priceDesc: 'Массаж всего тела с ароматерапией и массажем головы. Цена окончательная — мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Чем релаксирующий массаж отличается от классического?', a: 'Классический массаж работает глубже в мышце и решает вопрос конкретных скованных участков. Релаксирующий медленнее и мягче и нацелен на нервную систему, а не на мышцу.' },
        { q: 'Можно ли выбрать аромат масла?', a: 'Да. В начале я предлагаю выбрать из нескольких ароматических масел — от успокаивающей лаванды до бодрящих цитрусов.' },
        { q: 'Входит ли массаж головы?', a: 'Да, расслабляющий массаж головы входит в каждый часовой релаксирующий массаж и завершает его.' },
        { q: 'Как часто ходить на релаксирующий массаж?', a: 'При длительном стрессе оптимально раз в две-четыре недели. Регулярность здесь работает намного лучше, чем один длинный массаж раз в год.' },
        { q: 'Можно ли после массажа за руль?', a: 'Да, но дайте себе несколько спокойных минут. После глубокого расслабления реакция какое-то время может быть медленнее.' }
      ],

      h2Book: 'Запишитесь на релаксирующий массаж',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
