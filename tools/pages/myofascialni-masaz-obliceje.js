/* Myofasciální masáž obličeje. Keywords: myofasciální masáž (praha),
   myofasciální masáž obličeje (praha), fasciální masáž obličeje, fasciální masáž praha */
module.exports = {
  slug: 'myofascialni-masaz-obliceje',
  hero: '04-myofascialni-masaz-obliceje-hero.webp',
  kind: 'service',
  group: 'face',
  price: 1300,
  minutes: 45,
  related: ['masaz-obliceje', 'liftingova-masaz-obliceje', 'bukalni-masaz', 'lymfaticka-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Myofasciální masáž obličeje Praha — 1 300 Kč | Massage 4 Beauty',
      desc: 'Myofasciální (fasciální) masáž obličeje v Praze 4. Uvolnění fascií, zpevnění oválu a vyhlazení vrásek — 45 minut za 1 300 Kč. Průběh, účinky a online rezervace.',
      ogTitle: 'Myofasciální masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Fasciální masáž obličeje v Praze 4 — uvolnění fascií a zpevnění oválu. 45 minut za 1 300 Kč.'
    },
    en: {
      title: "Myofascial Massage Face — Prague 4 | Massage 4 Beauty",
      desc: "Myofascial massage for the face in Prague. Deep fascia work that firms the jawline and softens expression lines — 45 minutes, 1 300 CZK.",
      ogTitle: "Myofascial Massage Face — Prague 4 | Massage 4 Beauty",
      ogDesc: "Myofascial massage for the face in Prague. Deep fascia work that firms the jawline and softens expression lines — 45 minutes, 1 300 CZK."
    },
    ru: {
      title: "Миофасциальный массаж лица Прага | Massage 4 Beauty",
      desc: "Миофасциальный (скульптурный) массаж лица в Праге 4. Глубокая работа с фасциями, укрепление овала — 45 минут, 1 300 Kč.",
      ogTitle: "Миофасциальный массаж лица Прага | Massage 4 Beauty",
      ogDesc: "Миофасциальный (скульптурный) массаж лица в Праге 4. Глубокая работа с фасциями, укрепление овала — 45 минут, 1 300 Kč."
    }
  },

  schema: {
    name: 'Myofasciální masáž obličeje',
    alternateName: ['Fasciální masáž obličeje', 'Myofasciální masáž'],
    serviceType: 'Myofasciální masáž obličeje',
    description: 'Hluboká myofasciální masáž obličeje pracující s fasciemi a mimickými svaly. Uvolňuje napětí, zpevňuje ovál obličeje a vyhlazuje mimické vrásky.'
  },

  strings: {
    cs: {
      crumb: 'Myofasciální masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Myofasciální masáž obličeje Praha',
      lead: 'Hluboká práce s fasciemi — vazivovými obaly svalů, které drží obličej ve stažení. Nejúčinnější technika, pokud chcete zpevnit ovál a rozpustit letité napětí.',
      photoAlt: 'Myofasciální masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Myofasciální masáž obličeje — práce s hlubokými vrstvami.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je myofasciální masáž obličeje',
      what: [
        'Fascie je tenký vazivový obal, který obaluje každý sval v těle — obličej nevyjímaje. Když se fascie stáhne stresem, špatným držením hlavy nebo zatnutou čelistí, začne táhnout svaly a kůži směrem dolů. Žádný krém tuto vrstvu neovlivní, protože leží hluboko pod pletí.',
        'Myofasciální masáž obličeje pracuje právě zde. Pomalým, hlubokým a setrvalým tlakem se fascie postupně uvolní a vrátí do původní délky. Rysy se narovnají, ovál se zpevní a mimické vrásky se vyhladí zevnitř — ne vyplněním, ale uvolněním.'
      ],

      h2How: 'Jak fasciální masáž probíhá',
      steps: [
        { t: 'Vyšetření napětí', d: 'Nahmatám, kde jsou fascie nejvíce stažené — nejčastěji čelist, spánky a čelo.' },
        { t: 'Uvolnění krku a šíje', d: 'Fascie obličeje navazuje na krční. Bez uvolnění krku by výsledek nevydržel.' },
        { t: 'Hluboká fasciální práce', d: 'Pomalý setrvalý tlak, který drží, dokud tkáň sama nepovolí. Nespěchá se.' },
        { t: 'Vyrovnání a zklidnění', d: 'Závěrečné tahy srovnají tkáň a zklidní pleť. Občas je zarudlá, do hodiny odezní.' }
      ],

      h2Effects: 'Účinky myofasciální masáže',
      effects: [
        'viditelné zpevnění oválu obličeje',
        'vyhlazení vrásek mezi obočím a na čele',
        'uvolnění zatnuté čelisti a úleva při bruxismu',
        'narovnání asymetrie způsobené jednostranným napětím',
        'zlepšení držení hlavy a uvolnění šíje',
        'dlouhodobější efekt než u povrchových masáží'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Myofasciální masáž obličeje je ideální, pokud zatínáte zuby, trpíte bolestmi čelistního kloubu, sedíte dlouho u počítače nebo vám povoluje ovál obličeje. Vhodná je i pro klienty, kterým klasická masáž obličeje nestačí a chtějí hlubší práci.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní zánět nebo poranění v obličeji',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'akutní potíže s čelistním kloubem v léčbě',
        'horečka a akutní onemocnění',
        'onkologické onemocnění v aktivní léčbě'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena myofasciální masáže obličeje',
      priceName: 'Myofasciální masáž obličeje',
      priceDesc: 'Hluboká práce s fasciemi obličeje, krku a šíje. Cena je konečná — nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Bolí myofasciální masáž obličeje?', a: 'Tlak je hlubší než u klasické masáže a v místech největšího napětí může být chvíli nepříjemný. Nikdy ale nepřekračujeme hranici, kterou snesete — stačí říct.' },
        { q: 'Jak se liší fasciální masáž od klasické masáže obličeje?', a: 'Klasická masáž pracuje s kůží a povrchovými svaly a hodně prokrvuje. Myofasciální jde hlouběji, do vazivových obalů svalů, a proto drží výsledek déle.' },
        { q: 'Kolik masáží je potřeba?', a: 'První změnu ucítíte hned, ale fascie se přestavuje pomalu. Doporučuji sérii 6 až 8 masáží po týdnu, pak udržovací masáž jednou měsíčně.' },
        { q: 'Může být po masáži pleť zarudlá?', a: 'Ano, mírné zarudnutí je běžné a je známkou prokrvení. Odezní zpravidla do jedné hodiny.' },
        { q: 'Pomůže masáž při bruxismu?', a: 'Uvolnění žvýkacích svalů a fascií kolem čelisti bývá velmi úlevné. Masáž ale neřeší příčinu — kombinujte ji s péčí u zubního lékaře.' }
      ],

      h2Book: 'Objednejte se na myofasciální masáž',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Myofascial facial massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Myofascial Facial Massage in Prague',
      lead: 'Deep work with the fascia — the connective tissue wrapping every muscle and holding the face in contraction. The most effective technique if you want to firm the jawline and dissolve years of held tension.',
      photoAlt: 'Myofascial facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Myofascial facial massage — working the deeper layers.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What myofascial facial massage is',
      what: [
        'Fascia is a thin sheet of connective tissue wrapping every muscle in the body, the face included. When it contracts through stress, poor head posture or a clenched jaw, it starts pulling muscle and skin downward. No cream reaches this layer, because it sits deep beneath the skin.',
        'Myofascial facial massage works exactly there. Slow, deep, sustained pressure lets the fascia gradually release and return to its original length. Features straighten, the jawline firms, and expression lines soften from within — not by filling, but by releasing.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Mapping the tension', d: 'I feel out where the fascia is most contracted — usually the jaw, temples and forehead.' },
        { t: 'Releasing neck and nape', d: 'Facial fascia connects to the neck. Without releasing the neck, the result would not hold.' },
        { t: 'Deep fascial work', d: 'Slow sustained pressure, held until the tissue releases by itself. It is never rushed.' },
        { t: 'Smoothing and settling', d: 'Closing strokes even out the tissue and calm the skin. Slight redness passes within the hour.' }
      ],

      h2Effects: 'What myofascial massage does',
      effects: [
        'visibly firmer jawline and facial contour',
        'softens lines between the brows and across the forehead',
        'releases a clenched jaw and eases bruxism',
        'evens out asymmetry caused by one-sided tension',
        'improves head posture and frees the nape',
        'holds its result longer than surface massage'
      ],

      h2Who: 'Who it suits',
      who: 'Myofascial facial massage is ideal if you clench your teeth, suffer jaw joint pain, sit at a computer for long hours, or your facial contour is softening. It also suits clients for whom a classic facial massage is not enough and who want deeper work.',
      h3Contra: 'When we do not massage',
      contra: [
        'acute inflammation or injury to the face',
        'recent fillers or botox (wait 2–3 weeks)',
        'acute jaw joint problems under treatment',
        'fever and acute illness',
        'cancer under active treatment'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of myofascial facial massage',
      priceName: 'Myofascial facial massage',
      priceDesc: 'Deep work on the fascia of face, neck and nape. The price is final — we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Does myofascial facial massage hurt?', a: 'The pressure is deeper than a classic massage and can be briefly uncomfortable where tension is greatest. We never go past what you can take — just say the word.' },
        { q: 'How does it differ from a classic facial massage?', a: 'A classic massage works the skin and surface muscles and brings a lot of circulation. Myofascial goes deeper, into the connective sheaths around the muscles, which is why the result lasts longer.' },
        { q: 'How many sessions do I need?', a: 'You will feel a change straight away, but fascia remodels slowly. I recommend a course of 6 to 8 weekly sessions, then one maintenance massage a month.' },
        { q: 'Can my skin be red afterwards?', a: 'Yes, mild redness is common and is a sign of circulation. It usually passes within an hour.' },
        { q: 'Does it help with bruxism?', a: 'Releasing the chewing muscles and the fascia around the jaw is usually a great relief. The massage does not treat the cause though — combine it with dental care.' }
      ],

      h2Book: 'Book your myofascial massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Миофасциальный массаж лица',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Миофасциальный массаж лица в Праге',
      lead: 'Глубокая работа с фасциями — соединительными оболочками мышц, которые держат лицо в стянутом состоянии. Самая действенная техника, если нужно укрепить овал и растворить многолетнее напряжение.',
      photoAlt: 'Миофасциальный массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Миофасциальный массаж лица — работа с глубокими слоями.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое миофасциальный массаж лица',
      what: [
        'Фасция — это тонкая соединительная оболочка, которая обволакивает каждую мышцу тела, включая лицо. Когда она стягивается от стресса, неправильного положения головы или сжатой челюсти, она начинает тянуть мышцы и кожу вниз. Ни один крем не достаёт до этого слоя, потому что он лежит глубоко под кожей.',
        'Миофасциальный массаж лица работает именно там. Медленное, глубокое и удерживаемое давление позволяет фасции постепенно расслабиться и вернуться к исходной длине. Черты выпрямляются, овал укрепляется, а мимические морщины разглаживаются изнутри — не заполнением, а расслаблением.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Оценка напряжения', d: 'Прощупываю, где фасции стянуты сильнее всего — чаще всего челюсть, виски и лоб.' },
        { t: 'Расслабление шеи и затылка', d: 'Фасция лица связана с шейной. Без работы с шеей результат не удержится.' },
        { t: 'Глубокая фасциальная работа', d: 'Медленное удерживаемое давление, пока ткань сама не отпустит. Спешки нет.' },
        { t: 'Выравнивание и отдых', d: 'Завершающие движения выравнивают ткань и успокаивают кожу. Лёгкое покраснение проходит за час.' }
      ],

      h2Effects: 'Эффект миофасциального массажа',
      effects: [
        'заметное укрепление овала лица',
        'разглаживание морщин между бровями и на лбу',
        'расслабление сжатой челюсти и облегчение при бруксизме',
        'выравнивание асимметрии от одностороннего напряжения',
        'улучшение положения головы и расслабление шеи',
        'более стойкий результат, чем у поверхностных массажей'
      ],

      h2Who: 'Кому подходит',
      who: 'Миофасциальный массаж лица идеален, если вы сжимаете зубы, страдаете от боли в челюстном суставе, подолгу сидите за компьютером или замечаете, что овал лица поплыл. Подходит и тем, кому классического массажа лица уже недостаточно и хочется более глубокой работы.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'острое воспаление или травма лица',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'острые проблемы челюстного сустава в лечении',
        'высокая температура и острые заболевания',
        'онкологическое заболевание в активном лечении'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена миофасциального массажа лица',
      priceName: 'Миофасциальный массаж лица',
      priceDesc: 'Глубокая работа с фасциями лица, шеи и затылка. Цена окончательная — мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Больно ли делать миофасциальный массаж лица?', a: 'Давление глубже, чем при классическом массаже, и в местах наибольшего напряжения может быть ненадолго неприятно. Но мы никогда не переходим границу, которую вы готовы вытерпеть — достаточно сказать.' },
        { q: 'Чем он отличается от классического массажа лица?', a: 'Классический массаж работает с кожей и поверхностными мышцами и сильно улучшает кровоток. Миофасциальный идёт глубже, в соединительные оболочки мышц, поэтому результат держится дольше.' },
        { q: 'Сколько нужно сеансов?', a: 'Первые изменения почувствуете сразу, но фасция перестраивается медленно. Рекомендую курс из 6–8 еженедельных сеансов, затем поддерживающий массаж раз в месяц.' },
        { q: 'Может ли кожа покраснеть после массажа?', a: 'Да, лёгкое покраснение — это нормально и говорит о притоке крови. Обычно проходит в течение часа.' },
        { q: 'Помогает ли массаж при бруксизме?', a: 'Расслабление жевательных мышц и фасций вокруг челюсти обычно приносит большое облегчение. Но массаж не устраняет причину — сочетайте его с наблюдением у стоматолога.' }
      ],

      h2Book: 'Запишитесь на миофасциальный массаж',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
