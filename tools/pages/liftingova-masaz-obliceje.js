/* Liftingová masáž obličeje. Keywords: liftingová masáž obličeje,
   liftingová masáž obličeje praha, omlazující masáž obličeje, neinvazivní omlazení */
module.exports = {
  slug: 'liftingova-masaz-obliceje',
  kind: 'service',
  group: 'face',
  price: 1000,
  minutes: 45,
  related: ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'lymfaticka-masaz-obliceje', 'bukalni-masaz'],

  meta: {
    cs: {
      title: 'Liftingová masáž obličeje Praha — 1 000 Kč | Massage 4 Beauty',
      desc: 'Liftingová masáž obličeje v Praze 4. Neinvazivní lifting bez injekcí — zpevnění oválu a zvednutí rysů za 45 minut. Cena 1 000 Kč, online rezervace.',
      ogTitle: 'Liftingová masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Neinvazivní lifting obličeje bez injekcí v Praze 4. 45 minut za 1 000 Kč.'
    }
  },

  schema: {
    name: 'Liftingová masáž obličeje',
    alternateName: ['Lifting masáž', 'Omlazující masáž obličeje'],
    serviceType: 'Liftingová masáž obličeje',
    description: 'Liftingová masáž obličeje zaměřená na zpevnění oválu a zvednutí rysů. Neinvazivní alternativa k liftingu — bez jehel a bez rekonvalescence.'
  },

  strings: {
    cs: {
      crumb: 'Liftingová masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Liftingová masáž obličeje Praha',
      lead: 'Intenzivní zvedací technika, která pracuje proti gravitaci. Zpevní ovál, zvedne koutky a vrátí obličeji svěží výraz — bez jehel a bez jediného dne rekonvalescence.',
      photoAlt: 'Liftingová masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Liftingová masáž obličeje — zvedací tahy podél oválu.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je liftingová masáž obličeje',
      what: [
        'Liftingová masáž obličeje je technika postavená na tazích vedených výhradně směrem vzhůru. Zatímco běžná masáž pleť především prokrví, lifting cíleně tonizuje mimické svaly a mění směr, kterým tkáň drží — proto se jí říká neinvazivní lifting.',
        'Kombinuje hlubší svalové hmaty s rychlými zvedacími tahy podél oválu, čelisti a lícních kostí. Výsledkem je viditelně zvednutý obličej, ostřejší linie čelisti a otevřenější pohled už po prvním ošetření.'
      ],

      h2How: 'Jak liftingová masáž probíhá',
      steps: [
        { t: 'Očištění pleti', d: 'Odlíčím pleť a připravím ji jemným olejem, aby tahy hladce klouzaly.' },
        { t: 'Tonizace mimických svalů', d: 'Krátké pružné hmaty aktivují svaly, které přestaly držet tonus.' },
        { t: 'Zvedací tahy', d: 'Rytmické tahy vzhůru podél čelisti, lícních kostí a spánků. Jádro celého ošetření.' },
        { t: 'Fixace a zklidnění', d: 'Závěrečné chladivé tahy zafixují výsledek a zklidní prokrvenou pleť.' }
      ],

      h2Effects: 'Účinky liftingové masáže',
      effects: [
        'okamžité zvednutí a zpevnění oválu obličeje',
        'ostřejší linie čelisti a méně výrazné tváře',
        'zvednuté koutky úst a otevřenější pohled',
        'vyhlazení jemných vrásek kolem očí',
        'svěží, prokrvená a rozjasněná pleť',
        'viditelný efekt už po jednom ošetření'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Liftingová masáž obličeje je ideální, pokud vám povoluje ovál, chcete rychlý viditelný efekt před událostí nebo hledáte alternativu k injekčním zákrokům. Skvěle funguje také jako pravidelná prevence stárnutí pleti po třicítce.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní akné, opary nebo záněty na pleti',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'čerstvě po chemickém peelingu nebo laseru',
        'růžovka v akutní fázi',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena liftingové masáže',
      priceName: 'Liftingová masáž obličeje',
      priceDesc: 'Intenzivní zvedací ošetření obličeje. Cena je konečná — nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Jak dlouho vydrží efekt liftingové masáže?', a: 'Po jednom ošetření vydrží zvednutí obvykle tři až pět dní. Po sérii 8 až 10 masáží se efekt drží několik týdnů a ovál zůstává pevnější trvale.' },
        { q: 'Kdy si masáž objednat před událostí?', a: 'Ideálně jeden až dva dny předem. Pleť je hned po masáži mírně prokrvená a přes noc se výsledek krásně usadí.' },
        { q: 'Je liftingová masáž náhradou za botox?', a: 'Nenahradí ho, ale řeší jinou věc. Botox blokuje sval, masáž ho naopak tonizuje a zvedá tkáň. Mnoho klientek obojí kombinuje s odstupem.' },
        { q: 'Jak se liší od myofasciální masáže?', a: 'Liftingová masáž je rychlejší, povrchovější a cílí na okamžitý viditelný efekt. Myofasciální jde hlouběji do fascií a pracuje pomaleji, zato dlouhodoběji.' },
        { q: 'Je masáž vhodná i po čtyřicítce?', a: 'Ano, a bývá tehdy nejúčinnější. Čím dřív ale se sérií začnete, tím lépe se výsledek udržuje.' }
      ],

      h2Book: 'Objednejte se na liftingovou masáž',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Lifting facial massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Lifting Facial Massage in Prague',
      lead: 'An intensive lifting technique that works against gravity. It firms the contour, lifts the corners of the mouth and brings a fresh look back to the face — no needles, no downtime at all.',
      photoAlt: 'Lifting facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Lifting facial massage — upward strokes along the contour.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What lifting facial massage is',
      what: [
        'Lifting facial massage is built on strokes led exclusively upward. Where an ordinary massage mainly brings circulation, lifting deliberately tones the facial muscles and changes the direction in which the tissue holds — which is why it is called a non-invasive lift.',
        'It combines deeper muscular work with quick lifting strokes along the contour, jaw and cheekbones. The result is a visibly lifted face, a sharper jawline and a more open gaze after the very first treatment.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Cleansing the skin', d: 'I remove make-up and prepare the skin with a light oil so the strokes glide.' },
        { t: 'Toning the facial muscles', d: 'Short springy movements wake up the muscles that have stopped holding tone.' },
        { t: 'The lifting strokes', d: 'Rhythmic upward strokes along the jaw, cheekbones and temples. The core of the treatment.' },
        { t: 'Setting and settling', d: 'Closing cool strokes set the result and calm the warmed skin.' }
      ],

      h2Effects: 'What lifting massage does',
      effects: [
        'immediate lift and firmer facial contour',
        'a sharper jawline and less heavy cheeks',
        'lifted corners of the mouth and a more open gaze',
        'softens fine lines around the eyes',
        'fresh, well-circulated and brighter skin',
        'a visible effect after a single treatment'
      ],

      h2Who: 'Who it suits',
      who: 'Lifting facial massage is ideal if your contour is softening, you want a quick visible effect before an event, or you are looking for an alternative to injectables. It also works beautifully as regular prevention of skin ageing after thirty.',
      h3Contra: 'When we do not massage',
      contra: [
        'active acne, cold sores or skin inflammation',
        'recent fillers or botox (wait 2–3 weeks)',
        'recent chemical peel or laser treatment',
        'rosacea in an acute phase',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of lifting facial massage',
      priceName: 'Lifting facial massage',
      priceDesc: 'An intensive lifting treatment for the face. The price is final — we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How long does the lifting effect last?', a: 'After a single treatment the lift usually holds for three to five days. After a course of 8 to 10 sessions it holds for several weeks and the contour stays firmer for good.' },
        { q: 'When should I book before an event?', a: 'Ideally one or two days ahead. The skin is slightly flushed right after the massage and the result settles beautifully overnight.' },
        { q: 'Is it a replacement for botox?', a: 'It does not replace it — it solves something different. Botox blocks the muscle; the massage tones it and lifts the tissue. Many clients combine both, spaced apart.' },
        { q: 'How does it differ from myofascial massage?', a: 'Lifting massage is faster, works closer to the surface and aims at an immediate visible effect. Myofascial goes deeper into the fascia and works more slowly, but lasts longer.' },
        { q: 'Is it suitable after forty?', a: 'Yes, and it is often at its most effective then. The earlier you start a course though, the better the result holds.' }
      ],

      h2Book: 'Book your lifting massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Лифтинг-массаж лица',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Лифтинг-массаж лица в Праге',
      lead: 'Интенсивная подтягивающая техника, работающая против гравитации. Укрепляет овал, приподнимает уголки губ и возвращает лицу свежесть — без игл и без единого дня восстановления.',
      photoAlt: 'Лифтинг-массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Лифтинг-массаж лица — подтягивающие движения вдоль овала.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое лифтинг-массаж лица',
      what: [
        'Лифтинг-массаж лица построен на движениях, направленных исключительно вверх. Если обычный массаж прежде всего улучшает кровообращение, то лифтинг целенаправленно тонизирует мимические мышцы и меняет направление, в котором держится ткань — поэтому его называют неинвазивной подтяжкой.',
        'Он сочетает более глубокую работу с мышцами и быстрые подтягивающие движения вдоль овала, челюсти и скул. Результат — заметно приподнятое лицо, более чёткая линия челюсти и открытый взгляд уже после первой процедуры.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Очищение кожи', d: 'Снимаю макияж и подготавливаю кожу лёгким маслом, чтобы движения скользили.' },
        { t: 'Тонизация мимических мышц', d: 'Короткие пружинящие движения будят мышцы, потерявшие тонус.' },
        { t: 'Подтягивающие движения', d: 'Ритмичные движения вверх вдоль челюсти, скул и висков. Основа всей процедуры.' },
        { t: 'Фиксация и отдых', d: 'Завершающие охлаждающие движения закрепляют результат и успокаивают кожу.' }
      ],

      h2Effects: 'Эффект лифтинг-массажа',
      effects: [
        'мгновенная подтяжка и укрепление овала лица',
        'более чёткая линия челюсти и менее тяжёлые щёки',
        'приподнятые уголки губ и открытый взгляд',
        'разглаживание мелких морщин вокруг глаз',
        'свежая, наполненная кровью и сияющая кожа',
        'заметный эффект уже после одной процедуры'
      ],

      h2Who: 'Кому подходит',
      who: 'Лифтинг-массаж лица идеален, если овал поплыл, нужен быстрый заметный эффект перед событием или вы ищете альтернативу инъекциям. Отлично работает и как регулярная профилактика старения кожи после тридцати.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'активное акне, герпес или воспаления на коже',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'сразу после химического пилинга или лазера',
        'розацеа в острой фазе',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена лифтинг-массажа',
      priceName: 'Лифтинг-массаж лица',
      priceDesc: 'Интенсивная подтягивающая процедура для лица. Цена окончательная — мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько держится эффект лифтинг-массажа?', a: 'После одной процедуры подтяжка обычно держится три-пять дней. После курса из 8–10 сеансов эффект сохраняется несколько недель, а овал остаётся более плотным надолго.' },
        { q: 'За сколько дней до события записаться?', a: 'Оптимально за один-два дня. Сразу после массажа кожа слегка разрумянена, а за ночь результат прекрасно закрепляется.' },
        { q: 'Заменяет ли лифтинг-массаж ботокс?', a: 'Не заменяет, но решает другую задачу. Ботокс блокирует мышцу, а массаж, наоборот, тонизирует её и приподнимает ткань. Многие клиентки сочетают оба метода с интервалом.' },
        { q: 'Чем он отличается от миофасциального массажа?', a: 'Лифтинг-массаж быстрее, работает ближе к поверхности и нацелен на мгновенный видимый эффект. Миофасциальный идёт глубже в фасции и работает медленнее, зато дольше.' },
        { q: 'Подходит ли он после сорока?', a: 'Да, и часто именно тогда он наиболее эффективен. Но чем раньше начать курс, тем лучше держится результат.' }
      ],

      h2Book: 'Запишитесь на лифтинг-массаж',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
