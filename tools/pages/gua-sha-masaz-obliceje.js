/* Gua Sha masáž obličeje. Keywords: gua sha masáž obličeje, gua sha praha,
   masáž kamenem gua sha, gua sha lymfodrenáž

   Cena 800 Kč / 45 min podle ceníku v content.js. */
module.exports = {
  slug: 'gua-sha-masaz-obliceje',
  hero: '05-gua-sha-masaz-obliceje-photo.webp',
  heroW: 1376,
  heroH: 768,
  kind: 'service',
  group: 'face',
  price: 800,
  minutes: 45,
  related: ['vakuova-masaz-obliceje', 'lymfaticka-masaz-obliceje', 'liftingova-masaz-obliceje', 'masaz-obliceje'],

  meta: {
    cs: {
      title: 'Gua Sha masáž obličeje Praha - 800 Kč | Massage 4 Beauty',
      desc: 'Gua Sha masáž obličeje v Praze 4. Drenážní a konturovací rituál kamenem - uvolní napětí, odvede otoky a sjednotí tón pleti. 45 minut za 800 Kč.',
      ogTitle: 'Gua Sha masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Drenážní a konturovací masáž obličeje kamenem Gua Sha v Praze 4. 45 minut za 800 Kč.'
    },
    en: {
      title: 'Gua Sha Facial Massage Prague | Massage 4 Beauty',
      desc: 'Gua Sha facial massage in Prague 4. A draining, contouring ritual with a stone - releases tension, reduces puffiness and evens out skin tone. 45 minutes, 800 CZK.',
      ogTitle: 'Gua Sha Facial Massage Prague | Massage 4 Beauty',
      ogDesc: 'A draining, contouring Gua Sha facial in Prague 4. 45 minutes, 800 CZK.'
    },
    ru: {
      title: 'Массаж лица гуаша Прага | Massage 4 Beauty',
      desc: 'Массаж лица гуаша в Праге 4. Дренажный и контурирующий ритуал камнем - снимает напряжение, уменьшает отёки и выравнивает тон кожи. 45 минут, 800 Kč.',
      ogTitle: 'Массаж лица гуаша Прага | Massage 4 Beauty',
      ogDesc: 'Дренажный и контурирующий массаж лица гуаша в Праге 4. 45 минут, 800 Kč.'
    }
  },

  schema: {
    name: 'Gua Sha masáž obličeje',
    alternateName: ['Masáž Gua Sha', 'Gua Sha', 'Masáž obličeje kamenem'],
    serviceType: 'Gua Sha masáž obličeje',
    description: 'Drenážní a konturovací masáž obličeje kamenem Gua Sha. Uvolňuje napětí, podporuje odtok lymfy a zlepšuje tonus pleti.'
  },

  strings: {
    cs: {
      crumb: 'Gua Sha masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Gua Sha masáž obličeje Praha',
      lead: 'Drenážní a konturovací rituál s hladkým kamenem. Uvolní napětí v obličeji, pomůže odvést otoky a zlepší tonus pleti tradičními technikami Gua Sha.',
      photoAlt: 'Gua Sha masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Gua Sha masáž obličeje - drenážní tahy kamenem.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 - Nusle',

      h2What: 'Co je Gua Sha masáž obličeje',
      what: [
        'Gua Sha je tradiční technika, při které se po naolejované pleti vedou plynulé tahy plochým, hladce vybroušeným kamenem. Tvar kamene kopíruje linie obličeje - čelist, lícní kosti, čelo i oblast kolem očí.',
        'Tahy vedu ve směru odtoku lymfy, od středu obličeje ke stranám a dolů ke krku. Masáž tak působí drenážně i konturovacím způsobem: uvolní stažené svaly, odvede zadrženou tekutinu a pleť je po ní svěží a sjednocená.'
      ],

      h2How: 'Jak masáž Gua Sha probíhá',
      steps: [
        { t: 'Očištění a olej', d: 'Odlíčím pleť a nanesu olej, po kterém kámen hladce klouže.' },
        { t: 'Uvolnění krku', d: 'Začínám na krku a ramenou, aby měla lymfa z obličeje kam odtékat.' },
        { t: 'Tahy kamenem', d: 'Plynulé drenážní tahy po čelisti, lících, čele a kolem očí, vždy ve směru odtoku lymfy.' },
        { t: 'Zklidnění', d: 'Závěrečné lehké tahy a ruční hmaty pleť zklidní.' }
      ],

      h2Effects: 'Účinky masáže Gua Sha',
      effects: [
        'méně výrazné otoky a váčky pod očima',
        'uvolnění napětí v čelisti a na čele',
        'zvýrazněné kontury obličeje',
        'lepší tonus a sjednocený tón pleti',
        'prokrvená, rozjasněná pleť',
        'hluboké uvolnění během masáže'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Masáž Gua Sha je vhodná, pokud se ráno budíte s oteklým obličejem, zatínáte čelist nebo máte unavenou, pohaslou pleť. Je to jemná, příjemná procedura, která se hodí jako samostatný relax i jako pravidelná péče o pleť.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'akutní akné, opary nebo záněty na pleti',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'čerstvě po chemickém peelingu nebo laseru',
        'rozšířené žilky (kuperóza) v akutní fázi',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena masáže Gua Sha',
      priceName: 'Gua Sha masáž obličeje',
      priceDesc: 'Drenážní a konturovací masáž obličeje kamenem. Cena je konečná - nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Zanechá Gua Sha na obličeji stopy?', a: 'Na obličeji pracuji jemně, takže po masáži zůstane jen mírné, krátkodobé zarudnutí. Výrazné stopy, jaké znáte z Gua Sha na zádech, na obličeji nevznikají.' },
        { q: 'Jak dlouho vydrží efekt?', a: 'Odvedení otoků a svěží vzhled jsou vidět hned a vydrží obvykle několik dní. Při pravidelných masážích se kontury a tonus pleti zlepšují dlouhodobě.' },
        { q: 'Můžu Gua Sha dělat i doma?', a: 'Ano, a ráda vám ukážu správný směr tahů. Masáž ve studiu je ale delší a důkladnější a začíná uvolněním krku, bez kterého domácí Gua Sha funguje jen napůl.' },
        { q: 'Jak se liší od lymfatické masáže obličeje?', a: 'Obě podporují odtok lymfy. Lymfatická masáž pracuje jen rukama a velmi jemně, Gua Sha přidává kámen, díky kterému je i výraznější konturovací efekt.' }
      ],

      h2Book: 'Objednejte se na masáž Gua Sha',
      bookText: 'Studio najdete v Praze 4 - Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Gua Sha facial massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Gua Sha Facial Massage in Prague',
      lead: 'A draining, contouring ritual with a smooth stone. It releases tension in the face, helps clear puffiness and improves skin tone using traditional Gua Sha techniques.',
      photoAlt: 'Gua Sha facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Gua Sha facial massage - draining strokes with a stone.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 - Nusle',

      h2What: 'What Gua Sha facial massage is',
      what: [
        'Gua Sha is a traditional technique in which a flat, smoothly polished stone is drawn in flowing strokes over oiled skin. The shape of the stone follows the lines of the face - the jaw, cheekbones, forehead and the area around the eyes.',
        'I lead the strokes in the direction of lymph flow, from the centre of the face outwards and down towards the neck. The massage both drains and contours: it releases tight muscles, moves retained fluid and leaves the skin fresh and even.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Cleansing and oil', d: 'I remove make-up and apply oil so the stone glides smoothly.' },
        { t: 'Opening the neck', d: 'I start with the neck and shoulders so lymph from the face has somewhere to drain.' },
        { t: 'Strokes with the stone', d: 'Flowing draining strokes over the jaw, cheeks, forehead and around the eyes, always with the lymph flow.' },
        { t: 'Settling', d: 'Light closing strokes and manual work calm the skin.' }
      ],

      h2Effects: 'What Gua Sha does',
      effects: [
        'less puffiness and fewer under-eye bags',
        'releases tension in the jaw and forehead',
        'better-defined facial contours',
        'improved tone and a more even complexion',
        'well-circulated, brighter skin',
        'deep relaxation during the massage'
      ],

      h2Who: 'Who it suits',
      who: 'Gua Sha suits you if you wake up with a puffy face, clench your jaw or your skin looks tired and dull. It is a gentle, pleasant treatment that works both as a moment of relaxation and as regular skin care.',
      h3Contra: 'When we do not massage',
      contra: [
        'active acne, cold sores or skin inflammation',
        'recent fillers or botox (wait 2–3 weeks)',
        'recent chemical peel or laser treatment',
        'broken capillaries (couperose) in an acute phase',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of Gua Sha facial massage',
      priceName: 'Gua Sha facial massage',
      priceDesc: 'A draining, contouring facial massage with a stone. The price is final - we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Will Gua Sha leave marks on my face?', a: 'On the face I work gently, so all that remains is a light flush that fades quickly. The strong marks you may know from Gua Sha on the back do not appear on the face.' },
        { q: 'How long does the effect last?', a: 'Reduced puffiness and a fresher look are visible straight away and usually last a few days. With regular sessions, contours and skin tone improve over the long term.' },
        { q: 'Can I do Gua Sha at home?', a: 'Yes, and I am happy to show you the right direction of the strokes. A studio session is longer and more thorough, and it starts by opening the neck - without that, home Gua Sha only works halfway.' },
        { q: 'How is it different from facial lymphatic massage?', a: 'Both support lymph flow. Lymphatic massage is done by hand only and very gently; Gua Sha adds the stone, which gives a stronger contouring effect.' }
      ],

      h2Book: 'Book your Gua Sha massage',
      bookText: 'The studio is in Prague 4 - Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Массаж лица гуаша',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Массаж лица гуаша в Праге',
      lead: 'Дренажный и контурирующий ритуал с гладким камнем. Снимает напряжение в лице, помогает убрать отёки и улучшает тонус кожи традиционными техниками гуаша.',
      photoAlt: 'Массаж лица гуаша в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Массаж лица гуаша - дренажные движения камнем.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 - Нусле',

      h2What: 'Что такое массаж лица гуаша',
      what: [
        'Гуаша - традиционная техника, при которой плоским, гладко отполированным камнем выполняют плавные движения по коже, смазанной маслом. Форма камня повторяет линии лица - челюсть, скулы, лоб и зону вокруг глаз.',
        'Я веду движения по направлению оттока лимфы - от центра лица к краям и вниз к шее. Поэтому массаж действует и как дренаж, и как контурирование: расслабляет зажатые мышцы, выводит лишнюю жидкость, и кожа становится свежей и ровной.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Очищение и масло', d: 'Снимаю макияж и наношу масло, чтобы камень легко скользил.' },
        { t: 'Работа с шеей', d: 'Начинаю с шеи и плеч, чтобы лимфе от лица было куда оттекать.' },
        { t: 'Движения камнем', d: 'Плавные дренажные движения по челюсти, щекам, лбу и вокруг глаз - всегда по току лимфы.' },
        { t: 'Успокоение', d: 'Лёгкие завершающие движения и ручной массаж успокаивают кожу.' }
      ],

      h2Effects: 'Эффект массажа гуаша',
      effects: [
        'меньше отёков и мешков под глазами',
        'снятие напряжения в челюсти и на лбу',
        'более чёткие контуры лица',
        'лучший тонус и ровный цвет кожи',
        'свежая, сияющая кожа',
        'глубокое расслабление во время массажа'
      ],

      h2Who: 'Кому подходит',
      who: 'Массаж гуаша подойдёт, если вы просыпаетесь с отёчным лицом, сжимаете челюсть или кожа выглядит уставшей и тусклой. Это мягкая и приятная процедура - и как отдых, и как регулярный уход за кожей.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'активное акне, герпес или воспаления на коже',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'сразу после химического пилинга или лазера',
        'купероз в острой фазе',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена массажа гуаша',
      priceName: 'Массаж лица гуаша',
      priceDesc: 'Дренажный и контурирующий массаж лица камнем. Цена окончательная - мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Остаются ли следы после гуаша?', a: 'На лице я работаю мягко, поэтому остаётся лишь лёгкое покраснение, которое быстро проходит. Яркие следы, как после гуаша на спине, на лице не появляются.' },
        { q: 'Сколько держится эффект?', a: 'Уменьшение отёков и свежий вид заметны сразу и обычно сохраняются несколько дней. При регулярных процедурах контуры и тонус кожи улучшаются надолго.' },
        { q: 'Можно ли делать гуаша дома?', a: 'Да, и я с радостью покажу правильное направление движений. Но процедура в студии дольше и тщательнее и начинается с проработки шеи - без неё домашний гуаша работает лишь наполовину.' },
        { q: 'Чем он отличается от лимфодренажного массажа лица?', a: 'Оба поддерживают отток лимфы. Лимфодренажный массаж делается только руками и очень мягко, а гуаша добавляет камень, поэтому контурирующий эффект сильнее.' }
      ],

      h2Book: 'Запишитесь на массаж гуаша',
      bookText: 'Студия находится в Праге 4 - Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
