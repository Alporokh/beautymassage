/* Vakuová (baňková) masáž těla. Keywords: vakuová masáž těla praha,
   baňková masáž, baňkování zad, masáž baňkami proti celulitidě

   Cena 1 200 Kč / 45 min podle ceníku v content.js. */
module.exports = {
  slug: 'vakuova-masaz-tela',
  hero: '26-vakuova-masaz-tela-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 1200,
  minutes: 45,
  related: ['anticelulitidova-masaz', 'lymfaticka-masaz', 'sportovni-masaz', 'vakuova-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Baňková masáž těla Praha - 1 200 Kč | Massage 4 Beauty',
      desc: 'Baňková masáž těla v Praze 4. Baňky stimulují krevní a lymfatický oběh, zmírňují otoky a působí proti celulitidě. 45 minut za 1 200 Kč, online rezervace.',
      ogTitle: 'Baňková masáž těla Praha - 1 200 Kč | Massage 4 Beauty',
      ogDesc: 'Baňková masáž těla v Praze 4 - lepší oběh, méně otoků, péče proti celulitidě. 45 minut za 1 200 Kč.'
    },
    en: {
      title: 'Vacuum (Cupping) Body Massage Prague | Massage 4 Beauty',
      desc: 'Cupping body massage in Prague 4. Cups stimulate blood and lymph circulation, reduce swelling and help fight cellulite. 45 minutes, 1 200 CZK. Book online.',
      ogTitle: 'Vacuum (Cupping) Body Massage Prague | Massage 4 Beauty',
      ogDesc: 'Cupping body massage in Prague 4 - better circulation, less swelling, care against cellulite. 45 minutes, 1 200 CZK.'
    },
    ru: {
      title: 'Вакуумный (баночный) массаж тела Прага | Massage 4 Beauty',
      desc: 'Баночный массаж тела в Праге 4. Банки стимулируют крово- и лимфообращение, уменьшают отёки и помогают бороться с целлюлитом. 45 минут, 1 200 Kč. Запись онлайн.',
      ogTitle: 'Вакуумный (баночный) массаж тела Прага | Massage 4 Beauty',
      ogDesc: 'Баночный массаж тела в Праге 4 - лучшее кровообращение, меньше отёков, уход против целлюлита. 45 минут, 1 200 Kč.'
    }
  },

  schema: {
    name: 'Vakuová (baňková) masáž těla',
    alternateName: ['Baňková masáž', 'Baňkování', 'Cupping masáž'],
    serviceType: 'Vakuová masáž těla',
    description: 'Masáž těla baňkami. Aktivně stimuluje krevní a lymfatický oběh, zmírňuje otoky a působí proti celulitidě.'
  },

  strings: {
    cs: {
      crumb: 'Vakuová (baňková) masáž těla',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Baňková (vakuová) masáž těla Praha',
      lead: 'Baňky, které tkáň nasají a nadzvednou. Aktivně stimulují krevní a lymfatický oběh, zmírňují otoky a působí proti celulitidě.',
      photoAlt: 'Baňková masáž zad skleněnými baňkami ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Vakuová masáž těla - skleněné baňky na zádech.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je vakuová masáž těla',
      what: [
        'Vakuová, neboli baňková masáž pracuje s baňkami, které vytvoří podtlak a nasají pokožku i podkoží. Místo tlaku do hloubky tkáň nadzvedávají - uvolní tak vrstvy pod kůží a výrazně rozproudí krev i lymfu.',
        'Baňkami po naolejované pokožce plynule pohybuji, nebo je na chvíli nechám na místě, kde je napětí největší. Masáž se hodí na otoky, problémové partie s celulitidou i na ztuhlá záda.'
      ],

      h2How: 'Jak vakuová masáž probíhá',
      steps: [
        { t: 'Olej a prohřátí', d: 'Nanesu olej a krátkou ruční masáží partie prohřeji.' },
        { t: 'Práce s baňkami', d: 'Baňkami vedu plynulé tahy po směru toku lymfy. Sílu podtlaku přizpůsobím vaší citlivosti.' },
        { t: 'Cílená místa', d: 'Na ztuhlých nebo problémových partiích se baňkám věnuji déle.' },
        { t: 'Zklidnění', d: 'Závěrečné ruční hmaty pokožku zklidní a vyrovnají prokrvení.' }
      ],

      h2Effects: 'Účinky vakuové masáže těla',
      effects: [
        'výrazné prokrvení tkání',
        'lepší odtok lymfy',
        'zmírnění otoků',
        'péče proti celulitidě',
        'uvolnění ztuhlých svalů',
        'pevnější a hladší pokožka'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Vakuová masáž těla se hodí, pokud bojujete s otoky, těžkýma nohama nebo celulitidou, případně máte ztuhlá záda. Dobře doplňuje anticelulitidovou nebo lymfodrenážní masáž.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'křečové žíly nebo rozšířené žilky v masírované oblasti',
        'poruchy srážlivosti krve nebo léky na ředění krve',
        'poraněná, podrážděná nebo zanícená pokožka',
        'těhotenství',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena vakuové masáže těla',
      priceName: 'Vakuová (baňková) masáž těla',
      priceDesc: 'Masáž těla baňkami. Cena je konečná - nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Zůstanou mi po masáži stopy?', a: 'Může se to stát. Na těle, zejména na zádech, mohou baňky zanechat dočasné červené nebo fialové skvrny. Nebolí a během několika dní zmizí. Pokud se chystáte na akci s odhalenými zády, řekněte mi to a budu baňkami stále pohybovat.' },
        { q: 'Bolí baňková masáž?', a: 'Cítíte silné nasávání, ale bolet by neměla. Podtlak nastavím podle vás a můžeme ho kdykoli zeslabit.' },
        { q: 'Pomůže proti celulitidě?', a: 'Baňky podporují prokrvení a odtok lymfy, což vzhled celulitidy zmírňuje. Nejlepší výsledky přináší série masáží spolu s pohybem a pitným režimem.' },
        { q: 'Jak často masáž opakovat?', a: 'Pro viditelnou změnu se osvědčuje série několika masáží s odstupem několika dní. Plán probereme společně.' }
      ],

      h2Book: 'Objednejte se na vakuovou masáž těla',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Vacuum (Cupping) Body Massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Vacuum (Cupping) Body Massage in Prague',
      lead: 'Cups that draw the tissue up instead of pressing it down. They actively stimulate blood and lymph circulation, reduce swelling and help fight cellulite.',
      photoAlt: 'Cupping back massage with glass cups at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Vacuum body massage - glass cups on the back.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What vacuum body massage is',
      what: [
        'Vacuum, or cupping, massage uses cups that create suction and draw up the skin and the tissue beneath it. Rather than pressing deep, they lift the tissue - loosening the layers under the skin and strongly boosting blood and lymph flow.',
        'I glide the cups smoothly over oiled skin, or leave them in place for a moment where the tension is greatest. The massage suits swelling, problem areas with cellulite and a stiff back.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Oil and warming up', d: 'I apply oil and warm the area with a short manual massage.' },
        { t: 'Working with the cups', d: 'The cups follow smooth strokes in the direction of lymph flow. I adjust the suction to your sensitivity.' },
        { t: 'Targeted areas', d: 'I spend longer with the cups on stiff or problem areas.' },
        { t: 'Settling', d: 'Closing manual strokes calm the skin and even out the flush.' }
      ],

      h2Effects: 'What vacuum body massage does',
      effects: [
        'strongly improved circulation',
        'better lymph flow',
        'less swelling',
        'care against cellulite',
        'release of stiff muscles',
        'firmer, smoother skin'
      ],

      h2Who: 'Who it suits',
      who: 'Vacuum body massage suits you if you deal with swelling, heavy legs or cellulite, or have a stiff back. It works well alongside an anti-cellulite or lymphatic drainage massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'varicose veins or broken capillaries in the treated area',
        'blood clotting disorders or blood thinners',
        'injured, irritated or inflamed skin',
        'pregnancy',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of vacuum body massage',
      priceName: 'Vacuum (Cupping) Body Massage',
      priceDesc: 'Body massage with cups. The price is final - we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Will it leave marks?', a: 'It can. On the body, especially the back, cups may leave temporary red or purple marks. They do not hurt and fade within a few days. If you have an event with a bare back coming up, tell me and I will keep the cups moving.' },
        { q: 'Does cupping massage hurt?', a: 'You feel a strong pull, but it should not hurt. I set the suction to suit you and can lower it at any time.' },
        { q: 'Does it help with cellulite?', a: 'Cups support circulation and lymph flow, which softens the look of cellulite. The best results come from a course of sessions combined with exercise and enough water.' },
        { q: 'How often should I repeat it?', a: 'For a visible change, a course of several sessions a few days apart works well. We will plan it together.' }
      ],

      h2Book: 'Book your vacuum body massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Вакуумный (баночный) массаж тела',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Вакуумный (баночный) массаж тела в Праге',
      lead: 'Банки, которые втягивают и приподнимают ткани, а не давят на них. Активно стимулируют крово- и лимфообращение, уменьшают отёки и помогают бороться с целлюлитом.',
      photoAlt: 'Баночный массаж спины стеклянными банками в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Вакуумный массаж тела - стеклянные банки на спине.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое вакуумный массаж тела',
      what: [
        'Вакуумный, или баночный, массаж выполняется банками, которые создают разрежение и втягивают кожу и подкожные ткани. Вместо давления вглубь они приподнимают ткани - расслабляют слои под кожей и заметно ускоряют движение крови и лимфы.',
        'Я плавно веду банки по коже с маслом или ненадолго оставляю их там, где напряжение сильнее всего. Массаж подходит при отёках, целлюлите на проблемных зонах и скованной спине.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Масло и разогрев', d: 'Наношу масло и разогреваю зону коротким ручным массажем.' },
        { t: 'Работа банками', d: 'Веду банки плавными движениями по ходу лимфотока. Силу вакуума подбираю под вашу чувствительность.' },
        { t: 'Проблемные зоны', d: 'Скованным или проблемным участкам уделяю больше времени.' },
        { t: 'Успокоение', d: 'Завершающие ручные движения успокаивают кожу и выравнивают прилив крови.' }
      ],

      h2Effects: 'Эффект вакуумного массажа тела',
      effects: [
        'активное кровообращение в тканях',
        'улучшение оттока лимфы',
        'меньше отёков',
        'уход против целлюлита',
        'расслабление скованных мышц',
        'более упругая и гладкая кожа'
      ],

      h2Who: 'Кому подходит',
      who: 'Вакуумный массаж тела подойдёт, если вас беспокоят отёки, тяжесть в ногах или целлюлит, а также скованность спины. Хорошо сочетается с антицеллюлитным или лимфодренажным массажем.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'варикоз или расширенные сосуды в зоне массажа',
        'нарушения свёртываемости крови или приём разжижающих препаратов',
        'повреждённая, раздражённая или воспалённая кожа',
        'беременность',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена вакуумного массажа тела',
      priceName: 'Вакуумный (баночный) массаж тела',
      priceDesc: 'Массаж тела банками. Цена окончательная - мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Останутся ли следы?', a: 'Могут. На теле, особенно на спине, банки иногда оставляют временные красные или фиолетовые пятна. Они не болят и проходят за несколько дней. Если впереди событие с открытой спиной, скажите мне, и я буду всё время двигать банки.' },
        { q: 'Больно ли это?', a: 'Вы чувствуете сильное втягивание, но боли быть не должно. Силу вакуума я подбираю под вас и могу уменьшить в любой момент.' },
        { q: 'Помогает ли он от целлюлита?', a: 'Банки улучшают кровообращение и отток лимфы, и целлюлит становится менее заметным. Лучший результат даёт курс процедур вместе с движением и достаточным питьём.' },
        { q: 'Как часто повторять массаж?', a: 'Для заметного эффекта хорошо работает курс из нескольких процедур с интервалом в несколько дней. План составим вместе.' }
      ],

      h2Book: 'Запишитесь на вакуумный массаж тела',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
