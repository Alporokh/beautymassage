/* Masáž obličeje — hub stránka. Keywords: masáž obličeje (praha, cena, účinky),
   masáž obličeje a dekoltu, masáž hlavy a obličeje, proti vráskám, proti stárnutí,
   omlazující masáž obličeje, omlazení obličeje, neinvazivní omlazení obličeje */
module.exports = {
  slug: 'masaz-obliceje',
  kind: 'service',
  group: 'face',
  price: 1600,
  minutes: 60,
  related: ['myofascialni-masaz-obliceje', 'liftingova-masaz-obliceje', 'bukalni-masaz', 'lymfaticka-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Masáž obličeje Praha — omlazení bez injekcí | Massage 4 Beauty',
      desc: 'Masáž obličeje a dekoltu v Praze 4. Neinvazivní omlazení obličeje proti vráskám — 60 minut za 1 600 Kč. Účinky, průběh, ceník a online rezervace.',
      ogTitle: 'Masáž obličeje Praha — neinvazivní omlazení | Massage 4 Beauty',
      ogDesc: 'Masáž obličeje, krku a dekoltu v Praze 4. Omlazení bez injekcí — 60 minut za 1 600 Kč.'
    },
    en: {
      title: "Facial Massage Prague — anti-aging, no needles | Massage 4 Beauty",
      desc: "Facial massage in Prague 4. Anti-aging facial without injections — 60 minutes, 1,600 CZK. Effects, what happens in a session and online booking.",
      ogTitle: "Facial Massage Prague — anti-aging, no needles | Massage 4 Beauty",
      ogDesc: "Facial massage in Prague 4. Anti-aging facial without injections — 60 minutes, 1,600 CZK. Effects, what happens in a session and online booking."
    },
    ru: {
      title: "Массаж лица Прага — антивозрастной уход | Massage 4 Beauty",
      desc: "Массаж лица и декольте в Праге 4. Антивозрастной массаж лица без инъекций — 60 минут, 1 600 Kč. Эффект, ход процедуры и запись онлайн.",
      ogTitle: "Массаж лица Прага — антивозрастной уход | Massage 4 Beauty",
      ogDesc: "Массаж лица и декольте в Праге 4. Антивозрастной массаж лица без инъекций — 60 минут, 1 600 Kč. Эффект, ход процедуры и запись онлайн."
    }
  },

  schema: {
    name: 'Masáž obličeje',
    alternateName: ['Omlazující masáž obličeje', 'Masáž obličeje a dekoltu', 'Rituál pro obličej'],
    serviceType: 'Masáž obličeje',
    description: 'Komplexní masáž obličeje, krku, dekoltu a hlavy. Neinvazivní omlazení obličeje — uvolnění mimického napětí, vyhlazení vrásek a obnovení tonusu pleti.'
  },

  strings: {
    cs: {
      crumb: 'Masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Masáž obličeje Praha',
      lead: 'Hluboká vícevrstvá péče o obličej, krk, dekolt a hlavu. Uvolní mimické napětí, vyhladí vrásky a vrátí pleti tonus — bez injekcí a bez rekonvalescence.',
      photoAlt: 'Omlazující masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Rituál pro obličej — krk, dekolt, obličej a hlava.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je masáž obličeje',
      what: [
        'Masáž obličeje je ruční ošetření, které pracuje se svaly, fasciemi a lymfou v obličeji. Naše mimika je ve stálém napětí — mračíme se u obrazovky, zatínáme čelist ve stresu. Toto napětí postupně vtiskne do pleti statické vrásky a stáhne rysy dolů.',
        'Cílená masáž obličeje toto napětí rozpouští. Pleť se prokrví, odteče zadržená voda a obličej se během jediného ošetření viditelně rozjasní. Jde o neinvazivní omlazení obličeje — pracuje se pouze rukama, bez jehel a bez přístrojů.'
      ],

      h2How: 'Jak masáž obličeje probíhá',
      steps: [
        { t: 'Odlíčení a diagnostika pleti', d: 'Šetrně odlíčím pleť a podívám se, kde je napětí a kde se drží otok.' },
        { t: 'Uvolnění krku a dekoltu', d: 'Začínáme níž, než čekáte — napjatý krk drží celý obličej dolů.' },
        { t: 'Vlastní masáž obličeje', d: 'Kombinace hlubokých fasciálních tahů a jemné lymfodrenáže po celém obličeji.' },
        { t: 'Masáž hlavy a zklidnění', d: 'Ošetření uzavírá masáž hlavy. Většina klientek u ní usne.' }
      ],

      h2Effects: 'Účinky masáže obličeje',
      effects: [
        'vyhlazení mimických vrásek a vrásek na čele',
        'zpevnění oválu obličeje a zvednutí rysů',
        'odtok zadržené vody a zmírnění otoků pod očima',
        'rozjasnění a prokrvení unavené pleti',
        'uvolnění zatnuté čelisti a napětí v krku',
        'zpomalení stárnutí pleti bez invazivního zákroku'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž obličeje a dekoltu se hodí každému, kdo tráví dny u obrazovky, cítí zatnutou čelist nebo si všímá prvních vrásek a povolujícího oválu. Skvěle funguje i jako omlazení obličeje před svatbou, focením nebo důležitou událostí.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní akné, opary nebo záněty na pleti',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'čerstvě po chemickém peelingu nebo laseru',
        'horečka a akutní onemocnění',
        'onemocnění lymfatického systému bez souhlasu lékaře'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže obličeje',
      priceName: 'Rituál pro obličej — krk, dekolt, obličej a hlava',
      priceDesc: 'Kompletní ošetření všech vrstev. Cena je konečná — nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kolik stojí masáž obličeje v Praze?', a: 'Kompletní rituál pro obličej, krk, dekolt a hlavu stojí 1 600 Kč za 60 minut. Kratší cílené masáže obličeje začínají na 800 Kč.' },
        { q: 'Pomůže masáž obličeje proti vráskám?', a: 'Ano, u mimických vrásek. Masáž uvolní stažené mimické svaly, které vrásku drží, a zlepší prokrvení pleti. Hluboké statické vrásky masáž nevymaže, ale výrazně zjemní.' },
        { q: 'Jak rychle uvidím výsledek?', a: 'Rozjasnění pleti a odtok otoků jsou vidět hned po prvním ošetření. Na zpevnění oválu obličeje je potřeba série, obvykle 6 až 10 masáží.' },
        { q: 'Jak často chodit na masáž obličeje?', a: 'Pro viditelnou změnu doporučuji sérii jednou týdně po dobu 6 až 10 týdnů. Poté stačí jedna udržovací masáž měsíčně.' },
        { q: 'Můžu jít na masáž obličeje po botoxu?', a: 'Ano, ale ne hned. Po aplikaci botoxu nebo výplní počkejte alespoň dva až tři týdny, aby se látka usadila.' }
      ],

      h2Book: 'Objednejte se na masáž obličeje',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Facial massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Facial Massage in Prague',
      lead: 'Deep, multi-layered care for the face, neck, décolleté and head. It releases the tension held in your expression, softens lines and brings tone back to the skin — no needles, no downtime.',
      photoAlt: 'Rejuvenating facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'The facial ritual — neck, décolleté, face and head.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What facial massage is',
      what: [
        'Facial massage is a manual treatment that works with the muscles, fascia and lymph of the face. Our expression is under constant tension — we frown at screens and clench the jaw under stress. Over time that tension presses static lines into the skin and pulls the features downward.',
        'Targeted facial massage dissolves that tension. Circulation improves, retained water drains away, and the face visibly brightens within a single treatment. This is non-invasive facial rejuvenation — done entirely by hand, with no needles and no machines.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Cleansing and skin reading', d: 'I gently remove make-up and look at where tension sits and where fluid is being held.' },
        { t: 'Releasing neck and décolleté', d: 'We start lower than you expect — a tight neck holds the whole face down.' },
        { t: 'The facial massage itself', d: 'A combination of deep fascial strokes and gentle lymphatic drainage across the face.' },
        { t: 'Head massage and settling', d: 'The treatment closes with a head massage. Most clients fall asleep during it.' }
      ],

      h2Effects: 'What facial massage does',
      effects: [
        'softens expression lines and forehead lines',
        'firms the jawline and lifts the features',
        'drains retained water and reduces under-eye puffiness',
        'brightens tired skin and improves circulation',
        'releases a clenched jaw and neck tension',
        'slows skin ageing without any invasive procedure'
      ],

      h2Who: 'Who it suits',
      who: 'Facial and décolleté massage suits anyone who spends their days at a screen, feels a clenched jaw, or is noticing first lines and a softening jawline. It also works beautifully as facial rejuvenation before a wedding, a shoot or an important occasion.',
      h3Contra: 'When we do not massage',
      contra: [
        'active acne, cold sores or skin inflammation',
        'recent fillers or botox (wait 2–3 weeks)',
        'recent chemical peel or laser treatment',
        'fever and acute illness',
        'lymphatic system disorders without a doctor\'s approval'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of facial massage',
      priceName: 'Facial Ritual — neck, décolleté, face and head',
      priceDesc: 'A complete treatment of every layer. The price is final — we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How much does facial massage cost in Prague?', a: 'The complete ritual for face, neck, décolleté and head is 1,600 CZK for 60 minutes. Shorter targeted facial massages start at 800 CZK.' },
        { q: 'Does facial massage help with wrinkles?', a: 'Yes, with expression lines. The massage releases the tightened muscles holding the line and improves circulation. It will not erase deep static wrinkles, but it softens them considerably.' },
        { q: 'How quickly will I see a result?', a: 'Brightness and reduced puffiness are visible straight after the first treatment. Firming the jawline needs a course, usually 6 to 10 sessions.' },
        { q: 'How often should I come?', a: 'For visible change I recommend once a week for 6 to 10 weeks. After that one maintenance massage a month is enough.' },
        { q: 'Can I have facial massage after botox?', a: 'Yes, but not immediately. After botox or fillers, wait at least two to three weeks for the product to settle.' }
      ],

      h2Book: 'Book your facial massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Массаж лица',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Массаж лица в Праге',
      lead: 'Глубокий многослойный уход за лицом, шеей, декольте и головой. Снимает мимическое напряжение, разглаживает морщины и возвращает коже тонус — без инъекций и без восстановительного периода.',
      photoAlt: 'Омолаживающий массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Ритуал для лица — шея, декольте, лицо и голова.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое массаж лица',
      what: [
        'Массаж лица — это ручная процедура, которая работает с мышцами, фасциями и лимфой лица. Наша мимика находится в постоянном напряжении: мы хмуримся перед экраном, сжимаем челюсть от стресса. Со временем это напряжение отпечатывается в коже статическими морщинами и тянет черты вниз.',
        'Целенаправленный массаж лица растворяет это напряжение. Улучшается кровообращение, уходит задержанная жидкость, и лицо заметно светлеет уже за одну процедуру. Это неинвазивное омоложение лица — только руками, без игл и аппаратов.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Очищение и диагностика кожи', d: 'Бережно снимаю макияж и смотрю, где держится напряжение и где скапливается отёк.' },
        { t: 'Расслабление шеи и декольте', d: 'Начинаем ниже, чем вы ожидаете: напряжённая шея тянет всё лицо вниз.' },
        { t: 'Сам массаж лица', d: 'Сочетание глубоких фасциальных движений и мягкого лимфодренажа по всему лицу.' },
        { t: 'Массаж головы и отдых', d: 'Процедуру завершает массаж головы. Большинство клиенток на нём засыпают.' }
      ],

      h2Effects: 'Эффект массажа лица',
      effects: [
        'разглаживание мимических морщин и морщин на лбу',
        'укрепление овала лица и подтяжка черт',
        'вывод задержанной жидкости и уменьшение отёков под глазами',
        'сияние и улучшение кровообращения уставшей кожи',
        'расслабление зажатой челюсти и напряжения в шее',
        'замедление старения кожи без инвазивных вмешательств'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж лица и декольте подходит всем, кто проводит дни за экраном, чувствует зажатую челюсть или замечает первые морщины и поплывший овал. Отлично работает и как омоложение лица перед свадьбой, съёмкой или важным событием.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'активное акне, герпес или воспаления на коже',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'сразу после химического пилинга или лазера',
        'высокая температура и острые заболевания',
        'заболевания лимфатической системы без согласия врача'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа лица',
      priceName: 'Ритуал для лица — шея, декольте, лицо и голова',
      priceDesc: 'Полная проработка всех слоёв. Цена окончательная — мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько стоит массаж лица в Праге?', a: 'Полный ритуал для лица, шеи, декольте и головы стоит 1 600 Kč за 60 минут. Более короткие точечные массажи лица начинаются от 800 Kč.' },
        { q: 'Помогает ли массаж лица от морщин?', a: 'Да, от мимических. Массаж расслабляет зажатые мышцы, которые держат морщину, и улучшает кровообращение. Глубокие статические морщины он не уберёт, но заметно смягчит.' },
        { q: 'Как быстро будет виден результат?', a: 'Сияние кожи и уменьшение отёков видны сразу после первой процедуры. Для укрепления овала нужен курс, обычно 6–10 сеансов.' },
        { q: 'Как часто ходить на массаж лица?', a: 'Для заметного результата рекомендую раз в неделю в течение 6–10 недель. Затем достаточно одной поддерживающей процедуры в месяц.' },
        { q: 'Можно ли массаж лица после ботокса?', a: 'Да, но не сразу. После ботокса или филлеров подождите хотя бы две-три недели, чтобы препарат распределился.' }
      ],

      h2Book: 'Запишитесь на массаж лица',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
