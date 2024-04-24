import { Document } from '@langchain/core/documents';

export const akpaPageDocs = [
  new Document({
    pageContent:
      'AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) është një shërbim publik, person juridik, buxhetor, në varësi të ministrit përgjegjës për punësimin dhe zhvillimin e aftësive (në vijim ministri), me seli në Tiranë. AKPA-ja është tërësia e institucioneve administrative dhe ofruese të shërbimeve të punësimit, të vetëpunësimit dhe të arsimit e formimit profesional, pjesë integrale e sistemit të ministrisë përgjegjëse për punësimin dhe zhvillimin e aftësive. Ai funksionon nëpërmjet Zyrave Rajonale dhe Vendore të Punësimit, Drejtorive Rajonale të Formimit Profesional Publik si edhe Shkollave të Arsimit Profesional Publik',
    metadata: { name: 'akpa' },
  }),
  new Document({
    pageContent:
      'AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) është krijuar dhe rregullon veprimtarinë e saj, bazuar në dispozitat e Ligjit Nr. 15/2019 ”Për nxitjen e punësimit“, si edhe Ligjit nr. 15/2017 “Për arsimin profesional në RSH”, si edhe me Vendimin e Këshillit të Ministrave nr.554, dt.31.07.2019 “Pёr krijimin, mënyrën e organizimit dhe të funksionimit të Agjencisë Kombëtare të Punësimit dhe Aftësive”',
    metadata: { name: 'akpa' },
  }),
  new Document({
    pageContent:
      'Strukturat kryesore dhe kompetencat e tyre rregullohen të zbatim në Urdhrit të Kryeministrit Nr. 172, datë 24.12.2019 “Për miratimin e strukturës dhe të organikës së Agjencisë Kombëtare të Punësimit dhe Aftësive” si edhe të Urdhrave të Ministrit për çështjet e punësimit dhe aftësive Për Organikat e Shkollave të Arsimit Professional në zbatim të nenit 7, gërma ç dhe neni 12 pika 4 të ligjit nr 15/2017, “Për arsimin dhe formimin profesional në Republikën e Shqipërisë”',
    metadata: { name: 'akpa', info: 'kompetencat' },
  }),
  new Document({
    pageContent:
      'Misioni i AKPA-së është të sigurojë përmbushjen e të drejtës së shtetasve shqiptarë, të huaj dhe pa shtetësi të huaj, që kanë përfituar statusin e refugjatit si dhe të azilkërkuesit në territorin e Republikës së Shqipërisë, për t’u trajtuar me shërbime dhe programe publike të punësimit, të vetëpunësimit dhe të kualifikimeve profesionale, me qëllim gjetjen e një pune të përshtatshme, brenda dhe jashtë vendit, si dhe ofrimin e këtyre shërbimeve.',
    metadata: { name: 'akpa', info: 'misionet e akpa' },
  }),
  new Document({
    pageContent: `AGJENCIA KOMBËTARE E PUNËSIMIT DHE AFTËSIVE (AKPA) ka përgjegjësi:
      a) të garantojë nivelin e cilësisë së shërbimeve të ofruara për punësimin, vetëpunësimin dhe arsimin e formimit profesional, nëpërmjet monitorimit dhe vlerësimit;
      b) të organizojë punën për administrimin dhe zbatimin e programeve aktive e pasive të tregut të punës;
      c) të organizojë punën për administrimin e ofruesve publikë të arsimit dhe formimit profesional (AFP), sipas legjislacionit në fuqi për arsimin dhe formimin profesional në Republikën e Shqipërisë;
      ҫ) të sigurojë se funksionet e lidhura me planifikimin, zbatimin, kontabilitetin dhe raportimin financiar për drejtoritë rajonale, zyrat vendore dhe ofruesit publikë të arsimit dhe formimit profesional, kryhen në përputhje me legjislacionin në fuqi.`,
    metadata: { name: 'akpa' },
  }),
  new Document({
    pageContent: `Drejtori Rajonale e Punësimit e AKPA-s është:
    “Struktura përkatëse rajonale/vendore e punësimit”, është struktura që ka kompetencën territoriale në zonën e vendbanimit të personit apo selisë/degës së punëdhënësit, i cili pretendon të përfitojë nga një ose disa shërbime apo programe të ofruara nga kjo strukturë.`,
    metadata: { name: 'akpa' },
  }),
  new Document({
    pageContent: `Zyra Vendore e Punësimit e AKPA-s është:
    “Struktura përkatëse rajonale/vendore e punësimit”, është struktura që ka kompetencën territoriale në zonën e vendbanimit të personit apo selisë/degës së punëdhënësit, i cili pretendon të përfitojë nga një ose disa shërbime apo programe të ofruara nga kjo strukturë.`,
    metadata: { name: 'akpa' },
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
    metadata: { name: 'akpa', info: 'institucionet partnere' },
  }),
  new Document({
    pageContent: `Veprimtaria administrative e Agjencisë Kombëtare të Punësimit dhe Aftësive, mbështetet pa u kufizuar në to, kryesisht në aktet ligjore dhe nënligjore, si më poshtë vijon:\nKushtetuta e Republikës së Shqipërisë\nLigji nr. 44/2015 “Kodi i Procedurave Administrative i Republikës së Shqipërisë“\nLigji nr. 90/2012 “Për organizimin dhe funksionimin e administratës shtetërore“\nLigji nr.10296, datë 8/7/2010 “Për menaxhimin financiar dhe kontrollin”, i ndryshuar“\nLigji nr. 9367 datë 07.04.2005, “Për parandalimin e Konfliktit të Interesave në Ushtrimin e Funksioneve Publike”, i ndryshuar“\nLigji nr. 9131/2003, “Për Rregullat e Etikës në Administratën Publike“\nLigji nr. 119/2014 “Për të drejtën e informimit”\nLigji nr. 15/2019 “Për nxitjen e punësimit”\nLigji nr. 152/2013 “Për nëpunësin civil”, i ndryshuar“\nLigji 8872, datë 29.3.2002 “Për Arsimin dhe Formimin Profesional në Republikën e Shqipërisë, i ndryshuar“\nVendimin e Këshillit të Ministrave Nr.554, datë 31.07.2019 “Për krijimin, mënyrën e organizimit dhe të funksionimit të Agjencisë Kombëtare të Punësimit dhe Aftësive“\nUrdhri i Kryeministrit nr.172, datë 24.12.2019 “Për miratimin e strukturës dhe organikës së Agjencisë Kombëtare të Punësimit dhe Aftësive“\nVendimin e Këshillit të Ministrave Nr.17 datë 15.01.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programeve të nxitjes së punësimit nëpërmjet punësimit, formimit në punë dhe praktikave profesionale\nVendimin e Këshillit të Ministrave Nr. 348 datë 29.04.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të nxitjes nëpërmjet vetëpunësimit\nVendimin e Këshillit të Ministrave Nr. 535 datë 08.07.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të punëve publike në komunitet\nVendimin e Këshillit të Ministrave Nr. 608, datë 29.07.2020 “Për procedurat, kriteret dhe rregullat për zbatimin e programit të nxitjes nëpërmjet punësimit të personave të dalë të papunë si pasojë e COVID-19`,
    metadata: { name: 'akpa', info: 'veprimtaria' },
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
    metadata: { name: 'akpa', info: 'organizimi i akpa' },
  }),
  new Document({
    pageContent: `Pagesa e Papunësisë në mbështetje të tregut të punës Programet e pagesës së papunësisë janë pjesë e politikave shtetërore të punësimit të cilat sigurojnë mbështetjen me të ardhura të të papunëve në momentin e daljes së tyre si të tillë, duke synuar krijimin e kushteve për rikthimin e tyre në tregun e punës. Programet e Pagesës së Papunësisë synojnë të mbështesin financiarisht të gjithë punëkërkuesit e papunë në rast papunësie për shkak të shkurtimit të vendit të punës, ndërprejes së kontratës së punës, falimentimit të ndërmarjes, zvogëlimit të aktivitetit etj, duke lehtësuar sadopak përpjekjet e tyre drejt punësimit.`,
    metadata: { name: 'akpa', info: 'pagesa e papunesise' },
  }),
  new Document({
    pageContent: `Shpall një vend të lirë pune
    Aplikoni për të shpallur një vend të lirë pune
    Shërbimet që ofron Agjencia Kombëtare E Punësimit dhe Aftësive janë shërbime publike që ofrohen nga Zyrat e Punësimit në të gjithë Republikën e Shqipërisë për:
    Punëkërkuesit
    Punëdhënësit
    Shërbimet e punësimit ofrohen në bazë të Ligjit Nr. 7995 date 20.9.1995 “Për nxitjen e punësimit”, i ndryshuar me ligjin nr. 8444 21.1.1999, ndryshuar me ligjin nr. 8862 date 7.3.2002, si dhe me ligjin nr 9570 date 3.7.2006, specifikisht sipas nenit 6 dhe 6/1 , nenit 7 dhe 7/1 .
    “Punëkërkues” eshte çdo person i papunë, i disponushem për punësim, i cili paraqitet periodikisht në zyrën përkatese të punesimit, perfshire edhe personat, te cilet janë në marrëdhënie pune ose të vetëpunësuar, por qe kërkojnë nje punë të re.`,
    metadata: { name: 'akpa', info: 'sherbimet e akpa' },
  }),
  new Document({
    pageContent: `Të huajit i refuzohet/anullohet leja e punës e tipit "A/P", sipas kushteve të paracauktuara në VKM: VKM-të në mbështetje të_Ligjit për të huajt`,
    metadata: { name: 'akpa', info: 'leja e punes' },
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
    metadata: { name: 'akpa', info: 'programi praktikes profesionale' },
  }),
  new Document({
    pageContent: `Programet COVID
    Programi i punësimit të personave të dale papunë si pasojë e COVID-19 është një program 4, 8 ose 12-mujor punësimi, në të cilin profili dhe nevojat e punëkërkuesit përshtaten me vendin e lirë nga punëdhënësi. Paga përcaktohet në kontratën e punës në përputhje me pozicionin përkatës dhe nivelin e pagave në treg.`,
    metadata: { name: 'akpa', info: 'programi covid' },
  }),
  new Document({
    pageContent: `Kurset profesionale konsiderohen kualifikime profesionale afat shkurtër që ofrohen nga Drejtoritë Rajonale të Formimit Profesional, (QFP) për kategori individësh të ndryshëm.
    Qendrat e Formimit Profesional ofrojnë, kurse profesionale në Nivel kombëtar dhe kurse profesionale në Nivel qendre.
    Nëse kurset profesionale të Nivelit kombëtar janë unike për të gjitha QFP kurset profesionale në Nivel qendre, janë kurse specifike që ofrohen në funksion të kërkesave që ka biznesi lokal etj.
    Kurset në nivel Kombëtar ofrohen të unifikuara sipas Programeve të hartuara nga AKAFPK dhe të miratuara nga Ministri, ndërsa kurset në Nivel Qendre, zhvillohen sipas Programeve të hartuara nga specialistët e qëndrës, në bashkëpunim me ato të biznesit përkatës.`,
    metadata: { name: 'akpa', info: 'kurs profesional' },
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
    metadata: { name: 'akpa', info: 'kurse kombetare' },
  }),
];
