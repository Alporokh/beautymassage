/* Lymfatická masáž obličeje. Keywords: lymfatická masáž obličeje,
   lymfatická masáž obličeje praha, lymfodrenáž obličeje, lymfatická masáž obličeje postup

   Cena 1 000 Kč / 45 min potvrzena klientkou 2026-08-23. */
module.exports = {
  slug: 'lymfaticka-masaz-obliceje',
  kind: 'service',
  group: 'face',
  price: 1000,
  minutes: 45,
  related: ['masaz-obliceje', 'lymfaticka-masaz', 'myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Lymfatická masáž obličeje Praha — lymfodrenáž | Massage 4 Beauty',
      desc: 'Lymfatická masáž obličeje v Praze 4. Lymfodrenáž obličeje proti otokům a váčkům pod očima — 45 minut za 1 000 Kč. Postup, účinky a online rezervace.',
      ogTitle: 'Lymfatická masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Lymfodrenáž obličeje v Praze 4 — proti otokům a váčkům pod očima. 45 minut za 1 000 Kč.'
    }
  },

  schema: {
    name: 'Lymfatická masáž obličeje',
    alternateName: ['Lymfodrenáž obličeje', 'Lymfatická drenáž obličeje'],
    serviceType: 'Lymfatická masáž obličeje',
    description: 'Jemná lymfatická masáž obličeje (lymfodrenáž) zaměřená na odtok otoků, zmenšení váčků pod očima a rozjasnění pleti.'
  },

  strings: {
    cs: {
      crumb: 'Lymfatická masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Lymfatická masáž obličeje Praha',
      lead: 'Nejjemnější ze všech masáží obličeje. Odvede zadrženou vodu, zmenší váčky pod očima a vrátí obličeji ostré kontury — často už během jediného ošetření.',
      photoAlt: 'Lymfatická masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Lymfodrenáž obličeje — velmi jemné tahy k mízním uzlinám.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je lymfatická masáž obličeje',
      what: [
        'Lymfatická masáž obličeje, nazývaná také lymfodrenáž obličeje, je velmi jemná technika pracující těsně pod kůží. Na rozdíl od liftingových nebo fasciálních masáží se zde netlačí do svalu — cílem není tkáň tvarovat, ale odvést z ní přebytečnou tekutinu.',
        'V obličeji je hustá síť mízních uzlin, hlavně kolem uší, čelisti a na krku. Když se lymfa nehýbe — po probdělé noci, při alergii, po slaném jídle nebo prostě ráno — obličej oteče, rysy se rozostří a pod očima naskočí váčky. Lymfodrenáž obličeje tekutinu odvede správným směrem.'
      ],

      h2How: 'Jaký je postup lymfatické masáže obličeje',
      steps: [
        { t: 'Otevření mízních uzlin', d: 'Vždy začínáme na krku a za ušima. Bez otevření uzlin by neměla lymfa kam odtékat.' },
        { t: 'Drenáž krku a čelisti', d: 'Jemné tahy vedou tekutinu z čelisti a krku dolů k podklíčkovým uzlinám.' },
        { t: 'Drenáž obličeje', d: 'Postupuji od středu obličeje ven — čelo, oční okolí, tváře. Tlak je velmi lehký.' },
        { t: 'Oční okolí a zklidnění', d: 'Nejjemnější část ošetření. Právě zde je efekt na váčky nejvíc vidět.' }
      ],

      h2Effects: 'Účinky lymfatické masáže obličeje',
      effects: [
        'odtok otoků a zmenšení váčků pod očima',
        'ostřejší kontury obličeje a viditelnější lícní kosti',
        'rozjasnění šedé a unavené pleti',
        'úleva při sklonu k otokům a alergiích',
        'podpora hojení pleti po zákrocích',
        'okamžitý viditelný efekt bez jakéhokoli zarudnutí'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Lymfatická masáž obličeje je ideální, pokud se ráno budíte s oteklým obličejem, máte sklon k váčkům pod očima, trpíte sezónní alergií nebo se zotavujete po estetickém zákroku. Je tak jemná, že se hodí i pro velmi citlivou pleť a rozšířené žilky.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní zánět, opary nebo záněty na pleti',
        'onemocnění lymfatického systému bez souhlasu lékaře',
        'onkologické onemocnění v aktivní léčbě',
        'zvýšená činnost štítné žlázy bez konzultace s lékařem',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena lymfatické masáže obličeje',
      priceName: 'Lymfatická masáž obličeje',
      priceDesc: 'Ruční lymfodrenáž obličeje, krku a očního okolí. Cena je konečná — nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Jaký je postup lymfatické masáže obličeje?', a: 'Vždy začínáme otevřením mízních uzlin na krku a za ušima, pokračujeme drenáží čelisti a krku a teprve pak obličeje směrem od středu ven. Nejjemnější částí je oční okolí, kterým ošetření končí.' },
        { q: 'Jak rychle zmizí otoky?', a: 'Většina klientek vidí rozdíl okamžitě po ošetření, zejména kolem očí. Efekt vydrží zpravidla dva až tři dny.' },
        { q: 'Pomůže lymfodrenáž obličeje na váčky pod očima?', a: 'Ano, pokud jsou váčky způsobené zadrženou tekutinou. Pokud jde o tukové polštářky nebo povolenou kůži, masáž je jen zjemní, ale neodstraní.' },
        { q: 'Jak se liší od masáže obličeje?', a: 'Klasická masáž obličeje pracuje se svaly a hlouběji tlačí. Lymfatická je nesrovnatelně jemnější a řeší tekutinu, ne tvar. Často je kombinujeme v jednom ošetření.' },
        { q: 'Můžu na masáž jít po estetickém zákroku?', a: 'Ano, lymfodrenáž urychluje hojení a odvod otoků. Vždy si ale nejprve vyžádejte souhlas lékaře, který zákrok prováděl.' }
      ],

      h2Book: 'Objednejte se na lymfodrenáž obličeje',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Facial lymphatic massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Facial Lymphatic Massage in Prague',
      lead: 'The gentlest of all facial massages. It carries away retained water, reduces under-eye bags and gives the face its sharp contours back — often within a single treatment.',
      photoAlt: 'Facial lymphatic massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Facial lymphatic drainage — very light strokes towards the lymph nodes.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What facial lymphatic massage is',
      what: [
        'Facial lymphatic massage, also called facial lymphatic drainage, is a very gentle technique working just beneath the skin. Unlike lifting or fascial massage, nothing is pressed into the muscle here — the aim is not to shape the tissue but to carry excess fluid out of it.',
        'The face holds a dense network of lymph nodes, mainly around the ears, jaw and neck. When the lymph stops moving — after a sleepless night, during allergy season, after salty food, or simply in the morning — the face swells, features blur and bags appear under the eyes. Facial drainage moves that fluid in the right direction.'
      ],

      h2How: 'The sequence of the treatment',
      steps: [
        { t: 'Opening the lymph nodes', d: 'We always start at the neck and behind the ears. Without opening them the lymph has nowhere to drain.' },
        { t: 'Draining neck and jaw', d: 'Light strokes lead fluid from the jaw and neck down to the collarbone nodes.' },
        { t: 'Draining the face', d: 'I work from the centre of the face outwards — forehead, eye area, cheeks. The pressure is very light.' },
        { t: 'Eye area and settling', d: 'The gentlest part of the treatment. This is where the effect on bags shows most.' }
      ],

      h2Effects: 'What facial lymphatic massage does',
      effects: [
        'drains swelling and reduces under-eye bags',
        'sharper facial contours and more visible cheekbones',
        'brightens grey, tired-looking skin',
        'relief for those prone to swelling and allergies',
        'supports skin healing after procedures',
        'an immediate visible effect with no redness at all'
      ],

      h2Who: 'Who it suits',
      who: 'Facial lymphatic massage is ideal if you wake with a swollen face, are prone to under-eye bags, suffer seasonal allergies, or are recovering from an aesthetic procedure. It is so gentle that it suits even very sensitive skin and visible capillaries.',
      h3Contra: 'When we do not massage',
      contra: [
        'acute inflammation, cold sores or skin inflammation',
        'lymphatic system disorders without a doctor\'s approval',
        'cancer under active treatment',
        'an overactive thyroid without consulting your doctor',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of facial lymphatic massage',
      priceName: 'Facial lymphatic massage',
      priceDesc: 'Manual drainage of face, neck and eye area. The price is final — we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'What is the sequence of a facial lymphatic massage?', a: 'We always begin by opening the lymph nodes at the neck and behind the ears, continue with drainage of the jaw and neck, and only then the face, working from the centre outwards. The gentlest part is the eye area, where the treatment ends.' },
        { q: 'How quickly does the swelling go?', a: 'Most clients see a difference immediately after the treatment, especially around the eyes. The effect usually holds for two to three days.' },
        { q: 'Does it help with under-eye bags?', a: 'Yes, where the bags are caused by retained fluid. If they are fat pads or loosened skin, the massage will soften them but not remove them.' },
        { q: 'How does it differ from facial massage?', a: 'A classic facial massage works the muscles and presses deeper. Lymphatic massage is incomparably gentler and addresses fluid, not shape. We often combine the two in one treatment.' },
        { q: 'Can I come after an aesthetic procedure?', a: 'Yes, drainage speeds up healing and the clearing of swelling. Always get approval first from the doctor who performed the procedure.' }
      ],

      h2Book: 'Book your facial drainage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Лимфодренаж лица',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Лимфодренажный массаж лица в Праге',
      lead: 'Самый мягкий из всех массажей лица. Выводит задержанную жидкость, уменьшает мешки под глазами и возвращает лицу чёткие контуры — часто уже за одну процедуру.',
      photoAlt: 'Лимфодренажный массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Лимфодренаж лица — очень лёгкие движения к лимфоузлам.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое лимфодренаж лица',
      what: [
        'Лимфодренажный массаж лица — это очень мягкая техника, работающая прямо под кожей. В отличие от лифтингового или фасциального массажа здесь не давят в мышцу: цель не в том, чтобы формировать ткань, а в том, чтобы вывести из неё лишнюю жидкость.',
        'На лице густая сеть лимфоузлов, в основном вокруг ушей, челюсти и на шее. Когда лимфа не движется — после бессонной ночи, при аллергии, после солёной пищи или просто утром — лицо отекает, черты размываются, а под глазами появляются мешки. Лимфодренаж лица уводит жидкость в нужном направлении.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Раскрытие лимфоузлов', d: 'Всегда начинаем с шеи и за ушами. Без раскрытия узлов лимфе некуда оттекать.' },
        { t: 'Дренаж шеи и челюсти', d: 'Лёгкие движения уводят жидкость от челюсти и шеи вниз к подключичным узлам.' },
        { t: 'Дренаж лица', d: 'Иду от центра лица наружу — лоб, область глаз, щёки. Давление очень лёгкое.' },
        { t: 'Область глаз и отдых', d: 'Самая деликатная часть процедуры. Именно здесь эффект на мешки виден больше всего.' }
      ],

      h2Effects: 'Эффект лимфодренажа лица',
      effects: [
        'вывод отёков и уменьшение мешков под глазами',
        'более чёткие контуры лица и заметные скулы',
        'сияние серой и уставшей кожи',
        'облегчение при склонности к отёкам и аллергиям',
        'поддержка заживления кожи после процедур',
        'мгновенный видимый эффект без какого-либо покраснения'
      ],

      h2Who: 'Кому подходит',
      who: 'Лимфодренаж лица идеален, если вы просыпаетесь с отёкшим лицом, склонны к мешкам под глазами, страдаете сезонной аллергией или восстанавливаетесь после эстетической процедуры. Он настолько мягкий, что подходит даже для очень чувствительной кожи и расширенных сосудов.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'острое воспаление, герпес или воспаления на коже',
        'заболевания лимфатической системы без согласия врача',
        'онкологическое заболевание в активном лечении',
        'повышенная функция щитовидной железы без консультации врача',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена лимфодренажа лица',
      priceName: 'Лимфодренажный массаж лица',
      priceDesc: 'Ручной лимфодренаж лица, шеи и области глаз. Цена окончательная — мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Какова последовательность лимфодренажа лица?', a: 'Всегда начинаем с раскрытия лимфоузлов на шее и за ушами, продолжаем дренажом челюсти и шеи и только затем переходим к лицу, работая от центра наружу. Самая деликатная часть — область глаз, которой процедура завершается.' },
        { q: 'Как быстро уходят отёки?', a: 'Большинство клиенток видят разницу сразу после процедуры, особенно вокруг глаз. Эффект обычно держится два-три дня.' },
        { q: 'Помогает ли лимфодренаж от мешков под глазами?', a: 'Да, если мешки вызваны задержкой жидкости. Если это жировые пакеты или дряблая кожа, массаж их смягчит, но не уберёт.' },
        { q: 'Чем он отличается от массажа лица?', a: 'Классический массаж лица работает с мышцами и давит глубже. Лимфодренаж несравнимо мягче и решает вопрос жидкости, а не формы. Часто мы сочетаем их в одной процедуре.' },
        { q: 'Можно ли прийти после эстетической процедуры?', a: 'Да, дренаж ускоряет заживление и вывод отёков. Но сначала всегда получите согласие врача, который проводил процедуру.' }
      ],

      h2Book: 'Запишитесь на лимфодренаж лица',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
