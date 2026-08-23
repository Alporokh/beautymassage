/* Bukální masáž. Keywords: bukální masáž, bukální masáž obličeje,
   bukální masáž praha, bukální masáž obličeje praha, bukální masáž cena, recenze */
module.exports = {
  slug: 'bukalni-masaz',
  kind: 'service',
  group: 'face',
  price: 800,
  minutes: 30,
  related: ['masaz-obliceje', 'myofascialni-masaz-obliceje', 'lymfaticka-masaz-obliceje', 'liftingova-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Bukální masáž obličeje Praha — cena 800 Kč | Massage 4 Beauty',
      desc: 'Bukální masáž obličeje v Praze 4 — masáž zevnitř úst pro zpevnění oválu a uvolnění čelisti. Cena 800 Kč za 30 minut. Průběh, účinky a online rezervace.',
      ogTitle: 'Bukální masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Bukální masáž zevnitř úst v Praze 4 — zpevnění oválu a uvolnění čelisti. 800 Kč / 30 minut.'
    },
    en: {
      title: "Buccal Massage Prague — buccal massage face | Massage 4 Beauty",
      desc: "Buccal massage in Prague 4, worked from inside the mouth to firm the face and release a clenched jaw. 30 minutes, 800 CZK.",
      ogTitle: "Buccal Massage Prague — buccal massage face | Massage 4 Beauty",
      ogDesc: "Buccal massage in Prague 4, worked from inside the mouth to firm the face and release a clenched jaw. 30 minutes, 800 CZK."
    },
    ru: {
      title: "Буккальный массаж лица Прага | Massage 4 Beauty",
      desc: "Буккальный массаж лица в Праге 4 — работа изнутри рта, укрепление овала и расслабление челюсти. 30 минут, 800 Kč.",
      ogTitle: "Буккальный массаж лица Прага | Massage 4 Beauty",
      ogDesc: "Буккальный массаж лица в Праге 4 — работа изнутри рта, укрепление овала и расслабление челюсти. 30 минут, 800 Kč."
    }
  },

  schema: {
    name: 'Bukální masáž obličeje',
    alternateName: ['Bukální masáž', 'Intraorální masáž obličeje'],
    serviceType: 'Bukální masáž obličeje',
    description: 'Bukální (intraorální) masáž obličeje prováděná zevnitř úst. Uvolňuje žvýkací svaly, zpevňuje ovál obličeje a vyhlazuje nosoretní rýhy.'
  },

  strings: {
    cs: {
      crumb: 'Bukální masáž',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Bukální masáž obličeje Praha',
      lead: 'Masáž vedená zevnitř úst — jediná technika, která se dostane přímo ke žvýkacím svalům. Nejúčinnější způsob, jak zpevnit ovál a uvolnit letitě zatnutou čelist.',
      photoAlt: 'Bukální masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Bukální masáž — práce zevnitř úst ve sterilních rukavicích.',
      factDurationV: '30 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je bukální masáž',
      what: [
        'Bukální masáž — někdy nazývaná intraorální — je technika, při které masíruji obličejové svaly zevnitř dutiny ústní, ve sterilních rukavicích. Zvenčí se totiž k žvýkacím svalům nelze dostat: leží pod několika vrstvami tkáně a právě ony nejvíce ovlivňují tvar dolní části obličeje.',
        'Když jsou tyto svaly roky ve stažení — ze stresu, zatínání zubů nebo bruxismu — obličej se opticky rozšiřuje, ovál se ztrácí a nosoretní rýhy se prohlubují. Bukální masáž je uvolní přímo u zdroje. Proto po ní bývá výsledek tak výrazný.'
      ],

      h2How: 'Jak bukální masáž probíhá',
      steps: [
        { t: 'Příprava a hygiena', d: 'Odlíčím pleť, nasadím sterilní rukavice a vysvětlím, co budete cítit.' },
        { t: 'Uvolnění zvenčí', d: 'Nejprve masáž tváří, čelisti a spánků zvenku, aby svaly nebyly v šoku.' },
        { t: 'Vlastní bukální práce', d: 'Prsty pracují zevnitř úst, druhá ruka drží tkáň zvenčí. Tlak je hluboký a pomalý.' },
        { t: 'Lymfodrenáž a zklidnění', d: 'Závěrečná drenáž odvede uvolněnou lymfu a zklidní prokrvenou pleť.' }
      ],

      h2Effects: 'Účinky bukální masáže',
      effects: [
        'výrazné zpevnění a zúžení oválu obličeje',
        'vyhlazení nosoretních rýh',
        'uvolnění zatnuté čelisti a úleva při bruxismu',
        'zmenšení napětí ve spáncích a méně častější bolesti hlavy',
        'zvednuté koutky úst a plnější rty',
        'zlepšení pohyblivosti čelistního kloubu'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Bukální masáž obličeje je ideální, pokud zatínáte zuby, cítíte tuhou čelist, trpíte bolestmi čelistního kloubu nebo se vám opticky rozšířila dolní část obličeje. Vyhledávají ji i klientky, kterým povrchové masáže obličeje nepřinesly dost výrazný výsledek.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'záněty v dutině ústní, afty nebo opary',
        'čerstvý zákrok u zubního lékaře nebo implantát v hojení',
        'akutní zánět čelistního kloubu',
        'čerstvě aplikovaná výplň v oblasti tváří (počkejte 2–3 týdny)',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena bukální masáže',
      priceName: 'Bukální masáž obličeje',
      priceDesc: 'Intraorální masáž ve sterilních rukavicích. Cena je konečná — nejsme plátci DPH.',
      priceMin: '30 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kolik stojí bukální masáž v Praze?', a: 'Bukální masáž obličeje stojí 800 Kč za 30 minut. Často ji klientky kombinují s masáží obličeje na 60 minut.' },
        { q: 'Bolí bukální masáž?', a: 'Tlak je hluboký a v prvních minutách bývá nepříjemný, protože žvýkací svaly jsou obvykle hodně stažené. Postupně se uvolní a masáž se stává příjemnou. Intenzitu vždy přizpůsobím.' },
        { q: 'Je bukální masáž hygienická?', a: 'Ano. Pracuji vždy ve sterilních jednorázových rukavicích a před masáží dostanete ústní vodu k vypláchnutí.' },
        { q: 'Kolik masáží je potřeba?', a: 'Rozdíl uvidíte hned po první. Pro trvalejší zpevnění oválu doporučuji sérii 5 až 8 masáží jednou týdně.' },
        { q: 'Můžu po masáži normálně jíst?', a: 'Ano. Někdy je čelist pár hodin mírně unavená, jako po delším žvýkání. Do druhého dne to odezní.' }
      ],

      h2Book: 'Objednejte se na bukální masáž',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Buccal massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Buccal Facial Massage in Prague',
      lead: 'A massage worked from inside the mouth — the only technique that reaches the chewing muscles directly. The most effective way to firm the contour and release a jaw clenched for years.',
      photoAlt: 'Buccal facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Buccal massage — worked from inside the mouth in sterile gloves.',
      factDurationV: '30 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What buccal massage is',
      what: [
        'Buccal massage — sometimes called intraoral — is a technique where I massage the facial muscles from inside the mouth, wearing sterile gloves. The chewing muscles simply cannot be reached from the outside: they lie under several layers of tissue, and they are exactly what shapes the lower part of the face.',
        'When those muscles have been contracted for years — through stress, clenching or bruxism — the face widens optically, the contour disappears and the nasolabial folds deepen. Buccal massage releases them right at the source. That is why the result is usually so pronounced.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Preparation and hygiene', d: 'I cleanse the skin, put on sterile gloves and explain what you will feel.' },
        { t: 'Releasing from outside', d: 'First the cheeks, jaw and temples from the outside, so the muscles are not shocked.' },
        { t: 'The buccal work itself', d: 'Fingers work inside the mouth while the other hand holds the tissue outside. Deep and slow.' },
        { t: 'Drainage and settling', d: 'A closing drainage carries away the released lymph and calms the warmed skin.' }
      ],

      h2Effects: 'What buccal massage does',
      effects: [
        'markedly firmer, narrower facial contour',
        'softens the nasolabial folds',
        'releases a clenched jaw and eases bruxism',
        'less tension in the temples and fewer headaches',
        'lifted corners of the mouth and fuller lips',
        'improves mobility of the jaw joint'
      ],

      h2Who: 'Who it suits',
      who: 'Buccal facial massage is ideal if you clench your teeth, feel a stiff jaw, suffer jaw joint pain, or the lower part of your face has widened. It is also sought out by clients for whom surface facial massage did not bring a strong enough result.',
      h3Contra: 'When we do not massage',
      contra: [
        'inflammation in the mouth, ulcers or cold sores',
        'recent dental work or an implant still healing',
        'acute inflammation of the jaw joint',
        'recent fillers in the cheek area (wait 2–3 weeks)',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of buccal massage',
      priceName: 'Buccal facial massage',
      priceDesc: 'Intraoral massage in sterile gloves. The price is final — we are not VAT payers.',
      priceMin: '30 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How much does buccal massage cost in Prague?', a: 'Buccal facial massage is 800 CZK for 30 minutes. Clients often combine it with a facial massage into a 60-minute session.' },
        { q: 'Does buccal massage hurt?', a: 'The pressure is deep and the first minutes can be uncomfortable, because the chewing muscles are usually very contracted. They gradually release and the massage becomes pleasant. I always adjust the intensity.' },
        { q: 'Is buccal massage hygienic?', a: 'Yes. I always work in sterile single-use gloves, and you are given mouthwash to rinse with beforehand.' },
        { q: 'How many sessions do I need?', a: 'You will see a difference after the first one. For a lasting firmer contour I recommend a course of 5 to 8 weekly sessions.' },
        { q: 'Can I eat normally afterwards?', a: 'Yes. The jaw is sometimes mildly tired for a few hours, as after a long chew. It passes by the next day.' }
      ],

      h2Book: 'Book your buccal massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Буккальный массаж',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Буккальный массаж лица в Праге',
      lead: 'Массаж изнутри полости рта — единственная техника, которая добирается прямо до жевательных мышц. Самый действенный способ укрепить овал и расслабить годами зажатую челюсть.',
      photoAlt: 'Буккальный массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Буккальный массаж — работа изнутри рта в стерильных перчатках.',
      factDurationV: '30 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое буккальный массаж',
      what: [
        'Буккальный массаж — иногда его называют интраоральным — это техника, при которой я массирую мышцы лица изнутри полости рта, в стерильных перчатках. Снаружи до жевательных мышц просто не добраться: они лежат под несколькими слоями ткани и именно они больше всего определяют форму нижней части лица.',
        'Когда эти мышцы годами находятся в спазме — от стресса, сжимания зубов или бруксизма — лицо визуально расширяется, овал теряется, а носогубные складки углубляются. Буккальный массаж расслабляет их прямо у источника. Поэтому результат обычно такой заметный.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Подготовка и гигиена', d: 'Снимаю макияж, надеваю стерильные перчатки и объясняю, что вы будете чувствовать.' },
        { t: 'Расслабление снаружи', d: 'Сначала массаж щёк, челюсти и висков снаружи, чтобы мышцы не были в шоке.' },
        { t: 'Сама буккальная работа', d: 'Пальцы работают изнутри рта, вторая рука держит ткань снаружи. Давление глубокое и медленное.' },
        { t: 'Лимфодренаж и отдых', d: 'Завершающий дренаж уводит освободившуюся лимфу и успокаивает кожу.' }
      ],

      h2Effects: 'Эффект буккального массажа',
      effects: [
        'заметное укрепление и сужение овала лица',
        'разглаживание носогубных складок',
        'расслабление зажатой челюсти и облегчение при бруксизме',
        'снижение напряжения в висках и более редкие головные боли',
        'приподнятые уголки губ и более наполненные губы',
        'улучшение подвижности челюстного сустава'
      ],

      h2Who: 'Кому подходит',
      who: 'Буккальный массаж лица идеален, если вы сжимаете зубы, чувствуете жёсткую челюсть, страдаете от боли в челюстном суставе или нижняя часть лица визуально расширилась. Его выбирают и те, кому поверхностные массажи лица не дали достаточно заметного результата.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'воспаления в полости рта, афты или герпес',
        'недавнее вмешательство у стоматолога или заживающий имплант',
        'острое воспаление челюстного сустава',
        'недавно введённые филлеры в области щёк (подождите 2–3 недели)',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена буккального массажа',
      priceName: 'Буккальный массаж лица',
      priceDesc: 'Интраоральный массаж в стерильных перчатках. Цена окончательная — мы не плательщики НДС.',
      priceMin: '30 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько стоит буккальный массаж в Праге?', a: 'Буккальный массаж лица стоит 800 Kč за 30 минут. Часто клиентки сочетают его с массажем лица в 60-минутную процедуру.' },
        { q: 'Больно ли делать буккальный массаж?', a: 'Давление глубокое, и первые минуты могут быть неприятными, потому что жевательные мышцы обычно сильно зажаты. Постепенно они расслабляются, и массаж становится приятным. Интенсивность я всегда подстраиваю.' },
        { q: 'Гигиеничен ли буккальный массаж?', a: 'Да. Я всегда работаю в стерильных одноразовых перчатках, а перед массажем вы получаете ополаскиватель для рта.' },
        { q: 'Сколько нужно сеансов?', a: 'Разницу увидите сразу после первого. Для более стойкого укрепления овала рекомендую курс из 5–8 сеансов раз в неделю.' },
        { q: 'Можно ли после массажа нормально есть?', a: 'Да. Иногда челюсть пару часов слегка уставшая, как после долгого жевания. К следующему дню это проходит.' }
      ],

      h2Book: 'Запишитесь на буккальный массаж',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
