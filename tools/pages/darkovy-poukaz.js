/* Dárkový poukaz na masáž. Keywords: dárkový poukaz na masáž (praha),
   dárkový poukaz masáž, poukaz na masáž praha, masáž online rezervace

   kind: 'voucher' — renderer vynechá blok s cenou a délkou a použije factPriceV.
   price 600 = nejnižší cena v ceníku, slouží jako "od" v Offer schema. */
module.exports = {
  slug: 'darkovy-poukaz',
  heroCard: 'voucher',
  kind: 'voucher',
  group: 'other',
  price: 600,
  minutes: 0,
  related: ['masaz-obliceje', 'masaz-celeho-tela', 'relaxacni-masaz', 'lymfaticka-masaz'],

  meta: {
    cs: {
      title: 'Dárkový poukaz na masáž Praha — od 600 Kč | Massage 4 Beauty',
      desc: 'Dárkový poukaz na masáž v Praze 4. Vyberte masáž nebo částku, poukaz pošleme e-mailem do 24 hodin. Platnost 12 měsíců. Objednávka telefonem nebo online.',
      ogTitle: 'Dárkový poukaz na masáž Praha | Massage 4 Beauty',
      ogDesc: 'Dárkový poukaz na masáž v Praze 4 — od 600 Kč, platnost 12 měsíců, doručení e-mailem do 24 hodin.'
    },
    en: {
      title: "Massage Gift Voucher Prague | Massage 4 Beauty",
      desc: "Massage gift voucher in Prague 4 — from 600 CZK, valid 12 months, delivered by e-mail within 24 hours. Choose a treatment or an amount.",
      ogTitle: "Massage Gift Voucher Prague | Massage 4 Beauty",
      ogDesc: "Massage gift voucher in Prague 4 — from 600 CZK, valid 12 months, delivered by e-mail within 24 hours. Choose a treatment or an amount."
    },
    ru: {
      title: "Подарочный сертификат на массаж Прага | Massage 4 Beauty",
      desc: "Подарочный сертификат на массаж в Праге 4 — от 600 Kč, срок 12 месяцев, доставка на почту за 24 часа.",
      ogTitle: "Подарочный сертификат на массаж Прага | Massage 4 Beauty",
      ogDesc: "Подарочный сертификат на массаж в Праге 4 — от 600 Kč, срок 12 месяцев, доставка на почту за 24 часа."
    }
  },

  schema: {
    name: 'Dárkový poukaz na masáž',
    alternateName: ['Poukaz na masáž', 'Dárkový voucher na masáž'],
    serviceType: 'Dárkový poukaz',
    description: 'Dárkový poukaz na masáž ve studiu Massage 4 Beauty v Praze 4. Na konkrétní masáž nebo na zvolenou částku, s platností 12 měsíců.'
  },

  strings: {
    cs: {
      crumb: 'Dárkový poukaz',
      eyebrow: 'Dárkový poukaz · Praha 4',
      h1: 'Dárkový poukaz na masáž Praha',
      lead: 'Dárek, který se nikdy netrefí vedle. Vyberete masáž nebo částku, zbytek nechte na mně — poukaz dorazí e-mailem do 24 hodin, připravený k vytištění nebo k odeslání.',
      photoAlt: 'Dárkový poukaz na masáž ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Dárkový poukaz Massage 4 Beauty — elegantní v tištěné i elektronické podobě.',
      factPriceV: 'od 600 Kč',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je dárkový poukaz na masáž',
      what: [
        'Dárkový poukaz na masáž je nejjednodušší způsob, jak někomu darovat čas pro sebe. Můžete si vybrat konkrétní ošetření — třeba masáž obličeje nebo lymfodrenáž celého těla — nebo zvolit částku a nechat výběr na obdarovaném.',
        'Poukaz vystavuji na jméno obdarovaného a posílám v elektronické podobě k vytištění. Pokud potřebujete tištěnou verzi na kvalitním papíře, připravím ji ve studiu k vyzvednutí. Platnost je 12 měsíců od data vystavení.'
      ],

      h2How: 'Jak poukaz objednat',
      steps: [
        { t: 'Vyberte masáž nebo částku', d: 'Podívejte se do ceníku, nebo zvolte libovolnou částku od 600 Kč výše.' },
        { t: 'Ozvěte se mi', d: 'Zavolejte na +420 721 761 411 nebo vyplňte rezervační formulář na úvodní stránce.' },
        { t: 'Úhrada převodem', d: 'Pošlu vám platební údaje. Poukaz vystavuji po připsání částky na účet.' },
        { t: 'Doručení do 24 hodin', d: 'Poukaz dorazí e-mailem, obvykle týž den. Tištěnou verzi připravím ve studiu.' }
      ],

      h2Effects: 'Proč darovat masáž',
      effects: [
        'dárek, který nezabírá místo a nezůstane v šuplíku',
        'obdarovaný si sám vybere termín i typ masáže',
        'platnost 12 měsíců — není kam spěchat',
        'doručení e-mailem do 24 hodin, i na poslední chvíli',
        'možnost poukazu na částku, když nevíte, co vybrat',
        'vhodné k Vánocům, narozeninám i jen tak'
      ],

      h2Who: 'Pro koho se poukaz hodí',
      who: 'Dárkový poukaz na masáž potěší kohokoli, kdo si na sebe nikdy neudělá čas — maminku, partnera, kolegyni i kamarádku po náročném období. Oblíbený je jako vánoční dárek, k narozeninám, ke Dni matek nebo jako poděkování.',
      h3Contra: 'Na co pamatovat',
      contra: [
        'platnost poukazu je 12 měsíců od vystavení',
        'poukaz nelze směnit zpět za peníze',
        'poukaz na částku lze čerpat i na více návštěv',
        'termín je potřeba rezervovat předem, ideálně 1–2 týdny',
        'při zrušení návštěvy méně než 24 hodin předem poukaz propadá'
      ],
      contraNote: 'Potřebujete poukaz na poslední chvíli? Zavolejte na +420 721 761 411, obvykle to zvládneme týž den.',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Jak rychle poukaz dostanu?', a: 'Elektronický poukaz posílám e-mailem do 24 hodin od připsání platby, obvykle ještě týž den. Tištěnou verzi připravím ve studiu k vyzvednutí.' },
        { q: 'Jak dlouho poukaz platí?', a: 'Platnost je 12 měsíců od data vystavení. Datum je na poukazu vždy uvedené.' },
        { q: 'Můžu darovat poukaz na částku místo na konkrétní masáž?', a: 'Ano, a je to nejčastější volba. Obdarovaný si pak sám vybere ošetření podle chuti a částku může vyčerpat i na více návštěv.' },
        { q: 'Co když poukaz nestačí na vybranou masáž?', a: 'Není problém — obdarovaný jednoduše doplatí rozdíl na místě.' },
        { q: 'Jde poukaz vrátit nebo vyměnit za peníze?', a: 'Poukaz bohužel nelze směnit zpět za peníze. Lze ho ale převést na jinou osobu, stačí mi dát vědět.' }
      ],

      h2Book: 'Objednejte dárkový poukaz',
      bookText: 'Zavolejte na +420 721 761 411 nebo vyplňte formulář na úvodní stránce. Ozvu se zpravidla týž den.',
      h2Related: 'Oblíbené masáže k darování'
    },

    en: {
      crumb: 'Gift voucher',
      eyebrow: 'Gift voucher · Prague 4',
      h1: 'Massage Gift Voucher in Prague',
      lead: 'A gift that never misses. Choose a massage or an amount and leave the rest to me — the voucher arrives by e-mail within 24 hours, ready to print or forward.',
      photoAlt: 'Massage gift voucher from the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'The Massage 4 Beauty gift voucher — elegant in print and by e-mail.',
      factPriceV: 'from 600 CZK',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What the gift voucher is',
      what: [
        'A massage gift voucher is the simplest way to give someone time for themselves. You can choose a specific treatment — a facial massage, say, or full-body lymphatic drainage — or pick an amount and leave the choice to the person receiving it.',
        'I issue the voucher in the recipient\'s name and send it electronically, ready to print. If you need a printed version on quality paper, I will prepare one at the studio for collection. It is valid for 12 months from the date of issue.'
      ],

      h2How: 'How to order a voucher',
      steps: [
        { t: 'Choose a massage or amount', d: 'Take a look at the price list, or choose any amount from 600 CZK upwards.' },
        { t: 'Get in touch', d: 'Call +420 721 761 411 or fill in the booking form on the home page.' },
        { t: 'Payment by transfer', d: 'I will send you the payment details. The voucher is issued once the payment arrives.' },
        { t: 'Delivered within 24 hours', d: 'The voucher arrives by e-mail, usually the same day. Printed copies wait at the studio.' }
      ],

      h2Effects: 'Why give a massage',
      effects: [
        'a gift that takes no space and will not sit in a drawer',
        'the recipient chooses their own date and treatment',
        'valid for 12 months — no rush',
        'delivered by e-mail within 24 hours, even last minute',
        'an open-amount voucher when you cannot decide',
        'right for Christmas, birthdays or no reason at all'
      ],

      h2Who: 'Who it suits',
      who: 'A massage gift voucher delights anyone who never makes time for themselves — a mother, a partner, a colleague, a friend coming out of a hard stretch. It is a favourite as a Christmas present, for birthdays, for Mother\'s Day, or simply as a thank you.',
      h3Contra: 'Good to know',
      contra: [
        'the voucher is valid for 12 months from issue',
        'it cannot be exchanged back for cash',
        'an open-amount voucher can be used across several visits',
        'appointments need booking ahead, ideally 1–2 weeks',
        'cancelling less than 24 hours ahead forfeits the voucher'
      ],
      contraNote: 'Need a voucher at the last minute? Call +420 721 761 411 — we can usually manage it the same day.',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'How quickly will I get the voucher?', a: 'I send the electronic voucher by e-mail within 24 hours of the payment arriving, usually the same day. Printed versions are prepared at the studio for collection.' },
        { q: 'How long is the voucher valid?', a: 'It is valid for 12 months from the date of issue. The date is always printed on the voucher.' },
        { q: 'Can I give an amount instead of a specific massage?', a: 'Yes, and it is the most common choice. The recipient then picks the treatment themselves and can spread the amount across several visits.' },
        { q: 'What if the voucher does not cover the chosen massage?', a: 'No problem — the recipient simply pays the difference on the day.' },
        { q: 'Can the voucher be refunded or exchanged for cash?', a: 'Unfortunately it cannot be exchanged back for cash. It can be transferred to another person though — just let me know.' }
      ],

      h2Book: 'Order a gift voucher',
      bookText: 'Call +420 721 761 411 or fill in the form on the home page. I usually reply the same day.',
      h2Related: 'Popular massages to gift'
    },

    ru: {
      crumb: 'Подарочный сертификат',
      eyebrow: 'Подарочный сертификат · Прага 4',
      h1: 'Подарочный сертификат на массаж в Праге',
      lead: 'Подарок, с которым невозможно промахнуться. Выберите массаж или сумму, остальное оставьте мне — сертификат придёт на почту в течение 24 часов, готовый к печати или пересылке.',
      photoAlt: 'Подарочный сертификат на массаж студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Подарочный сертификат Massage 4 Beauty — элегантный и в печати, и в электронном виде.',
      factPriceV: 'от 600 Kč',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое подарочный сертификат',
      what: [
        'Подарочный сертификат на массаж — самый простой способ подарить человеку время для себя. Вы можете выбрать конкретную процедуру, например массаж лица или лимфодренаж всего тела, либо указать сумму и оставить выбор получателю.',
        'Сертификат я оформляю на имя получателя и отправляю в электронном виде, готовым к печати. Если нужна печатная версия на качественной бумаге, подготовлю её в студии для получения. Срок действия — 12 месяцев с даты выдачи.'
      ],

      h2How: 'Как заказать сертификат',
      steps: [
        { t: 'Выберите массаж или сумму', d: 'Загляните в прайс-лист или выберите любую сумму от 600 Kč.' },
        { t: 'Свяжитесь со мной', d: 'Позвоните по номеру +420 721 761 411 или заполните форму на главной странице.' },
        { t: 'Оплата переводом', d: 'Я пришлю реквизиты. Сертификат оформляю после поступления оплаты.' },
        { t: 'Доставка за 24 часа', d: 'Сертификат придёт на почту, обычно в тот же день. Печатную версию подготовлю в студии.' }
      ],

      h2Effects: 'Почему стоит дарить массаж',
      effects: [
        'подарок, который не занимает места и не останется в ящике',
        'получатель сам выбирает дату и вид массажа',
        'срок действия 12 месяцев — спешить некуда',
        'доставка на почту за 24 часа, даже в последний момент',
        'сертификат на сумму, если сложно определиться',
        'подходит к Рождеству, дню рождения и просто так'
      ],

      h2Who: 'Кому подойдёт сертификат',
      who: 'Подарочный сертификат на массаж порадует любого, кто никогда не находит времени на себя — маму, партнёра, коллегу или подругу после трудного периода. Его часто дарят на Рождество, день рождения, День матери или просто в благодарность.',
      h3Contra: 'О чём стоит помнить',
      contra: [
        'срок действия сертификата — 12 месяцев с момента выдачи',
        'сертификат нельзя обменять обратно на деньги',
        'сертификат на сумму можно потратить за несколько визитов',
        'запись нужна заранее, оптимально за 1–2 недели',
        'при отмене менее чем за 24 часа сертификат сгорает'
      ],
      contraNote: 'Нужен сертификат в последний момент? Позвоните по номеру +420 721 761 411, обычно успеваем в тот же день.',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Как быстро я получу сертификат?', a: 'Электронный сертификат отправляю на почту в течение 24 часов после поступления оплаты, обычно в тот же день. Печатную версию подготовлю в студии.' },
        { q: 'Сколько действует сертификат?', a: 'Срок действия — 12 месяцев с даты выдачи. Дата всегда указана на сертификате.' },
        { q: 'Можно ли подарить сумму вместо конкретного массажа?', a: 'Да, и это самый частый выбор. Получатель тогда сам выбирает процедуру, а сумму можно потратить за несколько визитов.' },
        { q: 'Что если сертификата не хватит на выбранный массаж?', a: 'Не проблема — получатель просто доплатит разницу на месте.' },
        { q: 'Можно ли вернуть сертификат или обменять на деньги?', a: 'К сожалению, обменять обратно на деньги нельзя. Но его можно передать другому человеку — достаточно сообщить мне.' }
      ],

      h2Book: 'Закажите подарочный сертификат',
      bookText: 'Позвоните по номеру +420 721 761 411 или заполните форму на главной странице. Обычно отвечаю в тот же день.',
      h2Related: 'Популярные массажи в подарок'
    }
  }
};
