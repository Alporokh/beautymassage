/* Masáž zad a šíje. Keywords: masáž zad (praha, cena), masáž zad a šíje (cena),
   kolik stojí masáž zad, hloubková masáž zad, hloubková masáž praha,
   jak často chodit na masáž zad */
module.exports = {
  slug: 'masaz-zad-a-sije',
  hero: '15-masaz-zad-a-sije-photo.webp',
  heroW: 1920,
  heroH: 823,
  kind: 'service',
  group: 'body',
  price: 700,
  minutes: 30,
  related: ['masaz-celeho-tela', 'relaxacni-masaz', 'lymfaticka-masaz', 'masaz-obliceje'],

  meta: {
    cs: {
      title: 'Masáž zad a šíje Praha — cena 700 Kč / 30 min | Massage 4 Beauty',
      desc: 'Hloubková masáž zad a šíje v Praze 4. Úleva od bolesti zad od sezení u počítače — 30 minut za 700 Kč. Kolik stojí, jak často chodit a online rezervace.',
      ogTitle: 'Masáž zad a šíje Praha | Massage 4 Beauty',
      ogDesc: 'Hloubková masáž zad a šíje v Praze 4 — úleva od ztuhlých ramen. 700 Kč za 30 minut.'
    },
    en: {
      title: "Back Massage Prague — deep tissue | Massage 4 Beauty",
      desc: "Back and neck massage in Prague 4. Deep tissue relief for desk-work tension between the shoulder blades — 30 minutes, 700 CZK.",
      ogTitle: "Back Massage Prague — deep tissue | Massage 4 Beauty",
      ogDesc: "Back and neck massage in Prague 4. Deep tissue relief for desk-work tension between the shoulder blades — 30 minutes, 700 CZK."
    },
    ru: {
      title: "Массаж спины Прага — спина и шея | Massage 4 Beauty",
      desc: "Массаж спины и шеи в Праге 4. Глубокая проработка напряжения от сидячей работы — 30 минут, 700 Kč. Запись онлайн.",
      ogTitle: "Массаж спины Прага — спина и шея | Massage 4 Beauty",
      ogDesc: "Массаж спины и шеи в Праге 4. Глубокая проработка напряжения от сидячей работы — 30 минут, 700 Kč. Запись онлайн."
    }
  },

  schema: {
    name: 'Masáž zad a šíje',
    alternateName: ['Masáž zad', 'Hloubková masáž zad', 'Masáž šíje'],
    serviceType: 'Masáž zad a šíje',
    description: 'Hloubková masáž zad, šíje a ramen zaměřená na uvolnění svalového napětí ze sedavého zaměstnání a úlevu od bolesti zad.'
  },

  strings: {
    cs: {
      crumb: 'Masáž zad a šíje',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Masáž zad a šíje Praha',
      lead: 'Cílená hloubková masáž tam, kde to bolí nejvíc — mezi lopatkami, v ramenou a v krční páteři. Nejrychlejší úleva od dne stráveného u počítače.',
      photoAlt: 'Hloubková masáž zad a šíje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Masáž zad a šíje — práce s trapézovým svalem a mezilopatkovou oblastí.',
      factDurationV: '30 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je masáž zad a šíje',
      what: [
        'Masáž zad a šíje je cílená hloubková masáž zaměřená na horní část zad, ramena a krční páteř. Právě tady se drží napětí ze sedavého zaměstnání: hlava předsunutá k monitoru, ramena zvednutá ke stresu, lopatky bez pohybu. Sval v takovém stavu přestává být prokrvený a začne bolet.',
        'Při masáži pracuji s trapézovým svalem, mezilopatkovou oblastí a úpony na krční páteři. Tlak je hlubší než u relaxační masáže — cílem není uspat, ale skutečně rozpustit ztvrdlá místa. Nejde o příjemné hlazení, ale úleva bývá okamžitá.'
      ],

      h2How: 'Jak masáž zad probíhá',
      steps: [
        { t: 'Krátká konzultace', d: 'Řeknete mi, kde to bolí nejvíc a jestli bolest vystřeluje do hlavy nebo rukou.' },
        { t: 'Prohřátí a rozmasírování', d: 'Nejprve rozehřeji celou plochu zad, aby sval nebyl na hluboký tlak nepřipravený.' },
        { t: 'Hloubková práce', d: 'Cílený tlak na ztvrdlá místa a spouštěcí body. Tady se rozhoduje o výsledku.' },
        { t: 'Protažení a zklidnění', d: 'Závěrečné protažení šíje a uklidňující tahy podél páteře.' }
      ],

      h2Effects: 'Účinky masáže zad a šíje',
      effects: [
        'úleva od bolesti mezi lopatkami a v ramenou',
        'uvolnění ztuhlé krční páteře a lepší otáčení hlavy',
        'zmírnění bolestí hlavy vycházejících ze šíje',
        'lepší prokrvení přetížených svalů',
        'uvolnění napětí nahromaděného ze stresu',
        'okamžitá úleva už po jediné masáži'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž zad a šíje je ideální, pokud sedíte celý den u počítače, budíte se s tuhou šíjí, cítíte pálení mezi lopatkami nebo vás bolí hlava od krku. Vyhledávají ji i řidiči, kadeřnice a všichni, kdo pracují dlouho v jedné poloze.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní výhřez ploténky nebo vystřelující bolest do končetiny',
        'akutní zánět, horečka nebo infekční onemocnění',
        'čerstvé poranění, otevřené rány nebo modřiny v místě masáže',
        'trombóza a záněty žil',
        'onkologické onemocnění v aktivní léčbě'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže zad a šíje',
      priceName: 'Masáž zad a šíje',
      priceDesc: 'Cílená hloubková masáž horní části zad, ramen a šíje. Cena je konečná — nejsme plátci DPH.',
      priceMin: '30 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kolik stojí masáž zad?', a: 'Masáž zad a šíje stojí 700 Kč za 30 minut. Pokud chcete propracovat i dolní část zad, doporučuji rovnou masáž celého těla za 1 300 Kč.' },
        { q: 'Jak často chodit na masáž zad?', a: 'Při sedavém zaměstnání a trvalém napětí je ideální jednou za dva až tři týdny. Pokud vás záda akutně bolí, začněte sérií jednou týdně po dobu měsíce.' },
        { q: 'Bolí hloubková masáž zad?', a: 'Tlak na ztvrdlá místa může být nepříjemný, ale nikdy nesmí být ostrý ani vyrážet dech. Intenzitu průběžně ladíme — stačí říct.' },
        { q: 'Můžu být po masáži rozbolavělý?', a: 'Ano, den po hloubkové masáži mohou být svaly citlivé podobně jako po cvičení. Do dvou dnů to odezní. Pomůže teplo a dostatek vody.' },
        { q: 'Pomůže masáž na bolesti hlavy?', a: 'Pokud bolest vychází z napětí v šíji a trapézech, velmi často ano. U migrén nebo jiných příčin masáž nepomůže — poraďte se s lékařem.' }
      ],

      h2Book: 'Objednejte se na masáž zad',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Back and neck massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Back and Neck Massage in Prague',
      lead: 'Targeted deep massage exactly where it hurts most — between the shoulder blades, in the shoulders and along the cervical spine. The fastest relief from a day spent at a computer.',
      photoAlt: 'Deep back and neck massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Back and neck massage — working the trapezius and the area between the shoulder blades.',
      factDurationV: '30 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What back and neck massage is',
      what: [
        'Back and neck massage is a targeted deep massage focused on the upper back, shoulders and cervical spine. This is exactly where the tension of desk work settles: head pushed forward towards the monitor, shoulders raised by stress, shoulder blades that never move. A muscle held that way loses its circulation and starts to hurt.',
        'During the massage I work the trapezius, the area between the shoulder blades and the attachments along the cervical spine. The pressure is deeper than in a relaxation massage — the aim is not to send you to sleep but to genuinely dissolve the hardened spots. It is not gentle stroking, but the relief is usually immediate.'
      ],

      h2How: 'How the massage works',
      steps: [
        { t: 'A short consultation', d: 'You tell me where it hurts most and whether the pain shoots into your head or arms.' },
        { t: 'Warming the tissue', d: 'First I warm the whole back, so the muscle is not caught unprepared by deep pressure.' },
        { t: 'The deep work', d: 'Targeted pressure on hardened spots and trigger points. This is what decides the result.' },
        { t: 'Stretching and settling', d: 'A closing stretch of the neck and calming strokes along the spine.' }
      ],

      h2Effects: 'What back and neck massage does',
      effects: [
        'relieves pain between the shoulder blades and in the shoulders',
        'frees a stiff neck and improves head rotation',
        'eases headaches originating in the neck',
        'restores circulation to overloaded muscles',
        'releases tension accumulated through stress',
        'immediate relief after a single massage'
      ],

      h2Who: 'Who it suits',
      who: 'Back and neck massage is ideal if you sit at a computer all day, wake with a stiff neck, feel burning between the shoulder blades, or get headaches coming from the neck. It is also sought out by drivers, hairdressers and anyone who works long hours in one position.',
      h3Contra: 'When we do not massage',
      contra: [
        'acute disc herniation or pain shooting into a limb',
        'acute inflammation, fever or infectious illness',
        'fresh injury, open wounds or bruising in the area',
        'thrombosis and vein inflammation',
        'cancer under active treatment'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of back and neck massage',
      priceName: 'Back and neck massage',
      priceDesc: 'Targeted deep massage of the upper back, shoulders and neck. The price is final — we are not VAT payers.',
      priceMin: '30 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How much does a back massage cost?', a: 'Back and neck massage is 700 CZK for 30 minutes. If you also want the lower back worked, I recommend the full-body massage at 1,300 CZK instead.' },
        { q: 'How often should I have a back massage?', a: 'With desk work and constant tension, once every two to three weeks is ideal. If your back hurts acutely, start with a weekly course for a month.' },
        { q: 'Does deep back massage hurt?', a: 'Pressure on hardened spots can be uncomfortable, but it must never be sharp or take your breath away. We tune the intensity as we go — just say the word.' },
        { q: 'Can I be sore afterwards?', a: 'Yes, the day after a deep massage the muscles can feel tender, much like after exercise. It passes within two days. Warmth and plenty of water help.' },
        { q: 'Will it help my headaches?', a: 'If the pain comes from tension in the neck and trapezius, very often yes. For migraines or other causes a massage will not help — consult your doctor.' }
      ],

      h2Book: 'Book your back massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Массаж спины и шеи',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Массаж спины и шеи в Праге',
      lead: 'Точечный глубокий массаж именно там, где болит сильнее всего — между лопатками, в плечах и в шейном отделе. Самое быстрое облегчение после дня за компьютером.',
      photoAlt: 'Глубокий массаж спины и шеи в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Массаж спины и шеи — работа с трапециевидной мышцей и межлопаточной областью.',
      factDurationV: '30 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое массаж спины и шеи',
      what: [
        'Массаж спины и шеи — это точечный глубокий массаж верхней части спины, плеч и шейного отдела. Именно здесь оседает напряжение сидячей работы: голова выдвинута к монитору, плечи подняты от стресса, лопатки без движения. Мышца в таком состоянии перестаёт получать кровь и начинает болеть.',
        'Во время массажа я работаю с трапециевидной мышцей, межлопаточной областью и креплениями вдоль шейного отдела. Давление глубже, чем при релаксирующем массаже: цель не усыпить, а действительно растворить затвердевшие участки. Это не приятное поглаживание, но облегчение обычно наступает сразу.'
      ],

      h2How: 'Как проходит массаж',
      steps: [
        { t: 'Короткая консультация', d: 'Вы говорите, где болит сильнее всего и отдаёт ли боль в голову или руки.' },
        { t: 'Разогрев тканей', d: 'Сначала разогреваю всю спину, чтобы мышца не оказалась не готова к глубокому давлению.' },
        { t: 'Глубокая работа', d: 'Точечное давление на затвердевшие участки и триггерные точки. Здесь решается результат.' },
        { t: 'Растяжение и отдых', d: 'Завершающее растяжение шеи и успокаивающие движения вдоль позвоночника.' }
      ],

      h2Effects: 'Эффект массажа спины и шеи',
      effects: [
        'облегчение боли между лопатками и в плечах',
        'расслабление скованной шеи и лучший поворот головы',
        'уменьшение головных болей, идущих от шеи',
        'восстановление кровотока в перегруженных мышцах',
        'снятие напряжения, накопленного от стресса',
        'мгновенное облегчение уже после одного сеанса'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж спины и шеи идеален, если вы весь день сидите за компьютером, просыпаетесь со скованной шеей, чувствуете жжение между лопатками или у вас болит голова от шеи. Его выбирают и водители, парикмахеры и все, кто подолгу работает в одной позе.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'острая грыжа диска или боль, отдающая в конечность',
        'острое воспаление, высокая температура или инфекция',
        'свежая травма, открытые раны или синяки в зоне массажа',
        'тромбоз и воспаление вен',
        'онкологическое заболевание в активном лечении'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа спины и шеи',
      priceName: 'Массаж спины и шеи',
      priceDesc: 'Точечный глубокий массаж верхней части спины, плеч и шеи. Цена окончательная — мы не плательщики НДС.',
      priceMin: '30 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько стоит массаж спины?', a: 'Массаж спины и шеи стоит 700 Kč за 30 минут. Если нужно проработать и поясницу, рекомендую сразу массаж всего тела за 1 300 Kč.' },
        { q: 'Как часто ходить на массаж спины?', a: 'При сидячей работе и постоянном напряжении оптимально раз в две-три недели. Если спина болит остро, начните с курса раз в неделю в течение месяца.' },
        { q: 'Больно ли делать глубокий массаж спины?', a: 'Давление на затвердевшие участки может быть неприятным, но никогда не должно быть острым или перехватывать дыхание. Интенсивность настраиваем по ходу — достаточно сказать.' },
        { q: 'Может ли после массажа болеть?', a: 'Да, на следующий день мышцы могут быть чувствительными, как после тренировки. Проходит за два дня. Помогают тепло и достаточное количество воды.' },
        { q: 'Поможет ли массаж от головной боли?', a: 'Если боль идёт от напряжения в шее и трапециях — очень часто да. При мигрени или других причинах массаж не поможет, посоветуйтесь с врачом.' }
      ],

      h2Book: 'Запишитесь на массаж спины',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
