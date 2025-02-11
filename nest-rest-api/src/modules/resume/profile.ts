export interface Profile {
  experience: string;
  education: string;
  native_language: string;
  other_language: string;
  digital_skills: string;
  soft_skills: string;
  technical_skills: string;
  hobbies: string;
  extra_information: string;
  certification: string;
  volunteering: string;
  publications: string;
}
export const profilesJson: Profile[] = [
  {
    experience:
      'Menaxher Projekti në ABC Corp (2018-2022); Analist i Tregut në XYZ Ltd (2015-2018)',
    education:
      'Master në Menaxhim Projekti, Universiteti i Tiranës (2016-2018); Bachelor në Ekonomi, Universiteti i Tiranës (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Microsoft Office, Adobe Photoshop',
    soft_skills: 'Komunikim, Menaxhim kohe',
    technical_skills: 'Menaxhim projektesh, Analizë tregu',
    hobbies: 'Udhëtim, Lexim',
    extra_information: 'Anëtar i klubit të debatit',
    certification: 'PMP Certified 2020',
    volunteering: 'Ndihmë në ndërtimin e shtëpive për të pastrehë 2019',
    publications:
      "Artikull mbi menaxhimin e projekteve në revistën 'Menaxheri i Suksesshëm', 2021",
  },
  {
    experience:
      'Drejtor i Marketingut në DigitalGenius (2019-sot); Koordinator Marketingu në MarketSphere (2016-2019)',
    education:
      'Master në Marketing Dixhital, Universiteti i Tiranës (2014-2016); Bachelor në Administrim Biznesi, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'SEO, Google AdWords',
    soft_skills: 'Lidership, Komunikim efektiv',
    technical_skills: 'Analizë e të dhënave, Strategji dixhitale',
    hobbies: 'Fotografi, Vizatim',
    extra_information: 'Mbajtës i blogut personal mbi trendet dixhitale',
    certification: 'Google Analytics Certified 2021',
    volunteering:
      'Organizator në fushata ndërgjegjësimi për sigurinë kibernetike 2020',
    publications:
      'Studiues rasti mbi efektet e marketingut dixhital në rritjen e bizneseve të vogla 2022',
  },
  {
    experience:
      'Programues në DevTech (2020-sot); Asistent Programimi në CodeMax (2018-2020)',
    education:
      'Master në Inxhinieri Softuerike, Universiteti Politeknik i Tiranës (2016-2018); Bachelor në Shkencat Kompjuterike, Universiteti i Tiranës (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'C#, .NET, SQL Server',
    soft_skills: 'Punë në ekip, Organizim',
    technical_skills: 'Zhvillim i aplikacioneve desktop, Databaza',
    hobbies: 'Shah, Lexim',
    extra_information: 'Anëtar i komunitetit të programuesve lokal',
    certification: 'Microsoft Certified: .NET Core Developer 2021',
    volunteering: 'Trajner në kampet verore të kodimit për të rinjtë 2022',
    publications: 'Artikull në blog mbi sigurinë në aplikacionet web 2023',
  },
  {
    experience:
      'Arkitekt Peisazhi në GreenDesigns (2017-sot); Asistent i Arkitekturës Peisazhore në LandscapeArt (2014-2017)',
    education:
      'Master në Arkitekturë Peisazhore, Universiteti i Arteve (2013-2015); Bachelor në Dizajn të Jashtëm, Akademia e Arteve dhe Dizajnit (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'AutoCAD, Adobe Illustrator',
    soft_skills: 'Kreativitet, Vëmendje ndaj detajeve',
    technical_skills: 'Dizajn peisazhi, Menaxhim projekti',
    hobbies: 'Fotografi natyre, Hiking',
    extra_information: 'Bloger mbi inovacionet në arkitekturën peisazhore',
    certification: 'Certified Landscape Architect 2019',
    volunteering: 'Dizajnimi i hapësirave të gjelbërta për shkolla 2021',
    publications: "Studiues rasti në revistën 'Peisazhet e Qytetit', 2022",
  },
  {
    experience:
      'Menaxher Financiar në FinancePlus (2018-sot); Analist Financiar në MoneyWise (2015-2018)',
    education:
      'Master në Financa dhe Kontabilitet, Universiteti i Tiranës (2013-2015); Bachelor në Ekonomi, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Excel Avancuar, QuickBooks',
    soft_skills: 'Analizë kritike, Vendimmarrje',
    technical_skills: 'Menaxhim financiar, Planifikim buxhetor',
    hobbies: 'Gatim, Vrapim',
    extra_information:
      'Vullnetar në organizatat joqeveritare për edukimin financiar',
    certification: 'Certified Financial Analyst 2020',
    volunteering: 'Këshillim financiar për startup-et e reja 2022',
    publications: 'Libër mbi menaxhimin e financave personale 2023',
  },
  {
    experience:
      'Inxhinier Ndërtimi në BuildCorp (2020-sot); Supervizor i ndërtimit në ConstructIt (2017-2020)',
    education:
      'Master në Inxhinieri Ndërtimi, Universiteti Politeknik i Tiranës (2015-2017); Bachelor në Inxhinieri Civile, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'AutoCAD, Microsoft Project',
    soft_skills: 'Menaxhim i ekipit, Komunikim efektiv',
    technical_skills:
      'Planifikim dhe menaxhim i projekteve ndërtimore, Vlerësim i kostove',
    hobbies: 'Modelizim 3D, Hiking',
    extra_information: 'Anëtar i asociacionit të inxhinierëve të ndërtimit',
    certification: 'Certifikatë profesionale në menaxhimin e ndërtimit 2019',
    volunteering:
      'Vullnetar në projekte ndërtimi për komunitetet në nevojë 2021',
    publications:
      'Autor i një studimi mbi përdorimin e materialeve të qëndrueshme në ndërtim 2022',
  },
  {
    experience:
      'Mësues i Gjuhës Angleze në Shkolla Mesme (2018-sot); Lektor në Qendrën e Gjuhëve (2015-2018)',
    education:
      'Master në Gjuhësi, Universiteti i Gjuhëve të Huaja (2013-2015); Bachelor në Gjuhë dhe Letërsi Angleze, Universiteti i Gjuhëve të Huaja (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Platforma e-learning, Microsoft Office',
    soft_skills: 'Dhënie e leksioneve, Komunikim interkultural',
    technical_skills:
      'Mësimdhënie e gjuhës angleze, Përgatitje e materialeve didaktike',
    hobbies: 'Lexim, Udhëtim',
    extra_information: 'Organizator i klubit të librit në shkollë',
    certification: 'Certifikatë CELTA 2017',
    volunteering: 'Mësimdhënie gjuhe për fëmijët e komuniteteve pakicë 2020',
    publications:
      "Artikull në revistën 'Inovacionet në Edukim', mbi metodat e reja të mësimdhënies, 2021",
  },
  {
    experience:
      'Dietolog në HealthCenter (2019-sot); Konsulent i ushqyerjes në WellnessStudio (2016-2019)',
    education:
      'Master në Dietologji dhe Nutricion, Universiteti i Shkencave të Shëndetit (2014-2016); Bachelor në Biokimi, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Software për planifikim dietash, Analizë e të dhënave ushqimore',
    soft_skills: 'Këshillim nutricional, Ndërtim i marrëdhënieve me klientët',
    technical_skills:
      'Planifikim dhe zbatim i programeve të ushqyerjes, Vlerësim i statusit nutricional',
    hobbies: 'Gatim i shëndetshëm, Jogging',
    extra_information: 'Bloger mbi temat e ushqyerjes dhe shëndetit',
    certification: 'Certifikatë profesionale në dietologji 2018',
    volunteering:
      'Organizim i seminareve mbi ushqyerjen e shëndetshme në shkolla,',
    publications: '',
  },
  {
    experience:
      'Arkitekt i Sistemeve në TechInnovations (2020-sot); Analist Sistemi në InfoTech Solutions (2017-2020)',
    education:
      'Master në Teknologji Informacioni, Universiteti Politeknik i Tiranës (2015-2017); Bachelor në Inxhinieri Kompjuterike, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Linux, Docker, Kubernetes',
    soft_skills: 'Zgjidhje problemesh, Punë në ekip',
    technical_skills: 'Cloud computing, DevOps',
    hobbies: 'Kodim, Muzikë',
    extra_information: 'Kontribues në projekte open-source',
    certification: 'AWS Certified Solutions Architect 2021',
    volunteering: 'Mësimdhënës në kursin falas të kodimit për fëmijë 2019',
    publications:
      'Publikim në konferencën ndërkombëtare për siguri kibernetike 2020',
  },
  {
    experience:
      'Menaxher i Resurseve Njerëzore në HR Solutions (2018-sot); Specialist i Rekrutimit në DynamicRecruit (2015-2018)',
    education:
      'Master në Menaxhim të Resurseve Njerëzore, Universiteti i Tiranës (2013-2015); Bachelor në Psikologji, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'SAP HR, LinkedIn Recruiting',
    soft_skills: 'Komunikimi, Negociata',
    technical_skills: 'Analizë e të dhënave të HR, Menaxhim i talentit',
    hobbies: 'Leksionet e psikologjisë, Vullnetarizëm',
    extra_information:
      'Anëtar i bordit në organizatën jofitimprurëse për zhvillim profesional',
    certification: 'Certifikatë në Menaxhimin e Talentit 2022',
    volunteering: 'Konsulent për zhvillimin e karrierës në qendra sociale 2021',
    publications:
      "Artikull në revistën 'HR Innovate' mbi trendet e rekrutimit, 2022",
  },
  {
    experience:
      'Drejtor Financiar në FastGrowth Enterprises (2017-sot); Analist Financiar në CapitalMarkets Ltd (2014-2017)',
    education:
      'Master në Financë, Universiteti i Tiranës (2012-2014); Bachelor në Ekonomi, Universiteti i Tiranës (2008-2012)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Excel Avancuar, QuickBooks',
    soft_skills: 'Planifikim strategjik, Analizë financiare',
    technical_skills: 'Menaxhim i rrezikut, Investime',
    hobbies: 'Leximi i librave financiarë, Shahu',
    extra_information: 'Folës në konferenca financiare ndërkombëtare',
    certification: 'Certifikim Profesional në Analizën Financiare 2020',
    volunteering: 'Këshilltar financiar për OJF-të 2018',
    publications:
      'Studim në efektet e teknologjisë blockchain në financat 2021',
  },
  {
    experience:
      'Inxhinier Elektrik në PowerGrid Solutions (2020-sot); Teknik i Mirëmbajtjes në EnergyTech (2016-2020)',
    education:
      'Master në Inxhinieri Elektrike, Universiteti Politeknik i Tiranës (2014-2016); Bachelor në Inxhinieri Elektrike, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Francë',
    digital_skills: 'MATLAB, AutoCAD Electrical',
    soft_skills: 'Menaxhim i projekteve, Punë në ekip',
    technical_skills: 'Dizajn i sistemeve elektrike, Kontrolli i cilësisë',
    hobbies: 'Modelizimi 3D, Hiking',
    extra_information: 'Anëtar aktiv i IEEE',
    certification: 'Certifikatë në Sigurinë Elektrike 2021',
    volunteering: 'Instruktor në workshop-e për sigurinë elektrike 2020',
    publications:
      "Artikull në 'Journal of Electrical Engineering' mbi eficiencën e energjisë, 2021",
  },
  {
    experience:
      'Kuzhinier Shef në GourmetRestaurant (2018-sot); Shef i Pastiçerisë në SweetDelights (2015-2018)',
    education:
      'Diplomë Profesionale në Artin Kulinare, Akademia e Kuzhinës (2013-2015); Kurs Intensiv në Pastiçeri, Culinary Institute (2012)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Menaxhim i porosive me software të posaçëm, Përdorim i bazave të të dhënave të recetave',
    soft_skills: 'Kreativitet, Menaxhim i kohës',
    technical_skills: 'Gatim i avancuar, Dekorim i ëmbëlsirave',
    hobbies: 'Fotografi ushqimi, Blogim kulinari',
    extra_information: 'Themelues i grupit lokal të dashamirësve të gatimit',
    certification: 'Certifikatë në Gatim të Avancuar 2019',
    volunteering: 'Gatim vullnetar për evente bamirësie 2021',
    publications: "Libër i recetave 'Magjia e Shijes', 2022",
  },
  {
    experience:
      'Menaxher i IT-së në InnovativeSolutions (2019-sot); Specialist i Rrjetave në NetTech (2016-2019)',
    education:
      'Master në Siguri Kibernetike, Universiteti i Tiranës (2014-2016); Bachelor në Teknologji Informacioni, Universiteti Politeknik i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Cisco networks, Firewall configurations',
    soft_skills: 'Problem solving, Komunikim efektiv',
    technical_skills: 'Siguri kibernetike, Menaxhim i rrjetave',
    hobbies: 'Programim, Lexim libra mbi teknologjinë',
    extra_information: 'Organizator i meetups mbi sigurinë kibernetike',
    certification: 'Cisco Certified Network Associate (CCNA) 2020',
    volunteering: 'Mentor në kode kamp për të rinjtë 2021',
    publications:
      "Studim në 'TechSecurity Journal' mbi menaxhimin e rrezikut kibernetik, 2022",
  },
  {
    experience:
      'Gazetar në DailyNews (2017-sot); Redaktor në LocalJournal (2014-2017)',
    education:
      'Master në Gazetari, Universiteti i Tiranës (2012-2014); Bachelor në Komunikim Masiv, Universiteti i Tiranës (2008-2012)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Redaktim Video, SEO',
    soft_skills: 'Shkrim kreativ, Komunikim efektiv',
    technical_skills: 'Fotografi, Redaktim i lajmeve',
    hobbies: 'Fotografia, Leximi',
    extra_information: 'Anëtar i asociacionit të gazetarëve',
    certification: 'Certifikatë në Etikën e Gazetarisë 2019',
    volunteering: 'Vullnetar në festivalin e filmit dokumentar 2018',
    publications: 'Seri artikujsh mbi ndikimin e medias sociale 2020',
  },
  {
    experience:
      'Avokat i Përgjithshëm në LawFirm Partners (2018-sot); Ndihmës Ligjor në LegalAid Services (2015-2018)',
    education:
      'Master në Drejtësi, Universiteti i Tiranës (2013-2015); Bachelor në Drejtësi, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Software për menaxhimin e rasteve, Baza të të dhënave ligjore',
    soft_skills: 'Negociata, Analizë kritike',
    technical_skills: 'Draftim kontratash, Mbrojtje në gjyq',
    hobbies: 'Leximi i literaturës ligjore, Shahu',
    extra_information: 'Folës në konferenca ligjore ndërkombëtare',
    certification: 'Certifikatë në Ligjin e Pronësisë Intelektuale 2020',
    volunteering: 'Këshillim falas ligjor për komunitetin 2019',
    publications: 'Hulumtim mbi reformën në drejtësinë civile 2021',
  },
  {
    experience:
      'Mësues i Historisë në HighSchool #5 (2016-sot); Asistent Mësimdhënie në University of Arts (2013-2016)',
    education:
      'Master në Histori dhe Arkeologji, Universiteti i Tiranës (2011-2013); Bachelor në Histori, Universiteti i Tiranës (2007-2011)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Greqisht',
    digital_skills: 'Software edukative, Prezantime multimediale',
    soft_skills: 'Lekturim, Organizim i leksioneve',
    technical_skills: 'Kërkim arkivor, Analizë e dokumenteve historike',
    hobbies: 'Arkeologjia, Udhetimet eksplorative',
    extra_information: 'Anëtar i klubit të historisë lokale',
    certification: 'Certifikatë në Metodat e Kërkimit Historik 2018',
    volunteering: 'Organizator i ekspozitave historike në shkollë 2020',
    publications: 'Libër mbi historinë lokale të qytetit 2022',
  },
  {
    experience:
      'Zyrtar i Sigurisë në CyberSec Corp (2021-sot); Analist i Sigurisë në InfoSecure Ltd (2018-2021)',
    education:
      'Master në Siguri Kibernetike, Universiteti i Tiranës (2016-2018); Bachelor në Informatikë, Universiteti Politeknik i Tiranës (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Ethical Hacking, Python',
    soft_skills: 'Mendim kritik, Menaxhim i stresit',
    technical_skills: 'Testimi i Penetrimit, Siguria e Rrjetit',
    hobbies: 'Kodimi, Video lojërat',
    extra_information: 'Vullnetar në panaire të teknologjisë',
    certification: 'Certified Ethical Hacker (CEH) 2019',
    volunteering:
      'Mësimdhënës në workshop-e të sigurisë kibernetike për studentë 2020',
    publications:
      "Artikull në revistën 'TechSecurity' mbi trendet e reja në sigurinë kibernetike, 2021",
  },
  {
    experience:
      'Dizajner Grafik në CreativeStudio (2020-sot); Freelancer në fushën e dizajnit (2017-2020)',
    education:
      'Master në Dizajn Grafik, Akademia e Arteve (2015-2017); Bachelor në Arte Vizuale, Universiteti i Arteve (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Adobe Creative Suite, Sketch',
    soft_skills: 'Kreativitet, Komunikim vizual',
    technical_skills: 'Dizajn i identitetit vizual, UX/UI Dizajn',
    hobbies: 'Piktura, Fotografia',
    extra_information: 'Anëtar i një grupi artistik lokal',
    certification: 'Adobe Certified Expert (ACE) 2020',
    volunteering: 'Dizajner për fushata bamirësie 2019',
    publications: 'Seri blogjesh mbi trendet në dizajnin grafik 2022',
  },
  {
    experience:
      'Konsulent Biznesi në BusinessSolutions Ltd (2019-sot); Menaxher i Zhvillimit të Biznesit në StartUp Hub (2016-2019)',
    education:
      'MBA në Menaxhim Biznesi, Universiteti i Tiranës (2014-2016); Bachelor në Ekonomi, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'CRM Software, Microsoft Excel',
    soft_skills: 'Ndërtimi i marrëdhënieve, Negociata',
    technical_skills: 'Analizë financiare, Strategji e tregut',
    hobbies: 'Leximi i literaturës për zhvillim personal, Udhetimet',
    extra_information: 'Mentor në programe për startupe',
    certification: 'Certifikatë në Menaxhimin e Projekteve 2018',
    volunteering: 'Këshilltar për OJQ-të në menaxhimin financiar 2021',
    publications: 'Libër në menaxhimin e ndryshimeve organizative 2022',
  },
  {
    experience:
      'Menaxher i Produktit në TechInnovate (2022-sot); Analist i Biznesit në DataCorp (2019-2022)',
    education:
      'MSc në Menaxhimin e Teknologjisë së Informacionit, Universiteti i Tiranës (2017-2019); BSc në Inxhinieri Kompjuterike, Universiteti Politeknik i Tiranës (2013-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Rusisht',
    digital_skills: 'Agile methodologies, JIRA',
    soft_skills: 'Lidership, Komunikim',
    technical_skills: 'Analizë e të dhënave, UX/UI Design',
    hobbies: 'Ski, Alpinizëm',
    extra_information: 'Mentor në akademinë e kodimit për të rinj',
    certification: 'Certified Scrum Master (CSM) 2021',
    volunteering: 'Ndihmës në ndërtimin e faqeve web për OJQ 2020',
    publications:
      'Hulumtim në përdorimin e inteligjencës artificiale në menaxhimin e projekteve 2021',
  },
  {
    experience:
      'Pedagog në Fakultetin e Arteve (2018-sot); Artist Grafik Freelancer (2015-2018)',
    education:
      'PhD në Arte Vizuale, Akademia e Arteve (2014-2018); Master në Pikturë, Universiteti i Arteve (2012-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Adobe Photoshop, Illustrator',
    soft_skills: 'Kreativitet, Kritikë Arti',
    technical_skills: 'Teknika të ndryshme të pikturës, Dizajn grafik',
    hobbies: 'Piktura, Vizita në galeri arti',
    extra_information: 'Kurator i ekspozitave artistike lokale',
    certification: 'Certifikatë në Kurim Arti 2019',
    volunteering:
      'Organizator i punëtorive arti për fëmijët në qendrat komunitare 2021',
    publications: 'Studiues në ndikimin e teknologjisë në artin modern 2022',
  },
  {
    experience:
      'Koordinator i Eventeve në CityEvents (2021-sot); Menaxher i Marketingut në BrandBuilders (2018-2021)',
    education:
      'Master në Menaxhim Eventesh, Universiteti i Tiranës (2016-2018); Bachelor në Marketing, Universiteti i Tiranës (2014-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Menaxhim i medias sociale, SEO',
    soft_skills: 'Organizim, Komunikim efektiv',
    technical_skills:
      'Planifikim dhe zbatim strategjish marketingu, Analizë tregu',
    hobbies: 'Fotografia, Udhetimi',
    extra_information: 'Bloger me fokus në trendet e marketingut digjital',
    certification: 'Google Digital Marketing Certification 2020',
    volunteering: 'Konsulent marketingu për nisma lokale të qëndrueshme 2022',
    publications: 'Artikull në rritjen e ndikimit të eventeve virtuale 2021',
  },
  {
    experience:
      'Inxhinier i Software-it në ABC Tech nga 2018 deri në 2021; Zhvillues Backend në XYZ Innovations nga 2015 deri në 2018',
    education:
      'Master në Inxhinieri Kompjuterike, Universiteti Politeknik i Tiranës 2013-2015; Bachelor në Shkencat Kompjuterike, Universiteti i Tiranës 2009-2013',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Java, SQL, Docker',
    soft_skills: 'Komunikim, Punë në ekip',
    technical_skills: 'Zhvillimi i software-it, Testimi automatik',
    hobbies: 'Programimi, Leximi',
    extra_information: 'Anëtar i një klubi teknologjik',
    certification: 'Certifikatë Profesionale në Java 2016',
    volunteering: 'Mësimdhënës vullnetar në kodim për fëmijët 2019',
    publications:
      "Artikull në 'Tech World' për sigurinë në aplikacionet mobile, 2020",
  },
  {
    experience:
      'Arkitekt në Studio Arkitekture D dhe G nga 2019 deri në 2021; Asistent Arkitekti në Arkitektura Plus nga 2016 deri në 2019',
    education:
      'Master në Arkitekturë, Universiteti i Arteve 2014-2016; Bachelor në Dizajn Urban, Universiteti i Arteve 2010-2014',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'AutoCAD, SketchUp, Revit',
    soft_skills: 'Kreativitet, Menaxhimi i projekteve',
    technical_skills: 'Dizajni urban, Vizualizimi 3D',
    hobbies: 'Vizatimi, Udhetimi',
    extra_information: 'Bloger në tema të arkitekturës dhe dizajnit',
    certification: 'Licencë Profesionale në Arkitekturë 2018',
    volunteering: 'Pjesëmarrës në projekte ndërtimore komunitare 2017',
    publications:
      "Studim në 'Architecture Today' për qëndrueshmërinë në dizajnin urban, 2021",
  },
  {
    experience:
      'Menaxher i Marketingut në Digital Marketing Solutions nga 2020 deri në 2021; Specialist i SEO-së në Online Growth Agency nga 2017 deri në 2020',
    education:
      'Master në Marketing Dixhital, Universiteti i Tiranës 2015-2017; Bachelor në Menaxhim Biznesi, Universiteti i Tiranës 2011-2015',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'SEO, Google Analytics',
    soft_skills: 'Strategjik, Analitik',
    technical_skills: 'Marketing në rrjete sociale, Fushata PPC',
    hobbies: 'Marketingu Dixhital, Yoga',
    extra_information: 'Folës në konferenca të marketingut dixhital',
    certification: 'Certifikatë në Google Analytics 2019',
    volunteering: 'Konsulent marketingu për OJQ 2020',
    publications: 'Libër në optimizimin e motorëve të kërkimit 2022',
  },
  {
    experience:
      'Inxhinier Ndërtimi në Konstrukt Ltd (2019-2022); Supervizor i ndërtimit në BuildFast Solutions (2016-2019)',
    education:
      'Master në Inxhinieri Civile, Universiteti Politeknik i Tiranës (2014-2016); Bachelor në Inxhinieri Ndërtimi, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills: 'AutoCAD, Microsoft Project',
    soft_skills: 'Lidership, Menaxhim i kohës',
    technical_skills: 'Menaxhim projektesh ndërtimore, Kontroll cilësie',
    hobbies: 'Alpinizëm, Lexim',
    extra_information: 'Vullnetar në projekte ndërtimi për komunitetin',
    certification: 'Certifikatë Profesionale në Menaxhimin e Ndërtimit 2020',
    volunteering: 'Ndihmë në ndërtimin e shtëpive për të pastrehët 2018',
    publications:
      'Artikull mbi inovacionet në materialet e ndërtimit, Revista e Inxhinierisë Civile 2021',
  },
  {
    experience:
      'Menaxhere e Marketingut në Creative Minds Agency (2020-2022); Eksperte e SEO-së në DigitalBoost (2017-2020)',
    education:
      'Master në Marketing Dixhital, Universiteti i Tiranës (2015-2017); Bachelor në Komunikim dhe PR, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Google Analytics, SEO/SEM',
    soft_skills: 'Komunikim strategjik, Kreativitet',
    technical_skills: 'Optimizim motorësh kërkimi, Fushata dixhitale',
    hobbies: 'Fotografi, Blogim',
    extra_information: 'Anëtare e një klubi të leximit',
    certification: 'Certifikim në Google AdWords 2019',
    volunteering: 'Konsulente marketingu për nisma joqeveritare 2021',
    publications:
      'Studim mbi efektin e marketingut vizual në media sociale, E-Marketing Journal 2022',
  },
  {
    experience:
      'Drejtor Financiar në QuickFinance Ltd (2018-sot); Analist Financiar në MarketInsights (2014-2018)',
    education:
      'MBA në Financa, Universiteti i Tiranës (2012-2014); Bachelor në Ekonomi, Universiteti i Tiranës (2008-2012)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills: 'Excel, QuickBooks',
    soft_skills: 'Analizë financiare, Vendimmarrje',
    technical_skills: 'Menaxhim buxheti, Parashikime financiare',
    hobbies: 'Vrapim, Gatuaj',
    extra_information: 'Ligjërues në seminare financiare',
    certification: 'Certifikatë në Analizë Financiare 2020',
    volunteering: 'Këshilltar financiar për start-up-et e reja 2019',
    publications: 'Libër mbi menaxhimin efektiv të aseteve financiare 2021',
  },
  {
    experience:
      'Kërkues Shkencor në Instituti i Biologjisë (2022-sot); Asistent Laboratori në Universiteti i Shkencave Natyrore (2018-2022)',
    education:
      'Doktoraturë në Biologji Molekulare, Universiteti i Shkencave (2016-2020); Master në Gjenetikë, Universiteti i Shkencave (2014-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills: 'Analizë e të dhënave gjenetike, Programim në Python',
    soft_skills: 'Punë në grup, Menaxhim i kohës',
    technical_skills: 'PCR, Sekuencimi i ADN-së',
    hobbies: 'Vëzhgimi i yjeve, Alpinizëm',
    extra_information: 'Anëtar i shoqatës së biologëve',
    certification: 'Certifikatë në Analizë Gjenetike 2019',
    volunteering: 'Edukator në kampet shkencore për të rinj 2020',
    publications:
      'Studiues në ndikimin e mutacioneve gjenetike në sëmundjet e trashëguara 2021',
  },
  {
    experience:
      'Menaxher i IT në TechSolutions (2021-sot); Inxhinier i Sistemeve në DataCorp (2017-2021)',
    education:
      'Master në Siguri Kibernetike, Universiteti Politeknik (2015-2017); Bachelor në Teknologji Informacioni, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Siguri kibernetike, Rrjete kompjuterike',
    soft_skills: 'Zgjidhje problemesh, Komunikimi efektiv',
    technical_skills: 'Firewall, VPN',
    hobbies: 'Programimi, Leximi i romanëve shkencorë',
    extra_information: 'Organizator i takimeve lokale të teknologjisë',
    certification: 'Certifikatë në Siguri Kibernetike nga Cisco 2018',
    volunteering: 'Mentor për kursantët e IT-së 2019',
    publications: 'Artikull në rritjen e sfidave të sigurisë në IoT 2022',
  },
  {
    experience:
      'Drejtor i Shitjeve në DynamicSales Inc. (2020-sot); Zëvendës Menaxher Shitjeje në MarketLead Solutions (2016-2020)',
    education:
      'MBA në Menaxhim Biznesi, Universiteti i Tiranës (2014-2016); Bachelor në Marketing, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'CRM, Analizë e të dhënave të shitjes',
    soft_skills: 'Negociata, Ndërtimi i marrëdhënieve me klientët',
    technical_skills: 'Strategji shitjeje, Menaxhim i ekipit të shitjes',
    hobbies: 'Golfi, Udhëtimet',
    extra_information: 'Folës në konferencat e shitjeve dhe marketingut',
    certification: 'Certifikatë në Menaxhimin e Marrëdhënieve me Klientin 2019',
    volunteering: 'Konsulent për start-up-et në fushën e shitjeve 2021',
    publications: 'Libër në teknikat e avancuara të shitjes 2022',
  },
  {
    experience:
      'Menaxher i Departamentit të IT në InnovateTech (2023-sot); Specialist i Rrjetit në NetSolutions (2020-2023)',
    education:
      'Master në Siguri Informacioni, Universiteti i Teknologjisë (2018-2020); Bachelor në Inxhinieri Kompjuterike, Universiteti Politeknik (2014-2018)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Administrim i rrjeteve, Siguri kibernetike',
    soft_skills: 'Lidership, Menaxhim i konflikteve',
    technical_skills: 'Konfigurim firewall, VPN',
    hobbies: 'Kriptografia, Ndërtimi i dronëve',
    extra_information: 'Anëtar i grupit të hulumtimit për sigurinë kibernetike',
    certification: 'Certifikatë Profesionale në Cisco Networking 2021',
    volunteering: 'Trajnim i të rinjve në kodim dhe rrjetat 2022',
    publications:
      'Artikull në Journal of Cybersecurity mbi metodat e reja të mbrojtjes të të dhënave 2023',
  },
  {
    experience:
      'Drejtoreshë e Marketingut në CreativeMark (2022-sot); Menaxhere e Kampanjave në DigitalWave (2019-2022)',
    education:
      'MSc në Marketing Dixhital, Universiteti i Tiranës (2017-2019); BSc në Menaxhim Biznesi, Akademia e Studimeve Ekonomike (2013-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills: 'SEO, PPC, Menaxhim i medias sociale',
    soft_skills: 'Kreativitet, Komunikim strategjik',
    technical_skills: 'Analizë e të dhënave të madhe, Optimizim i konvertimit',
    hobbies: 'Fotografia dixhitale, Blogimi',
    extra_information: 'Folëse në konferenca ndërkombëtare të marketingut',
    certification: 'Certifikatë në Google Analytics 2020',
    volunteering: 'Mentore për startupe në fushën e marketingut 2021',
    publications:
      'Studiues në impaktin e inteligjencës artificiale në marketingun dixhital 2022',
  },
  {
    experience:
      'Avokate Partner në LegalEdge (2021-sot); Konsulente Ligjore në FastLegal (2018-2021)',
    education:
      'LLM në të Drejtën Ndërkombëtare, Universiteti i Tiranës (2016-2018); LLB në të Drejtë, Universiteti i Tiranës (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Software për menaxhimin e dokumenteve ligjore, Baza të të dhënave juridike',
    soft_skills: 'Negociata, Analizë dhe zgjidhje problemesh',
    technical_skills: 'Përgatitje e kontratave, Procedura gjyqësore',
    hobbies: 'Leximi i literaturës juridike, Shahu',
    extra_information:
      'Anëtare e bordit në organizata joqeveritare për të drejtat e njeriut',
    certification: 'Certifikatë në Arbitrazh Ndërkombëtar 2019',
    volunteering: 'Këshillim falas ligjor për individë në nevojë 2020',
    publications:
      'Autor i një monografie mbi reformat në të drejtën e pronësisë 2023',
  },
  {
    experience:
      'Stiliste Mode në FashionForward (2022-sot); Asistente Stiliste në TrendSetters (2019-2022)',
    education:
      'Master në Dizajn të Modës, Akademia e Arteve (2017-2019); Bachelor në Dizajn Grafik, Universiteti i Arteve (2013-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Adobe Illustrator, Photoshop',
    soft_skills: 'Kreativitet, Vëmendje ndaj detajeve',
    technical_skills: 'Dizajn i veshjeve, Zhvillim i koleksioneve të modës',
    hobbies: 'Vizatimi, Udhetimi',
    extra_information: 'Anëtare e jurive në konkurse të modës',
    certification: 'Certifikatë në Trendet e Modës Kontemporane 2020',
    volunteering:
      'Organizatore e punëtorive për të rinjtë me pasion në modë 2021',
    publications: 'Libër në historinë e modës dhe ndikimin e saj kulturor 2022',
  },
  {
    experience:
      'Shef i kuzhinës në GourmetDelight (2021-sot); Kuzhinier në StarRestaurant (2017-2021)',
    education:
      'Diplomë Profesionale në Artin e Gatimit, Instituti i Gastronomisë (2015-2017); Kurs Intensiv në Pastiçeri, Culinary Arts Academy (2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Software menaxhimi restoranti, Aplikacione të porosisë online',
    soft_skills: 'Menaxhimi i ekipit, Kreativitet në gatim',
    technical_skills: 'Gastronomi e avancuar, Dekorim pjatash',
    hobbies: 'Gatimi, Eksplorimi i kulturave të ndryshme ushqimore',
    extra_information: 'Anëtar i asociacionit kombëtar të shefave të kuzhinës',
    certification:
      'Certifikatë në Gatim të Avancuar dhe Teknika Pastiçerie 2018',
    volunteering: 'Gatim vullnetar për evente bamirësie 2020',
    publications:
      "Artikull në revistën 'Gourmet Today' mbi teknikat inovative në gatim, 2020",
  },
  {
    experience:
      'Inxhinier Ambiental në EcoSolutions (2020-sot); Analist Ambiental në GreenWorld NGO (2016-2020)',
    education:
      'Master në Inxhinieri Ambientale, Universiteti Politeknik (2014-2016); Bachelor në Shkencat Mjedisore, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'GIS, Analizë e të dhënave mjedisore',
    soft_skills: 'Planifikim strategjik, Negociata',
    technical_skills: 'Menaxhimi i mbetjeve, Kontrolli i ndotjes',
    hobbies: 'Hiking, Fotografia natyrore',
    extra_information: 'Voluntar në fushata për pastrimin e mjedisit',
    certification: 'Certifikatë në Menaxhimin e Rrezikut Ambiental 2019',
    volunteering: 'Monitorim i projekteve për mbjelljen e pemëve 2021',
    publications:
      'Studiues në efektet e ndryshimeve klimatike në biodiversitet 2022',
  },
  {
    experience:
      'Arkitekt Peizazhi në GreenSpace Designs (2022-sot); Asistent Arkitekti në UrbanLandscapes (2018-2022)',
    education:
      'Master në Arkitekturë Peizazhi, Universiteti i Arkitekturës (2016-2018); Bachelor në Dizajn Peizazhi, Akademia e Arteve dhe Dizajnit (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills: 'AutoCAD, Adobe Creative Suite, SketchUp',
    soft_skills: 'Kreativitet, Punë në ekip, Komunikim efektiv',
    technical_skills:
      'Dizajni i hapësirave jeshile, Menaxhimi i projekteve peizazhore',
    hobbies: 'Hortikultura, Fotografia natyrore',
    extra_information: 'Anëtar i shoqatës së arkitektëve peizazhë',
    certification: 'Certifikatë në Dizajn të Qëndrueshëm Peizazhi 2019',
    volunteering: 'Dizajnimi vullnetar i parqeve komunitare 2020',
    publications:
      "Artikull në 'Journal of Landscape Architecture' mbi qëndrueshmërinë urbane, 2021",
  },
  {
    experience:
      'Kurator Arti në GalleryModernArt (2021-sot); Menaxher i Ekspozitave në ArtSpace Gallery (2017-2021)',
    education:
      'Master në Menaxhimin e Arteve, Universiteti i Arteve (2015-2017); Bachelor në Histori Arti, Universiteti i Kulturës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills: 'Menaxhimi i bazave të të dhënave të artit, Photoshop',
    soft_skills: 'Organizim ekspozitash, Negociata me artistë',
    technical_skills:
      'Kurimi i koleksioneve arti, Zhvillimi i koncepteve ekspozitë',
    hobbies: 'Vizitimi i muzeve, Mbledhja e artit',
    extra_information: 'Lektore në konferenca ndërkombëtare të artit',
    certification: 'Certifikatë në Kurim Arti Modern 2018',
    volunteering: 'Organizim i punëtorive arti për fëmijë 2020',
    publications: 'Monografi mbi ndikimin e artit modern në shoqëri 2022',
  },
  {
    experience:
      'Instruktor Yoga në WellnessCenter (2020-sot); Trajner Personal në FitLife Studio (2016-2020)',
    education:
      'Certifikim në Yoga Avancuar, Yoga Alliance International (2014-2016); Diplomë në Fiziologji të Sportit, Kolegji i Shëndetit dhe Fitnessit (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Menaxhimi i platformave online të mësimdhënies, Përdorimi i software për ndjekjen e përparimit',
    soft_skills: 'Komunikimi me klientët, Motivimi',
    technical_skills: 'Teknikat e avancuara të yogas, Meditimi dhe relaksimi',
    hobbies: 'Meditimi, Leximi i literaturës mbi mirëqenien',
    extra_information:
      'Themeluese e një programi lokal të wellness për komunitetin',
    certification: 'Instruktor i Certifikuar Yoga 2015',
    volunteering: 'Sesione falas yoga për organizata joqeveritare 2021',
    publications: 'Libër mbi lidhjen midis yogas dhe shëndetit mendor 2022',
  },
  {
    experience:
      'Hidraulik me eksperiencë në WaterWorks Solutions (2018-sot); Ndihmës hidraulik në PipeFixers Ltd (2015-2018)',
    education:
      'Certifikatë profesionale në hidraulikë, Qendra e Trajnimeve Teknike (2013-2015); Diploma në Shkollën e Mesme Teknike (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorim i softuerit për projektimin e tubacioneve',
    soft_skills: 'Punë në ekip, Menaxhimi i kohës',
    technical_skills:
      'Instalime dhe mirëmbajtje të sistemeve të ujit, Zgjidhje problemesh teknike',
    hobbies: 'Peshkimi, Kamping',
    extra_information: 'Voluntar në projekte mjedisore për pastrimin e ujërave',
    certification: 'Licencë e hidraulikut të certifikuar 2016',
    volunteering:
      'Ndihmë në instalimin e sistemeve të ujit për familjet në nevojë 2019',
    publications: 'Udhëzues për kursime të ujit në shtëpi 2020',
  },
  {
    experience:
      'Mekanik automobilash në AutoRepair Center (2019-sot); Teknik në QuickFix Garage (2016-2019)',
    education:
      'Certifikatë në Mekanikë Automobilash, Instituti Profesional i Teknologjisë (2014-2016); Diploma në Mekanikë nga Shkolla e Mesme Profesionale (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Diagnostikim me kompjuter të defekteve të automjeteve',
    soft_skills: 'Komunikim me klientët, Punë nën presion',
    technical_skills: 'Riparime motori, Sisteme elektronike në automjete',
    hobbies: 'Modelizmi i automjeteve, Garat automobilistike',
    extra_information: 'Anëtar i klubit lokal të automobilizmit',
    certification:
      'Certifikatë Teknike në Diagnostikimin Elektronik të Automjeteve 2017',
    volunteering:
      'Instruktor në programe ndërgjegjësimi për sigurinë rrugore 2018',
    publications:
      "Artikull në revistën 'AutoTech' për inovacionet në mekanikën e automjeteve, 2021",
  },
  {
    experience:
      'Shofer profesional në CityTrans Logistics (2020-sot); Shofer kamioni në LongHaul Trucking (2017-2020)',
    education:
      'Certifikatë në Transport Rrugor, Akademia e Transportit (2015-2017); Trajnim i specializuar për shoferë kamionësh, Qendra e Trajnimeve Profesionale (2013-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i sistemeve GPS dhe softuerëve të menaxhimit të flotës',
    soft_skills: 'Orientim hapsinor, Durim dhe përqendrim',
    technical_skills:
      'Menaxhimi i logjistikës dhe transportit, Mirëmbajtje bazë e automjeteve',
    hobbies: 'Udhëtimet me motor, Hiking',
    extra_information:
      'Organizator i grupit të shoferëve për ndërtimin e një rrjeti mbështetës',
    certification: 'Licencë Ndërkombëtare e Shoferit për Kamionë të Rëndë 2018',
    volunteering: 'Shofer vullnetar për transportin e ndihmave humanitare 2019',
    publications: 'Udhëzues për sigurinë në udhëtim',
  },
  {
    experience:
      'Babysitter me përvojë për familje të ndryshme në qytet (2020-sot)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim bazë i kompjuterit për organizimin e aktiviteteve për fëmijë',
    soft_skills: 'Kujdesje për fëmijë, Komunikim efektiv me prindërit',
    technical_skills:
      'Zhvillim i aktiviteteve edukative dhe argëtuese për fëmijë',
    hobbies: 'Artizanat me fëmijë, Leximi i përrallave',
    extra_information:
      'Pjesëmarrëse në trajnime për zhvillimin e aftësive të kujdesit për fëmijë',
    certification: '',
    volunteering: 'Vullnetare në qendra ditore për fëmijë',
    publications: '',
  },
  {
    experience: 'Pastruese profesionale në CleanHome Services (2019-sot)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim bazë i aplikacioneve mobile për caktimin e takimeve',
    soft_skills: 'Organizim, Vëmendje ndaj detajeve',
    technical_skills:
      'Pastrim i thellë, Organizim dhe dezinfeke e ambienteve të ndryshme',
    hobbies: 'Kopshtari, Dekorim i shtëpisë',
    extra_information: 'Anëtare e një grupi lokal të shërbimeve të pastrimit',
    certification: '',
    volunteering: 'Pastrim vullnetar i ambienteve komunitare',
    publications: '',
  },
  {
    experience: 'Ndihmës ndërtimi në ConstructionWorks (2021-sot)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorim bazë i softuerëve të menaxhimit të projekteve',
    soft_skills: 'Punë në ekip, Forcë fizike',
    technical_skills: 'Ndihmë në punimet e ndërtimit, Përgatitje e materialeve',
    hobbies: 'Ndërtimi i veglave me dorë, Peshkimi',
    extra_information: 'Voluntar në projekte ndërtimi për komunitetin',
    certification: '',
    volunteering: 'Ndërtim i mobiljeve për qendrat sociale',
    publications: '',
  },
  {
    experience:
      'Gardener at GreenThumb Landscaping (2019-present); Assistant Gardener at BloomGardens (2016-2019)',
    education: '',
    native_language: 'Albanian',
    other_language: 'English',
    digital_skills: 'Basic use of gardening design software',
    soft_skills: 'Attention to detail, Creativity in landscape design',
    technical_skills: 'Plant care, Landscape design, Garden maintenance',
    hobbies: 'Herbalism, Bird watching',
    extra_information: 'Participant in local gardening workshops',
    certification: '',
    volunteering: 'Volunteering at community gardens',
    publications: '',
  },
  {
    experience:
      'Personal Trainer at FitLife Gym (2020-present); Fitness Instructor at HealthFirst Studio (2017-2020)',
    education: '',
    native_language: 'Albanian',
    other_language: 'English',
    digital_skills: 'Use of fitness tracking and workout planning apps',
    soft_skills: 'Motivational skills, Communication with clients',
    technical_skills: 'Fitness program development, Nutritional guidance',
    hobbies: 'Marathon running, Mountain biking',
    extra_information: 'Organizer of local fitness events',
    certification: '',
    volunteering: 'Coaching at youth sports clubs',
    publications: '',
  },
  {
    experience:
      'Pet Groomer at Paws & Claws Salon (2018-present); Veterinary Assistant at PetCare Clinic (2015-2018)',
    education: '',
    native_language: 'Albanian',
    other_language: 'English',
    digital_skills: 'Basic use of pet care management software',
    soft_skills: 'Empathy for animals, Customer service',
    technical_skills: 'Pet grooming techniques, Animal care',
    hobbies: 'Animal rescue, Wildlife photography',
    extra_information: 'Volunteer at animal shelters',
    certification: '',
    volunteering: 'Free grooming services for shelter animals',
    publications: '',
  },
  {
    experience:
      'Barist në CafeArt (2020-sot); Ndihmës Barist në MorningBrew Cafe (2017-2020)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorim bazë i sistemeve të porosisë online',
    soft_skills: 'Shërbim ndaj klientit, Komunikim efektiv',
    technical_skills:
      'Përgatitje e kafeve artistike, Njohuri për llojet e kafesë',
    hobbies: 'Gatimi, Fotografia',
    extra_information: 'Anëtar i një klubi lokal të dashamirësve të kafesë',
    certification: '',
    volunteering: 'Organizim i ngjarjeve bamirëse në kafe',
    publications: '',
  },
  {
    experience:
      'Elektricist në PowerSafe (2019-sot); Teknik në QuickFix Electric (2016-2019)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i softuerit për planifikimin e instalimeve elektrike',
    soft_skills: 'Menaxhim i projekteve, Zgjidhje e problemeve',
    technical_skills:
      'Instalime dhe mirëmbajtje elektrike, Diagnostikim i defekteve',
    hobbies: 'Modelizim, Vizatim teknik',
    extra_information: 'Vullnetar në projekte të ndriçimit komunitar',
    certification: '',
    volunteering:
      'Ndihmë në instalimin e sistemeve të ndriçimit për ngjarje lokale',
    publications: '',
  },
  {
    experience:
      'Punonjës në lavanteri në CleanClothes (2018-sot); Ndihmës në Spotless Laundry Services (2015-2018)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorim i softuerëve për menaxhimin e lavanterive',
    soft_skills: 'Organizim, Punë në ekip',
    technical_skills:
      'Trajtim i llojeve të ndryshme të rrobave, Përdorim i makinave industriale të larjes',
    hobbies: 'Koleksionim i rrobave vintage, Artizanat',
    extra_information: 'Organizator i workshop-eve për kujdesin e rrobave',
    certification: '',
    volunteering: 'Larje falas e rrobave për shtëpitë e kujdesit',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Inxhinieri Kompjuterike, Universiteti Politeknik i Tiranës (2021-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Programim në Python dhe Java',
    soft_skills: 'Punë në grup, zgjidhje e problemeve',
    technical_skills: 'Zhvillim i uebfaqeve, bazat e të dhënave',
    hobbies: 'Programimi, video lojërat',
    extra_information: 'Anëtar i klubit të teknologjisë në universitet',
    certification: '',
    volunteering: 'Ndihmë në organizimin e hackathons',
    publications: '',
  },
  {
    experience: '',
    education: 'Student në Menaxhim Biznesi, Universiteti i Tiranës (2022-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Përdorim i Excel-it për analizë financiare',
    soft_skills: 'Lidership, komunikim',
    technical_skills: 'Planifikim biznesi, marketing digjital',
    hobbies: 'Leximi, udhëtimet',
    extra_information: 'Voluntar në organizata studentore për sipërmarrjen',
    certification: '',
    volunteering:
      'Organizim i eventeve për zhvillimin profesional të studentëve',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Shkencat Mjedisore, Universiteti i Shkencave të Natyrës (2020-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Analizë e të dhënave mjedisore me softuerë specifikë',
    soft_skills: 'Ndërgjegjësim mjedisor, punë në terren',
    technical_skills: 'Monitorim i cilësisë së ajrit dhe ujit',
    hobbies: 'Kamping, vëzhgimi i zogjve',
    extra_information: 'Pjesëmarrës në projekte kërkimore mjedisore',
    certification: '',
    volunteering: 'Voluntar në fushata të ndërgjegjësimit mjedisor',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Fakultetin e Ekonomisë, Universiteti i Tiranës (2021-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Përdorim i Excel, PowerPoint',
    soft_skills: 'Komunikim, organizim',
    technical_skills: 'Analizë financiare, menaxhim projektesh',
    hobbies: 'Investimet, leximi i librit',
    extra_information: 'Anëtar i klubit të investimeve në universitet',
    certification: '',
    volunteering: 'Vullnetar në aktivitete të ndryshme sociale',
    publications: '',
  },
  {
    experience: '',
    education: 'Student në Juridik, Universiteti i Tiranës (2022-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Njohuri bazë në software juridik',
    soft_skills: 'Argumentim, analizë kritike',
    technical_skills: 'Njohuri bazë në ligjin civil dhe penal',
    hobbies: 'Debat, leximi i vendimeve gjyqësore',
    extra_information: 'Pjesëmarrës në garat e debateve universitare',
    certification: '',
    volunteering: 'Ndihmë në organizimin e seminareve juridike',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Shkencat Kompjuterike, Universiteti Politeknik i Tiranës (2020-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Programim në C++, Java',
    soft_skills: 'Logjikë, punë në grup',
    technical_skills: 'Zhvillim i aplikacioneve, siguri kibernetike',
    hobbies: 'Kodimi, video lojërat',
    extra_information: 'Organizator i workshop-eve të kodimit për studentë',
    certification: '',
    volunteering: 'Mësimdhënës vullnetar në kursin e programimit për fëmijë',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Inxhinieri Elektrike, Universiteti Politeknik i Tiranës (2019-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Simulimi i qarqeve elektrike me MATLAB',
    soft_skills: 'Punë në grup, zgjidhje problemesh',
    technical_skills:
      'Projektimi i sistemeve elektrike, njohuri në energji të rinovueshme',
    hobbies: 'Ndërtimi i modeleve elektronike, eksplorimi i natyrës',
    extra_information: 'Anëtar i klubit të robotikës në universitet',
    certification: '',
    volunteering:
      'Mësimdhënie vullnetare në teknologjinë dhe shkencën për fëmijë',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Menaxhim të Biznesit, Universiteti i Tiranës (2020-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i avancuar i paketës Microsoft Office, veçanërisht Excel',
    soft_skills: 'Lidership, aftësi organizative',
    technical_skills: 'Njohuri themelore në analizën financiare dhe marketing',
    hobbies: 'Leximi i librave në menaxhim dhe zhvillim personal, futbolli',
    extra_information: 'Pjesëmarrës aktiv në konkurse studentore të biznesit',
    certification: '',
    volunteering: 'Organizim i ngjarjeve për rrjetëzimin e studentëve',
    publications: '',
  },
  {
    experience: '',
    education:
      'Studente në Psikologji, Universiteti i Shkencave Sociale (2021-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve statistikorë për psikologjinë',
    soft_skills: 'Dëgjim aktiv, empati',
    technical_skills: 'Njohuri bazë në metoda kërkimore në psikologji',
    hobbies: 'Vullnetarizëm, yoga',
    extra_information: 'Voluntare në qendrat e këshillimit për të rinjtë',
    certification: '',
    volunteering:
      'Ndihmë në organizimin e aktiviteteve për ndërgjegjësimin mbi shëndetin mendor',
    publications: '',
  },
  {
    experience:
      'Astronom në Observatorin Kombëtar (2022-sot); Asistent Kërkimi në Institutin e Astrofizikës (2018-2022)',
    education:
      'Doktoraturë në Astrofizikë, Universiteti i Shkencave Natyrore (2014-2018); Master në Astronomi, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorimi i softuerëve të analizës astronomike dhe simulimit',
    soft_skills: 'Analizë kritike, punë në ekip',
    technical_skills: 'Vëzhgimi i qiellit, analiza e të dhënave të vrojtimeve',
    hobbies: 'Vëzhgimi i yjeve, fotografia astronomike',
    extra_information: 'Anëtar i shoqatës së astronomëve amatorë',
    certification: '',
    volunteering: 'Organizimi i eventeve publike për vëzhgimin e yjeve',
    publications: '',
  },
  {
    experience:
      'Restaurator Arti në Muzeun Kombëtar të Artit (2019-sot); Specialist në Konservimin e Veprave të Artit në Studio Private (2015-2019)',
    education:
      'Master në Restaurim dhe Konservim Arti, Akademia e Arteve të Bukura (2013-2015); Bachelor në Histori Arti, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Njohuri në softuerët për skanimin dhe analizën e artit',
    soft_skills: 'Vëmendje ndaj detajeve, durim',
    technical_skills: 'Teknikat e restaurimit të pikturave dhe skulpturave',
    hobbies: 'Studiimi i historisë së artit, vizita në galeri',
    extra_information: 'Ligjërues në workshope për restaurimin e artit',
    certification: '',
    volunteering: 'Punë vullnetare në projekte restaurimi në sitet historike',
    publications: '',
  },
  {
    experience:
      'Sommelier në Restaurantin Gourmet Prestige (2020-sot); Konsulent i Verërave në WineHouse Boutique (2016-2020)',
    education:
      'Certifikim nga Akademia e Sommelierëve (2014-2016); Kurs intensiv në kultivimin dhe përpunimin e rrushit, Instituti i Vitikulturës (2012-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Përdorimi i aplikacioneve të menaxhimit të inventarit të verërave',
    soft_skills: 'Dëgjim dhe komunikim me klientët, prezantim',
    technical_skills:
      'Njohuri të thella në vitikulturë, degustimi dhe shërbimi i verërave',
    hobbies: 'Udhëtimet në rajonet e verërave, gatimi',
    extra_information: 'Anëtar i një klubi ndërkombëtar të sommelierëve',
    certification: '',
    volunteering: 'Organizimi i degustimeve bamirëse të verërave',
    publications: '',
  },
  {
    experience:
      'Koordinator i Ekspeditave në AdventureWorld (2021-sot); Guidë Turistike në DiscoverAlbania (2017-2021)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Përdorimi i softuerëve të planifikimit të udhëtimit',
    soft_skills: 'Organizim, komunikim efektiv me klientët',
    technical_skills:
      'Planifikim dhe menaxhim i ekspeditave malore dhe aventurës',
    hobbies: 'Alpinizëm, fotografi natyrore',
    extra_information: 'Anëtar i klubit alpin',
    certification: 'Certifikim si Guidë Malore',
    volunteering: 'Organizim i pastrimeve të mjedisit në zona turistike',
    publications: '',
  },
  {
    experience:
      'Zoolog në Kopshtin Zoologjik Kombëtar (2018-sot); Asistent Kërkimi në Qendrën e Studimit të Faunës (2015-2018)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Analizë e të dhënave të biodiversitetit me softuerë specifikë',
    soft_skills: 'Kujdes dhe menaxhim i specieve të ndryshme zoologjike',
    technical_skills: 'Studimi dhe konservimi i faunës',
    hobbies: 'Vëzhgimi i zogjve, kamping',
    extra_information:
      'Pjesëmarrës në projekte ndërkombëtare për mbrojtjen e specieve të rrezikuara',
    certification: 'Certifikim në Menaxhimin e Habitatit të Egër',
    volunteering: 'Ndihmë në rehabilitimin e kafshëve të egra',
    publications: '',
  },
  {
    experience:
      'Restaurues i Librave të Vjetër në Bibliotekën Kombëtare (2019-sot); Praktikant në Studio Restaurimi (2016-2019)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorimi i softuerëve për arkivimin dhe katalogimin e librave',
    soft_skills: 'Vëmendje ndaj detajeve, durim',
    technical_skills:
      'Teknikat e restaurimit dhe konservimit të materialeve të shtypura',
    hobbies: 'Leximi, koleksionimi i librave të rrallë',
    extra_information: 'Anëtar i shoqatës së restauruesve të librave',
    certification: 'Certifikim në Restaurimin e Librave dhe Dokumenteve',
    volunteering: 'Workshope për ruajtjen e librave të vjetër në shkolla',
    publications: '',
  },
  {
    experience:
      'Animator në Qendrën e Lojërave për Fëmijë (2020-sot); Asistent Animator në Parkun e Argëtimit (2018-2020)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Përdorim i softuerëve të animacionit dhe editimit video',
    soft_skills: 'Kreativitet, komunikim me fëmijët, organizim i aktiviteteve',
    technical_skills:
      'Krijimi i personazheve dhe skenave animuese, teknika të animacionit',
    hobbies: 'Vizatimi, krijimi i videove animuese',
    extra_information: 'Pjesëmarrës në workshope të animacionit',
    certification: '',
    volunteering:
      'Organizim i workshop-eve të animacionit për fëmijë në nevojë',
    publications: '',
  },
  {
    experience:
      'Sekretar në një firmë ligjore (2019-sot); Ndihmës administrativ në një kompani ndërtimi (2017-2019)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i paketës Microsoft Office, menaxhimi i email-eve dhe agjendës',
    soft_skills: 'Organizim, punë nën presion, komunikim efektiv',
    technical_skills: 'Menaxhimi i dokumentacionit, arkivimi dhe skanimi',
    hobbies: 'Leximi, shëtitjet në natyrë',
    extra_information:
      'Vullnetar në organizimin e eventeve të ndryshme korporate',
    certification: '',
    volunteering: 'Ndihmë në organizimin e konferencave dhe seminareve ligjore',
    publications: '',
  },
  {
    experience:
      'Përkthyes freelancer nga Anglishtja në Shqip (2018-sot); Asistent përkthimi në një agjensi turistike (2016-2018)',
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills: 'Përdorim i softuerëve të përkthimit dhe fjalorëve online',
    soft_skills:
      'Aftësi të forta gjuhësore, kujdes ndaj detajeve, aftësi të mira të kërkimit',
    technical_skills:
      'Përkthimi i teksteve të ndryshme, redaktimi dhe korrigjimi',
    hobbies: 'Leximi i literaturës së huaj, udhëtimet',
    extra_information: 'Pjesëmarrës në konferenca të përkthyesve',
    certification: '',
    volunteering: 'Përkthim i materialeve për OJQ-të pa fitimprurëse',
    publications: '',
  },
  {
    experience:
      "Kuzhinier në restorantin lokal 'Deti Jon' (2021-sot); Ndihmës kuzhinier në 'Gatimet e Gjyshes' (2018-2021)",
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazë në përdorimin e sistemeve të porosisë online dhe softuerëve të inventarit',
    soft_skills: 'Kreativitet në gatim, punë në ekip, menaxhim i kohës',
    technical_skills:
      'Përgatitje e specialiteteve detare, njohuri në gatimin tradicional shqiptar',
    hobbies: 'Gatimi, eksplorimi i recetave të reja',
    extra_information: 'Anëtar i komunitetit lokal të gatimit',
    certification: '',
    volunteering:
      'Organizim i kurseve falas të gatimit për të rinjtë në qendrën komunitare',
    publications: '',
  },
  {
    experience:
      "Mjek veteriner në klinikën 'Miku i Kafshëve' (2020-sot); Asistent veteriner në 'Shërbimi Veteriner' (2017-2020)",
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve të menaxhimit të klinikës veteriner',
    soft_skills:
      'Kujdes dhe dashuri për kafshët, komunikim efektiv me pronarët e kafshëve',
    technical_skills:
      'Diagnoza dhe trajtimi i sëmundjeve te kafshët, kirurgji e vogël veteriner',
    hobbies: 'Kujdesi për kafshët shtëpiake, vëzhgimi i natyrës',
    extra_information: 'Vullnetar në strehimoret e kafshëve',
    certification: '',
    volunteering: 'Kampanja për vaksinimin falas të kafshëve në zonat rurale',
    publications: '',
  },
  {
    experience:
      "Ndërtues skenash në Teatrin Kombëtar (2019-sot); Asistent ndërtimi skenash në 'ArtScenik' (2016-2019)",
    education: '',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazë në përdorimin e softuerëve të dizajnit për skicimin e skenave',
    soft_skills:
      'Kreativitet, punë në grup, zgjidhje e problemeve në kohë reale',
    technical_skills:
      'Ndërtimi dhe përshtatja e skenave teatrale, njohuri në punimet me dru dhe metal',
    hobbies: 'Teatri, dizajni i skenave',
    extra_information: 'Pjesëmarrës në punëtori dhe seminare për artin skenik',
    certification: '',
    volunteering: 'Ndihmë në organizimin e festivaleve lokale të teatrit',
    publications: '',
  },
  {
    experience:
      'Fotograf në StudioFotografike (2019-sot); Asistent Fotografi në FotoImazh (2016-2019)',
    education:
      'Kurs Profesional në Fotografi, Akademia e Arteve Vizuale (2014-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përpunim fotosh në Photoshop dhe Lightroom',
    soft_skills: 'Kreativitet, punë në ekip, komunikim efektiv',
    technical_skills: 'Fotografi portreti dhe peizazhi, fotografi eventesh',
    hobbies: 'Udhëtime, hiking, lexim',
    extra_information: 'Anëtar i klubit fotografik lokal',
    certification: 'Certifikatë në Fotografi Avancuar',
    volunteering: 'Fotograf vullnetar në evente bamirësie',
    publications: "Album fotografik 'Shqipëria Nëpër Objektiv'",
  },
  {
    experience:
      'Trajner Personali në FitGym (2020-sot); Ndihmës Trajner në HealthyLife Center (2017-2020)',
    education:
      'Certifikim në Trajnim Personal, Instituti i Fitnessit dhe Shëndetit (2015-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills:
      'Përdorim i aplikacioneve për trajnim dhe monitorim të ushtrimeve',
    soft_skills: 'Motivim, ndërtim i planeve të personalizuara të stërvitjes',
    technical_skills:
      'Stërvitje me peshë, kardio, teknika të avancuara të fitnessit',
    hobbies: 'Maratona, biçikletë, gatim i shëndetshëm',
    extra_information: 'Organizator i grupeve të stërvitjes në natyrë',
    certification: 'Licencë si Trajner Personal nga Këshilli Kombëtar i Forcës',
    volunteering: 'Seminare falas mbi ushqyerjen dhe fitnessin për të rinjtë',
    publications: 'Udhëzues i Trajnimeve për Forcë dhe Përmirësimin e Jetës',
  },
  {
    experience:
      'Gjuhëtar në Qendrën e Studimeve Albanologjike (2018-sot); Asistent Kërkimi në Departamentin e Gjuhësisë (2015-2018)',
    education:
      'Doktoraturë në Gjuhësi, Universiteti i Tiranës (2013-2018); Master në Studime Albanologjike, Universiteti i Tiranës (2010-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Greqisht',
    digital_skills: 'Analizë e të dhënave lingvistike me software specifik',
    soft_skills: 'Analizë tekstuale, kërkim akademik',
    technical_skills: 'Lingvistikë historike, dialektologji, leksikografi',
    hobbies: 'Leximi, shkrimi, udhëtimet kulturore',
    extra_information:
      'Anëtar i shoqatës së gjuhëtarëve, pjesëmarrës në konferenca ndërkombëtare',
    certification: 'Certifikim në Metodologji Kërkimore',
    volunteering: 'Organizim i punëtorive për ruajtjen e gjuhëve të rralla',
    publications: 'Monografi mbi ndikimin e gjuhëve të huaja në shqip',
  },
  {
    experience:
      'Dizajner Grafik në CreativeStudio (2019-sot); Asistent Dizajni në DesignHub (2016-2019)',
    education: 'Bachelor në Dizajn Grafik, Universiteti i Arteve (2014-2018)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Master në Adobe Creative Cloud, veçanërisht Illustrator dhe Photoshop',
    soft_skills: 'Kreativitet, punë në ekip, zgjidhje e problemeve',
    technical_skills:
      'Dizajn i identitetit korporativ, reklama vizuale, paketimi',
    hobbies: 'Fotografia, vizatimi, udhëtimet',
    extra_information: 'Anëtar i një grupi lokal të artistëve dhe dizajnerëve',
    certification: 'Certifikatë Profesionale në Dizajn Grafik',
    volunteering: 'Dizajn falas për OJQ dhe nisma lokale',
    publications: '',
  },
  {
    experience:
      'Konsulent IT në TechSolutions (2020-sot); Analist Sistemi në DataCorp (2017-2020)',
    education:
      'Master në Teknologji Informacioni, Universiteti Politeknik (2015-2019)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Zhvillim software, administrim rrjeti, siguri kibernetike',
    soft_skills: 'Analizë, punë në ekip, komunikim',
    technical_skills: 'SQL, Python, Linux, menaxhimi i serverëve',
    hobbies: 'Programimi, lojërat elektronike, leximi i librave teknologjik',
    extra_information: 'Mentor për studentët e rinj në fushën e IT',
    certification:
      'Certifikim në Cisco CCNA, Microsoft Certified: Azure Administrator',
    volunteering: 'Ndihmë në organizimin e kode kampit për të rinjtë',
    publications: '',
  },
  {
    experience:
      'Infermiere në Spitalin Qendror (2018-sot); Asistent Mjekësor në Klinikën e Shëndetit (2015-2018)',
    education:
      'Bachelor në Infermieri, Universiteti i Shëndetësisë (2013-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills:
      'Njohuri në software mjekësor për menaxhimin e të dhënave të pacientëve',
    soft_skills: 'Kujdes ndaj pacientit, punë në ekip, empati',
    technical_skills:
      'Kujdesi mjekësor dhe procedurat e emergjencës, administrimi i ilaçeve',
    hobbies: 'Vullnetarizmi, kujdesi për bimët, gatimi',
    extra_information:
      'Pjesëmarrës në seminare për përmirësimin e kujdesit ndaj pacientit',
    certification: 'Licencë si Infermiere e Regjistruar',
    volunteering: 'Vullnetare në qendrat shëndetësore komunitare',
    publications: '',
  },
  {
    experience:
      "Mesues Matematike në Shkollën e Mesme 'Gjimnazi Dritë' (2017-sot); Asistent mësimdhënie në Qendrën Edukative 'Dija' (2014-2017)",
    education:
      'Master në Arsimit Matematik, Universiteti Pedagogjik (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i softuerëve edukative dhe platformave online të mësimdhënies',
    soft_skills: 'Komunikim, metodika mësimdhënie, ndërtim i planeve mësimore',
    technical_skills: '',
    hobbies: '',
    extra_information: '',
    certification: 'Licencë si Mesues',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Stilist Mode në FashionHouse Albania (2020-sot); Asistent Stilist në ModaAlb Studio (2016-2020)',
    education:
      'Diplomë në Dizajnin e Modës, Akademia e Arteve të Bukura, Tiranë (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i programit Adobe Illustrator dhe Photoshop për dizajnin e veshjeve',
    soft_skills: 'Kreativitet, komunikim efektiv, punë në ekip',
    technical_skills:
      'Dizajnimi i koleksioneve të modës, njohuri në përdorimin e materialeve të ndryshme',
    hobbies: 'Vizatimi, udhëtimet në qytete të ndryshme për inspirim',
    extra_information: 'Anëtar i një grupi ndërkombëtar të stilistëve të modës',
    certification: 'Certifikatë për Avancimin në Teknikat e Dizajnit të Modës',
    volunteering:
      'Organizim i eventeve bamirëse për mbledhjen e fondeve nëpërmjet modës',
    publications: '',
  },
  {
    experience:
      'Përkthyes Gjyqësor në Gjykatën e Tiranës (2019-sot); Përkthyes Freelancer (2015-2019)',
    education:
      'Master në Përkthim dhe Interpretim, Universiteti i Gjuhëve të Huaja, Tiranë (2013-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përdorim i softuerëve të përkthimit dhe bazave të të dhënave terminologjike',
    soft_skills:
      'Aftësi të shkëlqyera komunikimi, përshtatje në situata të ndryshme',
    technical_skills:
      'Përkthimi i dokumenteve zyrtare dhe gjyqësore, interpretimi në konferenca',
    hobbies: 'Leximi i literaturës në gjuhë të huaja, udhëtimet kulturore',
    extra_information: 'Anëtar i Shoqatës së Përkthyesve Profesionistë',
    certification: 'Licencë si Përkthyes Gjyqësor',
    volunteering:
      'Përkthim vullnetar për OJQ-të në projekte të ndryshme sociale',
    publications: '',
  },
  {
    experience:
      "Animator në qendrën e lojërave 'Loja Fëmijë' (2022-sot); Ndihmës animator në parkun e argëtimit 'Aventura' (2019-2022)",
    education:
      'Kurs profesional në Animacion dhe Argëtim Fëmijësh, Akademia e Arteve dhe Argëtimit (2017-2019)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i programit për animacion 2D dhe 3D, editim video',
    soft_skills:
      'Kreativitet, komunikim me fëmijë, organizim i aktiviteteve argëtuese',
    technical_skills:
      'Krijimi i personazheve animuese, organizimi i lojërave dhe aktiviteteve edukative',
    hobbies: 'Artizanat me fëmijë, pikturë, leximi i përrallave',
    extra_information: 'Voluntar në kampet verore për fëmijë',
    certification: 'Certifikatë në Animacion për Fëmijë',
    volunteering:
      'Organizimi i punëtorive të artit dhe kreativitetit për fëmijët në qendrat komunitare',
    publications: '',
  },
  {
    experience:
      'Especialistë i Sigurisë Kibernetike në CyberProtect Corp. (2021-sot); Analist i Sigurisë në IT Solutions Inc. (2018-2021)',
    education:
      'Master në Siguri Kibernetike, Universiteti i Teknologjisë së Informacionit (2016-2018)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Siguri kibernetike, analizë e rrezikut, kriptografi',
    soft_skills: 'Zgjidhje e problemeve, punë në ekip, vëmendje ndaj detajeve',
    technical_skills:
      'Menaxhim i incidenteve të sigurisë, testimi i penetrimi, mbrojtje e të dhënave',
    hobbies: 'Programimi, leximi i literaturës në fushën e IT, shah',
    extra_information:
      'Anëtar i një komuniteti online për sigurinë kibernetike',
    certification: 'Certifikime të ndryshme në fushën e sigurisë kibernetike',
    volunteering:
      'Trajnime për ndërgjegjësimin rreth sigurisë kibernetike në shkolla',
    publications: '',
  },
  {
    experience:
      'Konsulent i Brendshëm në Departamentin e Burimeve Njerëzore të GlobalCorp (2020-sot); Rekruter në HR Consulting Group (2017-2020)',
    education:
      'Master në Menaxhim të Burimeve Njerëzore, Universiteti i Studimeve Sociale (2015-2017)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Menaxhimi i sistemeve të informacionit për burimet njerëzore, përdorim i softuerëve të rekrutimit',
    soft_skills: 'Komunikim, ndërtim i marrëdhënieve, vlerësim i talentit',
    technical_skills:
      'Zhvillimi dhe zbatimi i strategjive të rekrutimit, menaxhimi i performancës',
    hobbies:
      'Psikologjia organizative, udhëtimet, leximi i librave mbi menaxhimin',
    extra_information: 'Ligjërues në seminare për zhvillimin profesional',
    certification: 'Certifikatë në Menaxhimin e Talenteve',
    volunteering: 'Këshillim karriere për studentët në universitete',
    publications: '',
  },
  {
    experience:
      'Inxhinier Softueri në SoftTech Albania (2018-sot); Zhvillues Web në WebAlb Solutions (2015-2018)',
    education:
      'Master në Inxhinieri Softuerike, Universiteti Politeknik i Tiranës (2013-2015); Bachelor në Shkencat Kompjuterike, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Zhvillim i aplikacioneve web dhe mobile, njohuri të avancuara në Java, Python dhe frameworks si React',
    soft_skills: 'Punë në grup, zgjidhje e problemeve, komunikim efektiv',
    technical_skills:
      'Menaxhim i bazave të të dhënave, siguri e të dhënave, zhvillim i sistemeve të shkallëzuara',
    hobbies: 'Programimi, leximi i librit, eksplorimi i teknologjive të reja',
    extra_information:
      'Anëtar i një grupi ndërkombëtar të zhvilluesve, pjesëmarrës në hackathons dhe konferenca teknologjike',
    certification:
      'Certifikata në Siguri Kibernetike, Certifikata në Menaxhimin e Projekteve Agile',
    volunteering: 'Mësimdhënie vullnetare në programim për të rinjtë',
    publications: '',
  },
  {
    experience:
      'Arkitekte në Studio Arkitekture ABC (2019-sot); Ndihmëse Arkitekte në DesignGroup (2016-2019)',
    education:
      'Master në Arkitekturë, Universiteti i Arteve (2014-2016); Bachelor në Dizajn Urban, Universiteti i Arteve (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills:
      'Profesioniste në AutoCAD, SketchUp, dhe software për modelim 3D si Rhino',
    soft_skills: 'Kreativitet, punë në ekip, aftësi të forta prezantuese',
    technical_skills:
      'Dizajnimi i projekteve arkitektonike dhe urbanistike, njohuri në ligjet e ndërtimit dhe qëndrueshmëri',
    hobbies:
      'Vizatimi, udhëtimet për të zbuluar arkitektura të reja, fotografia',
    extra_information:
      'Organizatore e workshop-eve për studentët e arkitekturës, pjesëmarrëse në konkurse ndërkombëtare të dizajnit',
    certification:
      'Certifikata Profesionale në Qëndrueshmëri dhe Dizajn Ekologjik',
    volunteering:
      'Punë vullnetare në projekte të ndërtimit të qëndrueshëm për komunitetet në nevojë',
    publications: '',
  },
  {
    experience:
      "Mësuese e Gjuhës Angleze në Shkollën 9-Vjeçare 'Drita' (2020-sot); Asistente Mësimdhënie në Qendrën Edukative 'Eureka' (2017-2020)",
    education:
      'Master në Arsimit dhe Gjuhë Angleze, Universiteti Pedagogjik (2015-2017); Bachelor në Gjuhë dhe Letërsi Angleze, Universiteti i Gjuhëve të Huaja (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Përdorim i platformave edukative online si Edmodo, Google Classroom',
    soft_skills: '',
    technical_skills: '',
    hobbies: '',
    extra_information: '',
    certification: 'Licencë si Mesues',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Inxhinier Software në Google (2018-2022) Analist Sistemesh në Microsoft (2015-2018)',
    education:
      'Master në Inxhinieri Softuerike, Universiteti i Teknologjisë së Massachusetts-it Bachelor në Shkencat Kompjuterike, Universiteti i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Microsoft Office, Adobe Photoshop',
    soft_skills: 'Komunikim, Puna në grup, Menaxhimi i kohës',
    technical_skills: 'Java, Python, SQL, C++',
    hobbies: 'Leximi, Ecja, Programimi',
    extra_information:
      'Anëtar i klubit të matematikës gjatë studimeve universitare',
    certification:
      'Certifikatë profesionale në Java, Certifikatë në menaxhimin e projekteve',
    volunteering: 'Mësimdhënës vullnetar në kodim për fëmijë',
    publications:
      'Publikim në revistën e teknologjisë për sigurinë në internet',
  },
  {
    experience:
      'Menaxher Projekti në Vodafone (2019-2022) Asistent Menaxhimi në Telekom Albania (2016-2019)',
    education:
      'Master në Menaxhim Projektesh, Universiteti i Tiranës Bachelor në Administrim Biznesi, Universiteti Europian i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Trello, Slack, Microsoft Project',
    soft_skills: 'Lidership, Vendimmarrje, Negociim',
    technical_skills: 'HTML, CSS, Bazat e SQL',
    hobbies: 'Futbolli, Udhetimi, Gatuajtja',
    extra_information:
      'Koordinator i eventeve studentore gjatë viteve të universitetit',
    certification:
      'Certifikatë në Menaxhimin e Rrezikut, Certifikatë në Scrum Master',
    volunteering: 'Organizator në fushata ndërgjegjësimi për mjedisin',
    publications:
      'Artikull në gazetën lokale për rëndësinë e teknologjisë në edukim',
  },
  {
    experience:
      'Dizajner Grafik në Freelance (2017-2022),Asistent Dizajni në Studio Kreative (2014-2017)',
    education:
      'Master në Dizajn Grafik, Akademia e Arteve,Bachelor në Dizajn Komunikimi, Universiteti Politeknik i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'Adobe Illustrator, Adobe After Effects, Sketch',
    soft_skills: 'Kreativitet, Përshtatshmëri, Kujdes ndaj detajeve',
    technical_skills: 'Dizajnimi i logos, Animacioni, UX/UI Design',
    hobbies: 'Piktura, Fotografia, Këndimi',
    extra_information: 'Anëtar i jurisë në konkurse arti lokale',
    certification:
      'Certifikatë në Adobe Creative Cloud, Certifikatë në UX Design',
    volunteering: 'Dizajner vullnetar për OJQ-së për të drejtat e kafshëve',
    publications:
      "Autor i një kolone mujore në revistën e dizajnit 'Krijimtaria Vizuale'",
  },
  {
    experience:
      'Inxhinier Software në ABC Corp 2018-2020  Menaxher Projekti në XYZ Ltd 2020-2022 ',
    education:
      'Bachelor në Inxhinieri Kompjuterike, Universiteti i Tiranës 2014-2018  Master në Menaxhim Projektesh, Universiteti Politeknik i Tiranës 2018-2020 ',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Microsoft Office, Adobe Photoshop',
    soft_skills: 'Komunikim, Përshtatshmëri, Menaxhim kohë',
    technical_skills: 'C++, Java, SQL',
    hobbies: 'Lexim, Ecje në natyrë, Fotografi',
    extra_information: 'Anëtar i klubit të teknologjisë në universitet',
    certification: 'Certifikatë Profesionale në Java, Oracle',
    volunteering: 'Vullnetar në Qendrën e Teknologjisë për Fëmijët 2019',
    publications: 'Publikim në Konferencën Ndërkombëtare të Teknologjisë 2021',
  },
  {
    experience:
      "Mësues Matematike në Shkollën 9-vjeçare 'Dritë', 2015-2019  Lektor në Universitetin e Shkencave, 2019-2022 ",
    education:
      'Bachelor në Matematikë, Universiteti i Shkencave 2011-2015  Master në Edukim Matematik, Universiteti i Shkencave 2015-2017 ',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'LaTeX, MATLAB',
    soft_skills: 'Organizim, Punë në grup, Prezantim',
    technical_skills: 'Analizë numerike, Statistikë',
    hobbies: 'Gatim, Vizatim, Udhetim',
    extra_information: 'Koordinator i klubit të matematikës',
    certification: 'Certifikatë në Analizë të të Dhënave, Coursera',
    volunteering: 'Organizator i Olimpiadës së Matematikës për Fëmijë 2018',
    publications:
      'Studim në Efektet e Mësimdhënies Inovative në Matematikë 2020',
  },
  {
    experience: "Arkitekt në Studio Arkitekture 'Krijim', 2016-2021 ",
    education:
      'Bachelor në Arkitekturë, Universiteti Polis 2012-2016  Master në Dizajn Urban, Universiteti i Arteve 2016-2018 ',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills: 'AutoCAD, SketchUp, Revit',
    soft_skills: 'Kreativitet, Vendimmarrje, Lidership',
    technical_skills: 'Dizajn urban, Restaurim ndërtesash',
    hobbies: 'Modelizim 3D, Fotografi Arkitektonike, Histori Arti',
    extra_information: "Anëtar i bordit të revistës së arkitekturës 'Ndërto'",
    certification: 'Certifikatë Profesionale në Revit, Autodesk',
    volunteering: "Vullnetar në projektin 'Rinovimi i Qendrës Historike', 2020",
    publications:
      'Artikull në Rëndësinë e Hapësirave të Gjelbra në Qytete 2021',
  },
  {
    experience:
      'Inxhinier i Sistemeve në DataTech Solutions (2021-sot); Teknik IT në InfoSys Network (2017-2021)',
    education:
      'Master në Inxhinieri të Sistemeve, Universiteti Politeknik i Tiranës (2015-2017); Bachelor në Teknologji Informacioni, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Administrim rrjetesh, siguri kibernetike, zhvillim software',
    soft_skills:
      'Zgjidhje problemesh, menaxhim i projekteve, komunikim efektiv',
    technical_skills:
      'Certifikata Cisco CCNA, njohuri të avancuara në Linux dhe Windows Server',
    hobbies:
      'Kodimi, leximi i literaturës së IT, eksplorimi i teknologjive të reja',
    extra_information:
      'Anëtar i një komuniteti online për teknologjinë dhe sigurinë e informacionit',
    certification:
      'Cisco Certified Network Associate (CCNA), Microsoft Certified: Azure Administrator Associate',
    volunteering:
      'Mësimdhënie vullnetare në kodim për të rinjtë, organizim i seminareve teknologjike',
    publications: '',
  },
  {
    experience:
      "Arkitekt në Studio Arkitekturale 'Arkitektura Moderne' (2022-sot); Asistent Arkitekti në 'Dizajni Urban' (2018-2022)",
    education:
      'Master në Arkitekturë dhe Planifikim Urban, Universiteti i Arteve (2016-2018); Bachelor në Arkitekturë, Universiteti i Arteve (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills:
      'Profesionist në AutoCAD, Revit dhe software të vizualizimit 3D si 3ds Max',
    soft_skills: 'Kreativitet, punë në grup, aftësi në prezantim dhe komunikim',
    technical_skills:
      'Dizajnimi i projekteve arkitektonike dhe urbanistike, njohuri të qëndrueshmërisë në ndërtim',
    hobbies:
      'Vizatimi, fotografia arkitektonike, udhëtimet për të mësuar për kultura të ndryshme',
    extra_information:
      'Pjesëmarrës në konkurse ndërkombëtare të arkitekturës, anëtar i bordit të një reviste arkitekture',
    certification: 'Certifikatë Profesionale në Përdorimin e Revit',
    volunteering:
      'Punë vullnetare në projektet e ndërtimit të qëndrueshëm për komunitetin',
    publications: '',
  },
  {
    experience:
      "Psikolog Klinik në Qendrën e Shëndetit Mendor 'Mendje e Hapur' (2020-sot); Asistent Psikologu në Klinikën 'Vizioni i Ri' (2016-2020)",
    education:
      'Master në Psikologji Klinike, Universiteti i Shkencave Sociale (2014-2016); Bachelor në Psikologji, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i softuerëve për menaxhimin e rasteve dhe analizën e të dhënave psikologjike',
    soft_skills:
      'Dëgjim aktiv, empati, aftësi të mira të komunikimit dhe këshillimit',
    technical_skills:
      'Terapi kognitive sjellëse, menaxhim i stresit dhe çrregullimeve të ankthit, vlerësim psikologjik',
    hobbies: 'Leximi i literatures',
    extra_information: '',
    certification: 'Licencë si Mesues',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Menaxher Projekti në ABC Corp 2018-2022 Asistent Menaxhimi në XYZ LLC 2015-2018',
    education:
      'Master në Menaxhim Biznesi, Universiteti i Tiranës 2013-2015 Bachelor në Ekonomi, Universiteti i Tiranës 2009-2013',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Gjermanisht, Nivel B2',
    digital_skills: 'Microsoft Office, Adobe Photoshop, AutoCAD',
    soft_skills: 'Komunikim efektiv, Menaxhim kohë, Puna në grup',
    technical_skills:
      'Analizë financiare, Menaxhim projekti, Marketing dixhital',
    hobbies: 'Leximi, Ecja në natyrë, Fotografia',
    extra_information: 'Anëtar i klubit të debatit që nga viti 2010',
    certification: 'Certifikatë në Menaxhimin e Projekteve 2019',
    volunteering: 'Vullnetar në Qendrën e Ndihmës për Fëmijët 2016-2018',
    publications:
      "Publikim në revistën 'Ekonomia Sot', titulli: 'Trendet e Reja në Menaxhimin e Biznesit', 2020",
  },
  {
    experience:
      'Inxhinier Software në DEF Software 2017-2022 Praktikant Programimi në GHI Tech 2015-2017',
    education:
      'Master në Inxhinieri Softuerike, Universiteti Politeknik i Tiranës 2013-2015 Bachelor në Shkencat Kompjuterike, Universiteti Politeknik i Tiranës 2009-2013',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C2; Italianisht, Nivel B1',
    digital_skills: 'Java, Python, SQL, Docker',
    soft_skills: 'Zgjidhje problemesh, Përshtatshmëri, Kreativitet',
    technical_skills:
      'Zhvillim softueri, Siguri kibernetike, Analizë të dhënash',
    hobbies: 'Programimi, Leximi, Lojërat kompjuterike',
    extra_information: 'Mentor për studentët e rinj në fushën e teknologjisë',
    certification: 'Certifikatë në Siguri Kibernetike 2021',
    volunteering: 'Vullnetar në organizimin e Hackathons 2019-2021',
    publications:
      "Autor i artikullit 'Siguria në Aplikacionet Mobile' në konferencën e Teknologjisë së Informacionit, 2020",
  },
  {
    experience:
      'Arkitekt në JKL Architecture 2016-2022 Asistent Arkitekti në MNO Design 2012-2016',
    education:
      'Master në Arkitekturë, Universiteti i Arteve 2010-2012 Bachelor në Dizajn Ambiental, Universiteti i Arteve 2006-2010',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Spanjisht, Nivel B2',
    digital_skills: 'AutoCAD, SketchUp, Revit',
    soft_skills: 'Vëmendje ndaj detajeve, Organizim, Komunikim vizual',
    technical_skills: 'Dizajn urban, Restaurim ndërtesash, Menaxhim projekti',
    hobbies: 'Vizatimi, Udhetimi, Kinematografia',
    extra_information: 'Pjesëmarrës në konkurse ndërkombëtare të arkitekturës',
    certification: 'Certifikatë në Dizajnin e Qëndrueshëm 2018',
    volunteering:
      'Vullnetar në projekte ndërtimi për komunitetet në nevojë 2014-2016',
    publications:
      "Publikim në revistën 'Arkitektura Sot', titulli: 'Inovacionet në Dizajnin Urban', 2019",
  },
  {
    experience:
      'Inxhinier Software në Google (2018-2022) Analist Sistemesh në Microsoft (2015-2018)',
    education:
      'Master në Inxhinieri Kompjuterike, Universiteti i Teknologjisë së Massachusettsit Bachelor në Shkencat Kompjuterike, Universiteti i Stanfordit',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Programim në Python, Java, SQL',
    soft_skills: 'Menaxhim i kohës, Komunikim efektiv, Punë në grup',
    technical_skills:
      'Zhvillim Web, Siguri Kompjuterike, Inteligjencë Artificiale',
    hobbies: 'Leximi, Ecja me biçikletë, Fotografia',
    extra_information: 'Anëtar i Mensa-s',
    certification: 'Certifikatë në Siguri Kibernetike, Certifikatë AWS',
    volunteering: 'Mësimdhënës vullnetar në Code.org',
    publications:
      "Autor i 'Siguria në Internet: Një Udhërrëfyes për Fillimtarë'",
  },
  {
    experience:
      'Menaxher Projekti në Vodafone (2019-2022) Koordinator i Projektit në A1 Telekom (2016-2019)',
    education:
      'Master në Menaxhim Projekti, Universiteti i Vjenës Bachelor në Komunikim Masiv, Universiteti i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht, Spanjisht',
    digital_skills: 'MS Project, Agile & Scrum, Trello',
    soft_skills: 'Lidership, Negociim, Solucionim i problemeve',
    technical_skills: 'Menaxhim Rrjetesh, Analizë të Dhënash',
    hobbies: 'Udhëtimet, Gatuajtja, Kinematografia',
    extra_information: 'Bloger i teknologjisë',
    certification:
      'Certifikatë në Menaxhimin e Projekteve Agile, Certifikatë PMP',
    volunteering: 'Organizator në TEDxTirana',
    publications: "Shkrimtar i artikujve në 'Teknologjia dhe Shoqëria'",
  },
  {
    experience:
      'Arkitekt Software në Apple (2020-2022) Zhvillues Full-Stack në Spotify (2017-2020)',
    education:
      'Master në Arkitekturë Software, Universiteti i Kalifornisë Bachelor në Inxhinieri Softuerike, Politekniku i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht, Francez',
    digital_skills: 'React, Node.js, Docker',
    soft_skills: 'Kreativitet, Përshtatshmëri, Menaxhim stresi',
    technical_skills: 'Cloud Computing, DevOps, Machine Learning',
    hobbies: 'Programimi, Shahu, Yoga',
    extra_information: 'Mentor në Hackathons lokale',
    certification:
      'Certifikatë në React, Certifikatë në Cloud Computing nga Google',
    volunteering: 'Ndihmës në ndërtimin e faqeve web për OJQ-të',
    publications: "Ko-autor i 'Inovacionet në Teknologjinë Cloud'",
  },
  {
    experience:
      'Inxhinier Software në Google (2018-2022), Zhvillues Full Stack në Startup XYZ (2015-2018)',
    education:
      'Master në Inxhinieri Softuerike, Universiteti i Teknologjisë 2015,Bachelor në Shkenca Kompjuterike, Universiteti i Tiranës 2013',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Python, Java, SQL, Git, Docker',
    soft_skills: 'Komunikim, Puna në ekip, Menaxhimi i kohës',
    technical_skills:
      'Zhvillimi i softuerit, Testimi i softuerit, Administrimi i databazave',
    hobbies: 'Leximi, Ecja me biçikletë, Programimi',
    extra_information: 'Anëtar i klubit të teknologjisë në universitet',
    certification: 'Certifikatë Profesionale në Menaxhimin e Projekteve 2020',
    volunteering: 'Mësimdhënës vullnetar në kodim për fëmijë 2019',
    publications:
      'Publikim në konferencën ndërkombëtare për Sigurinë e Informacionit 2021',
  },
  {
    experience:
      'Menaxher Projekti në Telekom Albania (2017-2022),Asistent Menaxhimi në ABC Corporation (2014-2017)',
    education:
      'Master në Menaxhim Projekti, Universiteti Europian i Tiranës 2016 Bachelor në Ekonomi, Universiteti i Tiranës 2014',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'MS Office, Asana, Trello',
    soft_skills: 'Lidership, Vendimmarrje, Negociata',
    technical_skills:
      'Menaxhimi i buxhetit, Planifikimi strategjik, Analizë financiare',
    hobbies: 'Udhëtimet, Gatuajtja, Fotografia',
    extra_information: 'Vullnetar në organizimin e eventeve lokale',
    certification: 'Certifikatë në Menaxhimin e Rrezikut 2018',
    volunteering: 'Koordinator në fushata ndërgjegjësimi mjedisor 2020',
    publications:
      'Artikull në revistën e biznesit për Menaxhimin e Ndikimit Mjedisor 2019',
  },
  {
    experience:
      "Kamarier në restorantin 'Drita', 2018-2020 Shofer kamioni në 'Logistics SHPK', 2020-2022",
    education:
      'Diplomë në Menaxhim Hotelier, Universiteti i Turizmit 2014-2018',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B2',
    digital_skills: 'Përdorues i mirë i paketës Microsoft Office',
    soft_skills: 'Komunikim efektiv, punë në grup, zgjidhje problemesh',
    technical_skills:
      'Mirëmbajtje bazë e automjeteve, njohuri në bartje të sigurt',
    hobbies: 'Udhëtime, lexim, gatim',
    extra_information: 'I disponueshëm për punë në turne',
    certification: 'Certifikatë profesionale si Shofer Kamioni',
    volunteering: 'Vullnetar në organizimin e eventeve lokale',
    publications: '',
  },
  {
    experience:
      "Infermiere në Qendrën Shëndetësore 'Shëndeti', 2015-2019 Infermiere kryesore në Spitalin Rajonal 'Drita e Jetës', 2019-2022",
    education:
      'Bachlor në Infermieri, Universiteti i Shkencave të Shëndetit 2011-2015',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Italisht, Nivel B1',
    digital_skills: 'Njohuri të mira në përdorimin e softuerëve mjekësorë',
    soft_skills: 'Empati, komunikim efektiv, durim',
    technical_skills:
      'Njohuri të avancuara në kujdesin infermieror dhe procedurat emergjente',
    hobbies: 'Vrapim, yoga, meditim',
    extra_information: 'Anëtare e shoqatës së infermierëve',
    certification: 'Certifikatë e Avancuar në Kujdesin Intensiv',
    volunteering: 'Vullnetare në kampet shëndetësore për komunitetet në nevojë',
    publications:
      "Publikim në revistën 'Shëndeti për Të Gjithë' mbi kujdesin palliativ",
  },
  {
    experience: "Doktor në Klinikën 'Vizioni i Ri', 2017-2022",
    education: 'Diplomë në Mjekësi, Universiteti i Mjekësisë 2011-2017',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C2; Gjermanisht, Nivel B2',
    digital_skills:
      'Njohuri të avancuara në përdorimin e sistemeve të informacionit shëndetësor',
    soft_skills: 'Vendimmarrje, menaxhim i stresit, punë në grup',
    technical_skills:
      'Specializim në kardiologji, njohuri të thelluara në ultratinguj',
    hobbies: 'Lexim, shah, udhëtime',
    extra_information: 'I interesuar në hulumtime shkencore',
    certification: 'Certifikatë Specializimi në Kardiologji',
    volunteering: 'Dhënës i ligjëratave edukative për shëndetin e zemrës',
    publications: 'Autor i disa artikujve shkencorë në fushën e kardiologjisë',
  },
  {
    experience:
      'Kamarier në restorantin Prestige 2018-2020 Menaxher i dyqanit të ushqimeve, Supermarketi Dielli 2020-2022',
    education:
      'Diplomë në Menaxhim Hotelier, Universiteti i Turizmit 2014-2018',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B2',
    digital_skills: 'Microsoft Office, ECDL',
    soft_skills: 'Komunikim efektiv, Puntori, Menaxhim kohe',
    technical_skills: 'Organizim dhe menaxhim i inventarit',
    hobbies: 'Gatimi, Leximi, Udhetimi',
    extra_information: 'Anëtar aktiv i klubit të librit lokal',
    certification: 'Certifikatë për Menaxhimin e Konflikteve 2019',
    volunteering: 'Vullnetar në kuzhinën sociale 2021',
    publications: '',
  },
  {
    experience:
      'Mjek në Spitalin Qendror 2015-2022 Konsulent mjekësor, Klinika Mjekësore Dielli 2022-aktualisht',
    education:
      'Diplomë në Mjekësi Gjenerale, Universiteti i Mjekësisë 2009-2015',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Italisht, Nivel B1',
    digital_skills: 'Sistemet e informacionit mjekësor, Microsoft Office',
    soft_skills: 'Përkushtim, Vendimmarrje, Empati',
    technical_skills: 'Diagnostifikim dhe trajtim i sëmundjeve, Kirurgji bazë',
    hobbies: 'Vrapimi, Fotografia, Gjithëçka që ka të bëjë me natyrën',
    extra_information: 'Lektor në konferenca mjekësore ndërkombëtare',
    certification: 'Certifikatë në Menaxhimin e Urgjencave Mjekësore 2018',
    volunteering: 'Mjek vullnetar në misione humanitare në Afrikë 2019',
    publications:
      "Publikime në revistën 'Mjekësia Sot' mbi sëmundjet kardiovaskulare, 2020",
  },
  {
    experience:
      'Infermiere në Klinikën Mjekësore Hëna 2016-2019 Infermiere kryesore, Spitali Rajonal 2019-aktualisht',
    education:
      'Diplomë në Infermieri, Shkolla e Lartë e Shëndetësisë 2012-2016',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B2; Gjermanisht, Nivel A2',
    digital_skills: 'Sistemet e menaxhimit të pacientëve, Microsoft Office',
    soft_skills: 'Dëgjim aktiv, Komunikim, Përkujdesje ndaj pacientit',
    technical_skills:
      'Kujdesi ndaj pacientit, Menaxhimi i situatave të emergjencës',
    hobbies: 'Kujdesi për bimët, Yoga, Piktura',
    extra_information:
      'Organizatore e aktiviteteve të ndërgjegjësimit për shëndetin mendor',
    certification: 'Certifikatë në Menaxhimin e Stresit 2020',
    volunteering: 'Infermiere vullnetare në kampet e refugjatëve 2018',
    publications: '',
  },
  {
    experience:
      'Kamarier në restorantin Prestige 2018-2020 Menaxher i dyqanit të ushqimeve, Supermarketi Dielli 2020-2022',
    education:
      'Diplomë e Mesme, Shkolla e Mesme Ekonomike 2017 Bachelor në Menaxhim Biznesi, Universiteti i Tiranës 2021',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B2',
    digital_skills: 'Përdorues i avancuar i Microsoft Office, ECDL',
    soft_skills: 'Komunikim efektiv, Puna në ekip, Menaxhimi i kohës',
    technical_skills: 'Menaxhimi i inventarit, Planifikimi i turneve të punës',
    hobbies: 'Leximi, Gatuajtja, Ecja në natyrë',
    extra_information: 'Anëtar aktiv i klubit të librit në qytet',
    certification: 'Certifikatë për Menaxhimin e Konflikteve 2019',
    volunteering: 'Vullnetar në Panairin e Librit, Tiranë 2018 dhe 2019',
    publications: 'N/A',
  },
  {
    experience:
      'Infermiere në Spitalin Rajonal Fier 2015-2018 Infermiere Kryesore, Klinika Mjekësore Prive 2018-2022',
    education:
      'Diplomë e Mesme në Shkencat Shëndetësore, Shkolla e Mesme e Shëndetësisë 2014 Bachelor në Infermieri, Universiteti i Shkencave Mjekësore, Tiranë 2018',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Italian, Nivel B1',
    digital_skills:
      'Përdorues bazik i softuerëve mjekësorë dhe Microsoft Office',
    soft_skills: 'Kujdes ndaj pacientit, Përgjegjësi, Puna nën presion',
    technical_skills:
      'Menaxhimi i kujdesit ndaj pacientit, Teknikat e injektimit',
    hobbies: 'Vrapimi, Yoga, Leximi',
    extra_information: 'Trajnim në Kujdesin Intensiv 2019',
    certification:
      'Certifikatë në Përdorimin e Teknologjisë në Infermieri 2020',
    volunteering:
      'Vullnetare në kampin shëndetësor veror për fëmijë 2017 dhe 2018',
    publications: 'N/A',
  },
  {
    experience:
      'Shofer transporti ndërqytetas, Kompania TransRapid 2016-2019 Shofer dixhital, Uber 2019-2022',
    education:
      'Diplomë e Mesme, Shkolla e Mesme Teknike 2015 Kurs profesional për shoferë, Qendra e Trajnimit Profesional 2016',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B1',
    digital_skills:
      'Përdorues i sistemeve të navigimit dhe aplikacioneve për transport',
    soft_skills: 'Orientim drejt klientit, Përshtatshmëri, Përgjegjësi',
    technical_skills:
      'Mirëmbajtje bazike e automjeteve, Njohuri të rregullave të trafikut',
    hobbies: 'Modelizmi i automjeteve, Udhetimet, Fotografia',
    extra_information: 'Anëtar i klubit lokal të automobilizmit',
    certification: 'Licencë profesionale për shoferë 2016',
    volunteering:
      'Shofer vullnetar për organizatat joqeveritare në evente lokale 2018',
    publications: 'N/A',
  },
  {
    experience:
      'Mjek i Përgjithshëm në Qendrën Shëndetësore Lokale 2015-2019 Mjek Specialist në Kardiologji, Spitali Qendror 2019-2022',
    education:
      'Diplomë në Mjekësi, Universiteti i Mjekësisë 2009-2015 Specializim në Kardiologji, Universiteti i Mjekësisë 2015-2019',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Italianisht, Nivel B1',
    digital_skills:
      'Përdorues i avancuar i softuerëve mjekësorë dhe bazave të të dhënave',
    soft_skills: 'Menaxhim stresi, Vendimmarrje, Empati',
    technical_skills:
      'Diagnostikim dhe trajtim i sëmundjeve kardiovaskulare, Kirurgji minimale invazive',
    hobbies: 'Vrapimi, Udhetimi, Muzika klasike',
    extra_information: 'Lektor në konferenca mjekësore ndërkombëtare',
    certification:
      'Certifikatë për Avancim në Teknikat Kirurgjikale Kardiovaskulare 2020',
    volunteering: 'Mjek vullnetar në misione humanitare në Afrikë 2018',
    publications:
      "Autor i disa artikujve në revistën 'Inovacionet në Kardiologji', 2021",
  },
  {
    experience:
      'Shofer kamioni në Kompaninë e Transportit Rrugor 2016-2019 Shofer autobusi në linjën e transportit urban, Qyteti Transport 2019-2022',
    education: 'Diplomë e Mesme, Shkolla e Mesme Teknike 2012-2016',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B1',
    digital_skills:
      'Njohuri bazike të përdorimit të GPS dhe sistemeve të ndjekjes',
    soft_skills: 'Durim, Përgjegjësi, Aftësi të mira organizative',
    technical_skills:
      'Mirëmbajtje dhe riparim i vogël i automjeteve, Njohuri të rregullave të trafikut',
    hobbies:
      'Modelizmi, Shëtitjet me biçikletë, Ndërtimi i modeleve të automjeteve',
    extra_information: 'Anëtar i klubit lokal të biçikletave',
    certification: 'Certifikatë për Siguri në Rrugë 2017',
    volunteering: 'Organizator në fushatat lokale për siguri rrugore 2020',
    publications: '',
  },
  {
    experience:
      "Kamarier në restorantin 'Drita', 2018-2020 Shofer në kompaninë 'Rapid', 2020-2022",
    education:
      'Diplomë e Mesme, Shkolla e Mesme Teknike 2017 Certifikatë Profesionale si Shofer, Qendra e Trajnimeve Profesionale 2019',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B2',
    digital_skills: 'Përdorues i mirë i paketës Microsoft Office',
    soft_skills: 'Komunikim efektiv, Puntori, Përshtatshmëri',
    technical_skills: 'Mirëmbajtje bazë e automjeteve, Shërbim ndaj klientit',
    hobbies: 'Leximi, Udhetimi',
    extra_information: 'Anëtar aktiv i klubit të librit në qytetin tim',
    certification: 'Certifikatë në Shërbim Klienti 2018',
    volunteering: "Vullnetar në organizatën 'Pastrimi i Qytetit', 2019",
    publications: 'N/A',
  },
  {
    experience:
      "Infermiere në Spitalin Qendror 'Nënë Tereza', 2015-2019 Infermiere Menaxhere në Klinikën 'Shëndeti', 2019-2022",
    education:
      'Bachelor në Infermieri, Universiteti i Shëndetësisë 2015 Master në Menaxhim Shëndetësor, Universiteti i Shëndetësisë 2019',
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel C1; Italisht, Nivel B1',
    digital_skills:
      'Përdorues i avancuar i sistemeve të menaxhimit shëndetësor',
    soft_skills: 'Menaxhim i kohës, Lidership, Empati',
    technical_skills: 'Kujdesi ndaj pacientit, Menaxhimi i ekipit',
    hobbies: 'Vrapimi, Gatuajtja',
    extra_information: 'Trajner i kursit të parë ndihmës',
    certification: 'Certifikatë në Menaxhimin e Urgjencave 2020',
    volunteering: 'Vullnetare në kampin e refugjatëve 2021',
    publications:
      "Artikull në 'Revista e Shëndetësisë' mbi Menaxhimin e Stresit në Profesionet e Shëndetësisë, 2022",
  },
  {
    experience:
      "Shofer kamioni në 'Logjistika Hekurudhore', 2016-2018 Shofer autobusi në 'Transporti Publik', 2018-2022",
    education:
      "Diplomë në Mekanikë Automjetesh, Shkolla Profesionale 'Tekniku', 2012-2016",
    native_language: 'Shqip',
    other_language: 'Anglisht, Nivel B1',
    digital_skills: 'Sistemet e navigimit GPS, Përdorimi bazë i kompjuterit',
    soft_skills: 'Përshtatshmëri, Përgjegjësi, Puna nën presion',
    technical_skills:
      'Mirëmbajtje dhe riparim automjetesh, Menaxhimi i itinerarëve',
    hobbies: 'Modelizmi, Peshkimi, Ecja në natyrë',
    extra_information: 'Anëtar i klubit lokal të automobilizmit',
    certification: 'Licencë profesionale si shofer kamioni 2016',
    volunteering: 'Shofer vullnetar për transportin e ndihmave humanitare 2019',
    publications: 'N/A',
  },
  {
    experience:
      'Mjek i Përgjithshëm në Qendrën Shëndetësore Lokale (2022-sot); Asistent Mjeku në Spitalin Rajonal (2019-2022)',
    education:
      'Specializim në Mjekësi të Përgjithshme, Universiteti i Mjekësisë, Tiranë (2015-2019); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në software-in mjekësor për menaxhimin e historive të pacientëve',
    soft_skills: 'Komunikim efektiv, menaxhim i stresit, punë në ekip',
    technical_skills:
      'Diagnostikime të përgjithshme, procedura emergjente, menaxhim i kujdesit të pacientëve',
    hobbies: 'Leximi i librit, jogging, gatimi',
    extra_information:
      'Anëtar i një OJQ për ngritjen e ndërgjegjësimit për shëndetin mendor',
    certification: 'Certifikatë në Menaxhimin e Urgjencave Mjekësore',
    volunteering: 'Vullnetar në kampet shëndetësore për komunitetet në nevojë',
    publications: '',
  },
  {
    experience:
      'Programues në TechInnova (2021-sot); Zhvillues Software në CreativeSolutions (2018-2021)',
    education:
      'Master në Inxhinieri Softuerike, Universiteti Politeknik i Tiranës (2016-2020); Bachelor në Shkencat Kompjuterike, Universiteti i Tiranës (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Zhvillimi në Python, Java, dhe teknologjitë web si HTML, CSS, JavaScript',
    soft_skills: 'Zgjidhje problemesh, punë në grup, adaptueshmëri',
    technical_skills:
      'Zhvillimi i aplikacioneve web dhe mobile, njohuri në bazat e të dhënave dhe sigurinë e informacionit',
    hobbies:
      'Programimi në kohën e lirë, leximi i literaturës teknike, video lojërat',
    extra_information: 'Mentor për të rinjtë në klube programimi lokale',
    certification:
      'Certifikatë në Siguri Kibernetike, Certifikatë në Menaxhimin e Projekteve Agile',
    volunteering: 'Organizim i workshopeve të programimit për fëmijët',
    publications: '',
  },
  {
    experience:
      'Arkitekt Peizazhi në GreenDesign Studio (2020-sot); Asistent i Projektimit në UrbanLandscape Co. (2016-2020)',
    education:
      'Master në Arkitekturë Peizazhi, Universiteti i Arteve (2014-2018); Bachelor në Planifikim Urban dhe Dizajn Peizazhi, Universiteti i Arteve (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në AutoCAD, SketchUp, dhe Adobe Photoshop për dizajnin peizazhor',
    soft_skills: 'Kreativitet, punë në grup, aftësi organizative',
    technical_skills:
      'Dizajnimi dhe implementimi i projekteve peizazhore, njohuri në botanikë dhe ekologji urbane',
    hobbies: 'Hortikultura, fotografia e natyrës, hiking',
    extra_information:
      'Anëtar i shoqërisë së arkitektëve peizazhorë, pjesëmarrës në konferenca ndërkombetare',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Kardiolog në Qendrën Klinike Universitare (2022-sot); Asistent Kardiologji në Spitalin Rajonal (2018-2022)',
    education:
      'Specializim në Kardiologji, Universiteti i Mjekësisë, Tiranë (2014-2018); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Njohuri në softuerët e diagnostikimit kardiologjik',
    soft_skills: 'Komunikim me pacientët, menaxhim i situatave të stresit',
    technical_skills:
      'Diagnostikim dhe trajtim i sëmundjeve kardiovaskulare, EKG, ecokardiografi',
    hobbies: 'Vrapimi, leximi, udhëtimet',
    extra_information: 'Anëtar i Shoqërisë Kardiologjike Shqiptare',
    certification: 'Certifikatë në Menaxhimin e Urgjencave Kardiovaskulare',
    volunteering: 'Konsultime falas për pacientët në nevojë',
    publications:
      'Studime në efektet e hipertensionit në shëndetin kardiovaskular',
  },
  {
    experience:
      'Neurokirurg në Spitalin Universitar Neurologjik (2021-sot); Asistent Kirurgjie në Klinikën e Neurologjisë (2017-2021)',
    education:
      'Specializim në Neurokirurgji, Universiteti i Mjekësisë, Tiranë (2013-2017); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive të avancuara kirurgjikale dhe diagnostikuese',
    soft_skills: 'Aftësi të larta analitike, qëndrueshmëri nën presion',
    technical_skills:
      'Operacione të komplikuara neurologjike, menaxhim i traumave të kokës',
    hobbies: 'Shah, studimi i rasteve neurologjike, udhëtimet shkencore',
    extra_information: 'Profesor në konferenca mjekësore ndërkombëtare',
    certification: 'Certifikatë në Teknikat e Avancuara Neurokirurgjikale',
    volunteering:
      'Trajnime për studentët e mjekësisë në fushën e neurokirurgjisë',
    publications:
      'Publikime në revista mjekësore për inovacionet në trajtimin e tumorëve të trurit',
  },
  {
    experience:
      "Dermatolog në Klinikën Dermatologjike 'Lëkura e Shëndetshme' (2020-sot); Asistent Dermatologji në Qendrën Estetike 'Bukuria' (2016-2020)",
    education:
      'Specializim në Dermatologji, Universiteti i Mjekësisë, Tiranë (2012-2016); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2008-2012)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'Njohuri në softuerët e analizës së imazhit dermatologjik',
    soft_skills: 'Këshillim pacientësh, menaxhim i klinikës',
    technical_skills:
      'Trajtimi i sëmundjeve të lëkurës, procedura estetike, lazer dermatologjik',
    hobbies: 'Studimi i tendencave të re',
    extra_information: 'Profesor në konferenca mjekësore ndërkombëtare',
    certification: 'Certifikatë në Teknikat e Avancuara Neurokirurgjikale',
    volunteering:
      'Trajnime për studentët e mjekësisë në fushën e neurokirurgjisë',
    publications:
      'Publikime në revista mjekësore për inovacionet në trajtimet me te funti',
  },
  {
    experience:
      'Psikiatër në Qendrën e Shëndetit Mendor (2023-sot); Asistent i Psikiatrisë në Spitalin Psikiatrik (2020-2023)',
    education:
      'Specializim në Psikiatri, Universiteti i Mjekësisë, Tiranë (2016-2020); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2012-2016)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Njohuri në sistemet e menaxhimit të dosjeve të pacientëve dhe softuerë analitike',
    soft_skills:
      'Empati, aftësi të mira të dëgjimit dhe komunikimit, qëndrueshmëri emocionale',
    technical_skills:
      'Diagnostikimi dhe trajtimi i çrregullimeve mendore, terapi individuale dhe grupore',
    hobbies: 'Leximi, meditimi, yoga',
    extra_information:
      'Anëtar i shoqatës së psikiatrive, pjesëmarrës në konferenca të shëndetit mendor',
    certification: 'Certifikatë në Terapinë Kognitive Sjellëse',
    volunteering: 'Sesione terapie falas për komunitetet në nevojë',
    publications:
      'Publikime në revista shkencore mbi efektet e stresit në shëndetin mendor',
  },
  {
    experience:
      'Endokrinolog në Klinikën e Endokrinologjisë dhe Metabolizmit (2022-sot); Asistent i Endokrinologjisë në Qendrën Kombëtare të Shëndetit (2019-2022)',
    education:
      'Specializim në Endokrinologji, Universiteti i Mjekësisë, Tiranë (2015-2019); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve për analizën e hormonale dhe metabolike',
    soft_skills:
      'Aftësi analitike, komunikim efektiv me pacientët, punë në ekip',
    technical_skills:
      'Menaxhimi i çrregullimeve hormonale, diabetit, dhe sëmundjeve të tiroides',
    hobbies: 'Vrapimi, gatimi i recetave të shëndetshme, udhëtimet edukative',
    extra_information:
      'Organizator i seminareve për ndërgjegjësimin mbi diabetin dhe menaxhimin e tij',
    certification:
      'Certifikatë në Menaxhimin e Diabetit dhe Sëmundjeve Metabolike',
    volunteering:
      'Këshillim dhe kontroll falas për pacientët me diabet në komunitet',
    publications:
      'Artikuj në revista mjekësore mbi trendet e reja në trajtimin e endokrinologjik',
  },
  {
    experience:
      'Oftalmolog në Qendrën e Shëndetit të Syrit (2021-sot); Asistent Oftalmologji në Spitalin e Syrit (2018-2021)',
    education:
      'Specializim në Oftalmologji, Universiteti i Mjekësisë, Tiranë (2014-2018); Bachelor në Mjekësi, Universiteti i Mjekësisë, Tiranë (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills:
      'Njohuri në softuerët e analizës vizuale dhe diagnostikuese të syrit',
    soft_skills: 'Aftësi të komunikimit me pacientët',
    technical_skills: '',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në vitin e tretë të Mjekësisë, Universiteti i Mjekësisë, Tiranë (2021-sot); Pjesëmarrës aktiv në seminare dhe workshope mjekësore',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në softuerët mjekësorë dhe analizën e të dhënave shëndetësore',
    soft_skills: 'Punë në grup, aftësi të komunikimit, organizim',
    technical_skills:
      'Njohuri themelore në diagnostikimin dhe menaxhimin e sëmundjeve, interesim i veçantë për kardiologjinë dhe neurologjinë',
    hobbies:
      'Leximi i literaturës mjekësore, vullnetarizëm në qendrat shëndetësore, stërvitje',
    extra_information:
      'Anëtar i klubit studentor të mjekësisë, angazhuar në projekte kërkimore në fushën e mjekësisë',
    certification: '',
    volunteering:
      'Vullnetar në fushata të ndërgjegjësimit për shëndetin mendor dhe fizik',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në vitin e dytë të Mjekësisë, Universiteti i Mjekësisë, Tiranë (2022-sot); Fokusi në studime për specializime të ardhshme në endokrinologji',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përdorim i avancuar i bazave të të dhënave mjekësore online',
    soft_skills:
      'Aftësi të mira analitike, përkushtim ndaj mësimit, ndjeshmëri ndaj nevojave të pacientëve',
    technical_skills:
      'Interes të thellë në studimin e hormonave dhe ndikimit të tyre në trup, pjesëmarrje në projekte kërkimore',
    hobbies: 'Vëzhgimi i tendencave të reja në mjekësi, yoga, meditimi',
    extra_information:
      'Iniciator i një grupi studimi për studentët e mjekësisë me interes në endokrinologji',
    certification: '',
    volunteering:
      'Ndihmë në organizimin e konferencave shkencore për studentët e mjekësisë',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në vitin e katërt të Mjekësisë, Fokusi në dermatologji dhe procedura estetike, Universiteti i Mjekësisë, Tiranë (2020-sot)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiano',
    digital_skills: 'Njohuri në softuerët e imazherisë dermatologjike',
    soft_skills: 'Komunikim efektiv, organizim, kujdes për detajet',
    technical_skills:
      'Interesim për inovacionet në trajtimet estetike dhe kujdesin e lëkurës, pjesëmarrës në workshope dhe trajnime specializuese',
    hobbies:
      'Ndjekja e blogjeve dhe kanaleve të specializuara në dermatologji dhe estetikë, pikturimi, udhëtimet',
    extra_information:
      'Vullnetar në klinika dermatologjike për të mësuar nga praktika e përditshme',
    certification: '',
    volunteering:
      'Angazhim në nisma për ndërgjegjësimin rreth kujdesit të lëkurës',
    publications: '',
  },
  {
    experience: '',
    education:
      'Student në Fakultetin e Mjekësisë, Universiteti i Mjekësisë, Tiranë, specializuar në Kardiologji dhe Neurologji (2024-sot). Pjesëmarrës në programe të ndryshme të trajnimit dhe seminare profesionale për zhvillimin e aftësive specifike mjekësore.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përdorim i avancuar i teknologjive informative në mjekësi, duke përfshirë softuerët e diagnostikimit dhe analizës së të dhënave shëndetësore.',
    soft_skills:
      'Komunikim i efektiv me pacientët dhe ekipet mjekësore, aftësi të shkëlqyera organizative dhe adaptuese në mjedise të ndryshme punë.',
    technical_skills:
      'Njohuri bazike dhe të thelluara në procedurat diagnostikuese kardiologjike dhe neurologjike, me një interes të veçantë në përdorimin e teknologjive të reja për përmirësimin e kujdesit ndaj pacientit.',
    hobbies:
      'Hulumtimi i literaturës shkencore mjekësore, vullnetarizëm në klinika dhe spitale, pjesëmarrje në maratona për të ngritur ndërgjegjësimin rreth çështjeve të shëndetit.',
    extra_information:
      'Anëtar aktiv i klubit studentor të mjekësisë, duke kontribuar në organizimin e ngjarjeve dhe aktiviteteve që synojnë përmirësimin e njohurive mjekësore dhe ndërgjegjësimin e komunitetit.',
    certification:
      'Certifikime të ndryshme të përfunduara gjatë studimeve, duke përfshirë trajnime për ndihmën e parë dhe menaxhimin e emergjencave mjekësore.',
    volunteering:
      'Angazhim i vazhdueshëm në projekte vullnetare që ofrojnë kujdes shëndetësor për komunitetet në nevojë, si dhe nisma për edukimin e popullsisë rreth parandalimit të sëmundjeve.',
    publications:
      'Publikime dhe prezantime në konferenca studentore dhe simpoziume shkencore, duke u fokusuar në hulumtimet e fundit në fushën e kardiologjisë dhe neurologjisë.',
  },
  {
    experience: '',
    education:
      'Student në vitin e pestë të Fakultetit të Mjekësisë me fokus në Endokrinologji dhe Diabetologji, duke kërkuar të specializohet më tej në menaxhimin e sëmundjeve metabolike (2023-sot).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i softuerëve mjekësorë për monitorimin dhe menaxhimin e pacientëve me çrregullime endokrine.',
    soft_skills:
      'Aftësi të avancuara në komunikimin shkencor dhe mjekësor, si dhe në ndërtimin e marrëdhënieve të besueshme me pacientët për të ofruar kujdesin më të mirë të mundshëm.',
    technical_skills:
      'Përqendrim të veçantë në teknikat e fundit diagnostikuese dhe terapeutike në fushën e endokrinologjisë, me një interes të veçantë në hulumtimin e diabetit dhe sëmundjeve të tiroides.',
    hobbies:
      'Pjesëmarrje në grupe studimore mjekësore, eksplorimi i metodave të reja',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Dentist at Dental Clinic 'Shëndeti i Dhëmbëve' (2015-2020) Dentist at 'Dental Care' (2010-2015)",
    education:
      'Doktor i Mjekësisë Dentare, Universiteti i Mjekësisë Tiranë (2005-2010) Master në Mjekësi Dentare, Universiteti i Mjekësisë Tiranë (2010-2012)',

    native_language: 'Albanian',
    other_language: 'English',
    digital_skills: 'Microsoft Office, Dental Software',
    soft_skills: 'Communication, Empathy, Teamwork',
    technical_skills: 'Restorative Dentistry, Endodontics, Prosthodontics',
    hobbies: 'Reading, Hiking, Cooking',
    extra_information: 'Member of Albanian Dental Association',
    certification: 'Certified in Advanced Endodontics',
    volunteering: 'Provided dental care in rural areas',
    publications: 'Co-authored research paper on Dental Implants',
  },
  {
    experience:
      'Farmacist në Spitali Universitar Farmacist në Farmaci Private ',
    education:
      'Doktor i Farmacisë, Universiteti i Tiranës Master në Farmaci Klinike, Universiteti i Tiranës ',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Office, Sisteme të Informacionit të Farmacisë',
    soft_skills: 'Komunikim efektiv, Menaxhim i Kohës',
    technical_skills: 'Përdorimi i pajisjeve farmaceutike',
    hobbies: 'Leximi, Gjithçka lidhur me shëndetin dhe farmacinë',
    extra_information: 'Përvojë në këshillimin farmaceutik',
    certification: 'Certifikim në Administrim të Vaksinave',
    volunteering: 'Ndihmë në fushatën e vaksinimit kundër gripit',
    publications: 'Artikuj shkencorë në fushën e farmacisë',
  },
  {
    experience:
      'Infermiere në spitalin e qytetit për 5 vjet Infermiere në klinikën private për 3 vjet ',
    education:
      'Bachelor në Infermieri, Universiteti i Mjekësisë, Tiranë Certifikim për Trajnim në Kujdesin Intensiv, Instituti i Shëndetit, Tiranë ',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Office, EHR software',
    soft_skills: 'Komunikimi i shkëlqyeshëm, menaxhimi i kohës',
    technical_skills:
      'Vendosja e kanilave intravenoze, monitorimi i parametrave të shëndetit',
    hobbies:
      'Gjithmonë gati për të ndihmuar të tjerët, leximi i librave mjekësorë',
    extra_information: 'Kujdesi ndaj pacientëve është prioriteti im i parë',
    certification: 'Certifikatë për Trajnim në Kujdesin e Emergjencave',
    volunteering: 'Pjesëmarrje në fushata të shëndetit publik',
    publications: 'Artikuj shkencorë në revista mjekësore',
  },
  {
    experience: 'Puna si mesuese gjuhe angleze ne shkolle te mesme',
    education: 'Bachelor ne gjuhe angleze dhe letersi',
    native_language: 'Gjuha amtare: shqip',
    other_language: 'Gjuhe te tjera: italisht, spanjisht',
    digital_skills: 'Microsoft Office, Google Suite',
    soft_skills: 'Komunikimi efektiv, menaxhimi i kohës',
    technical_skills: 'Pergatitja e materialeve mesimore',
    hobbies: 'Leximi, udhetimet, gatimi',
    extra_information: 'Pasionuar per arsimin dhe zhvillimin e nxenesve',
    certification: 'Certifikate ne gjuhe angleze, metodologji të mesimit',
    volunteering: 'Ndihme ne organizata te arsimimit të fëmijeve',
    publications: 'Artikuj ne revista arsimore',
  },
  {
    experience: 'Puna e mëparshme si asistent marketingu në kompaninë ABC',
    education: 'Bachelor në Marketing dhe Komunikim në Universitetin e Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorimi i softuerëve për analizë të tregut dhe marketingut',
    soft_skills: 'Komunikimi efektiv, menaxhimi i kohës, bashkëpunimi në ekip',
    technical_skills:
      'Përdorimi i platformave online për marketing dhe analizë tregu',
    hobbies: 'Leximi, udhëtimi, gatimi',
    extra_information: 'Gatuan për aktivitetet e bamirësisë',
    certification: 'Certifikim në Google Analytics',
    volunteering:
      'Ndihmë në organizata të bamirësisë për promovimin dhe marketingun',
    publications: 'Artikuj në revista të fushës së marketingut',
  },
  {
    experience: 'Puna si mekanik në një gara të makinave për 3 vjet',
    education:
      'Diplomë në Inxhinieri Mekanike nga Universiteti Politeknik i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorimi i softuerëve për dizajn mekanik',
    soft_skills: 'Komunikimi efektiv me klientët, menaxhimi i kohës',
    technical_skills: 'Përdorimi i pajisjeve të specializuara për riparime',
    hobbies: 'Automjetet, gara e makinave, përmirësimi i aftësive teknike',
    extra_information: 'Gatim i shkëlqyeshëm, aftësi organizimi',
    certification: 'Certifikatë për përdorim të pajisjeve të sigurisë në punë',
    volunteering: 'Ndihma në riparimin e makinave për organizatat bamirëse',
    publications:
      'Artikuj në revista teknike për inovacionet në fushën e automjeteve',
  },
  {
    experience:
      'Përvojë pune si menaxher dyqani për 5 vjet në industrinë e tregtisë',
    education: 'Bachelor në Menaxhim Biznesi, Universiteti i Tiranës',
    native_language: 'Gjuha amtare: Shqip',
    other_language: 'Gjuhë të tjera: Anglisht, Italisht',
    digital_skills:
      'Aftësi në përdorimin e softuerëve të menaxhimit të stokut dhe shitjes',
    soft_skills: 'Komunikim efektiv, menaxhim i kohës, ekip pune',
    technical_skills:
      'Aftësi në menaxhimin e sistemeve të pagesave dhe inventarit',
    hobbies: 'Gjithmonë i interesuar për leximin, gatimin dhe udhëtimet',
    extra_information:
      'Pasionuar për të ndihmuar komunitetin dhe të kontribuojë në projekte të dobishme',
    certification: 'Certifikim në menaxhimin e stokut dhe shitjes',
    volunteering: 'Përvojë vullnetare në organizata të bamirësisë',
    publications:
      'Artikuj të shkruar në fusha të lidhura me menaxhimin dhe tregtinë',
  },
  {
    experience: 'Puna si kontabilist në një kompani ndërkombëtare për 5 vjet',
    education: 'Bachelor në Ekonomi, Universiteti i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Excel, SAP',
    soft_skills: 'Komunikimi efektiv, menaxhimi i kohës',
    technical_skills: 'Analiza financiare, raportim fiskal',
    hobbies: 'Leximi, gatimi',
    extra_information:
      'Përfundova kursin e menaxhimit të financave në vitin 2018',
    certification: 'Certifikim në SAP',
    volunteering:
      'Përfshirje në organizata jo-qeveritare për ndihmë në bujqësi',
    publications: 'Artikuj në revista ekonomike lokale',
  },
  {
    experience: 'Puna si kontabilist në një firmë e vogël për 3 vjet',
    education: 'Diplomë në Kontabilitet, Instituti Profesional i Tiranës',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Microsoft Office, QuickBooks',
    soft_skills: 'Organizimi, bashkëpunimi në grup',
    technical_skills: 'Përgatitje e deklarimeve tatimore, analiza e kostos',
    hobbies: 'Futboll, udhëtimi',
    extra_information:
      'Përfundova kursin e kontabilitetit të avancuar në vitin 2019',
    certification: 'Certifikim në QuickBooks',
    volunteering: 'Ndihmë në organizata të mbrojtjes së mjedisit',
    publications: 'Artikuj në revista ekonomike lokale',
  },
  {
    experience: 'Puna si inxhinier softueri për kompaninë ABC',
    education: 'Bachelor në Inxhinieri Kompjuterike, Universiteti i Tiranes',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Programim në Java, C++, Python',
    soft_skills: 'Komunikim efektiv, menaxhimi i kohës',
    technical_skills: 'Zhvillim web, bazat e të dhënave',
    hobbies: 'Gjithmonë gati për të lexuar një libër të ri',
    extra_information: 'Gatim i shkëlqyeshëm',
    certification: 'Certifikatë në Programim Java',
    volunteering: 'Ndihmë në kujdesin e fëmijëve të varfër',
    publications: 'Artikuj në revista të specializuara në teknologji',
  },
  {
    experience: 'Puna si menaxher i projektit në kompaninë XYZ',
    education: 'Master në Menaxhim Biznesi, Universiteti Europian i Tiranës',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Përdorim i softuerëve të menaxhimit të projekteve',
    soft_skills: 'Ekip pune, menaxhimi i konflikteve',
    technical_skills: 'Analizë financiare, strategji biznesi',
    hobbies: 'Gjithmonë gati për të eksploruar vende të reja',
    extra_information: 'Pasion për gjuhën dhe kulturën italiane',
    certification: 'Certifikatë në Menaxhim Projekti',
    volunteering: 'Ndihmë në organizata të mbrojtjes së mjedisit',
    publications: 'Artikuj në revista të specializuara në menaxhim biznesi',
  },
  {
    experience:
      'Puna si inxhinier softueri për 5 vjet në një kompani të teknologjisë',
    education: 'Bachelor në Inxhinieri Kompjuterike në Universitetin e Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorimi i softuerëve të zhvillimit, dizajnit grafik dhe analizës së të dhënave',
    soft_skills:
      'Komunikimi efektiv, menaxhimi i kohës, dhe bashkëpunimi në ekip',
    technical_skills:
      'Programimi në Java, C++, dhe njohuri të sistemeve të bazës së të dhënave',
    hobbies: 'Gjithmonë i apasionuar për muzikën, sportin dhe leximin',
    extra_information:
      'Gatshëm për të mësuar gjëra të reja dhe për të punuar në një ambient të sfidueshëm',
    certification:
      'Certifikim në sigurinë e informacionit dhe zhvillimin e aplikacioneve të sigurisë',
    volunteering:
      'Përvojë në punë vullnetare në organizata të rinjve dhe aktivitete të ndryshme komunitare',
    publications:
      'Disa artikuj teknikë në fushën e inteligjencës artificiale dhe zhvillimit të aplikacioneve',
  },
  {
    experience:
      'Puna si menaxher projekti në sektorin e marketingut për 8 vjet në një agjenci kreative',
    education: 'Master në Menaxhim Biznesi në Universitetin e Prishtinës',
    native_language: 'Shqip',
    other_language: 'Gjermanisht',
    digital_skills:
      'Përdorimi i platformave të mediave sociale, analiza e tregut dhe strategjitë e marketingut online',
    soft_skills:
      'Negociimi i suksesshëm, menaxhimi i konflikteve, dhe udhëheqja e ekipit',
    technical_skills:
      'Përdorimi i softuerëve të menaxhimit të projekteve dhe analizës së të dhënave',
    hobbies: 'Pasioni për kuzhinën, udhëtimet dhe fotografia',
    extra_information:
      'Kreativ dhe i përkushtuar për të arritur objektivat e biznesit',
    certification:
      'Certifikim në marketing digjital dhe menaxhimin e projekteve',
    volunteering:
      'Përvojë në organizata të mbrojtjes së mjedisit dhe aktivitete të përmirësimit të komunitetit',
    publications:
      'Artikuj dhe postime në blog rreth strategjive të marketingut dhe menaxhimit të projekteve',
  },
  {
    experience:
      'Aktualisht duke përfunduar një internship në auditim në një nga firmat më të mëdha të kontabilitetit në Tiranë, me qëllim të specializimit në auditimin financiar dhe konsulencë për korporata.',
    education:
      'Student në Masterin e Shkencave në Kontabilitet dhe Financë në Universitetin Ekonomik të Tiranës, me fokus të veçantë në auditim dhe analizë financiare (2022-sot).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përdorim i avancuar i softuerëve kontabël si QuickBooks dhe SAP, si dhe njohuri në përdorimin e Excel-it për analizë financiare dhe modelim.',
    soft_skills:
      'Aftësi të shkëlqyera analitike dhe në zgjidhjen e problemeve, aftësi të komunikimit dhe prezantimit, punë në ekip.',
    technical_skills:
      'Njohuri të thella në standarde ndërkombëtare të kontabilitetit (IFRS), auditim financiar, dhe menaxhimin e rrezikut financiar.',
    hobbies:
      'Ndjekja e kursitve online për zhvillime të reja në fushën e financës dhe kontabilitetit, leximi i literaturës së specializuar financiare.',
    extra_information:
      'Pjesëmarrës aktiv në konferenca dhe workshope të kontabilitetit dhe financës, me qëllim të rrjetëzimit profesional dhe ndarjes së njohurive.',
    certification:
      'Duke punuar për të marrë certifikatat CPA (Certified Public Accountant) dhe CFA (Chartered Financial Analyst).',
    volunteering:
      'Konsulencë financiare falas për OJQ dhe startup-e të reja, për të ndihmuar në menaxhimin e tyre financiar.',
    publications: '',
  },
  {
    experience:
      'Intern në departamentin e kontrollit të brendshëm të një banke të madhe në Tiranë, me synim të specializimit në kontrollin financiar dhe parandalimin e mashtrimit.',
    education:
      'Student në vitin e fundit të studimeve për Bachelor në Kontabilitet në Universitetin Ekonomik të Tiranës, me përqendrim në kontrollin e brendshëm dhe menaxhimin e rrezikut (2021-sot).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i softuerëve të auditimit dhe kontrollit financiar, si dhe njohuri të avancuara në analizën e të dhënave përmes softuerëve statistikorë.',
    soft_skills:
      'Komunikim efektiv, aftësi për të punuar nën presion, dhe aftësi për të identifikuar dhe menaxhuar rrezikun financiar.',
    technical_skills:
      'Njohuri në legjislacionin financiar dhe rregullator, teknika të auditimit të brendshëm, dhe parandalimin e mashtrimit.',
    hobbies:
      'Analiza e rasteve studimore në kontrollin financiar, vullnetarizëm në inicativa për edukimin financiar të të rinjve.',
    extra_information:
      'Angazhimi në projekte të ndryshme kërkimore me fokus në zbulimin dhe parandalimin e mashtrimeve financiare.',
    certification:
      'Në procesin e përgatitjes për të marrë certifikimin e CIA (Certified Internal Auditor).',
    volunteering:
      'Ndihmë në organizimin e seminareve për ndërgjegjësimin rreth parandalimit të mashtrimeve dhe menaxhimit të rrezikut në sektorin financiar.',
    publications: '',
  },
  {
    experience: 'Puna si praktikant ne nje kompani IT per 6 muaj',
    education: 'Bachelor ne Inxhinieri Kompjuterike',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Programim ne Python, HTML, CSS, JavaScript',
    soft_skills: 'Komunikim efektiv, menaxhim i kohes',
    technical_skills: 'Administrim sistemi, siguria e informacionit',
    hobbies: 'Futboll, leximi, gatimi',
    extra_information: 'Gatuan per nje event bamiresie',
    certification: 'Certifikate ne Programim ne Python',
    volunteering: 'Ndihme ne nje organizate bamiresie',
    publications: 'Artikull ne revisten e universitetit',
  },
  {
    experience: 'Puna si praktikant ne nje kompani marketing per 3 muaj',
    education: 'Master ne Marketing dhe Menaxhim Biznesi',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Marketing online, analize e tregut',
    soft_skills: 'Ekip pune, menaxhim projektesh',
    technical_skills: 'Google Analytics, SEO',
    hobbies: 'Fotografia, udhetimet, muzika',
    extra_information: 'Organizoi nje event fundraising',
    certification: 'Certifikate ne Marketing Online',
    volunteering: 'Ndihme ne nje organizate mjedisore',
    publications: 'Artikull ne blogun personal',
  },
  {
    experience: 'Puna si praktikant ne nje kompani teknologjike per 6 muaj',
    education: 'Bachelor ne Inxhinieri Kompjuterike',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Programim ne Python, C++, HTML, CSS',
    soft_skills: 'Komunikim efektiv, menaxhim i kohes',
    technical_skills: 'Zhvillim web, programim ne C++',
    hobbies: 'Leximi, gatimi, sportet e natyres',
    extra_information: 'Kam pasion per teknologjine dhe inovacionin',
    certification: 'Certifikate ne Programim ne Python',
    volunteering: 'Ndihma ne organizata te mjedisit',
    publications: 'Artikuj ne revista te fushave teknologjike',
  },
  {
    experience: 'Stazh ne nje agjenci marketingu per 3 muaj',
    education: 'Bachelor ne Biznes dhe Menaxhment',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Marketing online, menaxhim i rrjeteve sociale',
    soft_skills: 'Ekip pune, menaxhim projektesh',
    technical_skills: 'Analize e tregut, strategji marketingu',
    hobbies: 'Fotografia, udhetimet, muzika',
    extra_information: 'Kam pasion per marketingun dhe strategjine e biznesit',
    certification: 'Certifikate ne Marketing Online',
    volunteering: 'Ndihma ne aktivitete te komunitetit',
    publications: 'Artikuj ne revista te marketingut dhe biznesit',
  },
  {
    experience: 'Puna si praktikant në një kompani të teknologjisë për 6 muaj',
    education: 'Bachelor në Inxhinieri Informatike',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorimi i softuerëve të zhvillimit të ueb faqeve',
    soft_skills: 'Komunikimi efektiv, menaxhimi i kohës',
    technical_skills: 'Programimi në Java, C++',
    hobbies: 'Leximi, gatimi, ecja në natyrë',
    extra_information: 'Gatuan për një event të madh në universitet',
    certification: 'Certifikatë në programim në Python',
    volunteering: 'Ndihmë në organizimin e një fushate bamirësie',
    publications: 'Artikull në revistën e shkencës kompjuterike',
  },
  {
    experience: 'Puna si praktikant në një agjenci marketingu për 3 muaj',
    education: 'Bachelor në Biznes dhe Menaxhment',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Përdorimi i platformave të mediave sociale',
    soft_skills: 'Negociimi, menaxhimi i projekteve',
    technical_skills: 'Analiza financiare, marketing',
    hobbies: 'Fotografia, udhëtimi, gjuhët',
    extra_information: 'Krijoi një blog për udhëtimet dhe aventurat',
    certification: 'Certifikatë në marketing digjital',
    volunteering: 'Ndihmë në organizimin e një aktiviteti bamirës',
    publications: 'Artikull në një blog të njohur për udhëtime',
  },
  {
    experience:
      'Intern në një firmë kontabiliteti të njohur ndërkombëtarisht, duke punuar në projekte të auditimit dhe konsulence financiare për korporata të mëdha (2023-sot).',
    education:
      'Student në Masterin e Shkencave në Kontabilitet në Universitetin Ekonomik të Tiranës, me specializim në auditim dhe kontabilitet financiar (2022-sot). Përfshirje në projekte kërkimore që adresojnë sfidat e kontabilitetit në ekonominë dixhitale.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Ekspert në përdorimin e softuerëve kontabël si SAP dhe Oracle, si dhe zotërim i avancuar i Excel për analizë financiare dhe modelim.',
    soft_skills:
      'Lidership, aftësi të shkëlqyera analitike, komunikim dhe prezantim efektiv, aftësi të fortë në zgjidhjen e konflikteve.',
    technical_skills:
      'Njohuri të thella në standarde ndërkombëtare të raportimit financiar (IFRS), analizë financiare, planifikim financiar dhe strategji, dhe auditim i brendshëm.',
    hobbies:
      'Hulumtimi i trendeve të reja në financë dhe kontabilitet, ndjekja e kursitve për zhvillime të reja teknologjike në fushën financiare.',
    extra_information:
      'Pjesëmarrës aktiv në forume dhe konferenca profesionale të kontabilitetit dhe financës, duke ndarë gjetje dhe duke rrjetëzuar me profesionistë të tjerë në fushë.',
    certification:
      'Duke ndjekur certifikimet profesionale CPA (Certified Public Accountant) dhe CFA (Chartered Financial Analyst) për të zgjeruar njohuritë dhe aftësitë profesionale.',
    volunteering:
      'Vullnetar në iniciativa që promovojnë transparencën financiare dhe arsimimin financiar në komunitetet e margjinalizuara.',
    publications:
      'Kontributor në publikime të ndryshme profesionale dhe akademike që trajtojnë çështje të kontabilitetit dhe etikës financiare.',
  },
  {
    experience:
      'Analist Financiar në një korporatë multikombëtare, duke u marrë me planifikimin financiar, analizën e investimeve dhe vlerësimin e rrezikut (2024-sot).',
    education:
      'Student në programin e PhD në Financa në Universitetin Ekonomik të Tiranës, duke kryer kërkime në fushën e financave korporative dhe qëndrueshmërisë financiare (2023-sot).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i softuerëve për analizën financiare dhe vlerësimin e projekteve si Stata dhe R, si dhe njohuri të avancuara në programimin për financat.',
    soft_skills:
      'Aftësi të avancuara në analizën kritike, vendimmarrje bazuar në të dhëna, dhe menaxhimin efektiv të projekteve.',
    technical_skills:
      'Ekspert në modelimin financiar, vlerësimin e kompanive, dhe strategjitë e menaxhimit të rrezikut financiar, me një interes të veçantë në financat e gjelbra dhe investimet qëndrueshme.',
    hobbies:
      'Ndjekja e seminarëve dhe workshopeve mbi inovacionet në fushën e financave, leximi i studimeve të rasteve të ndryshme korporative.',
    extra_information:
      'Anëtar i një rrjeti profesionist të analistëve financiarë, duke shkëmbyer njohuri dhe përvoja për trendet më të fund',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience: 'Puna si praktikant në një agjenci marketingu për 3 muaj',
    education: 'Bachelor në Biznes dhe Menaxhment',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Përdorimi i platformave të mediave sociale',
    soft_skills: 'Negociimi, menaxhimi i projekteve',
    technical_skills: 'Analiza financiare, marketing',
    hobbies: 'Fotografia, udhëtimi, gjuhët',
    extra_information: 'Krijoi një blog për udhëtimet dhe aventurat',
    certification: 'Certifikatë në marketing digjital',
    volunteering: 'Ndihmë në organizimin e një aktiviteti bamirës',
    publications: 'Artikull në një blog të njohur për udhëtime',
  },
  {
    experience: 'Puna si praktikant në një kompani të teknologjisë informative',
    education: 'Bachelor në Inxhinieri Kompjuterike',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Programim, zhvillim web, analizë e të dhënave',
    soft_skills: 'Komunikim efektiv, menaxhim i kohës, bashkëpunim në grup',
    technical_skills: 'C++, Java, HTML, CSS, JavaScript',
    hobbies: 'Futboll, lexim, gatimi',
    extra_information: 'Gatuan për një organizatë bamirësie për 2 vjet',
    certification: 'Certifikatë në Programim Java',
    volunteering: 'Ndihmë në organizata të bamirësisë',
    publications: 'Artikuj në revista të fushës së teknologjisë informative',
  },
  {
    experience: 'Stazh në një kompani të inxhinierisë ndërtimore',
    education: 'Master në Inxhinieri Civile',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'AutoCAD, SAP2000, MS Project',
    soft_skills: 'Menaxhim i projekteve, komunikim efektiv, zgjidhje kreative',
    technical_skills:
      'Projektim ndërtimi, analizë strukturash, menaxhim i kontratave',
    hobbies: 'Fotografi, udhëtime, muzikë',
    extra_information:
      'Pjesëmarrje në projekte ndërtimore në fshatra të varfër',
    certification: 'Certifikatë në AutoCAD',
    volunteering: 'Ndihmë në ndërtimin e një shkollë në një zonë të varfër',
    publications: 'Artikuj në revista të fushës së inxhinierisë civile',
  },
  {
    experience: 'Punë në një kompani kontabiliteti për 2 vite',
    education: 'Bachelor në Kontabilitet dhe Financa',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Excel, Microsoft Word',
    soft_skills: 'Komunikimi efektiv, menaxhimi i kohës',
    technical_skills: 'Përdorimi i sistemeve kontabiliteti',
    hobbies: 'Leximi, gatimi',
    extra_information: 'Kam një certifikatë në menaxhim financiar',
    certification: 'Certifikatë në Kontabilitet dhe Auditim',
    volunteering: 'Përkrahje në organizata jofitimprurëse',
    publications: 'Nuk kam publikime',
  },
  {
    experience: 'Praktikë në një firmë kontabiliteti për 1 vit',
    education: 'Diplomë në Kontabilitet dhe Financa',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Përdorimi i softuerëve kontabiliteti',
    soft_skills: 'Ekip pune, zgjidhje probleme',
    technical_skills: 'Përdorimi i sistemeve kontabiliteti',
    hobbies: 'Ushqimi i shëndetshëm, udhëtimi',
    extra_information: 'Kam marrë pjesë në seminare për tregtinë e jashtme',
    certification: 'Certifikatë në Kontabilitet dhe Financa',
    volunteering: 'Ndihmë në organizata bamirëse',
    publications: 'Nuk kam publikime',
  },
  {
    experience: 'Puna si teknik mekanik në një gara automobilistike',
    education: 'Diplomë në Inxhinieri Mekanike',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Përdorimi i softuerëve të inxhinierisë mekanike',
    soft_skills: 'Ekipi, komunikimi efektiv, zgjidhja e problemeve',
    technical_skills: 'Përdorimi i makinave dhe pajisjeve mekanike',
    hobbies: 'Automobilizmi, ndërtimi i modeleve të vogla të makinave',
    extra_information:
      'Kam pasur përvojë në ndërtimin e një automjeti të vogël',
    certification: 'Certifikatë për përdorimin e pajisjeve mekanike',
    volunteering: 'Ndihma në organizimin e eventeve automobilistike',
    publications: 'Artikuj në revista teknike për inxhinierinë mekanike',
  },
  {
    experience: 'Puna si praktikant në një stacion servisi automobilistik',
    education: 'Studime në fushën e Inxhinierisë Mekanike',
    native_language: 'Shqip',
    other_language: 'Gjermanisht',
    digital_skills: 'Përdorimi i softuerëve të inxhinierisë mekanike',
    soft_skills: 'Organizimi, bashkëpunimi në grup, zgjidhja e problemeve',
    technical_skills: 'Përdorimi i pajisjeve dhe makinave mekanike',
    hobbies: 'Automobilizmi, ndërtimi i modeleve të makinave',
    extra_information: 'Kam pasur përvojë në riparimin e makinave të vjetra',
    certification: 'Certifikatë për njohuritë e inxhinierisë mekanike',
    volunteering: 'Ndihma në organizimin e eventeve për automobilizmin',
    publications:
      'Artikuj në revista për inxhinierinë mekanike dhe automobilizmin',
  },
  {
    experience:
      'Scrum Master për një ekip zhvillimi softueri në një ndërmarrje teknologjike inovative, duke udhëhequr projekte të ndryshme agjile dhe përmirësuar vazhdimisht proceset e zhvillimit të softuerit (2023-sot).',
    education:
      'Master në Menaxhimin e Projekteve Informatike në Universitetin e Teknologjisë së Informacionit, Tiranë, me specializim në metodologjitë Agjile dhe Scrum (2022-sot).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Zotërim i metodologjive agjile, përdorim i avancuar i Trello, Jira dhe softuerëve të tjerë për menaxhimin e projekteve.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera komunikuese dhe organizative, adaptueshmëri dhe zgjidhje efikase e problemeve.',
    technical_skills:
      'Njohuri të thella në Scrum, Kanban dhe metodologji të tjera agjile, si dhe përvojë në koordinimin e sprinteve dhe ceremonive agjile.',
    hobbies:
      'Ndjekja e trendeve dhe inovacioneve në menaxhimin agjil të projekteve, pjesëmarrje në workshope dhe konferenca për zhvillimin profesional.',
    extra_information:
      'Certifikuar si Professional Scrum Master (PSM) nga Scrum.org, angazhuar në mentorimin e Scrum Masters të rinj.',
    certification:
      'Professional Scrum Master I (PSM I), Certified Scrum Professional (CSP).',
    volunteering:
      'Organizim i sesioneve falas të trajnimit në Scrum dhe Agjile për studentët dhe profesionistët e rinj në fushën e TI.',
    publications:
      'Autor i artikujve në blogje të specializuara në menaxhimin agjil të projekteve, duke ndarë praktika më të mira dhe leksione të mësuara.',
  },
  {
    experience:
      'Scrum Master në një start-up teknologjik, duke kontribuar në transformimin digjital dhe implementimin e praktikave agjile për të maksimizuar vlerën e prodhimit të softuerit (2024-sot).',
    education:
      'Bachelor në Inxhinieri Softuerike në Universitetin Politeknik i Tiranës, me kursime të veçanta në menaxhimin agjil të projekteve dhe Scrum (2020-2024).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim efikas i mjeteve dhe teknikave për menaxhimin agjil të projekteve, duke përfshirë Scrum, Lean dhe XP.',
    soft_skills:
      'Forte në ndërtimin e ekipeve të unifikuara dhe të motivuara, komunikim efektiv ndërmjet stakeholderëve dhe ekipit të zhvillimit.',
    technical_skills:
      'Ekspertizë në planifikimin e sprinteve, menaxhimin e backlogut të produktit dhe zbatimin e retrospektivave për përmirësim të vazhdueshëm.',
    hobbies:
      'Pjesëmarrje aktive në komunitetin agjil lokal dhe ndërkombëtar, leximi i librit dhe blogjeve në zhvillimin profesional dhe metodologjitë agjile.',
    extra_information:
      'Ndihmës në organizimin e ngjarjeve agjile si hackathons dhe unconferences, për të ndarë njohuri dhe të mësuar nga të tjerët.',
    certification:
      'Certifikata Advanced Certified ScrumMaster (A-CSM) dhe Professional Scrum Product Owner (PSPO).',
    volunteering:
      'Mentorim vullnetar për ekipet në inkubatorët e biznesit dhe universitete',
    publications: '',
  },
  {
    experience: 'Kontabilist Janar 2015-Tani',

    education:
      'Bachelor në Ekonomi Shtator 2010 -Qershor 2014 Universiteti i Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Excel, SAP',
    soft_skills: 'Kommunikimi efektiv, menaxhimi i kohës',
    technical_skills: 'Analiza financiare, raportim financiar',
    hobbies: 'Leximi, gatimi',
    extra_information: 'Përgjegjës, i përkushtuar në punë',
    certification: 'Certifikim në Kontabilitet',
    volunteering: 'Ndihmë në organizata bamirëse',
    publications: 'Artikuj në fushën e kontabilitetit',
  },
  {
    experience: 'Mekanik Automobilash Shtator 2015-Tani',
    education: 'Teknik Mekanik Shtator 2010Qershor 2014 Instituti Teknik',

    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Microsoft Office, AutoCAD',
    soft_skills: 'Ekip pune, Komunikim efektiv',
    technical_skills: 'Mekanik Automobilash, Elektrike Automobilash',
    hobbies: 'Rregullimi i makines, Gjelberimi',
    extra_information: 'Kam pasion per teknologjine e re ne automobilat',
    certification: 'Certifikim ne Mekanik Automobilash',
    volunteering: 'Ndihma ne riparimin e automobilave te komunitetit',
    publications: 'Nuk kam publikime',
  },
  {
    experience:
      'Përkthyes profesionist në sektorin ligjor dhe financiar për korporata ndërkombëtare, duke ofruar përkthime të saktë dhe të specializuara që nga viti 2023.',
    education:
      'Master në Përkthim dhe Interpretim, Universiteti i Gjuhëve të Huaja, Tiranë, me fokus në përkthimin ligjor dhe financiar (2021-2023).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Zotërim i softuerëve të përkthimit si SDL Trados dhe MemoQ, si dhe aftësi të avancuara në përdorimin e bazave të të dhënave terminologjike.',
    soft_skills:
      'Vëmendje e lartë ndaj detajeve, aftësi të shkëlqyera organizative dhe të menaxhimit të kohës, komunikim efikas me klientët.',
    technical_skills:
      'Njohuri të thella në terminologjinë ligjore dhe financiare, përvojë në përkthimin e dokumenteve komplekse dhe konfidenciale.',
    hobbies:
      'Leximi i literaturës në fushat e specializimit, pjesëmarrja në konferenca të përkthimit për të qëndruar të azhurnuar me trendet më të fundit.',
    extra_information:
      'Anëtar i Shoqatës së Përkthyesve Profesionistë, me një rrjet të gjerë bashkëpunimi ndërkombëtar.',
    certification:
      'Certifikuar si Përkthyes Profesionist nga SDL Trados, me specializim në përkthimin ligjor dhe financiar.',
    volunteering:
      'Përkthyes vullnetar për projekte bamirësie dhe iniciativa sociale, duke përdorur aftësitë e përkthimit për të ndihmuar ato që kanë më së shumti nevojë.',
    publications: '',
  },
  {
    experience:
      'Interpretues simultan dhe përkthyes me përvojë në konferenca ndërkombëtare, seminare dhe takime të nivelit të lartë, duke u specializuar veçanërisht në fushat teknike dhe mjekësore që nga viti 2024.',
    education:
      'Bachelor në Gjuhë dhe Letërsi të Huaja me specializim në Interpretim, Universiteti i Gjuhëve të Huaja, Tiranë (2020-2024).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht, Frëngjisht',
    digital_skills:
      'Përdorim i platformave të interpretimit online si Zoom dhe Microsoft Teams për konferenca virtuale dhe takime ndërkombëtare.',
    soft_skills:
      'Aftësi të shkëlqyera në dëgjim dhe analizë të shpejtë, fleksibilitet në situata të ndryshme komunikimi, qëndrueshmëri nën presion.',
    technical_skills:
      'Ekspertizë në terminologjinë teknike dhe mjekësore, përvojë në interpretimin simultan dhe konsekutiv në evente të ndryshme ndërkombëtare.',
    hobbies:
      'Ndjekja e kurseve për të mësuar gjuhë të reja dhe përmirësimi i aftësive të interpretimit, udhëtimet kulturore për të thelluar njohuritë mbi gjuhët që flet.',
    extra_information:
      'Pjesëmarrës aktiv në rrjete profesionale të interpretuesve, duke ndarë njohuri dhe përvoja me kolegë nga e gjithë bota.',
    certification:
      'Certifikime të ndryshme në interpretim simultan dhe konsekutiv, me njohuri të veçanta',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Punë e mëparshme si kamarier në restorantë të njohur në qytetin tim',
    education:
      'Diplomë në Menaxhim Hotelier dhe Turizëm nga Universiteti i Tiranës',
    native_language: 'Gjuha amtare: Shqip',
    other_language: 'Gjuhë të tjera: Anglisht, Italisht',
    digital_skills:
      'Aftësi në përdorimin e sistemeve të menaxhimit të restorantit dhe pagesave elektronike',
    soft_skills:
      'Komunikim efektiv me klientët, menaxhim i kohës, dhe punë në ekip',
    technical_skills:
      'Përgatitje e kafeve të specialitetit, shërbesa e ushqimit dhe pijeve me profesionalizëm',
    hobbies:
      'Gatimi i ushqimeve të reja, eksplorimi i kulturës së kuzhinës së ndryshme',
    extra_information:
      'Gatimtari i njohur në familje, me pasion për shërbesën dhe kujdesin ndaj detajeve',
    certification:
      'Certifikatë për shërbesë profesionale nga Shoqata e Kamarierëve të Shqipërisë',
    volunteering:
      'Pjesëmarrje në aktivitete bamirësie për ndihmë të fëmijëve të varfër',
    publications:
      'Artikuj në revista të specializuara për industrinë e shërbimit të ushqimit dhe pijeve',
  },
  {
    experience:
      '5 vjet eksperiencë si Agjent i Shpërndarjes së Mallrave të Porositura',
    education: 'Bachelor në Ekonomi dhe Biznes',
    native_language: 'Gjuha amtare: Shqip',
    other_language: 'Gjuhë të tjera: Anglisht, Italisht',
    digital_skills:
      'Përdorimi i specializimeve të sistemeve të porosive online',
    soft_skills: 'Komunikim efektiv, menaxhimi i kohës, zgjidhje e problemeve',
    technical_skills:
      'Përdorimi i sistemeve të skanimit të inventarit dhe teknologjisë së rrjetit',
    hobbies: 'Leximi, gatimi, udhëtimi',
    extra_information: 'Gatimtari i mirëpritur në ngjarjet e korporatave',
    certification: 'Certifikim në menaxhimin e inventarit dhe logjistikës',
    volunteering: 'Ndihma në organizatat e bamirësisë',
    publications: 'Artikuj në revista ekonomike dhe biznesi',
  },
  {
    experience:
      '3 vjet eksperiencë si Agjent i Shpërndarjes së Mallrave të Porositura',
    education: 'Master në Menaxhim Biznesi',
    native_language: 'Gjuha amtare: Shqip',
    other_language: 'Gjuhë të tjera: Gjermanisht, Spanjisht',
    digital_skills:
      'Përdorimi i sistemeve të menaxhimit të inventarit në rrjet',
    soft_skills:
      'Negociata efektive, menaxhimi i projekteve, bashkëpunim në ekip',
    technical_skills:
      'Përdorimi i teknologjisë së skanimit të inventarit dhe sistemeve të porosive online',
    hobbies: 'Futboll, muzika, kamping',
    extra_information: 'Pjesëmarrës aktiv në aktivitetet e korporatave',
    certification: 'Certifikim në menaxhimin e inventarit dhe logjistikës',
    volunteering: 'Ndihma në organizatat e mjedisit dhe të rinisë',
    publications: 'Artikuj në revista të menaxhimit dhe biznesit',
  },
  {
    experience: 'Avokat në zyrën e avokatit X, 5 vjet',
    education: 'Drejtësi, Universiteti i Tiranës, Bachelor',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills: 'Microsoft Office, Leximi i Kodit të Procedures Penale',
    soft_skills: 'Negociim, Komunikim efektiv, Menaxhimi i kohës',
    technical_skills:
      'Përgatitje e dokumenteve ligjore, Analizë e rasteve ligjore',
    hobbies: 'Leximi i librave juridikë, Gjykim i rasteve të ndryshme',
    extra_information:
      'Kam pasion për drejtësinë dhe mbrojtjen e të drejtave të njeriut',
    certification: 'Certifikatë e përfundimit të Kursit për Avokat',
    volunteering:
      'Ndihmë në ofrimin e këshillave ligjore në qendrat e komunitetit',
    publications: 'Artikuj juridikë në revista të specializuara',
  },
  {
    experience:
      'Punetor te makinave qepese Kam punuar si punetor te makinave qepese per 5 vjet ne nje kompani ndertimi.',

    education:
      'Bachelor ne Inxhinieri Ndertimi Kam mbaruar studimet per Bachelor ne Inxhinieri Ndertimi ne Universitetin e Tiranes.',

    native_language: 'Gjuha amtare: Shqip',
    other_language: 'Gjuhe te tjera: Anglisht, Italisht',
    digital_skills: 'Aftesi digjitale: Microsoft Office, AutoCAD',
    soft_skills: 'Aftesi te buta: Komunikim efektiv, menaxhim i kohës',
    technical_skills: 'Aftesi teknike: Ndertim, planifikim i projekteve',
    hobbies: 'Hobi: Gjahu, futboll',
    extra_information:
      'Informacion shtese: Me pelqen te punoj ne ekip dhe te marr pjese ne projekte te medha.',
    certification:
      'Certifikime: Certifikate ne menaxhimin e rrezikut ne ndertim',
    volunteering:
      'Punime vullnetare: Kam punuar vullnetarisht ne ndihme te komunitetit lokal.',
    publications: 'Publikime: Nuk kam publikime te specializuara.',
  },
  {
    experience:
      'puna_aktuale Inxhinier Mekanik Industrial, Kompania XYZ puna_e_meparshme Teknik Mekanik, Kompania ABC',
    education:
      'shkolla_e_mesme Shkolla e Mesme Teknike, dega Mekanikuniversiteti Universiteti Teknik, dega Inxhinieri Mekanike',
    native_language: 'shqip',
    other_language: ' Anglisht',
    digital_skills: '',
    soft_skills: '',
    technical_skills: '',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'puna_e_meparshme Inxhinier ndërtimi në kompani të ndryshme puna_aktuale Karpentier në një kompani të ndërtimit',
    education:
      'shkollimi Bachelor në Inxhinieri Ndërtimi certifikime Certifikim në menaxhimin e projekteve ndërtimore',
    native_language: 'shqip',
    other_language: ' Anglisht',
    digital_skills: 'Përdorimi i softuerëve të inxhinierisë ndërtimore',
    soft_skills: '',
    technical_skills: 'Punime të ndryshme të karpentarisë',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'pune_e_meparshme Operator i sherbimit ndaj klientit ne kompani telekomunikacioni pune_tjeter Asistent i shitjeve ne nje dyqan te teknologjise pune_vullnetare Ndihmes ne organizata bamiresie',
    education:
      'shkolla Bachelor ne Inxhinieri Informatike certifikime Certifikim ne menaxhimin e sherbimeve klientit',
    native_language: 'shqip',
    other_language: ' Anglisht',
    digital_skills: 'Microsoft Office, SAP, CRM',
    soft_skills: 'Komunikim i mire, menaxhim i konflikteve, organizim i kohes',
    technical_skills: 'Menaxhim i rrjeteve, troubleshoot kompjuterash',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'puna_e_meparshme Inxhinier Mekanik per Tubacione ne Kompanine ABC periudha 2015-2019 pershkrimi Pergjegjes per menaxhimin e projekteve te instalimeve te tubacioneve ne industrine e naftes dhe gazit.',
    education:
      'shkolla Universiteti Teknik i Tiranës drejtimi Inxhinieri Mekanike niveli Bachelor periudha 2010-2014',
    native_language: 'shqip',
    other_language: ' Anglisht',
    digital_skills: 'Microsoft Office, AutoCAD, SolidWorks',
    soft_skills: '',
    technical_skills: 'Projektim i instalimeve mekanike, menaxhim i burimeve',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'past_working_experience Kam punuar si shofer traileri për 5 vjet në kompaninë XYZ Transport certificationCertifikatë për shofer traileri nga Instituti i Transportit',
    education:
      'educationsKam përfunduar shkollën e mesme teknike për shoferë kamionësh dhe kam marrë trajnime të vazhdueshme për sigurinë në rrugë',
    native_language: 'Gjuha amtare: Shqip',
    other_language:
      'Gjuhë të tjera: Anglisht (niveli i komunikimit të përditshëm)',
    digital_skills:
      'Aftësi digjitale: Përdorimi i sistemeve GPS dhe aplikacioneve të transportit',
    soft_skills:
      'Aftësi të buta: Komunikimi i shkëlqyeshëm me klientët dhe menaxhimi i kohës',
    technical_skills:
      'Aftësi teknike: Mirëmbajtja e zakonshme e kamionëve dhe trailerëve',
    hobbies: 'Hobi: Pëlqimi për automjetet dhe përmirësimi i tyre',
    extra_information:
      'Informacion shtesë: Kam një shpërblim për shërbimin e shkëlqyeshëm nga kompania XYZ Transport',
    volunteering:
      'Punë vullnetare: Kam ndihmuar në transportin e ushqimit për familjet në nevojë gjatë kohës së pandemisë',
    publications:
      'Publikime: Artikuj në revista të specializuara për transportin dhe sigurinë në rrugë',
    certification: '',
  },
  {
    experience:
      'Këshilltar Ligjor në një firmë ndërkombëtare ligjore, i specializuar në ligjin tregtar dhe të drejtat e pronësisë intelektuale, duke shërbyer një baze të gjerë klientësh ndërkombëtarë që nga viti 2023.',
    education:
      'Master në Ligjin Tregtar, me fokus në pronësinë intelektuale dhe menaxhimin e të drejtave dixhitale, nga Fakulteti i Drejtësisë, Universiteti i Tiranës (2021-2023).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në bazat e të dhënave për kërkime ligjore si Westlaw dhe LexisNexis, dhe i njohur me mjetet digjitale të menaxhimit të kontratave.',
    soft_skills:
      'Aftësi të forta analitike dhe negociuese, komunikim të shkëlqyer me shkrim dhe gojë, i aftë në komunikimin ndërkulturor.',
    technical_skills:
      'Ekspertizë në hartimin dhe rishikimin e kontratave, ligjin e autorëve dhe të patentave, i përvojshëm në proceset e gjyqësorit dhe arbitrimit.',
    hobbies:
      'Pjesëmarrje në blogime ligjore, pjesëmarrje në garat e gjyqësorit simulues dhe në simpoziumet ndërkombëtare ligjore.',
    extra_information:
      'Anëtar aktiv i Shoqatës së Avokatëve lokale, duke kontribuar në punëtoritë dhe seminarët për zhvillimin profesional.',
    certification:
      'Certifikuar si Praktikues i Ligjit të Pronësisë Intelektuale, me certifikata shtesë në menaxhimin e të drejtave digjitale.',
    volunteering:
      'Këshilltar ligjor vullnetar për OJQ-të, me fokus në çështjet e autorësisë dhe përmbajtjes digjitale.',
    publications:
      'Autor i disa artikujve në revistat ligjore mbi ndikimin e teknologjisë në ligjin e autorit.',
  },
  {
    experience:
      'Këshilltar i Brendshëm për një korporatë multinacionale, me fokus në qeverisjen korporative, pajtueshmërinë dhe menaxhimin e rrezikut, me një rekord të suksesshëm në kalimin e sfidave ligjore komplekse që nga viti 2024.',
    education:
      'Bachelor në Drejtësi (LL.B.) me nderime, i specializuar në ligjin korporativ dhe qeverisjen nga Fakulteti i Drejtësisë, Universiteti i Tiranës (2020-2024).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të menaxhimit të pajtueshmërisë dhe sistemeve menaxhuese të dokumenteve elektronike.',
    soft_skills:
      'Aftësi të jashtëzakonshme në zgjidhjen e problemeve, aftësi të forta udhëheqëse dhe menaxhimi i projekteve, efektive në angazhimin e palëve të interesuara.',
    technical_skills:
      'Njohuri të gjera në ligjin korporativ, i aftë në zhvillimin e programeve të pajtueshmërisë dhe menaxhimin e operacioneve ligjore korporative.',
    hobbies:
      'Leximi mbi etikën korporative, vullnetarizëm në klinikat e ndihmës ligjore, dhe mentorim i studentëve të drejtësisë.',
    extra_information:
      'I angazhuar në edukimin ligjor vazhdues për të qëndruar përpara ndryshimeve rregullatore dhe praktikave më të mira në qeverisjen korporative.',
    certification:
      'Duke ndjekur certifikimin në Pajtueshmëri dhe Qeverisje Korporative nga një organizatë profesionale e njohur ligjore.',
    volunteering:
      'Ofrimi i këshillave ligjore për startup-et mbi pajtueshmërinë dhe strukturën korporative.',
    publications:
      'Kontribues në një buletin ligjor korporativ, me fokus në përditësimet në pajtueshmëri dhe menaxhimin e rrezikut.',
  },
  {
    experience:
      "Inxhinier Mekanik në Kompaninë Industriale 'MekTech' (2018-sot); Ndihmës Inxhinier në 'IndustriAlb' (2015-2018)",
    education:
      'Master në Inxhinieri Mekanike, Universiteti Politeknik i Tiranës (2013-2015); Bachelor në Inxhinieri Mekanike, Universiteti i Tiranës (2009-2013)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills: 'AutoCAD, SolidWorks, MATLAB',
    soft_skills: 'Punë në grup, zgjidhje problemesh, komunikim efektiv',
    technical_skills:
      'Dizajnimi i komponentëve mekanike, analiza e elementeve të pafund, menaxhimi i projekteve të inxhinierisë',
    hobbies:
      'Modelimi 3D, leximi i literaturës teknike, eksplorimi i teknologjive të reja',
    extra_information:
      'Anëtar i shoqatës së inxhinierëve mekanikë, pjesëmarrës në konferenca ndërkombëtare të inxhinierisë',
    certification: 'Certifikatë në AutoCAD dhe SolidWorks',
    volunteering:
      'Mentorim për studentët e inxhinierisë, punë vullnetare në projekte ndërtimi për komunitetin',
    publications:
      'Artikuj në revista shkencore mbi optimizimin e proceseve industriale',
  },
  {
    experience:
      "Konsulent për Optimizimin e Proceseve në 'EfficiencyTech' (2019-sot); Inxhinier i Prodhimit në 'FabrikaAlb' (2016-2019)",
    education:
      'Specializim në Menaxhimin e Prodhimit dhe Operacioneve, Universiteti Politeknik i Tiranës (2014-2016); Bachelor në Inxhinieri Mekanike, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'MS Project, Python për analizën e të dhënave, sistemet e menaxhimit të bazës së të dhënave',
    soft_skills:
      'Lidership, organizim i mirë, aftësi të komunikimit me ekipet ndërfunksionale',
    technical_skills:
      'Optimizimi i linjave të prodhimit, analiza statistikore e të dhënave të prodhimit, menaxhimi i cilësisë',
    hobbies: 'Ndjekja e kurseve të teknologjisë, vrapimi, gatimi',
    extra_information:
      'Pjesëmarrës në projekte të ndryshme për përmirësimin e efikasitetit të prodhimit',
    certification: 'Certifikatë në Menaxhimin e Lean dhe Six Sigma',
    volunteering:
      'Organizim i seminareve për ndërmarrjet e vogla për të përmirësuar proceset e tyre',
    publications:
      'Publikime në konferenca mbi inovacionet në menaxhimin e prodhimit',
  },
  {
    experience:
      "Inxhinier i Projekteve të Tubacioneve në 'PipelineEngCo' (2019-sot); Asistent i Inxhinierisë së Tubacioneve në 'EnergyTech Solutions' (2016-2019)",
    education:
      'Master në Inxhinieri Mekanike me specializim në Sistemet e Tubacioneve, Universiteti Politeknik i Tiranës (2014-2016); Bachelor në Inxhinieri Mekanike, Universiteti i Tiranës (2010-2014)',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në AutoCAD, CAESAR II për analizën e tensioneve në tubacione',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe menaxhimi i projekteve, komunikim efektiv me ekipet ndërfunksionale',
    technical_skills:
      'Dizajnimi dhe analiza e sistemeve të tubacioneve për industrinë e naftës dhe gazit, njohuri të thella në standarde të industrisë si ASME dhe API',
    hobbies:
      'Modelimi 3D, leximi i literaturës teknike në fushën e energjisë, eksplorimi i teknologjive të reja në inxhinieri',
    extra_information:
      'Anëtar i shoqërisë së inxhinierëve mekanikë, angazhuar në zhvillimin profesional përmes seminareve dhe konferencave',
    certification:
      'Certifikatë në AutoCAD dhe CAESAR II, si dhe një sërë trajnimesh në sigurinë e tubacioneve',
    volunteering:
      'Dhënie këshillash teknike për projekte komunitare të ujësjellësit dhe kanalizimeve',
    publications:
      'Autor i artikujve në revista të specializuara për inovacionet në inxhinieri të tubacioneve dhe menaxhimin e projekteve',
  },
  {
    experience:
      "Inxhinier i Mirëmbajtjes së Tubacioneve në 'PetroPipe Engineering' (2020-sot); Specialist i Teknikës së Tubacioneve në 'Global Energy Services' (2017-2020)",
    education:
      'Master në Inxhinieri e Aplikuar të Tubacioneve, Universiteti Teknik i Tiranës (2015-2017); Bachelor në Inxhinieri Mekanike, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2011-2015)',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Zotërim i software-it për modelimin e tubacioneve si PDMS, njohuri në GIS për menaxhimin e të dhënave të tubacioneve',
    soft_skills:
      'Komunikim efektiv, zgjidhje problemesh, aftësi të forta analitike dhe menaxhuese',
    technical_skills:
      'Ekspertizë në inspektimin, mirëmbajtjen dhe riparimin e sistemeve të tubacioneve, njohuri të thella në kodet dhe standardet e tubacioneve',
    hobbies:
      'Ndërtimi i modeleve të tubacioneve në kohën e lirë, pjesëmarrje në forumet e inxhinierisë për ndarjen e njohurive',
    extra_information:
      'Pjesëmarrës në projekte ndërkombëtare për zhvillimin e infrastrukturës së tubacioneve, duke kontribuar me ekspertizën teknike',
    certification:
      'Certifikata profesionale në menaxhimin e integritetit të tubacioneve dhe inspektimin ndaj korrozionit',
    volunteering:
      'Konsulent vullnetar për iniciativat mjedisore që lidhen me menaxhimin e ujërave dhe mbrojtjen e tubacioneve',
    publications: 'Shkrimtar i rregullt në buletini ',
  },
  {
    experience:
      "Veteriner në Klinikën Veterinare 'PetHealth' në Tiranë, duke ofruar kujdes mjekësor për kafshët shtëpiake dhe konsulencë për pronarët e tyre që nga viti 2020.",
    education:
      'Doktor në Shkencat Veterinare, Universiteti Bujqësor i Tiranës, me specializim në mjekësinë e kafshëve të vogla (2016-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i software-it veterinar për menaxhimin e pacientëve dhe analizën e të dhënave mjekësore.',
    soft_skills:
      'Aftësi të shkëlqyera komunikuese me pronarët e kafshëve, empati dhe kujdes i lartë ndaj pacientëve, aftësi për të punuar nën presion.',
    technical_skills:
      'Diagnostikim dhe trajtim i sëmundjeve të kafshëve të vogla, operacione kirurgjikale, dhe menaxhim i urgjencave mjekësore.',
    hobbies:
      'Vullnetarizëm në strehat e kafshëve, leximi i literaturës së fundit mjekësore veterinare, dhe kujdesi për kafshët shtëpiake.',
    extra_information:
      'Anëtar aktiv i Shoqatës Veterinare Shqiptare, duke marrë pjesë në konferenca dhe seminare për të ndarë dhe zgjeruar njohuritë në fushën veterinare.',
    certification:
      'Certifikatë në Mjekësinë e Urgjencës për Kafshët e Vogla dhe Certifikatë në Kirurgjinë Veterinare.',
    volunteering:
      'Vullnetar në kampajne për vaksinimin dhe sterilizimin e kafshëve pa strehë.',
    publications:
      'Autor i disa artikujve në revista veterianre mbi trajtimin dhe parandalimin e sëmundjeve te kafshët e vogla.',
  },
  {
    experience:
      "Specialist në Mjekësinë e Kafshëve të Fermës në 'AgroVet' në Fier, duke ofruar këshillime dhe trajtime për shëndetin dhe mirëqenien e kafshëve bujqësore që nga viti 2021.",
    education:
      'Master në Shkencat Veterinare, me fokus në mjekësinë dhe menaxhimin e kafshëve të fermës, Universiteti Bujqësor i Tiranës (2017-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i sistemeve të informacionit për menaxhimin e shëndetit të kafshëve dhe analizës së prodhimit bujqësor.',
    soft_skills:
      'Komunikim efektiv me fermerët, menaxhim i projekteve dhe inisiativave për përmirësimin e kushteve të jetesës së kafshëve.',
    technical_skills:
      'Ekspertizë në diagnostikimin e sëmundjeve të kafshëve të fermës, programet e parandalimit të sëmundjeve, dhe teknikat e trajtimit.',
    hobbies:
      'Studimi i trendeve të reja në bujqësi dhe mjekësi veterinare, udhëtimet në ferma për të mësuar më shumë për praktikat bujqësore të qëndrueshme.',
    extra_information:
      'Krijues i një programi edukativ për fermerët mbi menaxhimin e shëndetit të kafshëve dhe parandalimin e sëmundjeve.',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Gjeolog në 'GeoTech Solutions', duke punuar në projekte të ndryshme të sondazhit dhe analizës së terrenit në Tiranë që nga viti 2021.",
    education:
      'Master në Inxhinieri Gjeologjike, me specializim në hidrogjeologji dhe menaxhimin e burimeve natyrore, nga Universiteti i Shkencave të Tiranës (2018-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Zotërim i GIS dhe software-ve të modelimit gjeologjik si ArcGIS dhe AutoCAD.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, komunikim efektiv me ekipet multidisiplinare, dhe menaxhim i mirë i projekteve.',
    technical_skills:
      'Ekspertizë në analizën e rrezikut gjeologjik, projektimin dhe zbatimin e studimeve të detajuara të terrenit, dhe këshillim për minimizimin e ndikimit ambiental.',
    hobbies:
      'Eksplorimi i formacioneve gjeologjike në natyrë, fotografimi i peisazheve gjeologjike, dhe leximi i publikimeve të fundit shkencore.',
    extra_information:
      'Anëtar i Shoqërisë Gjeologjike Shqiptare, duke kontribuar në organizimin e konferencave dhe punëtorive shkencore.',
    certification: 'Certifikata në GIS dhe Analizën e Rrezikut Gjeologjik.',
    volunteering:
      'Konsulent vullnetar në projekte për mbrojtjen e mjedisit dhe ndërgjegjësimin mbi rëndësinë e burimeve natyrore.',
    publications:
      'Autor i disa artikujve në revista shkencore mbi gjeologjinë e Shqipërisë dhe menaxhimin e burimeve ujore.',
  },
  {
    experience:
      "Inxhinier i Rrjetit të Monitorimit Gjeologjik në 'National GeoWatch', duke mbikëqyrur rrjetin kombëtar të stacioneve së monitorimit gjeologjik që nga viti 2022.",
    education:
      'Bachelor në Inxhinieri Gjeologjike, fokusuar në sismologji dhe monitorimin gjeologjik, nga Universiteti Politeknik i Tiranës (2017-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i avancuar i softuerëve për analizën sismike dhe monitorimin gjeologjik, si SeisComP3 dhe QGIS.',
    soft_skills:
      'Forte në zgjidhjen e problemeve, punë ekipore, dhe aftësi të komunikimit me agjencitë qeveritare dhe organizatat ndërkombëtare.',
    technical_skills:
      'Njohuri të thella në monitorimin sismik dhe analizën e të dhënave, menaxhimin e rrezikut nga fatkeqësitë natyrore, dhe parashikimin e tyre.',
    hobbies:
      'Ndjekja e zhvillimeve të fundit në sismologji, pjesëmarrje në ekspedicionet gjeologjike, dhe ndërtimi i modeleve gjeologjike.',
    extra_information:
      'Pjesëmarrës në projekte ndërkombëtare për studimin e aktivitetit sizmik në rajonin e Ballkanit.',
    certification:
      'Trajnime të specializuara në monitorimin sismik dhe analizën e rrezikut gjeologjik.',
    volunteering:
      'Angazhim në nisma edukative për të rritur ndërgjegjësimin mbi rrezikun e tërmeteve dhe masat e parandalimit.',
    publications: '',
  },
  {
    experience:
      "Inxhinier i Produktit në 'BeautyTech Innovations', duke zhvilluar formula të reja kozmetike me përqendrim në qëndrueshmëri dhe efikasitet (2022-sot).",
    education:
      'Master në Inxhinieri Kimike me specializim në formulimet e produkteve kozmetike, nga Universiteti i Teknologjisë, Tiranë (2019-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Proficient në software-t e dizajnit të formulimeve dhe analizës së të dhënave si SPSS dhe MATLAB.',
    soft_skills:
      'Kreativitet, aftësi të shkëlqyera në zgjidhjen e problemeve dhe punë në ekip, komunikim efikas me departamentet e marketingut dhe shitjeve.',
    technical_skills:
      'Ekspertizë në zhvillimin e formulave të reja të produkteve kozmetike, testime të stabilitetit, dhe njohuri të rregullativeve të industrisë kozmetike.',
    hobbies:
      'Eksperimentimi me produkte kozmetike DIY, ndjekja e trendeve të industrisë së bukurisë, leximi i publikimeve shkencore në fushën e kozmetologjisë.',
    extra_information:
      'Anëtar i një rrjeti profesional të inxhinierëve estetistë, duke ndarë njohuri dhe përvoja në zhvillimin e produkteve inovative.',
    certification:
      'Certifikata në Sigurinë e Produkteve Kozmetike dhe Rregullativat Ndërkombëtare.',
    volunteering:
      'Konsulent për nisma lokale të bukurisë që promovojnë qëndrueshmërinë dhe përdorimin e përbërësve natyralë.',
    publications:
      'Autor i artikujve në revista të specializuara mbi inovacionet në formulimet kozmetike dhe qëndrueshmërinë.',
  },
  {
    experience:
      "Koordinator i Laboratorit të Kërkimit dhe Zhvillimit në 'EcoBeauty Labs', duke udhëhequr projekte të kërkimit për zhvillimin e produkteve kozmetike ekologjike (2021-sot).",
    education:
      'Bachelor në Inxhinieri Biokimike, me fokus në teknologjitë e qëndrueshme dhe zhvillimin e produkteve kozmetike, nga Universiteti Politeknik i Tiranës (2017-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i teknikave të analizës laboratorike dhe software-ve për modelimin e proceseve biokimike.',
    soft_skills:
      'Lidership i fortë, aftësi organizative dhe në menaxhimin e kohës, aftësi për të udhëhequr dhe motivuar ekipet e kërkimit.',
    technical_skills:
      'Njohuri të thella në biokimikë dhe teknologji kozmetike, përvojë në formulimin e produkteve ekologjike dhe testimin e tyre.',
    hobbies:
      'Kultivimi i bimëve medicinale dhe aromatike për përdorim në produkte kozmetike, fotografimi i natyrës, udhëtime shkencore.',
    extra_information:
      'Nismëtar i projekteve të qëndrueshmërisë në industrinë kozmetike, me qëllim të reduktimit të ndikimit mjedisor të produkteve kozmetike.',
    certification:
      'Trajnime të specializuara në teknologjitë e qëndrueshme dhe standardet e qëndrueshmërisë në kozmetikë.',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit në 'Relax & Heal Spa', duke ofruar terapi masazhi për lehtësimin e dhimbjeve muskulare dhe përmirësimin e qarkullimit që nga viti 2021.",
    education:
      'Certifikatë Profesionale në Terapinë e Masazhit, Akademia e Shëndetit dhe Mirëqenies, Tiranë (2019-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e software-it për menaxhimin e klientëve dhe prenotimeve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim, dëgjim aktiv, dhe empati ndaj klientëve.',
    technical_skills:
      'Ekspertizë në teknikat e masazhit suedez, masazhit të thellë të muskujve, dhe refleksologji.',
    hobbies:
      'Praktikimi i jogas, meditimi, dhe leximi i literaturës në fushën e terapisë alternative.',
    extra_information:
      'Pjesëmarrës në seminare dhe kurse të vazhdueshme për të mbajtur aftësitë e masazhit të azhurnuara me praktikat më të fundit.',
    certification:
      'Certifikatë në Terapinë e Masazhit dhe Refleksologji nga Federata Ndërkombëtare e Terapistëve të Masazhit.',
    volunteering:
      'Masazh falas për atletët në ngjarje sportive lokale si pjesë e programit të mirëqenies së komunitetit.',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit dhe Kujdesit Trupor në 'Wellness Center CitySpa', duke specializuar në terapi masazhi për lirimin e stresit dhe kujdesin holistik të trupit që nga viti 2022.",
    education:
      'Diplomë e Avancuar në Masazh dhe Terapi Trupore, Shkolla Profesionale e Mirëqenies, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i programëve të prenotimit online dhe medias sociale për promovimin e shërbimeve të masazhit.',
    soft_skills:
      'Ndjeshmëri ndaj nevojave të klientëve, aftësi organizative të shkëlqyera, dhe aftësi të mira për të ndërtuar marrëdhënie me klientët.',
    technical_skills:
      'Specializim në masazhin aromaterapeutik, terapinë me gurë të nxehtë, dhe teknikat e masazhit shiatsu.',
    hobbies:
      'Kërkimi për terapi alternative dhe mjete natyrore për mirëqenien, eksplorimi i praktikave të reja të masazhit dhe kujdesit trupor.',
    extra_information:
      'Organizator i punëtorive për ndërgjegjësimin mbi rëndësinë e kujdesit personal dhe strategjive për menaxhimin e stresit.',
    certification:
      'Licencë profesionale si Terapist i Masazhit, me certifikime shtesë në aromaterapi dhe masazh me gurë të nxehtë.',
    volunteering:
      'Pjesëmarrës në projekte vullnetare për ofrimin e terapisë së masazhit në qendrat e kujdesit për të moshuarit dhe hospicet.',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit në 'Delux Spa', duke ofruar terapi masazhi për lehtësimin e dhimbjeve muskulare dhe përmirësimin e qarkullimit që nga viti 2021.",
    education:
      'Certifikatë Profesionale në Terapinë e Masazhit, Akademia e Shëndetit dhe Mirëqenies, Tiranë (2019-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e software-it për menaxhimin e klientëve dhe prenotimeve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim, dëgjim aktiv, dhe empati ndaj klientëve.',
    technical_skills:
      'Ekspertizë në teknikat e masazhit suedez, masazhit të thellë të muskujve, dhe refleksologji.',
    hobbies:
      'Praktikimi i jogas, meditimi, dhe leximi i literaturës në fushën e terapisë alternative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit dhe Kujdesit Trupor në 'Wellness Center Delux Spa', duke specializuar në terapi masazhi për lirimin e stresit dhe kujdesin holistik të trupit që nga viti 2022.",
    education:
      'Diplomë e Avancuar në Masazh dhe Terapi Trupore, Shkolla Profesionale e Mirëqenies, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i programëve të prenotimit online dhe medias sociale për promovimin e shërbimeve të masazhit.',
    soft_skills:
      'Ndjeshmëri ndaj nevojave të klientëve, aftësi organizative të shkëlqyera, dhe aftësi të mira për të ndërtuar marrëdhënie me klientët.',
    technical_skills:
      'Specializim në masazhin aromaterapeutik, terapinë me gurë të nxehtë, dhe teknikat e masazhit shiatsu.',
    hobbies:
      'Kërkimi për terapi alternative dhe mjete natyrore për mirëqenien, eksplorimi i praktikave të reja të masazhit dhe kujdesit trupor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit në 'Urban Wellness Center', duke ofruar një gamë të gjerë terapishë masazhi për relaksim dhe rigjenerim që nga viti 2023.",
    education:
      'Diplomë në Terapinë e Masazhit dhe Kujdesin Holistik, Instituti i Mirëqenies dhe Shëndetit, Tiranë (2021-2023).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri në përdorimin e sistemeve të menaxhimit të klientëve dhe aplikacioneve të prenotimit.',
    soft_skills:
      'Empati të lartë me klientët, aftësi të shkëlqyera në dëgjim dhe komunikim, adaptueshmëri.',
    technical_skills:
      'Specializim në masazhin terapeutik, masazhin sportiv dhe teknikat e masazhit lomi lomi.',
    hobbies:
      'Pjesëmarrja në workshope të ndryshme për zhvillimin profesional, meditimi, ushtrimet fizike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Masazhues Freelancer, duke ofruar shërbime masazhi në shtëpi për klientë individuale me fokus në lehtësimin e tensionit dhe menaxhimin e stresit që nga viti 2022.',
    education:
      'Certifikatë në Masazh dhe Kujdesin e Trupit, Qendra e Formimit Profesional në Fushën e Mirëqenies, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i bazës së të dhënave online për menaxhimin e klientëve dhe software-it të prenotimeve.',
    soft_skills:
      'Fuqia në ndërtimin e raporteve me klientët, aftësi të mira organizative, përqëndrim të lartë në detaje.',
    technical_skills:
      'Ekspertizë në masazhin relaksues, refleksologji dhe masazhin e këmbëve, përdorim i teknikave të masazhit shiatsu.',
    hobbies:
      'Leximi i literaturës në terapitë alternative, eksplorimi i praktikave të reja të kujdesit personal, yoga.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist i Masazhit në 'Serenity Spa & Wellness', duke specializuar në masazhin e qafës dhe shpinës për uljen e dhimbjeve kronike që nga viti 2024.",
    education:
      'Studime të Avancuara në Terapinë e Masazhit, Akademia Avancuar e Terapisë së Masazhit, Tiranë (2022-2024).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Aftësi në përdorimin e teknologjisë për ndjekjen e progresit të klientëve dhe feedback-ut.',
    soft_skills:
      'Aftësi të forta në menaxhimin e kohës, dëgjim aktiv, dhe qasje të personalizuar ndaj nevojave të çdo klienti.',
    technical_skills:
      'Njohuri të thella në anatomine e trupit njerëzor, ekspertizë në masazhin terapeutik të qafës dhe shpinës, praktika në masazhin suedez.',
    hobbies:
      'Ndjekja e seminareve për metodat e reja të masazhit, vrapimi, gatimi i ushqimeve të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Dizajner i Brendshëm në 'CreativeSpace Studio', duke realizuar projekte të ndryshme rezidenciale dhe komerciale me një qasje moderne dhe inovative që nga viti 2022.",
    education:
      'Master në Dizajnin e Brendshëm dhe Arkitekturën e Brendshme, Universiteti i Arteve, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në AutoCAD, SketchUp, dhe Adobe Photoshop për vizualizimin e koncepteve të dizajnit.',
    soft_skills:
      'Kreativitet, aftësi të shkëlqyera organizative, dhe komunikim efektiv me klientët për të kuptuar dhe zbatuar vizionin e tyre.',
    technical_skills:
      'Njohuri të thella në zgjedhjen e materialeve, kombinimet e ngjyrave, dhe zbatimin e zgjidhjeve të qëndrueshme dhe funksionale të dizajnit.',
    hobbies:
      'Eksplorimi i trendeve të reja në arkitekturën e brendshme, udhëtimet për inspirim dhe fotografi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Dizajnit të Brendshëm për 'ModernLiving Consultants', duke ofruar këshilla dhe plane dizajni për përmirësimin e hapësirave të jetesës dhe punës që nga viti 2021.",
    education:
      'Bachelor në Dizajnin e Brendshëm, Akademia e Dizajnit, Tiranë (2018-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i 3ds Max dhe V-Ray për renderime të detajuara dhe realiste të projekteve të dizajnit.',
    soft_skills:
      'Aftësi për të punuar nën presion, zgjidhje kreative e problemeve, dhe aftësi të mira në menaxhimin e projekteve.',
    technical_skills:
      'Ekspertizë në planifikimin e hapësirave, zgjedhjen e mobiljeve dhe aksesorëve, dhe harmonizimin e elementëve të ndryshëm të dizajnit.',
    hobbies:
      'Dizajnimi i mobiljeve të personalizuara, leximi i revistave të specializuara në dizajn, pjesëmarrja në panairët e dizajnit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Dizajnit në 'EcoDesign Innovations', duke zhvilluar zgjidhje të dizajnit të brendshëm që promovojnë qëndrueshmërinë dhe inovacionin që nga viti 2023.",
    education:
      'Specializim në Dizajnin Eko-Sustenues, Institutit për Dizajnin e Qëndrueshëm, Tiranë (2019-2023).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Përdorim i avancuar i software-ve për analizën e ndikimit mjedisor të materialeve dhe produkteve, si EcoDesigner dhe Green Building Studio.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera në vendimmarrje, dhe komunikim efikas për të ndërtuar dhe udhëhequr ekipet e dizajnit.',
    technical_skills:
      'Njohuri të thella në principet e dizajnit të qëndrueshëm, zbatimin e teknologjive të gjelbërta në projekte të dizajnit, dhe inovacionin në zgjidhjet e mobilimit.',
    hobbies: '',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Developer at 'TechInnovate Solutions', leading the development of scalable web applications and microservices architecture since 2020.",
    education:
      "Master's Degree in Computer Science, specializing in software engineering and cloud computing, from the University of Technology, Tirana (2018-2020).",
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Expertise in JavaScript, React, Node.js, Docker, and Kubernetes for full-stack development and deployment.',
    soft_skills:
      'Strong leadership, problem-solving skills, and ability to work effectively in team settings.',
    technical_skills:
      'Deep understanding of RESTful APIs, microservices architecture, and cloud services (AWS, Google Cloud).',
    hobbies:
      'Contributing to open source projects, attending tech meetups and conferences, and exploring new programming languages.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Software Engineer at 'GlobalDev Hub', focusing on mobile application development and system integration using Flutter and Kotlin since 2021.",
    education:
      "Bachelor's Degree in Information Technology, with a focus on mobile computing and user experience design, from the Polytechnic University of Tirana (2016-2020).",
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient in mobile development frameworks (Flutter, React Native) and experience with REST APIs and serverless architecture.',
    soft_skills:
      'Excellent communication skills, adaptability to rapidly changing technologies, and effective project management.',
    technical_skills:
      'Specialization in developing high-performance mobile applications, understanding of Agile methodologies, and CI/CD processes.',
    hobbies:
      'Building personal tech projects, gaming, and participating in hackathons and coding challenges.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Developer në 'TechSolutions', duke udhëhequr zhvillimin e softuerëve komplekse dhe inovative për klientë ndërkombëtarë që nga viti 2020.",
    education:
      'Master në Shkencat Kompjuterike, me fokus në zhvillimin e aplikacioneve dhe sigurinë kibernetike, nga Universiteti i Teknologjisë, Tiranë (2018-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në Java, Python, dhe JavaScript; aftësi të avancuara në Docker dhe Kubernetes.',
    soft_skills:
      'Lidership, zgjidhje të shkëlqyera të problemeve, aftësi të forta komunikuese dhe në menaxhimin e ekipit.',
    technical_skills:
      'Ekspertizë në arkitekturën e mikroshërbimeve, zhvillimin e aplikacioneve në shkallë të gjerë, dhe zbatimin e praktikave të sigurisë kibernetike.',
    hobbies:
      'Kodimi në projekte personale, ndjekja e konferencave të teknologjisë, leximi i librave në fushën e inovacionit teknologjik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Software Engineer në 'InnovateTech', duke menaxhuar projekte të ndërlikuara të zhvillimit të softuerit dhe duke mentoruar zhvilluesit e rinj që nga viti 2021.",
    education:
      'Bachelor në Inxhinieri Softuerike, me specializim në inteligjencën artificiale dhe të dhënat e mëdha, nga Universiteti Politeknik i Tiranës (2017-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Zotërim i C#, .NET, dhe React; njohuri të thella në sistemet e bazave të të dhënave si SQL dhe NoSQL.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, punë në ekip, dhe aftësi në menaxhimin e konflikteve.',
    technical_skills:
      'Specializim në zhvillimin e sistemeve të ndërlikuara të menaxhimit të të dhënave, inteligjencën artificiale, dhe mësimin automatik.',
    hobbies:
      'Zhvilimi i algoritmeve të reja, eksplorimi i teknologjive emergjente, udhëtimet për të mësuar mbi kulturat e ndryshme të zhvillimit të softuerit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor Financiar në 'CapitalGrow Investments', duke menaxhuar strategjitë financiare dhe investimet për të maksimizuar fitimet e korporatës që nga viti 2021.",
    education:
      'MBA në Menaxhimin Financiar dhe Strategji Korporative, Shkolla e Biznesit, Tiranë (2019-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në software-t e planifikimit financiar si SAP FI/CO, Oracle Financials; aftësi të avancuara në Excel.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera në analizë dhe vendimmarrje, komunikim efektiv me të gjitha nivelet e organizatës.',
    technical_skills:
      'Ekspertizë në analizën financiare, planifikimin dhe menaxhimin e rrezikut, zhvillimin e strategjive të investimeve.',
    hobbies:
      'Leximi i literaturës së specializuar financiare, udhëtimet për të zgjeruar horizontet profesionale, golfi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Shef i Departamentit Financiar në 'GlobalTech Solutions', duke udhëhequr operacionet financiare dhe duke siguruar stabilitetin financiar të kompanisë që nga viti 2022.",
    education:
      'Master në Kontabilitet dhe Financë, Universiteti i Shkencave Ekonomike, Tiranë (2018-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i QuickBooks, Microsoft Dynamics; njohuri të thella në analizën e të dhënave financiare.',
    soft_skills:
      'Aftësi të forta organizative, punë në ekip, dhe aftësi në menaxhimin e konflikteve.',
    technical_skills:
      'Njohuri të thella në kontabilitetin menaxherial, planifikimin financiar, dhe auditimin e brendshëm.',
    hobbies: 'Vëzhgimi i tregjeve financiare, shah, dhe gatimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Departamentit të Teknologjisë së Informacionit në 'InnovateTech Corporation', duke menaxhuar inovacionin teknologjik dhe infrastrukturën e IT-së për të mbështetur rritjen e kompanisë që nga viti 2020.",
    education:
      'Master në Menaxhimin e Sistemeve Informatike, Universiteti i Teknologjisë, Tiranë (2018-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Proficient në cloud computing, siguria kibernetike, dhe analiza e të dhënave; aftësi të avancuara në programimin e softuerit.',
    soft_skills:
      'Lidership strategjik, aftësi të shkëlqyera në komunikim dhe në menaxhimin e ndryshimeve, zgjidhje të shkëlqyera të problemeve.',
    technical_skills:
      'Ekspertizë në zhvillimin dhe zbatimin e strategjive teknologjike, menaxhimin e projekteve të mëdha të IT-së, dhe optimizimin e proceseve të biznesit.',
    hobbies:
      'Ndjekja e teknologjive të fundit dhe inovacioneve në fushën e IT, leximi, dhe udhëtimet e shpeshta për konferenca teknologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Departamentit të Burimeve Njerëzore në 'PeopleFirst Ltd', duke zhvilluar dhe zbatuar strategjitë e menaxhimit të talentit për të përmirësuar kulturën organizative dhe efikasitetin që nga viti 2021.",
    education:
      'Master në Menaxhimin e Burimeve Njerëzore, Shkolla e Biznesit, Tiranë (2019-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përdorim i avancuar i sistemeve të menaxhimit të burimeve njerëzore (HRMS), si SAP HR dhe Oracle PeopleSoft.',
    soft_skills:
      'Aftësi të forta në ndërtimin e ekipeve, komunikim efikas, zgjidhje konfliktesh, dhe nxitje e angazhimit të punonjësve.',
    technical_skills:
      'Njohuri të thella në planifikimin strategjik të burimeve njerëzore, zhvillimin profesional të punonjësve, dhe menaxhimin e ndryshimeve organizative.',
    hobbies:
      'Leximi i librave mbi zhvillimin personal dhe profesional, marrja pjesë në maratona për të nxitur bashkëpunimin dhe shëndetin e mirë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Oficer i Policisë në Departamentin e Policisë së Qytetit, duke mbikëqyrur operacionet e sigurisë dhe zbatimin e ligjit për të ruajtur rendin publik që nga viti 2019.',
    education:
      'Akademia e Policisë, Tiranë, me specializim në menaxhimin e krizave dhe hetimin e krimeve (2017-2019).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e sistemeve të menaxhimit të informacionit policor dhe databazave të sigurisë.',
    soft_skills:
      'Aftësi të forta në komunikim dhe negociim, zgjidhje e konflikteve, dhe veprim në situata të tensionuara.',
    technical_skills:
      'Ekspertizë në procedurat e zbatimit të ligjit, teknikat e hetimit, dhe menaxhimin e situatave të emergjencës.',
    hobbies:
      'Stërvitje fizike, praktikimi i sporteve të kontaktit, dhe leximi i literaturës në fushën e sigurisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Sigurisë Fizike në 'SecureCorp International', duke ofruar zgjidhje të personalizuara të sigurisë për klientë në sektorin privat dhe qeveritar që nga viti 2020.",
    education:
      'Diplomë në Sigurinë Fizike dhe Menaxhimin e Rrezikut, Instituti i Studimeve të Sigurisë, Tiranë (2018-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Proficient në sistemet e monitorimit dhe analizës së videove të sigurisë, si dhe në softuerët e menaxhimit të rrezikut.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, aftësi në udhëheqjen e ekipit dhe trajnimin e stafit të sigurisë.',
    technical_skills:
      'Njohuri të thella në planifikimin dhe zbatimin e protokolleve të sigurisë, analizën e rrezikut, dhe metodat e parandalimit të vjedhjeve.',
    hobbies:
      'Ndjekja e kurseve të reja të trajnimit në fushën e sigurisë, teknologjia e re dhe sistemet e sigurisë shtëpiake DIY.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Komandant i Njësisë Speciale në Policinë e Shtetit, duke drejtuar operacione të ndërlikuara anti-terror dhe anti-krim që nga viti 2022.',
    education:
      'Master në Siguri Kombëtare dhe Studime të Terrorizmit, Akademia Ushtarake, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Rusisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e softuerëve të analizës së inteligjencës dhe sistemeve të monitorimit.',
    soft_skills:
      'Lidership i jashtëzakonshëm, aftësi të forta në menaxhimin e situatave të krizës, dhe komunikim efikas në situata kritike.',
    technical_skills:
      'Ekspertizë në taktikat e operacioneve speciale, menaxhimin e rreziqeve të sigurisë, dhe hetimin e avancuar.',
    hobbies:
      'Stërvitje në sporte luftarake, eksplorimi i teknikave të mbijetesës, dhe pjesëmarrja në seminare të sigurisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Sigurisë Fizike në 'Elite Security Firm', duke ofruar këshillime dhe zgjidhje të sigurisë për korporata dhe evente të mëdha që nga viti 2021.",
    education:
      'Bachelor në Menaxhimin e Sigurisë dhe Mbrojtjes, Fakulteti i Sigurisë, Tiranë (2017-2021).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Proficient në sistemet e menaxhimit të sigurisë dhe software të analizës së rrezikut.',
    soft_skills:
      'Komunikim efektiv me klientët, aftësi të shkëlqyera organizative dhe në zgjidhjen e problemeve, aftësi në trajnimin e ekipit të sigurisë.',
    technical_skills:
      'Njohuri të thella në metodat e vlerësimit të rrezikut, planifikimin e masave të sigurisë, dhe zbatimin e teknologjive të sigurisë moderne.',
    hobbies:
      'Ndjekja e teknologjive të reja në fushën e sigurisë, leximi i publikimeve mbi menaxhimin e rrezikut, dhe stërvitja fizike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Zyrtar i Sigurisë në Administratën Publike, duke mbikëqyrur zbatimin e protokolleve të sigurisë dhe koordinimin e operacioneve të sigurisë në institucionet qeveritare që nga viti 2023.',
    education:
      'Diplomë në Administrim Publik me specializim në menaxhimin e sigurisë, Akademia e Studimeve Publike, Tiranë (2021-2023).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në sistemet e menaxhimit të sigurisë qeveritare dhe databazat e sigurisë publike.',
    soft_skills:
      'Aftësi të forta në planifikim strategjik, udhëheqje dhe komunikim efikas me agjencitë e sigurisë.',
    technical_skills:
      'Ekspertizë në protokollet e sigurisë për institucionet publike, menaxhimin e rreziqeve dhe masat parandaluese.',
    hobbies:
      'Stërvitje për përmirësimin e aftësive fizike dhe taktike, ndjekja e kurseve të specializuara në menaxhimin e krizave.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Këshilltar i Sigurisë në Ministrinë e Brendshme, duke ofruar ekspertizë në planifikimin dhe zbatimin e strategjive kombëtare të sigurisë për mbrojtjen e infrastrukturës kritike që nga viti 2022.',
    education:
      'Master në Siguri Kombëtare dhe Politika Publike, Shkolla e Lartë e Administratës dhe Sigurisë, Tiranë (2020-2022).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Proficient në analizën e të dhënave të sigurisë dhe softuerët e menaxhimit të krizave.',
    soft_skills:
      'Aftësi të shkëlqyera në udhëheqjen e ekipit, negociatat strategjike dhe menaxhimin e situatave të emergjencës.',
    technical_skills:
      'Njohuri të thella në legjislacionin e sigurisë, strategjitë e mbrojtjes së infrastrukturës dhe menaxhimin e rreziqeve të sigurisë.',
    hobbies:
      'Leximi i studimeve të sigurisë dhe politikave publike, marrja pjesë në forume dhe konferenca të sigurisë kombëtare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Sekretar Gjyqësor në Gjykatën e Apelit, Tiranë, duke menaxhuar dokumentacionin ligjor dhe mbështetur operacionet e gjykatës në proceset e apelit që nga viti 2021. Më parë ka shërbyer si Asistent Administrativ në Ministrinë e Drejtësisë, duke ofruar mbështetje në menaxhimin e dokumenteve dhe komunikimin institucional (2018-2021).',
    education:
      'Bachelor në Shkencat Juridike, Universiteti i Drejtësisë, Tiranë (2014-2018).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve juridikë si LexisNexis dhe software për menaxhimin e dokumenteve.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, komunikim efikas, dhe përqëndrim në detaje; aftësi të forta në menaxhimin e kohës dhe prioriteteve.',
    technical_skills:
      'Njohuri të thella në procedurat gjyqësore, menaxhimin e regjistrave ligjorë dhe përgatitjen e dosjeve për rastet e gjykimit.',
    hobbies:
      'Leximi i literaturës juridike dhe ndjekja e zhvillimeve të fundit në fushën e drejtësisë; vullnetarizëm në organizata joqeveritare që ofrojnë këshillim ligjor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Sekretar Gjyqësor në Gjykatën e Apelit, Tiranë, duke menaxhuar dokumentacionin ligjor dhe mbështetur operacionet e gjykatës në proceset e apelit që nga viti 2021. Më parë ka shërbyer si Asistent Administrativ në Ministrinë e Drejtësisë, duke ofruar mbështetje në menaxhimin e dokumenteve dhe komunikimin institucional (2018-2021).',
    education:
      'Bachelor në Shkencat Juridike, Universiteti i Drejtësisë, Tiranë (2014-2018).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve juridikë si LexisNexis dhe software për menaxhimin e dokumenteve.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, komunikim efikas, dhe përqëndrim në detaje; aftësi të forta në menaxhimin e kohës dhe prioriteteve.',
    technical_skills:
      'Njohuri të thella në procedurat gjyqësore, menaxhimin e regjistrave ligjorë dhe përgatitjen e dosjeve për rastet e gjykimit.',
    hobbies:
      'Leximi i literaturës juridike dhe ndjekja e zhvillimeve të fundit në fushën e drejtësisë; vullnetarizëm në organizata joqeveritare që ofrojnë këshillim ligjor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Sekretar në Gjykatën Administrative, ofruar mbështetje në menaxhimin e proceseve gjyqësore dhe komunikimin me palët e përfshira në çështjet administrative që nga viti 2022. Ka përvojë si Koordinator i Zyrës në Agjencinë Kombëtare të Regjistrimit, duke u marrë me koordinimin e aktiviteteve administrative dhe mbikëqyrjen e regjistrimeve të pronës (2019-2022).',
    education:
      'Master në Menaxhimin Administrativ dhe Publik, Fakulteti i Shkencave Politike dhe Juridike, Tiranë (2017-2019).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Zotërim i sistemeve të menaxhimit të informacionit gjyqësor dhe databazave të të dhënave publike.',
    soft_skills:
      'Komunikim i fortë interpersonal, aftësi në organizimin dhe koordinimin e detyrave, adaptueshmëri në mjedise dinamike pune.',
    technical_skills:
      'Njohuri në legjislacionin administrativ, procedurat gjyqësore administrative dhe menaxhimin e dokumentacionit ligjor.',
    hobbies:
      'Angazhim në aktivitete që promovojnë transparencën dhe qasjen në drejtësi; ndjekja e kurseve të specializuara në menaxhimin e qeverisjes dhe administratës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Sekretar në Gjykatën Kushtetuese, përgjegjës për koordinimin e procedurave gjyqësore dhe mbikëqyrjen e dokumentacionit ligjor, duke u angazhuar në përmirësimin e proceseve administrative që nga viti 2022. Ka shërbyer më parë si Specialist i Menaxhimit të Dokumenteve në Ministrinë e Drejtësisë, duke ofruar mbështetje në menaxhimin e dokumentacionit dhe komunikimin institucional (2019-2022).',
    education:
      'Master në Drejtësi Administrative dhe Procedura Gjyqësore, Universiteti i Tiranës, Fakulteti i Drejtësisë (2017-2019).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve të menaxhimit të dokumentacionit ligjor dhe bazave të të dhënave gjyqësore.',
    soft_skills:
      'Aftësi të shkëlqyera në organizim, komunikim dhe përqendrim në detaje; aftësi të forta në menaxhimin e kohës dhe të projekteve.',
    technical_skills:
      'Njohuri të thella në legjislacionin dhe procedurat gjyqësore, si dhe në menaxhimin e dokumenteve ligjore.',
    hobbies:
      'Leximi i literaturës ligjore dhe ndjekja e seminareve të specializuara në fushën e drejtësisë dhe administrimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Asistent i Lartë Gjyqësor në Gjykatën Administrative të Apelit, mbështetje në menaxhimin e rasteve gjyqësore dhe koordinimin e seancave të gjykimit, duke kontribuar në efikasitetin e shqyrtimit të çështjeve administrative që nga viti 2023. Ka përvojë të mëparshme si Koordinator i Projekteve në Agjencinë e Reformës Administrative, duke u marrë me zbatimin e iniciativave për përmirësimin e shërbimeve publike (2020-2023).',
    education:
      'Bachelor në Administrim Publik, me fokus në menaxhimin e institucioneve gjyqësore, Universiteti i Shkencave Sociale, Tiranë (2016-2020).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve administrativë dhe sistemeve të menaxhimit të çështjeve gjyqësore.',
    soft_skills:
      'Komunikim efikas, menaxhim i konflikteve, dhe aftësi të forta organizative dhe analitike.',
    technical_skills:
      'Ekspertizë në procedurat administrative dhe gjyqësore, si dhe në menaxhimin e dokumentacionit dhe të dhënave.',
    hobbies:
      'Ndjekja e aktiviteteve të ndryshme për zhvillimin profesional në fushën e administrimit publik dhe drejtësisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Noter me licencë në 'Notary Legal Services', duke ofruar shërbime të plota noteriale për individë dhe biznese, përfshirë legalizimin e dokumenteve dhe këshillimin ligjor që nga viti 2021.",
    education:
      'Master në Drejtësi Noteriale, Universiteti i Shkencave Ligjore, Tiranë (2019-2021); Bachelor në Drejtësi, Universiteti i Tiranës, Fakulteti i Drejtësisë (2015-2019).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve të menaxhimit të dokumenteve noteriale dhe bazave të të dhënave ligjore.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe ndërtimin e marrëdhënieve me klientët, vëmendje të lartë ndaj detajeve, dhe aftësi të forta organizative.',
    technical_skills:
      'Ekspertizë në procedurat noteriale, legalizimin e dokumenteve, dhe këshillimin për transaksionet e pasurive të paluajtshme.',
    hobbies:
      'Leximi i literaturës ligjore, ndjekja e seminareve të specializuara në fushën noteriale, dhe udhëtimet kulturore për të zgjeruar njohuritë mbi sistemet ligjore ndërkombëtare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Noter Publik në 'City Notary Office', duke ofruar një gamë të gjerë shërbimesh noteriale duke përfshirë autentikimin e dokumenteve, kontratave dhe testamentave që nga viti 2022.",
    education:
      'Master në Menaxhimin e Dokumenteve Ligjore dhe Noteriale, Universiteti i Drejtësisë, Tiranë (2018-2020); Bachelor në Shkencat Ligjore, Universiteti i Tiranës, Fakulteti i Drejtësisë (2014-2018).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e teknologjive të informacionit për arkivimin dhe menaxhimin e dokumenteve noteriale.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe ndërtimin e marrëdhënieve me klientët, vëmendje të lartë ndaj detajeve, dhe aftësi të forta organizative.',
    technical_skills:
      'Ekspertizë në procedurat noteriale, legalizimin e dokumenteve, dhe këshillimin për transaksionet e pasurive të paluajtshme.',
    hobbies:
      'Leximi i literaturës ligjore, ndjekja e seminareve të specializuara në fushën noteriale, dhe udhëtimet kulturore për të zgjeruar njohuritë mbi sistemet ligjore ndërkombëtare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Noter në 'Notary Public Office', Tiranë, duke ofruar shërbime noteriale si legalizimet, verifikimet e firmave dhe regjistrimet e pasurive që nga viti 2021. Më parë ka punuar si Avokat i Përgjithshëm në një firmë ligjore të njohur, duke u marrë me çështje të të drejtave të pronësisë dhe kontratave (2018-2021).",
    education:
      'Master në Të Drejtën Civile dhe Noteriale, Universiteti i Tiranës, Fakulteti i Drejtësisë (2016-2018); Bachelor në Shkencat Juridike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve juridikë dhe sistemeve të menaxhimit të dokumentacionit noterial.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe komunikuese, vëmendje të lartë ndaj detajeve, dhe integritet profesional.',
    technical_skills:
      'Ekspertizë në ligjin noterial, procedurat e legalizimit dhe regjistrimit, dhe menaxhimin e transaksioneve të ndryshme juridike.',
    hobbies:
      'Leximi i literaturës ligjore dhe ndjekja e zhvillimeve të fundit në fushën noteriale, udhëtimet për të zgjeruar njohuritë mbi sistemet juridike të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Noter Publik në 'City Notary Services', duke ofruar një gamë të gjerë shërbimesh noteriale për individë dhe biznese, duke përfshirë dorëzimin e testamenteve dhe menaxhimin e transaksioneve të patundshme që nga viti 2022. Ka qenë pjesë e ekipit ligjor në një agjenci imobiliare, duke këshilluar mbi çështjet e pronësisë dhe kontratave (2019-2022).",
    education:
      'Master në Menaxhimin e Pasurive dhe Të Drejtën Noteriale, Universiteti i Drejtësisë, Tiranë (2017-2019); Bachelor në Shkencat Juridike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i aplikacioneve të menaxhimit të pasurive dhe bazave të të dhënave noteriale.',
    soft_skills:
      'Ndërtimi i marrëdhënieve me klientët, aftësi analitike të forta, dhe përkushtim ndaj etikës profesionale.',
    technical_skills:
      'Njohuri të thella në procedurat noteriale, menaxhimin e dokumenteve të pasurive dhe zbatimin e ligjeve të pasurive të patundshme.',
    hobbies:
      'Studimi i trendeve të tregut të patundshmërive, pjesëmarrja në seminare dhe konferenca ligjore, kërkimi në fushën e të drejtës civile dhe noteriale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Agjencisë së Udhëtimit 'ExploreAlbania Tours', duke ofruar paketa të personalizuara turistike dhe eksplorime të destinacioneve unike në Shqipëri që nga viti 2021. Më parë ka punuar si menaxher i produktit turistik në një kompani ndërkombëtare të udhëtimit, duke zhvilluar itinerarë inovativë dhe partneritete strategjike (2018-2021).",
    education:
      'Master në Menaxhimin e Turizmit dhe Hotelerisë, Universiteti i Shkencave të Aplikuara në Turizëm, Tiranë (2016-2018); Bachelor në Biznes dhe Menaxhim, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Proficient në sistemet e rezervimit online, marketingun digjital, dhe analizën e të dhënave të klientëve.',
    soft_skills:
      'Lidership, krijimtari në zhvillimin e produkteve turistike, aftësi të shkëlqyera në komunikim dhe ndërtimin e marrëdhënieve me klientët.',
    technical_skills:
      'Ekspertizë në planifikimin dhe menaxhimin e paketave turistike, negociatat me furnizuesit, dhe zbatimin e strategjive të marketingut.',
    hobbies:
      'Udhëtimet për të zbuluar destinacione të reja, fotografia e peisazheve natyrore, dhe leximi i librave mbi kulturat e ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Bashkëthemelues dhe Drejtor Operacionesh në 'AdventureSeekers', një agjenci udhëtimi që specializohet në aventura ekstreme dhe turizmin aventurë në rajone të pazbuluara që nga viti 2022. Ka menaxhuar më parë operacionet e një resorti turistik në bregdetin shqiptar, duke përmirësuar shërbimet dhe përvojat e klientëve (2019-2022).",
    education:
      'Master në Menaxhimin e Destinacioneve Turistike, Universiteti për Studime Ndërkombëtare në Turizëm, Tiranë (2017-2019); Bachelor në Menaxhimin e Hotelerisë, Fakulteti i Turizmit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Zotërim i CRM-ve turistike dhe platformave të rrjeteve sociale për promovimin e aventurave turistike.',
    soft_skills:
      'Inovacion në krijimin e përvojave turistike, aftësi të forta organizative dhe menaxhimi i ekipit, aftësi në zgjidhjen e problemeve.',
    technical_skills:
      'Njohuri të thella në sigurinë e turizmit aventurë, zhvillimin e itinerarëve të personalizuar, dhe menaxhimin e rrezikut në turizmin ekstrem.',
    hobbies:
      'Praktikimi i sporteve ekstreme, eksplorimi i kulturave të reja përmes udhëtimeve, dhe angazhimi në aktivitete mbrojtëse të mjedisit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "SEO Specialist në 'DigitalMarketingPro', duke optimizuar faqet e internetit për motorët e kërkimit dhe rritur trafikun organik për klientët në sektorë të ndryshëm që nga viti 2021. Më parë ka punuar si analist i marketingut digjital, duke analizuar të dhënat dhe përmirësuar strategjitë e përmbajtjes (2018-2021).",
    education:
      'Master në Marketing Digjital dhe Strategji Online, Universiteti i Teknologjisë, Tiranë (2016-2018); Bachelor në Informatikë Ekonomike, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient në SEO tools si SEMrush dhe Google Analytics; aftësi të avancuara në WordPress dhe optimizimin e përmbajtjes.',
    soft_skills:
      'Kreativitet, aftësi analitike, dhe komunikim efektiv; aftësi të forta organizative dhe në menaxhimin e projekteve.',
    technical_skills:
      'Ekspertizë në optimizimin e motorëve të kërkimit (SEO), analizën e fjalëve kyç, dhe menaxhimin e fushatave PPC.',
    hobbies:
      'Eksplorimi i trendeve të reja në SEO dhe marketingun digjital, blogimi në tema të teknologjisë dhe marketingut, dhe fotografimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i SEO-së në 'WebSolutions Inc.', duke zhvilluar dhe zbatuar strategji të suksesshme SEO për të maksimizuar vizibilitetin online të bizneseve që nga viti 2022. Ka mbikëqyrur më parë një ekip të optimizimit të përmbajtjes në një agjenci reklamimi, duke siguruar përputhshmërinë e përmbajtjes me praktikat më të mira të SEO (2019-2022).",
    education:
      'Master në Sisteme Informative të Menaxhimit, Universiteti i Shkencave të Aplikuara në Biznes, Tiranë (2017-2019); Bachelor në Marketing, Fakulteti i Menaxhimit dhe Biznesit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Zotërim i Google Search Console dhe Moz; njohuri të thella në HTML dhe CSS për optimizimin teknik të faqeve web.',
    soft_skills:
      'Lidership, aftësi të shkëlqyera në analizë dhe zgjidhjen e problemeve, dhe aftësi të komunikimit për të ndërtuar marrëdhënie me klientët.',
    technical_skills:
      'Njohuri të avancuara në SEO, strategjitë e përmbajtjes dhe optimizimin e faqeve web për të përmirësuar rangimin dhe konvertimet.',
    hobbies:
      'Ndjekja e webinarëve dhe konferencave në fushën e marketingut digjital, leximi i studimeve të rastit SEO, dhe udhëtimet për të zgjeruar horizontet kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "SEO Specialist në 'OptimizeEdge', duke përmirësuar pozicionimin e faqeve në motorët e kërkimit dhe duke rritur angazhimin e përdoruesve që nga viti 2020. Ka qenë pjesë e një start-upi teknologjik si analist i SEO-së, duke ndihmuar në ndërtimin e strategjive të përmbajtjes dhe optimizimin e sajiteve web (2017-2020).",
    education:
      'Bachelor në Marketing Digjital, Fakulteti i Shkencave të Informacionit dhe Komunikimit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i fortë në Google Analytics, SEMrush, dhe optimizimin e përmbajtjes për SEO.',
    soft_skills:
      'Kreativitet në zgjidhjen e problemeve, aftësi të mira në menaxhimin e kohës dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në analizën e fjalëve kyç, strukturën e faqeve web dhe optimizimin e faqeve për motorët e kërkimit.',
    hobbies:
      'Blogimi rreth tendencave të reja në SEO dhe marketingun digjital, fotografia dhe eksplorimi i natyrës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i SEO-së për 'WebInnovate Solutions', duke ndihmuar biznese të ndryshme të përmirësojnë prezencën e tyre online dhe të rrisin trafikun organik përmes teknikave të avancuara SEO që nga viti 2019. Ka filluar karrierën si një asistent i marketingut digjital, duke mësuar dhe aplikuar teknikat e SEO në projekte të ndryshme (2016-2019).",
    education:
      'Bachelor në Menaxhimin e Biznesit dhe Teknologjisë së Informacionit, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në përdorimin e Ahrefs, Moz Pro, dhe teknikave të ndërtimit të lidhjeve.',
    soft_skills:
      'Lidership i demonstruar, aftësi të shkëlqyera komunikuese, dhe aftësi për të analizuar dhe interpretuar të dhënat e SEO.',
    technical_skills:
      'Njohuri të thella në optimizimin on-page dhe off-page, strategjitë e përmbajtjes SEO dhe analizën e konkurrencës.',
    hobbies:
      'Përcjellja e konferencave të marketingut digjital, leximi i librave mbi inovacionin teknologjik, dhe i apasionuar pas udhëtimeve kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Operator Turistik në 'AlbaniaExplorer', duke organizuar dhe menaxhuar ture turistike në destinacionet më tërheqëse të Shqipërisë për turistë vendas dhe të huaj që nga viti 2020. Ka qenë pjesë e një agjencie lokale të udhëtimit, duke kontribuar në planifikimin e itinerarëve dhe koordinimin e logjistikës së udhëtimeve (2017-2020).",
    education:
      'Bachelor në Turizëm dhe Menaxhim Hotelier, Fakulteti i Biznesit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Zotërim i sistemeve të rezervimit dhe softuerëve të menaxhimit të tureve, si dhe marketingut digjital për promovimin e tureve.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe komunikuese, adaptueshmëri dhe zgjidhje kreative të problemeve.',
    technical_skills:
      'Njohuri të thella në planifikimin e tureve dhe aktiviteteve turistike, menaxhimin e marrëdhënieve me klientët dhe furnizuesit.',
    hobbies:
      'Udhëtimet për të zbuluar destinacione të reja, fotografia e peisazheve dhe kulturave, dhe pasioni për kuzhinën tradicionale shqiptare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Produktit Turistik në 'TravelBalkans', duke zhvilluar paketa turistike inovative për tregjet ndërkombëtare dhe rritur praninë online të agjencisë që nga viti 2019. Ka ndihmuar në ngritjen e një start-upi turistik, duke u marrë me strategjitë e marketingut dhe menaxhimin e partneriteteve (2016-2019).",
    education:
      'Bachelor në Menaxhimin e Turizmit dhe Hotelerisë, Fakulteti i Turizmit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në përdorimin e platformave të rrjeteve sociale për të ndërtuar imazhin e markës dhe tërheqjen e klientëve të rinj.',
    soft_skills:
      'Lidership në zhvillimin e ekipeve, aftësi të forta në negociatat dhe menaxhimin e projekteve, dhe qasje inovative ndaj sfidave të tregut turistik.',
    technical_skills:
      'Ekspertizë në analizën e tregut turistik, zhvillimin e produkteve dhe paketave turistike, dhe zbatimin e teknikave të marketingut digjital.',
    hobbies:
      'Eksplorimi i trendeve të reja në industrinë e turizmit, pjesëmarrja në workshop-e dhe konferenca mbi turizmin, dhe gatimi i recetave nga kultura të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Paramedik i Lartë në Shërbimin e Ambulancës Kombëtare, duke ofruar ndihmë të shpejtë mjekësore në terren dhe menaxhimin e situatave emergjente të shëndetit që nga viti 2021. Ka qenë pjesë e një ekipe të reagimit të shpejtë, duke u marrë me trajtimin e pacientëve në raste urgjence (2018-2021).',
    education:
      'Master në Shkencat e Kujdesit Shëndetësor me fokus në Menaxhimin e Urgjencave, Universiteti i Shkencave Mjekësore, Tiranë (2016-2018); Bachelor në Ndihmën e Parë dhe Kujdesin Urgjent, Fakulteti i Shkencave të Shëndetit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i softuerëve mjekësorë për regjistrimin e të dhënave të pacientëve dhe analizën e situatave urgjente.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe menaxhimin e stresit, përgjegjshmëri të lartë dhe aftësi të fortë në vendimmarrje.',
    technical_skills:
      'Ekspertizë në trajtimin e urgjencave mjekësore, përdorimin e pajisjeve të ndihmës së shpejtë, dhe teknikat e reanimacionit.',
    hobbies:
      'Ndjekja e trajnimeve të vazhdueshme në fushën e ndihmës së parë, vrapimi, dhe aktivitete vullnetare në komunitet për ndërgjegjësimin mbi shëndetin.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Koordinator i Paramedikëve në Qendrën e Trajtimeve Urgjente, duke udhëhequr operacionet e ndërhyrjes dhe trajnimit të ekipit të paramedikëve për situata kritike që nga viti 2022. Ka kontribuar në zhvillimin e programeve të trajnimit për paramedikët dhe në përmirësimin e protokolleve të trajtimit urgjent (2019-2022).',
    education:
      'Master në Menaxhimin e Urgjencave Shëndetësore, Fakulteti i Shkencave Mjekësore, Universiteti i Tiranës (2017-2019); Bachelor në Shëndetësinë Publike, Universiteti i Shëndetit dhe Shkencave Sociale, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përdorim i avancuar i teknologjive të informacionit shëndetësor për menaxhimin e rasteve dhe koordinimin e ekipit.',
    soft_skills:
      'Lidership efektiv, aftësi të shkëlqyera organizative, dhe aftësi në komunikimin dhe edukimin e pacientëve dhe familjeve të tyre.',
    technical_skills:
      'Njohuri të thella në procedurat e ndërhyrjes urgjente, menaxhimin e situatave të traumës, dhe përdorimin e pajisjeve mjekësore emergjente.',
    hobbies:
      'Pjesëmarrja në konferenca dhe seminare mjekësore për të qëndruar të azhurnuar me praktikat më të reja, leximi, dhe udhëtimet edukative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Marketingut dhe Shitjeve në 'InnovateMarket Solutions', duke udhëhequr strategjitë e marketingut dhe rritjen e kanaleve të shitjeve për të arritur objektivat e biznesit që nga viti 2021. Më parë ka qenë Menaxher i Marketingut në një kompani teknologjike, përgjegjës për fushatat digjitale dhe analizën e tregut (2018-2021).",
    education:
      'Master në Menaxhimin e Marketingut, Universiteti i Biznesit, Tiranë (2016-2018); Bachelor në Administrim Biznesi, me fokus në Marketing dhe Shitje, Universiteti i Ekonomisë, Tiranë (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në marketingun digjital, përdorimin e CRM-ve, dhe analizën e të dhënave të shitjeve.',
    soft_skills:
      'Lidership, komunikim efektiv, dhe aftësi të shkëlqyera në menaxhimin e ekipit dhe të projekteve.',
    technical_skills:
      'Ekspertizë në strategjitë e marketingut, zhvillimin e produktit, dhe menaxhimin e marrëdhënieve me klientët.',
    hobbies:
      'Ndjekja e trendeve të reja në marketing dhe teknologji, leximi i studimeve të rastit në biznes dhe marketing, dhe sportet ekipore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Shitjeve në 'GlobalSales Corp', duke kryer negociata me klientë të mëdhenj korporatë dhe duke menaxhuar marrëdhëniet me partnerët për të maksimizuar fitimet dhe zgjeruar tregjet që nga viti 2020. Ka qenë pjesë e një start-upi në fushën e teknologjisë si Koordinator i Shitjeve, duke ndihmuar në zhvillimin e strategjive të shitjes dhe arritjen e objektivave të rritjes (2017-2020).",
    education:
      'Master në Strategji Biznesi dhe Menaxhimin e Shitjeve, Shkolla e Lartë e Menaxhimit, Tiranë (2015-2017); Bachelor në Menaxhim dhe Marketing, Universiteti i Tiranës (2011-2015).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i platformave të shitjes online, analizës së performancës së shitjeve, dhe strategjive të marketingut digjital.',
    soft_skills:
      'Negociata të fortë, aftësi të shkëlqyera organizative, dhe aftësi për të ndërtuar dhe menaxhuar marrëdhënie me klientët.',
    technical_skills:
      'Njohuri të thella në dinamikat e tregut, menaxhimin e portofolit të klientëve, dhe teknikat e shitjes konsultative.',
    hobbies:
      'Udhëtimet për të zgjeruar rrjetin profesional, ndjekja e seminareve të biznesit dhe marketingut, dhe aktivitetet jashtë në natyrë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Marketingut në 'BrandBoost Agency', specializuar në rritjen e ndërgjegjësimit të markës dhe angazhimit të klientit për klientë në industri të ndryshme që nga viti 2019. Ka filluar si specialist i marketingut digjital, duke fokusuar në SEO dhe marketingun e përmbajtjes (2016-2019).",
    education:
      'Master në Menaxhimin e Komunikimit dhe Marketingut, Universiteti i Shkencave Sociale, Tiranë (2014-2016); Bachelor në Menaxhim dhe Marketing, Fakulteti i Ekonomisë, Universiteti i Tiranës (2010-2014).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Zotërim i avancuar i Google AdWords, Facebook Ads, dhe mjeteve të analizës së rrjeteve sociale.',
    soft_skills:
      'Kreativitet, aftësi të forta në komunikim dhe menaxhimin e ekipit, dhe aftësi në zgjidhjen e problemeve në mënyra inovative.',
    technical_skills:
      'Ekspertizë në strategjitë e marketingut digjital, menaxhimin e fushatave reklamuese, dhe optimizimin e konvertimit.',
    hobbies:
      'Blogimi rreth tendencave të fundit në marketing dhe teknologji, fotografimi, dhe udhëtimet kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Shitjeve në 'NextGen Solutions', duke drejtuar inisiativat e shitjeve dhe përpjekjet për zgjerimin e tregut për zgjidhje teknologjike inovative që nga viti 2022. Më parë ka qenë Koordinator i Shitjeve në një startup teknologjik, duke kontribuar në rritjen e të ardhurave dhe zgjerimin e bazës së klientëve (2018-2022).",
    education:
      'Master në Menaxhimin e Biznesit Ndërkombëtar, Fakulteti i Shkencave të Aplikuara në Biznes, Tiranë (2015-2017); Bachelor në Marketing dhe Komunikim, Fakulteti i Ekonomisë, Universiteti i Tiranës (2011-2015).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Proficient në përdorimin e platformave të menaxhimit të marrëdhënieve me klientët (CRM) dhe analizën e të dhënave të shitjeve.',
    soft_skills:
      'Aftësi të shkëlqyera negociuese, udhëheqje strategjike, dhe ndërtimi i marrëdhënieve të forta me klientët.',
    technical_skills:
      'Njohuri të thella në strategjitë e shitjeve dhe marketingut, zhvillimin dhe zbatimin e planeve të biznesit, dhe menaxhimin e projekteve.',
    hobbies:
      'Ndjekja e kursitve të specializuara në menaxhimin e shitjeve dhe marketingut, aktivitete fizike si ngjitja malore, dhe leximi i librit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Strateg i Marketingut në 'CreativeInsights Agency', duke zhvilluar strategji të integruara të marketingut për të maksimizuar angazhimin dhe konvertimin e klientëve që nga viti 2020. Ka ndihmuar në transformimin digjital të kompanive tradicionale, duke i ndihmuar ato të përshtaten me trendet e reja të tregut (2017-2020).",
    education:
      'Master në Marketing Strategjik, Shkolla e Biznesit, Tiranë (2015-2017); Bachelor në Administrim Biznesi, me specializim në Marketing dhe Komunikim, Universiteti i Tiranës (2011-2015).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Ekspert në përdorimin e mjetesh të avancuara të marketingut digjital si HubSpot dhe Salesforce, si dhe analitikës së të dhënave.',
    soft_skills:
      'Ndërtimi i marrëdhënieve të forta me klientët, aftësi të shkëlqyera në menaxhimin e projekteve dhe komunikimin ndërpersonale.',
    technical_skills:
      'Njohuri të thella në zhvillimin e strategjive të marketingut, SEO, marketingun e përmbajtjes dhe fushatat e email marketingut.',
    hobbies:
      'Eksplorimi i teknologjive të reja në fushën e marketingut digjital, udhëtimet për të mësuar mbi kulturat e marketingut global, dhe piktura.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Shitjeve në 'TechGrowth Solutions', duke punuar me skuadra të shitjeve për të identifikuar dhe kapur mundësi të reja biznesi në sektorin e teknologjisë që nga viti 2021. Ka qenë përgjegjës për ndërtimin e strategjive të shitjeve dhe partneriteteve strategjike në një firmë ndërkombëtare të konsulencës (2018-2021).",
    education:
      'Master në Menaxhimin e Shitjeve dhe Marketingut Ndërkombëtar, Universiteti Ndërkombëtar i Biznesit, Tiranë (2014-2016); Bachelor në Menaxhimin e Biznesit, Universiteti i Tiranës (2010-2014).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Proficient në analizën e tregut dhe përdorimin e softuerëve të menaxhimit të marrëdhënieve me klientët (CRM).',
    soft_skills:
      'Lidership i motivuar, aftësi të forta negociuese, dhe aftësi të larta në zgjidhjen e problemeve dhe vendimmarrje.',
    technical_skills:
      'Ekspertizë në menaxhimin e kanaleve të shitjeve, zhvillimin e strategjive të rritjes, dhe menaxhimin e marrëdhënieve me klientët.',
    hobbies:
      'Ndjekja e seminareve dhe konferencave të biznesit për të qëndruar të azhurnuar me praktikat më të fundit, vrapimi, dhe meditimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Projektit në 'InnovateIT Solutions', duke udhëhequr projekte komplekse të teknologjisë së informacionit dhe zhvillimit të softuerit që nga viti 2021. Ka koordinuar me sukses ekipet ndërdisiplinore për të përmbushur afatet dhe objektivat e projektit (2018-2021).",
    education:
      'Master në Menaxhimin e Projekteve, Universiteti i Teknologjisë së Informacionit, Tiranë (2016-2018); Bachelor në Inxhinieri Kompjuterike, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Proficient në përdorimin e softuerëve të menaxhimit të projektit si Microsoft Project dhe JIRA, si dhe metodologjitë Agile dhe Scrum.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera në komunikim dhe negociim, dhe aftësi të fortë analitike dhe organizative.',
    technical_skills:
      'Ekspertizë në planifikimin dhe ekzekutimin e projekteve, monitorimin e buxhetit, dhe menaxhimin e rreziqeve.',
    hobbies:
      'Leximi i literaturës së re në menaxhimin e projekteve, pjesëmarrja në workshop-e dhe konferenca të specializuara, dhe sportet e jashtme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Projektit në 'BuildRight Enterprises', duke menaxhuar projekte të mëdha ndërtimi dhe infrastrukture që nga viti 2022. Ka përmirësuar ndjeshëm efikasitetin e projekteve dhe komunikimin ndërmjet ekipit dhe klientëve (2019-2022).",
    education:
      'Master në Menaxhimin e Ndërtimit dhe Infrastrukturës, Fakulteti i Arkitekturës dhe Urbanistikës, Tiranë (2015-2017); Bachelor në Inxhinieri Civile, Universiteti Politeknik i Tiranës (2011-2015).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Zotërim i AutoCAD dhe Revit për projektimin dhe menaxhimin e projekteve, si dhe njohuri të metodologjive Lean në ndërtim.',
    soft_skills:
      'Aftësi të forta në udhëheqje dhe menaxhimin e konflikteve, aftësi të shkëlqyera në planifikimin dhe koordinimin e aktiviteteve të projektit.',
    technical_skills:
      'Njohuri të avancuara në menaxhimin e projekteve të ndërtimit, vlerësimin e kostove, dhe zbatimin e standardeve të sigurisë.',
    hobbies:
      'Ndërtimi i modeleve arkitektonike si hobi, eksplorimi i teknologjive të reja në ndërtim, dhe vrapimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i të Dhënave në 'DataTech Analytics', duke analizuar sete të mëdha të të dhënave për të identifikuar modele, trende dhe për të gjeneruar insight-e që ndihmojnë në marrjen e vendimeve të informuara të biznesit që nga viti 2021. Ka punuar më parë si analist i të dhënave në një startup fintech, duke kontribuar në zhvillimin e modeleve të parashikimit dhe analizës së rrezikut (2018-2021).",
    education:
      'Master në Analizën e të Dhënave dhe Inteligjencën Artificiale, Universiteti i Shkencave dhe Teknologjisë, Tiranë (2016-2018); Bachelor në Statistikë dhe Informatikë, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në Python dhe R për analizën statistikore, zotërim i SQL për menaxhimin e bazave të të dhënave, dhe aftësi të avancuara në përdorimin e Tableau dhe Power BI për vizualizimin e të dhënave.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, komunikim efikas me stakeholderët jo-teknikë, dhe aftësi të forta në zgjidhjen e problemeve.',
    technical_skills:
      'Ekspertizë në minierën e të dhënave, modelimin prediktiv, dhe analizën e të dhënave të mëdha.',
    hobbies:
      'Ndjekja e kurseve online për të mësuar mbi teknologjitë dhe metodologjitë e reja në fushën e analizës së të dhënave, leximi i librave mbi inteligjencën artificiale, dhe udhëtimet eksplorative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i të Dhënave në 'InsightCorp Solutions', duke udhëhequr ekipin e analizës së të dhënave për të mbështetur vendimmarrjen strategjike dhe optimizimin e proceseve të biznesit që nga viti 2022. Ka qenë pjesë e një agjencie kërkimore, duke përdorur analizën e të dhënave për të parashikuar tendencat e tregut dhe sjelljen e konsumatorit (2019-2022).",
    education:
      'Master në Shkencat e të Dhënave, Universiteti Ekonomik i Tiranës (2017-2019); Bachelor në Matematikë dhe Informatikë Ekonomike, Fakulteti i Shkencave të Aplikuara, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i algoritmeve të analizës së të dhënave dhe modelimit statistikor, përdorim i avancuar i softuerëve analitikë si SPSS dhe SAS.',
    soft_skills:
      'Lidership, aftësi organizative, dhe aftësi të ndërlikuara të komunikimit për të shpjeguar konceptet komplekse në mënyrë të qartë.',
    technical_skills:
      'Njohuri të thella në analizën e të dhënave për biznesin, kërkimin dhe analizën prediktive, dhe menaxhimin e projekteve të analizës së të dhënave.',
    hobbies:
      'Programimi dhe eksplorimi i bazave të të dhënave të ndryshme, vëzhgimi i trendeve teknologjike, dhe sportet e ujit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i të Dhënave në 'DataTech Analytics', duke analizuar sete të mëdha të të dhënave për të identifikuar modele, trende dhe për të gjeneruar insight-e që ndihmojnë në marrjen e vendimeve të informuara të biznesit që nga viti 2021. Ka punuar më parë si analist i të dhënave në një startup fintech, duke kontribuar në zhvillimin e modeleve të parashikimit dhe analizës së rrezikut (2018-2021).",
    education:
      'Master në Analizën e të Dhënave dhe Inteligjencën Artificiale, Universiteti i Shkencave dhe Teknologjisë, Tiranë (2016-2018); Bachelor në Statistikë dhe Informatikë, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient në Python dhe R për analizën statistikore, zotërim i SQL për menaxhimin e bazave të të dhënave, dhe aftësi të avancuara në përdorimin e Tableau dhe Power BI për vizualizimin e të dhënave.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, komunikim efikas me stakeholderët jo-teknikë, dhe aftësi të forta në zgjidhjen e problemeve.',
    technical_skills:
      'Ekspertizë në minierën e të dhënave, modelimin prediktiv, dhe analizën e të dhënave të mëdha.',
    hobbies:
      'Ndjekja e kurseve online për të mësuar mbi teknologjitë dhe metodologjitë e reja në fushën e analizës së të dhënave, leximi i librave mbi inteligjencën artificiale, dhe udhëtimet eksplorative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i të Dhënave në 'InsightCorp Solutions', duke udhëhequr ekipin e analizës së të dhënave për të mbështetur vendimmarrjen strategjike dhe optimizimin e proceseve të biznesit që nga viti 2022. Ka qenë pjesë e një agjencie kërkimore, duke përdorur analizën e të dhënave për të parashikuar tendencat e tregut dhe sjelljen e konsumatorit (2019-2022).",
    education:
      'Master në Shkencat e të Dhënave, Universiteti Ekonomik i Tiranës (2017-2019); Bachelor në Matematikë dhe Informatikë Ekonomike, Fakulteti i Shkencave të Aplikuara, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i algoritmeve të analizës së të dhënave dhe modelimit statistikor, përdorim i avancuar i softuerëve analitikë si SPSS dhe SAS.',
    soft_skills:
      'Lidership, aftësi organizative, dhe aftësi të ndërlikuara të komunikimit për të shpjeguar konceptet komplekse në mënyrë të qartë.',
    technical_skills:
      'Njohuri të thella në analizën e të dhënave për biznesin, kërkimin dhe analizën prediktive, dhe menaxhimin e projekteve të analizës së të dhënave.',
    hobbies:
      'Programimi dhe eksplorimi i bazave të të dhënave të ndryshme, vëzhgimi i trendeve teknologjike, dhe sportet e ujit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Shkencëtar i të Dhënave në 'TechInnovate Analytics', duke punuar në projekte të avancuara të analizës së të dhënave dhe mësimi i makinës për të ndihmuar kompanitë të kuptojnë modele komplekse dhe të bëjnë parashikime të sakta që nga viti 2021. Ka zhvilluar modele të mësimi të thellë për një platformë e-commerce për të përmirësuar rekomandimet e produkteve (2018-2021).",
    education:
      'Master në Shkencat e të Dhënave, Universiteti i Teknologjisë, Tiranë (2016-2018); Bachelor në Informatikë, Fakulteti i Shkencave të Informacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Proficient në Python dhe R për analiza statistikore dhe mësimi i makinës, zotërim i TensorFlow dhe PyTorch për modele të mësimi të thellë.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, komunikimi i efektshëm i rezultateve të analizave në mënyra që janë të kuptueshme për audiencat jo-teknike, dhe menaxhim i projekteve.',
    technical_skills:
      'Ekspertizë në mësimin e makinës, minierën e të dhënave, analizën prediktive, dhe vizualizimin e të dhënave.',
    hobbies:
      'Eksplorimi i dataseteve të reja, ndjekja e kurseve të avancuara në mësimin e makinës dhe inteligjencën artificiale, dhe udhëtimet teknologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Data Science në 'TechInnovate Analytics', duke punuar në projekte të avancuara të analizës së të dhënave dhe mësimi i makinës për të ndihmuar kompanitë të kuptojnë modele komplekse dhe të bëjnë parashikime të sakta që nga viti 2021. Ka zhvilluar modele të mësimi të thellë për një platformë e-commerce për të përmirësuar rekomandimet e produkteve (2018-2021).",
    education:
      'Master në Shkencat e të Dhënave, Universiteti i Teknologjisë, Tiranë (2016-2018); Bachelor në Informatikë, Fakulteti i Shkencave të Informacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Proficient në Python dhe R për analiza statistikore dhe mësimi i makinës, zotërim i TensorFlow dhe PyTorch për modele të mësimi të thellë.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, komunikimi i efektshëm i rezultateve të analizave në mënyra që janë të kuptueshme për audiencat jo-teknike, dhe menaxhim i projekteve.',
    technical_skills:
      'Ekspertizë në mësimin e makinës, minierën e të dhënave, analizën prediktive, dhe vizualizimin e të dhënave.',
    hobbies:
      'Eksplorimi i dataseteve të reja, ndjekja e kurseve të avancuara në mësimin e makinës dhe inteligjencën artificiale, dhe udhëtimet teknologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i të Dhënave  në 'GlobalData Solutions', duke ofruar zgjidhje të bazuar në të dhëna për të ndihmuar bizneset të marrin vendime të informuara dhe të optimizojnë operacionet e tyre që nga viti 2022. Ka punuar në zhvillimin e algoritmeve për analizën e sentimentit dhe parashikimin e trendeve të tregut (2019-2022).",
    education:
      'Master në Inteligjencën Artificiale dhe Shkencën e të Dhënave, Fakulteti i Inxhinierisë dhe Teknologjisë, Universiteti i Tiranës (2017-2019); Bachelor në Matematikë dhe Informatikë, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Zotërim i Python, Java, SQL për modelimin e të dhënave, dhe përdorim i mjeteve të analizës së të dhënave si Hadoop dhe Spark.',
    soft_skills:
      'Ndërtimi i marrëdhënieve të forta me klientët, aftësi të shkëlqyera organizative, dhe aftësi të forta në zgjidhjen e problemeve të ndërlikuara.',
    technical_skills:
      'Njohuri të thella në mësimin e makinës, analizën e të dhënave të mëdha, dhe të dhënat e strukturuara dhe të pastrukturuara.',
    hobbies:
      'Programimi dhe ndërtimi i projekteve personale në fushën e inteligjencës artificiale, leximi i publikimeve shkencore në fushën e të dhënave, dhe shahu.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Database Administrator at 'DataSolutions Inc.', overseeing database architecture and security measures, optimizing database operations for high availability and performance since 2021. Prior roles include Database Manager at 'TechInnovate', where led a team in migrating and managing cloud-based database solutions (2018-2021). Database Consultant for 'Global Finance Corp', provided expertise in database scalability and implemented disaster recovery strategies, significantly reducing data retrieval times and ensuring data integrity (2015-2018).",

    education:
      'Master in Information Systems Management, specializing in Database Administration, University of Technology, Tirana (2013-2015); Bachelor in Computer Science, University of Tirana, Faculty of Natural Sciences (2009-2013).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Expertise in SQL Server, Oracle Database, and MySQL; proficient in cloud computing platforms like AWS and Azure.',
    soft_skills:
      'Strong leadership and team management skills, excellent problem-solving capabilities, and effective communication.',
    technical_skills:
      'Advanced knowledge in database design, performance tuning, data security, and backup & recovery procedures.',
    hobbies:
      'Exploring new database technologies, participating in tech meetups and conferences, and coding personal projects.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Database Administrator at 'SecureNet Solutions', responsible for ensuring the security and efficiency of database systems, leading critical data migration projects with zero downtime since 2022. Previously served as a Database Architect at 'InnovateTech', enhancing database designs and implementing robust data warehousing solutions (2019-2022). Database Specialist at 'FinanceTech Analytics', specialized in optimizing financial data analysis and reporting processes, improving data accuracy and accessibility for analytics purposes (2016-2019).",

    education:
      'Master in Database Technology and Management, Faculty of Information Technology, Polytechnic University of Tirana (2014-2016); Bachelor in Information Technology, Faculty of Informatics, University of Tirana (2010-2014).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in NoSQL databases like MongoDB and Cassandra; skilled in data replication and synchronization techniques.',
    soft_skills:
      'Exceptional analytical thinking, adept at cross-functional team collaboration, and skilled in strategic planning.',
    technical_skills:
      'Expertise in data modeling, query optimization, and the implementation of data governance practices.',
    hobbies:
      'Contributing to open source database projects, blogging about database innovations, and digital photography.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Front End Developer at 'CreativeWeb Solutions', leading front-end team in developing responsive and user-friendly web applications using React and Vue.js since 2021. Previously, Front End Developer at 'Tech Innovate', focused on improving UI/UX designs and implementing accessibility standards (2018-2021). UI/UX Designer at 'DesignPro Studio', where contributed to the design and development of engaging user interfaces for web and mobile applications, significantly improving user satisfaction and engagement rates (2015-2018).",

    education:
      'Master in Computer Science, specializing in Web Development, University of Technology, Tirana (2013-2015); Bachelor in Information Technology, Faculty of Natural Sciences, University of Tirana (2009-2013).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Expertise in HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js; proficient with Sass, Webpack, and Git.',
    soft_skills:
      'Strong project management and team leadership skills, excellent problem-solving capabilities, and effective communication.',
    technical_skills:
      'Advanced knowledge in front-end architecture, performance optimization, cross-browser compatibility, and responsive design.',
    hobbies:
      'Contributing to open source projects, staying up-to-date with the latest web technologies, and photography.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Front End Developer at 'NextGen Web Agency', specializing in developing high-performance web applications with Angular and TypeScript since 2022. Prior role as a Senior Web Developer at 'Digital Innovations', where played a key role in the architectural decisions and implementation of SPA and PWA technologies (2019-2022). Web Developer at 'Online Media Solutions', focused on creating dynamic and interactive websites using JavaScript and jQuery, leading to a 40% increase in client engagement (2016-2019).",

    education:
      'Master in Software Engineering, with a focus on Front End Development, Polytechnic University of Tirana (2014-2016); Bachelor in Computer Engineering, University of Tirana (2010-2014).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in Angular, TypeScript, and modern JavaScript frameworks; experienced with RESTful services and GraphQL.',
    soft_skills:
      'Excellent in strategic thinking and creative problem solving, adept at mentoring junior developers, and strong in client relations.',
    technical_skills:
      'Expertise in front-end testing frameworks, code optimization for scalability and speed, and implementing CI/CD pipelines.',
    hobbies:
      'Exploring new frameworks and libraries in the front-end ecosystem, blogging about tech trends, and mountain biking.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Backend Developer at 'BackendSolutions Inc.', specializing in developing scalable and secure server-side applications using Node.js and Python since 2021. Prior to this, served as a Software Engineer at 'CodeInnovate', focusing on API development and database management (2018-2021), System Administrator at 'TechNet Corp', responsible for maintaining and optimizing server infrastructures and ensuring high availability and security (2015-2018).",
    education:
      'Master in Software Engineering, focusing on Cloud Computing and Distributed Systems, University of Technology, Tirana (2016-2018); Bachelor in Computer Science, Faculty of Information Technology, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Expertise in Node.js, Python, Docker, Kubernetes; proficient in RESTful API design and microservices architecture.',
    soft_skills:
      'Strong leadership and project management skills, excellent problem-solving abilities, and effective communication with technical and non-technical stakeholders.',
    technical_skills:
      'Advanced knowledge in backend development, cloud infrastructure management, and database optimization.',
    hobbies:
      'Contributing to open-source projects, engaging in cloud computing communities, and trail running.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Backend Developer at 'GlobalDev Hub', driving the development of high-performance backend systems with Java and Spring Boot since 2022. Previously, Backend Developer at 'InnovateTech Solutions', where implemented several critical microservices and worked on enhancing system security (2019-2022) Software Developer at 'DynamicCode Labs', engaged in developing enterprise-level applications and contributing to the architectural design and development process (2016-2019).",
    education:
      'Master in Computer Science, specializing in Data Security and Software Architecture, Polytechnic University of Tirana (2017-2019); Bachelor in Information Systems, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in Java, Spring Framework, microservices with Docker, and secure coding practices.',
    soft_skills:
      'Excellent in analytical thinking, teamwork and collaboration, with strong capabilities in delivering under pressure.',
    technical_skills:
      'Expertise in backend system architecture, performance tuning, and secure software development lifecycle (SSDLC).',
    hobbies:
      'Participating in coding hackathons, exploring new backend technologies, and mountain biking.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Manual Tester at 'QualityAssureTech', leading manual testing efforts for web and mobile applications, ensuring functionality, usability, and consistency across platforms since 2021. Prior roles include QA Analyst at 'DevSolutions', where focused on test case development and execution, defect tracking, and reporting (2018-2021), Test Engineer at 'AppInnovate Studios', responsible for manual test execution, writing detailed bug reports, and working closely with the development team to reproduce issues (2015-2018).",
    education:
      'Master in Quality Assurance and Software Testing, University of Technology, Tirana (2016-2018); Bachelor in Computer Science, Faculty of Information Technology, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient in test management tools like JIRA and TestRail; experienced with SQL for database testing and basic automation testing concepts using Selenium.',
    soft_skills:
      'Strong analytical and problem-solving skills, excellent attention to detail, and effective communication and teamwork abilities.',
    technical_skills:
      'Expertise in manual testing methodologies, test planning, and execution, as well as knowledge in SDLC and STLC.',
    hobbies:
      'Exploring new software testing tools and techniques, participating in QA forums and workshops, and reading tech blogs.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Manual Tester at 'TechQuality Solutions', specializing in user experience testing and functional testing of enterprise software applications since 2022. Previously, QA Specialist at 'WebTech Co.', contributing to the development of test strategies, performing extensive manual testing, and ensuring compliance with industry standards (2019-2022), Quality Assurance Technician at 'MobileDev Inc.', conducting thorough manual testing on mobile applications, including usability, compatibility, and security testing (2016-2019).",
    education:
      'Master in Software Engineering, with a specialization in Software Quality Assurance, Polytechnic University of Tirana (2017-2019); Bachelor in Information Systems, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Skilled in using version control systems like Git, familiar with Agile and Waterfall methodologies, and basic understanding of automation frameworks.',
    soft_skills:
      'Detail-oriented with strong organizational skills, adept at working under pressure, and skilled in verbal and written communication.',
    technical_skills:
      'In-depth knowledge of manual testing processes, defect life cycle management, and experience with cross-platform testing.',
    hobbies:
      'Keeping up with the latest trends in software testing, coding small projects to understand developer challenges, and outdoor sports.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Automation Tester at 'AutoTest Solutions', leading automation testing initiatives for complex web and mobile applications using Selenium and Appium since 2021. Prior role as an Automation Engineer at 'DevOpsTech', where developed and maintained CI/CD pipelines for automated testing (2018-2021), QA Automation Specialist at 'SoftwareQuality Inc.', implemented automation frameworks from scratch and integrated testing processes into the software development lifecycle, significantly reducing bugs and improving release cycles (2015-2018).",
    education:
      'Master in Computer Science, with a focus on Software Testing and Quality Assurance, Polytechnic University of Tirana (2016-2018); Bachelor in Information Technology, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Expertise in automation testing tools such as Selenium WebDriver, Appium, and Jenkins; proficient in programming languages like Python and Java.',
    soft_skills:
      'Strong analytical skills, excellent problem-solving capabilities, and effective teamwork and communication skills.',
    technical_skills:
      'Advanced knowledge in building and maintaining automation frameworks, test script development, and CI/CD integration.',
    hobbies:
      'Exploring new automation technologies, participating in coding challenges, and developing personal projects with the latest testing tools.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Automation Testing Lead at 'NextGen Testing', overseeing the implementation of automation strategies across projects, enhancing testing efficiency and accuracy with tools like Cypress and TestComplete since 2022. Previously, QA Automation Developer at 'InnoTech Labs', focused on creating and executing automated tests for APIs and web services (2019-2022), Test Automation Engineer at 'CodeCrafters', specialized in script development for automated performance and load testing, contributing to the optimization of application performance (2016-2019).",
    education:
      'Master in Software Engineering, specializing in Automation Testing and DevOps Practices, University of Technology, Tirana (2017-2019); Bachelor in Computer Engineering, Polytechnic University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in modern test automation frameworks like Cypress, TestComplete, and Postman for API testing; skilled in using Git for version control.',
    soft_skills:
      'Leadership in managing testing teams, strong in strategic planning and execution, and adept at agile project management.',
    technical_skills:
      'In-depth understanding of automated testing for web and mobile, performance testing, and integrating testing into CI/CD pipelines.',
    hobbies:
      'Staying ahead of tech trends in test automation, building tools to automate daily tasks, and outdoor running.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Automation Test Engineer at 'FinTech Solutions', responsible for developing and executing automation scripts for financial applications, enhancing testing efficiency and coverage since 2021. Previously, served as Automation QA at 'E-Commerce Innovate', focusing on automating regression tests and improving CI/CD processes (2018-2021), QA Automation Analyst at 'HealthTech Systems', designed and implemented automation frameworks for healthcare applications, contributing to higher test accuracy and faster release cycles (2015-2018).",

    education:
      'Master in Information Technology with a specialization in Software Testing, University of Tirana (2016-2018); Bachelor in Software Engineering, Polytechnic University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Expertise in Selenium, Cucumber for BDD, Jenkins for CI/CD, and proficient in programming with Java and Python for test automation.',
    soft_skills:
      'Excellent problem-solving skills, strong attention to detail, and ability to work effectively in team environments.',
    technical_skills:
      'Advanced knowledge in test automation strategies, framework design, and maintenance, as well as performance and security testing.',
    hobbies:
      'Keeping up with the latest trends in automation testing, participating in tech meetups, and developing automation tools.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Automation Tester at 'SoftwareQA Hub', overseeing the automation testing department and implementing best practices in test automation for web and API testing since 2022. Prior role as Senior QA Engineer at 'Tech Solutions Provider', where led automation initiatives and mentored junior testers (2019-2022), Automation Tester at 'MobileApp Innovations', focused on automating tests for mobile applications using Appium and enhancing testing frameworks for agility and efficiency (2016-2019).",

    education:
      'Master in Computer Science, focusing on Data Science and Automation, University of Technology, Tirana (2017-2019); Bachelor in Computer Science, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in test automation tools like Appium for mobile testing, Postman for API testing, and skilled in using Python and JavaScript.',
    soft_skills:
      'Leadership and team management, excellent communication skills, and adept at agile methodologies.',
    technical_skills:
      'In-depth knowledge of creating and maintaining robust automation frameworks, integration with CI/CD pipelines, and understanding of software development and testing lifecycle.',
    hobbies:
      'Exploring AI and machine learning in test automation, blogging about technological advancements, and cycling.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Business Analyst at 'Strategic Insights Ltd.', leading business process improvement projects and data analysis to drive strategic decisions since 2021. Prior roles include Business Analyst at 'MarketTrend Solutions', where conducted market analysis and customer segmentation to inform product development strategies (2018-2021), Data Analyst at 'ConsumerAnalytics Co.', responsible for analyzing consumer behavior and sales data to optimize marketing campaigns and product placement (2015-2018).",
    education:
      'Master in Business Administration with a specialization in Data Analysis, University of Economics, Tirana (2016-2018); Bachelor in Business Informatics, Faculty of Economics, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Expertise in data analysis software such as SAS, SPSS, and proficient in Excel; experienced with BI tools like Tableau and Power BI.',
    soft_skills:
      'Strong analytical thinking, excellent problem-solving skills, effective communication and presentation abilities.',
    technical_skills:
      'Advanced knowledge in business process modeling, requirement analysis, and project management methodologies.',
    hobbies:
      'Following the latest trends in business strategy and data analysis, participating in professional workshops, and traveling.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Business Analysis Manager at 'InnovativeTech Enterprises', overseeing the analysis and implementation of technology solutions to improve business operations since 2022. Previously, Business Process Analyst at 'TechSolutions Inc.', enhancing operational efficiency through the analysis and redesign of business processes (2019-2022) Project Coordinator at 'Digital Ventures', involved in coordinating projects across departments to ensure alignment with business goals and objectives (2016-2019).",
    education:
      'Master in Management Information Systems, focusing on Business Analysis and IT Solutions, Polytechnic University of Tirana (2017-2019); Bachelor in Economics, specializing in Business Administration, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Proficient in project management tools like Microsoft Project and Asana; skilled in CRM systems and ERP software.',
    soft_skills:
      'Leadership and team management, strategic planning and execution, strong negotiation and stakeholder management skills.',
    technical_skills:
      'In-depth understanding of business analysis techniques, IT project management, and system development life cycle.',
    hobbies:
      'Exploring new technologies and their application in business, reading about innovative management practices, and hiking.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Product Owner at 'AgileSolutions Inc.', driving the vision and roadmap for innovative software products, aligning product strategies with market needs since 2021. Previously, Associate Product Manager at 'Tech Innovations Ltd.', where managed product lifecycle and collaborated with cross-functional teams to deliver high-quality software solutions (2018-2021), Business Analyst at 'DigitalCorp', involved in requirement gathering, stakeholder management, and providing insights for product development based on market analysis (2015-2018).",
    education:
      'Master in Business Administration with a focus on Product Management, University of Economics, Tirana (2016-2018); Bachelor in Information Technology, Faculty of Information Sciences, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Proficient in Agile methodologies, Scrum, and tools like JIRA and Confluence; experienced with user story mapping and backlog management.',
    soft_skills:
      'Strong leadership and communication skills, excellent problem-solving and decision-making capabilities, and adept at stakeholder engagement.',
    technical_skills:
      'Expertise in product lifecycle management, market research and analysis, and UX/UI principles.',
    hobbies:
      'Staying up-to-date with the latest tech trends and product management practices, attending tech meetups, and photography.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Senior Product Owner at 'NextGen Software', overseeing the development and market launch of cutting-edge technology products, fostering innovation and customer satisfaction since 2022. Prior role as Product Analyst at 'Enterprise Solutions', enhancing product features and functionalities based on customer feedback and competitive analysis (2019-2022),Project Manager at 'StartUp Tech', leading agile projects and ensuring the timely delivery of software products by coordinating with development teams and stakeholders (2016-2019).",
    education:
      'Master in Technology Management, focusing on Innovation and Product Development, Polytechnic University of Tirana (2017-2019); Bachelor in Computer Engineering, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Skilled in product management software, including Aha! and ProdPad; proficient in data analysis tools for product metrics.',
    soft_skills:
      'Innovative thinker with strong organizational and project management skills, capable of inspiring teams to achieve product goals.',
    technical_skills:
      'Deep understanding of software development processes, requirements engineering, and user experience design.',
    hobbies:
      'Exploring emerging technologies, participating in innovation workshops and hackathons, and long-distance running.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Music Producer at 'SoundWave Studios', leading music production and sound engineering projects for a diverse portfolio of artists and genres since 2021. Previously, Sound Engineer at 'Harmony Records', where contributed to recording, mixing, and mastering tracks for award-winning albums (2018-2021), Assistant Producer at 'BeatCraft Productions', involved in arranging, editing, and producing music tracks, collaborating closely with artists to develop their sound (2015-2018).",
    education:
      'Master in Music Production and Sound Design, University of Arts, Tirana (2016-2018); Bachelor in Audio Engineering, Faculty of Music Technology, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Expertise in digital audio workstations (DAWs) like Ableton Live, Pro Tools, and Logic Pro; proficient in MIDI programming and sound synthesis.',
    soft_skills:
      'Strong creative vision, excellent communication and collaboration skills, and a keen ear for musical detail.',
    technical_skills:
      'Advanced knowledge in audio mixing and mastering, sound design, and music theory.',
    hobbies:
      'Exploring new music technologies, attending live music performances, and composing original music.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lead Music Producer at 'ElectroTunes Studio', specializing in electronic music production and remixing, driving the studio's reputation for innovative sounds since 2022. Prior role as a Freelance Music Producer, working with emerging artists to define their musical identity and produce breakthrough tracks (2019-2022), Music and Sound Designer at 'VirtualReal Games', creating immersive audio experiences for video games, enhancing gameplay and player engagement (2016-2019).",
    education:
      'Master in Sound Engineering and Music Technology, Polytechnic University of Tirana (2017-2019); Bachelor in Musicology, University of Arts, Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Skilled in FL Studio, Cubase, and Reason; experienced in virtual instrument programming and 3D audio production.',
    soft_skills:
      'Innovative and adaptable, with strong project management abilities and a passion for music innovation.',
    technical_skills:
      'Expertise in electronic music production, audio editing, and spatial sound design for virtual reality applications.',
    hobbies:
      'DJing at local events, producing electronic music tracks, and experimenting with sound design techniques.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "HR Manager at 'PeopleFirst Corp.', overseeing all HR operations, including talent acquisition, employee engagement, and performance management since 2021. Previously, Senior HR Specialist at 'InnovateHR Solutions', where led recruitment campaigns and developed training programs for staff development (2018-2021),HR Coordinator at 'GlobalTech Inc.', responsible for coordinating HR activities, managing employee records, and supporting the implementation of HR policies (2015-2018).",
    education:
      'Master in Human Resource Management, Faculty of Business, University of Tirana (2016-2018); Bachelor in Psychology, Faculty of Social Sciences, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient in HRIS systems like SAP HR and Oracle PeopleSoft; experienced with LinkedIn Recruiter and other talent acquisition platforms.',
    soft_skills:
      'Strong leadership and interpersonal skills, excellent communication and problem-solving abilities, and adept at conflict resolution.',
    technical_skills:
      'Expertise in labor law compliance, employee relations, and performance evaluation systems.',
    hobbies:
      'Attending HR workshops and seminars, reading HR-related literature, and volunteering in community outreach programs.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "HR Director at 'NextLevel Enterprises', driving strategic HR initiatives to align with business goals, enhancing organizational culture, and workforce planning since 2022. Prior role as Talent Acquisition Manager at 'CareerGrowth Co.', focusing on attracting top talent and optimizing the recruitment process (2019-2022),Employee Relations Specialist at 'TechStartups Hub', managing employee grievances, facilitating conflict resolution, and ensuring a positive work environment (2016-2019).",
    education:
      'Master in Organizational Psychology, University of Social Sciences, Tirana (2017-2019); Bachelor in Business Administration with a focus on Human Resources, Polytechnic University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Skilled in performance management software and employee engagement tools; proficient in data analysis for HR metrics.',
    soft_skills:
      'Effective team builder, strategic thinker, and communicator with a strong emphasis on organizational',
    technical_skills:
      'Expertise in electronic music production, audio editing, and spatial sound design for virtual reality applications.',
    hobbies:
      'DJing at local events, producing electronic music tracks, and experimenting with sound design techniques.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Burimeve Njerëzore në 'Korporata PeopleFirst', duke mbikqyrur të gjitha operacionet e burimeve njerëzore, përfshirë rekrutimin e talenteve, angazhimin e punonjësve dhe menaxhimin e performancës që nga viti 2021. Më parë, Specialist i Lartë i Burimeve Njerëzore në 'Zgjidhjet Inovative HR', ku udhëhoqi fushata rekrutimi dhe zhvilloi programe trajnimi për zhvillimin e stafit (2018-2021), Koordinator i Burimeve Njerëzore në 'GlobalTech Inc.', përgjegjës për koordinimin e aktiviteteve të HR, menaxhimin e dosjeve të punonjësve dhe mbështetjen e zbatimit të politikave të HR (2015-2018).",
    education:
      'Master në Menaxhimin e Burimeve Njerëzore, Fakulteti i Biznesit, Universiteti i Tiranës (2016-2018); Bachelor në Psikologji, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në sistemet HRIS si SAP HR dhe Oracle PeopleSoft; i përvojshëm me LinkedIn Recruiter dhe platforma të tjera të rekrutimit të talentit.',
    soft_skills:
      'Lidership i fortë dhe aftësi ndërpërsonale, komunikim dhe zgjidhje problemesh të shkëlqyera, dhe i aftë në zgjidhjen e konflikteve.',
    technical_skills:
      'Ekspertizë në përputhshmëri me ligjin e punës, marrëdhëniet me punonjësit dhe sistemet e vlerësimit të performancës.',
    hobbies:
      'Pjesëmarrja në punëtori dhe seminare të HR, leximi i literaturës së lidhur me HR, dhe vullnetarizmi në programe të ndryshme komunitare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Burimeve Njerëzore në 'Korporata PeopleFirst', duke mbikqyrur të gjitha operacionet e burimeve njerëzore, përfshirë rekrutimin e talenteve, angazhimin e punonjësve dhe menaxhimin e performancës që nga viti 2021. Më parë, Specialist i Lartë i Burimeve Njerëzore në 'Zgjidhjet Inovative HR', ku udhëhoqi fushata rekrutimi dhe zhvilloi programe trajnimi për zhvillimin e stafit (2018-2021),Koordinator i Burimeve Njerëzore në 'GlobalTech Inc.', përgjegjës për koordinimin e aktiviteteve të HR, menaxhimin e dosjeve të punonjësve dhe mbështetjen e zbatimit të politikave të HR (2015-2018).",
    education:
      'Master në Menaxhimin e Burimeve Njerëzore, Fakulteti i Biznesit, Universiteti i Tiranës (2016-2018); Bachelor në Psikologji, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në sistemet HRIS si SAP HR dhe Oracle PeopleSoft; i përvojshëm me LinkedIn Recruiter dhe platforma të tjera të rekrutimit të talentit.',
    soft_skills:
      'Lidership i fortë dhe aftësi ndërpërsonale, komunikim dhe zgjidhje problemesh të shkëlqyera, dhe i aftë në zgjidhjen e konflikteve.',
    technical_skills:
      'Ekspertizë në përputhshmëri me ligjin e punës, marrëdhëniet me punonjësit dhe sistemet e vlerësimit të performancës.',
    hobbies:
      'Pjesëmarrja në punëtori dhe seminare të HR, leximi i literaturës së lidhur me HR, dhe vullnetarizmi në programe të ndryshme komunitare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Moderator and Journalist at 'National News Network', leading discussions on current events and producing investigative reports on political and social issues since 2021. Previously, Field Reporter at 'City Daily', where covered local news and conducted interviews (2018-2021),Content Writer at 'Online Media Platform', responsible for creating engaging articles and content on various topics, enhancing reader engagement (2015-2018).",
    education:
      'Master in Journalism and Media Communication, Faculty of Communication Sciences, University of Tirana (2016-2018); Bachelor in Political Science and Public Relations, Faculty of Social Sciences, University of Tirana (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Proficient in digital content management systems, social media platforms, and video editing software.',
    soft_skills:
      'Strong communication and interviewing skills, excellent writing and storytelling abilities, and adept at public speaking and moderation.',
    technical_skills:
      'Expertise in news reporting, investigative journalism, and content creation.',
    hobbies:
      'Following current events and political developments, participating in journalism workshops, and documentary filmmaking.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Moderator for 'PrimeTime Debate Show', orchestrating live discussions on key national issues and moderating debates between public figures since 2022. Prior role as Investigative Journalist at 'Investigations Unit', uncovering significant social and economic stories (2019-2022),News Editor at 'Morning News Service', curating daily news content, editing reports, and leading the morning news segment production (2016-2019).",
    education:
      'Master in Media Studies and Communication Strategy, Polytechnic University of Tirana (2017-2019); Bachelor in Journalism, Faculty of History and Philology, University of Tirana (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Skilled in advanced multimedia production tools, SEO strategies for digital content, and analytics platforms.',
    soft_skills:
      'Effective at team leadership, creative problem-solving, and maintaining high journalistic standards under pressure.',
    technical_skills:
      'Deep understanding of media ethics, editorial processes, and multimedia storytelling.',
    hobbies:
      'Exploring new media technologies, writing opinion pieces on media trends, and outdoor photography.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Moderator dhe Gazetar në 'Rrjeti Kombëtar i Lajmeve', udhëheq diskutimet mbi ngjarjet aktuale dhe prodhon raporte hetimore mbi çështjet politike dhe sociale që nga viti 2021. Më parë, Reporter në Terren në 'Ditari i Qytetit', ku mbuloi lajmet lokale dhe realizoi intervista (2018-2021), Shkrues përmbajtjeje në 'Platforma Online e Medias', përgjegjës për krijimin e artikujve angazhues dhe përmbajtjes në tema të ndryshme, duke rritur angazhimin e lexuesve (2015-2018).",
    education:
      'Master në Gazetari dhe Komunikim Media, Fakulteti i Shkencave të Komunikimit, Universiteti i Tiranës (2016-2018); Bachelor në Shkencat Politike dhe Marrëdhëniet Publike, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në sistemet e menaxhimit të përmbajtjes digjitale, platforma të rrjeteve sociale, dhe softuerët e redaktimit të videos.',
    soft_skills:
      'Aftësi të forta në komunikim dhe intervistim, shkrim dhe tregim të shkëlqyera, dhe i aftë në folje publike dhe moderim.',
    technical_skills:
      'Ekspertizë në raportimin e lajmeve, gazetari hetimore, dhe krijimin e përmbajtjes.',
    hobbies:
      'Ndjekja e ngjarjeve aktuale dhe zhvillimeve politike, pjesëmarrja në punëtori gazetarie, dhe prodhimi i dokumentarëve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Moderator për 'Shfaqja e Debatit PrimeTime', orkestron diskutime live mbi çështjet kyçe kombëtare dhe moderon debatet mes figurave publike që nga viti 2022. Më parë, si Gazetar Hetimor në 'Njësia e Hetimeve', zbulon histori të rëndësishme sociale dhe ekonomike (2019-2022), Redaktor Lajmesh në 'Shërbimi i Lajmeve të Mëngjesit', kuron përmbajtjen e lajmeve ditore, redakton raportet dhe udhëheq prodhimin e segmentit të lajmeve të mëngjesit (2016-2019).",
    education:
      'Master në Studime Mediale dhe Strategji Komunikimi, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Gazetari, Fakulteti i Historisë dhe Filologjisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në mjete të avancuara të prodhimit multimediale, strategjitë SEO për përmbajtjen digjitale, dhe platforma analitike.',
    soft_skills:
      'Efektiv në ndërtimin e ekipeve, zgjidhje kreative të problemeve, dhe mbajtjen e standardeve të larta gazetareske nën presion.',
    technical_skills:
      'Njohuri të thella në etikën mediale, proceset redaktoriale, dhe tregimin multimediale.',
    hobbies:
      'Eksplorimi i teknologjive të reja mediale, shkrimi i opinioneve mbi trendet e medias, dhe fotografia në natyrë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Financier Personal në 'WealthManagement Solutions', duke ofruar këshilla financiare dhe plane investimi për individë dhe familje që nga viti 2021. Më parë, Analist Financiar në 'CapitalInvest Group', ku realizoi analiza të tregut dhe rekomandoi strategji investimi (2018-2021), Menaxher Portofoli në 'SecureSavings Bank', përgjegjës për menaxhimin e portofolive të investimeve dhe këshillimin e klientëve për mundësitë e kursimit dhe investimit (2015-2018).",
    education:
      'Master në Menaxhim Financiar, Fakulteti i Ekonomisë, Universiteti i Tiranës (2016-2018); Bachelor në Financë dhe Bankë, Fakulteti i Biznesit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve financiarë si SAP dhe Oracle Financials; përvojë me platforma të tregtimit online dhe analiza të të dhënave financiare.',
    soft_skills:
      'Aftësi të forta në analizë dhe zgjidhje problemesh, komunikim efektiv me klientët, dhe aftësi të shkëlqyera në menaxhimin e kohës.',
    technical_skills:
      'Ekspertizë në planifikimin financiar personal, analizën e investimeve dhe vlerësimin e rrezikut financiar.',
    hobbies:
      'Ndjekja e trendeve të reja në tregjet financiare, leximi i literaturës në fushën e financave, dhe udhëtimet për të zgjeruar horizontet kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Këshilltar Financiar në 'FutureFinance Advisors', duke ndihmuar klientët të arrijnë qëllimet e tyre financiare përmes planeve të personalizuara të investimeve dhe menaxhimit të pasurisë që nga viti 2022. Më parë, Specialist i Planifikimit Financiar në 'MoneySmart Consulting', ku ofroi këshilla për kursimet, pensionet dhe sigurimet (2019-2022), Analist i Rrezikut Financiar në 'InvestRisk Analysis', përgjegjës për vlerësimin e rrezikut të portofolive të investimeve dhe zhvillimin e strategjive për minimizimin e rrezikut (2016-2019).",
    education:
      'Master në Analizë dhe Menaxhim Rreziku, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Ekonomi, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me mjete analitike financiare dhe modele vlerësimi rreziku; i njohur me softuerët e menaxhimit të portofolit dhe analizës së investimeve.',
    soft_skills:
      'Aftësi të shkëlqyera në vendimmarrje, analizë të detajuar financiare, dhe komunikim të qartë me klientët për të shpjeguar konceptet financiare.',
    technical_skills:
      'Njohuri të thella në menaxhimin e rrezikut financiar, planifikimin financiar dhe strategjitë e investimeve.',
    hobbies:
      'Investimi në tregjet financiare si hobi, marrja pjesë në konferenca financiare, dhe sportet e ujit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Riskut në 'Banka ProCredit', duke udhëhequr analizën dhe menaxhimin e riskut të kreditit, tregut dhe operacional që nga viti 2021. Më parë, Specialist i Riskut të Kreditit në 'Banka Kombëtare Tregtare', ku përgatiti vlerësime të riskut dhe raporte për komitetin e riskut (2018-2021), Analist i Riskut në 'Banka e Re e Investimeve', përgjegjës për zhvillimin e modeleve të riskut dhe mbikëqyrjen e portofolit të investimeve për të identifikuar ekspozimet e rrezikut (2015-2018).",
    education:
      'Master në Financë dhe Bankë, me specializim në Menaxhimin e Riskut, Universiteti i Tiranës (2016-2018); Bachelor në Ekonomi, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së riskut si SAS dhe SPSS; përvojë me sistemet e informacionit bankar dhe bazat e të dhënave.',
    soft_skills:
      'Aftësi të forta analitike dhe në zgjidhjen e problemeve, komunikim efikas me departamentet e ndryshme, dhe aftësi në menaxhimin e ekipit.',
    technical_skills:
      'Ekspertizë në vlerësimin e riskut financiar, analizën statistikore dhe modele të riskut të kreditit dhe tregut.',
    hobbies:
      'Ndjekja e zhvillimeve në fushën e financave dhe riskut, leximi i literaturës së specializuar në menaxhimin e riskut, dhe udhëtimet eksplorative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Drejtor i Departamentit të Riskut në 'Banka e Sigurisë', duke implementuar strategji të menaxhimit të riskut dhe monitoruar zbatimin e politikave të riskut që nga viti 2022. Më parë, Menaxher i Riskut Operacional në 'Banka Financiare Internacionale', ku siguroi zbatimin e kornizave të riskut dhe trajnimeve për stafin (2019-2022), Konsulent i Riskut në 'RiskAdvisory Services', ofroi këshilla për menaxhimin e riskut dhe zhvillimin e politikave për klientët e bankave dhe institucioneve financiare (2016-2019).",
    education:
      'Master në Menaxhimin e Riskut dhe Sigurime, Fakulteti i Biznesit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Menaxhim dhe Kontabilitet, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me mjete të menaxhimit të riskut dhe analizës së të dhënave; i njohur me programet e menaxhimit të projekteve dhe prezantimeve.',
    soft_skills:
      'Lidership i qëndrueshëm, aftësi të shkëlqyera organizative, dhe aftësi të komunikimit për të ndërtuar marrëdhënie të mira me palët e interesit.',
    technical_skills:
      'Njohuri të thella në kornizat e menaxhimit të riskut, analizën e riskut operacional, dhe strategjitë e zvogëlimit të riskut.',
    hobbies:
      'Ndjekja e zhvillimeve në fushën e financave dhe riskut, leximi i literaturës së specializuar në menaxhimin e riskut, dhe udhëtimet eksplorative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Oficer Policisë në 'Drejtoria e Policisë Qytetare', duke mbikëqyrur patrullimet dhe hetimet në zonat urbane për të siguruar rendin dhe sigurinë që nga viti 2021. Më parë, Hetues në 'Njësia e Krimeve të Rënda', ku mori pjesë në hetime të rëndësishme dhe zbardhjen e rasteve të komplikuara kriminale (2018-2021), Specialist i Sigurisë në 'Agjencia Kombëtare e Sigurisë', përgjegjës për planifikimin dhe zbatimin e strategjive të sigurisë për mbrojtjen e infrastrukturave kritike (2015-2018).",
    education:
      'Master në Shkenca Policiale dhe Siguri Publike, Akademia e Sigurisë, Tiranë (2016-2018); Bachelor në Drejtësi, Fakulteti i Drejtësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të informacionit policor dhe softuerëve të analizës kriminale; përvojë me teknologjitë e monitorimit dhe survejimit.',
    soft_skills:
      'Aftësi të forta në udhëheqje dhe menaxhim të situatave të tensionuara, komunikim efikas me komunitetin dhe bashkëpunim me agjenci të tjera.',
    technical_skills:
      'Ekspertizë në hetimin e krimeve, menaxhimin e situatave të emergjencës dhe taktikat operative policore.',
    hobbies:
      'Ndjekja e kurseve të vazhdueshme të trajnimit në fushën e sigurisë dhe policisë, sportet e kontaktit dhe aktivitetet në natyrë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Komandant i Njësisë Speciale në 'Forcat e Ndërhyrjes së Shpejtë', duke udhëhequr operacionet për menaxhimin e krizave dhe situatave të emergjencës që nga viti 2022. Më parë, Oficer i Zbatimit të Ligjit në 'Sektori i Patrullës Rrugore', ku siguroi zbatimin e rregullave të qarkullimit dhe sigurinë rrugore (2019-2022), Instruktor në 'Qendra e Trajnimit Policor', ofroi trajnime të specializuara për oficerët e rinj në fushat e taktikave operative, hetimit dhe parandalimit të krimit (2016-2019).",
    education:
      'Master në Menaxhimin e Krizave dhe Sigurinë Publike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Policiale, Akademia e Policisë, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me sistemet e menaxhimit të emergjencave dhe softuerët e komunikimit të brendshëm; i njohur me aplikacionet e analizës së të dhënave.',
    soft_skills:
      'Lidership i demonstruar në situata të krizës, aftësi të shkëlqyera organizative dhe komunikuese, dhe përshtatje me ndryshimet.',
    technical_skills:
      'Njohuri të avancuara në menaxhimin e operacioneve speciale, trajnime të forcave policore dhe zbatimin e teknikave të negocimit.',
    hobbies:
      'Ndjekja e kurseve të vazhdueshme të trajnimit në fushën e sigurisë dhe policisë, sportet e kontaktit dhe aktivitetet në natyrë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukatore në Kopshtin 'Ylli i Mëngjesit', duke punuar me fëmijë të moshës parashkollore për të zhvilluar aftësitë e tyre bazë përmes lojërave dhe aktiviteteve edukative që nga viti 2021. Më parë, Asistente Edukimi në 'Kopshti Dielli', ku ndihmoi në planifikimin dhe zbatimin e programeve mësimore dhe kujdesin ditor të fëmijëve (2018-2021),Stazhiere në 'Qendra e Zhvillimit Fëmijës', ku fitoi përvojë praktike në menaxhimin e klasës dhe teknikat e mësimdhënies për fëmijët e vegjël (2015-2018).",
    education:
      'Master në Edukimin Parashkollor, Universiteti i Edukimit, Tiranë (2016-2018); Bachelor në Psikologji Fëmijës, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive edukative dhe softuerëve mësimorë për fëmijët; përvojë me mjete digjitale për planifikimin e mësimit.',
    soft_skills:
      'Aftësi të forta në komunikim dhe organizim, kreativitet në zhvillimin e aktiviteteve mësimore, dhe aftësi të shkëlqyera në menaxhimin e konflikteve.',
    technical_skills:
      'Njohuri të thella në psikologjinë e zhvillimit të fëmijës, metodologjitë e edukimit parashkollor dhe vlerësimin e progresit të fëmijëve.',
    hobbies:
      'Leximi i literaturës për edukimin e hershëm, pjesëmarrja në seminare dhe workshope edukative, dhe artet vizuale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukatore Kryesore në 'Kopshti i Gëzimit', duke udhëhequr një grup fëmijësh të moshës parashkollore dhe zbatuar programe inovative edukative që nga viti 2022. Më parë, Mentor për Edukatorë të Rinj në 'Programi i Trajnimit për Edukatorë', ku ofroi mbështetje dhe trajnim për edukatorë në fillim të karrierës së tyre (2019-2022), Koordinator i Programit Edukativ në 'Qendra Komunitare për Fëmijë', përgjegjës për zhvillimin dhe monitorimin e programeve edukative dhe aktiviteteve për fëmijë (2016-2019).",
    education:
      'Master në Menaxhimin e Arsimimit të Hershëm, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Edukim Parashkollor, Universiteti i Edukimit, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me platforma edukative online dhe mjete interaktive për të përmirësuar procesin mësimor për fëmijët.',
    soft_skills:
      'Lidership efektiv, aftësi të komunikimit me prindërit dhe kolegët, dhe përkushtim për të inkurajuar një mjedis mësimor pozitiv.',
    technical_skills:
      'Njohuri të thella në psikologjinë e zhvillimit të fëmijës, metodologjitë e edukimit parashkollor dhe vlerësimin e progresit të fëmijëve.',
    hobbies:
      'Leximi i literaturës për edukimin e hershëm, pjesëmarrja në seminare dhe workshope edukative, dhe artet vizuale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukatore në 'Kopshti Hapur', duke punuar për të nxitur zhvillimin emocional dhe social të fëmijëve përmes aktiviteteve interaktive dhe edukative që nga viti 2021. Para kësaj, Asistente Edukimi në 'Kopshti Bleta', ndihmonte në përgatitjen e materialeve mësimore dhe mbikëqyrjen e lojërave edukative (2018-2021), Stazhiere në 'Qendra Edukative Fëmijërore', ku mësoi teknika të ndryshme mësimdhënieje dhe menaxhimi të klasës për fëmijët e vegjël (2015-2018).",
    education:
      'Master në Psikologji Edukative, Universiteti i Shkencave të Edukimit, Tiranë (2016-2018); Bachelor në Shkencat e Edukimit, Fakulteti i Shkencave të Edukimit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e mjeteve dhe programeve edukative digjitale për fëmijë, si dhe aplikacioneve të ndryshme për planifikimin dhe vlerësimin e aktiviteteve mësimore.',
    soft_skills:
      'Aftësi të forta në komunikim dhe ndërtimin e marrëdhënieve pozitive me fëmijët, prindërit dhe kolegët; kreativitet dhe përshtatshmëri në zhvillimin e mësimeve.',
    technical_skills:
      'Njohuri të thella në metodat e mësimdhënies për fëmijët e moshës parashkollore, zhvillimin e programeve edukative dhe teknikat e menaxhimit të klasës.',
    hobbies:
      'Leximi i librit dhe artikujve mbi edukimin e hershëm, zhvillimi i materialeve dhe lojërave edukative, dhe piktura.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukatore Kryesore në 'Kopshti Zanash', duke udhëhequr dhe menaxhuar një grup fëmijësh me qëllim të ofrimit të një ambienti mësimor të pasur dhe të sigurt që nga viti 2022. Më parë, Koordinatore e Programit Edukativ në 'Kopshti Magjik', ku organizoi dhe zbatonte aktivitete dhe programe inovative për fëmijë (2019-2022), Mbikëqyrëse e Aktiviteteve Edukative në 'Qendra për Zhvillimin e Fëmijëve', përgjegjëse për planifikimin dhe zbatimin e një sërë aktivitetesh që synojnë zhvillimin e aftësive të ndryshme të fëmijëve (2016-2019).",
    education:
      'Master në Menaxhimin e Institucioneve Arsimore, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Edukim Parashkollor, Universiteti i Shkencave të Edukimit, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë në përdorimin e platformave edukative dhe teknologjive të reja në klasë; aftësi në krijuar dhe ndarjen e përmbajtjes edukative digjitale.',
    soft_skills:
      'Lidership i efektiv, aftësi të shkëlqyera organizative dhe planifikuese, komunikuese dhe në menaxhimin e konflikteve.',
    technical_skills:
      'Njohuri të thella në metodat e mësimdhënies për fëmijët e moshës parashkollore, zhvillimin e programeve edukative dhe teknikat e menaxhimit të klasës.',
    hobbies:
      'Leximi i librit dhe artikujve mbi edukimin e hershëm, zhvillimi i materialeve dhe lojërave edukative, dhe piktura.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Gjyqtar në 'Gjykata e Apelit Tiranë', duke trajtuar çështje të ndryshme civile dhe penale, duke garantuar zbatimin e drejtë të ligjit dhe vendimmarrje të bazuar në prova që nga viti 2021. Para kësaj, ishte Anëtar i Kolegjit të Gjyqtarëve në 'Gjykata e Rrethit Gjyqësor Tiranë', ku mori pjesë në gjykime dhe vendosi në çështje komplekse ligjore (2018-2021), Ndihmës Gjyqtar në 'Gjykata Administrative Tiranë', ndihmoi në përgatitjen e vendimeve dhe analizën e legjislacionit (2015-2018).",
    education:
      'Master në Drejtësi Civile, Fakulteti i Drejtësisë, Universiteti i Tiranës (2016-2018); Bachelor në Drejtësi, Fakulteti i Drejtësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave juridike dhe softuerëve të menaxhimit të çështjeve gjyqësore.',
    soft_skills:
      'Aftësi të shkëlqyera në analizë dhe zgjidhje të problemeve ligjore, komunikim efektiv dhe vendosmëri në vendimmarrje.',
    technical_skills:
      'Njohuri të thella në ligjin civil, procedurat gjyqësore dhe interpretimin e statutit dhe rasteve të mëparshme.',
    hobbies:
      'Leximi i literaturës së specializuar juridike, ndjekja e zhvillimeve të fundit në fushën e drejtësisë dhe pjesëmarrja në konferenca ligjore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Gjyqtar në 'Gjykata Kushtetuese', analizon dhe vendos në çështjet që lidhen me interpretimin e Kushtetutës dhe zbatueshmërinë e saj në legjislacionin kombëtar që nga viti 2022. Më parë, Këshilltar Ligjor në 'Ministria e Drejtësisë', ku ofroi këshilla ligjore dhe mbështetje në hartimin e nismave ligjore (2019-2022), Avokat i Pavarur, ofroi përfaqësim ligjor dhe këshilla për klientë në fushën e drejtësisë civile dhe tregtare (2016-2019).",
    education:
      'Master në Drejtësi Kushtetuese, Fakulteti i Drejtësisë, Universiteti i Tiranës (2017-2019); Bachelor në Drejtësi, Fakulteti i Drejtësisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me sistemet elektronike të kërkimit ligjor dhe platformat e menaxhimit të dokumentacionit.',
    soft_skills:
      'Aftësi të fortë analitike dhe kritike, efektivitet në komunikim dhe aftësi të mira organizative.',
    technical_skills:
      'Njohuri të specializuara në kushtetutë dhe ligjin administrativ, si dhe në analizën dhe interpretimin e vendimeve gjyqësore.',
    hobbies:
      'Studimi i rasteve historike kushtetuese, marrja pjesë në diskutime mbi reformat ligjore dhe vrapimi për të mbajtur një jetë aktive.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Prokuror në 'Prokuroria e Rrethit Gjyqësor Tiranë', duke udhëhequr hetime dhe ndjekje penale për raste të ndryshme, duke përfshirë krimin e organizuar dhe korrupsionin që nga viti 2021. Para kësaj, ishte Ndihmës Prokuror në 'Prokuroria e Qarkut', ku mbikëqyri procedurat e hetimit dhe përgatiti akuzat për gjykim (2018-2021), Jurist në 'Agjencia Shtetërore e Hetimit', ku ofroi mbështetje ligjore dhe këshillime për rastet e hetimeve komplekse (2015-2018).",
    education:
      'Master në Shkencat Penale dhe Drejtësi Penale, Fakulteti i Drejtësisë, Universiteti i Tiranës (2016-2018); Bachelor në Drejtësi, Fakulteti i Drejtësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave juridike dhe softuerëve të menaxhimit të rasteve.',
    soft_skills:
      'Aftësi të shkëlqyera në analizë dhe argumentim, komunikim efektiv dhe aftësi të mira në menaxhimin e kohës dhe prioriteteve.',
    technical_skills:
      'Njohuri të thella në procedurat penale, ligjin kundër korrupsionit dhe krimit të organizuar, si dhe në drejtimin e hetimeve.',
    hobbies:
      'Leximi i publikimeve dhe artikujve në fushën e drejtësisë penale, ndjekja e konferencave ligjore, dhe sportet ekipore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Arkitekt i Brendshëm në 'Studio Arkitekture Moderne', duke krijuar dhe zbatuar koncepte inovative të dizajnit të brendshëm për ambiente rezidenciale dhe komerciale që nga viti 2021. Më parë, Asistent Dizajni në 'Dizajn Plus', ku ndihmoi në zhvillimin e projekteve të dizajnit dhe prezantimin e tyre tek klientët (2018-2021) Praktikant në 'Agjencia e Dizajnit të Brendshëm', ku fitoi përvojë në përdorimin e softuerëve të dizajnit dhe në kuptimin e trendeve të fundit në arkitekturën e brendshme (2015-2018).",
    education:
      'Master në Arkitekturë të Brendshme, Universiteti Politeknik i Tiranës (2016-2018); Bachelor në Dizajn të Brendshëm, Akademia e Arteve, Tiranë (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e AutoCAD, SketchUp dhe Photoshop; përvojë në vizualizimin 3D dhe modelimin.',
    soft_skills:
      'Kreativitet dhe aftësi të shkëlqyera në komunikim, përshtatshmëri dhe punë në ekip.',
    technical_skills:
      'Njohuri të thella në principet e dizajnit të brendshëm, zgjidhje të qëndrueshme dhe inovative, dhe njohuri të materialet dhe ndërtimit.',
    hobbies:
      'Ndjekja e trendeve të reja në arkitekturë dhe dizajn, vizatimi dhe fotografimi i hapësirave të brendshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Software në 'Tech Innovations Inc.', duke zhvilluar dhe implementuar zgjidhje softuerike të personalizuara për klientë në industrinë teknologjike që nga viti 2022. Më parë, Zhvillues Software në 'Startup Tech Hub', ku kontribuoi në zhvillimin e aplikacioneve mobile dhe web (2019-2022), Analist Sistemi në 'Data Solutions Ltd', përgjegjës për analizimin e kërkesave të sistemit dhe ndihmën në përcaktimin e specifikimeve teknike për projekte të ndryshme (2016-2019).",
    education:
      'Master në Inxhinieri Software, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Kompjuterike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në programim me Java, Python dhe C#; përvojë në zhvillimin e front-end dhe back-end.',
    soft_skills:
      'Aftësi të forta analitike, punë në ekip dhe menaxhim i projekteve; aftësi të shkëlqyera në zgjidhjen e problemeve.',
    technical_skills:
      'Ekspertizë në arkitekturat e softuerit, bazat e të dhënave dhe sigurinë e aplikacioneve.',
    hobbies:
      'Kodimi në projekte personale, ndjekja e konferencave të teknologjisë dhe sportet elektronike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Pilot në 'Air Albania', duke operuar fluturime ndërkombëtare dhe duke garantuar sigurinë dhe rehatinë e udhëtarëve që nga viti 2021. Para kësaj, ishte Kopilot në 'Albanian Airways', ku ndihmoi në menaxhimin e fluturimeve dhe siguroi mbështetje në navigimin ajror (2018-2021), Instruktor Fluturimi në 'Akademia e Aviacionit', ofroi trajnime për pilotë të rinj dhe zhvilloi module mësimore për simulimet e fluturimeve (2015-2018).",
    education:
      'Master në Shkencat e Aviacionit, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Ajrore, Fakulteti i Inxhinierisë, Universiteti Politeknik i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të navigimit ajror dhe softuerëve të simulimit të fluturimit.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe vendimmarrje në situata të vështira, si dhe aftësi të forta organizative dhe menaxhimi i stresit.',
    technical_skills:
      'Njohuri të thella në operacionet e fluturimit, sigurinë ajrore dhe procedurat e emergjencës.',
    hobbies:
      'Simulimet e fluturimeve në kohën e lirë, leximi i literaturës së aviacionit dhe eksplorimi i teknologjive të reja ajrore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Pilot në 'Forcat Ajrore Shqiptare', duke kryer misione ushtarake dhe trajnime operacionale me avionë luftarakë që nga viti 2022. Para kësaj, ishte Anëtar i Ekuipazhit të Fluturimit në 'Baza Ajrore Farkë', ku përfshihet në operacione kërkimi dhe shpëtimi dhe stërvitje të avancuara ajrore (2019-2022), Asistent i Trajnimeve Ajrore në 'Qendra e Stërvitjes Ushtarake', mbikëqyrja e programeve të trajnimit për pilotët ushtarakë dhe ndihma në zhvillimin e kurrikulave të stërvitjes (2016-2019).",
    education:
      'Master në Taktika dhe Strategji Ajrore, Akademia Ushtarake, Tiranë (2017-2019); Bachelor në Shkenca Ushtarake, me fokus në Aviacion, Akademia Ushtarake, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me sistemet e kontrollit të fluturimit dhe softuerët e analizës taktike.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera në menaxhimin e ekuipazhit dhe përshtatshmëri me ndryshimet e shpejta operacionale.',
    technical_skills:
      'Ekspertizë në fluturimet luftarake, manovrat ajrore dhe taktikat e luftës ajrore.',
    hobbies:
      'Ndjekja e zhvillimeve të reja në teknologjinë ushtarake ajrore, stërvitja fizike dhe sportet ekstreme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Instruktor Fluturimi në 'Qendra e Trajnimit Aviatik', duke ofruar trajnime të specializuara për pilotët e rinj dhe të avancuar, përfshirë simulimet dhe fluturimet praktike që nga viti 2021. Më parë, Pilot në 'Kompania Ajrore Rajonale', duke operuar fluturime të brendshme dhe ndërkombëtare me sukses (2018-2021), Kopilot në 'Linjat Ajrore Kombëtare', ndihmoi në menaxhimin e fluturimeve dhe sigurimin e sigurisë dhe rehatisë së udhëtarëve (2015-2018).",
    education:
      'Master në Menaxhimin e Aviacionit, Universiteti Politeknik i Tiranës (2016-2018); Bachelor në Shkencat e Aviacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Ekspert në përdorimin e sistemeve të simulimit të fluturimit dhe softuerëve të analizës ajrore.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie dhe komunikim, përshtatshmëri dhe menaxhim i situatave të ndryshme operacionale.',
    technical_skills:
      'Njohuri të thella në teknikat e fluturimit, procedurat e sigurisë ajrore dhe legjislacionin e aviacionit.',
    hobbies:
      'Pasione për fluturimin si hobbi, ndjekja e zhvillimeve të fundit në teknologjinë e aviacionit dhe sportet e ajrit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Pilot Testues në 'Industria e Aviacionit të Avancuar', përgjegjës për testimin e avionëve të rinj dhe teknologjive të aviacionit për të vlerësuar performancën dhe sigurinë që nga viti 2022. Më parë, Inxhinier Ajror në 'Dizajn dhe Zhvillim Avionik', duke kontribuar në zhvillimin e prototipeve të avionëve dhe zgjidhjeve inxhinierike (2019-2022), Analist i Performancës Ajrore në 'Qendra Kombëtare e Testimit të Fluturimit', ku analizoi të dhënat e fluturimit dhe performancën e avionëve në skenarë të ndryshëm operacionalë (2016-2019).",
    education:
      'Master në Inxhinieri Ajrore dhe Aviacion, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Mekanike, me specializim në Aviacion, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me softuerët e projektimit ajror dhe simulimin e fluturimit, si dhe analizën e të dhënave të kompleksuara ajrore.',
    soft_skills:
      'Aftësi të forta analitike dhe kritike, komunikim efektiv dhe menaxhim i projekteve të teknologjisë së lartë.',
    technical_skills:
      'Ekspertizë në testimin e fluturimeve, evaluimin e sigurisë ajrore dhe zhvillimin e teknologjive të reja në aviacion.',
    hobbies:
      'Eksplorimi i teknologjive të reja ajrore, modelimi i avionëve dhe veprimtari vullnetare në promovimin e shkencës dhe teknologjisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues i Edukimit Fizik në 'Shkolla e Mesme Gjenerale', duke organizuar dhe zbatuar programe të ndryshme trajnimi fizik për nxënësit, duke përfshirë sportet, lojërat dhe aktivitetet e ndërgjegjësimit për shëndetin që nga viti 2021. Më parë, Asistent Trajnimi në 'Qendra Sportive Rajonale', ku ndihmoi në trajnimin e të rinjve në disiplina të ndryshme sportive (2018-2021), Praktikant në 'Akademia e Edukimit Fizik dhe Sporteve', ku mësoi metodat më të fundit të trajnimit dhe mësimdhënies në fushën e edukimit fizik (2015-2018).",
    education:
      'Master në Shkencat e Edukimit Fizik, Universiteti i Sporteve të Tiranës (2016-2018); Bachelor në Edukim Fizik dhe Sport, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së performancës sportive dhe aplikacioneve të menaxhimit të klasës.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe komunikuese, motivues dhe ndërtues i një ambienti të sigurt dhe inkurajues për nxënësit.',
    technical_skills:
      'Njohuri të thella në fiziologjinë e sportit, metodat e trajnimit fizik dhe parimet e ushqyerjes për sportistë.',
    hobbies:
      'Aktiv në sporte të ndryshme, përfshirë futbollin, notin dhe atletikën; ndjekja e seminarëve të edukimit fizik dhe pjesëmarrja në aktivitete vullnetare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Trajner Personal në 'Fitness Club Prestige', duke ofruar konsulencë individuale dhe plane të personalizuara stërvitore për klientët për të arritur objektivat e tyre shëndetësore dhe fizike që nga viti 2022. Më parë, Koordinator i Programit të Fitnessit në 'Qendra e Shëndetit dhe Wellness', ku zhvilloi dhe menaxhoi programe stërvitore dhe seminare mbi ushqyerjen dhe mirëqenien (2019-2022), Instruktor Grupi në 'Gym Dynamic', udhëhoqi seanca të ndryshme stërvitore, duke përfshirë aerobikën, peshngritjen dhe yoga-n për të përmirësuar formën fizike dhe shëndetin mendor të anëtarëve (2016-2019).",
    education:
      'Master në Menaxhimin e Sporteve dhe Wellness, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkencat e Lëvizjes dhe Shëndetit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Ekspert në përdorimin e teknologjive të monitorimit të shëndetit dhe aplikacioneve stërvitore për planifikimin dhe ndjekjen e progresit.',
    soft_skills:
      'Motivues i lartë, me aftësi të fortë ndërgjegjësimi dhe të qenit mentor për klientët, si dhe aftësi të shkëlqyera në komunikim dhe organizim.',
    technical_skills:
      'Njohuri të avancuara në teknikat e stërvitjes personale, rehabilitimin e lëndime',
    hobbies:
      'Aktiv në sporte të ndryshme, përfshirë futbollin, notin dhe atletikën; ndjekja e seminarëve të edukimit fizik dhe pjesëmarrja në aktivitete vullnetare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues i Anglishtes në 'Shkolla Ndërkombëtare e Tiranës', duke ofruar mësimdhënie të gjuhës angleze për nxënësit e ciklit fillor dhe të mesëm, duke përfshirë përgatitjen për certifikatat ndërkombëtare që nga viti 2021. Më parë, Asistent Lektori në 'Universiteti i Gjuhëve të Huaja', ku mbështeti në mësimdhënien e kursit të gjuhës angleze dhe zhvillimin e materialeve mësimore (2018-2021), Praktikant në 'Qendra e Gjuhëve të Huaja', ku fitoi përvojë në metodologjitë e mësimdhënies dhe në përdorimin e teknologjive të reja në edukimin gjuhësor (2015-2018).",
    education:
      'Master në Mësimdhënie Gjuhësh të Huaja, Universiteti i Tiranës (2016-2018); Bachelor në Gjuhë dhe Letërsi Angleze, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve edukativë dhe platformave të mësimdhënies online për gjuhët e huaja.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe prezantim, adaptueshmëri në metodat e ndryshme mësimdhënieje, dhe aftësi të forta organizative.',
    technical_skills:
      'Njohuri të thella në gramatikën dhe fonetikën e gjuhës angleze, metodologjitë e mësimdhënies dhe vlerësimin e nxënësve.',
    hobbies:
      'Pasione për gjuhët e huaja dhe kultura të ndryshme, leximi i letërsisë në gjuhë të huaja, dhe udhëtimet kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Instruktor i Gjuhës Italiane në 'Qendra Lingua Plus', duke ofruar kurse intensive të gjuhës italiane për të rritur dhe të rinj, duke përfshirë përgatitjen për provimet e certifikimit që nga viti 2022. Më parë, Mësues Ndihmës në 'Programi i Gjuhëve të Huaja për të Rinjtë', ku udhëhoqi aktivitete mësimore dhe kulturore për të nxitur interesin ndaj mësimit të gjuhëve të huaja (2019-2022),Koordinator i Kursit të Gjuhës Gjermane në 'Instituti i Gjuhëve Modern', ku organizoi dhe mbikëqyri zbatimin e programeve të gjuhës gjermane dhe siguroi një mjedis mësimor të përshtatshëm për nxënësit (2016-2019).",
    education:
      'Master në Pedagogji dhe Mësimdhënie të Gjuhës Italiane, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Gjuhë dhe Letërsi Italiane, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italiane, Gjermane',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të ndihmës mësimore dhe platformave interaktive për të përmirësuar mësimdhënien',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe prezantim, adaptueshmëri në metodat e ndryshme mësimdhënieje, dhe aftësi të forta organizative.',
    technical_skills:
      'Njohuri të thella në gramatikën dhe fonetikën e gjuhës angleze, metodologjitë e mësimdhënies dhe vlerësimin e nxënësve.',
    hobbies:
      'Pasione për gjuhët e huaja dhe kultura të ndryshme, leximi i letërsisë në gjuhë të huaja, dhe udhëtimet kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Nutricionist në 'Qendra e Shëndetit dhe Ushqyerjes', duke ofruar konsulencë dhe plane ushqimore të personalizuara për klientët për të përmirësuar shëndetin dhe mirëqenien e tyre që nga viti 2021. Më parë, Asistent i Kërkimit në 'Instituti i Ushqyerjes dhe Metabolizmit', ku mori pjesë në studime klinike dhe analiza të të dhënave ushqimore (2018-2021), Praktikant në 'Laboratori i Biokimisë Ushqimore', ku aplikoi njohuritë teorike në testimin e mostrave ushqimore dhe zhvillimin e strategjive të ushqyerjes (2015-2018).",
    education:
      'Master në Shkenca të Ushqyerjes dhe Dietologji, Universiteti i Tiranës (2016-2018); Bachelor në Biokimi dhe Teknologji Ushqimore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së të dhënave ushqimore dhe aplikacioneve të menaxhimit të planeve të ushqyerjes.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe këshillim, përshtatshmëri dhe qasje ndaj klientëve me nevoja të ndryshme shëndetësore.',
    technical_skills:
      'Njohuri të thella në vlerësimin nutricional, planifikimin e dietave dhe ndërveprimin e ushqimeve me metabolizmin njerëzor.',
    hobbies:
      'Pasione për gatimin dhe eksplorimin e recetave të shëndetshme, pjesëmarrja në konferenca mbi ushqyerjen dhe shëndetin, dhe aktivitetet fizike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Këshilltar i Shëndetit dhe Ushqyerjes në 'Wellness Center Harmony', duke ndihmuar klientët të arrijnë qëllimet e tyre të shëndetit dhe fitnesit përmes planeve të ushqyerjes dhe programeve të stërvitjes që nga viti 2022. Më parë, Menaxher i Programit të Ushqyerjes në 'Klinika e Shëndetit Mendor', ku zhvilloi programe ushqimore për të mbështetur shërimin dhe mirëqenien e pacientëve (2019-2022),Edukator i Shëndetit në 'Organizata Joqeveritare për Ndërgjegjësimin mbi Ushqyerjen', ku organizoi punëtori dhe seminare për komunitetin mbi rëndësinë e ushqyerjes së shëndetshme dhe parandalimin e sëmundjeve (2016-2019).",
    education:
      'Master në Menaxhimin e Shëndetit Publik dhe Ushqyerjes, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca të Shëndetit dhe Mirëqenies, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë me platforma edukative dhe aplikacione për ndjekjen e progresit të ushqyerjes dhe fitnesit të klientëve.',
    soft_skills:
      'Motivues i lartë, me aftësi të shkëlqyera në organizim dhe menaxhim të projekteve të shëndetit',
    technical_skills:
      'Njohuri të thella në vlerësimin nutricional, planifikimin e dietave dhe ndërveprimin e ushqimeve me metabolizmin njerëzor.',
    hobbies:
      'Pasione për gatimin dhe eksplorimin e recetave të shëndetshme, pjesëmarrja në konferenca mbi ushqyerjen dhe shëndetin, dhe aktivitetet fizike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mjek në 'Qendra e Shëndetit Alergjik dhe Imunologjik', duke ofruar diagnoza, trajtime dhe këshillim për pacientët me alergji, astma dhe çrregullime imunologjike që nga viti 2021. Ka kontribuar në zhvillimin e protokolleve të reja të trajtimit dhe ka marrë pjesë në hulumtime klinike në fushën e alergjive dhe imunologjisë (2018-2021). Më parë, Asistent Mjekësor në 'Laboratori i Avancuar i Imunologjisë', ku ndihmoi në kryerjen e testeve diagnostike dhe analizave laboratorike (2015-2018).",
    education:
      'Master në Alergji dhe Imunologji Klinike, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve mjekësore për menaxhimin e të dhënave të pacientëve dhe analizën e rezultateve laboratorike.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët dhe kolegët, si dhe në menaxhimin e situatave të vështira dhe në zgjidhjen e problemeve.',
    technical_skills:
      'Njohuri të thella në diagnostikimin dhe trajtimin e sëmundjeve alergjike dhe çrregullimeve imunologjike, përfshirë përdorimin e terapive të avancuara.',
    hobbies:
      'Interesi në ndjekjen e zhvillimeve të fundit në mjekësi, pjesëmarrja në konferenca mjekësore dhe aktivitete vullnetare në komunitet.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist në 'Instituti Kombëtar i Shëndetit Publik', duke u marrë me studimin dhe trajtimin e çrregullimeve imunologjike, përfshirë imunodeficiencat dhe sëmundjet autoimune që nga viti 2022. Ka kryer hulumtime të thelluara në identifikimin e mekanizmave patogjenik dhe ka zhvilluar strategji të reja për menaxhimin e këtyre sëmundjeve (2019-2022). Më parë, Koordinator i Projekteve të Kërkimit në 'Qendra e Studimeve Imunologjike', ku udhëhoqi projekte kërkimore dhe publikoi studime në revista të njohura shkencore (2016-2019).",
    education:
      'Master në Imunologji Klinike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Biologji, me specializim në Imunologji, Universiteti i Shkencave Natyrore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e bazave të të dhënave shkencore dhe softuerëve të specializuar për analizën e të dhënave eksperimentale.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipeve të kërkimit, si dhe aftësi të komunikimit shkencor efektiv.',
    technical_skills:
      'Ekspertizë në imunologjinë klinike, metodat e hulumtimit shkencor',
    hobbies:
      'Interesi në ndjekjen e zhvillimeve të fundit në mjekësi, pjesëmarrja në konferenca mjekësore dhe aktivitete vullnetare në komunitet.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Dermatologe në 'Klinika Dermatologjike Prestige', duke ofruar trajtime të avancuara për sëmundje të lëkurës, probleme estetike dhe procedura laser që nga viti 2021. Më parë, ka punuar si Asistent Mjekësor në 'Qendra e Kërkimit Dermatologjik', duke kontribuar në studime klinike për zhvillimin e trajtimeve të reja dermatologjike (2018-2021).",
    education:
      'Master në Dermatologji dhe Venereologji, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve mjekësore për analizën e imazheve dermatologjike dhe menaxhimin e të dhënave të pacientëve.',
    soft_skills:
      'Aftësi të shkëlqyera në diagnozë dhe komunikim me pacientët, si dhe në menaxhimin e situatave të ndryshme mjekësore.',
    technical_skills:
      'Njohuri të thella në trajtimet dermatologjike, përfshirë procedurat kosmetike, menaxhimin e sëmundjeve të lëkurës dhe terapitë me laser.',
    hobbies:
      'Ndjekja e konferencave mjekësore ndërkombëtare, leximi i literaturës së specializuar dhe angazhimi në hulumtime mjekësore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialiste e Dermatologjisë në 'Instituti i Shëndetit Lëkuror', duke udhëhequr një ekip të mjekëve dhe infermierëve për të ofruar kujdesin më të mirë dermatologjik për pacientët, duke përfshirë terapitë inovative dhe këshillimin për kujdesin e lëkurës që nga viti 2022. Ka zhvilluar gjithashtu programe edukative për ndërgjegjësimin mbi sëmundjet e lëkurës dhe parandalimin e tyre (2019-2022).",
    education:
      'Master në Shkenca Dermatologjike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Mjekësi Gjenerale, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë në përdorimin e sistemeve të informacionit shëndetësor dhe bazave të të dhënave për dokumentimin e rasteve dhe trajtimeve dermatologjike.',
    soft_skills:
      'Lidership i fortë, aftësi të larta në komunikim dhe ndërtimin e marrëdhënieve të mira me pacientët dhe ekipin mjekësor.',
    technical_skills:
      'Ekspertizë në diagnostikimin dhe trajtimin e sëmundjeve të lëkurës, përdorimin e teknologjive të reja në dermatologji, dhe zhvillimin e strategjive për parandalimin e sëmundjeve të lëkurës.',
    hobbies:
      'Interesi për inovacionet në fushën e dermatologjisë, marrja pjesë në projekte hulumtuese dhe veprimtari vullnetare për të ndihmuar në rritjen e ndërgjegjësimit mbi kujdesin e lëkurës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mjek i Familjes në 'Qendra Shëndetësore Komunitare', duke ofruar kujdes mjekësor parësor për familjet, përfshirë konsultimet, diagnozat dhe trajtimet e përditshme si dhe menaxhimin e sëmundjeve kronike që nga viti 2021. Ka zhvilluar programe edukative për promovimin e shëndetit dhe parandalimin e sëmundjeve në komunitet (2018-2021).",
    education:
      'Master në Mjekësi Familjare, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi Gjenerale, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve elektronike të shëndetit për menaxhimin e kartelave të pacientëve dhe analizën e të dhënave shëndetësore.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe ndërtimin e marrëdhënieve të besimit me pacientët, si dhe aftësi të forta në zgjidhjen e problemeve dhe menaxhimin e stresit.',
    technical_skills:
      'Njohuri të thella në kujdesin primar shëndetësor, diagnozimin dhe trajtimin e sëmundjeve të zakonshme, si dhe në monitorimin dhe menaxhimin e sëmundjeve kronike.',
    hobbies:
      'Interesi për vazhdimin e edukimit mjekësor, marrja pjesë në konferenca dhe seminare shëndetësore, dhe veprimtari vullnetare në komunitet.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mjek i Familjes në 'Klinika Mjekësore e Avancuar', duke ofruar një gamë të gjerë shërbimesh mjekësore për të gjithë anëtarët e familjes, duke përfshirë kujdesin emergjent, menaxhimin e sëmundjeve të rënda dhe këshillimin për stilin e jetesës që nga viti 2022. Angazhuar në trajnimin e personelit të ri mjekësor dhe në inovacionet në kujdesin shëndetësor (2019-2022).",
    education:
      'Master në Shëndetësi Publike dhe Mjekësi Familjare, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkencat e Shëndetit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë me softuerë të ndërtuar posaçërisht për mjekësinë familjare, përfshirë sistemet e menaxhimit të shëndetit dhe analizën statistikore të të dhënave.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera në menaxhimin e ekipit dhe komunikimin efektiv me pacientët dhe familjet e tyre.',
    technical_skills:
      'Ekspertizë në kujdesin e integruar shëndetësor, menaxhimin e protokolleve mjekësore dhe zhvillimin e strategjive për përmirësimin e cilësisë së kujdesit për pacientët.',
    hobbies:
      'Leximi i studimeve të reja mjekësore, pjesëmarrja në projekte hulumtuese në fushën e shëndetësisë publike',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Kirurg në 'Qendra Kombëtare e Kirurgjisë', duke kryer një gamë të gjerë operacionesh kirurgjikale për trajtimin e sëmundjeve të ndryshme, përfshirë operacionet emergjente dhe ato të planifikuara që nga viti 2021. Angazhuar në zhvillimin e teknikave të reja kirurgjikale dhe mentorimin e kirurgëve të rinj (2018-2021).",
    education:
      'Master në Kirurgji të Përgjithshme, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të avancuara kirurgjikale dhe softuerëve mjekësorë për planifikimin e operacioneve dhe menaxhimin e rasteve.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e ekipit kirurgjikal, vendimmarrje në kushte stresi dhe komunikim efektiv me pacientët dhe familjet e tyre.',
    technical_skills:
      'Ekspertizë në një sërë procedurash kirurgjikale, duke përfshirë laparoskopinë, kirurgjinë e urgjencës dhe menaxhimin e traumës.',
    hobbies:
      'Ndjekja e konferencave dhe seminareve mjekësore për të qëndruar i përditësuar me inovacionet në fushën kirurgjikale, leximi i literaturës së specializuar dhe ushtrimi për të ruajtur formën fizike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Kirurgjisë së Përgjithshme në 'Spitali Universitar', duke ofruar kujdes kirurgjikal cilësor për pacientët me një larmi gjendjesh, përfshirë konsultimet para dhe pas operacionit që nga viti 2022. Pjesëmarrës aktiv në projekte kërkimore për të përmirësuar metodat e trajtimit kirurgjikal dhe në trajnime profesionale (2019-2022).",
    education:
      'Master në Teknikat Kirurgjikale Avancuara, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Mjekësi Gjenerale, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e sistemeve të navigimit kirurgjikal dhe analizën e imazheve mjekësore për përgatitjen e operacioneve.',
    soft_skills:
      'Lidership i fortë në drejtimin e ekipeve kirurgjikale, aftësi të larta në zgjidhjen e konflikteve dhe në ofrimin e mbështetjes emocionale për pacientët.',
    technical_skills:
      'Specializim në kirurgji minimale invazive, teknikat e rekonstruktimit dhe menaxhimin e komplikimeve post-operatore.',
    hobbies:
      'Interesi për mësimdhënien dhe mentorimin e studentëve të mjekësisë, angazhimi në veprimtari vullnetare shëndetësore dhe sportet ujore për relaks.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Neurolog në 'Qendra Neurologjike e Avancuar', duke ofruar diagnoza dhe trajtime për sëmundje neurologjike komplekse, përfshirë sëmundjet degjenerative, çrregullimet e lëvizjes dhe epilepsinë që nga viti 2021. Ka marrë pjesë në hulumtime klinike dhe ka publikuar studime në revista të njohura mjekësore në fushën e neurologjisë (2018-2021).",
    education:
      'Master në Neurologji Klinike, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve mjekësorë për analizën e të dhënave neurologjike dhe menaxhimin e kartelave të pacientëve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe në ndërtimin e marrëdhënieve të besimit me pacientët, si dhe në menaxhimin e situatave të ndryshme mjekësore.',
    technical_skills:
      'Ekspertizë në diagnostikimin dhe trajtimin e sëmundjeve neurologjike, përfshirë përdorimin e procedurave të avancuara diagnostikuese si MRI dhe EEG.',
    hobbies:
      'Ndjekja e zhvillimeve të fundit në neuroshkencë, leximi i literaturës mjekësore dhe marrja pjesë në konferenca ndërkombëtare të neurologjisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Neurologjisë në 'Spitali i Përgjithshëm', duke kryer vlerësime neurologjike të pacientëve, menaxhimin e trajtimeve të sëmundjeve kronike dhe udhëheqjen e sesioneve të këshillimit për pacientët dhe familjet e tyre që nga viti 2022. Angazhuar në edukimin dhe trajnimin e stafit mjekësor në teknikat dhe praktikat më të mira neurologjike (2019-2022).",
    education:
      'Master në Menaxhimin e Sëmundjeve Neurologjike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Mjekësore, me fokus në Neurologji, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e platformave të informacionit mjekësor dhe softuerëve të analizës për qëllime diagnostikuese dhe të kërkimit.',
    soft_skills:
      'Lidership i fortë, aftësi të komunikimit dhe ndërtimit të marrëdhënieve, dhe përkushtim ndaj përmirësimit të cilësisë së kujdesit për pacientët.',
    technical_skills:
      'Specializim në trajtimin e sëmundjeve neurologjike, duke përfshirë çrregullimet e sistemit nervor qendror dhe periferik, dhe në zbatimin e strategjive të avancuara terapeutike.',
    hobbies:
      'Interesi për inovacionet teknologjike në fushën e neurologjisë, veprimtari vullnetare për ndërgjegjësimin mbi sëmundjet neurologjike, dhe aktivitetet fizike për të ruajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Gjinekologe në 'Klinika e Shëndetit të Gruas', duke ofruar konsulta, diagnoza dhe trajtime për një gamë të gjerë çështjesh që lidhen me shëndetin riprodhues dhe të gruas që nga viti 2021. Pjesëmarrëse në studime të rëndësishme klinike për sëmundjet e gruas dhe në zhvillimin e protokolleve të reja të trajtimit (2018-2021).",
    education:
      'Master në Gjinekologji dhe Obstetrikë, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve mjekësore për menaxhimin e kartelave të pacientëve dhe analizën e të dhënave shëndetësore.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe këshillim me pacientët, si dhe në menaxhimin e situatave mjekësore komplekse.',
    technical_skills:
      'Ekspertizë në procedurat e gjinekologjisë dhe obstetrikës, përfshirë menaxhimin e shtatzënisë dhe lindjes, diagnozimin dhe trajtimin e sëmundjeve të gruas.',
    hobbies:
      'Interesi për të ndjekur zhvillimet më të fundit në fushën e shëndetit të gruas, pjesëmarrja në konferenca mjekësore dhe aktivitete vullnetare për edukimin shëndetësor të gruas.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialiste Gjinekologjie në 'Spitali Rajonal', duke menaxhuar dhe trajtuar çështje komplekse gjinekologjike dhe obstetrike, duke ofruar mbështetje dhe këshillim për gratë në të gjitha fazat e jetës riprodhuese që nga viti 2022. Ka udhëhequr seminare edukative për gratë dhe familjet e tyre rreth shëndetit riprodhues dhe parandalimit të sëmundjeve (2019-2022).",
    education:
      'Master në Menaxhimin e Shëndetit Reprodhues, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Mjekësore, me specializim në Gjinekologji, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë me sistemet e informacionit shëndetësor për të monitoruar dhe analizuar trendet shëndetësore në popullatën femërore.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera organizative dhe në menaxhimin e kohës, dhe përkushtim të lartë ndaj përmirësimit të cilësisë së kujdesit shëndetësor për gratë.',
    technical_skills:
      'Specializim në teknikat e avancuara kirurgjikale gjinekologjike, diagnostikimin dhe menaxhimin e sëmundjeve të gruas, dhe në zbatimin e programeve të edukimit dhe parandalimit shëndetësor.',
    hobbies:
      'Pasion për hulumtimin shkencor në fushën e gjinekologjisë, ndërtimi i komuniteteve të mbështetjes per trajtimet',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Pediatër në 'Qendra Pediatrike e Shëndetit të Fëmijëve', duke ofruar kujdes mjekësor për fëmijët nga lindja deri në adoleshencë, përfshirë vlerësimet e rregullta shëndetësore, diagnostikimin dhe trajtimin e sëmundjeve të fëmijëve që nga viti 2021. Ka udhëhequr projekte edukative për prindërit mbi ushqyerjen, imunizimet dhe parandalimin e sëmundjeve (2018-2021).",
    education:
      'Master në Pediatri, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve elektronike të regjistrimit të pacientëve dhe analizën e të dhënave shëndetësore për fëmijë.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me fëmijët dhe prindërit, përkushtim ndaj ofrimit të një mjedisi të ngrohtë dhe mbështetës, dhe menaxhimin e situatave të ndryshme mjekësore.',
    technical_skills:
      'Ekspertizë në vlerësimin dhe menaxhimin e shëndetit të fëmijëve, duke përfshirë njohuritë e fundit mjekësore për trajtimin e sëmundjeve pediatrike.',
    hobbies:
      'Interesi për zhvillimin e programeve edukative për shëndetin e fëmijëve, ndjekja e kursit të fundit të hulumtimeve në pediatri dhe pjesëmarrja në aktivitete vullnetare me fokus në fëmijë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist Pediatër në 'Spitali Universitar i Fëmijëve', duke trajtuar gjendje të ndryshme mjekësore në fëmijëri dhe ofruar konsultime të specializuara për sëmundjet e rënda dhe kronike të fëmijëve që nga viti 2022. Koordinon me specialistë të tjerë për menaxhimin e kujdesit të integruar të pacientëve të vegjël (2019-2022).",
    education:
      'Master në Menaxhimin e Sëmundjeve të Fëmijëve, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Mjekësore, me fokus në Pediatri, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara diagnostikuese dhe softuerëve mjekësorë për menaxhimin e sëmundjeve pediatrike.',
    soft_skills:
      'Lidership i fortë në ekipet mjekësore, aftësi të shkëlqyera organizative dhe komunikuese, dhe një qasje e ndjeshme ndaj nevojave të pacientëve të vegjël dhe familjeve të tyre.',
    technical_skills:
      'Specializim në diagnostikimin dhe trajtimin e gjendjeve komplekse pediatrike, duke përfshirë menaxhimin e terapive të avancuara dhe koordinimin e kujdesit multidisiplinar.',
    hobbies: 'Ndjekja e teknikave të reja në trajtimin pediatrik',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Kirurg Plastik në 'Klinika e Avancuar e Kirurgjisë Plastike', duke ofruar një gamë të gjerë procedurash estetike dhe rikonstruktive, përfshirë rinoplastikën, liposuksionin dhe kirurgjinë rikonstruktive pas traumave ose kirurgjisë onkologjike që nga viti 2021. Ka zhvilluar teknika të reja kirurgjikale dhe ka marrë pjesë në konferenca ndërkombëtare për të ndarë eksperiencat dhe të mësuarit (2018-2021).",
    education:
      'Master në Kirurgji Plastike dhe Rikonstruktive, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të avancuara për modelimin 3D dhe planifikimin e procedurave kirurgjikale estetike.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët për të kuptuar nevojat dhe pritshmëritë e tyre, si dhe në menaxhimin e stresit dhe situatave të papritura gjatë operacioneve.',
    technical_skills:
      'Ekspertizë në një gamë të gjerë të procedurave kirurgjikale plastike, përfshirë teknikat e fundit në rinoplastikë, liposuksion dhe kirurgji rikonstruktive.',
    hobbies:
      'Interesi për artin dhe dizajnin, që reflektohet në përqasjen e tij ndaj kirurgjisë estetike, dhe angazhimi në hulumtime për të përmirësuar metodat kirurgjikale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Kirurgjisë Plastike në 'Spitali Specializuar për Kirurgji Plastike', duke trajtuar pacientë me nevoja komplekse estetike dhe rikonstruktive, duke përfshirë terapitë për çrregullime të lindura, dëmtime nga djegiet dhe rikuperimin pas kancerit që nga viti 2022. Pjesëmarrës në studime për të vlerësuar efektivitetin e teknikave të reja kirurgjikale (2019-2022).",
    education:
      'Master në Shkenca të Kirurgjisë Plastike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Mjekësi Gjenerale, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerit për simulimet kirurgjikale dhe analizën e imazheve për të përmirësuar rezultatet estetike.',
    soft_skills:
      'Lidership në ekipet kirurgjikale, aftësi të larta në zgjidhjen e problemeve dhe në ofrimin e kujdesit të përqendruar në pacient.',
    technical_skills:
      'Specializim në kirurgji plastike rikonstruktive dhe estetike, me njohuri të thella në menaxhimin e pasojave të dëmtimeve të rënda dhe procedurave post-onkologjike.',
    hobbies:
      'Ndjekja e kurseve të vazhdueshme të përmirësimit profesional, pasioni për fotografimin si mjet për të dokumentuar rezultatet kirurgjikale dhe veprimtari vullnetare në organizata që mbështesin pacientet',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Fizioterapist në 'Qendra e Reabilitimit Fizik', duke ofruar trajtime të specializuara për pacientët me lëndime sportive, sëmundje të muskujve dhe skeletit, dhe pas operacioneve kirurgjikale që nga viti 2021. Ka zhvilluar programe të personalizuara të reabilitimit dhe ka marrë pjesë në trajnime të vazhdueshme për teknikat e reja terapeutike (2018-2021).",
    education:
      'Master në Fizioterapi, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Shkenca të Lëvizjes dhe Reabilitimit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për analizën e lëvizjes dhe softuerëve terapeutikë për monitorimin e progresit të pacientit.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe në krijimin e një mjedisi të ngrohtë dhe mbështetës për pacientët, si dhe aftësi të forta në menaxhimin e kohës dhe zgjidhjen e problemeve.',
    technical_skills:
      'Ekspertizë në metodat e vlerësimit fizik dhe terapi manuale, përfshirë masazhin terapeutik, ushtrimet e forcimit dhe teknikat e mobilizimit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e fizioterapisë, pjesëmarrja në seminare dhe konferenca profesionale, dhe ushtrimi i rregullt për të mbajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Fizioterapisë në 'Spitali i Specializuar për Reabilitim', duke trajtuar një gamë të gjerë çështjesh, nga lëndimet e akute deri te sëmundjet kronike të muskujve dhe skeletit, duke ofruar këshillime dhe terapi të bazuar në kërkimin më të fundit shkencor që nga viti 2022. Angazhuar në edukimin e pacientëve për parandalimin e lëndimeve dhe promovimin e një stili jetese aktiv (2019-2022).",
    education:
      'Master në Terapi Fizike dhe Reabilitim, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Fizioterapi, Universiteti i Shkencave të Shëndetit, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të matjes dhe vlerësimit fizik, si dhe në aplikimin e programeve terapeutike digjitale.',
    soft_skills:
      'Aftësi të larta në komunikimin efektiv me pacientët për të kuptuar nevojat e tyre dhe në motivimin e tyre për pjesëmarrje aktive në procesin e reabilitimit.',
    technical_skills:
      'Specializim në teknikat e reabilitimit për sëmundjet e ndryshme neurologjike, ortopedike dhe kardiovaskulare, duke përfshirë ushtrimet e specifika dhe terapinë manuale.',
    hobbies:
      'Pasioni për sportet e ujit, veprimtaria vullnetare në organizata që mbështesin pacientët me nevoja të veçanta, dhe leximi i literaturës së re shkencore në fushën e reabilitimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Kirurg Vaskular në 'Instituti Kombëtar i Kirurgjisë Vaskulare', duke kryer operacione të kompleksa vaskulare, përfshirë aneurizmat, okluzionet arteriale dhe venoze, dhe procedurat e bypass-it që nga viti 2021. Angazhuar në zhvillimin e protokolleve të reja kirurgjikale dhe në trajnimin e kirurgëve të rinj (2018-2021).",
    education:
      'Master në Kirurgji Vaskulare, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të avancuara për diagnozimin dhe planifikimin e operacioneve vaskulare, si dhe në analizën e imazheve vaskulare.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët për të sqaruar procedurat kirurgjikale dhe menaxhimin e pritshmërive, si dhe në udhëheqjen e ekipit kirurgjikal.',
    technical_skills:
      'Ekspertizë në një gamë të gjerë të procedurave vaskulare, përfshirë teknikat minimale invazive dhe menaxhimin post-operativ të pacientëve.',
    hobbies:
      'Interesi për hulumtimin e teknologjive të reja në kirurgjinë vaskulare, pjesëmarrja në konferenca mjekësore dhe seminare, dhe aktivitetet fizike për të ruajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Kirurgjisë Vaskulare në 'Spitali Universitar i Shëndetit Kardiovaskular', duke ofruar trajtime inovative për patologjitë vaskulare, duke përfshirë terapinë endovaskulare dhe kirurgjinë minimale invazive që nga viti 2022. Ka kontribuar në publikimin e hulumtimeve në revista të njohura ndërkombëtare dhe në zhvillimin e teknikave kirurgjikale të reja (2019-2022).",
    education:
      'Master në Shkenca të Kirurgjisë Vaskulare dhe Endovaskulare, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Mjekësore, me fokus në Kirurgji Vaskulare, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e sistemve të avancuara diagnostikuese dhe teknologjive endovaskulare për të optimizuar rezultatet kirurgjikale.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera organizative dhe komunikuese, dhe një qasje e ndjeshme ndaj nevojave të pacientëve dhe familjeve të tyre.',
    technical_skills:
      'Specializim në trajtimin e sëmundjeve vaskulare përmes qasjes endovaskulare dhe kirurgjikale, duke përfshirë menaxhimin e komplikimeve dhe rikuperimin post-operativ.',
    hobbies:
      'Ndjekja e avancimeve të fundit në fushën e kirurgjisë vaskulare dhe endovaskulare, veprimtari vullnetare për të ndihmuar në edukimin shëndetësor të komunitetit, dhe eksplorimi i natyrës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Diplomat në 'Ministria e Punëve të Jashtme', duke u marrë me negociatat ndërkombëtare, përfaqësimin e interesave të shtetit në forume ndërkombëtare dhe zhvillimin e marrëdhënieve diplomatike që nga viti 2021. Ka kontribuar në hartimin e politikave të jashtme dhe ka marrë pjesë në misione diplomatike jashtë vendit (2018-2021).",
    education:
      'Master në Marrëdhënie Ndërkombëtare dhe Diplomaci, Universiteti i Tiranës (2016-2018); Bachelor në Shkenca Politike, me fokus në Marrëdhënie Ndërkombëtare, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për menaxhimin e dokumenteve dhe analizën e të dhënave politike dhe ndërkombëtare.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim dhe negociata, si dhe në ndërtimin dhe mbajtjen e marrëdhënieve ndërkombëtare.',
    technical_skills:
      'Njohuri të thella në ligjin ndërkombëtar, politikat e jashtme dhe procedurat diplomatike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet aktuale globale, leximi i literaturës në marrëdhënie ndërkombëtare, dhe udhëtimet për të zgjeruar njohuritë kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Këshilltar i Marrëdhënieve Ndërkombëtare në 'Organizata Ndërkombëtare', duke ndihmuar në koordinimin e projekteve ndërkombëtare, promovimin e bashkëpunimit ndërkombëtar dhe mbikëqyrjen e zbatimit të marrëveshjeve ndërkombëtare që nga viti 2022. Angazhuar në analizën e trendeve politike dhe në ofrimin e këshillave strategjike (2019-2022).",
    education:
      'Master në Diplomaci dhe Siguri Ndërkombëtare, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Marrëdhënie Ndërkombëtare, Universiteti i Shkencave Sociale, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e platformave të analizës politike dhe softuerëve të menaxhimit të projekteve ndërkombëtare.',
    soft_skills:
      'Aftësi të forta në planifikimin strategjik, analizën e situatave politike dhe ndërtimin e partneriteteve ndërkombëtare.',
    technical_skills:
      'Ekspertizë në menaxhimin e krizave, diplomacinë publike dhe negociatat ndërkombëtare.',
    hobbies:
      'Pasioni për të mësuar gjuhë të reja, angazhimi në diskutime dhe forume ndërkombëtare, dhe kultivimi i një rrjeti të gjerë profesional.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ortoped në 'Qendra e Shëndetit Muskuloskeletal', duke ofruar trajtime për lëndime të ndryshme sportive, sëmundje të kyçeve, dhe çrregullime të skeletit që nga viti 2021. Ka zhvilluar teknika të reja kirurgjikale për rikuperimin e shpejtë dhe efikas të pacientëve (2018-2021).",
    education:
      'Master në Ortopedi dhe Traumatologji, Universiteti i Mjekësisë, Tiranë (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të avancuara diagnostikuese dhe softuerëve mjekësorë për planifikimin e operacioneve ortopedike.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët për të sqaruar procedurat dhe menaxhimin e pritshmërive, si dhe në udhëheqjen e ekipit mjekësor.',
    technical_skills:
      'Ekspertizë në trajtimin e sëmundjeve të skeletit dhe kyçeve, përfshirë operacionet e zëvendësimit të kyçeve dhe procedurat minimale invazive.',
    hobbies:
      'Interesi për të ndjekur zhvillimet më të fundit në fushën e ortopedisë, pjesëmarrja në seminare dhe konferenca profesionale, dhe ushtrimi i rregullt për të mbajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist Ortopedi në 'Spitali i Traumës dhe Ortopedisë', duke menaxhuar dhe trajtuar sëmundje komplekse të sistemit muskuloskeletal, duke ofruar këshillime dhe ndërhyrje kirurgjikale për pacientët me lëndime të rënda që nga viti 2022. Ka udhëhequr iniciativa për trajnimin e kirurgëve të rinj në teknikat më të fundit kirurgjikale (2019-2022).",
    education:
      'Master në Kirurgji Ortopedike Avancuar, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Mjekësi Gjenerale, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e sistemve të informacionit shëndetësor dhe bazave të të dhënave për dokumentimin e historisë mjekësore të pacientëve.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera organizative dhe komunikuese, dhe një qasje e ndjeshme ndaj nevojave të pacientëve dhe familjeve të tyre.',
    technical_skills:
      'Specializim në diagnostikimin dhe trajtimin e lëndimeve traumatike, sëmundjeve degjenerative të kyçeve, dhe në zbatimin e procedurave kirurgjikale rikonstruktive.',
    hobbies:
      'Pasioni për sportet e jashtme, angazhimi në aktivitete vullnetare për të promovuar një stil jetese aktiv, dhe leximi i literaturës së re mjekësore në fushën e ortopedisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Profesor Matematike në 'Universiteti i Shkencave', duke dhënë ligjërata në analizë matematike, algjebër dhe probabilitet që nga viti 2021. Ka udhëhequr projekte kërkimore në teorinë e numrave dhe ka marrë pjesë në konferenca ndërkombëtare për të ndarë rezultatet e kërkimeve (2018-2021).",
    education:
      'Master në Matematikë të Avancuar, Universiteti i Tiranës (2016-2018); Bachelor në Matematikë, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve matematikore për analizën e të dhënave dhe zgjidhjen e problemeve komplekse matematikore.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie dhe komunikim, si dhe në motivimin e studentëve për të arritur sukses akademik.',
    technical_skills:
      'Ekspertizë në analizën matematike, algjebër dhe teorinë e probabilitetit, si dhe në përdorimin e metodave të kërkimit shkencor në matematikë.',
    hobbies:
      'Interesi për zgjidhjen e enigmave matematikore, ndjekja e zhvillimeve të fundit në matematikë dhe pjesëmarrja në aktivitete vullnetare që promovojnë arsimin në matematikë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ligjërues i Matematikës në 'Kolegji Akademik', duke ofruar kurse në statistikë, matematikë financiare dhe analizë numerike për studentët e ekonomisë dhe shkencave të tjera që nga viti 2022. Ka kontribuar në zhvillimin e materialeve mësimore dhe në përmirësimin e metodave të mësimdhënies (2019-2022).",
    education:
      'Master në Edukim Matematik, Universiteti Pedagogjik i Tiranës (2017-2019); Bachelor në Shkenca Matematike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e platformave edukative online dhe në aplikimin e teknologjive të reja në mësimdhënien e matematikës.',
    soft_skills:
      'Aftësi të forta në organizim dhe planifikim mësimor, ndërtimin e një mjedisi të përfshirë dhe inkurajues për studentët, dhe në menaxhimin e klasës.',
    technical_skills:
      'Specializim në statistikë dhe matematikë financiare, me njohuri të thella në metodologjitë e kërkimit dhe analizës së të dhënave.',
    hobbies:
      'Pasioni për matematikën aplikative dhe ekonomike, angazhimi në projekte që lidhen me arsimin dhe teknologjinë në matematikë, dhe veprimtari rekreative që stimulojnë mendimin logjik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Profesor Informatike në 'Universiteti Teknologjik', duke dhënë ligjërata në programim, struktura të të dhënave dhe inteligjencë artificiale që nga viti 2021. Ka udhëhequr projekte kërkimore në fushën e sigurisë kibernetike dhe ka marrë pjesë në konferenca ndërkombëtare për të ndarë gjetjet e kërkimeve (2018-2021).",
    education:
      'Master në Shkenca Kompjuterike, Universiteti i Tiranës (2016-2018); Bachelor në Informatikë, Fakulteti i Shkencave të Informacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e gjuhëve të programimit të ndryshme, softuerëve për zhvillimin e aplikacioneve dhe platformave të analizës së të dhënave.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie dhe në motivimin e studentëve, si dhe në komunikimin efektiv me kolegët dhe bashkëpunëtorët në projekte.',
    technical_skills:
      'Ekspertizë në inteligjencën artificiale, sigurinë kibernetike dhe zhvillimin e softuerit, si dhe në përdorimin e metodave të avancuara të kërkimit shkencor.',
    hobbies:
      'Interesi për hulumtimin e teknologjive të reja, ndjekja e zhvillimeve të fundit në informatikë dhe pjesëmarrja në hackathons dhe aktivitete të tjera teknologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ligjërues i Informatikës në 'Kolegji i Shkencave Kompjuterike', duke ofruar kurse në bazat e informatikës, sigurinë e të dhënave dhe zhvillimin e aplikacioneve web që nga viti 2022. Ka kontribuar në përmirësimin e kurrikulave mësimore dhe në mentorimin e studentëve në projekte inovative (2019-2022).",
    education:
      'Master në Teknologji Informacioni, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Kompjuterike, Universiteti i Shkencave të Inxhinierisë, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e framework-eve të ndryshme për zhvillimin web, bazave të të dhënave dhe mjeteve të analizës së sigurisë.',
    soft_skills:
      'Aftësi të forta organizative dhe në menaxhimin e projekteve, si dhe aftësi të shkëlqyera në ndërtimin e marrëdhënieve me studentët për të nxitur inovacionin.',
    technical_skills:
      'Specializim në zhvillimin e softuerit dhe aplikacioneve, analizën e sistemeve dhe sigurinë e të dhënave, me një theks të veçantë në aplikimet praktike dhe zgjidhjet inovative.',
    hobbies:
      'Pasioni për kodimin dhe ndërtimin e projekteve të reja teknologjike, angazhimi në komunitete të programimit dhe organizimi i workshop-eve për zhvilluesit e rinj.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Profesor Letërsie në 'Universiteti i Arteve dhe Shkencave Humanitare', duke dhënë ligjërata në letërsinë klasike dhe moderne, teori letërsie dhe kritikë letrare që nga viti 2021. Ka udhëhequr seminare për studimin e veprave letrare dhe ka marrë pjesë në panele diskutimi dhe konferenca ndërkombëtare (2018-2021).",
    education:
      'Master në Letërsi dhe Kritikë Letrare, Universiteti i Tiranës (2016-2018); Bachelor në Letërsi, Fakulteti i Historisë dhe i Filologjisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave letrare dhe softuerëve analitikë për studimin e teksteve.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie, analizë kritike dhe në nxitjen e diskutimeve të thella letrare me studentët.',
    technical_skills:
      'Ekspertizë në analizën e veprave letrare, teorinë letrare dhe metodologjinë e kërkimit në fushën e letërsisë.',
    hobbies:
      'Interesi për leximin e veprave klasike dhe moderne, pjesëmarrja në festivale letrare dhe organizimi i leximeve publike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ligjërues i Letërsisë në 'Kolegji Akademik për Shkencat Humanitare', duke ofruar kurse në letërsinë botërore, analizë tekstuale dhe shkrim kreativ që nga viti 2022. Ka kontribuar në zhvillimin e kurrikulave të reja dhe në mentorimin e studentëve për projekte kërkimore dhe shkrime kreative (2019-2022).",
    education:
      'Master në Shkrim Kreativ dhe Studime Letrare, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Filologji, me specializim në Letërsi, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e mjeteve digitale për analizën tekstuale dhe softuerëve për publikimin e materialeve didaktike.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve me studentët, organizimin e aktiviteteve akademike dhe nxitjen e kritikës konstruktive.',
    technical_skills:
      'Specializim në shkrimin kreativ, analizën letrare dhe interpretimin e teksteve, me njohuri të thella në historinë e letërsisë dhe teorinë kritike.',
    hobbies:
      'Pasioni për të shkruar dhe lexuar poezi dhe prozë, angazhimi në projekte letrare komunitare dhe organizimi i punëtorive për shkrimtarët e rinj.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Profesor i Algoritmikës në 'Fakulteti i Inxhinierisë së Softuerit', duke ofruar ligjërata në algoritme dhe struktura të të dhënave, analizë e kompleksitetit algoritmik dhe optimizim që nga viti 2021. Ka udhëhequr projekte kërkimore në zhvillimin e algoritmeve të reja dhe ka marrë pjesë në konferenca ndërkombëtare për të ndarë gjetjet e kërkimeve (2018-2021).",
    education:
      'Master në Shkenca Kompjuterike, me specializim në Algoritmikë, Universiteti i Tiranës (2016-2018); Bachelor në Informatikë, Fakulteti i Shkencave të Informacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e gjuhëve programuese të ndryshme për implementimin e algoritmeve dhe në përdorimin e softuerëve për analizën e kompleksitetit algoritmik.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie dhe në motivimin e studentëve për zgjidhjen e problemeve komplekse, si dhe në komunikimin efektiv me kolegët për bashkëpunime kërkimore.',
    technical_skills:
      'Ekspertizë në teorinë e algoritmeve, optimizimin kombinatorik dhe analizën e algoritmeve për të dhëna të mëdha.',
    hobbies:
      'Interesi për zgjidhjen e problemeve të programimit, ndjekja e konkurseve ndërkombëtare të algoritmikës dhe organizimi i workshop-eve për studentët.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ligjërues i Algoritmikës në 'Instituti i Teknologjisë së Informacionit', duke ofruar kurse në projektimin e algoritmeve, teknikat e kërkimit dhe sortimit dhe zgjidhjen e problemeve të optimizimit që nga viti 2022. Ka kontribuar në zhvillimin e materialeve mësimore dhe në mentorimin e studentëve në projekte kërkimore (2019-2022).",
    education:
      'Master në Inxhinieri Kompjuterike, me fokus në Algoritmikë, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Matematikë dhe Informatikë, Universiteti i Shkencave Natyrore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e mjeteve matematikore dhe softuerëve për modelimin dhe analizën e problemeve algoritmike.',
    soft_skills:
      'Aftësi të forta në organizim dhe planifikim mësimor, në ndërtimin e një mjedisi të përfshirë dhe inkurajues për studentët, dhe në menaxhimin e klasës.',
    technical_skills:
      'Specializim në analizën dhe projektimin e algoritmeve të eficienta, me njohuri të thella në matematikën diskrete dhe logjikën kompjuterike.',
    hobbies:
      'Pasioni për matematikën dhe informatikën, angazhimi në projekte që lidhen me arsimin dhe teknologjinë në fushën e algoritmikës, dhe veprimtari rekreative që stimulojnë mendimin logjik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Biznesmen i suksesshëm në fushën e teknologjisë, duke themeluar dhe menaxhuar një kompani start-up që ofron zgjidhje inovative në treg që nga viti 2021. Ka zgjeruar biznesin në tregje ndërkombëtare dhe ka marrë pjesë në konferenca të rëndësishme të biznesit për të ndarë përvojat dhe sfidat (2018-2021).',
    education:
      'Master në Administrim Biznesi, me specializim në Sipërmarrje dhe Inovacion, Universiteti i Tiranës (2016-2018); Bachelor në Ekonomi, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të ndryshëm të biznesit për analizën financiare, menaxhimin e projekteve dhe marketingun dixhital.',
    soft_skills:
      'Aftësi të shkëlqyera në udhëheqje dhe menaxhim, si dhe në ndërtimin e marrëdhënieve të suksesshme me klientët dhe partnerët.',
    technical_skills:
      'Ekspertizë në planifikimin strategjik të biznesit, zhvillimin e produkteve të reja dhe në zbatimin e strategjive të marketingut inovative.',
    hobbies:
      'Interesi për të ndjekur tendencat e fundit në teknologji dhe biznes, udhëtimet për zhvillim personal dhe profesional, dhe leximi i librave mbi sipërmarrjen.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Themelues dhe Drejtor Ekzekutiv i një korporatë të madhe në sektorin e prodhimit, duke menaxhuar operacione në shkallë të gjerë dhe duke siguruar rritje të qëndrueshme të kompanisë që nga viti 2022. Ka negociuar marrëveshje të rëndësishme ndërkombëtare dhe ka udhëhequr iniciativa për përmirësimin e qëndrueshmërisë (2019-2022).',
    education:
      'Master në Menaxhim dhe Strategji Biznesi, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Menaxhim Biznesi, Universiteti i Shkencave Sociale, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Frëngjisht',
    digital_skills:
      'Përvojë në përdorimin e sistemeve të informacionit menaxherial dhe platformave të analizës së biznesit për të mbështetur vendimmarrjen.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera negociuese dhe në menaxhimin e ndryshimeve, dhe një qasje e orientuar nga rezultati.',
    technical_skills:
      'Specializim në menaxhimin e zinxhirëve të furnizimit, inovacionin në proceset e prodhimit dhe në implementimin e strategjive për zhvillim të qëndrueshëm.',
    hobbies:
      'Pasioni për inovacionin dhe zhvillimin e qëndrueshëm, ndjekja e sporteve ekstreme si mjet për të sfiduar veten, dhe angazhimi në aktivitete bamirësie.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Sipërmarrës i suksesshëm që ka themeluar dhe zhvilluar një sërë biznesesh në sektorë të ndryshëm, përfshirë teknologjinë, tregtinë elektronike dhe shërbimet financiare që nga viti 2021. Ka arritur të zgjerojë biznesin në tregje të reja dhe ka fituar çmime ndërkombëtare për inovacionin në biznes (2018-2021).',
    education:
      'Master në Sipërmarrje dhe Menaxhim Biznesi, Universiteti i Tiranës (2016-2018); Bachelor në Administrim Biznesi, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive më të fundit dixhitale për të ndihmuar në menaxhimin e bizneseve dhe në analizën e tregjeve.',
    soft_skills:
      'Aftësi të shkëlqyera në udhëheqje, negociata dhe ndërtimin e marrëdhënieve të qëndrueshme me partnerët dhe klientët.',
    technical_skills:
      'Ekspertizë në planifikimin strategjik, marketingun dixhital dhe në zbatimin e strategjive të inovacionit për rritjen e biznesit.',
    hobbies:
      'Interesi për të ndjekur tendencat e reja në teknologji dhe biznes, udhëtimet për zhvillim personal dhe profesional, dhe pjesëmarrja në maratona dhe aktivitete sportive.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Themelues dhe CEO i një start-upi në fushën e teknologjisë së informacionit, i cili ka zhvilluar një platformë inovative që ofron zgjidhje për përmirësimin e produktivitetit të kompanive që nga viti 2022. Ka arritur të sigurojë investime të rëndësishme nga kapitalistë të rrezikut dhe ka zgjeruar operacionet në nivel global (2019-2022).',
    education:
      'Master në Inovacion dhe Teknologji, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Kompjuterike, Universiteti i Shkencave të Inxhinierisë, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e platformave të ndryshme për zhvillimin e softuerit dhe në menaxhimin e projekteve teknologjike.',
    soft_skills:
      'Lidership i fortë, aftësi të larta në komunikim dhe negociata, dhe aftësi të qarta në vendimmarrje strategjike.',
    technical_skills:
      'Specializim në zhvillimin e teknologjive të reja, analizën e sistemeve dhe menaxhimin e inovacionit në sektorin e IT-së.',
    hobbies:
      'Ndjekja e kursit të fundit të teknologjisë dhe inovacionit, angazhimi në aktivitete të kodimit dhe programimit, dhe hobi në sportet e ujit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Inxhinier Ndërtimi me përvojë të gjatë në menaxhimin e projekteve të mëdha ndërtimore, duke përfshirë ndërtesat rezidenciale, zyrat dhe infrastrukturën publike që nga viti 2021. Ka udhëhequr ekipet e ndërtimit dhe ka zbatuar inovacione teknologjike për të përmirësuar efikasitetin e projekteve (2018-2021).',
    education:
      'Master në Inxhinieri Ndërtimi dhe Menaxhim Projektesh, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Civile, Fakulteti i Inxhinierisë së Ndërtimit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të ndërtimit për modelimin e informacionit të ndërtesave (BIM) dhe menaxhimin e projekteve.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me klientët dhe palët e interesit.',
    technical_skills:
      'Ekspertizë në planifikimin dhe zbatimin e projekteve ndërtimore, analizën strukturore dhe menaxhimin e rrezikut në ndërtim.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e ndërtimit, pjesëmarrja në konferenca të inxhinierisë civile, dhe aktivitete vullnetare në projekte ndërtimore me qëllim bamirësie.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë së Ndërtimit në një firmë konsulence ndërkombëtare, duke ofruar zgjidhje inxhinierike për sfidat e ndërtimit dhe infrastrukturës që nga viti 2022. Ka punuar në projekte ndërtimore në shumë vende dhe ka kontribuar në zhvillimin e standardeve të qëndrueshmërisë (2019-2022).',
    education:
      'Master në Inxhinieri të Qëndrueshme dhe Zhvillim Urban, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri dhe Menaxhim Ndërtimi, Universiteti i Shkencave të Aplikuara, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e analizave gjeospaciale dhe softuerëve të menaxhimit të projekteve për të optimizuar vendimmarrjen në ndërtim.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në negociatat me klientët dhe furnizuesit.',
    technical_skills:
      'Specializim në inxhinierinë e qëndrueshme, menaxhimin e resurseve natyrore në projekte ndërtimore dhe zbatimin e inovacioneve për infrastrukturën urbane.',
    hobbies:
      'Angazhimi në organizata profesionale për inxhinierinë civile, eksplorimi i teknologjive të reja në ndërtim, dhe udhëtimet për të mësuar mbi arkitekturën dhe kulturat ndërtimore të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Elektrik në 'Kompania Kombëtare e Energjisë Elektrike', duke punuar në projekte të mëdha të infrastrukturës energjetike, përfshirë ndërtimin dhe mirëmbajtjen e rrjeteve të transmetimit dhe shpërndarjes që nga viti 2021. Ka udhëhequr inovacione në efikasitetin e energjisë dhe në zbatimin e teknologjive të rinovueshme (2018-2021).",
    education:
      'Master në Inxhinieri Elektrike dhe Elektronike, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Elektrike, Fakulteti i Inxhinierisë Elektrike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit elektrik dhe në analizën e sistemeve energjetike përmes simulimeve kompjuterike.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me klientët dhe palët e interesit.',
    technical_skills:
      'Ekspertizë në projektimin dhe mirëmbajtjen e rrjeteve elektrike, zbatimin e teknologjive të energjisë rinovueshme dhe në menaxhimin e projekteve të infrastrukturës energjetike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e energjisë dhe teknologjisë, pjesëmarrja në konferenca të inxhinierisë elektrike, dhe aktivitetet vullnetare në projekte të energjisë rinovueshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Elektrike në një firmë ndërkombëtare të konsulencës, duke ofruar ekspertizë në optimizimin e sistemeve energjetike, studimet e fizibilitetit për projekte të reja energjetike dhe në zbatimin e standardeve të qëndrueshmërisë që nga viti 2022. Ka punuar në projekte në shumë vende dhe ka kontribuar në zhvillimin e zgjidhjeve inovative energjetike (2019-2022).',
    education:
      'Master në Sisteme Energjetike të Avancuara, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Elektrike, Fakulteti i Teknologjisë dhe Informacionit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e analizave gjeospaciale dhe softuerëve të menaxhimit të energjisë për të ndihmuar në vendimmarrjen strategjike.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në negociatat me klientët dhe furnizuesit.',
    technical_skills:
      'Specializim në analizën e sistemeve energjetike, zbatimin e projekteve të energjisë rinovueshme dhe në inovacionet për efikasitetin e energjisë.',
    hobbies:
      'Angazhimi në organizata profesionale për inxhinierinë elektrike, eksplorimi i teknologjive të reja në fushën e energjisë, dhe udhëtimet për të mësuar mbi zgjidhjet energjetike inovative në vende të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Aeronautik në 'Kompania Kombëtare e Aviacionit', duke punuar në dizajnin, zhvillimin dhe testimin e aeronautikës dhe sistemeve të avionëve që nga viti 2021. Ka kontribuar në projekte të inovacionit për efikasitetin e fluturimeve dhe reduktimin e emetimeve (2018-2021).",
    education:
      'Master në Inxhinieri Aeronautike dhe Astronautike, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Mekanike, me fokus në Aeronautikë, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të simulimit aerodinamik dhe analizës së strukturave të avionëve.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me palët e interesit dhe klientët.',
    technical_skills:
      'Ekspertizë në aerodinamikë, mekanikën e fluturimit dhe projektimin e sistemeve të avionëve, përfshirë përdorimin e teknologjive të reja për të përmirësuar performancën.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e aviacionit, pjesëmarrja në konferenca të inxhinierisë aeronautike dhe aktivitetet vullnetare në projekte të inovacionit në aviacion.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Aeronautike në një firmë ndërkombëtare të konsulencës, duke ofruar ekspertizë në optimizimin e performancës së avionëve, sigurinë e fluturimeve dhe në zhvillimin e sistemeve inovative të kontrollit të trafikut ajror që nga viti 2022. Ka punuar në projekte të ndryshme globale dhe ka ndihmuar në përmirësimin e standardeve të sigurisë ajrore (2019-2022).',
    education:
      'Master në Menaxhimin e Trafikut Ajror dhe Sigurinë e Aviacionit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Aeronautike, Universiteti i Shkencave të Aplikuara, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara për monitorimin dhe menaxhimin e trafikut ajror dhe në analizën e risqeve të sigurisë.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në komunikimin me klientët dhe autoritetet rregullatore.',
    technical_skills:
      'Specializim në sigurinë e aviacionit, menaxhimin e trafikut ajror dhe në zbatimin e inovacioneve teknologjike për të përmirësuar efikasitetin dhe sigurinë e fluturimeve.',
    hobbies:
      'Angazhimi në organizata profesionale për inxhinierinë aeronautike, pasioni për fluturimin dhe modelimin e avionëve, dhe udhëtimet për të mësuar mbi kulturat dhe sistemet e aviacionit në vende të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Naval në 'Kompania Kombëtare e Ndërtimit Anijesh', duke punuar në dizajnin dhe ndërtimin e anijeve dhe në zhvillimin e projekteve të inovacionit për performancën dhe qëndrueshmërinë e anijeve që nga viti 2021. Ka udhëhequr ekipet e inxhinierisë dhe ka zbatuar teknologji të reja në ndërtimin e anijeve (2018-2021).",
    education:
      'Master në Inxhinieri Navale dhe Oqeanike, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Mekanike, me fokus në Inxhinieri Navale, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit dhe simulimit për ndërtimin e anijeve dhe analizën e performancës hidrodinamike.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me klientët dhe palët e interesit.',
    technical_skills:
      'Ekspertizë në projektimin e anijeve, mekanikën e lëngjeve dhe inxhinierinë strukturore, përfshirë përdorimin e materialesh të reja dhe qëndrueshme.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në inxhinierinë navale, pjesëmarrja në konferenca të specializuara dhe aktivitetet vullnetare në projekte të qëndrueshmërisë detare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Navale në një firmë ndërkombëtare të konsulencës, duke ofruar ekspertizë në optimizimin e projekteve detare, sigurinë e anijeve dhe në zhvillimin e sistemeve të avancuara të propulsionit që nga viti 2022. Ka punuar në projekte të ndryshme globale dhe ka ndihmuar në përmirësimin e efikasitetit operacional të flotave (2019-2022).',
    education:
      'Master në Sisteme Detare të Avancuara, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Navale dhe Oqeanike, Universiteti i Shkencave të Aplikuara, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e analizave gjeospaciale dhe softuerëve të menaxhimit të flotave për të ndihmuar në vendimmarrjen strategjike.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në komunikimin me klientët dhe autoritetet rregullatore.',
    technical_skills:
      'Specializim në sigurinë e anijeve, menaxhimin e risqeve detare dhe në zbatimin e inovacioneve teknologjike për të përmirësuar performancën detare.',
    hobbies:
      'Angazhimi në organizata profesionale për inxhinierinë navale, pasioni për detin dhe lundrimin, dhe udhëtimet për të mësuar mbi kulturat detare në vende të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist Radiologjie në 'Qendra Kombëtare e Imazherisë Mjekësore', duke punuar në interpretimin e imazheve diagnostike, përfshirë RMN, CT dhe radiografi që nga viti 2021. Ka udhëhequr projekte për përmirësimin e teknikave të imazherisë dhe ka marrë pjesë në trajnime të specializuara (2018-2021).",
    education:
      'Master në Radiologji dhe Imazheri Mjekësore, Universiteti i Tiranës (2016-2018); Bachelor në Mjekësi, Fakulteti i Mjekësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të avancuara të imazherisë mjekësore dhe në analizën e imazheve diagnostike.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët dhe ekipet mjekësore, si dhe në interpretimin e saktë të imazheve diagnostike.',
    technical_skills:
      'Ekspertizë në teknikat e imazherisë mjekësore, përfshirë RMN, CT dhe radiografinë, dhe në menaxhimin e informacionit të imazheve.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e radiologjisë dhe imazherisë mjekësore, pjesëmarrja në konferenca mjekësore, dhe fotografimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Radiolog në 'Spitali Universitar i Shëndetit', duke ofruar konsultime dhe interpretim të imazheve për diagnozën e sëmundjeve të ndryshme që nga viti 2022. Ka kontribuar në zhvillimin e protokolleve të reja diagnostike dhe në mentorimin e rezidentëve të rinj (2019-2022).",
    education:
      'Master në Diagnostikim të Avancuar me Imazhe, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Shkenca Mjekësore, me fokus në Radiologji, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të imazherisë mjekësore dhe softuerëve për menaxhimin e të dhënave të pacientëve.',
    soft_skills:
      'Lidership në menaxhimin e ekipit radiologjik, aftësi të shkëlqyera në komunikimin me pacientët për të sqaruar procedurat diagnostike.',
    technical_skills:
      'Specializim në interpretimin e imazheve diagnostike, përfshirë studimet me ultratingull, CT, dhe RMN, dhe në përdorimin e teknikave të avancuara diagnostike.',
    hobbies:
      'Pasioni për hulumtimin në fushën e radiologjisë, angazhimi në projekte të edukimit mjekësor për radiologjinë, dhe aktivitetet e jashtme si hiking dhe fotografimi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Farmacist në 'Farmacia Qendrore', duke ofruar këshillim mjekësor dhe shpërndarje të medikamenteve për pacientët që nga viti 2021. Ka përmirësuar praktikat e farmacisë dhe ka marrë pjesë në trajnime për menaxhimin e rasteve të emergjencës mjekësore (2018-2021).",
    education:
      'Master në Farmaci, Universiteti i Tiranës (2016-2018); Bachelor në Shkencat Farmaceutike, Fakulteti i Farmacisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të informacionit farmaceutik dhe softuerëve për menaxhimin e inventarit të medikamenteve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me pacientët për të ofruar këshillim të saktë mjekësor, si dhe në menaxhimin e situatave të ndryshme në farmaci.',
    technical_skills:
      'Ekspertizë në njohuritë farmaceutike, përfshirë farmakologjinë, toksikologjinë dhe menaxhimin e terapive me medikamente.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e farmacisë, pjesëmarrja në konferenca mjekësore dhe farmaceutike, dhe leximi i publikimeve shkencore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Menaxher i Farmacisë në 'Zinxhiri i Farmacive Shëndetësore', duke siguruar furnizimin efikas të medikamenteve dhe produktet shëndetësore që nga viti 2022. Ka implementuar protokolle të reja për përmirësimin e cilësisë së shërbimit dhe ka udhëhequr trajnime për stafin farmaceutik (2019-2022).",
    education:
      'Master në Menaxhim Shëndetësor dhe Farmaceutik, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Farmaci, Universiteti i Shkencave Mjekësore, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të informacionit për të përmirësuar efikasitetin operacional të farmacive.',
    soft_skills:
      'Lidership i fortë, aftësi të shkëlqyera organizative dhe komunikuese, dhe një qasje e orientuar nga pacienti për të ofruar shërbim të lartë cilësor.',
    technical_skills:
      'Specializim në menaxhimin e farmacive, praktikat e sigurisë së medikamenteve dhe në zbatimin e politikave shëndetësore dhe rregullatore.',
    hobbies:
      'Angazhimi në iniciativa për edukimin e komunitetit mbi çështjet e shëndetit dhe medikamenteve, veprimtari vullnetare në organizata shëndetësore, dhe sportet për të mbajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Historian në 'Instituti Kombëtar i Studimeve Historike', duke kryer kërkime në historinë e Ballkanit dhe Europës Juglindore që nga viti 2021. Ka publikuar artikuj në revista të njohura historike dhe ka marrë pjesë në konferenca ndërkombëtare për të diskutuar gjetjet e kërkimeve (2018-2021).",
    education:
      'Master në Histori dhe Kulturë, Universiteti i Tiranës (2016-2018); Bachelor në Histori, Fakulteti i Historisë dhe i Filologjisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave digjitale historike dhe softuerëve për analizën e teksteve historike.',
    soft_skills:
      'Aftësi të shkëlqyera në kërkim dhe analizë historike, si dhe në komunikimin e gjetjeve me një audiencë të gjerë.',
    technical_skills:
      'Ekspertizë në metodologjinë e kërkimit historik, interpretimin e burimeve arkivore dhe në hartimin e narrativave historike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në historiografi, pjesëmarrja në gërmime arkeologjike dhe vizitat në muze dhe arkiva.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lektor i Historisë në 'Universiteti i Shkencave Sociale', duke ofruar kurse në historinë e lashtë, mesjetare dhe moderne që nga viti 2022. Ka udhëhequr projekte të kërkimit studentor dhe ka kontribuar në zhvillimin e materialeve mësimore dhe kurrikulave të reja (2019-2022).",
    education:
      'Master në Histori dhe Arkeologji, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Histori, Universiteti i Arteve, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të informacionit për të mbështetur kërkimin dhe mësimdhënien në histori.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve me studentët, organizimin e aktiviteteve akademike dhe nxitjen e kritikës konstruktive.',
    technical_skills:
      'Specializim në historinë e lashtë dhe mesjetare, analizën e dokumenteve historike dhe në zbatimin e metodave të avancuara të kërkimit.',
    hobbies:
      'Pasioni për arkeologjinë dhe eksplorimin e vendndodhjeve historike, angazhimi në projekte të edukimit historik për të rinjtë, dhe leximi i literaturës historike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Arkeolog në 'Instituti Arkeologjik Kombëtar', duke udhëhequr gërmime dhe kërkime në vendndodhje të ndryshme historike në Shqipëri që nga viti 2021. Ka zbuluar artefakte të rëndësishme që hedhin dritë mbi periudha të ndryshme historike dhe ka marrë pjesë në projekte ndërkombëtare (2018-2021).",
    education:
      'Master në Arkeologji dhe Histori Antike, Universiteti i Tiranës (2016-2018); Bachelor në Arkeologji, Fakulteti i Historisë dhe i Filologjisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të avancuara për dokumentimin dhe analizën e gjetjeve arkeologjike.',
    soft_skills:
      'Aftësi të shkëlqyera në organizimin e ekipit të gërmimit, komunikimin e zbulimeve me publikun dhe në bashkëpunimin me institucione ndërkombëtare.',
    technical_skills:
      'Ekspertizë në identifikimin dhe konservimin e artefakteve, interpretimin e vendndodhjeve arkeologjike dhe në metodologjinë e kërkimit arkeologjik.',
    hobbies:
      'Interesi për historinë e lashtë, pjesëmarrja në konferenca arkeologjike dhe aktivitetet vullnetare për mbrojtjen e trashëgimisë kulturore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lektor i Arkeologjisë në 'Universiteti i Shkencave dhe Teknologjisë', duke ofruar kurse në arkeologjinë e Mesdheut, metodat e kërkimit në terren dhe historinë e artit antik që nga viti 2022. Ka udhëhequr ekspedita arkeologjike dhe ka kontribuar në publikimin e studimeve të rëndësishme (2019-2022).",
    education:
      'Master në Arkeologji dhe Konservim, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Histori dhe Arkeologji, Universiteti i Arteve, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e GIS dhe softuerëve të analizës për të hartuar dhe menaxhuar vendndodhjet arkeologjike.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve akademike, në mentorimin e studentëve dhe në organizimin e ekspeditave të kërkimit.',
    technical_skills:
      'Specializim në arkeologjinë e periudhave të caktuara historike, teknikat e gërmimit dhe konservimit, dhe në analizën e materialit kulturor.',
    hobbies:
      'Pasioni për eksplorimin e qytetërimeve të lashta, angazhimi në projekte të restaurimit të vendndodhjeve historike, dhe veprimtari rekreative që lidhen me natyrën dhe udhëtimet.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Arkeologji në Universitetin e Tiranës, aktiv në projekte të gërmimeve arkeologjike dhe në punime kërkimore lidhur me qytetërimet e lashta të Ballkanit që nga viti 2021. Ka marrë pjesë në ekspedita arkeologjike si asistent kërkimi dhe ka kontribuar në analizën e artefakteve të gjetura (2019-2021).',
    education:
      'Duke ndjekur Master në Arkeologji dhe Histori Antike, Universiteti i Tiranës; Bachelor në Arkeologji, Fakulteti i Historisë dhe i Filologjisë, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për dokumentimin arkeologjik dhe analizën e të dhënave.',
    soft_skills:
      'Aftësi të mira organizative dhe komunikuese, si dhe në punën në ekip dhe në analizën kritike të gjetjeve arkeologjike.',
    technical_skills:
      'Njohuri bazë në identifikimin dhe konservimin e artefakteve, dhe në metodologjinë e kërkimit arkeologjik.',
    hobbies:
      'Interesi i thellë për arkeologjinë e periudhave të ndryshme historike, pjesëmarrja në seminare dhe konferenca të fushës, dhe leximi i literaturës arkeologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Studente e përkushtuar në Arkeologji në Universitetin Politeknik të Tiranës, e përfshirë në projekte të ndryshme kërkimore dhe aktivitete vullnetare për ruajtjen e vendndodhjeve arkeologjike që nga viti 2022. Ka ndihmuar në organizimin e punëtorive edukative për fëmijët mbi rëndësinë e arkeologjisë (2020-2022).',
    education:
      'Duke ndjekur Master në Konservim dhe Restaurim Arkeologjik, Universiteti Politeknik i Tiranës; Bachelor në Histori dhe Arkeologji, Universiteti i Arteve, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive digjitale për katalogimin e gjetjeve arkeologjike dhe në përdorimin e GIS për analizën e vendndodhjeve.',
    soft_skills:
      'Aftësi të forta në komunikim dhe organizim, si dhe në punën vullnetare dhe në ndërgjegjësimin kulturor.',
    technical_skills:
      'Njohuri në teknikat e gërmimit, konservimit dhe në përdorimin e metodave shkencore për studimin e artefakteve arkeologjike.',
    hobbies:
      'Pasioni për udhëtimet në vendndodhje historike, angazhimi në aktivitete që promovojnë arkeologjinë si dhe praktika të qëndrueshme për mbrojtjen e trashëgimisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Histori në Universitetin e Tiranës, i përfshirë në kërkime dhe projekte akademike që trajtojnë periudha të ndryshme historike të Shqipërisë dhe Europës që nga viti 2021. Ka marrë pjesë në konferenca studentore dhe ka kontribuar në publikimin e artikujve të kërkimit (2019-2021).',
    education:
      'Duke ndjekur Master në Histori dhe Kulturë, Universiteti i Tiranës; Bachelor në Histori, Fakulteti i Historisë dhe i Filologjisë, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave digjitale historike dhe softuerëve për analizën e teksteve historike.',
    soft_skills:
      'Aftësi të mira organizative dhe komunikuese, si dhe në punën në ekip dhe në analizën kritike të burimeve historike.',
    technical_skills:
      'Njohuri bazë në metodologjinë e kërkimit historik, interpretimin e burimeve arkivore dhe në hartimin e narrativave historike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në historiografi, pjesëmarrja në aktivitete kulturore dhe historike, dhe leximi i literaturës historike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Studente e angazhuar në Histori në Universitetin Politeknik të Tiranës, e përfshirë në studimin e historisë së qytetërimeve të lashta dhe mesjetare që nga viti 2022. Ka ndihmuar në organizimin e ekspozitave historike dhe ka marrë pjesë në projekte të kërkimit në arkiva dhe biblioteka (2020-2022).',
    education:
      'Duke ndjekur Master në Histori dhe Arkeologji, Universiteti Politeknik i Tiranës; Bachelor në Histori, Universiteti i Arteve, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive digjitale për katalogimin e dokumenteve historike dhe në përdorimin e softuerëve për analizën e burimeve.',
    soft_skills:
      'Aftësi të forta në komunikim dhe organizim, si dhe në ndërgjegjësimin kulturor dhe në punën vullnetare.',
    technical_skills:
      'Njohuri në teknikat e kërkimit historik, analizën e dokumenteve dhe në interpretimin e konteksteve historike.',
    hobbies:
      'Pasioni për udhëtimet në vendndodhje historike, angazhimi në iniciativa kulturore që promovojnë historinë, dhe leximi i veprave historike dhe arkeologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Matematikë në Universitetin e Tiranës, i përfshirë në projekte kërkimore që fokusohen në analizën matematike dhe algjebër që nga viti 2021. Ka marrë pjesë në olimpiadat kombëtare të matematikës dhe ka publikuar artikuj në revista studentore (2019-2021).',
    education:
      'Duke ndjekur Master në Matematikë të Avancuar, Universiteti i Tiranës; Bachelor në Matematikë, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve matematikore për zgjidhjen e problemeve komplekse dhe në analizën e të dhënave.',
    soft_skills:
      'Aftësi të mira organizative dhe analitike, si dhe në punën në ekip dhe në prezantimin e ideve matematikore.',
    technical_skills:
      'Njohuri në analizën matematike, algjebër dhe teorinë e probabilitetit, si dhe në përdorimin e metodave të kërkimit shkencor në matematikë.',
    hobbies:
      'Interesi për zgjidhjen e enigmave matematikore, ndjekja e zhvillimeve të fundit në matematikë dhe pjesëmarrja në garat e matematikës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Studente e përkushtuar në Matematikë në Universitetin Politeknik të Tiranës, e përfshirë në studimin e statistikës, matematikës financiare dhe analizës numerike që nga viti 2022. Ka kontribuar në projekte kërkimore me fokus në zbatimin e matematikës në ekonomi dhe shkenca të tjera (2020-2022).',
    education:
      'Duke ndjekur Master në Matematikë dhe Statistikë Aplikative, Universiteti Politeknik i Tiranës; Bachelor në Shkenca Matematike, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve statistikorë dhe programet për modelimin matematik dhe analizën e të dhënave.',
    soft_skills:
      'Aftësi të forta organizative, analitike dhe në komunikimin e koncepteve matematikore në mënyrë të qartë.',
    technical_skills:
      'Specializim në statistikë, matematikë financiare dhe analizë numerike, me njohuri të thella në metodologjitë e kërkimit dhe analizës së të dhënave.',
    hobbies:
      'Pasioni për matematikën aplikative dhe ekonomike, angazhimi në projekte që lidhen me arsimin dhe teknologjinë në matematikë, dhe veprimtari rekreative që stimulojnë mendimin logjik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Inxhinieri Elektrike në Universitetin e Tiranës, i angazhuar në projekte të ndryshme akademike dhe kërkimore që lidhen me energjinë rinovueshme dhe sistemet e kontrollit që nga viti 2021. Ka marrë pjesë në konkurse ndërkombëtare të inxhinierisë dhe ka publikuar artikuj në revista studentore (2019-2021).',
    education:
      'Duke ndjekur Master në Inxhinieri Elektrike dhe Elektronike, Universiteti i Tiranës; Bachelor në Inxhinieri Elektrike, Fakulteti i Inxhinierisë Elektrike, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit elektrik dhe simulimit të sistemeve elektrike.',
    soft_skills:
      'Aftësi të mira organizative dhe analitike, si dhe në punën në ekip dhe në komunikimin e ideve teknike.',
    technical_skills:
      'Njohuri në fushat e energjisë rinovueshme, sistemeve të kontrollit elektrik dhe në projektimin e qarqeve elektronike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë elektrike dhe elektronike, pjesëmarrja në aktivitete dhe konkurse të inxhinierisë, dhe ndërtimi i projekteve elektronike si hobi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Studente e Inxhinierisë Elektrike në Universitetin Politeknik të Tiranës, me një fokus të veçantë në telekomunikacion dhe rrjete, duke u marrë me kërkime dhe projekte që aplikojnë teknologjitë e reja në fushën e telekomunikacionit që nga viti 2022. Ka ndihmuar në organizimin e seminareve akademike dhe ka qenë pjesë e ekipeve të projekteve inovative (2020-2022).',
    education:
      'Duke ndjekur Master në Inxhinieri Telekomunikacioni, Universiteti Politeknik i Tiranës; Bachelor në Inxhinieri Elektrike, Fakulteti i Teknologjisë dhe Informacionit, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive të avancuara për analizën e rrjeteve dhe në projektimin e sistemeve telekomunikacioni.',
    soft_skills:
      'Aftësi të forta në analizë dhe zgjidhje problemesh, në punën në ekip dhe në komunikimin efektiv të rezultateve të projekteve.',
    technical_skills:
      'Specializim në telekomunikacion dhe rrjete, me njohuri të thella në protokollet e komunikimit dhe sigurinë e rrjetit.',
    hobbies:
      'Pasioni për teknologjinë dhe inovacionin në fushën e telekomunikacionit, angazhimi në projekte të teknologjisë së informacionit, dhe praktika e sporteve elektronike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Inxhinieri Hidraulike në Universitetin e Tiranës, i angazhuar në studimin e menaxhimit të ujërave dhe projektimit të sistemeve hidraulike që nga viti 2021. Ka marrë pjesë në projekte kërkimore për zhvillimin e zgjidhjeve të qëndrueshme në menaxhimin e resurseve ujore (2019-2021).',
    education:
      'Duke ndjekur Master në Inxhinieri Hidraulike dhe Ambientale, Universiteti i Tiranës; Bachelor në Inxhinieri Civile, me fokus në Hidraulikë, Fakulteti i Inxhinierisë, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin hidraulik dhe analizën e sistemeve të menaxhimit të ujit.',
    soft_skills:
      'Aftësi të mira organizative dhe analitike, si dhe në punën në ekip dhe në prezantimin e projekteve kërkimore.',
    technical_skills:
      'Njohuri në menaxhimin e resurseve ujore, projektimin e sistemeve hidraulike dhe në zbatimin e teknologjive të qëndrueshme mjedisore.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në inxhinieri hidraulike dhe mjedisore, pjesëmarrja në seminare dhe konferenca të fushës, dhe aktivitetet vullnetare për mbrojtjen e mjedisit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Studente e Inxhinierisë Hidraulike në Universitetin Politeknik të Tiranës, e përkushtuar në kërkimin e teknologjive të reja për trajtimin dhe ri-përdorimin e ujërave të zeza që nga viti 2022. Ka kontribuar në zhvillimin e modeleve inovative për pastrimin e ujërave dhe ka ndihmuar në organizimin e punëtorive edukative (2020-2022).',
    education:
      'Duke ndjekur Master në Menaxhimin e Ujërave dhe Inxhinieri Ambientale, Universiteti Politeknik i Tiranës; Bachelor në Inxhinieri Mjedisore, Universiteti i Shkencave të Aplikuara, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive informative për menaxhimin e të dhënave mjedisore dhe në softuerët e projektimit mjedisor.',
    soft_skills:
      'Aftësi të forta në analizë dhe zgjidhje problemesh, në komunikimin efektiv dhe në organizimin e aktiviteteve edukative mjedisore.',
    technical_skills:
      'Specializim në trajtimin e ujërave të zeza, teknologjitë e ri-përdorimit të ujit dhe në zbatimin e masave për përmirësimin e cilësisë së ujit.',
    hobbies:
      'Pasioni për inovacionin mjedisor, angazhimi në projekte të qëndrueshmërisë ujore dhe në aktivitete që promovojnë ndërgjegjësimin për ruajtjen e burimeve natyrore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Mekanik në 'Kompania Kombëtare e Prodhimit Mekanik', duke punuar në dizajnimin dhe zhvillimin e sistemeve mekanike inovative për industrinë automobilistike dhe aeronautike që nga viti 2021. Ka udhëhequr ekipet e inxhinierisë për të përmirësuar efikasitetin dhe performancën e produkteve (2018-2021).",
    education:
      'Master në Inxhinieri Mekanike, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Mekanike, Fakulteti i Inxhinierisë Mekanike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit asistuar nga kompjuteri (CAD) dhe analizës së elementeve të kufizuara (FEA).',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me klientët dhe palët e interesit.',
    technical_skills:
      'Ekspertizë në projektimin mekanik, dinamikën e fluidit kompjuterik (CFD), dhe në menaxhimin e projekteve të inxhinierisë mekanike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë mekanike, pjesëmarrja në konferenca të inxhinierisë, dhe ndërtimi i projekteve personale si hobi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Mekanike në një firmë ndërkombëtare të konsulencës, duke ofruar ekspertizë në optimizimin e proceseve prodhuese dhe në zbatimin e teknologjive të reja në sektorë të ndryshëm industrialë që nga viti 2022. Ka punuar në projekte të ndryshme globale dhe ka ndihmuar në përmirësimin e efikasitetit dhe qëndrueshmërisë (2019-2022).',
    education:
      'Master në Menaxhimin e Inxhinierisë dhe Teknologjisë, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Mekanike, Fakulteti i Teknologjisë dhe Informacionit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve për menaxhimin e projekteve dhe në analizën e të dhënave për të ndihmuar në vendimmarrjen strategjike.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në komunikimin me klientët dhe furnizuesit.',
    technical_skills:
      'Specializim në optimizimin e proceseve prodhuese, zbatimin e Lean Manufacturing dhe në inovacionet për përmirësimin e qëndrueshmërisë industriale.',
    hobbies:
      'Angazhimi në organizata profesionale për inxhinierinë mekanike, pasioni për ndërtimin dhe modelimin 3D, dhe udhëtimet për të mësuar mbi inovacionet industriale në vende të ndryshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Kompjuterik në 'Teknologjia Informative dhe Komunikimi', duke punuar në zhvillimin e softuerit dhe zgjidhjeve teknologjike për biznese dhe organizata që nga viti 2021. Ka udhëhequr projekte për sistemet e menaxhimit të bazave të të dhënave dhe zhvillimin e aplikacioneve mobile (2018-2021).",
    education:
      'Master në Inxhinieri Kompjuterike dhe Teknologji Informative, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Kompjuterike, Fakulteti i Inxhinierisë Elektrike dhe Kompjuterike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e gjuhëve programuese të ndryshme, zhvillimin e softuerit, dhe në menaxhimin e projekteve teknologjike.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në komunikimin efektiv me klientët dhe palët e interesit.',
    technical_skills:
      'Ekspertizë në bazat e të dhënave, zhvillimin e aplikacioneve web dhe mobile, dhe në sigurinë e rrjetit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e informacionit, pjesëmarrja në konferenca të teknologjisë, dhe projektet personale të programimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Teknologjisë së Informacionit në një firmë ndërkombëtare të konsulencës, duke ofruar zgjidhje për përmirësimin e infrastrukturës IT dhe sistemeve të sigurisë për klientë të ndryshëm që nga viti 2022. Ka punuar në implementimin e rrjeteve të sigurta dhe në zhvillimin e strategjive të teknologjisë së informacionit (2019-2022).',
    education:
      'Master në Siguri Kompjuterike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri e Teknologjisë së Informacionit, Fakulteti i Teknologjisë dhe Informacionit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara për sigurinë e të dhënave dhe në analizën dhe menaxhimin e rrjeteve të ndërlikuara.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve ndërkombëtare, aftësi të shkëlqyera në zgjidhjen e problemeve dhe në komunikimin me klientët.',
    technical_skills:
      'Specializim në sigurinë kompjuterike, rrjetet kompjuterike dhe në zbatimin e politikave të sigurisë së informacionit.',
    hobbies:
      'Angazhimi në projekte të kodimit të hapur, pasioni për sigurinë kibernetike, dhe ndjekja e kurseve online për teknologjitë e reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Hidraulik në 'Korporata e Ujësjellësve dhe Kanalizimeve', duke punuar në projektimin dhe ndërtimin e infrastrukturave të menaxhimit të ujit që nga viti 2021. Ka udhëhequr inovacione në teknologjitë e trajtimit të ujërave dhe ka marrë pjesë në projekte ndërkombëtare për menaxhimin e burimeve ujore (2018-2021).",
    education:
      'Master në Inxhinieri Hidraulike dhe Menaxhimin e Resurseve Ujore, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Civile, me specializim në Hidraulikë, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin hidraulik dhe analizën e sistemeve të ujësjellësve.',
    soft_skills:
      'Aftësi të shkëlqyera në udhëheqjen e ekipit, komunikimin me palët e interesit dhe në zgjidhjen e problemeve komplekse inxhinierike.',
    technical_skills:
      'Ekspertizë në projektimin e infrastrukturave hidraulike, menaxhimin e burimeve ujore dhe aplikimin e teknologjive të qëndrueshme për trajtimin e ujit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e menaxhimit të ujit, pjesëmarrja në konferenca dhe simpoziume të fushës, dhe aktivitetet vullnetare për mbrojtjen e mjedisit ujor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Hidraulike në një firmë ndërkombëtare të konsulencës, duke ofruar zgjidhje për sfidat e menaxhimit të ujit në projekte të ndërtimit që nga viti 2022. Ka kontribuar në analizën dhe zgjidhjen e problemeve të përmbytjeve dhe në zhvillimin e planeve për përmirësimin e infrastrukturës hidraulike (2019-2022).',
    education:
      'Master në Inxhinieri Hidraulike dhe Ambientale, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri dhe Menaxhim Ndërtimi, Universiteti i Shkencave të Aplikuara, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve të analizës dhe simulimit hidraulik për të ndihmuar në planifikimin dhe zbatimin e projekteve.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve, aftësi të shkëlqyera në komunikimin me klientët dhe në ndërtimin e zgjidhjeve inovative.',
    technical_skills:
      'Specializim në analizën e rrezikut të përmbytjeve, projektimin e sistemave të menaxhimit të ujërave të shiut dhe në zbatimin e masave të qëndrueshmërisë ambientale.',
    hobbies:
      'Angazhimi në iniciativa për ndërgjegjësimin mbi ndryshimet klimatike, pasioni për teknologjitë e reja në inxhinierinë hidraulike, dhe eksplorimi i natyrës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teolog në 'Instituti i Studimeve Teologjike', duke punuar në kërkimin dhe interpretimin e teksteve fetare dhe në organizimin e konferencave për diskutimin e çështjeve teologjike që nga viti 2021. Ka marrë pjesë në projekte ndërkombëtare për dialogun ndërfetar dhe ka kontribuar në publikimin e artikujve teologjikë (2018-2021).",
    education:
      'Master në Teologji dhe Studime Fetare, Universiteti i Tiranës (2016-2018); Bachelor në Teologji, Fakulteti i Shkencave Humane, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave digjitale fetare dhe softuerëve për analizën e teksteve teologjike.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën kritike dhe interpretimin e teksteve, si dhe në komunikimin e ideve teologjike me një audiencë të gjerë.',
    technical_skills:
      'Ekspertizë në hermeneutikën fetare, historinë e religjioneve dhe në metodologjinë e kërkimit në studimet fetare.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teologji dhe studime fetare, pjesëmarrja në aktivitete ndërfetare dhe dialogun kulturor, dhe leximi i literaturës fetare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lektor i Teologjisë në 'Universiteti i Shkencave Sociale', duke ofruar kurse në historinë e religjioneve, etikën dhe filozofinë fetare që nga viti 2022. Ka udhëhequr seminare për studentët dhe ka kontribuar në zhvillimin e kurrikulave të reja teologjike (2019-2022).",
    education:
      'Master në Filozofi dhe Etikë, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Studime Teologjike, Universiteti i Arteve, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e mjeteve digjitale për kërkimin dhe mësimdhënien në teologji.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve me studentët, në organizimin e aktiviteteve akademike dhe në nxitjen e dialogut ndërfetar.',
    technical_skills:
      'Specializim në historinë dhe filozofinë e religjioneve, etikën fetare dhe në interpretimin e koncepteve teologjike.',
    hobbies:
      'Pasioni për studimin e teksteve fetare dhe filozofike, angazhimi në dialogun kulturor dhe ndërfetar, dhe aktivitetet e meditimit dhe reflektimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Biomjekësor në 'Qendra Kombëtare e Teknologjisë Mjekësore', duke punuar në zhvillimin dhe përmirësimin e pajisjeve mjekësore dhe teknologjive të diagnostikimit që nga viti 2021. Ka udhëhequr projekte për inovacionet në pajisjet e imazherisë dhe monitorimin e pacientëve (2018-2021).",
    education:
      'Master në Inxhinieri Biomjekësore, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Elektrike dhe Elektronike, me fokus në Biomjekësi, Fakulteti i Inxhinierisë Elektrike dhe Kompjuterike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për projektimin e pajisjeve mjekësore dhe analizën e të dhënave biomedikale.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, komunikimin me ekipet shëndetësore dhe në zgjidhjen e problemeve teknike.',
    technical_skills:
      'Ekspertizë në projektimin e pajisjeve mjekësore, teknologjitë e diagnostikimit dhe në zbatimin e standardeve të sigurisë për pajisjet mjekësore.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e teknologjisë mjekësore, pjesëmarrja në konferenca të inxhinierisë biomjekësore, dhe eksperimentimi me projekte të reja teknologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Biomjekësore në një firmë ndërkombëtare të teknologjisë shëndetësore, duke ofruar zgjidhje për optimizimin e sistemeve të kujdesit shëndetësor dhe në zbatimin e teknologjive inovative për trajtimin e pacientëve që nga viti 2022. Ka punuar në projekte për zhvillimin e aplikacioneve mjekësore mobile dhe sistemeve të ndihmës për vendimmarrjen mjekësore (2019-2022).',
    education:
      'Master në Teknologji Shëndetësore dhe Inxhinieri Biomjekësore, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Biomjekësore, Fakulteti i Shkencave të Aplikuara, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e platformave të analizës së të dhënave shëndetësore dhe në projektimin e interfazave për aplikacionet mjekësore.',
    soft_skills:
      'Lidership në menaxhimin e projekteve teknologjike, aftësi të shkëlqyera në ndërtimin e marrëdhënieve me klientët dhe në analizën e nevojave mjekësore.',
    technical_skills:
      'Specializim në zhvillimin e teknologjive mjekësore, sistemet e informacionit shëndetësor dhe në sigurinë e të dhënave mjekësore.',
    hobbies:
      'Angazhimi në hulumtimin e teknologjive të reja në kujdesin shëndetësor, pjesëmarrja në hackathons mjekësore, dhe veprimtari vullnetare në organizata shëndetësore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Biokimist në 'Instituti Kombëtar i Biokimisë', duke punuar në kërkimin dhe analizën e proceseve kimike në organizmat e gjallë që nga viti 2021. Ka udhëhequr studime për të kuptuar mekanizmat molekularë të sëmundjeve dhe ka marrë pjesë në projekte ndërkombëtare për zhvillimin e terapive të reja (2018-2021).",
    education:
      'Master në Biokimi dhe Biologji Molekulare, Universiteti i Tiranës (2016-2018); Bachelor në Shkencat Kimike, me fokus në Biokimi, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për analizën e të dhënave biokimike dhe në menaxhimin e bazave të të dhënave shkencore.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën kritike dhe interpretimin e rezultateve, si dhe në komunikimin e zbulimeve shkencore me një audiencë të gjerë.',
    technical_skills:
      'Ekspertizë në teknikat e biokimisë dhe biologjisë molekulare, përfshirë spektroskopinë, kromatografinë dhe elektroforezën.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e biokimisë, pjesëmarrja në konferenca shkencore, dhe eksperimentimi në laborator për hulumtime të reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Lektor i Biokimisë në 'Universiteti i Shkencave dhe Teknologjisë', duke ofruar kurse në enzimologji, metabolizmin dhe biokiminë strukturore që nga viti 2022. Ka udhëhequr projekte të kërkimit me studentët dhe ka kontribuar në publikimin e studimeve në revista të njohura (2019-2022).",
    education:
      'Master në Shkencat e Jetës dhe Biokimi, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Biokimi, Fakulteti i Biologjisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive informative për të mbështetur kërkimin dhe mësimdhënien në biokimi.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve akademike, në mentorimin e studentëve dhe në organizimin e aktiviteteve kërkimore.',
    technical_skills:
      'Specializim në biokiminë analitike, metodat e hulumtimit në biokimi dhe në interpretimin e strukturave molekulare.',
    hobbies:
      'Pasioni për hulumtimin në biokimi, angazhimi në dialogun shkencor dhe ndërfetar, dhe aktivitetet e meditimit dhe reflektimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Student në Artin e Tatuazhit në Akademinë e Arteve, duke mësuar dhe praktikuar teknikat e ndryshme të tatuazhit, përfshirë stilin realist dhe atë tradicional që nga viti 2021. Ka marrë pjesë në punëtori të ndryshme për të thelluar njohuritë në dizajnimin e tatuazheve dhe higjienën (2019-2021).',
    education:
      'Duke ndjekur Master në Arte Vizuale me fokus në Artin e Tatuazhit, Akademia e Arteve, Tiranë; Bachelor në Dizajn Grafik, Fakulteti i Arteve Vizuale, Akademia e Arteve, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të dizajnit grafik për të krijuar skica dhe modele për tatuazhe.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me klientët për të kuptuar nevojat dhe preferencat e tyre, si dhe në menaxhimin e kohës dhe projektet.',
    technical_skills:
      'Njohuri në teknikat e tatuazhit, përfshirë kontrollin e makinës së tatuazhit, zgjedhjen e ngjyrave dhe mirëmbajtjen e pajisjeve.',
    hobbies:
      'Interesi për të ndjekur trendet e fundit në artin e tatuazhit, pjesëmarrja në ekspozita dhe festivale të artit, dhe praktika e vizatimit dhe pikturimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Studente e Artit të Tatuazhit në 'Shkolla Profesionale e Arteve dhe Dizajnit', duke eksploruar dhe eksperimentuar me stile dhe teknika të ndryshme tatuazhi që nga viti 2022. Ka organizuar dhe marrë pjesë në sesione praktike me artistë të njohur të tatuazhit për të mësuar nga përvojat e tyre (2020-2022).",
    education:
      'Duke ndjekur Master në Dizajn dhe Art Kontemporan me fokus në Tatuazh, Universiteti Politeknik i Tiranës; Bachelor në Arte Vizuale, me theks në Dizajn dhe Artin e Tatuazhit, Universiteti i Arteve, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e teknologjive dhe softuerëve të dizajnit për të krijuar dhe përshtatur dizajne tatuazhi.',
    soft_skills:
      'Aftësi të forta në ndërtimin e marrëdhënieve me klientët, prezentimin e ideve artistike dhe në organizimin e aktiviteteve dhe projekteve kreative.',
    technical_skills:
      'Specializim në artin e tatuazhit, duke përfshirë teknikat e hollësisë së lartë, higjienën dhe kujdesin pas tatuazhit, dhe në përdorimin e lëndëve të ndryshme.',
    hobbies:
      'Pasioni për artin dhe kulturën e tatuazhit, angazhimi në projekte të artit komunitar, dhe hobi në fotografi dhe artin vizual.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Rrobaqepëse me përvojë në 'Dyqani i Modës së Personalizuar', duke punuar në dizajnimin dhe qepjen e veshjeve të personalizuara për klientë që nga viti 2021. Ka marrë pjesë në trajnime për teknikat e reja të qepjes dhe dizajnit dhe ka kontribuar në shfaqjet e modës lokale (2018-2021).",
    education:
      'Master në Dizajn të Modës, Universiteti i Tiranës (2016-2018); Bachelor në Teknologjinë e Modës dhe Dizajn, Fakulteti i Arteve dhe Dizajnit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të dizajnit të modës për të krijuar skica dhe modele të veshjeve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikim me klientët për të kuptuar nevojat dhe dëshirat e tyre, si dhe në organizimin e punës dhe menaxhimin e kohës.',
    technical_skills:
      'Ekspertizë në qepjen me dorë dhe me makineri, përdorimin e teknikave të ndryshme të qepjes, dhe njohuritë në përzgjedhjen e materialit dhe aksesorëve.',
    hobbies:
      'Interesi për të ndjekur trendet e fundit në modë, pjesëmarrja në workshope dhe kurse të qepjes, dhe kultivimi i një koleksioni personal të veshjeve të dizajnuara vetë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialiste e Qepjes dhe Dizajnit në 'Studio e Modës Kreative', duke ofruar konsulencë dhe zgjidhje të personalizuara në qepjen dhe ristrukturimin e veshjeve që nga viti 2022. Ka zhvilluar linja të reja të veshjeve dhe aksesorëve duke përdorur materiale të qëndrueshme (2019-2022).",
    education:
      'Master në Menaxhimin e Modës dhe Marketing, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Dizajn të Veshjeve, Akademia e Dizajnit, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive digitale për dizajnimin e modës dhe në menaxhimin e portofolit të projekteve.',
    soft_skills:
      'Aftësi të forta në krijimtari dhe inovacion, në komunikimin vizual dhe oral, dhe në ndërtimin e marrëdhënieve me klientët.',
    technical_skills:
      'Specializim në teknikat e qepjes, dizajnit të modës, dhe në përdorimin e materialeve të qëndrueshme për të krijuar veshje unike.',
    hobbies:
      'Pasioni për artin e qepjes dhe dizajnit të modës, angazhimi në projekte të ndërgjegjësimit për modën e qëndrueshme, dhe hobi në fotografinë e modës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Doganier në 'Administrata Doganore e Shqipërisë', duke punuar në inspektimin dhe kontrollin e mallrave që hyjnë dhe dalin nga vendi që nga viti 2021. Ka marrë pjesë në trajnime të avancuara për luftën kundër kontrabandës dhe ka kontribuar në zbatimin e protokolleve ndërkombëtare të doganave (2018-2021).",
    education:
      'Master në Administrim Biznesi me fokus në Menaxhimin e Doganave dhe Taksat, Universiteti i Tiranës (2016-2018); Bachelor në Shkenca Politike dhe Marrëdhënie Ndërkombëtare, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve informatike doganore për menaxhimin e deklaratave doganore dhe kontrollin e mallrave.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën dhe zgjidhjen e problemeve, komunikimin efektiv me agjentët e doganave dhe bizneset, dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në legjislacionin doganor, procedurat e importit dhe eksportit, dhe në zbatimin e masave të sigurisë për mallrat.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në politikat doganore dhe tregtare, pjesëmarrja në seminare dhe trajnime të fushës, dhe leximi i literaturës mbi marrëdhëniet ndërkombëtare dhe doganat.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inspektor Doganor në 'Pikën Kufitare të Kakavijës', duke u marrë me verifikimin e dokumentacionit për mallrat që kalonin kufirin dhe inspektimin fizik të ngarkesave që nga viti 2022. Ka ndihmuar në zbulimin e rasteve të kontrabandës dhe ka implementuar teknologji të reja për monitorimin e mallrave (2019-2022).",
    education:
      'Master në Siguri Kombëtare dhe Studime Kufitare, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Administrim Publik dhe Qeverisje, Universiteti i Shkencave Administrative, Tiranë (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të skanimit dhe sistemeve të monitorimit për kontrollet kufitare dhe doganore.',
    soft_skills:
      'Lidership i fortë në menaxhimin e ekipit të inspektorëve, aftësi të shkëlqyera në negociatat me transportuesit dhe në menaxhimin e situatave të emergjencës.',
    technical_skills:
      'Specializim në procedurat doganore, legjislacionin për luftën kundër kontrabandës, dhe në përdorimin e metodave të avancuara të inspektimit.',
    hobbies:
      'Angazhimi në aktivitete që promovojnë sigurinë kufitare dhe luftën kundër trafikimit, ndjekja e kurseve për zhvillimin profesional, dhe sportet e jashtme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Doganier në 'Drejtoria e Përgjithshme e Doganave', përgjegjës për monitorimin dhe inspektimin e mallrave në import dhe eksport që nga viti 2021. Ka zhvilluar dhe zbatuar strategji të reja për parandalimin e kontrabandës dhe është trajnuar në teknikat më të fundit të inspektimit (2019-2021).",
    education:
      'Master në Menaxhimin e Rrezikut Doganor, Universiteti i Tiranës (2016-2018); Bachelor në Drejtësi me fokus në Legjislacionin Doganor, Fakulteti i Drejtësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të menaxhimit doganor dhe aplikacioneve të të dhënave për analizën e rrezikut.',
    soft_skills:
      'Aftësi të shkëlqyera në vendimmarrje, negociata me operatorët ekonomikë dhe në menaxhimin e situatave të tensionuara.',
    technical_skills:
      'Ekspertizë në procedurat e kontrollit doganor, njohuri të thella në legjislacionin ndërkombëtar dhe kombëtar të doganave, dhe në zbatimin e masave të sigurisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet globale në fushën e doganave, pjesëmarrja në forumet dhe trajnimet e sigurisë, dhe ushtrimet fizike për të mbajtur një formë të mirë fizike dhe mendore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist Doganor në 'Qendra Kombëtare e Analizës së Rrezikut Doganor', duke kryer vlerësime të thelluara të rrezikut për mallrat që kalojnë kufirin që nga viti 2022. Ka kontribuar në identifikimin e modeleve të trafikut të paligjshëm dhe ka përmirësuar metodat e analizës së të dhënave (2020-2022).",
    education:
      'Master në Analizën e Të Dhënave dhe Statistika për Sigurinë Doganore, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Informatikë Ekonomike, Fakulteti i Ekonomisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e algoritmeve të analizës së të dhënave dhe softuerëve statistikorë për identifikimin e rrezikut doganor.',
    soft_skills:
      'Aftësi të forta analitike dhe në interpretimin e kompleksitetit të të dhënave, si dhe në komunikimin efektiv të zbulimeve.',
    technical_skills:
      'Specializim në teknikat e analizës së rrezikut, njohuri të legjislacionit doganor dhe në përdorimin e teknologjive informative për sigurinë doganore.',
    hobbies:
      'Ndjekja e zhvillimeve të fundit në fushën e analizës së të dhënave, pjesëmarrja në konferenca të specializuara në sigurinë dhe menaxhimin e rrezikut, dhe veprimtari vullnetare në projekte që synojnë parandalimin e kontrabandës.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Sigurimit Elektrik në 'Kompania Kombëtare e Energjisë Elektrike', duke punuar në monitorimin dhe sigurimin e rrjeteve elektrike për të parandaluar aksidentet dhe incidentet që nga viti 2021. Ka marrë pjesë në zhvillimin e programeve të trajnimit për sigurinë elektrike dhe ka udhëhequr inspektime në terren (2018-2021).",
    education:
      'Master në Inxhinieri Elektrike me fokus në Siguri dhe Shëndet në Punë, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Elektrike, Fakulteti i Inxhinierisë Elektrike dhe Kompjuterike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së rrezikut dhe në menaxhimin e sistemeve të informacionit për sigurinë elektrike.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me stafin teknik dhe në organizimin e sesioneve të trajnimit për sigurinë.',
    technical_skills:
      'Ekspertizë në standarde të sigurisë elektrike, analizën e rrezikut dhe procedurat e emergjencës, dhe në përdorimin e pajisjeve të mbrojtjes personale.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e sigurisë elektrike, pjesëmarrja në seminare dhe konferenca të sigurisë, dhe aktivitetet vullnetare në projekte të ndërgjegjësimit për rrezikun elektrik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Sigurisë Elektrike në një firmë ndërkombëtare të konsulencës, duke ofruar zgjidhje për përmirësimin e masave të sigurisë në instalime elektrike dhe projekte të ndërtimit që nga viti 2022. Ka ndihmuar në analizën e incidenteve elektrike dhe në implementimin e teknologjive të reja për parandalimin e aksidenteve (2019-2022).',
    education:
      'Master në Menaxhimin e Rrezikut dhe Sigurinë Elektrike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri dhe Teknologji Elektrike, Fakulteti i Teknologjisë dhe Inxhinierisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e sistemeve të monitorimit elektrik dhe analizës së të dhënave për identifikimin e potencialeve rrezikshme.',
    soft_skills:
      'Lidership në menaxhimin e projekteve të sigurisë, aftësi të shkëlqyera në komunikimin dhe trajnimin e ekipit për praktikat më të mira të sigurisë.',
    technical_skills:
      'Specializim në inspektimin e instalimeve elektrike, zbatimin e standardeve ndërkombëtare të sigurisë, dhe në menaxhimin e emergjencave elektrike.',
    hobbies:
      'Angazhimi në inovacionin e sigurisë elektrike, pjesëmarrja në platforma online për ndarjen e njohurive në fushën e elektroteknikës, dhe sportet e ujit për relaksim.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Mekanik Industrial në 'Fabrika e Përpunimit Metalik', duke punuar në projektimin dhe optimizimin e linjave të prodhimit për të rritur efikasitetin dhe cilësinë e produkteve që nga viti 2021. Ka udhëhequr projekte për automatizimin e proceseve prodhuese dhe ka marrë pjesë në trajnime të avancuara në menaxhimin e prodhimit (2018-2021).",
    education:
      'Master në Inxhinieri Mekanike me specializim në Inxhinieri Industriale, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Mekanike, Fakulteti i Inxhinierisë Mekanike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve CAD/CAM për projektimin mekanik dhe në menaxhimin e sistemeve të informacionit për prodhimin.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në udhëheqjen e ekipit, si dhe në analizën dhe zgjidhjen e problemeve prodhuese.',
    technical_skills:
      'Ekspertizë në projektimin e sistemeve mekanike, njohuri të thella në automatizimin industrial dhe në zbatimin e metodave të menaxhimit të cilësisë.',
    hobbies:
      'Interesi për të ndjekur teknologjitë e reja në inxhinieri mekanike dhe industriale, pjesëmarrja në konferenca të specializuara, dhe ndërtimi i projekteve personale inxhinierike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      'Konsulent i Inxhinierisë Mekanike Industriale në një kompani konsulente ndërkombëtare, duke ofruar zgjidhje për përmirësimin e operacioneve prodhuese dhe efikasitetit energjetik në sektorin industrial që nga viti 2022. Ka ndihmuar në implementimin e sistemeve të menaxhimit të energjisë dhe ka realizuar audite të efikasitetit energjetik (2019-2022).',
    education:
      'Master në Efikasitet Energjetik dhe Menaxhim Ambiental, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Mekanike, me fokus në Energjetikë, Fakulteti i Inxhinierisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve të analizës energjetike dhe në modelimin e proceseve industriale për optimizimin e konsumit të energjisë.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve, aftësi të shkëlqyera në komunikimin me klientët dhe në identifikimin e mundësive për përmirësim.',
    technical_skills:
      'Specializim në menaxhimin e energjisë, auditime të efikasitetit energjetik dhe në zbatimin e praktikave të qëndrueshme në industri.',
    hobbies:
      'Angazhimi në hulumtimin e zgjidhjeve inovative për sfidat energjetike dhe mjedisore në sektorin industrial, pjesëmarrja në aktivitete të sporteve ekstreme për të qëndruar aktiv dhe të motivuar.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ekonomist për Menaxhim në 'Kompania Konsulente e Biznesit', duke ofruar analiza të tregut dhe këshilla strategjike për ndërmarrje të ndryshme që nga viti 2021. Ka udhëhequr projekte për optimizimin e strukturave organizative dhe ka marrë pjesë në zhvillimin e planeve të biznesit (2018-2021).",
    education:
      'Master në Ekonomi dhe Menaxhim të Biznesit, Universiteti i Tiranës (2016-2018); Bachelor në Ekonomi, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së të dhënave ekonomike dhe në menaxhimin e projekteve.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën dhe zgjidhjen e problemeve, komunikimin efektiv me klientët dhe në udhëheqjen e ekipit.',
    technical_skills:
      'Ekspertizë në analizën e tregut, menaxhimin financiar dhe strategjik, dhe në zbatimin e teknikave të menaxhimit të ndryshimit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në ekonomi dhe menaxhim, pjesëmarrja në konferenca dhe seminare të fushës, dhe leximi i literaturës ekonomike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i Menaxhimit në 'Qendra Kombëtare për Studime Ekonomike', duke kryer vlerësime të performancës financiare dhe analiza të efikasitetit për sektorë të ndryshëm ekonomikë që nga viti 2022. Ka kontribuar në hartimin e politikave publike për përmirësimin e klimës së biznesit (2019-2022).",
    education:
      'Master në Politikë Ekonomike dhe Menaxhim, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Menaxhim dhe Administrim Biznesi, Fakulteti i Shkencave Sociale dhe Ekonomike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e platformave analitike për të mbështetur vendimmarrjen bazuar në të dhëna dhe në analizën e trendeve ekonomike.',
    soft_skills:
      'Lidership i fortë në menaxhimin e projekteve, aftësi të shkëlqyera në analizën kritike dhe në ndërtimin e raporteve me partnerët dhe stakeholderët.',
    technical_skills:
      'Specializim në vlerësimin e politikave ekonomike, menaxhimin e rrezikut dhe në përdorimin e metodologjive të avancuara analitike.',
    hobbies:
      'Ndjekja e zhvillimeve të reja në politikat ekonomike, angazhimi në projekte të hulumtimit dhe veprimtari vullnetare në fushën e edukimit ekonomik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Kontrollues i Cilësisë së Prodhimit në 'Fabrika e Përpunimit të Ushqimeve', duke monitoruar dhe garantuar cilësinë e produkteve përmes testimeve dhe inspektimeve të rregullta që nga viti 2021. Ka zhvilluar protokolle të reja të kontrollit të cilësisë dhe ka marrë pjesë në trajnime për sigurinë ushqimore (2018-2021).",
    education:
      'Master në Sigurinë dhe Kontrollin e Cilësisë në Prodhim, Universiteti i Tiranës (2016-2018); Bachelor në Teknologji Ushqimore, Fakulteti i Teknologjisë së Ushqimit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së cilësisë dhe në menaxhimin e sistemeve të informacionit për kontrollin e cilësisë.',
    soft_skills:
      'Aftësi të shkëlqyera në vëzhgimin e detajeve, analizën dhe zgjidhjen e problemeve të cilësisë, dhe në komunikimin efektiv me ekipet prodhuese.',
    technical_skills:
      'Ekspertizë në metodat e kontrollit të cilësisë, standarde të sigurisë ushqimore dhe në zbatimin e procedurave të auditimit të cilësisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e ushqimit dhe kontrollin e cilësisë, pjesëmarrja në seminare dhe konferenca të fushës, dhe kultivimi i një kopshti organik personal.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inspektor i Cilësisë në 'Linjat e Prodhimit të Tekstileve', duke u marrë me verifikimin e standardeve të cilësisë për materialet dhe produktet përfundimtare që nga viti 2022. Ka udhëhequr iniciativa për përmirësimin e proceseve të kontrollit të cilësisë dhe ka implementuar sisteme të reja të menaxhimit të cilësisë (2019-2022).",
    education:
      'Master në Menaxhimin e Cilësisë dhe Inovacionit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Tekstile dhe Modë, Fakulteti i Teknologjisë dhe Dizajnit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara për inspektimin e cilësisë dhe në analizën statistikore të të dhënave të cilësisë.',
    soft_skills:
      'Lidership i fortë në menaxhimin e ekipit të kontrollit të cilësisë, aftësi të shkëlqyera në organizimin dhe planifikimin e auditimeve të cilësisë.',
    technical_skills:
      'Specializim në standarde ndërkombëtare të cilësisë, teknikat e inspektimit dhe vlerësimit të cilësisë, dhe në menaxhimin e rrezikut të cilësisë.',
    hobbies:
      'Angazhimi në projekte të ndërgjegjësimit për praktikat e qëndrueshme prodhuese, pjesëmarrja në aktivitete të ndryshme kulturore që lidhen me artin dhe modën, dhe leximi i literaturës mbi inovacionet në prodhim.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Agrar në Akuakulturë në 'Kompleksi i Peshkimit dhe Akuakulturës', duke punuar në zhvillimin dhe menaxhimin e projekteve të akuakulturës për prodhimin e qëndrueshëm të peshkut që nga viti 2021. Ka udhëhequr inovacione në teknikat e kultivimit dhe ka marrë pjesë në trajnime për praktikat më të mira mjedisore (2018-2021).",
    education:
      'Master në Inxhinieri Agrare me specializim në Akuakulturë, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Agrare, Fakulteti i Bujqësisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për analizën e të dhënave mjedisore dhe në menaxhimin e sistemeve të informacionit për akuakulturën.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, komunikimin me komunitetin lokal dhe në udhëheqjen e ekipit.',
    technical_skills:
      'Ekspertizë në teknikat e kultivimit të akuakulturës, njohuri në biologjinë e specieve të ujit dhe në zbatimin e standardeve mjedisore dhe të sigurisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në akuakulturë dhe inovacionet mjedisore, pjesëmarrja në konferenca të specializuara, dhe aktivitetet vullnetare për mbrojtjen e ekosistemeve ujore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Montazhit Video në 'Studioja Kreative e Prodhimit', duke punuar në redaktimin dhe montazhin e videove për reklama, dokumentarë dhe produkte të tjera vizuale që nga viti 2021. Ka udhëhequr projekte të ndryshme kreative dhe ka marrë pjesë në trajnime për softuerët e avancuar të redaktimit (2018-2021).",
    education:
      'Master në Komunikim dhe Media Digjitale, me fokus në Montazhin e Videos, Universiteti i Tiranës (2016-2018); Bachelor në Artet Vizuale dhe Multimedial, Fakulteti i Arteve, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e Adobe Premiere Pro, Final Cut Pro, dhe softuerëve të tjerë të redaktimit video.',
    soft_skills:
      'Aftësi të shkëlqyera organizative dhe në menaxhimin e kohës, kreativitet dhe në komunikimin efektiv me klientët dhe ekipin kreativ.',
    technical_skills:
      'Ekspertizë në montazhin e videos, korrigjimin e ngjyrave, efektet vizuale dhe animacionin, dhe në përpunimin e audios për produksione video.',
    hobbies:
      'Interesi për të ndjekur tendencat e fundit në industrinë e filmit dhe teknologjitë e reja në montazhin video, pjesëmarrja në festivale filmike, dhe krijuar projekte personale video.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Redaktor Video në 'Agjencia e Marketingut Digjital', duke specializuar në krijimin e përmbajtjes vizuale për fushata marketingu në rrjetet sociale dhe uebfaqet që nga viti 2022. Ka realizuar video që rrisin angazhimin e audiencës dhe ka përmirësuar strategjitë e përmbajtjes vizuale (2019-2022).",
    education:
      'Master në Marketing Digjital me fokus në Prodhimin dhe Montazhin e Videos, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Komunikim Masiv dhe Media, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve të redaktimit video dhe në përdorimin e mjeteve digjitale për analizën e performancës së videove.',
    soft_skills:
      'Lidership në menaxhimin e projekteve vizuale, aftësi të shkëlqyera në punën në ekip dhe në adaptimin e trendeve të reja në përmbajtjen vizuale.',
    technical_skills:
      'Specializim në redaktimin e videos për rrjetet sociale, korrigjimin e ngjyrave, dhe në krijuar strategji të përmbajtjes vizuale që tërheqin vëmendjen.',
    hobbies:
      'Pasioni për fotografinë dhe kinematografinë, eksplorimi i teknikave të reja në prodhimin e videos, dhe ndjekja e kursit për zhvillimin profesional në fushën e mediave vizuale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent i Shërbimit ndaj Klientit në 'Qendra e Thirrjeve për Bankën Kombëtare', duke ofruar mbështetje dhe këshilla për klientët në lidhje me produktet dhe shërbimet bankare që nga viti 2021. Ka marrë pjesë në trajnime për të përmirësuar aftësitë e komunikimit dhe menaxhimin e kërkesave të klientëve (2018-2021).",
    education:
      'Master në Menaxhimin e Shërbimit ndaj Klientit, Universiteti i Tiranës (2016-2018); Bachelor në Administrim Biznesi, Fakulteti i Ekonomisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të menaxhimit të marrëdhënieve me klientët (CRM) dhe në përdorimin e softuerëve të ndryshëm të komunikimit.',
    soft_skills:
      'Aftësi të shkëlqyera në dëgjim aktiv, komunikim efektiv dhe zgjidhjen e konflikteve, dhe në ndërtimin e marrëdhënieve të forta me klientët.',
    technical_skills:
      'Njohuri në procedurat e bankare dhe produktet financiare, dhe në zbatimin e politikave të shërbimit ndaj klientit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në sektorin financiar, pjesëmarrja në seminare për zhvillimin profesional, dhe veprimtari vullnetare në organizata që ofrojnë ndihmë financiare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent i Shërbimit ndaj Klientit në 'Kompania e Sigurimeve Mbrojtëse', duke u marrë me pyetjet dhe kërkesat e klientëve për polica sigurimi dhe klaimet që nga viti 2022. Ka ndihmuar në përmirësimin e proceseve të shërbimit ndaj klientit dhe ka organizuar sesione informuese për klientët (2019-2022).",
    education:
      'Master në Marketing dhe Komunikim, me fokus në Shërbimin ndaj Klientit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Psikologji Organizative, Fakulteti i Shkencave Sociale, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e platformave të shërbimit ndaj klientit dhe në analizën e feedback-ut të klientëve për të përmirësuar shërbimin.',
    soft_skills:
      'Lidership në menaxhimin e situatave të vështira me klientët, aftësi të shkëlqyera në dëgjim dhe komunikim, dhe në ofrimin e zgjidhjeve të shpejta.',
    technical_skills:
      'Specializim në njohuritë e produkteve të sigurimeve, procedurat e klaimimit dhe në menaxhimin e rasteve të klientëve.',
    hobbies:
      'Pasioni për psikologjinë e konsumatorit, angazhimi në projekte që përmirësojnë përvojën e klientit, dhe leximi i librit për menaxhimin e shërbimit ndaj klientit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Elektroaut për Automobila në 'Servisi i Mirëmbajtjes së Automjeteve', duke kryer diagnostikime dhe riparime të sistemeve elektrike të automobilave që nga viti 2021. Ka marrë pjesë në trajnime të specializuara për teknologjitë e reja të automjeteve elektrike dhe hibride (2018-2021).",
    education:
      'Master në Inxhinieri Elektrike me fokus në Sistemet Elektrike të Automjeteve, Universiteti i Tiranës (2016-2018); Bachelor në Mekatronikë dhe Elektronikë Auto, Fakulteti i Inxhinierisë Mekanike dhe Elektrike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e pajisjeve të diagnostikimit të automjeteve dhe softuerëve për analizën e sistemeve elektrike.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve, komunikim efektiv me klientët dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në sistemet elektrike dhe elektronike të automjeteve, njohuri të thella në riparimin e automjeteve elektrike dhe hibride, dhe në menaxhimin e sistemeve të sigurisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në industrinë e automobilave, pjesëmarrja në seminare dhe trajnime teknike, dhe ndërtimi i projekteve personale të automobilave.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik Elektrik për Automobila në 'Kompania e Prodhimit të Automjeteve Elektrike', duke punuar në asamblimin dhe testimin e komponentëve elektrikë dhe sistemeve të kontrollit për automjete elektrike që nga viti 2022. Ka kontribuar në optimizimin e performancës së baterive dhe sistemeve të menaxhimit të energjisë (2019-2022).",
    education:
      'Master në Teknologjitë e Energjisë Rinovueshme me fokus në Automjete Elektrike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Elektroteknikë, Fakulteti i Teknologjisë së Informacionit dhe Komunikimit, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara për testimin e komponentëve elektrikë dhe në programimin e mikrokontrollorëve për automjete.',
    soft_skills:
      'Lidership në menaxhimin e projekteve të inxhinierisë, aftësi të shkëlqyera në organizimin e punës dhe në komunikimin teknik me ekipet e zhvillimit.',
    technical_skills:
      'Specializim në sistemet elektrike të automjeteve elektrike, njohuri në menaxhimin e energjisë dhe optimizimin e performancës së baterive.',
    hobbies:
      'Angazhimi në projekte të inovacionit për automjete elektrike, ndjekja e kurseve për zhvillimin profesional në teknologjinë e automobilave, dhe aktivitete në natyrë për relaksim.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Riparues Automjeti në 'Servisi i Përgjithshëm i Automjeteve', duke kryer riparime dhe mirëmbajtje të gjithanshme për lloje të ndryshme të automjeteve që nga viti 2021. Ka specializuar në diagnostikimin e defekteve mekanike dhe elektrike dhe ka marrë pjesë në trajnime për sistemet e fundit të automjeteve (2018-2021).",
    education:
      'Master në Mekatronikë dhe Riparim Automjetesh, Universiteti i Tiranës (2016-2018); Bachelor në Teknikën e Automjeteve, Fakulteti i Inxhinierisë Mekanike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e pajisjeve të diagnostikimit dhe softuerëve specifikë për riparimin e automjeteve.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve, komunikimin efektiv me klientët dhe në organizimin e punës së përditshme.',
    technical_skills:
      'Ekspertizë në riparimin e motorëve, sistemet e transmetimit, frenat, dhe në mirëmbajtjen e përgjithshme të automjeteve.',
    hobbies:
      'Interesi për të ndjekur zhvillimet teknologjike në industrinë e automobilave, pjesëmarrja në garat e automobilave si hobi, dhe ndërtimi dhe riparimi i projekteve personale të automjeteve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Mirëmbajtjes së Automjeteve në 'Kompania e Transportit dhe Logjistikës', duke u marrë me mirëmbajtjen preventive dhe riparimet e nevojshme për flotën e automjeteve të kompanisë që nga viti 2022. Ka ndihmuar në zvogëlimin e kohës së ndaljeve dhe ka përmirësuar efikasitetin operacional (2019-2022).",
    education:
      'Master në Menaxhimin e Flotës dhe Logjistikës së Transportit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri të Transportit, Fakulteti i Inxhinierisë dhe Arkitekturës, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e sistemeve të menaxhimit të flotës dhe në analizën e të dhënave për të identifikuar trendet e riparimeve.',
    soft_skills:
      'Lidership i fortë në koordinimin e ekipeve teknike, aftësi të shkëlqyera në planifikimin dhe menaxhimin e projekteve të mirëmbajtjes.',
    technical_skills:
      'Specializim në mirëmbajtjen preventive dhe riparimin e automjeteve të rënda dhe të lehta, njohuri në menaxhimin e pjesëve rezervë dhe në zbatimin e standardeve të sigurisë.',
    hobbies:
      'Pasioni për inovacionet në teknologjinë e transportit, angazhimi në aktivitete që promovojnë sigurinë rrugore, dhe hobi në modelizmin e automjeteve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Montues i Prodhimeve Metalike në 'Fabrika e Përpunimit Metalik', duke punuar në montimin dhe asamblimin e strukturave metalike dhe pjesëve për industri të ndryshme që nga viti 2021. Ka marrë pjesë në projekte të ndryshme për përmirësimin e proceseve të prodhimit dhe ka ndihmuar në zbatimin e standardeve të sigurisë në punë (2018-2021).",
    education:
      'Master në Inxhinieri Mekanike me fokus në Teknologjinë e Përpunimit Metalik, Universiteti i Tiranës (2016-2018); Bachelor në Teknologjinë e Përpunimit të Metaleve, Fakulteti i Teknologjisë dhe Metallurgjisë, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e pajisjeve të kontrollit numerik (CNC) dhe në interpretimin e vizatimeve teknike.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, në punën në ekip dhe në menaxhimin e kohës, si dhe në zbatimin e protokolleve të sigurisë.',
    technical_skills:
      'Ekspertizë në montimin dhe asamblimin e komponentëve metalikë, njohuri në përdorimin e makinave dhe mjeteve të përpunimit metalik, dhe në mirëmbajtjen e pajisjeve.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e përpunimit metalik, pjesëmarrja në trajnime dhe seminare të specializuara, dhe krijuar projekte personale metalike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Montimit të Prodhimeve Metalike në 'Ndërmarrja e Ndërtimit të Makinerive', duke u marrë me montimin e përbërësve metalikë për makineri dhe pajisje të ndryshme që nga viti 2022. Ka kontribuar në optimizimin e proceseve të montimit dhe në përmirësimin e cilësisë së prodhimeve (2019-2022).",
    education:
      'Master në Inxhinieri të Prodhimit dhe Montimit, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Mekanikë Industriale, Fakulteti i Inxhinierisë Mekanike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve të modelimit 3D për planifikimin e montimit dhe në analizën e efikasitetit të linjave të prodhimit.',
    soft_skills:
      'Lidership në koordinimin e ekipeve të montimit, aftësi të shkëlqyera në zgjidhjen e problemeve teknike dhe në komunikimin efektiv me departamentet e tjera.',
    technical_skills:
      'Specializim në teknikat e montimit të strukturave metalike, njohuri në përdorimin e makinave të avancuara të përpunimit dhe në kontrollin e cilësisë së montimit.',
    hobbies:
      'Pasioni për inxhinierinë mekanike dhe ndërtimin e makinerive, angazhimi në projekte inovative të prodhimit, dhe veprimtari në natyrë për të qëndruar aktiv.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Gjeolog në 'Instituti Kombëtar i Gjeologjisë dhe Minierave', duke punuar në hulumtimin dhe analizën e strukturave gjeologjike për projekte të ndryshme infrastrukturore dhe minerare që nga viti 2021. Ka marrë pjesë në ekspedita në terren për të marrë mostra dhe ka kontribuar në studimet e rrezikut gjeologjik (2018-2021).",
    education:
      'Master në Inxhinieri Gjeologjike, Universiteti i Tiranës (2016-2018); Bachelor në Gjeologji, Fakulteti i Shkencave të Natyrës, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve gjeologjikë për analizën e të dhënave dhe modelimin e strukturave gjeologjike.',
    soft_skills:
      'Aftësi të shkëlqyera në punën në ekip, komunikimin efektiv me palët e interesuara dhe në menaxhimin e projekteve gjeologjike.',
    technical_skills:
      'Ekspertizë në identifikimin e mineraleve dhe shkëmbinjve, analizën e rrezikut gjeologjik dhe në zbatimin e metodave të hulumtimit në terren.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në gjeologji dhe shkencat e tokës, pjesëmarrja në konferenca dhe seminare të fushës, dhe eksplorimi i peisazheve natyrore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Gjeologjik në 'Kompania e Këshillimit për Burimet Natyrore', duke ofruar analiza dhe zgjidhje për menaxhimin e burimeve natyrore dhe zhvillimin e qëndrueshëm që nga viti 2022. Ka ndihmuar në hartimin e planeve të menaxhimit të tokës dhe ka realizuar vlerësime të ndikimit mjedisor (2019-2022).",
    education:
      'Master në Menaxhimin e Burimeve Natyrore dhe Gjeologji Ambientale, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Ambientale dhe Gjeologji, Fakulteti i Inxhinierisë dhe Shkencave të Tokës, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e GIS (Sistemi i Informacionit Gjeografik) për analizën e tokës dhe në përdorimin e teknologjive të teledetektimit.',
    soft_skills:
      'Lidership në menaxhimin e projekteve mjedisore, aftësi të shkëlqyera në negociata dhe në ndërtimin e marrëdhënieve me klientët.',
    technical_skills:
      'Specializim në gjeologjinë ambientale, vlerësimet e ndikimit mjedisor dhe në menaxhimin e rrezikut gjeologjik.',
    hobbies:
      'Angazhimi në mbrojtjen e mjedisit dhe biodiversitetit, ndjekja e aktiviteteve të shkencës qytetare dhe hobi në fotografinë e peisazheve gjeologjike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Furrave të Shkrirjes së Metalit në 'Kompania Metalurgjike', duke menaxhuar operacionet e furrave për shkrirjen e metaleve dhe aleateve që nga viti 2021. Ka optimizuar proceset e shkrirjes për të rritur efikasitetin dhe ka marrë pjesë në inovacionet teknologjike në fushën e metalurgjisë (2018-2021).",
    education:
      'Master në Metalurgji dhe Teknologjinë e Materialeve, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Metalurgjike, Fakulteti i Teknologjisë së Materialeve, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin e proceseve të shkrirjes dhe në menaxhimin e të dhënave të prodhimit.',
    soft_skills:
      'Aftësi të shkëlqyera në udhëheqjen e ekipit, në organizimin e punës dhe në zgjidhjen e sfidave teknike.',
    technical_skills:
      'Ekspertizë në operacionet e furrave të shkrirjes, kontrollin e cilësisë së metaleve të shkrira, dhe në zbatimin e masave të sigurisë në punë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë metalurgjike, pjesëmarrja në konferenca dhe seminare të specializuara, dhe eksperimentimi me aleate të reja metalike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier i Procesit në 'Fabrika e Shkrirjes së Metaleve', duke zhvilluar dhe implementuar metodat e reja të shkrirjes për të përmirësuar cilësinë e prodhimit dhe ulur kostot që nga viti 2022. Ka drejtuar projekte për përdorimin e energjisë së rinovueshme në proceset e shkrirjes (2019-2022).",
    education:
      'Master në Inxhinieri dhe Menaxhim i Proceseve Industriale, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Teknologjinë e Prodhimit dhe Përpunimit të Metaleve, Fakulteti i Inxhinierisë Mekanike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e analizës termike dhe softuerëve të simulimit për të optimizuar proceset e shkrirjes.',
    soft_skills:
      'Lidership i fortë në menaxhimin e ndryshimeve, aftësi të shkëlqyera në komunikimin me ekipet dhe në menaxhimin e projekteve.',
    technical_skills:
      'Specializim në teknologjitë e shkrirjes, menaxhimin e efikasitetit energjetik dhe në aplikimin e praktikave të qëndrueshme në prodhimin metalurgjik.',
    hobbies:
      'Pasioni për inovacionin në metalurgji, angazhimi në studime për përdorimin e burimeve të rinovueshme në industri dhe veprimtari fizike për të ruajtur një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Rrjetit Kompjuterik në 'Qendra e Teknologjisë së Informacionit', duke menaxhuar dhe mirëmbajtur infrastrukturën e rrjetit të kompanisë që nga viti 2021. Ka implementuar zgjidhje të reja të sigurisë rrjetore dhe ka marrë pjesë në trajnime për teknologjitë më të fundit të rrjetit (2018-2021).",
    education:
      'Master në Inxhinieri të Rrjeteve dhe Sistemeve Kompjuterike, Universiteti i Tiranës (2016-2018); Bachelor në Teknologji të Informacionit, Fakulteti i Shkencave të Informacionit, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në konfigurimin dhe menaxhimin e pajisjeve të rrjetit, përfshirë routerët, switchet dhe firewallët, dhe në përdorimin e softuerëve të monitorimit të rrjetit.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve, komunikimin me përdoruesit dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në protokollet e rrjetit, sigurinë rrjetore dhe në zbatimin e zgjidhjeve të virtualizimit të rrjetit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë rrjetore, pjesëmarrja në konferenca dhe seminare të specializuara, dhe ndërtimi i projekteve personale të rrjetit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Administrator i Rrjeteve në 'Kompania e Telekomunikacionit', duke ofruar mbështetje teknike për infrastrukturën e rrjetit dhe duke zhvilluar politika të reja të menaxhimit të trafikut që nga viti 2022. Ka optimizuar performancën e rrjetit dhe ka ulur ndërprerjet e shërbimit (2019-2022).",
    education:
      'Master në Siguri Kompjuterike dhe Rrjete, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Kompjuterike, Fakulteti i Inxhinierisë Elektrike dhe Kompjuterike, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të rrjetit të avancuar, përfshirë SDN (Software Defined Networking) dhe në përdorimin e sistemeve të menaxhimit të rrjetit.',
    soft_skills:
      'Lidership në menaxhimin e ekipeve të IT-së, aftësi të shkëlqyera organizative dhe në menaxhimin e situatave kritike.',
    technical_skills:
      'Specializim në konfigurimin e rrjetit, sigurinë e të dhënave dhe në zbatimin e standardave të komunikimit të rrjetit.',
    hobbies:
      'Pasioni për sigurinë kibernetike, angazhimi në projekte komunitare të teknologjisë së informacionit dhe hobi në programimin dhe zhvillimin e aplikacioneve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Elektro-Mekanik në 'Fabrika e Prodhimit Automatik', duke punuar në mirëmbajtjen dhe riparimin e sistemeve elektromekanike që nga viti 2021. Ka udhëhequr projekte për përmirësimin e efikasitetit të makinerive dhe ka marrë pjesë në trajnime për teknologjitë e reja të automatizimit (2018-2021).",
    education:
      'Master në Inxhinieri Elektromekanike, Universiteti i Tiranës (2016-2018); Bachelor në Teknologji Elektromekanike, Fakulteti i Inxhinierisë Elektrike dhe Mekanike, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin dhe simulimin e sistemeve elektromekanike dhe në diagnostikimin e defekteve me pajisje të specializuara.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve, në komunikimin efektiv me ekipin dhe në menaxhimin e projekteve të mirëmbajtjes.',
    technical_skills:
      'Ekspertizë në riparimin dhe mirëmbajtjen e pajisjeve elektromekanike, njohuri në sistemet e kontrollit automatik dhe në zbatimin e protokolleve të sigurisë në punë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në inxhinieri elektromekanike, pjesëmarrja në workshope dhe seminare teknike, dhe eksperimentimi me projekte të reja inovative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik Elektromekanik në 'Kompania e Sistemeve të Energjisë', duke u marrë me instalimin dhe mirëmbajtjen e sistemeve elektroenergjitike dhe mekanike që nga viti 2022. Ka kontribuar në zbatimin e projekteve të efikasitetit energjetik dhe ka realizuar audite të sistemeve të energjisë (2019-2022).",
    education:
      'Master në Sisteme Elektroenergjitike dhe Automatizim, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Elektromekanike, Fakulteti i Teknologjisë së Energjisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të avancuara për menaxhimin dhe monitorimin e sistemeve të energjisë dhe në programimin e PLC-ve (Programmable Logic Controllers).',
    soft_skills:
      'Lidership i fortë në koordinimin e ekipeve të instalimit dhe mirëmbajtjes, aftësi të shkëlqyera në organizimin dhe në ndërtimin e marrëdhënieve me klientët.',
    technical_skills:
      'Specializim në instalimin dhe mirëmbajtjen e sistemeve elektromekanike, njohuri në efikasitetin energjetik dhe në teknikat e auditimit të energjisë.',
    hobbies:
      'Pasioni për teknologjinë e energjisë rinovueshme, angazhimi në iniciativa për përmirësimin e qëndrueshmërisë mjedisore dhe veprimtari fizike në natyrë për relaksim dhe shëndet.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Topograf në 'Agjencia Kombëtare e Rregullimit të Territorit', duke kryer matje dhe hartime topografike për projekte të ndryshme zhvillimore dhe infrastrukturore që nga viti 2021. Ka udhëhequr ekipe në terren për të kryer studime topografike dhe ka marrë pjesë në trajnime për teknologjitë e reja të matjes (2018-2021).",
    education:
      'Master në Gjeodezi dhe Kartografi, Universiteti i Tiranës (2016-2018); Bachelor në Inxhinieri Gjeodezike dhe Topografi, Fakulteti i Gjeologjisë dhe Minierave, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të GIS (Sistemi i Informacionit Gjeografik) dhe teknologjive të matjes me satelit dhe lidar.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e ekipit, në planifikimin e projekteve dhe në zgjidhjen e sfidave në terren.',
    technical_skills:
      'Ekspertizë në realizimin e matjeve topografike, interpretimin e të dhënave dhe në përgatitjen e hartave të detajuara.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e topografisë dhe gjeodezisë, eksplorimi i zonave të reja gjeografike, dhe pjesëmarrja në aktivitete të jashtme që lidhen me natyrën.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Topografik në 'Kompania e Këshillimit për Zhvillimin Urban', duke ofruar këshilla dhe shërbime topografike për planifikimin urban dhe menaxhimin e projekteve ndërtimore që nga viti 2022. Ka ndihmuar në përpilimin e planeve të detajuara të vendndodhjes dhe ka realizuar analiza të thella topografike (2019-2022).",
    education:
      'Master në Planifikim Urban dhe Zhvillim Territorial, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Gjeografi dhe Planifikim Territorial, Fakulteti i Historisë dhe Filologjisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e programave të avancuara të kartografisë dhe analizës së imazheve satelitore për qëllime planifikimi.',
    soft_skills:
      'Lidership në koordinimin e projekteve topografike, aftësi të shkëlqyera në komunikimin me klientët dhe në ofrimin e zgjidhjeve inovative.',
    technical_skills:
      'Specializim në studime topografike për planifikimin urban, njohuri në legjislacionin territorial dhe në përdorimin e teknikave të survejimit.',
    hobbies:
      'Angazhimi në projekte që promovojnë zhvillimin e qëndrueshëm urban, pjesëmarrja në seminare për planifikimin dhe zhvillimin territorial, dhe veprimtari vullnetare në fushën e mjedisit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist Masazh në 'Qendra e Shëndetit dhe Mirëqenies', duke ofruar trajtime masazhi për relaksim dhe rehabilitim që nga viti 2021. Ka specializuar në teknikat e masazhit suedez, masazhin me vajra esenciale dhe terapitë me masazh të thellë të muskujve (2018-2021).",
    education:
      'Certifikatë Profesionale në Terapinë e Masazhit, Akademia e Masazhit dhe Fizioterapisë, Tiranë (2016-2018); Kurse të ndryshme për përmirësimin e aftësive në masazh dhe terapi fizike.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e softuerëve për menaxhimin e klientëve dhe programimin e seancave të masazhit.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me klientët, dëgjimin aktiv dhe në krijuar një ambient relaksues dhe terapeutik.',
    technical_skills:
      'Ekspertizë në njohuritë e anatomisë njerëzore, teknikat e masazhit për lirimin e tensionit dhe në përdorimin e terapive alternative.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e masazhit terapeutik dhe shëndetit natyral, praktika e jogës dhe meditimit, dhe leximi i literaturës në fushën e terapisë fizike dhe mirëqenies.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Terapist Masazh në 'Spa dhe Qendër Relaksimi', duke punuar me një gamë të gjerë klientësh për të ofruar masazhe relaksuese dhe terapeutike që nga viti 2022. Ka përdorur një qasje holistike për të trajtuar stresin dhe tensionin, duke përfshirë masazhin aromaterapeutik dhe refleksologjinë (2019-2022).",
    education:
      'Diplomë në Terapinë Holistike dhe Masazhin, Shkolla e Terapisë Natyrore, Tiranë (2017-2019); Seminare dhe workshop-e për zhvillimin profesional në fushën e masazhit dhe shëndetit holistik.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e platformave online për rezervime dhe në ndjekjen e trendeve të reja në masazh përmes burimeve digjitale.',
    soft_skills:
      'Lidership në menaxhimin e seancave të masazhit, aftësi të shkëlqyera në ndërtimin e një raporti pozitiv me klientët dhe në ofrimin e një përvoje terapeutike të personalizuar.',
    technical_skills:
      'Specializim në masazhin aromaterapeutik, refleksologjinë dhe teknikat e masazhit që promovojnë shërimin dhe relaksimin.',
    hobbies:
      'Pasioni për të eksploruar dhe praktikuar metoda të ndryshme shëndetësore natyrore, angazhimi në aktivitete që promovojnë mirëqenien e përgjithshme dhe hobi në përgatitjen e vajrave esenciale dhe produkteve për kujdesin personal.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Agjent i Pasurive të Patundshme në 'Agjencia Imobiliare Prestigjioze', duke ndërmjetësuar në blerje, shitje dhe qira të pasurive të patundshme që nga viti 2021. Ka ndërtuar një rrjet të gjerë klientësh dhe ka marrë pjesë në trajnime për tregun imobiliar dhe strategjitë e marketingut (2018-2021).",
    education:
      'Certifikatë në Menaxhimin e Pasurive të Patundshme, Akademia e Pasurive të Patundshme, Tiranë (2016-2018); Kurse të ndryshme për zhvillimin e aftësive në negociata dhe marketing imobiliar.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e platformave imobiliare online dhe në menaxhimin e listimeve të pasurive në rrjete sociale.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin dhe negociatat me klientët, ndërtimin e marrëdhënieve të besimit dhe në menaxhimin e kontratave.',
    technical_skills:
      'Njohuri në vlerësimin e pasurive të patundshme, legjislacionin imobiliar dhe në përgatitjen e analizave të tregut.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në sektorin imobiliar, pjesëmarrja në konferenca të pasurive të patundshme, dhe investimi personal në pasuri të patundshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Pasurive të Patundshme në 'Firma Këshillimore për Investime Imobiliare', duke ofruar këshilla strategjike për investitorë në fushën e pasurive të patundshme që nga viti 2022. Ka kontribuar në përpilimin e studimeve të tregut dhe ka ndihmuar klientët në identifikimin e mundësive investimi (2019-2022).",
    education:
      'Master në Biznes dhe Menaxhim të Pasurive të Patundshme, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Ekonomi, me fokus në Pasuritë e Patundshme, Fakulteti i Ekonomisë, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve për analizën financiare të investimeve imobiliare dhe në përdorimin e bazave të të dhënave të pasurive të patundshme.',
    soft_skills:
      'Lidership në zhvillimin e strategjive të investimeve, aftësi të shkëlqyera në analizën kritike dhe në ndërtimin e marrëdhënieve afatgjata me klientët.',
    technical_skills:
      'Specializim në vlerësimin financiar të projekteve imobiliare, njohuri në tendencat e tregut imobiliar dhe në negociatat e blerjeve/shitjeve.',
    hobbies:
      'Pasioni për të ndjekur dhe analizuar tregjet imobiliare ndërkombëtare, angazhimi në forumet e pasurive të patundshme dhe hobi në fotografimin e arkitekturës dhe dizajnit të brendshëm.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Instruktor i Autoshkollës në 'Qendra e Mësimit të Drejtimit të Automjeteve', duke ofruar mësimdhënie për kandidatët që synojnë të marrin patentë shoferi që nga viti 2021. Ka zhvilluar programe mësimore që përqendrohen në sigurinë rrugore dhe ka marrë pjesë në trajnime për metodat më të reja të mësimdhënies (2018-2021).",
    education:
      'Certifikim Profesional si Instruktor i Drejtimit, Akademia e Transportit Rrugor, Tiranë (2016-2018); Kurse të ndryshme për përmirësimin e aftësive në mësimdhënie dhe siguri rrugore.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e teknologjive të mësimdhënies dhe në menaxhimin e regjistrimeve të kandidatëve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin dhe motivimin e nxënësve, në zgjidhjen e situatave të vështira dhe në ofrimin e feedback-ut konstruktiv.',
    technical_skills:
      'Ekspertizë në rregullat e sigurisë rrugore, teknikat e drejtimit të automjetit dhe në organizimin e sesioneve praktike të drejtimit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në legjislacionin rrugor, pjesëmarrja në seminare për sigurinë rrugore, dhe praktikimi i sporteve motorrike si hobi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Instruktor i Drejtimit në 'Autoshkolla e Avancuar', duke ofruar mësimdhënie të personalizuar për drejtuesit e rinj të automjeteve, duke përfshirë trajnime për drejtim në kushte të ndryshme meteorologjike dhe situata të vështira rrugore që nga viti 2022. Ka ndihmuar në përmirësimin e aftësive të drejtimit të nxënësve dhe ka zbatuar teknika inovative të mësimdhënies (2019-2022).",
    education:
      'Diplomë Avancuar në Instruksionin e Drejtimit të Automjeteve, Qendra Kombëtare e Trajnimit të Instruktorëve, Tiranë (2017-2019); Seminarë për Psikologjinë e Drejtimit dhe Menaxhimin e Stresit gjatë Drejtimit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e simulators të drejtimit për trajnime praktike dhe në përdorimin e aplikacioneve për monitorimin e progresit të nxënësve.',
    soft_skills:
      'Lidership i fortë në menaxhimin e klasave të drejtimit, aftësi të shkëlqyera në përshtatjen e metodave të mësimdhënies bazuar në nevojat e nxënësve.',
    technical_skills:
      'Specializim në teknikat e drejtimit defensiv, njohuri të thella në mekanikën e automjeteve dhe në zbatimin e masave të parandalimit të aksidenteve.',
    hobbies:
      'Pasioni për të eksploruar dhe ndarë njohuritë mbi automjetet dhe drejtimin, angazhimi në aktivitete që promovojnë sigurinë rrugore, dhe hobi në udhëtimet me automobil.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Kimist në 'Kompania e Prodhimit Kimik', duke punuar në zhvillimin dhe optimizimin e proceseve kimike për prodhimin e materialeve kimike që nga viti 2021. Ka udhëhequr projekte për përmirësimin e efikasitetit të reagimeve kimike dhe ka marrë pjesë në trajnime për sigurinë kimike dhe menaxhimin e rrezikut (2018-2021).",
    education:
      'Master në Inxhinieri Kimike, Universiteti i Tiranës (2016-2018); Bachelor në Kimi dhe Teknologji Kimike, Fakulteti i Shkencave Natyrore, Universiteti i Tiranës (2012-2016).',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin e proceseve kimike dhe në analizën e të dhënave të eksperimenteve kimike.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në zgjidhjen e problemeve komplekse kimike dhe në komunikimin efektiv me ekipin e kërkimit.',
    technical_skills:
      'Ekspertizë në sintezën kimike, kontrollin e cilësisë së produkteve kimike dhe në zbatimin e protokolleve të sigurisë në laborator.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në inxhinieri kimike, pjesëmarrja në konferenca dhe seminare të specializuara, dhe eksperimentimi me reagime kimike inovative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Inxhinierisë Kimike në 'Firma e Këshillimit për Mjedisin dhe Sigurinë Kimike', duke ofruar zgjidhje për menaxhimin e mbetjeve kimike dhe përmirësimin e qëndrueshmërisë mjedisore që nga viti 2022. Ka ndihmuar në hartimin e planeve të menaxhimit të rrezikut kimik dhe ka realizuar audite të sigurisë kimike (2019-2022).",
    education:
      'Master në Menaxhimin Mjedisor dhe Inxhinieri Kimike, Universiteti Politeknik i Tiranës (2017-2019); Bachelor në Inxhinieri Mjedisore dhe Kimike, Fakulteti i Inxhinierisë dhe Arkitekturës, Universiteti i Tiranës (2013-2017).',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve të analizës mjedisore dhe kimike për të vlerësuar impaktin e substancave kimike në mjedis.',
    soft_skills:
      'Lidership në koordinimin e ekipeve të këshillimit, aftësi të shkëlqyera organizative dhe në ofrimin e këshillave bazuar në analizën shkencore.',
    technical_skills:
      'Specializim në menaxhimin e mbetjeve kimike, vlerësimet e rrezikut mjedisor dhe kimik dhe në zbatimin e masave të qëndrueshmërisë mjedisore.',
    hobbies:
      'Angazhimi në iniciativa për mbrojtjen e mjedisit, pjesëmarrja në projekte të hulumtimit për zbulimin e teknologjive të reja të pastrimit kimik, dhe veprimtari vullnetare në fushën e edukimit mjedisor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mekanik Tornitor në 'Fabrika e Përpunimit Metalik', duke punuar në operacionet e torno-s dhe përpunimit të pjesëve metalike me precizion të lartë që nga viti 2021. Ka udhëhequr projekte për prodhimin e komponentëve specifikë sipas kërkesave të klientëve dhe ka marrë pjesë në trajnime për teknikat e reja të torno-s (2018-2021).",
    education:
      'Edukim Profesional në Mekanikë dhe Përpunim Metalik, Qendra e Trajnimit Profesional, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për dizajnimin dhe modelimin e pjesëve që do të përpunohen në torno.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, në punën në ekip dhe në komunikimin efektiv me klientët për të specifikuar kërkesat e prodhimit.',
    technical_skills:
      'Ekspertizë në përdorimin e torno-s dhe pajisjeve të tjera për përpunimin e metaleve, njohuri të thella në leximin e vizatimeve teknike dhe në zbatimin e masave të sigurisë në punë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e përpunimit metalik, pjesëmarrja në workshope dhe trajnime për aftësi të reja, dhe ndërtimi i projekteve personale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Torno-s në 'Servisi i Mirëmbajtjes Industriale', duke ofruar shërbime të mirëmbajtjes dhe riparimit për makineri të ndryshme industriale që nga viti 2022. Ka zbatuar teknika të avancuara për rikthimin e funksionalitetit të makinerive dhe ka organizuar sesione trajnimi për stafin e ri (2019-2022).",
    education:
      'Edukim Profesional në Torno dhe Mekanikë Industriale, Instituti i Teknologjisë së Aplikuar, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e teknologjive të skanimit dhe matjes për përcaktimin e defekteve dhe në planifikimin e riparimeve.',
    soft_skills:
      'Lidership në menaxhimin e projekteve të mirëmbajtjes, aftësi të shkëlqyera në zgjidhjen e problemeve teknike dhe në trajnimin e personelit.',
    technical_skills:
      'Specializim në përpunimin e precizionit të metaleve, mirëmbajtjen e pajisjeve të torno-s dhe në teknikat e diagnostikimit dhe riparimit.',
    hobbies:
      'Pasioni për mekanikën dhe inovacionin në fushën e përpunimit metalik, angazhimi në projekte DIY (Bëje vetë) dhe hobi në modelizmin e makinerive.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ekonomist Bujqësor në 'Ministria e Bujqësisë dhe Zhvillimit Rural', duke punuar në analizën e tregjeve bujqësore dhe politikave zhvillimore që nga viti 2021. Ka kontribuar në hartimin e strategjive për mbështetjen e fermerëve dhe ka marrë pjesë në projekte për përmirësimin e qëndrueshmërisë në sektorin bujqësor (2018-2021).",
    education:
      'Edukim Profesional në Ekonomi Bujqësore, Akademia e Studimeve Bujqësore, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të analizës së të dhënave bujqësore dhe në menaxhimin e bazave të të dhënave të tregjeve.',
    soft_skills:
      'Aftësi të shkëlqyera analitike, në komunikimin efektiv me palët e interesuara dhe në menaxhimin e projekteve bujqësore.',
    technical_skills:
      'Ekspertizë në analizën e politikave bujqësore, vlerësimin e projekteve zhvillimore dhe në zbatimin e strategjive të qëndrueshmërisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në ekonominë bujqësore, pjesëmarrja në konferenca dhe seminare të specializuara, dhe angazhimi në hulumtime për inovacionet në bujqësi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Ekonomisë Bujqësore në 'Firma Këshillimore për Zhvillimin Bujqësor', duke ofruar ndihmë për fermerët dhe bizneset bujqësore në menaxhimin financiar dhe në përmirësimin e efikasitetit të prodhimit që nga viti 2022. Ka ndihmuar në përpilimin e planeve të biznesit dhe ka organizuar trajnime për teknikat e reja bujqësore (2019-2022).",
    education:
      'Edukim Profesional në Menaxhimin Bujqësor dhe Ekonomi, Qendra e Trajnimit Profesional në Bujqësi, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve për planifikimin financiar dhe analizën e kostove në bujqësi.',
    soft_skills:
      'Lidership në zhvillimin e strategjive bujqësore, aftësi të shkëlqyera në ndërtimin e marrëdhënieve me fermerët dhe në ofrimin e këshillave të bazuar në hulumtime.',
    technical_skills:
      'Specializim në ekonominë bujqësore, planifikimin dhe analizën financiare të projekteve bujqësore dhe në menaxhimin e rrezikut në bujqësi.',
    hobbies:
      'Angazhimi në aktivitete që promovojnë zhvillimin rural, hobi në kultivimin e bimëve dhe eksplorimin e metodave të qëndrueshme të bujqësisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues në Arsimin Parashkollor në 'Kopshti Fëmijësh Nr.1', duke punuar me fëmijë nga mosha 3 deri në 5 vjeç që nga viti 2021. Ka zhvilluar programe edukative që përfshijnë aktivitete të ndryshme për zhvillimin e aftësive motorike, sociale dhe kognitive të fëmijëve (2018-2021).",
    education:
      'Edukim Profesional në Edukimin Parashkollor, Instituti i Arsimimit dhe Trajnimit për Edukatorë, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e teknologjive edukative dhe softuerëve për planifikimin e aktiviteteve mësimore.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me fëmijët dhe prindërit, në organizimin e aktiviteteve edukative dhe në menaxhimin e klasës.',
    technical_skills:
      'Ekspertizë në zhvillimin e planeve mësimore që përshtaten me nevojat e fëmijëve, në përdorimin e metodave të ndryshme edukative për të stimuluar mësimin dhe në vlerësimin e përparimit të fëmijëve.',
    hobbies:
      'Interesi për të ndjekur kursime dhe seminare për metodat e reja të mësimdhënies në arsimin parashkollor, angazhimi në projekte vullnetare që mbështesin zhvillimin e hershëm të fëmijëve, dhe krijimi i materialeve edukative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukator në 'Qendra e Zhvillimit të Fëmijërisë së Hershme', duke ofruar programe të pasura edukative për fëmijët e moshës parashkollore, përfshirë artin, muzikën dhe shkencën që nga viti 2022. Ka ndërtuar një mjedis mësimor që inkurajon kureshtjen dhe eksplorimin e fëmijëve (2019-2022).",
    education:
      'Edukim Profesional në Fushën e Edukimit të Fëmijërisë së Hershme, Qendra Profesionale e Formimit në Edukim, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Përvojë në përdorimin e mjeteve dhe aplikacioneve edukative për të mbështetur mësimin interaktiv dhe vizual.',
    soft_skills:
      'Lidership në krijimin dhe menaxhimin e programeve edukative, aftësi të shkëlqyera në motivimin e fëmijëve për të mësuar përmes lojës dhe eksperimentimit.',
    technical_skills:
      'Specializim në metodat e edukimit të fëmijërisë së hershme, njohuri në zhvillimin psikologjik të fëmijëve dhe në përdorimin e teknikave të vlerësimit të përparimit.',
    hobbies:
      'Pasioni për artet dhe krijimtarinë në edukimin e fëmijëve, angazhimi në aktivitete që nxisin zhvillimin e aftësive të fëmijëve në natyrë dhe eksplorimin e metoda të reja edukative.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Elektricist për Linja të Tensionit të Lartë në 'Kompania Kombëtare e Energjisë Elektrike', duke punuar në instalimin dhe mirëmbajtjen e rrjetit të transmetimit të energjisë që nga viti 2021. Ka udhëhequr projekte për zgjerimin e rrjetit dhe ka marrë pjesë në trajnime për sigurinë në punë me tension të lartë (2018-2021).",
    education:
      'Edukim Profesional në Elektricitet dhe Transmetim të Energjisë, Qendra e Trajnimit Profesional në Elektricitet, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri bazike në përdorimin e softuerëve për menaxhimin e rrjetit të energjisë dhe në analizën e defekteve.',
    soft_skills:
      'Aftësi të shkëlqyera në punën në ekip, në menaxhimin e situatave të rrezikshme dhe në komunikimin efektiv me kolegët dhe supervizorët.',
    technical_skills:
      'Ekspertizë në punën me linja të tensionit të lartë, njohuri në protokollet e sigurisë për punën me energji elektrike dhe në teknikat e diagnostikimit dhe riparimit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e transmetimit të energjisë, pjesëmarrja në kurse dhe seminare për përmirësimin e aftësive profesionale, dhe aktivitete në natyrë për të qëndruar të shëndetshëm.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Linjave të Tensionit të Lartë në 'Firma e Ndërtimit dhe Mirëmbajtjes së Infrastrukturës Elektrike', duke ofruar zgjidhje për mirëmbajtjen dhe riparimin e rrjetit të tensionit të lartë, duke përfshirë stacionet transformuese dhe linjat e transmetimit që nga viti 2022. Ka përmirësuar efikasitetin e rrjetit dhe ka zvogëluar ndërprerjet e energjisë (2019-2022).",
    education:
      'Edukim Profesional në Elektricitet Industriale dhe Sisteme të Tensionit të Lartë, Instituti Profesional i Teknologjisë Elektrike, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e sistemeve të monitorimit dhe kontrollit të rrjetit elektrik dhe në përdorimin e mjeteve diagnostike moderne.',
    soft_skills:
      'Lidership në menaxhimin e ekipit të teknikëve, aftësi të forta në organizimin e projekteve dhe në trajtimin e emergjencave elektrike.',
    technical_skills:
      'Specializim në mirëmbajtjen e sistemeve të tensionit të lartë, njohuri të thella në standardet e sigurisë dhe protokollet e punës në ambiente me rrezikshmëri të lartë.',
    hobbies:
      'Pasioni për inovacionet në fushën e energjisë elektrike, angazhimi në projekte për energji të rinovueshme dhe aktivitete fizike si ngjitja dhe ecja në natyrë për relaks.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues për Persona me Aftësi të Kufizuara në 'Qendra e Edukimit Special', duke ofruar programe të personalizuara edukative dhe mbështetje për fëmijë dhe të rinj me nevoja të veçanta që nga viti 2021. Ka zhvilluar metoda të ndryshme të mësimdhënies që përshtaten me aftësitë individuale të çdo nxënësi dhe ka marrë pjesë në trajnime për teknikat më të reja terapeutike dhe edukative.",
    education:
      'Master në Edukimin e Personave me Nevoja të Veçanta, Universiteti i Londrës, Mbretëria e Bashkuar; Specializim jashtë Shqipërisë në metodat e edukimit special.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive asistuese dhe softuerëve edukativë për të mbështetur mësimdhënien e personalizuar.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin dhe ndërtimin e marrëdhënieve me nxënësit, prindërit dhe kolegët, si dhe në menaxhimin e klasës.',
    technical_skills:
      'Ekspertizë në metodat e edukimit special, njohuri në zhvillimin dhe zbatimin e planeve mësimore individuale dhe në përdorimin e teknikave të terapisë së sjelljes.',
    hobbies:
      'Interesi për të ndjekur studime dhe hulumtime në fushën e edukimit special, pjesëmarrja në konferenca ndërkombëtare mbi edukimin dhe inkluzionin, dhe angazhimi në projekte vullnetare që mbështesin të drejtat e personave me aftësi të kufizuara.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Edukativ për Persona me Aftësi të Kufizuara në 'Organizata Ndërkombëtare për Inkluzionin', duke punuar me shkolla dhe institucione për të përmirësuar qasjen dhe cilësinë e edukimit për persona me nevoja të veçanta që nga viti 2022. Ka ndihmuar në trajnimin e mësuesve dhe ka zbatuar programe të reja edukative që promovojnë inkluzionin dhe diversitetin.",
    education:
      'Master në Edukimin Inkluziv dhe Specializim në Strategjitë e Mësimdhënies për Nevoja të Veçanta, Universiteti i Melburnit, Australi; Specializim jashtë Shqipërisë në fushën e inkluzionit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri në përdorimin e platformave edukative online dhe mjeteve digjitale për të mbështetur inkluzionin në klasë.',
    soft_skills:
      'Lidership në zhvillimin e strategjive edukative inkluzive, aftësi të forta në ndërtimin e partneriteteve me organizatat dhe institucionet e arsimit.',
    technical_skills:
      'Specializim në mirëmbajtjen e sistemeve të tensionit të lartë, njohuri të thella në standardet e sigurisë dhe protokollet e punës në ambiente me rrezikshmëri të lartë.',
    hobbies:
      'Pasioni për inovacionet në fushën e energjisë elektrike, angazhimi në projekte për energji të rinovueshme dhe aktivitete fizike si ngjitja dhe ecja në natyrë për relaks.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues për Persona me Aftësi të Kufizuara në 'Qendra e Edukimit Special', duke punuar me fëmijë dhe të rinj me nevoja të veçanta që nga viti 2021. Ka zhvilluar metoda dhe programe edukative të personalizuara, përfshirë teknikat terapeutike dhe edukative më të fundit.",
    education:
      'Master në Edukimin e Personave me Nevoja të Veçanta dhe Specializim jashtë Shqipërisë, fokusuar në metodat inovative të mësimdhënies dhe terapisë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive asistuese dhe mjeteve edukative digjitale për të mbështetur mësimdhënien e personalizuar.',
    soft_skills:
      'Aftësi të shkëlqyera në ndërtimin e marrëdhënieve me nxënësit dhe prindërit, komunikim efektiv dhe menaxhim i klasës.',
    technical_skills:
      'Ekspertizë në metodat e edukimit special, zhvillimin e planeve mësimore individuale dhe përdorimin e teknikave të terapisë së sjelljes.',
    hobbies:
      'Interes në studimin e metodave të reja të mësimdhënies për edukimin special, pjesëmarrje në konferenca ndërkombëtare dhe angazhim në projekte vullnetare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Edukativ për Persona me Aftësi të Kufizuara në 'Organizata Ndërkombëtare për Inkluzionin', duke ofruar mbështetje dhe këshilla për institucione dhe shkolla që synojnë përmirësimin e qasjes në edukim për persona me nevoja të veçanta që nga viti 2022.",
    education:
      'Master në Edukimin Inkluziv dhe Specializim në Strategjitë e Mësimdhënies për Nevoja të Veçanta, realizuar jashtë Shqipërisë, me theks të veçantë në përfshirjen dhe diversitetin në arsim.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e mjeteve digjitale dhe platformave edukative për të promovuar mësimdhënien inkluzive.',
    soft_skills:
      'Aftësi të forta organizative, lideri në zhvillimin dhe zbatimin e programeve edukative inkluzive, dhe shkathtësi të shkëlqyera komunikuese.',
    technical_skills:
      'Specializim në metodat e edukimit të fëmijërisë së hershme dhe strategjitë për përfshirjen e nxënësve me nevoja të veçanta, si dhe njohuri të thella në psikologjinë edukative.',
    hobbies:
      'Angazhim në aktivitete që promovojnë ndërgjegjësimin dhe përmirësimin e praktikave në edukimin inkluziv, si dhe pasion për hulumtimin e tendencave të reja në fushën e arsimit special.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Psikiater në 'Qendra e Shëndetit Mendor', duke ofruar konsultime, diagnostikime dhe trajtime për pacientët me çrregullime të shëndetit mendor që nga viti 2021. Ka zhvilluar programe terapeutike të personalizuara dhe ka marrë pjesë në trajnime për metodat më të reja në psikiatri dhe terapi (2018-2021).",
    education:
      'Specializim në Psikiatri dhe Master në Shkencat e Shëndetit Mendor, Universiteti i Tiranës (2016-2018); Studime të thelluara në terapitë inovative dhe qasjet e reja në trajtimin e çrregullimeve psikike.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të menaxhimit të të dhënave të pacientëve dhe në analizën e informacionit për të përmirësuar qasjet terapeutike.',
    soft_skills:
      'Aftësi të shkëlqyera në dëgjim aktiv, komunikim me pacientët dhe familjet e tyre, dhe në ndërtimin e marrëdhënieve terapeutike.',
    technical_skills:
      'Ekspertizë në diagnostikimin dhe trajtimin e një game të gjerë të çrregullimeve psikike, përfshirë depresionin, ankthin, çrregullimet bipolare dhe shizofreninë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në psikiatri dhe neuroshkencë, pjesëmarrja në konferenca dhe simpoziume mjekësore, dhe angazhimi në hulumtime mbi efikasitetin e terapive të reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Psikiatrik në 'Shërbimi i Këshillimit Online për Shëndetin Mendor', duke ofruar mbështetje dhe terapi për individët përmes platformave online që nga viti 2022. Ka përqendruar në trajtimin e çrregullimeve të shëndetit mendor nëpërmjet qasjeve moderne dhe terapi në distancë (2019-2022).",
    education:
      'Specializim në Psikoterapi dhe Psikiatri, përfshirë trajnime specifike për terapinë online dhe menaxhimin e seancave terapeutike nëpërmjet teknologjisë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e platformave të terapisë online dhe në teknikat e komunikimit efektiv në mjediset virtuale.',
    soft_skills:
      'Lidership në menaxhimin e rasteve të kompleksa në mjedisin online, aftësi të shkëlqyera në të kuptuarit dhe adresimin e nevojave të pacientëve nëpërmjet komunikimit virtual.',
    technical_skills:
      'Specializim në qasjet e terapisë në distancë, diagnostikimin e saktë dhe zbatimin e planeve terapeutike përshtatur për mjedisin online.',
    hobbies:
      'Angazhimi në promovimin e shëndetit mendor në komunitetin online, hobi në leximin e literaturës së specializuar psikiatrike dhe psikologjike, dhe pjesëmarrja në forume dhe diskutime për shëndetin mendor.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent Ligjor në 'Zyra e Avokatisë Mëso & Partnerët', duke ofruar mbështetje në përgatitjen e dokumenteve ligjore, kërkimin ligjor dhe menaxhimin e rasteve për klientët që nga viti 2021. Ka kontribuar në analizën e çështjeve ligjore dhe ka marrë pjesë në trajnime për zhvillimin profesional në fushën e së drejtës (2018-2021).",
    education:
      'Diplomë në Asistencë Ligjore, Shkolla Profesionale e Së Drejtës, Tiranë; Kurse të ndryshme për specializimin në procedurat ligjore dhe menaxhimin e dokumentacionit.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e bazave të të dhënave ligjore dhe softuerëve për menaxhimin e dokumentacionit ligjor.',
    soft_skills:
      'Aftësi të shkëlqyera organizative, në komunikimin me klientët dhe në menaxhimin e afateve dhe prioriteteve.',
    technical_skills:
      'Ekspertizë në përgatitjen e dokumenteve ligjore, kërkimin dhe analizën ligjore dhe në ndjekjen e procedurave gjyqësore.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e së drejtës, pjesëmarrja në seminarë dhe workshope ligjore, dhe leximi i literaturës ligjore.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent Ligjor në 'Firma e Konsulencës Ligjore Ligj & Drejtësi', duke ndihmuar në ofrimin e këshillimeve ligjore për biznese dhe individë, duke përfshirë kërkimin dhe analizën ligjore që nga viti 2022. Ka përmirësuar proceset e mbledhjes së të dhënave dhe dokumentacionit për raste ligjore (2019-2022).",
    education:
      'Edukim Profesional në Asistencë Ligjore, Instituti i Studimeve Ligjore, Tiranë; Trajnime të specializuara në menaxhimin e rasteve dhe teknikat e kërkimit ligjor.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e softuerëve për analizën ligjore dhe në menaxhimin e platformave online për ndjekjen e rasteve.',
    soft_skills:
      'Lidership në organizimin e punës së zyrës ligjore, aftësi të shkëlqyera në punën në ekip dhe në trajtimin e informacionit të ndjeshëm.',
    technical_skills:
      'Specializim në aspektet ligjore të biznesit, njohuri të thella në procedurat administrative dhe në përgatitjen e peticioneve dhe dokumentacionit ligjor.',
    hobbies:
      'Pasioni për të mësuar më shumë rreth së drejtës ndërkombëtare, angazhimi në projekte vullnetare që ofrojnë ndihmë ligjore falas, dhe hobi në shkrimin e artikujve ligjorë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Folës Spiker në 'Televizioni Kombëtar', duke prezantuar lajmet e mbrëmjes dhe programe të ndryshme informative që nga viti 2021. Ka përmirësuar aftësitë e komunikimit dhe prezantimit nëpërmjet trajnimeve të vazhdueshme dhe ka kontribuar në rritjen e audiencës me prezantime të qarta dhe të saktë (2018-2021).",
    education:
      'Diplomë në Gazetari dhe Komunikim Masiv, Universiteti i Tiranës; Kurse të ndryshme për zhvillimin e aftësive në prezantim dhe artikulim.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'Njohuri në përdorimin e softuerëve të editimit të videos dhe audio, si dhe në menaxhimin e platformave sociale për të ndërtuar një lidhje më të fortë me audiencën.',
    soft_skills:
      'Aftësi të shkëlqyera në artikulimin dhe në krijimin e një prezence autoritative dhe të besueshme në ekran, si dhe në menaxhimin e stresit në situata live.',
    technical_skills:
      'Ekspertizë në teknikat e prezantimit televiziv, njohuri të thella në gazetari dhe në përpunimin e informacionit për ta bërë të qasshëm për audiencën.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në mediat dhe teknologjinë, pjesëmarrja në workshope për gazetari dhe komunikim, dhe pasioni për leximin dhe shkrimin kreativ.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Spiker në 'Stacioni i Ri Televiziv', duke udhëhequr emisione të ndryshme të mëngjesit dhe të pasdites me fokus në kulturë, shoqëri dhe aktualitet që nga viti 2022. Ka arritur të krijojë një ndikim pozitiv te audiencat me intervista të thella dhe segmente edukative (2019-2022).",
    education:
      'Edukim Profesional në Artet e Komunikimit dhe Prezantimit, Akademia e Medias dhe Artit; Trajnime intensive në zhvillimin e aftësive për prezantim televiziv dhe menaxhimin e emisioneve live.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Përvojë në përdorimin e teknologjive të reja mediatike për të përmirësuar cilësinë e produksionit televiziv dhe në përdorimin e rrjeteve sociale për angazhimin me audiencën.',
    soft_skills:
      'Lidership në prodhimin e përmbajtjes televizive, aftësi të shkëlqyera në komunikimin verbal dhe jo-verbal dhe në ndërtimin e marrëdhënieve me mysafirët e emisionit.',
    technical_skills:
      'Specializim në gazetarinë investigative dhe kulturore, njohuri në regjinë televizive dhe në përpilimin e skriptave për emisione.',
    hobbies:
      'Pasioni për kulturën dhe artin, angazhimi në projekte të ndryshme sociale dhe kulturore, dhe hobi në fotografinë dhe dokumentarizmin.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Telekomunikacionit në 'Shërbimi Kombëtar i Telekomunikacionit', duke punuar në instalimin dhe mirëmbajtjen e rrjeteve të telekomunikacionit dhe infrastrukturës së të dhënave që nga viti 2021. Ka marrë pjesë në projekte për zgjerimin e rrjetit të fibrit optik dhe ka ndihmuar në trajnimin e teknikëve të rinj (2018-2021).",
    education:
      'Edukim Profesional në Teknologjinë e Telekomunikacionit, Qendra e Trajnimit Profesional në Telekomunikacion, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për menaxhimin e rrjetit dhe analizën e trafikut të të dhënave, si dhe në konfigurimin e pajisjeve të rrjetit.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve teknike, në komunikimin efektiv me ekipet dhe klientët, dhe në menaxhimin e projekteve.',
    technical_skills:
      'Ekspertizë në instalimin dhe mirëmbajtjen e rrjeteve të telekomunikacionit, njohuri në teknologjinë e fibrit optik dhe në sistemet e transmetimit të të dhënave.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e telekomunikacionit, pjesëmarrja në seminare dhe konferenca të specializuara, dhe eksperimentimi me teknologjitë e reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier i Rrjetit në 'Kompania e Inovacionit në Telekomunikacion', duke ofruar zgjidhje për optimizimin e rrjeteve dhe sigurinë e të dhënave që nga viti 2022. Ka kryer hulumtime për përmirësimin e teknologjive të rrjetit dhe ka qenë pjesë e ekipeve për zhvillimin e projekteve inovative (2019-2022).",
    education:
      'Edukim Profesional Avancuar në Sistemet e Telekomunikacionit, Instituti Teknologjik i Telekomunikacioneve, Tiranë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e sistemve të menaxhimit të rrjetit, në diagnostikimin e problemeve të rrjetit dhe në implementimin e zgjidhjeve për sigurinë e të dhënave.',
    soft_skills:
      'Lidership në drejtimin e ekipeve të projekteve, aftësi të shkëlqyera organizative dhe në komunikimin dhe trajnimin e personelit teknik.',
    technical_skills:
      'Specializim në teknologjitë e rrjetit dhe transmetimit, njohuri të thella në sigurinë e rrjetit dhe në përdorimin e teknologjive të reja si 5G.',
    hobbies:
      'Pasioni për teknologjinë dhe inovacionin në telekomunikacion, angazhimi në projekte vullnetare që përdorin teknologjinë për të ndihmuar në zgjidhjen e problemeve sociale, dhe hobi në ndërtimin e pajisjeve dhe sistemeve elektronike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik i Telekomunikacionit në 'Operatori Kombëtar i Telekomunikacionit', duke punuar në mirëmbajtjen e rrjeteve celularë dhe infrastrukturës së të dhënave që nga viti 2021. Ka udhëhequr projekte për përmirësimin e cilësisë së shërbimit dhe ka zbatuar zgjidhje inovative për zgjerimin e rrjetit (2018-2021).",
    education:
      'Master në Inxhinieri të Telekomunikacionit, Universiteti Politeknik i Milanos, Itali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në analizën dhe menaxhimin e rrjeteve të komunikimit, konfigurimin e pajisjeve të rrjetit dhe në zbatimin e protokolleve të sigurisë.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në zgjidhjen e problemeve komplekse dhe në komunikimin ndërpersonel.',
    technical_skills:
      'Ekspertizë në teknologjitë e rrjeteve celularë, rrjeteve pa tela dhe në sistemet e komunikimit të të dhënave.',
    hobbies:
      'Interesi për inovacionet në fushën e telekomunikacionit, ndjekja e kurseve të specializuara dhe pjesëmarrja në konferenca të ndryshme në fushën e teknologjisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier i Sistemeve të Telekomunikacionit në 'Kompania Ndërkombëtare e Teknologjisë', duke ofruar konsulencë dhe zgjidhje teknike për rrjete të avancuara telekomunikacioni që nga viti 2022. Ka kontribuar në zhvillimin e infrastrukturës së rrjeteve 5G dhe në zbatimin e standardeve të reja të komunikimit (2019-2022).",
    education:
      'Master në Teknologjitë e Informacionit dhe Telekomunikacionit, Universiteti i Këmbricës, Mbretëria e Bashkuar.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Ekspert në përdorimin e teknologjive të rrjetit të avancuar, përfshirë 5G, dhe në menaxhimin e sigurisë së rrjetit.',
    soft_skills:
      'Lidership i qartë në menaxhimin e ekipit, aftësi të forta në analizën dhe zgjidhjen e sfidave teknike, dhe shkathtësi të larta në komunikim.',
    technical_skills:
      'Specializim në planifikimin dhe implementimin e rrjeteve të telekomunikacionit, njohuri të thella në teknologjitë emergjente si IoT (Interneti i Gjërave) dhe cloud computing.',
    hobbies:
      'Pasion për të qëndruar në krye të inovacioneve teknologjike, angazhim në projekte kërkimore dhe zhvillimore, dhe hobi në programimin dhe zhvillimin e aplikacioneve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Fizioterapeut në 'Qendra e Rehabilitimit Fizik', duke ofruar terapi dhe rehabilitim për pacientët me lëndime dhe sëmundje të ndryshme muskuloskeletale që nga viti 2021. Ka zhvilluar programe të individualizuara të rehabilitimit dhe ka marrë pjesë në trajnime për teknikat më të reja të fizioterapisë (2018-2021).",
    education: 'Master në Fizioterapi, Universiteti i Barcelonës, Spanjë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për menaxhimin e pacientëve dhe analizën e progresit të terapisë.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me pacientët, në përshtatjen e planeve të terapisë me nevojat individuale dhe në motivimin e pacientëve gjatë procesit të rehabilitimit.',
    technical_skills:
      'Ekspertizë në teknikat e fizioterapisë manuale, terapinë me ushtrime dhe metodat e reja të rehabilitimit, përfshirë terapinë me laser dhe elektroterapinë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e shëndetit dhe rehabilitimit, pjesëmarrja në konferenca dhe seminare për fizioterapinë, dhe angazhimi në sporte dhe aktivitete fizike për të promovuar një jetë të shëndetshme.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Fizioterapeut në 'Instituti i Shëndetit dhe Lëvizjes', duke ofruar konsulencë dhe trajnime për profesionistë të shëndetit në qasjet më të fundit të fizioterapisë dhe menaxhimit të dhimbjes që nga viti 2022. Ka udhëhequr seminare dhe workshop-e për metodat e rehabilitimit dhe ka përmirësuar teknikat e vlerësimit të pacientëve (2019-2022).",
    education:
      'Master në Shkencat e Fizioterapisë, Universiteti i Amsterdamit, Holandë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Holandisht',
    digital_skills:
      'Ekspert në përdorimin e teknologjive të avancuara për vlerësimin dhe trajtimin e pacientëve, si dhe në menaxhimin e informacionit shkencor dhe klinik.',
    soft_skills:
      'Lidership në organizimin dhe menaxhimin e programeve të trajnimit, aftësi të shkëlqyera në ndërtimin e marrëdhënieve profesionale dhe në komunikimin shkencor.',
    technical_skills:
      'Specializim në qasjet inovative në menaxhimin e dhimbjes, rehabilitimin e sportistëve dhe në përdorimin e teknikave të rehabilitimit bazuar në dëshmi.',
    hobbies:
      'Pasioni për hulumtimin dhe inovacionin në fushën e fizioterapisë, angazhimi në projekte kërkimore që synojnë të përmirësojnë praktikat e rehabilitimit, dhe hobi në sporte të ndryshme, veçanërisht në atletikë dhe not.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Projektues Arkitekt në 'Studio e Arkitekturës Moderne', duke punuar në projektimin dhe zhvillimin e koncepteve arkitektonike për ndërtesa rezidenciale dhe komerciale që nga viti 2021. Ka marrë pjesë në konkurse ndërkombëtare të arkitekturës dhe ka bashkëpunuar me ekipet e ndërtimit për të siguruar realizimin e projekteve sipas vizionit të përcaktuar (2018-2021).",
    education:
      'Master në Arkitekturë, Universiteti Politeknik i Milanos, Itali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e programave të avancuara arkitektonike si AutoCAD, Revit dhe SketchUp për modelimin dhe vizualizimin e projekteve.',
    soft_skills:
      'Aftësi të shkëlqyera në punën në ekip, komunikimin me klientët dhe në menaxhimin e projekteve, duke përfshirë afatet kohore dhe buxhetin.',
    technical_skills:
      'Ekspertizë në projektimin e qëndrueshëm, analizën e peisazhit urban dhe në zhvillimin e koncepteve inovative që përmirësojnë cilësinë e jetesës.',
    hobbies:
      'Interesi për të ndjekur trendet e fundit në arkitekturë dhe dizajn, pjesëmarrja në workshope dhe seminare për zhvillimin profesional, dhe hobi në fotografinë arkitektonike dhe udhëtimet për të eksploruar arkitektura të reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Arkitekt Projektues në 'Firma Ndërkombëtare e Dizajnit Urban', duke ofruar zgjidhje inovative për hapësirat urbane dhe projekte të ndryshme zhvillimore që nga viti 2022. Ka kryer studime të thelluara mbi ndikimin social dhe mjedisor të projekteve të dizajnit urban dhe ka udhëhequr iniciativa për përfshirjen e qytetarëve në proceset e planifikimit (2019-2022).",
    education:
      'Master në Dizajn Urban dhe Arkitekturë, Universiteti i Kopenhagës, Danimarkë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Danisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e softuerëve për planifikimin urban dhe arkitektonik, duke përfshirë analizat e hapësirës dhe modelimin 3D.',
    soft_skills:
      'Lidership në menaxhimin e projekteve dhe iniciativave urbanistike, aftësi të shkëlqyera në ndërtimin e bashkëpunimeve me palët e interesuara dhe në prezantimin e projekteve.',
    technical_skills:
      'Specializim në planifikimin dhe dizajnin urban, njohuri të thella në shtresimin social dhe mjedisor të projekteve dhe në zbatimin e qasjes së përfshirjes qytetare.',
    hobbies:
      'Angazhimi në projekte që synojnë të rrisin ndërgjegjësimin për qëndrueshmërinë mjedisore, pasioni për dizajnin urban dhe arkitekturën e gjelbër, dhe hobi në krijimin e artit publik dhe instalacioneve urbane.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Instruktor Sportesh në 'Akademia e Sporteve Elite', duke ofruar trajnime të specializuara për atletët në disiplina të ndryshme sportive që nga viti 2021. Ka zhvilluar programe stërvitore që përmirësojnë performancën sportive dhe ka organizuar kampe stërvitore ndërkombëtare (2018-2021).",
    education:
      'Master në Shkencat e Sportit dhe Edukim Fizik, Universiteti i Kolognit, Gjermani.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të monitorimit dhe analizës së performancës sportive, si dhe në menaxhimin e të dhënave stërvitore.',
    soft_skills:
      'Aftësi të shkëlqyera në motivimin e sportistëve, në planifikimin dhe organizimin e sesioneve stërvitore, dhe në menaxhimin e dinamikave të grupit.',
    technical_skills:
      'Ekspertizë në metodat e stërvitjes për përmirësimin e forcës, qëndrueshmërisë dhe shkathtësisë, njohuri të thella në fiziologjinë e sportit dhe në rehabilitimin e lëndimeve sportive.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e sportit dhe stërvitjes, pjesëmarrja në konferenca dhe seminare për trajnime sportive, dhe praktikimi i sporteve të ndryshme si hobi.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent për Performancën Sportive në 'Qendra e Lartë e Përgatitjes Olimpike', duke punuar me sportistë olimpikë për të maksimizuar performancën e tyre nëpërmjet programeve të përshtatura stërvitore që nga viti 2022. Ka aplikuar teknika të avancuara të stërvitjes dhe psikologjisë sportive (2019-2022).",
    education:
      'Master në Psikologji Sportive dhe Shkencat e Performancës, Universiteti i Lissabonit, Portugali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Portugalisht',
    digital_skills:
      'Ekspert në analizën e performancës sportive përmes softuerëve të specializuar dhe në përdorimin e aplikacioneve për monitorimin e progresit.',
    soft_skills:
      'Lidership i qartë në menaxhimin e ekipit stërvitor, aftësi të shkëlqyera në komunikimin dhe këshillimin e sportistëve për çështje të psikologjisë sportive.',
    technical_skills:
      'Specializim në planifikimin e programeve të stërvitjes, njohuri të avancuara në psikologjinë sportive dhe në menaxhimin e stresit dhe presionit të garave.',
    hobbies:
      'Pasioni për hulumtimin në fushën e psikologjisë sportive, angazhimi në aktivitete që promovojnë shëndetin mendor të sportistëve, dhe hobi në leximin e literaturës së specializuar në sport dhe performancë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Dizenjator Grafik Dekorator në 'Studioja Kreative e Dizajnit', duke punuar në krijimin e koncepteve vizuale dhe dekorative për klientë në sektorin e reklamës dhe marketingut që nga viti 2021. Ka bashkëpunuar me marka të ndryshme për të zhvilluar identitete vizuale dhe ka marrë pjesë në projekte ndërkombëtare të dizajnit (2018-2021).",
    education:
      'Master në Dizajn Grafik dhe Komunikim Vizual, Universiteti i Arteve në Berlin, Gjermani.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të avancuara të dizajnit si Adobe Creative Suite, përfshirë Photoshop, Illustrator dhe InDesign.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin vizual, kreativitet dhe zgjidhje inovative të problemeve, si dhe në punën në ekip dhe menaxhimin e projekteve.',
    technical_skills:
      'Ekspertizë në dizajnin grafik, zhvillimin e koncepteve dekorative dhe aplikimin e tyre në hapësira fizike dhe materiale promocionale.',
    hobbies:
      'Interesi për artin dhe kulturën vizuale, pjesëmarrja në ekspozita dhe evente të dizajnit, dhe hobi në fotografi dhe eksperimentimin me materiale të reja dhe teknika.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Dizajnit Grafik dhe Dekorimit në 'Agjencia e Brandingut dhe Marketingut', duke ofruar zgjidhje kreative dhe strategjike për ngritjen e imazhit të kompanive kliente që nga viti 2022. Ka udhëhequr sesione kreative për zhvillimin e fushatave reklamuese dhe ka kontribuar në përmirësimin e përvojës së përdoruesit në ambiente të ndryshme (2019-2022).",
    education:
      'Master në Dizajn dhe Dekorim Ambiental, Universiteti i Milanos, Itali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri të thella në përdorimin e teknologjive dhe softuerëve për vizualizimin 3D dhe modelimin e ambjenteve.',
    soft_skills:
      'Lidership në organizimin e ekipeve kreative, aftësi të forta në ndërtimin e koncepteve që lidhen emocionalisht me audiencën dhe në komunikimin efektiv me klientët.',
    technical_skills:
      'Specializim në dizajnin grafik për qëllime marketingu dhe dekorimin e ambienteve komerciale, njohuri në tendencat e fundit të dizajnit dhe në aplikimin praktik të tyre.',
    hobbies:
      'Pasioni për dizajnin inovativ dhe artin modern, angazhimi në projekte që sfidojnë normat tradicionale të dizajnit, dhe hobi në krijimin e artit vizual dhe instalacioneve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Operacioneve në Institucione Financiare në 'Banka Kombëtare e Investimeve', duke menaxhuar dhe optimizuar operacionet bankare dhe financiare që nga viti 2021. Ka udhëhequr projekte për automatizimin e proceseve dhe ka marrë pjesë në iniciativa për përmirësimin e efikasitetit operacional (2018-2021).",
    education:
      'Master në Menaxhimin e Operacioneve Financiare, Universiteti i Amsterdamit, Holandë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Holandisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të avancuara financiare dhe teknologjive të informacionit për menaxhimin e operacioneve.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën dhe zgjidhjen e problemeve, në menaxhimin e projekteve dhe në komunikimin efektiv me ekipet dhe palët e interesuara.',
    technical_skills:
      'Ekspertizë në proceset e operacioneve financiare, rregullat dhe procedurat bankare, dhe në zbatimin e strategjive për përmirësimin e shërbimeve financiare.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në sektorin financiar, pjesëmarrja në konferenca për inovacionin financiar, dhe hobi në analizën e tregjeve financiare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i Operacioneve në 'Qendra e Shërbimeve Financiare Ndërkombëtare', duke ofruar analizë dhe mbështetje për operacionet e ndërlikuara financiare dhe duke punuar në përmirësimin e sistemeve të raportimit financiar që nga viti 2022. Ka kryer vlerësime të rrezikut operacional dhe ka kontribuar në zhvillimin e politikave të reja operacionale (2019-2022).",
    education:
      'Master në Analizën e Operacioneve dhe Menaxhimin Financiar, Universiteti i Këmbricës, Mbretëria e Bashkuar.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'Njohuri të thella në përdorimin e softuerëve për analizën e të dhënave financiare dhe në menaxhimin e platformave të raportimit.',
    soft_skills:
      'Lidership në menaxhimin e projekteve operacionale, aftësi të forta analitike dhe në ndërtimin e strategjive për menaxhimin e rrezikut.',
    technical_skills:
      'Specializim në vlerësimin e operacioneve financiare, njohuri të avancuara në legjislacionin financiar dhe në teknikat e menaxhimit të rrezikut operacional.',
    hobbies:
      'Pasioni për inovacionin në menaxhimin financiar, angazhimi në studime për tendencat e reja në teknologjitë financiare, dhe hobi në zhvillimin e modeleve financiare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier për Ndërtimin e Skeleteve të Ndërtesave në 'Kompania e Ndërtimit Strukturor', duke punuar në projektimin dhe ndërtimin e strukturave të qëndrueshme për ndërtesa të larta dhe komplekse që nga viti 2021. Ka udhëhequr ekipet e inxhinierisë për të siguruar zbatimin e standardeve më të larta të sigurisë dhe qëndrueshmërisë (2018-2021).",
    education:
      'Master në Inxhinieri Civile me fokus në Strukturat e Ndërtesave, Universiteti Teknik i Mynihut, Gjermani.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të avancuara të inxhinierisë strukturore si AutoCAD Civil 3D dhe SAP2000 për modelimin dhe analizën e strukturave.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në zgjidhjen e sfidave teknike dhe në komunikimin efektiv me palët e interesuara.',
    technical_skills:
      'Ekspertizë në projektimin e strukturave të ndërtesave, analizën e ngarkesave dhe dinamikave të strukturave, dhe në zbatimin e teknologjive të reja të ndërtimit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e inxhinierisë civile, pjesëmarrja në konferenca për inxhinieri strukturore, dhe hobi në modelimin 3D dhe dizajnin arkitektonik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Inxhinierisë Strukturore në 'Firma e Këshillimit për Ndërtim', duke ofruar ekspertizë për optimizimin e projekteve të ndërtimit dhe zgjidhjen e problemeve strukturore që nga viti 2022. Ka përmirësuar metodat e analizës strukturore dhe ka ndihmuar në implementimin e zgjidhjeve inovative në ndërtime (2019-2022).",
    education:
      'Master në Inxhinieri Strukturore dhe Rrezikun Sizmik, Universiteti i Barcelonës, Spanjë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Spanjisht',
    digital_skills:
      'Njohuri të thella në përdorimin e softuerëve për analizën sizmike dhe strukturore, si ETABS dhe Revit, për të përmirësuar sigurinë dhe efikasitetin e ndërtimeve.',
    soft_skills:
      'Lidership në drejtimin e hulumtimeve dhe zhvillimit të projekteve, aftësi të shkëlqyera në ndërtimin e marrëdhënieve profesionale dhe në komunikimin shkencor.',
    technical_skills:
      'Specializim në projektimin e strukturave për rezistencë ndaj tërmeteve, njohuri në materialet e ndërtimit të qëndrueshme dhe në teknikat e avancuara të inxhinierisë strukturore.',
    hobbies:
      'Pasioni për inovacionin në inxhinierinë strukturore, angazhimi në projekte kërkimore që adresojnë sfidat e ndërtimit në zonat sizmike, dhe hobi në fotografinë arkitektonike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier i Sigurimit Teknik në 'Kompania e Sigurimeve Teknike', duke ofruar vlerësime dhe konsulencë teknike për sigurimin e projekteve inxhinierike dhe ndërtimore që nga viti 2021. Ka zhvilluar analiza të rrezikut teknik dhe ka marrë pjesë në hartimin e politikave të sigurimit për të mbuluar nevojat specifike të klientëve (2018-2021).",
    education:
      'Master në Inxhinieri dhe Menaxhimin e Rrezikut, Universiteti Politeknik i Torinos, Itali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për analizën e rrezikut dhe vlerësimin e sigurisë, si dhe në menaxhimin e bazave të të dhënave të klientëve.',
    soft_skills:
      'Aftësi të shkëlqyera në analizën dhe menaxhimin e rrezikut, në komunikimin me klientët për të sqaruar aspektet teknike të polisave të sigurimit, dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në vlerësimin teknik të projekteve inxhinierike, analizën e rrezikut të ndërtimit dhe në përcaktimin e kushteve të sigurimit bazuar në analizat teknike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në menaxhimin e rrezikut dhe sigurime, pjesëmarrja në konferenca dhe seminare për sigurimin teknik, dhe hobi në studimin e rasteve të ndryshme të aksidenteve inxhinierike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i Sigurimit Teknik në 'Instituti i Sigurimeve për Ndërtimin', duke punuar në vlerësimin e projekteve të ndërtimit dhe infrastrukturës për të identifikuar rreziqet dhe nevojat për sigurim që nga viti 2022. Ka kontribuar në zhvillimin e modeleve të rrezikut për të përmirësuar produktet e sigurimit (2019-2022).",
    education:
      'Master në Inxhinieri Civile me specializim në Menaxhimin e Rrezikut dhe Sigurimin, Universiteti i Grazit, Austri.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri të thella në përdorimin e sistemeve të informacionit gjeografik (GIS) për analizën e rrezikut dhe në softuerët e modelimit të rrezikut.',
    soft_skills:
      'Lidership në menaxhimin e analizave të rrezikut, aftësi të forta në zgjidhjen e problemeve komplekse dhe në prezantimin e rezultateve të analizave.',
    technical_skills:
      'Specializim në analizën e rrezikut për ndërtimin dhe infrastrukturën, njohuri në legjislacionin për ndërtimin dhe sigurimin, dhe në teknikat e vlerësimit të rrezikut teknik.',
    hobbies:
      'Pasioni për inovacionet në fushën e sigurimeve teknike, angazhimi në projekte kërkimore që adresojnë sfidat e sigurisë në ndërtim, dhe hobi në eksplorimin e teknologjive të reja për menaxhimin e rrezikut.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Teknologjisë së Informacionit në 'Firma Konsulente për IT', duke ofruar zgjidhje të personalizuara të teknologjisë për biznese të ndryshme që nga viti 2021. Ka udhëhequr projekte për digjitalizimin e proceseve të biznesit dhe ka marrë pjesë në zhvillimin e strategjive të sigurisë së informacionit (2018-2021).",
    education:
      'Master në Sistemet e Informacionit Menaxherial, Universiteti i Kopenhagës, Danimarkë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Danisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive të fundit në fushën e IT-së, duke përfshirë cloud computing, bazat e të dhënave dhe sigurinë kibernetike.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në komunikimin me klientët për të kuptuar nevojat e tyre specifike, dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në analizën dhe përmirësimin e proceseve të biznesit përmes teknologjisë, zbatimin e zgjidhjeve të sigurisë së informacionit, dhe në menaxhimin e ndryshimeve teknologjike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e reja në fushën e teknologjisë së informacionit, pjesëmarrja në konferenca dhe seminare të IT-së, dhe hobi në programimin dhe zhvillimin e aplikacioneve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist i Sistemeve në 'Qendra e Inovacionit Teknologjik', duke ofruar këshilla strategjike për përdorimin efektiv të teknologjisë në organizata që nga viti 2022. Ka ndihmuar në identifikimin e mundësive për përmirësimin e efikasitetit operacional dhe ka kryer analiza të thella të nevojave teknologjike (2019-2022).",
    education:
      'Master në Teknologjinë e Informacionit dhe Komunikimit, Universiteti i Teknologjisë së Vjenës, Austri.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri të avancuara në analizën e sistemeve dhe të dhënave, si dhe në përdorimin e mjeteve për menaxhimin e projekteve teknologjike.',
    soft_skills:
      'Lidership në koordinimin e ekipit teknik, aftësi të forta analitike dhe në zgjidhjen e sfidave teknologjike, dhe shkathtësi në komunikimin dhe prezantimin e zgjidhjeve.',
    technical_skills:
      'Specializim në zhvillimin dhe integrimin e sistemeve të informacionit, njohuri të thella në infrastrukturën e IT-së dhe sigurinë kibernetike, dhe në implementimin e teknologjive emergjente.',
    hobbies:
      'Pasioni për inovacionin dhe zhvillimin teknologjik, angazhimi në projekte të teknologjisë së hapur dhe hobi në kërkimin dhe eksplorimin e tendencave të reja në IT.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Informatikan në 'Qendra e Teknologjisë dhe Inovacionit', duke punuar në zhvillimin e softuerit dhe sistemeve të informacionit për sektorë të ndryshëm industrial që nga viti 2021. Ka udhëhequr ekipet e zhvillimit në projekte të mëdha dhe ka kontribuar në hulumtime për teknologjitë emergjente (2018-2021).",
    education:
      'Master në Shkencat Kompjuterike, Universiteti Teknik i Mynihut, Gjermani.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në programimin në gjuhë të ndryshme programimi, përfshirë Java, Python dhe C++, dhe në përdorimin e teknologjive të bazave të të dhënave.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në punën në ekip dhe në zgjidhjen e problemeve komplekse teknologjike.',
    technical_skills:
      'Ekspertizë në zhvillimin e softuerit, analizën e sistemeve dhe në arkitekturën e softuerit, si dhe njohuri të thella në inteligjencën artificiale dhe të dhënat e mëdha.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e teknologjisë së informacionit, pjesëmarrja në hackathons dhe konkurse programimi, dhe hobi në ndërtimin e projekteve personale të kodimit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Analist Sistemesh në 'Kompania e Sigurisë së Informacionit', duke ofruar zgjidhje për sigurinë kibernetike dhe mbrojtjen e të dhënave për organizata që nga viti 2022. Ka përmirësuar protokollet e sigurisë dhe ka ndihmuar në zbatimin e masave të avancuara të mbrojtjes kibernetike (2019-2022).",
    education:
      'Master në Sigurinë e Informacionit, Universiteti i Kopenhagës, Danimarkë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Danisht',
    digital_skills:
      'Njohuri të avancuara në teknikat e sigurisë kibernetike, përfshirë kriptografinë, analizën e malware-it dhe në menaxhimin e rrezikut të sigurisë së informacionit.',
    soft_skills:
      'Lidership në drejtimin e analizave të sigurisë, aftësi të forta në komunikimin e rrezikut dhe masave të mbrojtjes me palët e interesuara, dhe shkathtësi në edukimin e stafit për praktikat e sigurisë.',
    technical_skills:
      'Specializim në vlerësimin e sistemeve dhe rrjetave për dobësi, zhvillimin e politikave të sigurisë dhe në implementimin e zgjidhjeve të sigurisë kibernetike.',
    hobbies:
      'Pasioni për hulumtimin në fushën e sigurisë së informacionit, angazhimi në projekte kërkimore që adresojnë sfidat e sigurisë kibernetike, dhe hobi në programimin dhe zhvillimin e veglave të sigurisë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Metalurg në 'Kompania e Përpunimit të Metaleve', duke punuar në zhvillimin dhe optimizimin e proceseve të përpunimit të metaleve që nga viti 2021. Ka udhëhequr hulumtime për përmirësimin e cilësisë së materialeve metalike dhe ka implementuar teknologji të reja në linjat e prodhimit (2018-2021).",
    education:
      'Master në Inxhinieri Metalurgjike, Universiteti Politeknik i Milanos, Itali.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për modelimin dhe simulimin e proceseve metalurgjike, si dhe në analizën e të dhënave të prodhimit.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në komunikimin me ekipet e inxhinierisë dhe në zgjidhjen e sfidave teknike.',
    technical_skills:
      'Ekspertizë në teknologjitë e përpunimit të metaleve, analizën e materialeve dhe në zbatimin e standardeve të cilësisë për produkte metalike.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e reja në fushën e metalurgjisë, pjesëmarrja në konferenca dhe seminare për inxhinieri dhe teknologji të materialeve, dhe hobi në ndërtimin e projekteve personale të bazuar në metale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Teknik në 'Qendra e Inovacionit për Materiale Metalike', duke ofruar zgjidhje për sfidat e industrisë metalurgjike dhe duke punuar në zhvillimin e aleacioneve të reja që nga viti 2022. Ka kryer studime të thella mbi përdorimin e metaleve në aplikacione të ndryshme industriale dhe ka kontribuar në projekte inovative për përmirësimin e performancës së materialeve (2019-2022).",
    education:
      'Master në Shkencat e Materialeve me specializim në Metalurgji, Universiteti i Këmbricës, Mbretëria e Bashkuar.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e teknikave analitike dhe instrumenteve për karakterizimin e materialeve metalike, si dhe në menaxhimin e projekteve të kërkimit.',
    soft_skills:
      'Lidership në drejtimin e hulumtimeve dhe zhvillimit, aftësi të forta analitike dhe në prezantimin e rezultateve të kërkimit, dhe shkathtësi në bashkëpunimin ndërdisciplinor.',
    technical_skills:
      'Specializim në përpunimin dhe analizën e metaleve, zhvillimin e aleacioneve të reja dhe në aplikimin e inovacioneve për përmirësimin e materialeve metalike.',
    hobbies:
      'Pasioni për hulumtimin në fushën e metalurgjisë dhe shkencave të materialeve, angazhimi në projekte që synojnë të zgjidhin sfidat mjedisore dhe industriale, dhe hobi në eksplorimin e teknologjive të reja të përpunimit të metaleve.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Mësues Ekonomist Biznesi në 'Shkolla e Mesme e Biznesit', duke dhënë mësim në lëndët e ekonomisë dhe menaxhimit të biznesit që nga viti 2021. Ka zhvilluar materiale mësimore që përfshijnë studime rasti aktuale të biznesit dhe ka udhëhequr projekte studentore për të aplikuar teoritë në praktikë (2018-2021).",
    education:
      'Master në Ekonomi dhe Menaxhim Biznesi, Universiteti i Berlinit, Gjermani.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'I aftë në përdorimin e platformave edukative online dhe softuerëve për menaxhimin e klasës dhe vlerësimin e studentëve.',
    soft_skills:
      'Aftësi të shkëlqyera në mësimdhënie, në komunikimin efektiv me studentët dhe në motivimin e tyre për të arritur suksesin akademik dhe profesional.',
    technical_skills:
      'Ekspertizë në teoritë e ekonomisë dhe menaxhimit të biznesit, njohuri të thella në analizën financiare dhe në planifikimin strategjik të biznesit.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e ekonomisë dhe biznesit, pjesëmarrja në konferenca dhe seminare për edukimin në menaxhimin e biznesit, dhe hobi në konsulencën për nisjen e bizneseve të reja.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Akademik për Ekonomi Biznesi në 'Qendra e Burimeve për Arsimin e Lartë', duke ofruar mentorim dhe këshillim për studentët në fushën e ekonomisë dhe strategjisë së biznesit që nga viti 2022. Ka organizuar workshope dhe sesione trajnimi për të ndërtuar aftësitë e studentëve në analizën e tregut dhe planifikimin e biznesit (2019-2022).",
    education:
      'Master në Strategji dhe Inovacion Biznesi, Universiteti i Amsterdamit, Holandë.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Holandisht',
    digital_skills:
      'Njohuri të avancuara në përdorimin e mjeteve analitike të biznesit dhe në softuerët për analizën e të dhënave.',
    soft_skills:
      'Lidership në zhvillimin e aftësive të studentëve, aftësi të shkëlqyera në ndërtimin e marrëdhënieve mentor-student dhe në organizimin e aktiviteteve edukative.',
    technical_skills:
      'Specializim në strategjitë e biznesit dhe inovacionin, njohuri të thella në ekonominë e tregut dhe në menaxhimin e ndërmarrjeve të vogla dhe të mesme.',
    hobbies:
      'Pasioni për edukimin në fushën e biznesit, angazhimi në projekte që promovojnë ndërmarrësinë dhe inovacionin, dhe hobi në zhvillimin e planeve të biznesit për startup-e.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist Reklame në 'Agjencia Kreative e Marketingut', duke punuar në krijimin dhe zbatimin e fushatave reklamuese për një gamë të gjerë klientësh që nga viti 2021. Ka menaxhuar projekte të reklamave digjitale dhe të shtypura, duke përfshirë analizën e tregut dhe matjen e efektivitetit të fushatave (2018-2021).",
    education: 'Bachelor në Marketing dhe Komunikim, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e platformave të reklamimit digjital si Google Ads dhe social media, si dhe në analizën e të dhënave të reklamave.',
    soft_skills:
      'Aftësi të shkëlqyera në krijimtari dhe konceptualizim, në punën në ekip dhe në komunikimin me klientët për të kuptuar nevojat e tyre.',
    technical_skills:
      'Ekspertizë në strategjitë e reklamimit, zhvillimin e përmbajtjes kreative dhe në optimizimin e buxhetit të reklamave.',
    hobbies:
      'Interesi për të ndjekur trendet e fundit në marketing dhe reklamim, pjesëmarrja në seminare dhe workshope për marketingun digjital, dhe hobi në fotografim dhe dizajn grafik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent i Strategjisë Reklamuese në 'Firma e Këshillimit në Marketing', duke ofruar zgjidhje strategjike për optimizimin e fushatave reklamuese dhe rritjen e ndikimit në treg që nga viti 2022. Ka bashkëpunuar me marka për të identifikuar audiencat kyçe dhe ka zhvilluar mesazhe të personalizuara reklamuese (2019-2022).",
    education:
      'Bachelor në Menaxhimin e Biznesit, Fokus në Marketing, Universiteti i Shkodrës.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri të avancuara në marketingun digjital, përfshirë SEO, email marketing dhe marketingun në rrjete sociale.',
    soft_skills:
      'Lidership në menaxhimin e projekteve reklamuese, aftësi të shkëlqyera në analizën e tregut dhe në ndërtimin e marrëdhënieve me klientët.',
    technical_skills:
      'Specializim në identifikimin e trendeve të tregut dhe në aplikimin e teknikave të avancuara të segmentimit dhe targetimit të audiencës.',
    hobbies:
      'Pasioni për hulumtimin në fushën e sjelljes së konsumatorit, angazhimi në projekte që synojnë të rrisin ndërgjegjësimin e markës, dhe hobi në leximin e literaturës mbi marketingun inovativ.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Ekonomist në Departamentin e Financave dhe Bankave në 'Banka Qendrore e Shqipërisë', duke analizuar politikat monetare dhe financiare që nga viti 2021. Ka kontribuar në hartimin e raporteve ekonomike dhe ka bashkëpunuar me institucione financiare ndërkombëtare për të përmirësuar stabilitetin financiar (2018-2021).",
    education:
      'Bachelor në Ekonomi, specializim në Financa dhe Banka, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për analizën financiare dhe statistikore, si dhe në menaxhimin e bazave të të dhënave ekonomike.',
    soft_skills:
      'Aftësi të shkëlqyera analitike dhe në komunikimin e gjetjeve të hulumtimit, si dhe në punën në ekip dhe në ndërtimin e marrëdhënieve profesionale.',
    technical_skills:
      'Ekspertizë në analizën e tregjeve financiare, politikave monetare dhe në menaxhimin e rrezikut financiar.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në ekonomi dhe financë, pjesëmarrja në konferenca për ekonomi dhe financë, dhe hobi në analizën e investimeve dhe tregjeve financiare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent Financiar në 'Firma e Këshillimit për Investime', duke ofruar strategji investimi për klientët individualë dhe korporatat që nga viti 2022. Ka udhëhequr analizën e portofolit dhe ka rekomanduar zgjidhje për diversifikimin e investimeve dhe menaxhimin e rrezikut (2019-2022).",
    education:
      'Bachelor në Shkencat Ekonomike, specializim në Financa Korporative, Universiteti i Durrësit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri të avancuara në softuerët e analizës së investimeve dhe në përdorimin e platformave të tregtimit financiar.',
    soft_skills:
      'Lidership në zhvillimin e strategjive financiare, aftësi të shkëlqyera në negociatat me klientët dhe në menaxhimin e ekipit të analistëve.',
    technical_skills:
      'Specializim në analizën financiare, strategjitë e investimeve dhe në parashikimin e tendencave të tregut financiar.',
    hobbies:
      'Pasioni për të mësuar rreth inovacioneve në fushën e financave, angazhimi në projekte që promovojnë edukimin financiar, dhe hobi në ndjekjen e lajmeve dhe analizave të tregjeve globale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Oficer Kredie në 'Banka Kombëtare e Kredive', duke menaxhuar aplikacionet për kredi dhe duke ofruar këshillim financiar për klientët që nga viti 2021. Ka përmirësuar proceset e vlerësimit të kredisë dhe ka ndihmuar në zhvillimin e produkteve të reja financiare (2018-2021).",
    education: 'Bachelor në Menaxhimin Financiar, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e sistemeve të menaxhimit të kredive dhe në analizën financiare përmes softuerëve të specializuar.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me klientët, në vlerësimin e aplikacioneve për kredi dhe në menaxhimin e marrëdhënieve me klientët.',
    technical_skills:
      'Ekspertizë në analizën e riskut të kredisë, në parashikimin e aftësisë së kthimit të kredisë nga klientët dhe në përcaktimin e kushteve të kredisë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në sektorin financiar, pjesëmarrja në trajnime dhe seminare për menaxhimin e kredive, dhe hobi në analizën e tregjeve financiare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Kredive në 'Shërbimi Financiar për Zhvillim', duke ofruar zgjidhje financiare për bizneset e vogla dhe të mesme që nga viti 2022. Ka udhëhequr iniciativa për të përmirësuar qasjen në financim për ndërmarrjet dhe ka kontribuar në hartimin e politikave të kreditimit (2019-2022).",
    education:
      'Bachelor në Ekonomi, specializim në Financa, Universiteti i Shkodrës.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri të avancuara në sistemet e informacionit për menaxhimin e kredive dhe në analizën e të dhënave financiare.',
    soft_skills:
      'Lidership në menaxhimin e projekteve të financimit, aftësi të shkëlqyera në ndërtimin e marrëdhënieve me klientët dhe në negociatat financiare.',
    technical_skills:
      'Specializim në vlerësimin financiar të projekteve biznesore, njohuri në legjislacionin për kreditimin dhe në teknikat e menaxhimit të rrezikut të kredisë.',
    hobbies:
      'Pasioni për të ndihmuar ndërmarrjet për të qenë më të qëndrueshme financiarisht, angazhimi në projekte që promovojnë aksesin në kredi, dhe hobi në studimin e modelet të ndryshme të biznesit.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent Dentist në 'Klinika Dentare Prestigjioze', duke ndihmuar dentistët në trajtime dentare dhe duke ofruar kujdes të lartë për pacientët që nga viti 2021. Ka përmirësuar procedurat e sterilizimit dhe ka menaxhuar regjistrimin e pacientëve dhe orarin e takimeve (2018-2021).",
    education:
      'Bachelor në Shkencat e Shëndetit, specializim në Asistencë Dentare, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve për menaxhimin e klinikës dentare dhe në dokumentimin elektronik të kartelave të pacientëve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me pacientët, në organizimin dhe menaxhimin e ambientit të punës dhe në ndihmën e ekipit dentar gjatë trajtimeve.',
    technical_skills:
      'Ekspertizë në procedurat e asistencës dentare, përfshirë sterilizimin, përgatitjen e materialeve dentare dhe asistimin në procedurat kirurgjikale dentare.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë dentare, pjesëmarrja në seminare dhe trajnime për asistentët dentarë, dhe hobi në kujdesin dhe higjienën dentare.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistent i Lartë Dentar në 'Qendra e Shëndetit Dentar', duke ofruar suport të avancuar për ekipin dentar në trajtimet komplekse dhe në menaxhimin e laboratorit dentar që nga viti 2022. Ka kontribuar në trajnimin e asistentëve të rinj dhe ka zhvilluar metoda të reja të organizimit të punës në klinikë (2019-2022).",
    education: 'Bachelor në Asistencë Dentare, Universiteti i Shkodrës.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri të avancuara në teknologjinë e informacionit dentar dhe në përdorimin e sistemeve të menaxhimit të imazheve dentare.',
    soft_skills:
      'Lidership në koordinimin e aktiviteteve të klinikës, aftësi të forta organizative dhe në komunikimin efektiv me ekipin dhe pacientët.',
    technical_skills:
      'Specializim në teknikat e avancuara të asistencës dentare, njohuri në menaxhimin e laboratorit dentar dhe në aplikimin e procedurave të sigurisë dhe higjienës.',
    hobbies:
      'Pasioni për edukimin dhe ngritjen e standardeve në fushën e asistencës dentare, angazhimi në organizatat profesionale për asistentët dentarë, dhe hobi në kërkimin shkencor dentar.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Edukatore në Kopshtin 'Ylli i Mëngjesit', duke punuar me fëmijë të moshës parashkollore që nga viti 2021. Ka zhvilluar programe edukative që stimulojnë zhvillimin intelektual, emocional dhe social të fëmijëve dhe ka organizuar aktivitete kreative dhe edukative (2018-2021).",
    education: 'Bachelor në Edukimin Parashkollor, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e teknologjive edukative për të mbështetur mësimdhënien interaktive dhe në dokumentimin elektronik të përparimit të fëmijëve.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me fëmijët dhe prindërit, në organizimin e aktiviteteve edukative dhe në menaxhimin e klasës.',
    technical_skills:
      'Ekspertizë në zhvillimin e programeve edukative për fëmijët e moshës parashkollore, njohuri në psikologjinë e zhvillimit të fëmijës dhe në teknikat e mësimdhënies së hershme.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e edukimit parashkollor, pjesëmarrja në seminare dhe trajnime për edukatorët, dhe hobi në artet vizuale dhe muzikë për fëmijë.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Asistente Edukimi në Kopshtin 'Dielli i Pasdites', duke ndihmuar në përgatitjen dhe zbatimin e planeve mësimore dhe duke u angazhuar në kujdesin dhe mbështetjen e fëmijëve që nga viti 2022. Ka punuar në projekte për të përmirësuar ambientin mësimor dhe ka ndihmuar në organizimin e ngjarjeve të ndryshme për fëmijë (2019-2022).",
    education:
      'Bachelor në Shkencat e Edukimit, specializim në Edukimin e Hershëm, Universiteti i Durrësit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri në përdorimin e mjeteve dhe aplikacioneve edukative për të krijuar një mjedis mësimor interaktiv dhe angazhues.',
    soft_skills:
      'Lidership në menaxhimin e aktiviteteve dhe projekteve edukative, aftësi të shkëlqyera në ndërtimin e marrëdhënieve me fëmijët dhe në përshtatjen e metoda të mësimdhënies sipas nevojave të tyre.',
    technical_skills:
      'Specializim në metodologjitë e edukimit të hershëm, njohuri në përgatitjen e materialeve dhe aktiviteteve mësimore që nxisin zhvillimin gjithëpërfshirës të fëmijëve.',
    hobbies:
      'Pasioni për të ndihmuar në zhvillimin e aftësive të fëmijëve përmes lojës dhe eksplorimit, angazhimi në inovacionet edukative, dhe hobi në organizimin e aktiviteteve kulturore dhe edukative për komunitetin.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Teknik Inxhinieri Mekanike për Sistemet e Ajrit të Kondicionuar në 'Kompania e Sistemeve Klimatike', duke punuar në instalimin, mirëmbajtjen dhe riparimin e sistemeve të ajrit të kondicionuar në ambiente rezidenciale dhe komerciale që nga viti 2021. Ka kontribuar në projektimin e zgjidhjeve efikase të energjisë dhe ka marrë pjesë në trajnime për teknologjitë e reja të ftohjes (2018-2021).",
    education:
      'Bachelor në Inxhinieri Mekanike, specializim në Sistemet e Ftohjes dhe Klimatizimit, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit si AutoCAD dhe në sistemet e menaxhimit të ndërtesave për kontrollin e klimës.',
    soft_skills:
      'Aftësi të shkëlqyera në zgjidhjen e problemeve, në komunikimin me klientët për të kuptuar nevojat e tyre dhe në punën në ekip.',
    technical_skills:
      'Ekspertizë në sistemet e ajrit të kondicionuar, njohuri në standarde të efikasitetit të energjisë dhe në teknikat e montimit dhe mirëmbajtjes.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në teknologjinë e klimatizimit, pjesëmarrja në seminare për inxhinieri mekanike, dhe hobi në ndërtimin e modeleve të vogla mekanike dhe eksperimentimin me sisteme të ndryshme të ftohjes.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Sistemeve të Ajrit të Kondicionuar në 'Shërbimi Teknik i Klimatizimit', duke ofruar konsulencë teknike dhe zgjidhje për optimizimin e performancës së sistemeve të ftohjes dhe ngrohjes që nga viti 2022. Ka udhëhequr projekte për përmirësimin e cilësisë së ajrit në ambiente të mbyllura dhe ka implementuar inovacione në fushën e efikasitetit të energjisë (2019-2022).",
    education:
      'Bachelor në Inxhinieri Mekanike, specializim në Automatizimin e Sistemeve të Klimatizimit, Universiteti i Durrësit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri të avancuara në analizën dhe modelimin e sistemeve të ajrit të kondicionuar përmes softuerëve specifikë dhe në programimin e kontrollorëve të klimës.',
    soft_skills:
      'Lidership në menaxhimin e projekteve, aftësi të shkëlqyera në ndërtimin e marrëdhënieve me klientët dhe në prezantimin e zgjidhjeve teknike.',
    technical_skills:
      'Specializim në optimizimin e sistemeve të ajrit të kondicionuar, njohuri në rregulloret mjedisore dhe në zbatimin e masave për përmirësimin e efikasitetit të energjisë.',
    hobbies:
      'Pasioni për inovacionet në fushën e inxhinierisë së sistemeve të ajrit të kondicionuar, angazhimi në hulumtime për zgjidhje të qëndrueshme mjedisore, dhe hobi në projektimin dhe prototipimin e sistemeve të reja të ftohjes.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Inxhinier Zbatimi në Ndërtim në 'Kompania Ndërtimore e Avancuar', duke koordinuar dhe mbikëqyrur projekte të ndërtimit që nga viti 2021. Ka menaxhuar me sukses zbatimin e planeve të ndërtimit, duke siguruar që të gjitha specifikacionet teknike dhe standardet e sigurisë të respektohen (2018-2021).",
    education:
      'Bachelor në Inxhinieri Ndërtimi, Universiteti Politeknik i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e softuerëve të projektimit dhe menaxhimit të ndërtimit si AutoCAD dhe Microsoft Project.',
    soft_skills:
      'Aftësi të shkëlqyera në menaxhimin e projekteve, në komunikimin efektiv me ekipet e ndërtimit dhe në zgjidhjen e sfidave në vendin e ndërtimit.',
    technical_skills:
      'Ekspertizë në leximin dhe zbatimin e planeve teknike, njohuri në materiale të ndërtimit dhe metoda të ndërtimit, dhe në zbatimin e rregullores së ndërtimit dhe sigurisë në punë.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në inxhinieri ndërtimi, pjesëmarrja në seminare dhe konferenca të ndërtimit, dhe hobi në modelimin 3D dhe vizualizimin arkitektonik.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Zbatimit të Projekteve Ndërtimore në 'Instituti i Studimeve për Ndërtim', duke ofruar ekspertizë teknike për projekte të ndërtimit dhe rinovimit që nga viti 2022. Ka përmirësuar proceset e vlerësimit të projekteve dhe ka ndihmuar në aplikimin e inovacioneve të qëndrueshme në ndërtim (2019-2022).",
    education:
      'Bachelor në Inxhinieri Civile, specializim në Menaxhimin e Projekteve Ndërtimore, Universiteti i Durrësit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Gjermanisht',
    digital_skills:
      'Njohuri të avancuara në softuerët e analizës së strukturave dhe në teknologjitë e informacionit për ndërtim.',
    soft_skills:
      'Lidership në menaxhimin e ekipit të projekteve, aftësi të forta organizative dhe në komunikimin dhe negociatat me palët e interesuara.',
    technical_skills:
      'Specializim në menaxhimin e zbatimit të projekteve të ndërtimit, njohuri të thella në standarde të qëndrueshmërisë dhe efikasitetit të energjisë në ndërtim.',
    hobbies:
      'Pasioni për inovacionet në fushën e ndërtimit dhe qëndrueshmërisë, angazhimi në projekte kërkimore për teknologjitë e reja të ndërtimit, dhe hobi në zhvillimin e planeve ndërtimore dhe arkitektonike.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Konsulent për Shitje në 'Agjencia e Marketingut dhe Shitjeve', duke ofruar strategji dhe zgjidhje për rritjen e shitjeve për biznese të ndryshme që nga viti 2021. Ka analizuar tregjet dhe nevojat e klientëve për të krijuar fushata të personalizuara të shitjeve dhe ka marrë pjesë në trajnime të vazhdueshme për të mbajtur njohuritë e tij të azhurnuara (2018-2021).",
    education:
      'Bachelor në Marketing dhe Menaxhim Shitjesh, Universiteti i Tiranës.',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills:
      'I aftë në përdorimin e platformave digjitale të shitjeve dhe marketingut, si dhe në analizën e të dhënave të shitjeve për të parashikuar trendet.',
    soft_skills:
      'Aftësi të shkëlqyera në komunikimin me klientët, në ndërtimin e strategjive të shitjeve dhe në menaxhimin e marrëdhënieve me klientët.',
    technical_skills:
      'Ekspertizë në teknikat e shitjes, njohuri në psikologjinë e konsumatorit dhe në planifikimin dhe zbatimin e fushatave të marketingut.',
    hobbies:
      'Interesi për të ndjekur zhvillimet e fundit në fushën e marketingut dhe shitjeve, pjesëmarrja në seminare dhe konferenca për shitje, dhe hobi në leximin e literaturës mbi teknikat e reja të shitjes.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience:
      "Specialist i Shitjeve në 'Kompania e Teknologjisë së Informacionit', duke punuar për të zgjeruar portofolin e klientëve dhe për të rritur shitjet e produkteve teknologjike që nga viti 2022. Ka përmirësuar proceset e shitjeve dhe ka implementuar sisteme të reja për menaxhimin e marrëdhënieve me klientët (2019-2022).",
    education:
      'Bachelor në Menaxhimin e Biznesit me fokus në Shitje, Universiteti i Durrësit.',
    native_language: 'Shqip',
    other_language: 'Anglisht, Italian',
    digital_skills:
      'Njohuri të avancuara në CRM dhe platforma të tjera të menaxhimit të marrëdhënieve me klientët, si dhe në përdorimin e mjeteve digjitale për analizën e performancës së shitjeve.',
    soft_skills:
      'Lidership në drejtimin e ekipit të shitjeve, aftësi të shkëlqyera në negociata dhe në zhvillimin e marrëdhënieve afatgjata me klientët.',
    technical_skills:
      'Specializim në shitjen e produkteve teknologjike, njohuri në trendet e tregut të IT-së dhe në teknikat e marketingut digjital.',
    hobbies:
      'Pasioni për teknologjinë dhe inovacionin, angazhimi në mësimin e vazhdueshëm për zhvillimet në fushën e IT dhe shitjeve, dhe hobi në ndërtimin e rrjeteve profesionale.',
    extra_information: '',
    certification: '',
    volunteering: '',
    publications: '',
  },
  {
    experience: 'random_value_0_0',
    education: 'random_value_0_1',
    native_language: 'random_value_0_2',
    other_language: 'random_value_0_3',
    digital_skills: 'random_value_0_4',
    soft_skills: 'random_value_0_5',
    technical_skills: 'random_value_0_6',
    hobbies: 'random_value_0_7',
    extra_information: 'random_value_0_8',
    certification: 'random_value_0_9',
    volunteering: 'random_value_0_10',
    publications: 'random_value_0_11',
  },
  {
    experience: 'random_value_1_0',
    education: 'random_value_1_1',
    native_language: 'random_value_1_2',
    other_language: 'random_value_1_3',
    digital_skills: 'random_value_1_4',
    soft_skills: 'random_value_1_5',
    technical_skills: 'random_value_1_6',
    hobbies: 'random_value_1_7',
    extra_information: 'random_value_1_8',
    certification: 'random_value_1_9',
    volunteering: 'random_value_1_10',
    publications: 'random_value_1_11',
  },
  {
    experience: 'World at water bar less remember bag.',
    education: 'Direction various section score.',
    native_language: 'Xhosa',
    other_language: 'Kuanyama',
    digital_skills: 'Cup quickly news wrong sometimes.',
    soft_skills: 'Statement game true president.',
    technical_skills: 'Similar mouth station authority paper bed.',
    hobbies: 'Reflect general personal lawyer story or.',
    extra_information: 'Anything increase election what service not who.',
    certification: 'Himself amount stop rather many simply.',
    volunteering: 'Join risk station ball.',
    publications: 'Away while dark speech name recently cause read.',
  },
  {
    experience: 'Society lay indeed over minute management decade.',
    education: 'Own image take any.',
    native_language: 'Assamese',
    other_language: 'Basque',
    digital_skills: 'Collection force technology will goal theory mission.',
    soft_skills: 'Land allow hour cell six.',
    technical_skills: 'Image parent activity such.',
    hobbies: 'Last growth break source often strategy.',
    extra_information: 'In site agency president month gun.',
    certification: 'Family stop modern Mrs city.',
    volunteering: 'Particular dog operation establish in.',
    publications: 'Rule yet resource through myself realize weight.',
  },
  {
    experience: 'Along sort base interest.',
    education: 'Clear consumer doctor.',
    native_language: 'Malayalam',
    other_language: 'Kanuri',
    digital_skills: 'Travel go interesting door none pull meet.',
    soft_skills: 'Before than tough worker act condition.',
    technical_skills: 'Serve fill grow financial.',
    hobbies: 'Resource party finish music dinner behavior water.',
    extra_information: 'Their or organization.',
    certification: 'True some now.',
    volunteering: 'Both ago although stuff inside every others realize.',
    publications: 'Republican market specific group radio despite much.',
  },
  {
    experience: 'College Mr north near.',
    education: 'Clearly sell physical effort.',
    native_language: 'Interlingua',
    other_language: 'French',
    digital_skills: 'Work medical vote arm nice thought.',
    soft_skills: 'Kind man social drop maintain century blue.',
    technical_skills: 'Effort respond standard very.',
    hobbies: 'New leave event yes.',
    extra_information: 'North nation to everything direction discussion us.',
    certification: 'Try likely indeed research.',
    volunteering: 'Stop kid same.',
    publications: 'General pressure hour program increase bar.',
  },
  {
    experience: 'Përvojë pune në fushën teknologjike',
    education: 'Edukim në Universitetin e Tiranës',
    native_language: 'Shqip',
    other_language: 'Anglisht',
    digital_skills: 'Aftësi digjitale në përdorimin e software',
    soft_skills: 'Komunikim efektiv dhe punë në grup',
    technical_skills: 'Zhvillim softueri dhe analizë të dhënash',
    hobbies: 'Leximi, udhëtimi, dhe sporti',
    extra_information: 'Interes në vullnetarizëm dhe zhvillim personal',
    certification: 'Certifikim në menaxhimin e projekteve',
    volunteering: 'Vullnetar në organizata joqeveritare',
    publications: 'Publikime në fushën e teknologjisë së informacionit',
  },
  {
    experience: 'Punë si inxhinier software',
    education: 'Diplomë në Inxhinieri Kompjuterike',
    native_language: 'Shqip',
    other_language: 'Gjermanisht',
    digital_skills: 'Përpunim i avancuar i të dhënave',
    soft_skills: 'Lidhje shkëlqyese ndërmjet njerëzish',
    technical_skills: 'Ekspert në gjuhë programimi',
    hobbies: 'Fotografi, kamping, dhe gatim',
    extra_information: 'Anëtar i klubit të robotikës',
    certification: 'Certifikata në siguri kibernetike',
    volunteering: 'Ndihmë në ndërtimin e faqeve web për OJQ-të',
    publications: 'Artikuj në revista shkencore',
  },
  {
    experience: 'Eksperiencë e pasur në menaxhimin e projekteve',
    education: 'Studime të larta në fakultetin e ekonomisë',
    native_language: 'Shqip',
    other_language: 'Italisht',
    digital_skills: 'Njohuri të mira në përdorimin e paketave office',
    soft_skills: 'Aftësi të shkëlqyera komunikimi dhe organizative',
    technical_skills: 'Zotërim i programimit në Java dhe Python',
    hobbies: 'Pasioni për leximin dhe shkrimin',
    extra_information: 'Interes në zhvillimin e teknologjive të reja',
    certification: 'Certifikata profesionale në menaxhimin e rrjeteve',
    volunteering: 'Angazhim vullnetar në organizata mjedisore',
    publications: 'Publikuar disa artikuj në fushën e IT',
  },
  {
    experience: 'Punë si analist të dhënash për 5 vjet',
    education: 'Diplomë në inxhinieri kompjuterike',
    native_language: 'Shqip',
    other_language: 'Spanjisht',
    digital_skills: 'Përdorues i avancuar i bazave të të dhënave',
    soft_skills: 'Lider i fortë me aftësi në zgjidhjen e konflikteve',
    technical_skills: 'Ekspertizë në sigurinë kibernetike',
    hobbies: 'Hobi në fotografimin dhe udhëtimet',
    extra_information: 'Pjesëmarrës aktiv në konferenca teknologjike',
    certification: 'Certifikim në analizën e të dhënave me Python',
    volunteering: 'Kontribut në projekte sociale dhe edukative',
    publications:
      'Autor i disa studimeve në fushën e inteligjencës artificiale',
  },
  {
    experience: 'Dielli lëshon dritë të mrekullueshme në mëngjes.',
    education: 'Miza fluturon rreth dritares në kërkim të daljes.',
    native_language: 'Pema në oborr është mbushur me fruta.',
    other_language: 'Kafshët në kopshtin zoologjik janë shumë aktive sot.',
    digital_skills: 'Libri i ri që lexova ishte mbresëlënës.',
    soft_skills: 'Qielli i natës është i mbushur me yje.',
    technical_skills: 'Deti ka një ngjyrë të kalter të thellë në perëndim.',
    hobbies: 'Filmi i fundit që pashë ishte shumë emocionues.',
    extra_information: 'Ushqimi në restorantin e ri ishte i shijshëm.',
    certification: 'Orët e mëngjesit janë ideale për vrapim.',
    volunteering: 'Bimët në shtëpi kanë nevojë për ujë të mjaftueshëm.',
    publications: 'Vera sjell ngjyra dhe aromë në qytet.',
  },
  {
    experience: 'Rrugët e qytetit janë të qetë në mbrëmje.',
    education: 'Koha kalon shpejt kur je me miqtë.',
    native_language: 'Festa në fshat zgjati deri në agim.',
    other_language: 'Gjethet bien nga pemët në vjeshtë.',
    digital_skills: 'Kënga e re është bërë shumë popullore.',
    soft_skills: 'Mali është mbuluar me borë gjatë dimrit.',
    technical_skills: 'Çajrat bimorë janë të mirë për shëndetin.',
    hobbies: 'Pikturat në galeri ishin të jashtëzakonshme.',
    extra_information: 'Viti i ri solli ndryshime të mëdha.',
    certification: 'Lulet e pranverës janë ngjyrë dhe jetë.',
    volunteering: 'Tregimet popullore janë thesar i kulturës.',
    publications: 'Shiu i pasdites freskon ajrin e qytetit.',
  },
  {
    experience: 'Asgjë nuk është më e bukur se sa një mbrëmje në plazh.',
    education: 'Në çdo fund të tunelit ka dritë.',
    native_language: 'Librat janë dritaret e botës.',
    other_language: 'Një filxhan kafe në mëngjes ndez ditën.',
    digital_skills: 'Gjethet e vjeshtës krijojnë një mozaik ngjyrash.',
    soft_skills: 'Qetësia e natës është paçka për mendjen.',
    technical_skills: 'Muzika është ushqim për shpirtin.',
    hobbies: 'Udhëtimet janë libri që nuk mbaron kurrë.',
    extra_information: 'Dëbora e parë e dimrit është magjike.',
    certification: 'Gatimi në shtëpi sjell njerëzit më afër.',
    volunteering: 'Arti i rrugës reflekton shpirtin e qytetit.',
    publications: 'Yjet janë udhërrëfyesit e natës.',
  },
  {
    experience: 'Eklipsi hënor sjell mrekulli në qiell.',
    education: 'Një buzëqeshje është gjuha universale e mirësisë.',
    native_language: 'Vallëzimi nën shi është çlirim.',
    other_language: 'Piktura flasin më shumë se fjalët.',
    digital_skills: 'Një tufë me lule ndryshon gjithçka.',
    soft_skills: 'Çdo mëngjes është një fillim i ri.',
    technical_skills: 'Zogjtë e mëngjesit këndojnë këngët më të ëmbla.',
    hobbies: 'Fotografia kap momentet që zemra dëshiron të mbajë.',
    extra_information: 'Stuhitë sjellin rinovimin.',
    certification: 'Të bësh joga në natyrë është si të rikthehesh në shtëpi.',
    volunteering: 'Një letër e shkruar me dorë ka fuqinë të ndryshojë ditën.',
    publications: 'Fëmijët e vegjël kanë mësime të mëdha për të dhënë.',
  },
  {
    experience: 'Koha kalon si era kur je në det.',
    education: 'Qiejt e kaltër flasin historinë e ditës.',
    native_language: 'Muzika popullore mbart jetën e qytetit.',
    other_language: 'Kafja mëngjesit është thirrja për zgjim.',
    digital_skills: 'Rrugët e qytetit janë dëshmitarë të historisë.',
    soft_skills: 'Gjurmët në rërë tregojnë udhëtime të panumërta.',
    technical_skills: 'Ndërtimi i kështjellave rërë është art.',
    hobbies: 'Vëzhgimi i yjeve është udhëtim në univers.',
    extra_information: 'Librat janë pasuritë që nuk harxhohen kurrë.',
    certification: 'Gatimi është magji që bashkon njerëzit.',
    volunteering: 'Ndihma ndaj të tjerëve është dhuratë për veten.',
    publications: 'Poezia është muzika e fjalëve.',
  },
  {
    experience: 'Fëmijëria është kujtimi më i ëmbël.',
    education: 'Çdo ditë mëson diçka të re.',
    native_language: 'Këngët e vjetra risjellin kujtime.',
    other_language: 'Një mirëmëngjes mund të ndryshojë gjithçka.',
    digital_skills: 'Fotot janë dritare në kohë.',
    soft_skills: 'Dëgjimi është arti i vërtetë i komunikimit.',
    technical_skills: 'Lulet ndryshojnë me stinët, si njeriu me kohën.',
    hobbies: 'Shkrimi është udhëtim në botën e brendshme.',
    extra_information: 'Deti është qetësi dhe stuhi në të njëjtën kohë.',
    certification:
      'Gjykimet e para janë si titujt e librit, të rëndësishme por jo përfundimtare.',
    volunteering: 'Të kujdesesh për bimët është të kujdesesh për jetën.',
    publications: 'Historitë janë ura midis brezave.',
  },
  {
    experience: 'Liqenet e thella ruajnë sekrete të panumërta.',
    education: 'Gjurmë në borë tregojnë histori të fshehta.',
    native_language: 'Era e malit është freskia më e pastër.',
    other_language: 'Natat e verës janë plot me yje që rrëfejnë ëndrra.',
    digital_skills: 'Rruga drejt majës është gjithmonë e mbushur me sfida.',
    soft_skills: 'Fjalët e ngrohta ngrohin zemrat më të ftohta.',
    technical_skills:
      'Dritat e qytetit krijojnë një peizazh magjik në mbrëmje.',
    hobbies: 'Lerë të lirë ëndrrat të fluturojnë si flutura.',
    extra_information: 'Çdo përqafim është një fjalë pa zë që thotë shumë.',
    certification: 'Një gotë çaj në mbrëmje është ftesë për qetësi.',
    volunteering: 'Ndërsa dielli perëndon, qielli merr ngjyra të pabesueshme.',
    publications: 'Librat janë miq që nuk të tradhtojnë kurrë.',
  },
  {
    experience: 'Vjeshta vesh qytetin me një mantel ngjyrash.',
    education: 'Një buzëqeshje është universale, kuptohet në çdo gjuhë.',
    native_language: 'Shiu i lehtë sjell freski pas një dite të nxehtë.',
    other_language: 'Hëna plot është dritarja në botën e ëndrrave.',
    digital_skills: 'Rrëfimet e mbrëmjes janë ura midis zemrash.',
    soft_skills: 'Një mirënjohje e thjeshtë mund të ndryshojë gjithçka.',
    technical_skills: 'Pikturat në mur tregojnë historinë e një qyteti.',
    hobbies: 'Gjurmët në rërë janë mesazhe të përkohshme nga deti.',
    extra_information:
      'Kafshët e shtëpisë janë anëtarë të familjes që flasin pa fjalë.',
    certification: 'Këngët popullore janë pasqyra e shpirtit të një kombi.',
    volunteering: 'Gjethet që bien në vjeshtë janë si kujtime që fluturojnë.',
    publications: 'Historitë e natës janë fjalët e ëmbëlsisë për ëndrrat.',
  },
];
