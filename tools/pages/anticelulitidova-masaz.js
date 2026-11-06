/* Anticelulitidová masáž. Keywords: anticelulitidová masáž praha,
   anticelulitidní masáž, masáž proti celulitidě, masáž stehen a hýždí

   Cena 1 500 Kč / 45 min podle ceníku v content.js. */
module.exports = {
  slug: 'anticelulitidova-masaz',
  hero: '22-anticelulitidova-masaz-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'body',
  price: 1500,
  minutes: 45,
  related: ['vakuova-masaz-tela', 'medova-masaz', 'lymfaticka-masaz', 'sportovni-masaz'],

  meta: {
    cs: {
      title: 'Anticelulitidová masáž Praha - 1 500 Kč | Massage 4 Beauty',
      desc: 'Anticelulitidová masáž v Praze 4. Intenzivní práce na problémových partiích zlepšuje prokrvení a zpevňuje pokožku. 45 minut za 1 500 Kč, online rezervace.',
      ogTitle: 'Anticelulitidová masáž Praha | Massage 4 Beauty',
      ogDesc: 'Masáž problémových partií v Praze 4 - prokrvení a pevnější pokožka. 45 minut za 1 500 Kč.'
    },
    en: {
      title: 'Anti-Cellulite Massage Prague - 1 500 CZK | Massage 4 Beauty',
      desc: 'Anti-cellulite massage in Prague 4. Intensive work on problem areas improves circulation and firms the skin. 45 minutes, 1 500 CZK. Book online.',
      ogTitle: 'Anti-Cellulite Massage Prague | Massage 4 Beauty',
      ogDesc: 'Massage of problem areas in Prague 4 - better circulation and firmer skin. 45 minutes, 1 500 CZK.'
    },
    ru: {
      title: 'Антицеллюлитный массаж Прага - 1 500 Kč | Massage 4 Beauty',
      desc: 'Антицеллюлитный массаж в Праге 4. Интенсивная работа с проблемными зонами улучшает кровообращение и повышает упругость кожи. 45 минут, 1 500 Kč.',
      ogTitle: 'Антицеллюлитный массаж Прага | Massage 4 Beauty',
      ogDesc: 'Массаж проблемных зон в Праге 4 - кровообращение и упругая кожа. 45 минут, 1 500 Kč.'
    }
  },

  schema: {
    name: 'Anticelulitidová masáž',
    alternateName: ['Anticelulitidní masáž', 'Masáž proti celulitidě'],
    serviceType: 'Anticelulitidová masáž',
    description: 'Intenzivní ruční masáž problémových partií. Zlepšuje prokrvení, podporuje odbourávání tuku a zpevňuje pokožku.'
  },

  strings: {
    cs: {
      crumb: 'Anticelulitidová masáž',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Anticelulitidová masáž Praha',
      lead: 'Intenzivní práce na problémových partiích. Masáž zlepšuje prokrvení, podporuje odbourávání tuku a zpevňuje pokožku.',
      photoAlt: 'Anticelulitidová masáž nohou ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Anticelulitidová masáž - práce na nohou.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je anticelulitidová masáž',
      what: [
        'Anticelulitidová masáž je intenzivní ruční masáž zaměřená na partie, kde se celulitida drží nejčastěji - stehna, hýždě, boky a břicho. Hlubokými hnětacími a třecími hmaty rozproudí krev i lymfu v tkáni, kde je oběh pomalý.',
        'Pokožka se po masáži prokrví a zpevní a odteče zadržená voda. Celulitida nezmizí po jednom ošetření, viditelnou změnu přináší až série masáží spolu s pohybem a pitným režimem.'
      ],

      h2How: 'Jak masáž probíhá',
      steps: [
        { t: 'Krátká konzultace', d: 'Probereme, které partie vás trápí a jak intenzivní masáž snesete.' },
        { t: 'Prohřátí', d: 'Úvodními hmaty s olejem tkáň prohřeji a připravím na hlubší práci.' },
        { t: 'Intenzivní masáž', d: 'Hnětením a třením pracuji na stehnech, hýždích a dalších problémových partiích.' },
        { t: 'Lymfatické tahy', d: 'Závěrečné tahy směrem k lymfatickým uzlinám podpoří odtok tekutin.' }
      ],

      h2Effects: 'Účinky anticelulitidové masáže',
      effects: [
        'lepší prokrvení problémových partií',
        'pevnější a hladší pokožka',
        'podpora odbourávání tuku',
        'odtok zadržené vody a menší otoky',
        'lehčí nohy',
        'postupné zmírnění vzhledu celulitidy při sérii masáží'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Anticelulitidová masáž je pro každého, koho trápí celulitida, povolená pokožka nebo pocit těžkých nohou. Nejlépe funguje jako série a v kombinaci s pohybem, například spolu s vakuovou masáží těla.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'křečové žíly, záněty žil nebo trombóza',
        'kožní onemocnění, poranění nebo záněty v masírované oblasti',
        'horečka a akutní onemocnění',
        'těhotenství a kojení',
        'sklon k modřinám nebo užívání léků na ředění krve'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena anticelulitidové masáže',
      priceName: 'Anticelulitidová masáž',
      priceDesc: 'Intenzivní masáž problémových partií. Cena je konečná - nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Kolik masáží je potřeba?', a: 'Pro viditelný výsledek doporučuji sérii 8 až 10 masáží jednou až dvakrát týdně. Konkrétní plán probereme podle vaší pokožky.' },
        { q: 'Bolí anticelulitidová masáž?', a: 'Je intenzivní a v citlivých místech můžete cítit tlak. Sílu ale vždy přizpůsobím tak, aby byla snesitelná.' },
        { q: 'Mohou po masáži vzniknout modřiny?', a: 'U citlivé pokožky se mohou objevit drobné modřinky, zvlášť na začátku série. S dalšími masážemi obvykle mizí.' },
        { q: 'Odstraní masáž celulitidu natrvalo?', a: 'Ne. Masáž zlepší prokrvení a vzhled pokožky, ale výsledek je potřeba udržovat pohybem, pitným režimem a občasnou masáží.' }
      ],

      h2Book: 'Objednejte se na anticelulitidovou masáž',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže těla'
    },

    en: {
      crumb: 'Anti-Cellulite Massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Anti-Cellulite Massage in Prague',
      lead: 'Intensive work on problem areas. The massage improves circulation, stimulates fat breakdown and firms the skin.',
      photoAlt: 'Anti-cellulite leg massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Anti-cellulite massage - working on the legs.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What anti-cellulite massage is',
      what: [
        'Anti-cellulite massage is an intensive manual massage focused on the areas where cellulite most often settles - thighs, buttocks, hips and belly. Deep kneading and friction strokes get blood and lymph moving in tissue where circulation is slow.',
        'After the massage the skin is flushed and firmer, and retained water drains away. Cellulite does not disappear after one session; a visible change comes with a course of massages combined with exercise and enough water.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'A short consultation', d: 'We talk about which areas bother you and how intense a massage you are comfortable with.' },
        { t: 'Warm-up', d: 'Opening strokes with oil warm the tissue and prepare it for deeper work.' },
        { t: 'Intensive massage', d: 'Kneading and friction work on the thighs, buttocks and other problem areas.' },
        { t: 'Lymphatic strokes', d: 'Closing strokes towards the lymph nodes help drain fluid.' }
      ],

      h2Effects: 'What anti-cellulite massage does',
      effects: [
        'better circulation in problem areas',
        'firmer, smoother skin',
        'supports fat breakdown',
        'drains retained water and reduces swelling',
        'lighter legs',
        'gradually softer-looking cellulite over a course'
      ],

      h2Who: 'Who it suits',
      who: 'Anti-cellulite massage is for anyone bothered by cellulite, loose skin or heavy legs. It works best as a course and combined with exercise, for example alongside vacuum body massage.',
      h3Contra: 'When we do not massage',
      contra: [
        'varicose veins, phlebitis or thrombosis',
        'skin conditions, wounds or inflammation in the area to be massaged',
        'fever and acute illness',
        'pregnancy and breastfeeding',
        'a tendency to bruise or blood-thinning medication'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of anti-cellulite massage',
      priceName: 'Anti-Cellulite Massage',
      priceDesc: 'Intensive massage of problem areas. The price is final - we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How many sessions do I need?', a: 'For a visible result I recommend a course of 8 to 10 massages, once or twice a week. We will plan it based on your skin.' },
        { q: 'Does it hurt?', a: 'It is intensive and you may feel pressure in sensitive spots. I always adjust the strength so it stays bearable.' },
        { q: 'Can it cause bruises?', a: 'Sensitive skin may show small bruises, especially at the start of a course. They usually fade with further sessions.' },
        { q: 'Will it remove cellulite for good?', a: 'No. The massage improves circulation and the look of the skin, but the result needs to be kept up with exercise, enough water and an occasional massage.' }
      ],

      h2Book: 'Book your anti-cellulite massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other body massages'
    },

    ru: {
      crumb: 'Антицеллюлитный массаж',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Антицеллюлитный массаж в Праге',
      lead: 'Интенсивная работа с проблемными зонами. Массаж улучшает кровообращение, стимулирует расщепление жира и повышает упругость кожи.',
      photoAlt: 'Антицеллюлитный массаж ног в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Антицеллюлитный массаж - работа с ногами.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое антицеллюлитный массаж',
      what: [
        'Антицеллюлитный массаж - это интенсивный ручной массаж зон, где целлюлит появляется чаще всего: бёдер, ягодиц, боков и живота. Глубокие разминающие и растирающие движения ускоряют движение крови и лимфы там, где кровообращение замедлено.',
        'После массажа кожа наполняется кровью и становится плотнее, уходит лишняя жидкость. Целлюлит не исчезает после одной процедуры - заметный результат даёт курс массажа вместе с движением и питьевым режимом.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Короткая консультация', d: 'Обсуждаем, какие зоны вас беспокоят и насколько интенсивный массаж вам комфортен.' },
        { t: 'Разогрев', d: 'Вводными движениями с маслом прогреваю ткани и готовлю их к глубокой работе.' },
        { t: 'Интенсивный массаж', d: 'Разминанием и растиранием прорабатываю бёдра, ягодицы и другие проблемные зоны.' },
        { t: 'Лимфодренажные движения', d: 'Завершающие движения по направлению к лимфоузлам помогают оттоку жидкости.' }
      ],

      h2Effects: 'Эффект антицеллюлитного массажа',
      effects: [
        'улучшение кровообращения в проблемных зонах',
        'более упругая и гладкая кожа',
        'стимуляция расщепления жира',
        'отток лишней жидкости и меньше отёков',
        'лёгкость в ногах',
        'постепенное уменьшение проявлений целлюлита при курсе'
      ],

      h2Who: 'Кому подходит',
      who: 'Антицеллюлитный массаж подойдёт всем, кого беспокоят целлюлит, дряблая кожа или тяжесть в ногах. Лучше всего он работает курсом и в сочетании с движением, например вместе с вакуумным массажем тела.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'варикоз, флебит или тромбоз',
        'кожные заболевания, повреждения или воспаления в зоне массажа',
        'высокая температура и острые заболевания',
        'беременность и кормление грудью',
        'склонность к синякам или приём препаратов, разжижающих кровь'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена антицеллюлитного массажа',
      priceName: 'Антицеллюлитный массаж',
      priceDesc: 'Интенсивный массаж проблемных зон. Цена окончательная - мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Сколько процедур нужно?', a: 'Для заметного результата рекомендую курс из 8-10 процедур один-два раза в неделю. План составим с учётом вашей кожи.' },
        { q: 'Больно ли это?', a: 'Массаж интенсивный, и в чувствительных местах вы можете ощущать давление. Но силу я всегда подбираю так, чтобы было терпимо.' },
        { q: 'Могут ли появиться синяки?', a: 'На чувствительной коже возможны небольшие синячки, особенно в начале курса. С каждой следующей процедурой они обычно исчезают.' },
        { q: 'Уберёт ли массаж целлюлит навсегда?', a: 'Нет. Массаж улучшает кровообращение и вид кожи, но результат нужно поддерживать движением, питьевым режимом и периодическим массажем.' }
      ],

      h2Book: 'Запишитесь на антицеллюлитный массаж',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи тела'
    }
  }
};
