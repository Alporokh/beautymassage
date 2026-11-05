/* Vakuová (baňková) masáž obličeje. Keywords: vakuová masáž obličeje,
   baňková masáž obličeje praha, baňkování obličeje, cupping obličeje

   Cena 800 Kč / 45 min podle ceníku v content.js. */
module.exports = {
  slug: 'vakuova-masaz-obliceje',
  kind: 'service',
  group: 'face',
  price: 800,
  minutes: 45,
  related: ['gua-sha-masaz-obliceje', 'liftingova-masaz-obliceje', 'lymfaticka-masaz-obliceje', 'masaz-obliceje'],

  meta: {
    cs: {
      title: 'Vakuová (baňková) masáž obličeje Praha — 800 Kč | Massage 4 Beauty',
      desc: 'Vakuová masáž obličeje v Praze 4. Jemné silikonové baňky tonizují svaly, zvyšují pružnost pleti a zvýrazňují kontury. 45 minut za 800 Kč, online rezervace.',
      ogTitle: 'Vakuová masáž obličeje Praha | Massage 4 Beauty',
      ogDesc: 'Baňková masáž obličeje v Praze 4 — tonizace svalů a pružnější pleť. 45 minut za 800 Kč.'
    },
    en: {
      title: 'Vacuum (Cupping) Facial Massage Prague | Massage 4 Beauty',
      desc: 'Vacuum cupping facial massage in Prague 4. Soft silicone cups tone the muscles, improve skin elasticity and define the contours. 45 minutes, 800 CZK. Book online.',
      ogTitle: 'Vacuum (Cupping) Facial Massage Prague | Massage 4 Beauty',
      ogDesc: 'Cupping facial massage in Prague 4 — toned muscles and more elastic skin. 45 minutes, 800 CZK.'
    },
    ru: {
      title: 'Вакуумный (баночный) массаж лица Прага | Massage 4 Beauty',
      desc: 'Вакуумный массаж лица в Праге 4. Мягкие силиконовые баночки тонизируют мышцы, повышают упругость кожи и подчёркивают контуры. 45 минут, 800 Kč. Запись онлайн.',
      ogTitle: 'Вакуумный (баночный) массаж лица Прага | Massage 4 Beauty',
      ogDesc: 'Баночный массаж лица в Праге 4 — тонус мышц и упругая кожа. 45 минут, 800 Kč.'
    }
  },

  schema: {
    name: 'Vakuová (baňková) masáž obličeje',
    alternateName: ['Baňková masáž obličeje', 'Baňkování obličeje', 'Cupping obličeje'],
    serviceType: 'Vakuová masáž obličeje',
    description: 'Vakuová masáž obličeje silikonovými baňkami. Tonizuje a posiluje svaly, zvyšuje pružnost pleti a zvýrazňuje kontury obličeje.'
  },

  strings: {
    cs: {
      crumb: 'Vakuová masáž obličeje',
      eyebrow: 'Masáž obličeje · Praha 4',
      h1: 'Vakuová (baňková) masáž obličeje Praha',
      lead: 'Jemné podtlakové baňky, které pleť nadzvedávají místo toho, aby na ni tlačily. Tonizují svaly, zvyšují pružnost pleti a zvýrazňují kontury obličeje.',
      photoAlt: 'Vakuová masáž obličeje ve studiu Massage 4 Beauty v Praze 4',
      photoCaption: 'Vakuová masáž obličeje — jemné silikonové baňky.',
      factDurationV: '45 minut',
      factPlaceV: 'Praha 4 — Nusle',

      h2What: 'Co je vakuová masáž obličeje',
      what: [
        'Vakuová, neboli baňková masáž obličeje pracuje s malými silikonovými baňkami, které vytvoří mírný podtlak a pleť lehce nasají. Zatímco klasická masáž na tkáň tlačí, baňka ji nadzvedává — uvolní tak vrstvy pod pokožkou a rozproudí krev i lymfu.',
        'Na obličeji se baňkami pohybuje plynule a nikdy se nenechávají stát na místě, takže nezanechávají modřiny jako baňkování na zádech. Masáž se zaměřuje na tonizaci a posílení svalů, pružnost pleti a čistší linie obličeje.'
      ],

      h2How: 'Jak vakuová masáž probíhá',
      steps: [
        { t: 'Očištění a olej', d: 'Odlíčím pleť a nanesu olej, aby baňky po pleti hladce klouzaly.' },
        { t: 'Zahřátí rukama', d: 'Krátkou ruční masáží pleť prohřeji a připravím na práci s baňkami.' },
        { t: 'Práce s baňkami', d: 'Malými baňkami vedu plynulé tahy podél čelisti, lícních kostí a čela. Sílu podtlaku přizpůsobím vaší pleti.' },
        { t: 'Zklidnění', d: 'Závěrečné ruční hmaty pleť zklidní a vyrovnají prokrvení.' }
      ],

      h2Effects: 'Účinky vakuové masáže',
      effects: [
        'tonizace a posílení obličejových svalů',
        'pružnější a pevnější pleť',
        'zvýrazněné kontury obličeje',
        'lepší prokrvení a odtok lymfy',
        'méně výrazné otoky',
        'svěží, rozjasněný vzhled pleti'
      ],

      h2Who: 'Pro koho je vhodná',
      who: 'Vakuová masáž obličeje se hodí, pokud vám pleť ztrácí pružnost, ovál povoluje nebo se ráno budíte s oteklou tváří. Je příjemnou volbou i pro ty, komu je ruční masáž obličeje příliš intenzivní — podtlak pracuje jemně a bez tlaku na kost.',
      h3Contra: 'Kdy masáž neprovádíme',
      contra: [
        'rozšířené žilky (kuperóza) nebo velmi tenká pleť',
        'akutní akné, opary nebo záněty na pleti',
        'čerstvě aplikovaná výplň nebo botox (počkejte 2–3 týdny)',
        'čerstvě po chemickém peelingu nebo laseru',
        'horečka a akutní onemocnění'
      ],
      contraNote: 'Nejste si jistí? Zavolejte mi před rezervací na +420 721 761 411 a probereme to.',

      h2Price: 'Cena vakuové masáže obličeje',
      priceName: 'Vakuová (baňková) masáž obličeje',
      priceDesc: 'Masáž obličeje silikonovými baňkami. Cena je konečná — nejsme plátci DPH.',
      priceMin: '45 min',

      h2Faq: 'Časté dotazy',
      faq: [
        { q: 'Zůstanou mi po masáži na obličeji modřiny?', a: 'Ne. Na obličeji se baňkami stále pohybuje a podtlak je slabý, takže stopy jako po baňkování zad nevznikají. Pleť může být krátce po masáži mírně zarudlá.' },
        { q: 'Bolí vakuová masáž?', a: 'Nebolí. Cítíte jemné nasávání a teplo. Sílu podtlaku nastavuji podle vaší pleti a během masáže ji můžeme kdykoli upravit.' },
        { q: 'Mohu si po masáži hned nalíčit?', a: 'Doporučuji dát pleti alespoň pár hodin klidu. Na masáž je proto ideální přijít bez make-upu, nebo si ho ve studiu odlíčíte.' },
        { q: 'Jak často masáž opakovat?', a: 'Pro viditelnou změnu tonusu se osvědčuje série několika masáží s odstupem jednoho týdne. Konkrétní plán probereme podle vaší pleti.' },
        { q: 'Jak se liší od masáže Gua Sha?', a: 'Gua Sha pracuje kamenem, který po pleti klouže a tlačí. Baňka naopak pleť nadzvedává. Obě metody podporují odtok lymfy a kontury, liší se pocitem i způsobem práce.' }
      ],

      h2Book: 'Objednejte se na vakuovou masáž obličeje',
      bookText: 'Studio najdete v Praze 4 — Nusle, kousek od Pankráce a Vyšehradu. Online rezervace zabere minutu.',
      h2Related: 'Další masáže obličeje'
    },

    en: {
      crumb: 'Vacuum facial massage',
      eyebrow: 'Facial massage · Prague 4',
      h1: 'Vacuum (Cupping) Facial Massage in Prague',
      lead: 'Gentle suction cups that lift the skin instead of pressing on it. They tone the muscles, improve skin elasticity and bring out the contours of the face.',
      photoAlt: 'Vacuum facial massage at the Massage 4 Beauty studio in Prague 4',
      photoCaption: 'Vacuum facial massage — soft silicone cups.',
      factDurationV: '45 minutes',
      factPlaceV: 'Prague 4 — Nusle',

      h2What: 'What vacuum facial massage is',
      what: [
        'Vacuum, or cupping, facial massage uses small silicone cups that create a light suction and gently draw the skin up. Where a classic massage presses on the tissue, the cup lifts it — loosening the layers beneath the skin and getting blood and lymph moving.',
        'On the face the cups keep moving and are never left in one place, so they do not leave marks the way cupping on the back can. The massage focuses on toning and strengthening the muscles, skin elasticity and cleaner facial lines.'
      ],

      h2How: 'How the treatment works',
      steps: [
        { t: 'Cleansing and oil', d: 'I remove make-up and apply oil so the cups glide smoothly over the skin.' },
        { t: 'Warming up by hand', d: 'A short manual massage warms the skin and prepares it for the cups.' },
        { t: 'Working with the cups', d: 'Small cups follow smooth strokes along the jaw, cheekbones and forehead. I adjust the suction to your skin.' },
        { t: 'Settling', d: 'Closing manual strokes calm the skin and even out the flush.' }
      ],

      h2Effects: 'What vacuum massage does',
      effects: [
        'tones and strengthens the facial muscles',
        'more elastic, firmer skin',
        'better-defined facial contours',
        'improved circulation and lymph flow',
        'less puffiness',
        'a fresh, brighter complexion'
      ],

      h2Who: 'Who it suits',
      who: 'Vacuum facial massage suits you if your skin is losing elasticity, your contour is softening or you wake up with a puffy face. It is also a pleasant choice if manual facial massage feels too intense — the suction works gently, with no pressure on the bone.',
      h3Contra: 'When we do not massage',
      contra: [
        'broken capillaries (couperose) or very thin skin',
        'active acne, cold sores or skin inflammation',
        'recent fillers or botox (wait 2–3 weeks)',
        'recent chemical peel or laser treatment',
        'fever and acute illness'
      ],
      contraNote: 'Not sure? Call me before booking on +420 721 761 411 and we will talk it through.',

      h2Price: 'Price of vacuum facial massage',
      priceName: 'Vacuum (cupping) facial massage',
      priceDesc: 'Facial massage with silicone cups. The price is final — we are not VAT payers.',
      priceMin: '45 min',

      h2Faq: 'Frequently asked questions',
      faq: [
        { q: 'Will it leave marks on my face?', a: 'No. On the face the cups keep moving and the suction is light, so there are no marks like after cupping on the back. The skin may be slightly flushed for a short while afterwards.' },
        { q: 'Does vacuum massage hurt?', a: 'It does not. You feel a gentle pull and warmth. I set the suction to suit your skin and we can adjust it at any point during the massage.' },
        { q: 'Can I put make-up on straight afterwards?', a: 'I recommend giving the skin at least a few hours of rest. It is best to come without make-up, or you can remove it at the studio.' },
        { q: 'How often should I repeat it?', a: 'For a visible change in tone, a course of several sessions a week apart works well. We will plan it together based on your skin.' },
        { q: 'How is it different from Gua Sha?', a: 'Gua Sha uses a stone that glides and presses over the skin. The cup does the opposite and lifts it. Both support lymph flow and contours; they differ in feel and technique.' }
      ],

      h2Book: 'Book your vacuum facial massage',
      bookText: 'The studio is in Prague 4 — Nusle, a short walk from Pankrác and Vyšehrad. Booking online takes a minute.',
      h2Related: 'Other facial massages'
    },

    ru: {
      crumb: 'Вакуумный массаж лица',
      eyebrow: 'Массаж лица · Прага 4',
      h1: 'Вакуумный (баночный) массаж лица в Праге',
      lead: 'Мягкие вакуумные баночки, которые приподнимают кожу, а не давят на неё. Тонизируют мышцы, повышают упругость кожи и подчёркивают контуры лица.',
      photoAlt: 'Вакуумный массаж лица в студии Massage 4 Beauty в Праге 4',
      photoCaption: 'Вакуумный массаж лица — мягкие силиконовые баночки.',
      factDurationV: '45 минут',
      factPlaceV: 'Прага 4 — Нусле',

      h2What: 'Что такое вакуумный массаж лица',
      what: [
        'Вакуумный, или баночный, массаж лица выполняется маленькими силиконовыми баночками, которые создают лёгкое разрежение и мягко втягивают кожу. Если классический массаж давит на ткани, то баночка их приподнимает — расслабляет слои под кожей и ускоряет движение крови и лимфы.',
        'На лице баночки всё время двигаются и не остаются на одном месте, поэтому не оставляют следов, как баночный массаж спины. Массаж направлен на тонус и укрепление мышц, упругость кожи и более чёткие линии лица.'
      ],

      h2How: 'Как проходит процедура',
      steps: [
        { t: 'Очищение и масло', d: 'Снимаю макияж и наношу масло, чтобы баночки легко скользили по коже.' },
        { t: 'Разогрев руками', d: 'Короткий ручной массаж разогревает кожу и готовит её к работе с баночками.' },
        { t: 'Работа баночками', d: 'Маленькими баночками веду плавные движения вдоль челюсти, скул и лба. Силу вакуума подбираю под вашу кожу.' },
        { t: 'Успокоение', d: 'Завершающие ручные движения успокаивают кожу и выравнивают прилив крови.' }
      ],

      h2Effects: 'Эффект вакуумного массажа',
      effects: [
        'тонус и укрепление мышц лица',
        'более упругая и плотная кожа',
        'подчёркнутые контуры лица',
        'улучшение кровообращения и оттока лимфы',
        'меньше отёков',
        'свежий, сияющий цвет лица'
      ],

      h2Who: 'Кому подходит',
      who: 'Вакуумный массаж лица подойдёт, если кожа теряет упругость, овал поплыл или вы просыпаетесь с отёчным лицом. Это приятный выбор и для тех, кому ручной массаж лица кажется слишком интенсивным — вакуум работает мягко, без давления на кость.',
      h3Contra: 'Когда массаж не проводится',
      contra: [
        'расширенные сосуды (купероз) или очень тонкая кожа',
        'активное акне, герпес или воспаления на коже',
        'недавно введённые филлеры или ботокс (подождите 2–3 недели)',
        'сразу после химического пилинга или лазера',
        'высокая температура и острые заболевания'
      ],
      contraNote: 'Сомневаетесь? Позвоните мне до записи по номеру +420 721 761 411, и мы всё обсудим.',

      h2Price: 'Цена вакуумного массажа лица',
      priceName: 'Вакуумный (баночный) массаж лица',
      priceDesc: 'Массаж лица силиконовыми баночками. Цена окончательная — мы не плательщики НДС.',
      priceMin: '45 мин',

      h2Faq: 'Частые вопросы',
      faq: [
        { q: 'Останутся ли на лице синяки?', a: 'Нет. На лице баночки всё время двигаются, а вакуум слабый, поэтому следов, как после баночного массажа спины, не бывает. Сразу после процедуры кожа может быть слегка розовой.' },
        { q: 'Больно ли это?', a: 'Нет. Вы чувствуете мягкое втягивание и тепло. Силу вакуума я подбираю под вашу кожу, и её можно изменить в любой момент.' },
        { q: 'Можно ли сразу нанести макияж?', a: 'Лучше дать коже отдохнуть хотя бы несколько часов. Удобнее всего прийти без макияжа или снять его в студии.' },
        { q: 'Как часто повторять массаж?', a: 'Для заметного изменения тонуса хорошо работает курс из нескольких процедур с интервалом в неделю. План составим вместе с учётом вашей кожи.' },
        { q: 'Чем он отличается от массажа гуаша?', a: 'Гуаша работает камнем, который скользит по коже и давит на неё. Баночка, наоборот, кожу приподнимает. Оба метода поддерживают отток лимфы и контуры, но отличаются ощущениями и техникой.' }
      ],

      h2Book: 'Запишитесь на вакуумный массаж лица',
      bookText: 'Студия находится в Праге 4 — Нусле, недалеко от Панкраца и Вышеграда. Запись онлайн займёт минуту.',
      h2Related: 'Другие массажи лица'
    }
  }
};
