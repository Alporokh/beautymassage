/* Autorská masáž od Liudmyly (signature massage). Keywords: autorská masáž
   obličeje praha, komplexní masáž obličeje, masáž obličeje před událostí,
   masáž obličeje krku a dekoltu

   Popis podle mistryně. Cena 1 600 Kč / 60 min podle ceníku v content.js. */
module.exports = {
  slug: 'autorska-masaz-obliceje',
  hero: 'signature-massage-technique.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'face',
  price: 1600,
  minutes: 60,
  related: ['myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje', 'lymfaticka-masaz-obliceje', 'masaz-obliceje'],

  meta: {
    cs: {
      title: 'Autorská masáž obličeje Praha - 1 600 Kč | Massage 4 Beauty',
      desc: 'Autorská masáž obličeje, krku, dekoltu a hlavy v Praze 4. Zlepšuje tonus pleti, uvolňuje napětí a zmírňuje otoky - výsledek viditelný hned. 60 minut za 1 600 Kč.',
      ogTitle: 'Autorská masáž obličeje Praha - 1 600 Kč | Massage 4 Beauty',
      ogDesc: 'Rychlé beauty osvěžení před schůzkou, událostí nebo po cestě. 60 minut za 1 600 Kč v Praze 4.'
    },
    en: {
      title: 'Signature Facial Massage by Liudmyla Prague | Massage 4 Beauty',
      desc: 'Signature massage of the face, neck, décolleté and head in Prague 4. Improves skin tone, relieves tension and reduces puffiness - with a visible effect straight away. 60 minutes, 1 600 CZK.',
      ogTitle: 'Signature Facial Massage by Liudmyla | Massage 4 Beauty',
      ogDesc: 'A quick beauty refresh before a meeting, an occasion or after a flight. 60 minutes, 1 600 CZK in Prague 4.'
    },
    ru: {
      title: 'Авторский массаж лица от Людмилы Прага | Massage 4 Beauty',
      desc: 'Авторский массаж лица, шеи, декольте и головы в Праге 4. Улучшает тонус кожи, снимает напряжение и уменьшает отёки - эффект виден сразу. 60 минут, 1 600 Kč.',
      ogTitle: 'Авторский массаж лица от Людмилы | Massage 4 Beauty',
      ogDesc: 'Быстрое бьюти-обновление перед встречей, событием или после перелёта. 60 минут, 1 600 Kč в Праге 4.'
    }
  },

  schema: {
    name: 'Autorská masáž od Liudmyly',
    alternateName: ['Autorská masáž obličeje', 'Signature Facial Massage', 'Komplexní masáž obličeje, krku, dekoltu a hlavy'],
    serviceType: 'Masáž obličeje',
    description: 'Autorská technika, která spojuje specializované masážní metody pro obličej, krk, dekolt a hlavu. Zlepšuje tonus pleti, uvolňuje napětí v obličeji, zmírňuje otoky a vrací svěží, odpočatý a zářivý vzhled.'
  },

  strings: {
    cs: {
      crumb: 'Autorská masáž od Liudmyly',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Autorská masáž obličeje od Liudmyly',
      lead: 'Moje vlastní technika, která spojuje specializované masážní metody. Zlepšuje tonus pleti, uvolňuje napětí v obličeji, zmírňuje otoky a vrací svěží, odpočatý a zářivý vzhled.',
      photoAlt: 'Autorská masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Autorská masáž - krk, dekolt, obličej a hlava.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je autorská masáž',
      what: [
        'Je to komplexní masáž obličeje, kterou jsem sestavila podle vlastních zkušeností. Hluboká a vícevrstvá procedura uvolňuje svalové napětí, zlepšuje krevní i lymfatický oběh a přirozeně obnovuje tonus pleti. Pracuji s krkem, dekoltem, obličejem - včetně myofasciální techniky - a s hlavou.',
        'Jednou z hlavních výhod je okamžitě viditelný estetický efekt. Masáž je rychlým beauty osvěžením, ideálním před důležitou pracovní schůzkou, zvláštní příležitostí nebo po dlouhém letu či cestě - když chcete během krátké doby vypadat svěže, odpočatě a upraveně.'
      ],

      h2How: 'Jak masáž probíhá',
      steps: [
        { t: 'Krk a dekolt', d: 'Začínám uvolněním krku a dekoltu, aby lymfa měla kam odtékat a obličej nedržel napětí.' },
        { t: 'Obličej', d: 'Myofasciální technikou uvolním stažené svaly a fascie a spojím ji s dalšími metodami podle potřeb vaší pleti.' },
        { t: 'Hlava', d: 'Masáž hlavy uvolní napětí, které se z pokožky hlavy přenáší do čela a obličeje.' },
        { t: 'Zklidnění', d: 'Závěrečné jemné tahy pleť zklidní. Odcházíte svěží a uvolnění.' }
      ],

      h2Effects: 'Účinky autorské masáže',
      effects: [
        'lepší tonus pleti',
        'uvolnění napětí v obličeji a čelisti',
        'zmírnění otoků',
        'lepší prokrvení a odtok lymfy',
        'svěží, odpočatý a zářivý vzhled',
        'výsledek viditelný hned po masáži'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Pro každého, kdo chce rychle a viditelně osvěžit obličej - před důležitou schůzkou, focením, oslavou nebo po dlouhém letu. Hodí se i jako pravidelná péče, pokud cítíte napětí v obličeji, budíte se s otoky nebo pleť ztrácí tonus.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní akné, opary nebo záněty na pleti',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'čerstvě po chemickém peelingu nebo laseru',
        'horečka a akutní onemocnění',
        'onemocnění lymfatického systému bez souhlasu lékaře'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena autorské masáže',
      priceName: 'Autorská masáž od Liudmyly - krk, dekolt, obličej a hlava',
      priceDesc: 'Komplexní masáž obličeje, krku, dekoltu a hlavy. Cena je konečná - nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kdy uvidím výsledek?', a: 'Hned po masáži. Pleť je prokrvená, otoky ustoupí a obličej vypadá odpočatě. Pravidelné masáže pak účinek prohlubují.' },
        { q: 'Mohu přijít těsně před důležitou událostí?', a: 'Ano, právě k tomu se masáž skvěle hodí. Počítejte jen s tím, že pleť bude po masáži naolejovaná a make-up je lepší nanést až potom.' },
        { q: 'Čím se liší od ostatních masáží obličeje?', a: 'Nejde o jednu techniku, ale o spojení několika metod, které jsem vyladila v praxi. Zahrnuje krk, dekolt, obličej s myofasciální technikou i hlavu.' },
        { q: 'Kolik masáž stojí?', a: 'Autorská masáž trvá 60 minut a stojí 1 600 Kč. Cena je konečná.' }
      ],

      h2Book: 'Objednejte se na autorskou masáž',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Signature massage by Liudmyla',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Signature Facial Massage by Liudmyla',
      lead: 'Based on my own signature technique, combining specialised massage methods to improve skin tone, relieve facial tension, reduce puffiness and restore a fresh, relaxed and radiant appearance.',
      photoAlt: 'Signature facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Signature massage - neck, décolleté, face and head.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What the signature massage is',
      what: [
        'It is a complete facial treatment I put together from my own experience. A deep, multi-level procedure that releases muscle tension, improves blood and lymph circulation and naturally restores skin tone. I work on the neck, décolleté, face - including myofascial technique - and head.',
        'One of the key benefits is its immediate visible aesthetic effect. It offers a quick beauty refresh, making it ideal before important business meetings, special occasions or after a long flight or journey, when you want to look fresh, rested and well-groomed in a short amount of time.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Neck and décolleté', d: 'I start by releasing the neck and décolleté, so lymph can drain and the face is not held in tension.' },
        { t: 'Face', d: 'Myofascial technique releases tight muscles and fascia, combined with other methods chosen for your skin.' },
        { t: 'Head', d: 'A head massage releases tension that travels from the scalp into the forehead and face.' },
        { t: 'Settling', d: 'Closing gentle strokes calm the skin. You leave fresh and relaxed.' }
      ],

      h2Effects: 'What the signature massage does',
      effects: [
        'better skin tone',
        'less tension in the face and jaw',
        'reduced puffiness',
        'improved circulation and lymph flow',
        'a fresh, rested, radiant look',
        'results you can see straight after the massage'
      ],

      h2Who: 'Who it suits',
      who: 'Anyone who wants a quick, visible refresh - before an important meeting, a photo shoot, a celebration or after a long flight. It also works as regular care if you feel tension in your face, wake up puffy or notice your skin losing tone.',
      h3Contra: 'When we do not massage',
      contra: [
        'active acne, cold sores or skin inflammation',
        'recent fillers or botox (wait 2–3 weeks)',
        'recent chemical peel or laser treatment',
        'fever and acute illness',
        'lymphatic disorders without a doctor’s approval'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of the signature massage',
      priceName: 'Signature Massage by Liudmyla - neck, décolleté, face and head',
      priceDesc: 'A complete massage of the face, neck, décolleté and head. The price is final - we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'When will I see the result?', a: 'Straight after the massage. The skin is flushed with fresh blood, puffiness goes down and the face looks rested. Regular sessions deepen the effect.' },
        { q: 'Can I come right before an important event?', a: 'Yes - that is exactly what it is good for. Just note the skin will be oiled after the massage, so make-up is best applied afterwards.' },
        { q: 'How is it different from other facial massages?', a: 'It is not one technique but a combination of several methods I have refined in practice. It covers the neck, décolleté, face with myofascial technique, and head.' },
        { q: 'How much does it cost?', a: 'The signature massage takes 60 minutes and costs 1 600 CZK. The price is final.' }
      ],

      h2Book: 'Book your signature massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Авторский массаж от Людмилы',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Авторский массаж лица от Людмилы',
      lead: 'Моя собственная авторская техника, объединяющая специализированные массажные методики. Улучшает тонус кожи, снимает напряжение лица, уменьшает отёки и возвращает свежий, отдохнувший и сияющий вид.',
      photoAlt: 'Авторский массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Авторский массаж - шея, декольте, лицо и голова.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое авторский массаж',
      what: [
        'Это комплексная процедура массажа лица, которую я составила на основе собственного опыта. Глубокая и многоуровневая процедура, направленная на снятие мышечных зажимов, улучшение крово- и лимфообращения, а также естественное восстановление тонуса кожи. Я работаю с шеей, декольте, лицом - в том числе в миофасциальной технике - и головой.',
        'Одно из главных преимуществ - мгновенный видимый эстетический эффект. Это быстрое бьюти-обновление, идеальное перед важной деловой встречей, особым событием или после долгого перелёта или поездки, когда хочется за короткое время выглядеть свежо, отдохнувшей и ухоженной.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Шея и декольте', d: 'Начинаю с расслабления шеи и декольте, чтобы лимфа могла оттекать, а лицо не держало напряжение.' },
        { t: 'Лицо', d: 'Миофасциальной техникой снимаю зажимы мышц и фасций и сочетаю её с другими методиками под вашу кожу.' },
        { t: 'Голова', d: 'Массаж головы снимает напряжение, которое с кожи головы переходит на лоб и лицо.' },
        { t: 'Успокоение', d: 'Завершающие мягкие движения успокаивают кожу. Вы уходите свежей и расслабленной.' }
      ],

      h2Effects: 'Эффект авторского массажа',
      effects: [
        'улучшение тонуса кожи',
        'снятие напряжения лица и челюсти',
        'уменьшение отёков',
        'улучшение крово- и лимфообращения',
        'свежий, отдохнувший и сияющий вид',
        'результат виден сразу после массажа'
      ],

      h2Who: 'Кому подходит',
      who: 'Всем, кто хочет быстро и заметно освежить лицо - перед важной встречей, фотосессией, праздником или после долгого перелёта. Подходит и как регулярный уход, если вы чувствуете напряжение в лице, просыпаетесь с отёками или кожа теряет тонус.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'активное акне, герпес или воспаления на коже',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'сразу после химического пилинга или лазера',
        'высокая температура и острые заболевания',
        'заболевания лимфатической системы без согласия врача'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена авторского массажа',
      priceName: 'Авторский массаж от Людмилы - шея, декольте, лицо и голова',
      priceDesc: 'Комплексный массаж лица, шеи, декольте и головы. Цена окончательная - мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Когда будет виден результат?', a: 'Сразу после массажа. Кожа наполняется кровью, отёки уходят, лицо выглядит отдохнувшим. Регулярные процедуры усиливают эффект.' },
        { q: 'Можно ли прийти прямо перед важным событием?', a: 'Да, именно для этого массаж отлично подходит. Учтите только, что после массажа на коже остаётся масло, поэтому макияж лучше нанести после.' },
        { q: 'Чем он отличается от других массажей лица?', a: 'Это не одна техника, а сочетание нескольких методик, отработанных на практике. Он включает шею, декольте, лицо в миофасциальной технике и голову.' },
        { q: 'Сколько стоит массаж?', a: 'Авторский массаж длится 60 минут и стоит 1 600 Kč. Цена окончательная.' }
      ],

      h2Book: 'Запишитесь на авторский массаж',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
