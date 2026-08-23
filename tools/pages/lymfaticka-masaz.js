/* Lymfatická masáž (těla) — keywords: lymfatická masáž (praha, praha 4),
   ruční / manuální lymfatická masáž, lymfodrenáž, lymfatická masáž celého těla,
   nohou, břicha, cena, účinky, co je, jak probíhá, nežádoucí účinky, těhotenství */
module.exports = {
  slug: 'lymfaticka-masaz',
  kind: 'service',
  group: 'body',
  price: 1500,
  minutes: 60,
  related: ['lymfaticka-masaz-obliceje', 'masaz-celeho-tela', 'masaz-zad-a-sije', 'relaxacni-masaz'],

  meta: {
    cs: {
      title: 'Lymfatická masáž Praha 4 — ruční lymfodrenáž | Massage 4 Beauty',
      desc: 'Ruční lymfatická masáž v Praze 4. Lymfodrenáž celého těla, nohou i břicha — 60 minut za 1 500 Kč. Účinky, průběh a online rezervace.',
      ogTitle: 'Lymfatická masáž Praha 4 — ruční lymfodrenáž | Massage 4 Beauty',
      ogDesc: 'Ruční lymfatická masáž v Praze 4. Lymfodrenáž celého těla, nohou i břicha — 60 minut za 1 500 Kč.'
    },
    en: {
      title: "Lymphatic Drainage Massage Prague | Massage 4 Beauty",
      desc: "Manual lymphatic drainage massage in Prague 4. Full-body drainage for swelling and heavy legs — 60 minutes, 1,500 CZK.",
      ogTitle: "Lymphatic Drainage Massage Prague | Massage 4 Beauty",
      ogDesc: "Manual lymphatic drainage massage in Prague 4. Full-body drainage for swelling and heavy legs — 60 minutes, 1,500 CZK."
    },
    ru: {
      title: "Лимфодренажный массаж Прага | Massage 4 Beauty",
      desc: "Ручной лимфодренажный массаж в Праге 4. Дренаж всего тела при отёках и тяжести в ногах — 60 минут, 1 500 Kč.",
      ogTitle: "Лимфодренажный массаж Прага | Massage 4 Beauty",
      ogDesc: "Ручной лимфодренажный массаж в Праге 4. Дренаж всего тела при отёках и тяжести в ногах — 60 минут, 1 500 Kč."
    }
  },

  schema: {
    name: 'Lymfatická masáž (lymfodrenáž)',
    alternateName: ['Lymfodrenážní masáž', 'Ruční lymfatická masáž', 'Manuální lymfatická masáž'],
    serviceType: 'Lymfatická masáž',
    description: 'Ruční lymfatická masáž a lymfodrenáž celého těla, nohou a břicha. Jemná technika podporující odtok lymfy, snížení otoků a pocitu těžkých nohou.'
  },

  strings: {
    cs: {
      crumb: 'Lymfatická masáž',
      eyebrow: 'Masáž těla · Praha 4',
      h1: 'Lymfatická masáž Praha',
      lead: 'Ruční lymfodrenáž, která rozproudí lymfu, uleví od otoků a vrátí nohám lehkost. Jemná, pomalá a hluboce zklidňující — bez bolesti a bez přístrojů.',
      photoAlt: 'Ruční lymfatická masáž nohou ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Ruční lymfatická masáž ve studiu v Praze 4 — Nusle.',
      factDurationV: '60 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je lymfatická masáž',
      what: [
        'Lymfatická masáž — nazývaná také lymfodrenáž — je jemná ruční technika, která pomalými rytmickými pohyby podporuje přirozený odtok lymfy. Na rozdíl od klasické masáže se nepracuje silným tlakem do svalu. Působí se těsně pod kůží, kde vedou lymfatické cévy, takže masáž je příjemná a nebolestivá.',
        'Lymfa odvádí z tkání přebytečnou vodu a odpadní látky. Když se její tok zpomalí — dlouhým sezením, stáním, teplem nebo po úrazu — objevují se otoky, pocit těžkých nohou a unavená pleť. Manuální lymfatická masáž tento tok jemně nastartuje zpět.'
      ],

      h2How: 'Jak probíhá lymfatická masáž',
      steps: [
        { t: 'Krátká konzultace', d: 'Probereme váš zdravotní stav, případné otoky a cíl návštěvy. Zabere to pár minut.' },
        { t: 'Uvolnění mízních uzlin', d: 'Masáž vždy začíná na krku a v podklíčkové oblasti, aby měla lymfa kam odtékat.' },
        { t: 'Vlastní lymfodrenáž', d: 'Pomalé tahy směrem od končetin k srdci — nohy, břicho, paže podle vaší potřeby.' },
        { t: 'Zklidnění a pitný režim', d: 'Na závěr chvíli odpočíváte. Doporučuji vypít během dne alespoň dva litry vody.' }
      ],

      h2Effects: 'Účinky lymfatické masáže',
      effects: [
        'zmírnění otoků nohou, kotníků a břicha',
        'úleva od pocitu těžkých a unavených nohou',
        'podpora imunity a odvodu odpadních látek',
        'zlepšení vzhledu pokožky a zmírnění celulitidy',
        'rychlejší regenerace po sportu i po operaci',
        'hluboké zklidnění nervového systému a lepší spánek'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Lymfatická masáž celého těla se hodí všem, kdo dlouho sedí nebo stojí, trpí otoky nohou, chystají se na sezónu krátkých sukní nebo se zotavují ze sportovní zátěže. Oblíbená je i cílená lymfatická masáž nohou a lymfatická masáž břicha.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní zánět nebo horečka',
        'trombóza a záněty žil',
        'nádorové onemocnění v aktivní léčbě',
        'srdeční nebo ledvinové selhávání',
        'první trimestr těhotenství'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena lymfatické masáže',
      priceName: 'Lymfodrenážní masáž celého těla',
      priceDesc: 'Ruční lymfodrenáž, bez přístrojů. Cena je konečná — nejsme plátci DPH.',
      priceMin: '60 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Co je lymfatická masáž?', a: 'Lymfatická masáž — nazývaná také lymfodrenáž — je jemná ruční technika, která pomalými rytmickými pohyby podporuje přirozený odtok lymfy. Na rozdíl od klasické masáže se nepracuje silným tlakem do svalu. Působí se těsně pod kůží, kde vedou lymfatické cévy, takže masáž je příjemná a nebolestivá.' },
        { q: 'Jak často chodit na lymfatickou masáž?', a: 'Při otocích a pocitu těžkých nohou doporučuji sérii 5 až 10 masáží, ideálně jednou až dvakrát týdně. Pro udržení výsledku pak stačí jedna masáž měsíčně.' },
        { q: 'Má lymfatická masáž nežádoucí účinky?', a: 'U zdravého člověka je velmi šetrná. Po masáži se může objevit zvýšená potřeba močení, mírná únava nebo žízeň — to je přirozená reakce na rozproudění lymfy a během dne odezní.' },
        { q: 'Je lymfatická masáž vhodná v těhotenství?', a: 'Šetrná lymfatická masáž nohou v těhotenství často pomáhá při otocích, vždy je ale nutný předchozí souhlas vašeho lékaře. V prvním trimestru masáž neprovádím.' },
        { q: 'Jak se liší lymfatická masáž od klasické?', a: 'Klasická masáž pracuje hlouběji do svalu a prokrvuje. Lymfatická masáž je naopak velmi jemná, pomalá a vede lymfu k mízním uzlinám. Proto po ní nebolí svaly.' },
        { q: 'Mohu si rezervovat masáž online?', a: 'Ano. Vyplňte rezervační formulář na úvodní stránce nebo zavolejte na +420 721 761 411. Ozvu se zpravidla týž den.' }
      ],

      h2Book: 'Objednejte se na lymfatickou masáž',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže'
    },

    en: {
      crumb: 'Lymphatic massage',
      eyebrow: 'Body massage · Prague 4',
      h1: 'Lymphatic Massage in Prague',
      lead: 'Manual lymphatic drainage that gets the lymph moving, eases swelling and gives your legs their lightness back. Gentle, slow and deeply calming — no pain, no machines.',
      photoAlt: 'Manual lymphatic leg massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Manual lymphatic massage at the studio in Prague 4 — Nusle.',
      factDurationV: '60 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What lymphatic massage is',
      what: [
        'Lymphatic massage — also called lymphatic drainage — is a gentle manual technique that supports the natural flow of lymph through slow, rhythmic movements. Unlike a classic massage, it does not press firmly into the muscle. It works just beneath the skin, where the lymphatic vessels run, which makes it pleasant and pain-free.',
        'Lymph carries excess water and waste away from the tissues. When its flow slows down — through long hours of sitting or standing, heat, or after an injury — swelling, heavy legs and tired-looking skin follow. Manual lymphatic massage gently restarts that flow.'
      ],

      h2How: 'How the massage works',
      steps: [
        { t: 'A short consultation', d: 'We go through your health, any swelling and what you want from the visit. It takes a few minutes.' },
        { t: 'Opening the lymph nodes', d: 'The massage always begins at the neck and collarbone, so the lymph has somewhere to drain.' },
        { t: 'The drainage itself', d: 'Slow strokes from the limbs towards the heart — legs, abdomen and arms, as you need.' },
        { t: 'Settling and water', d: 'You rest for a moment at the end. I recommend drinking at least two litres of water during the day.' }
      ],

      h2Effects: 'What lymphatic massage does',
      effects: [
        'reduces swelling in the legs, ankles and abdomen',
        'relieves the feeling of heavy, tired legs',
        'supports immunity and the removal of waste products',
        'improves the look of the skin and softens cellulite',
        'speeds up recovery after sport and after surgery',
        'deeply calms the nervous system and improves sleep'
      ],

      h2Who: 'Who it suits',
      who: 'Full-body lymphatic massage suits anyone who sits or stands for long hours, has swollen legs, is heading into short-skirt season or is recovering from athletic strain. Targeted lymphatic massage of the legs and of the abdomen are just as popular.',
      h3Contra: 'When we do not massage',
      contra: [
        'acute inflammation or fever',
        'thrombosis and vein inflammation',
        'cancer under active treatment',
        'heart or kidney failure',
        'the first trimester of pregnancy'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of lymphatic massage',
      priceName: 'Full-body lymphatic drainage massage',
      priceDesc: 'Manual drainage, no machines. The price is final — we are not VAT payers.',
      priceMin: '60 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'What is lymphatic massage?', a: 'Lymphatic massage — also called lymphatic drainage — is a gentle manual technique that supports the natural flow of lymph through slow, rhythmic movements. Unlike a classic massage, it does not press firmly into the muscle. It works just beneath the skin, where the lymphatic vessels run, which makes it pleasant and pain-free.' },
        { q: 'How often should I come for lymphatic massage?', a: 'For swelling and heavy legs I recommend a course of 5 to 10 massages, ideally once or twice a week. One massage a month is then enough to hold the result.' },
        { q: 'Does lymphatic massage have side effects?', a: 'For a healthy person it is very gentle. Afterwards you may need to urinate more, feel mildly tired or thirsty — a natural response to the lymph getting moving, and it passes during the day.' },
        { q: 'Is lymphatic massage safe during pregnancy?', a: 'Gentle lymphatic massage of the legs often helps with swelling in pregnancy, but it always needs your doctor\'s approval first. I do not massage during the first trimester.' },
        { q: 'How does it differ from a classic massage?', a: 'A classic massage works deeper into the muscle and brings blood to the area. Lymphatic massage is the opposite — very gentle and slow, guiding lymph towards the lymph nodes. That is why your muscles are not sore afterwards.' },
        { q: 'Can I book online?', a: 'Yes. Fill in the booking form on the home page or call +420 721 761 411. I usually reply the same day.' }
      ],

      h2Book: 'Book your lymphatic massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other massages'
    },

    ru: {
      crumb: 'Лимфодренажный массаж',
      eyebrow: 'Массаж тела · Прага 4',
      h1: 'Лимфодренажный массаж в Праге',
      lead: 'Ручной лимфодренаж, который разгоняет лимфу, снимает отёки и возвращает ногам лёгкость. Мягкий, медленный и глубоко успокаивающий — без боли и без аппаратов.',
      photoAlt: 'Ручной лимфодренажный массаж ног в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Ручной лимфодренажный массаж в студии в Праге 4 — Нусле.',
      factDurationV: '60 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое лимфодренажный массаж',
      what: [
        'Лимфодренажный массаж — это мягкая ручная техника, которая медленными ритмичными движениями поддерживает естественный отток лимфы. В отличие от классического массажа здесь не работают с сильным давлением на мышцу. Воздействие идёт прямо под кожей, где проходят лимфатические сосуды, поэтому массаж приятный и безболезненный.',
        'Лимфа выводит из тканей лишнюю воду и продукты обмена. Когда её ток замедляется — от долгого сидения, стояния, жары или после травмы — появляются отёки, тяжесть в ногах и уставшая кожа. Ручной лимфодренаж мягко запускает этот ток заново.'
      ],

      h2How: 'Как проходит массаж',
      steps: [
        { t: 'Короткая консультация', d: 'Обсудим ваше состояние, отёки и цель визита. Это займёт несколько минут.' },
        { t: 'Раскрытие лимфоузлов', d: 'Массаж всегда начинается с шеи и подключичной области, чтобы лимфе было куда оттекать.' },
        { t: 'Сам лимфодренаж', d: 'Медленные движения от конечностей к сердцу — ноги, живот, руки по вашей потребности.' },
        { t: 'Отдых и питьевой режим', d: 'В конце вы немного отдыхаете. Рекомендую выпить в течение дня не менее двух литров воды.' }
      ],

      h2Effects: 'Эффект лимфодренажного массажа',
      effects: [
        'уменьшение отёков ног, лодыжек и живота',
        'облегчение тяжести и усталости в ногах',
        'поддержка иммунитета и вывода продуктов обмена',
        'улучшение состояния кожи и уменьшение целлюлита',
        'более быстрое восстановление после спорта и операций',
        'глубокое успокоение нервной системы и лучший сон'
      ],

      h2Who: 'Кому подходит',
      who: 'Лимфодренажный массаж всего тела подходит всем, кто подолгу сидит или стоит, страдает от отёков ног, готовится к сезону коротких юбок или восстанавливается после спортивных нагрузок. Популярен и точечный лимфодренаж ног или живота.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'острое воспаление или высокая температура',
        'тромбоз и воспаление вен',
        'онкологическое заболевание в активном лечении',
        'сердечная или почечная недостаточность',
        'первый триместр беременности'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена лимфодренажного массажа',
      priceName: 'Лимфодренажный массаж всего тела',
      priceDesc: 'Ручной лимфодренаж, без аппаратов. Цена окончательная — мы не плательщики НДС.',
      priceMin: '60 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Что такое лимфодренажный массаж?', a: 'Лимфодренажный массаж — это мягкая ручная техника, которая медленными ритмичными движениями поддерживает естественный отток лимфы. В отличие от классического массажа здесь не работают с сильным давлением на мышцу. Воздействие идёт прямо под кожей, где проходят лимфатические сосуды, поэтому массаж приятный и безболезненный.' },
        { q: 'Как часто ходить на лимфодренажный массаж?', a: 'При отёках и тяжести в ногах рекомендую курс из 5–10 сеансов, оптимально один-два раза в неделю. Для поддержания результата затем достаточно одного массажа в месяц.' },
        { q: 'Есть ли у лимфодренажа побочные эффекты?', a: 'У здорового человека он очень щадящий. После массажа возможны учащённое мочеиспускание, лёгкая усталость или жажда — это естественная реакция на движение лимфы, она проходит в течение дня.' },
        { q: 'Можно ли лимфодренажный массаж при беременности?', a: 'Щадящий лимфодренаж ног при беременности часто помогает при отёках, но всегда требуется предварительное согласие вашего врача. В первом триместре массаж не провожу.' },
        { q: 'Чем он отличается от классического массажа?', a: 'Классический массаж работает глубже в мышце и усиливает кровоток. Лимфодренажный, наоборот, очень мягкий и медленный, он ведёт лимфу к лимфоузлам. Поэтому после него не болят мышцы.' },
        { q: 'Можно ли записаться онлайн?', a: 'Да. Заполните форму записи на главной странице или позвоните по номеру +420 721 761 411. Обычно отвечаю в тот же день.' }
      ],

      h2Book: 'Запишитесь на лимфодренажный массаж',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи'
    }
  }
};
