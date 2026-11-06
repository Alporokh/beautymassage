/* Masáž hlavy. Keywords: masáž hlavy praha, relaxační masáž hlavy,
   masáž hlavy a šíje, masáž pokožky hlavy

   Cena 600 Kč / 30 min podle ceníku v content.js. Ceník slibuje "stimuluje
   růst vlasů" a "předchází bolestem hlavy"; stránka to formuluje opatrněji
   (prokrvení pokožky, uvolnění napětí), aby nešlo o zdravotní tvrzení. */
module.exports = {
  slug: 'masaz-hlavy',
  hero: '18-masaz-hlavy-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'face',
  price: 600,
  minutes: 30,
  related: ['masaz-krku-dekoltu-a-rukou', 'masaz-obliceje', 'masaz-zad-a-sije', 'relaxacni-masaz'],

  meta: {
    cs: {
      title: 'Masáž hlavy Praha - 600 Kč | Massage 4 Beauty',
      desc: 'Relaxační masáž hlavy v Praze 4. Uvolní napětí, zklidní nervový systém a prokrví pokožku hlavy. 30 minut za 600 Kč, online rezervace.',
      ogTitle: 'Masáž hlavy Praha | Massage 4 Beauty',
      ogDesc: 'Relaxační masáž hlavy v Praze 4 - uvolnění napětí a stresu. 30 minut za 600 Kč.'
    },
    en: {
      title: 'Head Massage Prague | Massage 4 Beauty',
      desc: 'Relaxing head massage in Prague 4. Releases tension, calms the nervous system and improves scalp circulation. 30 minutes, 600 CZK. Book online.',
      ogTitle: 'Head Massage Prague | Massage 4 Beauty',
      ogDesc: 'Relaxing head massage in Prague 4 - releases tension and stress. 30 minutes, 600 CZK.'
    },
    ru: {
      title: 'Массаж головы Прага | Massage 4 Beauty',
      desc: 'Расслабляющий массаж головы в Праге 4. Снимает напряжение, успокаивает нервную систему и улучшает кровообращение кожи головы. 30 минут, 600 Kč.',
      ogTitle: 'Массаж головы Прага | Massage 4 Beauty',
      ogDesc: 'Расслабляющий массаж головы в Праге 4 - снимает напряжение и стресс. 30 минут, 600 Kč.'
    }
  },

  schema: {
    name: 'Masáž hlavy',
    alternateName: ['Relaxační masáž hlavy', 'Masáž pokožky hlavy'],
    serviceType: 'Masáž hlavy',
    description: 'Relaxační masáž hlavy a pokožky hlavy. Uvolňuje napětí, zklidňuje nervový systém a podporuje prokrvení pokožky hlavy.'
  },

  strings: {
    cs: {
      crumb: 'Masáž hlavy',
      eyebrow: 'Masáž · Praha 4',
      h1: 'Masáž hlavy Praha',
      lead: 'Třicet minut, během kterých se hlava konečně vypne. Masáž pokožky hlavy, spánků a šíje uvolní napětí, zklidní nervový systém a pomůže zbavit se stresu.',
      photoAlt: 'Masáž hlavy ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Masáž hlavy - uvolnění pokožky hlavy, spánků a šíje.',
      factDurationV: '30 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je masáž hlavy',
      what: [
        'Masáž hlavy pracuje s pokožkou hlavy, spánky, čelem a šíjí - tedy s místy, kde se během dne nejvíc ukládá napětí ze soustředění, práce u počítače a stresu.',
        'Kombinuje krouživé a hnětací hmaty na pokožce hlavy s jemným tlakem na spánky a uvolněním šíje. Pokožka hlavy se prokrví, svaly povolí a s nimi i hlava. Většina klientů odchází s pocitem lehkosti a jasné mysli.'
      ],

      h2How: 'Jak masáž hlavy probíhá',
      steps: [
        { t: 'Uvolnění šíje', d: 'Začínám na šíji a ramenou, kde se napětí drží nejvíc.' },
        { t: 'Pokožka hlavy', d: 'Krouživé a hnětací hmaty po celé pokožce hlavy, které ji prokrví a uvolní.' },
        { t: 'Spánky a čelo', d: 'Jemný tlak a tahy na spáncích a čele, kde se drží napětí z únavy a soustředění.' },
        { t: 'Zklidnění', d: 'Pomalé závěrečné tahy, po kterých se nikam nespěchá.' }
      ],

      h2Effects: 'Účinky masáže hlavy',
      effects: [
        'hluboké uvolnění a zklidnění nervového systému',
        'méně stresu a lepší spánek',
        'uvolněná šíje, spánky a čelo',
        'prokrvená pokožka hlavy',
        'úleva při napětí z práce u počítače',
        'lehká hlava a jasnější mysl'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž hlavy je pro každého, kdo tráví dny u počítače, nosí napětí v šíji a spáncích nebo se večer nedokáže vypnout. Hodí se i jako krátká pauza uprostřed náročného týdne nebo jako doplněk k masáži obličeje.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'záněty, rány nebo kožní onemocnění na pokožce hlavy',
        'čerstvé úrazy hlavy a krku',
        'neléčený vysoký krevní tlak',
        'horečka a akutní onemocnění',
        'silná migréna v akutní fázi'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže hlavy',
      priceName: 'Masáž hlavy',
      priceDesc: 'Relaxační masáž hlavy, spánků a šíje. Cena je konečná - nejsme plátci DPH.',
      priceMin: '30 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Pomůže masáž hlavy při bolesti hlavy?', a: 'Při bolesti hlavy z napětí a stresu mnoha klientům uleví, protože uvolní šíji, spánky a čelo. Nenahrazuje ale lékaře - pokud vás hlava bolí často, nechte si to vyšetřit.' },
        { q: 'Podporuje masáž hlavy růst vlasů?', a: 'Masáž prokrví pokožku hlavy, což je pro vlasy příznivé prostředí. Zázrak na vypadávání vlasů ale neslibuji - u výraznějších potíží doporučuji dermatologa.' },
        { q: 'Mohu jít po masáži rovnou do práce?', a: 'Ano. Vlasy mohou být po masáži trochu rozcuchané, ale nic vám nebrání vrátit se hned k běžnému dni.' },
        { q: 'Dá se masáž hlavy spojit s jinou masáží?', a: 'Ano, a je to oblíbená kombinace - například s masáží obličeje nebo s masáží krku, dekoltu a rukou. Při rezervaci napište, co byste chtěli spojit.' }
      ],

      h2Book: 'Objednejte se na masáž hlavy',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Head massage',
      eyebrow: 'Massage · Prague 4',
      h1: 'Head Massage in Prague',
      lead: 'Thirty minutes in which your head finally switches off. Massage of the scalp, temples and neck releases tension, calms the nervous system and helps you let go of stress.',
      photoAlt: 'Head massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Head massage - releasing the scalp, temples and neck.',
      factDurationV: '30 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What head massage is',
      what: [
        'Head massage works on the scalp, temples, forehead and neck - the places where tension from concentration, screen work and stress builds up most during the day.',
        'It combines circular and kneading movements on the scalp with gentle pressure on the temples and release of the neck. The scalp warms up, the muscles let go and the mind follows. Most clients leave feeling light and clear-headed.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Releasing the neck', d: 'I start with the neck and shoulders, where tension holds the most.' },
        { t: 'The scalp', d: 'Circular and kneading movements over the whole scalp to warm and loosen it.' },
        { t: 'Temples and forehead', d: 'Gentle pressure and strokes on the temples and forehead, where tiredness and focus sit.' },
        { t: 'Settling', d: 'Slow closing strokes, with no rush to get up.' }
      ],

      h2Effects: 'What head massage does',
      effects: [
        'deep relaxation and a calmer nervous system',
        'less stress and better sleep',
        'a looser neck, temples and forehead',
        'improved scalp circulation',
        'relief from tension built up at the computer',
        'a light head and a clearer mind'
      ],

      h2Who: 'Who it suits',
      who: 'Head massage is for anyone who spends their days at a computer, carries tension in the neck and temples or cannot switch off in the evening. It also works as a short break in the middle of a demanding week or as an add-on to a facial massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'inflammation, wounds or skin conditions on the scalp',
        'recent head or neck injuries',
        'untreated high blood pressure',
        'fever and acute illness',
        'a severe migraine in its acute phase'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of head massage',
      priceName: 'Head massage',
      priceDesc: 'A relaxing massage of the head, temples and neck. The price is final - we are not VAT payers.',
      priceMin: '30 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does head massage help with headaches?', a: 'With tension and stress headaches many clients find relief, because the massage loosens the neck, temples and forehead. It does not replace a doctor though - if you have headaches often, have them checked.' },
        { q: 'Does head massage help hair grow?', a: 'The massage improves scalp circulation, which is a good environment for hair. I do not promise miracles for hair loss - for real concerns I recommend a dermatologist.' },
        { q: 'Can I go straight back to work afterwards?', a: 'Yes. Your hair may be a little tousled, but nothing stops you going straight back to your day.' },
        { q: 'Can I combine it with another massage?', a: 'Yes, it is a popular combination - for example with a facial massage or the neck, décolleté and hands massage. Just mention what you would like to combine when you book.' }
      ],

      h2Book: 'Book your head massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Массаж головы',
      eyebrow: 'Массаж · Прага 4',
      h1: 'Массаж головы в Праге',
      lead: 'Тридцать минут, когда голова наконец отключается. Массаж кожи головы, висков и шеи снимает напряжение, успокаивает нервную систему и помогает избавиться от стресса.',
      photoAlt: 'Массаж головы в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Массаж головы - расслабление кожи головы, висков и шеи.',
      factDurationV: '30 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое массаж головы',
      what: [
        'Массаж головы работает с кожей головы, висками, лбом и шеей - там, где за день больше всего накапливается напряжение от концентрации, работы за компьютером и стресса.',
        'Он сочетает круговые и разминающие движения по коже головы с мягким давлением на виски и расслаблением шеи. Кожа головы согревается, мышцы отпускают, а вслед за ними и голова. Большинство клиентов уходят с ощущением лёгкости и ясности.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Расслабление шеи', d: 'Начинаю с шеи и плеч, где напряжение держится сильнее всего.' },
        { t: 'Кожа головы', d: 'Круговые и разминающие движения по всей коже головы, которые её согревают и расслабляют.' },
        { t: 'Виски и лоб', d: 'Мягкое давление и движения на висках и лбу, где копится усталость.' },
        { t: 'Успокоение', d: 'Медленные завершающие движения - вставать никуда не нужно спешить.' }
      ],

      h2Effects: 'Эффект массажа головы',
      effects: [
        'глубокое расслабление и спокойствие нервной системы',
        'меньше стресса и лучше сон',
        'расслабленные шея, виски и лоб',
        'улучшение кровообращения кожи головы',
        'облегчение при напряжении от работы за компьютером',
        'лёгкая голова и ясные мысли'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж головы - для всех, кто проводит дни за компьютером, носит напряжение в шее и висках или не может расслабиться вечером. Подходит и как короткая пауза посреди напряжённой недели, и как дополнение к массажу лица.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'воспаления, раны или кожные заболевания на коже головы',
        'недавние травмы головы и шеи',
        'нелеченное высокое давление',
        'высокая температура и острые заболевания',
        'сильная мигрень в острой фазе'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа головы',
      priceName: 'Массаж головы',
      priceDesc: 'Расслабляющий массаж головы, висков и шеи. Цена окончательная - мы не плательщики НДС.',
      priceMin: '30 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Помогает ли массаж головы при головной боли?', a: 'При головной боли от напряжения и стресса многим клиентам становится легче, потому что массаж расслабляет шею, виски и лоб. Но он не заменяет врача - если голова болит часто, обратитесь к специалисту.' },
        { q: 'Стимулирует ли массаж рост волос?', a: 'Массаж улучшает кровообращение кожи головы, что создаёт для волос благоприятную среду. Чудес при выпадении волос я не обещаю - при серьёзных проблемах лучше обратиться к дерматологу.' },
        { q: 'Можно ли после массажа сразу пойти на работу?', a: 'Да. Волосы могут быть немного взъерошены, но вы можете сразу вернуться к своим делам.' },
        { q: 'Можно ли совместить его с другим массажем?', a: 'Да, это популярное сочетание - например, с массажем лица или массажем шеи, декольте и рук. Просто укажите при записи, что хотите совместить.' }
      ],

      h2Book: 'Запишитесь на массаж головы',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
