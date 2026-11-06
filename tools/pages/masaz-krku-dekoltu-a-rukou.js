/* Masáž krku, dekoltu a rukou. Keywords: masáž krku a dekoltu,
   masáž dekoltu praha, masáž krku praha, masáž rukou

   Cena 1 200 Kč / 60 min podle ceníku v content.js. */
module.exports = {
  slug: 'masaz-krku-dekoltu-a-rukou',
  hero: '17-masaz-krku-dekoltu-a-rukou-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'face',
  price: 1200,
  minutes: 60,
  related: ['masaz-hlavy', 'masaz-obliceje', 'lymfaticka-masaz-obliceje', 'masaz-zad-a-sije'],

  meta: {
    cs: {
      title: 'Masáž krku, dekoltu a rukou Praha - 1 200 Kč | Massage 4 Beauty',
      desc: 'Masáž krku, dekoltu a rukou v Praze 4. Zlepšuje prokrvení a lymfatickou drenáž a uvolňuje svaly krku a hrudníku. 60 minut za 1 200 Kč.',
      ogTitle: 'Masáž krku, dekoltu a rukou Praha | Massage 4 Beauty',
      ogDesc: 'Masáž krku, dekoltu a rukou v Praze 4 - uvolnění a péče o pleť. 60 minut za 1 200 Kč.'
    },
    en: {
      title: 'Neck, Décolleté & Hands Massage Prague | Massage 4 Beauty',
      desc: 'Neck, décolleté and hands massage in Prague 4. Improves circulation and lymph drainage and relaxes the muscles of the neck and chest. 60 minutes, 1 200 CZK.',
      ogTitle: 'Neck, Décolleté & Hands Massage Prague | Massage 4 Beauty',
      ogDesc: 'Neck, décolleté and hands massage in Prague 4 - relaxation and skin care. 60 minutes, 1 200 CZK.'
    },
    ru: {
      title: 'Массаж шеи, декольте и рук Прага | Massage 4 Beauty',
      desc: 'Массаж шеи, декольте и рук в Праге 4. Улучшает кровоток и лимфодренаж, расслабляет мышцы шеи и грудного отдела. 60 минут, 1 200 Kč.',
      ogTitle: 'Массаж шеи, декольте и рук Прага | Massage 4 Beauty',
      ogDesc: 'Массаж шеи, декольте и рук в Праге 4 - расслабление и уход за кожей. 60 минут, 1 200 Kč.'
    }
  },

  schema: {
    name: 'Masáž krku, dekoltu a rukou',
    alternateName: ['Masáž krku a dekoltu', 'Masáž dekoltu', 'Masáž rukou'],
    serviceType: 'Masáž krku, dekoltu a rukou',
    description: 'Masáž krku, dekoltu a rukou. Zlepšuje prokrvení a lymfatickou drenáž, uvolňuje svaly krku a hrudníku a pečuje o pleť partií, které prozrazují věk.'
  },

  strings: {
    cs: {
      crumb: 'Masáž krku, dekoltu a rukou',
      eyebrow: 'Masáž · Praha 4',
      h1: 'Masáž krku, dekoltu a rukou Praha',
      lead: 'Hodina péče o partie, na které se při péči o pleť často zapomíná. Masáž zlepší prokrvení a odtok lymfy, uvolní svaly krku a hrudníku a pleť krku i dekoltu je po ní svěží a pružnější.',
      photoAlt: 'Masáž krku, dekoltu a rukou ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Masáž krku, dekoltu a rukou.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je masáž krku, dekoltu a rukou',
      what: [
        'Krk, dekolt a ruce prozrazují věk často dřív než obličej - pleť je tu tenčí a dostává méně péče. Tato masáž se jim věnuje celou hodinu: od šíje a ramenou přes krk a dekolt až po předloktí, dlaně a prsty.',
        'Hmaty kombinují uvolnění svalů s jemnou lymfatickou drenáží. Uvolní se ztuhlá šíje a stažené prsní svaly, které nás při sezení u počítače táhnou dopředu, a pleť krku a dekoltu se prokrví a vypne.'
      ],

      h2How: 'Jak masáž probíhá',
      steps: [
        { t: 'Šíje a ramena', d: 'Uvolním ztuhlou šíji a ramena, kde se drží napětí ze sezení.' },
        { t: 'Krk a dekolt', d: 'Jemné drenážní a modelující tahy po krku a dekoltu, ve směru odtoku lymfy.' },
        { t: 'Ruce', d: 'Masáž předloktí, dlaní a prstů, která uvolní ruce unavené prací u počítače.' },
        { t: 'Zklidnění', d: 'Závěrečné pomalé tahy, po kterých se tělo i pleť zklidní.' }
      ],

      h2Effects: 'Účinky masáže',
      effects: [
        'lepší prokrvení a lymfatická drenáž',
        'uvolněné svaly krku, ramen a hrudníku',
        'svěží a pružnější pleť krku a dekoltu',
        'uvolněné ruce a prsty',
        'úleva při napětí ze sezení u počítače',
        'hluboká relaxace'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž krku, dekoltu a rukou je ideální, pokud pracujete u počítače a nosíte napětí v šíji a ramenou, nebo chcete věnovat péči pleti krku a dekoltu, které stárnou spolu s obličejem. Krásně se doplňuje s masáží obličeje.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'záněty, rány nebo kožní onemocnění v ošetřované oblasti',
        'onemocnění štítné žlázy bez souhlasu lékaře',
        'čerstvé úrazy krku a ramen',
        'horečka a akutní onemocnění',
        'těhotenství v prvním trimestru'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže krku, dekoltu a rukou',
      priceName: 'Masáž krku, dekoltu a rukou',
      priceDesc: 'Hodinová masáž krku, dekoltu, šíje a rukou. Cena je konečná - nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Je součástí masáže i obličej?', a: 'Ne, tato masáž se věnuje krku, dekoltu, šíji a rukám. Pokud chcete i obličej, vyberte si masáž obličeje, která zahrnuje krk, dekolt, obličej i hlavu.' },
        { q: 'Jak se na masáž připravit?', a: 'Stačí přijít v pohodlném oblečení, ideálně bez šperků na krku a rukou. Vše ostatní připravím ve studiu.' },
        { q: 'Pomůže masáž při ztuhlé šíji z práce u počítače?', a: 'Ano, uvolnění šíje, ramen a prsních svalů je jednou z hlavních částí masáže. Při dlouhodobých bolestech zad doporučuji také masáž zad a šíje.' },
        { q: 'Mohu masáž spojit s masáží hlavy?', a: 'Ano, je to příjemná kombinace. Při rezervaci napište, že chcete obě masáže, a připravím pro vás delší termín.' }
      ],

      h2Book: 'Objednejte se na masáž krku, dekoltu a rukou',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Neck, décolleté and hands massage',
      eyebrow: 'Massage · Prague 4',
      h1: 'Neck, Décolleté and Hands Massage in Prague',
      lead: 'An hour of care for the areas skin care often forgets. The massage improves circulation and lymph flow, relaxes the muscles of the neck and chest, and leaves the skin of the neck and décolleté fresh and more elastic.',
      photoAlt: 'Neck, décolleté and hands massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Neck, décolleté and hands massage.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What this massage is',
      what: [
        'The neck, décolleté and hands often show age earlier than the face - the skin there is thinner and gets less care. This massage gives them a full hour: from the back of the neck and shoulders, over the neck and décolleté, down to the forearms, palms and fingers.',
        'The movements combine muscle release with gentle lymphatic drainage. A stiff neck and the tight chest muscles that pull us forward at the computer let go, and the skin of the neck and décolleté is well circulated and firmer.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Neck and shoulders', d: 'I release the stiff back of the neck and shoulders, where tension from sitting holds.' },
        { t: 'Neck and décolleté', d: 'Gentle draining and shaping strokes over the neck and décolleté, with the lymph flow.' },
        { t: 'Hands', d: 'Massage of the forearms, palms and fingers to ease hands tired from computer work.' },
        { t: 'Settling', d: 'Slow closing strokes that calm both body and skin.' }
      ],

      h2Effects: 'What the massage does',
      effects: [
        'better circulation and lymph drainage',
        'relaxed muscles of the neck, shoulders and chest',
        'fresher, more elastic skin on the neck and décolleté',
        'relaxed hands and fingers',
        'relief from tension built up sitting at a computer',
        'deep relaxation'
      ],

      h2Who: 'Who it suits',
      who: 'This massage is ideal if you work at a computer and carry tension in your neck and shoulders, or want to care for the skin of the neck and décolleté, which ages along with the face. It pairs beautifully with a facial massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'inflammation, wounds or skin conditions in the treated area',
        'thyroid conditions without a doctor\'s approval',
        'recent neck or shoulder injuries',
        'fever and acute illness',
        'pregnancy in the first trimester'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of the neck, décolleté and hands massage',
      priceName: 'Neck, décolleté and hands massage',
      priceDesc: 'An hour-long massage of the neck, décolleté, shoulders and hands. The price is final - we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does it include the face?', a: 'No, this massage covers the neck, décolleté, shoulders and hands. If you want the face as well, choose the facial massage, which covers the neck, décolleté, face and head.' },
        { q: 'How should I prepare?', a: 'Just come in comfortable clothes, ideally without jewellery on your neck and hands. I will have everything else ready at the studio.' },
        { q: 'Will it help a stiff neck from computer work?', a: 'Yes, releasing the neck, shoulders and chest muscles is one of the main parts of the massage. For long-term back pain I also recommend the back and neck massage.' },
        { q: 'Can I combine it with a head massage?', a: 'Yes, it is a lovely combination. Mention both massages when you book and I will set aside a longer slot.' }
      ],

      h2Book: 'Book your neck, décolleté and hands massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Массаж шеи, декольте и рук',
      eyebrow: 'Массаж · Прага 4',
      h1: 'Массаж шеи, декольте и рук в Праге',
      lead: 'Час заботы о зонах, о которых в уходе часто забывают. Массаж улучшает кровоток и отток лимфы, расслабляет мышцы шеи и грудного отдела, а кожа шеи и декольте становится свежей и более упругой.',
      photoAlt: 'Массаж шеи, декольте и рук в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Массаж шеи, декольте и рук.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что это за массаж',
      what: [
        'Шея, декольте и руки часто выдают возраст раньше, чем лицо - кожа здесь тоньше и получает меньше ухода. Этот массаж посвящает им целый час: от задней поверхности шеи и плеч через шею и декольте до предплечий, ладоней и пальцев.',
        'Движения сочетают расслабление мышц с мягким лимфодренажем. Отпускает зажатая шея и напряжённые грудные мышцы, которые тянут нас вперёд за компьютером, а кожа шеи и декольте наполняется кровью и подтягивается.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Шея и плечи', d: 'Расслабляю зажатую шею и плечи, где держится напряжение от сидения.' },
        { t: 'Шея и декольте', d: 'Мягкие дренажные и моделирующие движения по шее и декольте - по току лимфы.' },
        { t: 'Руки', d: 'Массаж предплечий, ладоней и пальцев, уставших от работы за компьютером.' },
        { t: 'Успокоение', d: 'Медленные завершающие движения, после которых успокаиваются и тело, и кожа.' }
      ],

      h2Effects: 'Эффект массажа',
      effects: [
        'улучшение кровотока и лимфодренажа',
        'расслабленные мышцы шеи, плеч и груди',
        'свежая, более упругая кожа шеи и декольте',
        'расслабленные кисти и пальцы',
        'облегчение при напряжении от работы за компьютером',
        'глубокое расслабление'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж шеи, декольте и рук идеален, если вы работаете за компьютером и носите напряжение в шее и плечах или хотите позаботиться о коже шеи и декольте, которая стареет вместе с лицом. Прекрасно сочетается с массажем лица.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'воспаления, раны или кожные заболевания в зоне массажа',
        'заболевания щитовидной железы без согласия врача',
        'недавние травмы шеи и плеч',
        'высокая температура и острые заболевания',
        'беременность в первом триместре'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа шеи, декольте и рук',
      priceName: 'Массаж шеи, декольте и рук',
      priceDesc: 'Часовой массаж шеи, декольте, плеч и рук. Цена окончательная - мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Входит ли в массаж лицо?', a: 'Нет, этот массаж посвящён шее, декольте, плечам и рукам. Если хотите и лицо, выберите массаж лица - он включает шею, декольте, лицо и голову.' },
        { q: 'Как подготовиться к массажу?', a: 'Достаточно прийти в удобной одежде, лучше без украшений на шее и руках. Всё остальное я подготовлю в студии.' },
        { q: 'Поможет ли массаж при зажатой шее от работы за компьютером?', a: 'Да, расслабление шеи, плеч и грудных мышц - одна из главных частей массажа. При длительных болях в спине советую также массаж спины и шеи.' },
        { q: 'Можно ли совместить его с массажем головы?', a: 'Да, это приятное сочетание. Укажите при записи, что хотите оба массажа, и я выделю для вас более длинное время.' }
      ],

      h2Book: 'Запишитесь на массаж шеи, декольте и рук',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
