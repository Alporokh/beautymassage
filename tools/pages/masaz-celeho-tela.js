/* Masáž celého těla (klasická). Keywords: masáž celého těla, masáž celého těla cena,
   klasická masáž, masáž praha, hloubková masáž praha */
module.exports = {
  slug: 'masaz-celeho-tela',
  hero: '14-masaz-celeho-tela-photo.webp',
  heroW: 1024,
  heroH: 576,
  kind: 'service',
  group: 'body',
  price: 1300,
  minutes: 60,
  related: ['masaz-zad-a-sije', 'relaxacni-masaz', 'lymfaticka-masaz', 'darkovy-poukaz'],

  meta: {
    cs: {
      title: 'Masáž celého těla Praha — cena 1 300 Kč | Massage 4 Beauty',
      desc: 'Klasická masáž celého těla v Praze 4. Záda, nohy, paže i šíje během 60 minut za 1 300 Kč. Co masáž obsahuje, jak probíhá a online rezervace.',
      ogTitle: 'Masáž celého těla Praha | Massage 4 Beauty',
      ogDesc: 'Klasická masáž celého těla v Praze 4 — 60 minut za 1 300 Kč.'
    },
    en: {
      title: "Body Massage Prague — full body, deep tissue | Massage 4 Beauty",
      desc: "Full body massage in Prague 4. Back, legs, arms and neck within the hour — 1,300 CZK. Deep tissue pressure adjusted to you.",
      ogTitle: "Body Massage Prague — full body, deep tissue | Massage 4 Beauty",
      ogDesc: "Full body massage in Prague 4. Back, legs, arms and neck within the hour — 1,300 CZK. Deep tissue pressure adjusted to you."
    },
    ru: {
      title: "Массаж тела Прага — массаж всего тела | Massage 4 Beauty",
      desc: "Массаж всего тела в Праге 4. Спина, ноги, руки и шея за один час — 1 300 Kč. Давление подбирается под вас. Запись онлайн.",
      ogTitle: "Массаж тела Прага — массаж всего тела | Massage 4 Beauty",
      ogDesc: "Массаж всего тела в Праге 4. Спина, ноги, руки и шея за один час — 1 300 Kč. Давление подбирается под вас. Запись онлайн."
    }
  },

  schema: {
    name: 'Masáž celého těla',
    alternateName: ['Klasická masáž', 'Celotělová masáž'],
    serviceType: 'Masáž celého těla',
    description: 'Klasická masáž celého těla — zad, nohou, paží a šíje. Uvolnění svalového napětí, prokrvení a celková regenerace.'
  },

  strings: {
    cs: {
      crumb: 'Masáž celého těla',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Masáž celého těla Praha',
      lead: 'Klasika, na kterou se nedá zapomenout. Hodina, během které projdu záda, nohy, paže i šíji a nezůstane jediné zapomenuté místo.',
      photoAlt: 'Klasická masáž celého těla ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Klasická masáž celého těla — hodina kompletní regenerace.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je masáž celého těla',
      what: [
        'Masáž celého těla je klasická technika, která během jedné hodiny projde všechny hlavní svalové skupiny — záda, šíji, nohy i paže. Na rozdíl od cílených masáží neřeší jedno konkrétní bolavé místo, ale vrací do rovnováhy celé tělo najednou.',
        'Používám střední až hlubší tlak, který se přizpůsobuje tomu, co pod rukama najdu. Někde stačí prohřát a prokrvit, jinde je potřeba se zdržet déle. Právě proto se u masáže celého těla vyplatí říct na začátku, co vás nejvíc trápí.'
      ],

      h2How: 'Jak masáž celého těla probíhá',
      steps: [
        { t: 'Krátká konzultace', d: 'Řekneme si, co vás trápí a jestli chcete někde přidat, nebo naopak vynechat.' },
        { t: 'Záda a šíje', d: 'Začínám u zad, kde bývá napětí největší. Zabere zhruba polovinu času.' },
        { t: 'Nohy a hýždě', d: 'Pokračuji na zadní i přední stranu nohou. Důležité hlavně u sportovců a při stání.' },
        { t: 'Paže a závěr', d: 'Končím pažemi a uklidňujícími tahy po celém těle.' }
      ],

      h2Effects: 'Účinky masáže celého těla',
      effects: [
        'uvolnění svalového napětí v celém těle',
        'lepší prokrvení a rychlejší regenerace',
        'úleva od bolesti zad, ramen a nohou',
        'zvýšená pohyblivost kloubů a lepší držení těla',
        'odplavení únavy po sportu i po dlouhém dni',
        'zklidnění a výrazně lepší spánek'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž celého těla je ideální, pokud vás bolí víc míst najednou, jste po náročném období nebo si chcete jednoduše dopřát kompletní regeneraci. Vyhledávají ji sportovci, lidé se sedavým zaměstnáním i všichni, kdo dlouho stojí.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'horečka, akutní zánět nebo infekční onemocnění',
        'trombóza a záněty žil',
        'čerstvé poranění, zlomeniny nebo otevřené rány',
        'akutní výhřez ploténky',
        'onkologické onemocnění v aktivní léčbě'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže celého těla',
      priceName: 'Klasická masáž celého těla',
      priceDesc: 'Záda, šíje, nohy a paže během jedné hodiny. Cena je konečná — nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kolik stojí masáž celého těla?', a: 'Klasická masáž celého těla stojí 1 300 Kč za 60 minut. Kratší cílená masáž zad a šíje vyjde na 700 Kč za 30 minut.' },
        { q: 'Co masáž celého těla obsahuje?', a: 'Během hodiny projdu záda, šíji, zadní i přední stranu nohou a paže. Obličej ani břicho součástí nejsou — na ty máme samostatná ošetření.' },
        { q: 'Stihne se za hodinu opravdu celé tělo?', a: 'Ano, ale s rozmyslem. Zhruba polovina času patří zádům a šíji, zbytek nohám a pažím. Pokud chcete některou oblast propracovat víc, řekněte to na začátku.' },
        { q: 'Jak často chodit na masáž?', a: 'Pro udržení kondice svalů stačí jednou za tři až čtyři týdny. Při bolestech nebo intenzivním sportu klidně jednou týdně.' },
        { q: 'Mám před masáží něco jíst?', a: 'Nechoďte úplně nalačno ani bezprostředně po velkém jídle. Ideální je lehké jídlo zhruba hodinu a půl předem.' }
      ],

      h2Book: 'Objednejte se na masáž celého těla',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Full-body massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Body Massage in Prague — Full Body',
      lead: 'The classic you cannot go wrong with. An hour in which I work through the back, legs, arms and neck, and not one spot is forgotten.',
      photoAlt: 'Classic full-body massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Classic full-body massage — an hour of complete recovery.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What full-body massage is',
      what: [
        'Full-body massage is a classic technique that works through every major muscle group within a single hour — back, neck, legs and arms. Unlike targeted massages it does not address one particular painful spot; it brings the whole body back into balance at once.',
        'I use medium to deeper pressure, adjusted to whatever I find under my hands. Some places only need warming and circulation, others need me to stay longer. That is exactly why it pays to say at the start what is troubling you most.'
      ],

      h2How: 'How the massage works',
      steps: [
        { t: 'A short consultation', d: 'We agree what is troubling you and whether to add somewhere or skip somewhere.' },
        { t: 'Back and neck', d: 'I start at the back, where tension is usually greatest. It takes roughly half the time.' },
        { t: 'Legs and glutes', d: 'I continue to the back and front of the legs. Important for athletes and for standing work.' },
        { t: 'Arms and closing', d: 'I finish with the arms and calming strokes across the whole body.' }
      ],

      h2Effects: 'What full-body massage does',
      effects: [
        'releases muscular tension throughout the body',
        'better circulation and faster recovery',
        'relieves pain in the back, shoulders and legs',
        'greater joint mobility and better posture',
        'washes away fatigue after sport or a long day',
        'calms you and markedly improves sleep'
      ],

      h2Who: 'Who it suits',
      who: 'Full-body massage is ideal if several places hurt at once, you are coming out of a demanding period, or you simply want complete recovery. It is sought out by athletes, people in desk jobs and anyone who spends long hours standing.',
      h3Contra: 'When we do not massage',
      contra: [
        'fever, acute inflammation or infectious illness',
        'thrombosis and vein inflammation',
        'fresh injury, fractures or open wounds',
        'acute disc herniation',
        'cancer under active treatment'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of full-body massage',
      priceName: 'Classic full-body massage',
      priceDesc: 'Back, neck, legs and arms within one hour. The price is final — we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How much does a full-body massage cost?', a: 'A classic full-body massage is 1,300 CZK for 60 minutes. A shorter targeted back and neck massage is 700 CZK for 30 minutes.' },
        { q: 'What does a full-body massage include?', a: 'Within the hour I work the back, neck, the back and front of the legs, and the arms. The face and abdomen are not included — we have separate treatments for those.' },
        { q: 'Is an hour really enough for the whole body?', a: 'Yes, with good judgement. Roughly half the time goes to the back and neck, the rest to legs and arms. If you want one area worked more, say so at the start.' },
        { q: 'How often should I come?', a: 'To keep the muscles in good shape, once every three to four weeks is enough. With pain or intense training, weekly is fine.' },
        { q: 'Should I eat before a massage?', a: 'Do not come completely on an empty stomach, nor straight after a large meal. A light meal about an hour and a half beforehand is ideal.' }
      ],

      h2Book: 'Book your full-body massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Массаж всего тела',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Массаж всего тела в Праге',
      lead: 'Классика, с которой невозможно ошибиться. Час, за который я прорабатываю спину, ноги, руки и шею, и ни одно место не остаётся забытым.',
      photoAlt: 'Классический массаж всего тела в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Классический массаж всего тела — час полного восстановления.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое массаж всего тела',
      what: [
        'Массаж всего тела — это классическая техника, которая за один час прорабатывает все основные группы мышц: спину, шею, ноги и руки. В отличие от точечных массажей он не решает одну конкретную проблему, а возвращает в равновесие всё тело сразу.',
        'Я использую среднее и более глубокое давление, подстраивая его под то, что нахожу под руками. Где-то достаточно разогреть и улучшить кровоток, а где-то нужно задержаться дольше. Именно поэтому в начале стоит сказать, что беспокоит вас больше всего.'
      ],

      h2How: 'Как проходит массаж',
      steps: [
        { t: 'Короткая консультация', d: 'Обсудим, что вас беспокоит и где стоит добавить или, наоборот, пропустить.' },
        { t: 'Спина и шея', d: 'Начинаю со спины, где напряжение обычно наибольшее. Занимает примерно половину времени.' },
        { t: 'Ноги и ягодицы', d: 'Продолжаю задней и передней поверхностью ног. Особенно важно для спортсменов и стоячей работы.' },
        { t: 'Руки и завершение', d: 'Заканчиваю руками и успокаивающими движениями по всему телу.' }
      ],

      h2Effects: 'Эффект массажа всего тела',
      effects: [
        'снятие мышечного напряжения во всём теле',
        'улучшение кровотока и более быстрое восстановление',
        'облегчение боли в спине, плечах и ногах',
        'повышение подвижности суставов и лучшая осанка',
        'снятие усталости после спорта и долгого дня',
        'успокоение и заметно лучший сон'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж всего тела идеален, если болит сразу в нескольких местах, вы выходите из напряжённого периода или просто хотите полного восстановления. Его выбирают спортсмены, люди с сидячей работой и все, кто подолгу стоит на ногах.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'высокая температура, острое воспаление или инфекция',
        'тромбоз и воспаление вен',
        'свежая травма, переломы или открытые раны',
        'острая грыжа диска',
        'онкологическое заболевание в активном лечении'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа всего тела',
      priceName: 'Классический массаж всего тела',
      priceDesc: 'Спина, шея, ноги и руки за один час. Цена окончательная — мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько стоит массаж всего тела?', a: 'Классический массаж всего тела стоит 1 300 Kč за 60 минут. Более короткий точечный массаж спины и шеи обойдётся в 700 Kč за 30 минут.' },
        { q: 'Что входит в массаж всего тела?', a: 'За час я прорабатываю спину, шею, заднюю и переднюю поверхность ног и руки. Лицо и живот не входят — для них есть отдельные процедуры.' },
        { q: 'Успеть за час всё тело — реально?', a: 'Да, при разумном распределении. Примерно половина времени уходит на спину и шею, остальное на ноги и руки. Если хотите проработать какую-то зону подробнее, скажите в начале.' },
        { q: 'Как часто ходить на массаж?', a: 'Для поддержания мышц в форме достаточно раза в три-четыре недели. При болях или интенсивных тренировках можно и раз в неделю.' },
        { q: 'Нужно ли есть перед массажем?', a: 'Не приходите совсем натощак и сразу после плотного обеда. Оптимально лёгкий приём пищи примерно за полтора часа.' }
      ],

      h2Book: 'Запишитесь на массаж всего тела',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
