import { Document } from '@langchain/core/documents';

export const akpaPageDocs = [
  new Document({
    pageContent:
      'AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) është një shërbim publik, person juridik, buxhetor, në varësi të ministrit përgjegjës për punësimin dhe zhvillimin e aftësive (në vijim ministri), me seli në Tiranë. AKPA-ja është tërësia e institucioneve administrative dhe ofruese të shërbimeve të punësimit, të vetëpunësimit dhe të arsimit e formimit profesional, pjesë integrale e sistemit të ministrisë përgjegjëse për punësimin dhe zhvillimin e aftësive. Ai funksionon nëpërmjet Zyrave Rajonale dhe Vendore të Punësimit, Drejtorive Rajonale të Formimit Profesional Publik si edhe Shkollave të Arsimit Profesional Publik',
    metadata: { name: 'akpa', info: 'agjencia punesimit' },
  }),
  new Document({
    pageContent:
      'AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) është krijuar dhe rregullon veprimtarinë e saj, bazuar në dispozitat e Ligjit Nr. 15/2019 ”Për nxitjen e punësimit“, si edhe Ligjit nr. 15/2017 “Për arsimin profesional në RSH”, si edhe me Vendimin e Këshillit të Ministrave nr.554, dt.31.07.2019 “Pёr krijimin, mënyrën e organizimit dhe të funksionimit të Agjencisë Kombëtare të Punësimit dhe Aftësive”',
    metadata: { name: 'akpa', info: 'agjencia punesimit' },
  }),
  new Document({
    pageContent:
      'Strukturat kryesore dhe kompetencat e tyre rregullohen të zbatim në Urdhrit të Kryeministrit Nr. 172, datë 24.12.2019 “Për miratimin e strukturës dhe të organikës së Agjencisë Kombëtare të Punësimit dhe Aftësive” si edhe të Urdhrave të Ministrit për çështjet e punësimit dhe aftësive Për Organikat e Shkollave të Arsimit Professional në zbatim të nenit 7, gërma ç dhe neni 12 pika 4 të ligjit nr 15/2017, “Për arsimin dhe formimin profesional në Republikën e Shqipërisë”',
    metadata: {
      name: 'akpa',
      info: 'kompetencat',
      topic: 'agjencia punesimit',
    },
  }),
  new Document({
    pageContent:
      'Misioni i AKPA-së është të sigurojë përmbushjen e të drejtës së shtetasve shqiptarë, të huaj dhe pa shtetësi të huaj, që kanë përfituar statusin e refugjatit si dhe të azilkërkuesit në territorin e Republikës së Shqipërisë, për t’u trajtuar me shërbime dhe programe publike të punësimit, të vetëpunësimit dhe të kualifikimeve profesionale, me qëllim gjetjen e një pune të përshtatshme, brenda dhe jashtë vendit, si dhe ofrimin e këtyre shërbimeve.',
    metadata: {
      name: 'akpa',
      info: 'misionet e akpa',
      topic: 'agjencia punesimit',
    },
  }),
  new Document({
    pageContent: `AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) ka përgjegjësi:
      a) të garantojë nivelin e cilësisë së shërbimeve të ofruara për punësimin, vetëpunësimin dhe arsimin e formimit profesional, nëpërmjet monitorimit dhe vlerësimit;
      b) të organizojë punën për administrimin dhe zbatimin e programeve aktive e pasive të tregut të punës;
      c) të organizojë punën për administrimin e ofruesve publikë të arsimit dhe formimit profesional (AFP), sipas legjislacionit në fuqi për arsimin dhe formimin profesional në Republikën e Shqipërisë;
      ҫ) të sigurojë se funksionet e lidhura me planifikimin, zbatimin, kontabilitetin dhe raportimin financiar për drejtoritë rajonale, zyrat vendore dhe ofruesit publikë të arsimit dhe formimit profesional, kryhen në përputhje me legjislacionin në fuqi.`,
    metadata: { name: 'akpa', topic: 'agjencia punesimit' },
  }),
  new Document({
    pageContent: `Drejtori Rajonale e Punësimit e AKPA-s është:
    “Struktura përkatëse rajonale/vendore e punësimit”, është struktura që ka kompetencën territoriale në zonën e vendbanimit të personit apo selisë/degës së punëdhënësit, i cili pretendon të përfitojë nga një ose disa shërbime apo programe të ofruara nga kjo strukturë.`,
    metadata: { name: 'akpa', topic: 'agjencia punesimit' },
  }),
  new Document({
    pageContent: `Zyra Vendore e Punësimit e AKPA-s është:
    “Struktura përkatëse rajonale/vendore e punësimit”, është struktura që ka kompetencën territoriale në zonën e vendbanimit të personit apo selisë/degës së punëdhënësit, i cili pretendon të përfitojë nga një ose disa shërbime apo programe të ofruara nga kjo strukturë.`,
    metadata: { name: 'akpa', topic: 'agjencia punesimit' },
  }),
  new Document({
    pageContent: `Mund te kontaktoni me zyrat e punes ne te gjithe Shqiperine ne numrin e telefonit : +35544528363 ose nepermjet emailit : kontakt@akpa.gov.al`,
    metadata: { name: 'akpa', info: 'kontakt akpa' },
  }),
  new Document({
    pageContent: `Zyrat e punes ne te gjithe Shqiperine hapen nga e Hëna deri te Enjten: 08:00-16:30 dhe te Premten: 08:00-14:00.`,
    metadata: { name: 'akpa', info: 'orari' },
  }),
  new Document({
    pageContent: `Institucionet partnere te AKPA jane: e-albania.al, qkb.gov.al, tatime.gov.al, vet.al`,
    metadata: {
      name: 'akpa',
      info: 'institucionet partnere',
      topic: 'agjencia punesimit',
      other: 'zyra punesimit',
    },
  }),
  new Document({
    pageContent: `Veprimtaria administrative e Agjencisë Kombëtare të Punësimit dhe Aftësive, mbështetet pa u kufizuar në to, kryesisht në aktet ligjore dhe nënligjore, si më poshtë vijon:\nKushtetuta e Republikës së Shqipërisë\nLigji nr. 44/2015 “Kodi i Procedurave Administrative i Republikës së Shqipërisë“\nLigji nr. 90/2012 “Për organizimin dhe funksionimin e administratës shtetërore“\nLigji nr.10296, datë 8/7/2010 “Për menaxhimin financiar dhe kontrollin”, i ndryshuar“\nLigji nr. 9367 datë 07.04.2005, “Për parandalimin e Konfliktit të Interesave në Ushtrimin e Funksioneve Publike”, i ndryshuar“\nLigji nr. 9131/2003, “Për Rregullat e Etikës në Administratën Publike“\nLigji nr. 119/2014 “Për të drejtën e informimit”\nLigji nr. 15/2019 “Për nxitjen e punësimit”\nLigji nr. 152/2013 “Për nëpunësin civil”, i ndryshuar“\nLigji 8872, datë 29.3.2002 “Për Arsimin dhe Formimin Profesional në Republikën e Shqipërisë, i ndryshuar“\nVendimin e Këshillit të Ministrave Nr.554, datë 31.07.2019 “Për krijimin, mënyrën e organizimit dhe të funksionimit të Agjencisë Kombëtare të Punësimit dhe Aftësive“\nUrdhri i Kryeministrit nr.172, datë 24.12.2019 “Për miratimin e strukturës dhe organikës së Agjencisë Kombëtare të Punësimit dhe Aftësive“\nVendimin e Këshillit të Ministrave Nr.17 datë 15.01.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programeve të nxitjes së punësimit nëpërmjet punësimit, formimit në punë dhe praktikave profesionale\nVendimin e Këshillit të Ministrave Nr. 348 datë 29.04.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të nxitjes nëpërmjet vetëpunësimit\nVendimin e Këshillit të Ministrave Nr. 535 datë 08.07.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të punëve publike në komunitet\nVendimin e Këshillit të Ministrave Nr. 608, datë 29.07.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të nxitjes nëpërmjet punësimit të personave të dalë të papunë si pasojë e COVID-19`,
    metadata: { name: 'akpa', info: 'veprimtaria administrative' },
  }),
  new Document({
    pageContent: `Agjencia Kombëtare e Punësimit dhe Aftësive, organizon veprimtarinë e tij nëpërmjet:
    Drejtoria Qendrore e AKPA;
    12 Drejtori Rajonale të Agjencisë Kombëtare të Punësimit dhe Aftësive;
    10 Drejtori Rajonale të Ofrimit të Formimit Profesional Publik.
    Misioni i AKPA-së është të sigurojë përmbushjen e të drejtës së shtetasve shqiptarë, të huaj dhe pa shtetësi të huaj, që kanë përfituar statusin e refugjatit si dhe të azilkërkuesit në territorin e Republikës së Shqipërisë, për t’u trajtuar me shërbime dhe programe publike të punësimit, të vetëpunësimit dhe të kualifikimeve profesionale, me qëllim gjetjen e një pune të përshtatshme, brenda dhe jashtë vendit, si dhe ofrimin e këtyre shërbimeve.    
    Këshilli Konsultativ për Punësimin është organ këshillimor që ngrihet pranë AKPA-s me përfaqësimin e organizatave të punëdhënësve, organizatave sindikale, si dhe institucioneve shtetërore.
    Këshilli kryesohet nga ministri dhe përbëhet nga 11 anëtarë si më poshtë:
    a) 1 përfaqësues nga ministria përgjegjëse për financat;
    b) 1 përfaqësues nga ministria përgjegjëse për çështjet sociale;
    c) 1 përfaqësues nga ministria përgjegjëse për arsimin;
    d) 1 përfaqësues nga inspektorati shtetëror që mbulon fushën e punës;
    e) 1 përfaqësues nga Drejtoria e Përgjithshme e Tatimeve;
    f) 1 përfaqësues nga Instituti i Sigurimeve Shoqërore;
    g) 2 përfaqësues nga organizatat më të përfaqësuara sindikale;
    h) 2 përfaqësues nga organizatat më të përfaqësuara të punëdhënësve.`,
    metadata: {
      name: 'akpa',
      info: 'organizimi i akpa',
      topic: 'struktura',
    },
  }),
  new Document({
    pageContent: `Pagesa e Papunësisë në mbështetje të tregut të punës Programet e pagesës së papunësisë janë pjesë e politikave shtetërore të punësimit të cilat sigurojnë mbështetjen me të ardhura të të papunëve në momentin e daljes së tyre si të tillë, duke synuar krijimin e kushteve për rikthimin e tyre në tregun e punës. Programet e Pagesës së Papunësisë synojnë të mbështesin financiarisht të gjithë punëkërkuesit e papunë në rast papunësie për shkak të shkurtimit të vendit të punës, ndërprejes së kontratës së punës, falimentimit të ndërmarjes, zvogëlimit të aktivitetit etj, duke lehtësuar sadopak përpjekjet e tyre drejt punësimit.`,
    metadata: {
      name: 'akpa',
      info: 'pagesa e papunesise',
      topic: 'politika punesimi',
    },
  }),
  new Document({
    pageContent: `Shpall një vend të lirë pune
    Aplikoni për të shpallur një vend të lirë pune
    Shërbimet që ofron Agjencia Kombëtare E Punësimit dhe Aftësive janë shërbime publike që ofrohen nga Zyrat e Punësimit në të gjithë Republikën e Shqipërisë për:
    Punëkërkuesit
    Punëdhënësit
    Shërbimet e punësimit ofrohen në bazë të Ligjit Nr. 7995 date 20.9.1995 “Për nxitjen e punësimit”, i ndryshuar me ligjin nr. 8444 21.1.1999, ndryshuar me ligjin nr. 8862 date 7.3.2002, si dhe me ligjin nr 9570 date 3.7.2006, specifikisht sipas nenit 6 dhe 6/1 , nenit 7 dhe 7/1 .
    “Punëkërkues” eshte çdo person i papunë, i disponushem për punësim, i cili paraqitet periodikisht në zyrën përkatese të punesimit, perfshire edhe personat, te cilet janë në marrëdhënie pune ose të vetëpunësuar, por qe kërkojnë nje punë të re.`,
    metadata: { name: 'akpa', info: 'shpall vende pune' },
  }),
  new Document({
    pageContent: `Të huajit i refuzohet/anullohet leja e punës e tipit "A/P", sipas kushteve të paracauktuara në VKM: VKM-të në mbështetje të_Ligjit për të huajt`,
    metadata: {
      name: 'akpa',
      info: 'leja e punes',
      topic: 'i huaj',
    },
  }),
  new Document({
    pageContent: `PROGRAMI I FORMIMIT NËPËRMJET PUNËS ka si qëllim trajnimin në punë të PuPa, në të cilin nevojat e tyre përshtaten me kërkesat për aftësi të vendit të lirë të punës, të ofruar nga punëdhënësi. Kohëzgjatja e subvencionimit të këtij programi do të jetë për një periudhë 4-mujore, për të gjitha profesionet. Gjithashtu, programi subvencionon edhe 8 muaj të tjerë nëse punëdhësësi lidh kontrate punësimi me PuPa. Plani individual i trajnimit hartohet nga punëdhënësi si pjesë e formularit të aplikimit sipas një formati të miratuar. Çdo punëdhënës cakton të paktën një trajner për çdo grup përfituesish nga një deri në shtatë persona përfitues, të përfshirë në program.`,
    metadata: { name: 'akpa', info: 'programi i formimit' },
  }),
  new Document({
    pageContent: `PROGRAMI I PUNËSIMIT është një program NJË VJECAR PUNËSIMI, në të cilin nevojat e punëkërkuesit përshtaten me kërkesat për aftësi të vendit të lirë të punës, të ofruar nga punëdhënësi. Paga përcaktohet në kontratën e punës në përputhje me pozicionin përkatës dhe nivelin e pagave në treg.`,
    metadata: { name: 'akpa', info: 'programi i punesimit' },
  }),
  new Document({
    pageContent: `Programi i Praktikës Profesionale
    Aplikoni në Programet e Praktikës Profesionale
    Programi i praktikave profesionale ka si qëllim të garantojë tranzicion të shpejtë në tregun e punës, në të njëtën fushë ose në një fushë të ngjashme me atë, në të cilën ka studiuar i diplomuari. Kohëzgjatja e subvencionimit të këtij programi do të jetë për një periudhë 6 mujore.`,
    metadata: {
      name: 'akpa',
      info: 'programi praktikes profesionale',
      topic: 'praktike',
    },
  }),
  new Document({
    pageContent: `Programet COVID
    Programi i punësimit të personave të dale papunë si pasojë e COVID-19 është një program 4, 8 ose 12-mujor punësimi, në të cilin profili dhe nevojat e punëkërkuesit përshtaten me vendin e lirë nga punëdhënësi. Paga përcaktohet në kontratën e punës në përputhje me pozicionin përkatës dhe nivelin e pagave në treg.`,
    metadata: {
      name: 'akpa',
      info: 'programi covid',
      topic: 'agjencia punesimit',
      other: 'papunesia',
    },
  }),
  new Document({
    pageContent: `Kurset profesionale konsiderohen kualifikime profesionale afat shkurtër që ofrohen nga Drejtoritë Rajonale të Formimit Profesional, (QFP) për kategori individësh të ndryshëm.
    Qendrat e Formimit Profesional ofrojnë, kurse profesionale në Nivel kombëtar dhe kurse profesionale në Nivel qendre.
    Nëse kurset profesionale të Nivelit kombëtar janë unike për të gjitha QFP kurset profesionale në Nivel qendre, janë kurse specifike që ofrohen në funksion të kërkesave që ka biznesi lokal etj.
    Kurset në nivel Kombëtar ofrohen të unifikuara sipas Programeve të hartuara nga AKAFPK dhe të miratuara nga Ministri, ndërsa kurset në Nivel Qendre, zhvillohen sipas Programeve të hartuara nga specialistët e qëndrës, në bashkëpunim me ato të biznesit përkatës.`,
    metadata: {
      name: 'akpa',
      info: 'kurs profesional',
      other: 'kurs',
    },
  }),
  new Document({
    pageContent: `Zakonisht Kurset Kombëtare janë kualifikime profesionale jo më shumë se 2 vite, ndërsa ato në Nivel Qendre janë kurse për kualifikime të shkurtra, për procese te ndryshme teknologjike, per nevoja specifike te bizneseve lokale etj.
    Në përfundim të kurseve të gjithë kursantët pajisen më Certifikatë.
    Për disa kategori, të papunësh (të regjistruar në zyrat e punësimit) dhe persona nga grupet nё nevojё, Kurset e formimit profesional në Qendrat e Formimit Profesional Publik ofrohen falas.
    Nё grupet nё nevojё pёrfshihen:
    Pjesёtarё tё komunitetit Rom;
    Vajzat dhe gratё e trafikuara;
    Personat qё kanё vuajtur dёnimet me burgim;
    Jetimёt (sipas statusit);
    Personat me aftёsi tё kufizuara;
    Emigrantё tё kthyer me probleme ekonomike.
    Regjistrimi i personave tё sipёr përmendur bёhet nёpёrmjet Zyrave tё punёsimit, bazuar nё dokumentacionin qё vёrteton statusin. Drejtoritё Rajonale tё Formimit Profesional Publik mbajnё dokumentacionin vërtetues pёr çdo aplikant nё dosje tё veçantё.
    Pёr personat e tjerё që duan të ndjekin kurset e formimit profesional tё ofruara nga Qendrat Publike të Formimit Profesional, tarifa e regjistrimit dhe tarifat e shёrbimeve tё tjera vendosen nga Bordi Drejtues i secilёs Drejtori Rajonale tё Formimit Profesional Publik.`,
    metadata: {
      name: 'akpa',
      info: 'kurse kombetare',
      other: 'papunesia',
    },
  }),
  new Document({
    pageContent: `Si të gjej një punë?
    Nëse je në kërkim të një punë, ka disa mënyra për ta gjetur atë:
    1. Kërkoni online! Plotësoni fushën që doni në kutinë “Kërko punë” ose vizitoni
    seksionin “Gjeni zgjedhjen e duhur mes mijëra ofertash”, klikoni mbi vendin vakant
    që ju përshatet dhe shikoni detajet. Aplikoni direkt për punën e preferuar. Nëse jeni i/e
    duhuri/a, punëdhënësi do të kontaktojë me ju.
    Shënim: AKPA nuk është përgjegjëse për marrëdhënien punëkërkues-punëdhënës.
    2. Paraqituni në Zyrën e Punës më të afërt me vendbanimin tuaj!
    Aplikoni online në shërbimin “Aplikim për regjistrim si punëkërkues” në linkun
    https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12550
    Specialitët tanë të punësimit do t'iu kontaktojnë për të ngritur së bashku një plan individual punësimi dhe t'iu ofrojnë mundësitë më të mira të punësimit.`,
    metadata: {
      name: 'akpa',
      info: 'gjej pune',
      topic: 'kerko pune',
      other: 'apliko pune',
    },
  }),
  new Document({
    pageContent: `Si të gjej një punë?
    Nëse je në kërkim të një punë, ka disa mënyra për ta gjetur atë:
    1. Kërkoni online! Plotësoni fushën që doni në kutinë “Kërko punë” ose vizitoni
    seksionin “Gjeni zgjedhjen e duhur mes mijëra ofertash”, klikoni mbi vendin vakant
    që ju përshatet dhe shikoni detajet. Aplikoni direkt për punën e preferuar. Nëse jeni i/e
    duhuri/a, punëdhënësi do të kontaktojë me ju.
    Shënim: AKPA nuk është përgjegjëse për marrëdhënien punëkërkues-punëdhënës.`,
    metadata: {
      name: 'akpa',
      info: 'gjej pune',
      topic: 'kerko pune',
    },
  }),
  new Document({
    pageContent: `Si të shkruaj një letër motivimi?
    Është një ide e mirë të investoni pak kohë dhe përpjekje për të shkruar letrën tuaj të
    motivimit, pasi ajo që shkruani mund t&#39;ju ndihmojë të fitoni një intervistë pune. Qëllimi i
    letrës së motivimit është të tërheqë vëmendjen e rekrutuesit në mënyrë që të vijoni me
    intervistën e punës.
    Në letrën e motivimit, ju do të përshkruani:
    1. pse po aplikoni për punë;
    2. si i përmbushni kriteret e përzgjedhjes për pozicionin;
    3. pse duhet të përzgjidheni për punën në fjalë.
    Letra e motivimit duhet të japë një përshtypje pozitive për ju. Ajo duhet të jetë e përmbledhur
    dhe drejtuar specifikisht për punëdhënësin, pozicionin për të cilin po aplikoni. Ju përshkruani
    sfondin dhe historinë tuaj të punës në CV-në tuaj, por në letrën e motivimit, fokusi është tek e
    ardhmja.`,
    metadata: {
      name: 'akpa',
      info: 'leter motivimi',
    },
  }),
  new Document({
    pageContent: `Si të shkruaj një letër motivimi?
    Në letrën e motivimit, ju mund të përshkruani veten dhe kompetencat tuaja në mënyrë më
    joformale. Ju duhet të theksoni edhe pikat tuaja të forta që janë të dobishme për pozicionin
    për të cilin po aplikoni. Përveç përshkrimit të tyre, është thelbësore të shpjegoni në letrën e
    motivimit se çfarë mund t&#39;i ofroni organizatës.
    Nëse po aplikoni për një pozicion për të cilin nuk keni ndonjë përvojë të mëparshme,
    shpjegoni se si aftësitë tuaja i përshtaten pozicionit dhe theksoni motivimin, qëndrimin tuaj
    dhe aftësinë për të mësuar.
    Në fund, duhet të kryeni një kontroll drejtshkrimi në tekstin tuaj. Letra e motivimit është një
    mundësi për të demonstruar aftësitë tuaja, ku edhe detajet e vogla kanë rëndësi. Prandaj,
    sigurohuni që të mos ketë gabime drejtshkrimore në tekst.`,
    metadata: { name: 'akpa', info: 'leter motivimi' },
  }),
  new Document({
    pageContent: `Si të shkruaj një CV?
    Kur punoni për një CV, përpiquni ta bëni atë gjithëpërfshirëse por edhe të qartë.
    Shprehuni në mënyrë koncize. Në fund të fundit, është shumë e rëndësishme që rekrutuesi
    të gjejë lehtësisht dhe shpejt informacionin përkatës, pasi nuk i kushtohet
    domosdoshmërisht shumë kohë çdo CV-je individuale.
    Një CV e mirë është vizualisht interesante, e qartë dhe e lehtë për t&#39;u kuptuar. Tregon
    shpejt nëse i përmbushni kërkesat e pozicionit.
    Është një ide e mirë që të përshkruani përvojën tuaj të punës dhe informacionin arsimor
    në rend kronologjik, me përvojën më të fundit. Përshkruani shkurtimisht secilën nga
    përvojat tuaja të punës. Përshkruani se çfarë kanë përfshirë detyrat tuaja dhe çfarë keni
    mësuar nga puna. Përveç përvojës së punës, ju gjithashtu mund të përshkruani aftësitë
    tuaja gjuhësore dhe IT, dhe të ofroni një listë të referencave.
    Kontrolloni që CV-ja juaj të përfshijë informacionin tuaj të kontaktit.`,
    metadata: { name: 'akpa', info: 'CV', other: 'resume' },
  }),
  new Document({
    pageContent: `Jam person me aftësi të kufizuar. Si mund të më ndihmoni?
    Ndërsa një sëmundje ose paaftësi mund të zvogëlojë aftësinë tuaj të punës dhe kapacitetin
    funksional, kjo nuk do të thotë që ju duhet të dekurajoheni. Mundësitë tuaja për të punuar
    dhe për të gjetur një punë të përshtatshme përmirësohen nga:
    1. një punë e zgjedhur saktë,
    2. mjedisi i përshtatur,
    3. aftësitë dhe trajnimet e duhura,
    4. mbështetje për punësim.
    Aplikoni online në shërbimin “Aplikim për regjistrim si punëkërkues” në linkun
    https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12550
    Specialitët tanë të punësimit do t'iu kontaktojnë për të ngritur së bashku një plan
    individual punësimi dhe t'iu ofrojnë mundësitë më të mira të punësimit.`,
    metadata: {
      name: 'akpa',
      info: 'aftesi te kufizuara',
      topic: 'papunesi',
      other: 'semundje',
    },
  }),
  new Document({
    pageContent: `Jam i huaj. Ku mund të aplikoj për leje unike?
    Një procedurë e vetme aplikimi për ju që jeni të huaj dhe doni të punoni në Republikën e
    Shqipërisë.
    Aplikoni në shërbimin “Leje unike/Unique permit” (qëndrimi për motive punësimi),
    ngarkoni dokumentacionin përkatës sipas tipit të punësimit dhe ndiqni të gjitha hapat për
    tu integruar në tregun e punës në Shqipëri.`,
    metadata: { name: 'akpa', info: 'leje', other: 'huaj' },
  }),
  new Document({
    pageContent: `A është e mundur të kem biznesin tim?
    Agjencia Kombëtare e Punësimit dhe Aftësive ju mbështet me Programin e
    Vetëpunësimit, i cili synon të inkurajojë sipërmarrjet e reja për punëkërkuesit e papunë të
    interesuar. Përmes këtij programi, ju do të keni mundësinë të hapni biznesin tuaj.
    Programi i Vetëpunësimit mbështet bizneset e reja në fazat e tyre të hershme duke ofruar
    trajnime për sipërmarrjen, zhvillimin e planeve të biznesit për aplikantët, si dhe grante
    deri në 500,000 lekë për fituesit. Ju mund të aplikoni për Programin e Vetëpunësmit në linkun: https://www.puna.gov.al/profili/punekerkues/programVetepunesimi`,
    metadata: {
      name: 'akpa',
      info: 'vetepunesim',
      otherInfo: 'biznes',
      data: 'program vetepunesimi',
      topic: 'mbeshtetja ekonomike',
    },
  }),
  new Document({
    pageContent: `Si të aplikoj për programin e Garancisë Rinore?
    Nëse je një i ri i moshës 15-29 vjeç dhe nuk ndjek aktualisht një punë, formim profesional
    ose arsim, mund të përfitosh nga programi më i ri i Garancisë Rininore, i cili po pilotohet
    në Shqipëri në tre bashki: Tiranë, Vlorë dhe Shkodër. Për shërbimin mund të aplikoni
    përmes e-Albania , Aplikimi për Programin e Garancisë Rinore (Punësimi, Arsimi dhe
    Formimi Profesional) .
    Duke përfituar nga ky shërbim, Programi i Garancisë Rinore ju lejon që aplikimi juaj të
    trajtohet brenda 4 muajve.
    Garancia Rinore në Shqipëri përfshin një garanci trajtimi, që do të thotë se çdo person që
    përfundon arsimin bazë ka mundësinë të ndjekë arsimin e mëtejshëm në:
    1. një shkollë të mesme, të lartë ose shkollë profesionale,
    2. zhvillimi e një praktike profesionale,
    3. punësim,
    4. zhvillimin e një kursi profesional.`,
    metadata: {
      name: 'akpa',
      info: 'program rinor',
      otherInfo: 'Garancisa Rinore',
      topic: 'mbeshtetja ekonomike',
    },
  }),
  new Document({
    pageContent: `Si mund të aplikoj për një praktikë profesionale?
    Programi i praktikave profesionale synon të ofrojë një eksperiencë praktike në fushën
    e studimit. Nëse keni përfunduar brenda 3 viteve të fundit studimet e larta ose arsimin
    e mesëm profesional, ju mund të përfitoni nga Programi i Nxitjes së Punësimit për
    Praktikat Profesionale. Më parë aplikoni për tu rregjistruar si punëkërkues në
    shërbimin “Aplikim për regjistrim si punëkërkues” në linkun https://e-
    albania.al/eAlbaniaServices/UseService.aspx?service_code=12550
    Specialitët tanë të punësimit do t'iu kontaktojnë për të ngritur së bashku një plan
    individual punësimi.`,
    metadata: {
      name: 'akpa',
      info: 'praktike profesionale',
      topic: 'mbeshtetja ekonomike',
    },
  }),
  new Document({
    pageContent: `Kam humbur vendin e punës, çfarë duhet të bëj?
    Nëse keni humbur vendin e punës dhe kërkoni një punë, ju mund të hapni llogarinë tuaj si
    punëkërkues në portalin puna.gov.al dhe të ndiqni vendet e lira të punës të shpallura
    online.
    Ju gjithashtu mund të aplikoni për regjistrim si punëkërkues në “Aplikimi për regjistrim si
    punëkërkues".
    Gjithashtu, ju mund të përfitoni mbështetje financiare nga programi i pagesës së
    papunësisë. Këto programe synojnë të mbështesin financiarisht të gjithë punëkërkuesit e
    papunë në rastet e papunësisë për shkak të shkurtimeve të vendeve të punës, përfundimit
    të kontratës, falimentimit të biznesit, uljes së aktivitetit etj, duke lehtësuar përpjekjet e
    tyre drejt ripunësimit. Aplikoni në shërbimin online “Kërkesë për përfitimin e pagesës së
    të ardhurës nga papunësia” dhe plotësoni dokumentacionin përkatës, brenda 60 ditëve nga
    data e shkëputjes së marrëdhënieve financiare me punëdhënësin.`,
    metadata: {
      name: 'akpa',
      data: 'humb',
      info: 'Humb vend pune',
      topic: 'mbeshtetja ekonomike',
    },
  }),
  new Document({
    pageContent: `Si të aplikoj për një kurs formimi profesional?
    Ju mund të përftoni një profesion mëpërmjet kurseve afatshkurtra apo afatgjata të ofruara
    nga Qendrat Publike të Formimit Profesional të cilat për punëkërkuesit e papunë ofrohen
    pa pagesë ndërkohë për të gjithë të interesuarit e tjerë me kosto të reduktuara. Nëpërmjet
    kurseve profesionale ju mund zhvilloni më tej aftësitë ekzistuese apo mund të ndryshoni
    karrierën tuaj duke përftuar një profesion i cili do t’ju sigurojë integrim në tregun e punës
    dhe ardhura mjaft të kënaqshme. Për këtë shërbim duhet të aplikoni nëpërmjet e-Albania
    në linkun "Aplikim për regjistrim në kurset e formimit profesional", https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12549`,
    metadata: { name: 'akpa', info: 'kurs formimi profesional' },
  }),
  new Document({
    pageContent: `Si mund të aplikoj për një nga kurset e kodimit?
    Nëse po kërkoni të përmirësoni aftësitë tuaja në fushën e teknologjisë, Agjencia
    Kombëtare e Punësimit dhe Aftësive (AKPA) ka zhvilluar dhe po zbaton Programin e
    Kodimit. Mund të regjistroheni në portalin qeveritar e-Albania dhe të aplikoni për
    shërbimin  "Aplikim për kurse të formimit profesional me mbështetje financiare" . Nëse jeni
    punëkërkues i papunë i regjistruar në Zyrën e Punës, mund ta përfitoni këtë shërbim pa pagesë. Për më shume mund të vizitoni linkun : https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15126`,
    metadata: {
      name: 'akpa',
      info: 'kurs kodimi',
      data: 'teknologji',
      topic: 'formimi profesional',
    },
  }),
  new Document({
    pageContent: `Çfarë përfitoj nëse regjistrohem si punëkërkues në puna.gov.al?
    Regjistrimi në puna.gov.al ju lejon të:
    - Aplikoni online për punë dhe ndiqni aplikimet për punët tuaja,
    - Merrni njoftime bazuar në preferencat e punës tuaj,
    - Automatikisht krijoni një CV duke përdorur informacionin e profilit tuaj,
    - Merrni dhe përgjigjeni me mesazhe me punëdhënësit e interesuar.`,
    metadata: {
      name: 'akpa',
      info: 'regjistrim si punekerkues',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `e-Albania shfaqet në ekranin tim të identifikimit, për çfarë shërben?
    e- Albania është platforma qeveritare e shërbimeve digjitale në Shqipëri. Ajo ofron një gamë
    të gjerë të shërbimeve online për qytetarët, ndërmarrjet dhe institucionet qeveritare. e-Albania
    përmirëson qasjen dhe efikasitetin e shërbimeve qeveritare duke i bërë ato të disponueshme
    online. e-Albania ju jep akses të sigurt, në internet, në shërbimet e qeverisë. Kur përdorni
    puna.gov.al, mund të drejtoheni në e-Albania për të konfirmuar identitetin tuaj (kjo quhet
    autentifikim).`,
    metadata: { name: 'akpa', info: 'identifikim e-albania', topic: 'portali' },
  }),
  new Document({
    pageContent: `Si të aplikoj për punën që më pëlqen në puna.gov.al?
    Klikoni mbi vendin vakant që ju përshatet dhe shikoni detajet. Aplikoni direkt për punën e
    preferuar duke klikuar “Apliko”. Punëdhënësi do të kontaktojë me ju sapo të shohë aplikimin.`,
    metadata: {
      name: 'akpa',
      info: 'aplikim ne punen e preferuar',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `A mund të shoh punët për të cilat kam aplikuar?
    Kjo është një nga përfitimet e regjistrimit si punëkërkues në portalin kombëtar të punësimit
    dhe aftësive. Mund të shihni të gjitha punët për të cilat keni aplikuar në Aplikimet e mia, në
    llogarinë tuaj. Nëse puna nuk është më e disponueshme dhe ka kaluar afati, atëherë ajo do të
    fshihet nga dosja e aplikimeve.`,
    metadata: {
      name: 'akpa',
      info: 'aplikim pune ',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `A duhet të plotësoj të gjitha fushat në profilin tim të punëkërkuesit për të aplikuar për
    një punë?
    Jo. Mund të aplikoni për një punë pa plotësuar të gjitha të dhënat në profilin tuaj. Por, mos
    harroni! Punëdhënësi do të vlerësojë më shumë një profil të plotësuar me të gjitha të dhënat.
    Një e dhënë e paplotësuar mund të ulë shanset tuaja për punësim. Mund të plotësoni profilin
    tuaj gradualisht apo të ndryshoni të dhënat tuaja, pasi portali ju lejon të ruani ndryshimet çdo
    herë që jepni më shumë informacion.`,
    metadata: {
      name: 'akpa',
      info: 'profili',
      who: 'punekerkues',
      what: 'aplikim',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `A mund të aplikoj për punë por të mos shfaqen të dhënat e mia personale si emri dhe
    detajet e kontaktit?
    Jo, ju nuk mundeni të fshihni detajet personale.`,
    metadata: {
      name: 'akpa',
      info: 'te dhena personale',
      other: 'aplikim',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `Do të marr njoftime për punët e përshtatshme nga puna.gov.al?
    Ju do të merrni mesazhe nga puna.gov.al kur vendet e lira të punës përputhen me profilin
    tuaj.`,
    metadata: {
      name: 'akpa',
      info: 'njoftim pune',
      topic: 'portali',
      other: 'punekerkues',
    },
  }),
  new Document({
    pageContent: `Pse më shfaqen punë që janë larg vendbanimit tim?
    Puna e përshtatshme në puna.gov.al nuk merr parasysh vendndodhjen tuaj. Nëse dëshironi të
    gjeni oferta pune në zonën tuaj, ju lutemi përdorni opsionin e kërkimit sipas vendndodhjes.`,
    metadata: {
      name: 'akpa',
      info: 'pune larg',
      topic: 'portali',
      other: 'vendndodhje',
    },
  }),
  new Document({
    pageContent: `Ku mund të gjej informacione mbi shërbimet apo programet që përfitoj?
    Ju do të gjeni informacione të detajuara në menunë “Punëkërkues”. Duke klikuar mbi
    “Punëkërkues” ju do t'iu shfaqen të gjitha shërbimet që ju mund të përfitoni.`,
    metadata: {
      name: 'akpa',
      info: 'informacione mbi programet',
      topic: 'portali',
    },
  }),
  new Document({
    pageContent: `Ku mund të drejtohem për ndihmë nëse has vështirësi në përdorimin e faqes?
    Ne ju mbështesim në disa mënyra:
    -Na kontaktoni në ëats app çdo ditë nga e hëna në të enjte në orën 8.00-16.30 dhe ditën e
    premte 8.00-14.00 në numrin 06x xx xxx ose na dërgoni email në adresën zyrtare
    kontakt@akpa.gov.al dhe ekipi ynë do tiu mbështesë për paqartësitë tuaja.`,
    metadata: {
      name: 'akpa',
      info: 'kontakt',
      topic: 'portali, faqja',
      otherInfo: 'ndihme, veshtiresi',
    },
  }),
  new Document({
    pageContent: `Si mund të regjistrohem si punëdhënës?
    Është shume e thjeshtë. Regjistrohuni nëpërmjet shërbimit “Aplikim për regjistrimin e
    punëdhënësit” https://e-
    albania.al/eAlbaniaServices/UseService.aspx?service_code=12551`,
    metadata: {
      name: 'akpa',
      info: 'regjistrim si punedhenes',
      role: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `Si mund të shpall një vend të lirë pune në portal?
    Rregjistroni vendet e lira të punës në shërbimin në e-Albania “Aplikim për rregjistrim
    të vendit të lirë të punës” https://e-
    albania.al/eAlbaniaServices/UseService.aspx?service_code=12552
    Përvec kandidatëve të sugjeruar nga punonjësit e Zyrës së Punës, tashmë cdo person i
    interesuar për vendin tuaj të punës mund të aplikojë direkt për të. Vlerësoni aplikimet
    dhe ndërveproni për të përzgjedhur së bashku kandidatët më të përshtatshëm!`,
    metadata: {
      name: 'akpa',
      info: 'vend te ri pune',
      other: 'shpall',
      topic: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `Sa kushton të shpall vendet e lira të punës në Portalin e Punësimit puna.gov.al?
    Ju mund të shpallni vendet e lira të punës falas, pa pagesë.`,
    metadata: {
      name: 'akpa',
      info: 'kosto e shpalljes se vendit te ri te punes',
      role: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `A mund ta përdor puna.gov.al nëse biznesi im nuk është i regjistruar në Zyrat e Punës?
    Po. Ju mund të hapni një llogari në Portalin e Punësimit dhe Aftësive puna.gov.al.
    Por, përpara se ju të shpallni vendet e lira të punës, rregjistrohuni si fillim nëpërmjet
    shërbimit “Aplikim për regjistrimin e punëdhënësit” https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12551
    Direkt më pas, shpallni vendet e lira të punës në “Aplikim për rregjistrim të vendit të
    lirë të punës” https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12552
    Punonjësit tanë do të kontaktojnë me ju për të zgjedhur së bashku kandidatët më të
    përshtatshëm!`,
    metadata: {
      name: 'akpa',
      info: 'platforma',
      otherInfo: 'regjistrim ne AKPA',
      topic: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `A mund të kontaktoj punëkërkuesit që kanë aplikuar për vendet e lira të punës që unë
    kam shpallur?
    Po. Ju mund të kontaktoni punëkërkuesit që kanë aplikuar për vendin e punës që ju
    keni shpallur. Ju gjithashtu mund të kontaktoni edhe punëkërkuesit që janë referuar
    nga specialistët tanë për vendin tuaj të punës.`,
    metadata: {
      name: 'akpa',
      info: 'kontakt punekerkuesit',
      topic: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `Ku mund të gjej informacion në lidhje me programet që përfitoj?
    Ju do të gjeni informacion të detajuar mbi shërbimet dhe programet e punësimit duke
    klikuar menunë “Punëdhënës”. Gjithashtu, ju mund të kërkoni situatën tuaj të
    specifikuar në fund të faqes.`,
    metadata: {
      name: 'akpa',
      info: 'programet e punedhenesit',
      roltopice: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `Ku mund të aplikoj për programet e nxitjes së punësimit?
    Programet e nxitjes së punësimit kanë për qëllim të mbështesin punësimin e
    punëkërkuesve të papunë të regjistruar në zyrat e punësimit duke subvencionuar bizneset.
    Ju mund të aplikoni për programet e nxitjes së punësimit në shërbimin “Aplikim për
    programet e nxitjes së punësimit” në linkun https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=12548`,
    metadata: {
      name: 'akpa',
      info: 'programet nxitje punesimit',
      topic: 'punedhenes',
    },
  }),
  new Document({
    pageContent: `Si mund të aplikoj për rimbursimin mujor të programeve të nxitjes së punësimit?
    Nëse tashmë jeni duke zbatuar një nga programet e nxitjes së punësimit, rimbursimi i
    shpenzimeve mujore është shumë i thjeshtë.
    Mjafton të plotësoni kërkesën online në shërbimin &quot;Aplikim për Rimbursimin e
    Programeve të Nxitjes së Punësimit&quot;, të ngarkoni dokumentat e nevojshme dhe ju do të
    përfitoni të gjitha shpenzimet sipas programit specifik.`,
    metadata: {
      name: 'akpa',
      info: 'rimbursim mujor',
      topic: 'punedhenes',
      other: 'program punesimi',
    },
  }),
  new Document({
    pageContent: `Çfarë procedure duhet të ndjek për të punësuar një punonjës të huaj?
    Një procedurë e vetme aplikimi për ju punëdhënës që doni të punësoni shtetas të huaj.
    Apliko në shërbimin “Leje unike/Unique permit”, në litopicnkun https://e-albania.al/eAlbaniaServices/UseService.aspx?service_code=15146 . Ngarkoni
    dokumentacionin përkatës dhe rritni fuqinë punëtore me shtetas të huaj.`,
    metadata: {
      name: 'akpa',
      info: 'puneso te huaj',
      other: 'huaj',
      topic: 'punedhenes',
    },
  }),
];
