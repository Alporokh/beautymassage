/* Alginátová maska - doplněk k masáži obličeje. Keywords: alginátová maska,
   alginátová maska praha, alginátová maska po masáži obličeje

   Cena 250 Kč / 15 min podle ceníku v content.js. V ceníku je vedená jako
   "přidejte k masáži": samostatně se neobjednává. */
module.exports = {
  slug: 'alginatova-maska',
  hero: '19-alginatova-maska-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'face',
  price: 250,
  minutes: 15,
  related: ['masaz-obliceje', 'lymfaticka-masaz-obliceje', 'gua-sha-masaz-obliceje', 'vakuova-masaz-obliceje'],

  meta: {
    cs: {
      title: 'Alginátová maska k masáži obličeje Praha - 250 Kč | Massage 4 Beauty',
      desc: 'Alginátová maska jako doplněk k masáži obličeje v Praze 4. Zmírní otoky a zarudnutí, sjednotí tón pleti, hloubkově hydratuje a zklidní. 15 minut za 250 Kč.',
      ogTitle: 'Alginátová maska Praha | Massage 4 Beauty',
      ogDesc: 'Alginátová maska k masáži obličeje v Praze 4 - hydratace a zklidnění pleti. 15 minut za 250 Kč.'
    },
    en: {
      title: 'Alginate Mask with Facial Massage Prague | Massage 4 Beauty',
      desc: 'An alginate mask added to your facial massage in Prague 4. Reduces puffiness and redness, evens out skin tone, deeply hydrates and soothes. 15 minutes, 250 CZK.',
      ogTitle: 'Alginate Mask Prague | Massage 4 Beauty',
      ogDesc: 'An alginate mask added to your facial massage in Prague 4 - hydration and calm skin. 15 minutes, 250 CZK.'
    },
    ru: {
      title: 'Альгинатная маска к массажу лица Прага | Massage 4 Beauty',
      desc: 'Альгинатная маска как дополнение к массажу лица в Праге 4. Снимает отёчность и покраснения, выравнивает тон, глубоко увлажняет и успокаивает кожу. 15 минут, 250 Kč.',
      ogTitle: 'Альгинатная маска Прага | Massage 4 Beauty',
      ogDesc: 'Альгинатная маска к массажу лица в Праге 4 - увлажнение и спокойная кожа. 15 минут, 250 Kč.'
    }
  },

  schema: {
    name: 'Alginátová maska',
    alternateName: ['Alginátová maska po masáži', 'Slupovací alginátová maska'],
    serviceType: 'Alginátová maska',
    description: 'Alginátová maska jako doplněk k masáži obličeje. Zmírňuje otoky a zarudnutí, sjednocuje tón pleti, hloubkově hydratuje a zklidňuje.'
  },

  strings: {
    cs: {
      crumb: 'Alginátová maska',
      eyebrow: 'Doplněk k masáži · Praha 4',
      h1: 'Alginátová maska k masáži obličeje',
      lead: 'Patnáct minut navíc, které masáž obličeje krásně dokončí. Alginátová maska zmírní otoky a zarudnutí, sjednotí tón pleti, hloubkově ji hydratuje a zklidní.',
      photoAlt: 'Alginátová maska ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Alginátová maska - závěr masáže obličeje.',
      factDurationV: '15 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je alginátová maska',
      what: [
        'Alginátová maska se připravuje z prášku, který se těsně před použitím smíchá s vodou. Nanesená pasta během několika minut ztuhne do pružné vrstvy, kterou pak sejmu vcelku jako jednu slupku.',
        'Po masáži je pleť prokrvená a nejlépe přijímá péči. Maska ji v tu chvíli přikryje, udrží v ní vlhkost a zklidní ji. Proto ji nabízím jako doplněk, který se přidává na závěr masáže obličeje.'
      ],

      h2How: 'Jak maska probíhá',
      steps: [
        { t: 'Po masáži', d: 'Masku nanáším hned po masáži obličeje, kdy je pleť prokrvená.' },
        { t: 'Nanesení', d: 'Čerstvě namíchanou pastu rozprostřu po obličeji v rovnoměrné vrstvě.' },
        { t: 'Odpočinek', d: 'Několik minut ležíte a maska mezitím ztuhne do pružné vrstvy.' },
        { t: 'Sejmutí', d: 'Masku sejmu vcelku a pleť ošetřím závěrečnou péčí.' }
      ],

      h2Effects: 'Účinky alginátové masky',
      effects: [
        'zmírnění otoků a zarudnutí',
        'sjednocený tón pleti',
        'hloubková hydratace',
        'zklidnění pleti po masáži',
        'hladší a svěží pleť',
        'chvíle klidu na závěr ošetření'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Alginátová maska se hodí pro dehydratovanou, unavenou nebo citlivou pleť, která má sklon k zarudnutí. Oblíbená je i před událostí, kdy chcete, aby pleť byla co nejsvěžejší.',
      h3Contra: 'Kdy masku neprovádíme',
      contra: [
        'alergie na složky masky',
        'otevřené rány nebo záněty na pleti',
        'akutní kožní onemocnění',
        'čerstvě po chemickém peelingu nebo laseru'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena alginátové masky',
      priceName: 'Alginátová maska · přidejte k masáži',
      priceDesc: 'Doplněk k masáži obličeje. Cena je konečná - nejsme plátci DPH.',
      priceMin: '15 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Mohu si masku objednat samostatně?', a: 'Maska je doplněk, který se přidává na závěr masáže obličeje. Při rezervaci masáže stačí napsat, že ji chcete přidat.' },
        { q: 'Ke které masáži se maska hodí?', a: 'Ke kterékoli masáži obličeje - například k masáži obličeje, lymfatické masáži, Gua Sha nebo vakuové masáži.' },
        { q: 'Je maska vhodná pro citlivou pleť?', a: 'Ano, maska pleť zklidňuje a zmírňuje zarudnutí. Pokud máte na něco alergii, řekněte mi to předem.' }
      ],

      h2Book: 'Přidejte si alginátovou masku k masáži',
      bookText: 'Při rezervaci masáže obličeje napište, že chcete přidat masku. Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu.',
      h2Related: 'Masáže obličeje, ke kterým se maska hodí'
    },

    en: {
      crumb: 'Alginate mask',
      eyebrow: 'Massage add-on · Prague 4',
      h1: 'Alginate Mask with Your Facial Massage',
      lead: 'Fifteen extra minutes that round off a facial massage beautifully. The alginate mask reduces puffiness and redness, evens out skin tone, deeply hydrates and soothes the skin.',
      photoAlt: 'Alginate mask at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Alginate mask - the finish of a facial massage.',
      factDurationV: '15 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What an alginate mask is',
      what: [
        'An alginate mask is made from a powder that is mixed with water just before use. The paste sets within a few minutes into a flexible layer, which I then lift off in one piece.',
        'After a massage the skin is well circulated and most receptive to care. The mask covers it at that moment, holds in moisture and calms it. That is why I offer it as an add-on at the end of a facial massage.'
      ],

      h2How: 'How it works',
      steps: [
        { t: 'After the massage', d: 'I apply the mask straight after your facial massage, while the skin is warm and well circulated.' },
        { t: 'Application', d: 'The freshly mixed paste is spread over the face in an even layer.' },
        { t: 'Resting', d: 'You lie back for a few minutes while the mask sets into a flexible layer.' },
        { t: 'Removal', d: 'I lift the mask off in one piece and finish with closing skin care.' }
      ],

      h2Effects: 'What the alginate mask does',
      effects: [
        'reduces puffiness and redness',
        'a more even skin tone',
        'deep hydration',
        'calms the skin after massage',
        'smoother, fresher skin',
        'a quiet moment at the end of the treatment'
      ],

      h2Who: 'Who it suits',
      who: 'The alginate mask suits dehydrated, tired or sensitive skin that tends to redden. It is also popular before an event, when you want your skin as fresh as possible.',
      h3Contra: 'When we do not apply it',
      contra: [
        'allergy to any of the mask ingredients',
        'open wounds or skin inflammation',
        'acute skin conditions',
        'recent chemical peel or laser treatment'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of the alginate mask',
      priceName: 'Alginate mask · add to your massage',
      priceDesc: 'An add-on to a facial massage. The price is final - we are not VAT payers.',
      priceMin: '15 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Can I book the mask on its own?', a: 'The mask is an add-on at the end of a facial massage. When you book your massage, just mention that you would like to add it.' },
        { q: 'Which massage does it go with?', a: 'Any facial massage - for example the facial massage, facial lymphatic massage, Gua Sha or vacuum facial massage.' },
        { q: 'Is it suitable for sensitive skin?', a: 'Yes, the mask calms the skin and reduces redness. If you have any allergies, let me know in advance.' }
      ],

      h2Book: 'Add an alginate mask to your massage',
      bookText: 'When you book a facial massage, mention that you would like the mask. The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad.',
      h2Related: 'Facial massages it goes with'
    },

    ru: {
      crumb: 'Альгинатная маска',
      eyebrow: 'Дополнение к массажу · Прага 4',
      h1: 'Альгинатная маска к массажу лица',
      lead: 'Пятнадцать минут, которые красиво завершают массаж лица. Альгинатная маска снимает отёчность и покраснения, выравнивает тон, глубоко увлажняет и успокаивает кожу.',
      photoAlt: 'Альгинатная маска в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Альгинатная маска - завершение массажа лица.',
      factDurationV: '15 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое альгинатная маска',
      what: [
        'Альгинатную маску готовят из порошка, который смешивают с водой непосредственно перед нанесением. Через несколько минут паста застывает в эластичный слой, и я снимаю его целиком, одним пластом.',
        'После массажа кожа наполнена кровью и лучше всего воспринимает уход. Маска в этот момент укрывает её, удерживает влагу и успокаивает. Поэтому я предлагаю её как дополнение в завершение массажа лица.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'После массажа', d: 'Наношу маску сразу после массажа лица, пока кожа разогрета.' },
        { t: 'Нанесение', d: 'Свежеприготовленную пасту распределяю по лицу ровным слоем.' },
        { t: 'Отдых', d: 'Несколько минут вы лежите, а маска застывает в эластичный слой.' },
        { t: 'Снятие', d: 'Снимаю маску целиком и завершаю уход за кожей.' }
      ],

      h2Effects: 'Эффект альгинатной маски',
      effects: [
        'меньше отёчности и покраснений',
        'более ровный тон кожи',
        'глубокое увлажнение',
        'успокоение кожи после массажа',
        'гладкая, свежая кожа',
        'минуты покоя в конце процедуры'
      ],

      h2Who: 'Кому подходит',
      who: 'Альгинатная маска подходит для обезвоженной, уставшей или чувствительной кожи, склонной к покраснениям. Её также любят делать перед событием, когда хочется, чтобы кожа выглядела максимально свежей.',
      h3Contra: 'Когда маска не проводится',
      contra: [
        'аллергия на компоненты маски',
        'открытые раны или воспаления на коже',
        'острые кожные заболевания',
        'сразу после химического пилинга или лазера'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена альгинатной маски',
      priceName: 'Альгинатная маска · добавьте к массажу',
      priceDesc: 'Дополнение к массажу лица. Цена окончательная - мы не плательщики НДС.',
      priceMin: '15 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Можно ли записаться только на маску?', a: 'Маска - это дополнение в завершение массажа лица. При записи на массаж просто укажите, что хотите её добавить.' },
        { q: 'К какому массажу подходит маска?', a: 'К любому массажу лица - например, к массажу лица, лимфодренажному массажу, гуаша или вакуумному массажу.' },
        { q: 'Подходит ли маска для чувствительной кожи?', a: 'Да, маска успокаивает кожу и уменьшает покраснения. Если у вас есть аллергия, сообщите мне заранее.' }
      ],

      h2Book: 'Добавьте альгинатную маску к массажу',
      bookText: 'При записи на массаж лица укажите, что хотите добавить маску. Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда.',
      h2Related: 'Массажи лица, к которым подходит маска'
    }
  }
};
