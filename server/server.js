Meteor.startup(function () {
  
  var rebuildDb = false;
  
  if (rebuildDb || Verbs.find().count() === 0 || Nouns.find().count() == 0) {
	
      // Temporarily build up datasource via server code
      Verbs.remove({}); 	
      Nouns.remove({});

      Verbs.insert(  
      {    
      english:"make a phone call",
      baseForm:"Telefonirati",
      class:1,
      rnd : Math.random()
      });
      
      Verbs.insert(  
      {    
      english:"meet",
      baseForm:"Sresti",
      class:1,
      rnd : Math.random()
      });
      
      Verbs.insert(  
      {    
      english:"introduce",
      baseForm:"Upoznati",
      class:1,
      rnd : Math.random()
      });
      
      Verbs.insert(  
      {    
      english:"Drink",
      baseForm:"Piti",
      class:1,
      rnd : Math.random()
      });
      
      Verbs.insert(  
      {    
      english:"Read",
      baseForm:"Citati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Play",
      baseForm:"Igrati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Go",
      baseForm:"Otici",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Clean",
      baseForm:"Cistiti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"have",
      baseForm:"Imati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Go",
      baseForm:"Ici",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Prepare",
      baseForm:"Preprimati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Do/Work",
      baseForm:"Raditi",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Eat",
      baseForm:"Jesti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Write",
      baseForm:"Pisati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Give",
      baseForm:"Dobiti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Take",
      baseForm:"Uzeti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"have breakfast",
      baseForm:"Doruckovati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"have lunch",
      baseForm:"Rucati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"have dinner",
      baseForm:"Vecerati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Drink",
      baseForm:"Popiti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Answer",
      baseForm:"Javiti se",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Need",
      baseForm:"Trebati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Repeat",
      baseForm:"Ponoviti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Think",
      baseForm:"Misliti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Must",
      baseForm:"Morati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Talk",
      baseForm:"Razgovariti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Want",
      baseForm:"Zeliti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Leave",
      baseForm:"Ostaviti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"Call",
      baseForm:"Nasvati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"write down",
      baseForm:"Zapisati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"give my regards",
      baseForm:"Pozdraviti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"be born",
      baseForm:"Rodjati?",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"fly",
      baseForm:"Letjeti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"listen",
      baseForm:"Slusati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"kind of know",
      baseForm:"Poznati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"watch",
      baseForm:"Gledati",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"let/allow me",
      baseForm:"Dopusti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"speak",
      baseForm:"Govoriti",
      class:4,
      rnd : Math.random()
      });
      
      Verbs.insert(  {    
      english:"like/love",
      baseForm:"Voliti",
      class:3,
      });
      
      // Auto generated from onlne dictionary 
      
      Nouns.insert({
      english:"person, individual, someone, somebody, mortal, soul",
      baseForm:"čovjek",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"animal, animate being, beast, brute, creature, fauna",
      baseForm:"životinja",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"plant, flora, plant life",
      baseForm:"biljka",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"food, nutrient",
      baseForm:"hrana",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"knowledge, cognition, noesis",
      baseForm:"znanje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"feeling",
      baseForm:"osjećaj",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"space, infinite",
      baseForm:"svemir",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"event",
      baseForm:"događaj",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"process, physical process",
      baseForm:"proces",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"act, deed, human action, human activity",
      baseForm:"čin",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"group, grouping",
      baseForm:"skupina",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"relation",
      baseForm:"odnosi",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"discovery, find, uncovering",
      baseForm:"pronaći",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"record",
      baseForm:"rekord",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"loss",
      baseForm:"gubitak",
      rnd : Math.random()
      });
      Verbs.insert({
      english:"mistake, error, fault",
      baseForm:"pogriješiti",
      class:1,
      rnd : Math.random()
      });
      Nouns.insert({
      english:"fall, spill, tumble",
      baseForm:"politički",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"kick, boot, kicking",
      baseForm:"udarac nogom",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"kiss, buss, osculation",
      baseForm:"ljubljenje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"comparison, comparing",
      baseForm:"usporedba",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"means, agency, way",
      baseForm:"način",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"destruction, devastation",
      baseForm:"uništavanje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"flight, flying",
      baseForm:"let",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"journey, journeying",
      baseForm:"putovanje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"cut, cutting",
      baseForm:"sječa",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"entertainment, amusement",
      baseForm:"zabava",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"work",
      baseForm:"rad",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"care, attention, aid, tending",
      baseForm:"briga",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"operation, surgery, surgical operation, surgical procedure, surgical process",
      baseForm:"operacija",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"trick",
      baseForm:"lukavština",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"crime, offense, criminal offense, criminal offence, offence, law-breaking",
      baseForm:"kazneno",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"attempt, effort, endeavor, endeavour, try",
      baseForm:"pokušaj",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"addition, summation, plus",
      baseForm:"dodavanje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"education, instruction, teaching, pedagogy, didactics, educational activity",
      baseForm:"obrazovanje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"industry, manufacture",
      baseForm:"industrija",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"design, designing",
      baseForm:"nacrt",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"use, usage, utilization, utilisation, employment, exercise",
      baseForm:"korištenje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"attack, onslaught, onset, onrush",
      baseForm:"napad",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"measurement, measuring, measure, mensuration",
      baseForm:"mjerenje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"rest, ease, repose, relaxation",
      baseForm:"mirnoća",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"trade",
      baseForm:"trgovina",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"market, marketplace, market place",
      baseForm:"tržište",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"punishment, penalty, penalization, penalisation",
      baseForm:"kazna",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"fight, fighting, combat, scrap",
      baseForm:"borba",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"blow",
      baseForm:"udarac",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"help, aid, assist, assistance",
      baseForm:"pomoć",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"approval, blessing, approving",
      baseForm:"odobrenje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"support",
      baseForm:"potpora",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"meeting, coming together",
      baseForm:"sastanak",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"egg",
      baseForm:"jaje",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"bird",
      baseForm:"ptica",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"snake, serpent, ophidian",
      baseForm:"zmija",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"feather, plume, plumage",
      baseForm:"pero",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"dog, domestic dog, Canis familiaris",
      baseForm:"pas",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"cat, true cat",
      baseForm:"mačka",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"wing",
      baseForm:"strana igrališta",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"tail",
      baseForm:"rep",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"insect",
      baseForm:"kukac",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"fly",
      baseForm:"muha",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"bee",
      baseForm:"pčela",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"ant, emmet, pismire",
      baseForm:"mrav",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"horse, Equus caballus",
      baseForm:"domaći konj",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"pig, hog, grunter, squealer, Sus scrofa",
      baseForm:"svinja",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"cow, moo-cow",
      baseForm:"krava",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"sheep",
      baseForm:"ovca",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"goat, caprine animal",
      baseForm:"koza",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"human, homo, man, human being",
      baseForm:"čovjek",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"monkey",
      baseForm:"majmun",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"fish",
      baseForm:"riba",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"addition, add-on, improver",
      baseForm:"dodatak",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"plane, airplane, aeroplane",
      baseForm:"zrakoplov",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"flat, apartment",
      baseForm:"stan",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"art, fine art",
      baseForm:"umjetnost",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"back",
      baseForm:"stražnji dio",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"ball",
      baseForm:"lopta",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"base, base of operations",
      baseForm:"osnova",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"basket, handbasket",
      baseForm:"košara",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"bed",
      baseForm:"krevet",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"bell",
      baseForm:"zvono",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"curve, bend",
      baseForm:"krivina",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"bike, bicycle, wheel, cycle",
      baseForm:"bicikl",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"blade",
      baseForm:"oštrica",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"boat",
      baseForm:"čamac",
      rnd : Math.random()
      });
      Nouns.insert({
      english:"book ; volume",
      baseForm:"tekst",
      rnd : Math.random()
      });
      
      Nouns.insert({
      english:"boot",
      baseForm:"čizma",
      rnd : Math.random()
      });
      
      Nouns.insert({
      english:"bottle",
	baseForm:"boca",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"box",
	baseForm:"kutija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brick",
	baseForm:"cigla",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bridge, span",
	baseForm:"most",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brush",
	baseForm:"četka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"building, edifice",
	baseForm:"građevina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"camera, photographic camera",
	baseForm:"fotoaparat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chain",
	baseForm:"lanac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"church, church building",
	baseForm:"crkva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"clock",
	baseForm:"sat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"coat",
	baseForm:"kaput",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"collar, neckband",
	baseForm:"ovratnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"connection, connexion, connector, connecter, connective",
	baseForm:"poveznik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cup",
	baseForm:"šalica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cup, loving cup",
	baseForm:"pehar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"curtain, drape, drapery, mantle, pall",
	baseForm:"zavjesa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"decoration, ornament, ornamentation",
	baseForm:"ukras",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"door",
	baseForm:"vrata",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"drawer",
	baseForm:"ladica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"elevator, lift",
	baseForm:"dizalo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"engine",
	baseForm:"motor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cloth, fabric, material, textile",
	baseForm:"sukno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"farm",
	baseForm:"farma",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"flag",
	baseForm:"nacionalna zastava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"floor, flooring",
	baseForm:"pod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"floor, level, storey, story",
	baseForm:"kat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fork",
	baseForm:"vilica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"frame",
	baseForm:"okvir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"garden",
	baseForm:"vrt",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"glass, drinking glass",
	baseForm:"čaša",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"gun",
	baseForm:"puška",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hammer",
	baseForm:"malj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"handle, grip, handgrip, hold",
	baseForm:"kvaka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hat, chapeau, lid",
	baseForm:"šešir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hook, claw",
	baseForm:"kvaka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hospital, infirmary",
	baseForm:"bolnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"house",
	baseForm:"kuca",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"instrument",
	baseForm:"alat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"internet, net, cyberspace",
	baseForm:"internet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"jewel, gem, precious stone",
	baseForm:"dragulj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"key",
	baseForm:"ključ",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"knife",
	baseForm:"nož",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"knot",
	baseForm:"čvor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"library",
	baseForm:"biblioteka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"machine",
	baseForm:"stroj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"map",
	baseForm:"zemljovid",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"match, lucifer, friction match",
	baseForm:"žigica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mine",
	baseForm:"rudnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nail",
	baseForm:"čavao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"needle",
	baseForm:"igla za šivanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"net, network, mesh, meshing, meshwork",
	baseForm:"zamka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nut",
	baseForm:"matica vijka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"office, business office",
	baseForm:"kancelarija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"oven",
	baseForm:"pećnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"paint, pigment",
	baseForm:"nalič",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pen",
	baseForm:"nalivpero",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pencil",
	baseForm:"olovka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"picture, image, icon, ikon",
	baseForm:"odraz",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pin",
	baseForm:"igla",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pipe, pipage, piping",
	baseForm:"cijev",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"plate",
	baseForm:"tanjur",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"prison, prison house",
	baseForm:"zatvor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pump",
	baseForm:"sisaljka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"button, push button, push",
	baseForm:"dugme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ring, band",
	baseForm:"prsten",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"road, route",
	baseForm:"cesta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"roof",
	baseForm:"krov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"room",
	baseForm:"soba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sail, canvas, canvass, sheet",
	baseForm:"jedro",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"school, schoolhouse",
	baseForm:"škola",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cover, screen, covert, concealment",
	baseForm:"kapak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ship",
	baseForm:"brod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shirt",
	baseForm:"košulja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shoe",
	baseForm:"cipela",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shop, store",
	baseForm:"dućan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"silk",
	baseForm:"svila",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"skirt",
	baseForm:"suknja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"soap",
	baseForm:"sapun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sock",
	baseForm:"čarapa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"spoon",
	baseForm:"žlica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"spring",
	baseForm:"opruga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stage",
	baseForm:"pozornica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stamp",
	baseForm:"sprava za žigosanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"station",
	baseForm:"baza",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"step, stair",
	baseForm:"stepenica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stick",
	baseForm:"štap",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stitch",
	baseForm:"šav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"street",
	baseForm:"ulica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"structure, construction",
	baseForm:"sastav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"table",
	baseForm:"stol",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"television camera, tv camera, camera",
	baseForm:"kamera",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thing",
	baseForm:"predmet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"track, rail, rails, runway",
	baseForm:"šine",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"train, railroad train",
	baseForm:"vlak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wall",
	baseForm:"zid",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"watch, ticker",
	baseForm:"ručni sat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"well",
	baseForm:"bunar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wheel",
	baseForm:"kotač",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whip",
	baseForm:"bič",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"window",
	baseForm:"prozor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wire",
	baseForm:"žica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"humor, humour, sense of humor, sense of humour",
	baseForm:"raspoloženje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shape, form, cast",
	baseForm:"oblik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"expression, look, aspect, facial expression, face",
	baseForm:"pogled",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"quality",
	baseForm:"kakvoća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"behavior, demeanor, demeanour, behaviour, conduct, deportment",
	baseForm:"način ponašanja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"property",
	baseForm:"svojstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"structure",
	baseForm:"struktura",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smell, olfactory property, aroma, odor, odour, scent",
	baseForm:"miris",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sound",
	baseForm:"zvuk",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"silence, quiet",
	baseForm:"tišina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mass",
	baseForm:"masa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"weight",
	baseForm:"težina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"strength, force, forcefulness",
	baseForm:"snaga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"distance",
	baseForm:"udaljenost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"degree, grade, level",
	baseForm:"razina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"size",
	baseForm:"veličina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mass, bulk, volume",
	baseForm:"mnoštvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"amount",
	baseForm:"količina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"limit, bound, boundary",
	baseForm:"granica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"range, scope, reach, orbit, compass, ambit",
	baseForm:"opseg",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"value",
	baseForm:"vrijednost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"purpose, function, role, use",
	baseForm:"funkcija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"price, cost, toll",
	baseForm:"cijena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"power, powerfulness",
	baseForm:"moć",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"control",
	baseForm:"nadzor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"authority, authorization, authorisation, potency, dominance, say-so",
	baseForm:"ovlaštenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"skin, tegument, cutis",
	baseForm:"koža",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hair, pilus",
	baseForm:"dlaka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hair",
	baseForm:"kosa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bone, os",
	baseForm:"kostur",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tooth",
	baseForm:"zub",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"muscle, musculus",
	baseForm:"mišić",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tongue, lingua, glossa, clapper",
	baseForm:"jezik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mouth, oral cavity, oral fissure, rima oris",
	baseForm:"usta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lip",
	baseForm:"usna",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"eye, oculus, optic",
	baseForm:"oko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ear",
	baseForm:"uho",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"heart, pump, ticker",
	baseForm:"srce",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stomach, tummy, tum, breadbasket",
	baseForm:"želudac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"blood",
	baseForm:"krv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nerve, nervus",
	baseForm:"živac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brain, encephalon",
	baseForm:"mozak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"head, caput",
	baseForm:"glava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"neck, cervix",
	baseForm:"vrat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"throat, pharynx",
	baseForm:"ždrijelo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"body, torso, trunk",
	baseForm:"trup bez udova",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chest, thorax, pectus",
	baseForm:"grudi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"back, dorsum",
	baseForm:"leđa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"leg",
	baseForm:"noga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"foot, human foot, pes",
	baseForm:"stopalo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"arm",
	baseForm:"ruka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hand, manus, mitt, paw",
	baseForm:"šaka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"finger",
	baseForm:"prst",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thumb, pollex",
	baseForm:"palac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"knee, knee joint, human knee, articulatio genus, genu",
	baseForm:"koljeno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nail",
	baseForm:"nokat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nose, olfactory organ",
	baseForm:"vršak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chin, mentum",
	baseForm:"brada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"face, human face",
	baseForm:"lice",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mind, head, brain, psyche, nous",
	baseForm:"pamet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"invention, innovation, excogitation, conception, design",
	baseForm:"pronalazak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"memory, retention, retentiveness, retentivity",
	baseForm:"pamćenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"taste, gustation, sense of taste, gustatory modality",
	baseForm:"naklonost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"interest, involvement",
	baseForm:"interes",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"trouble, problem",
	baseForm:"poteškoća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"doubt, uncertainty, incertitude, dubiety, doubtfulness, dubiousness",
	baseForm:"nesigurnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"attention, attending",
	baseForm:"pozor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sweet, sweetness, sugariness",
	baseForm:"slatkoća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"noise, dissonance, racket",
	baseForm:"buka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"grade, mark, score",
	baseForm:"ocjena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"experience",
	baseForm:"iskustvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fact",
	baseForm:"činjenica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"example, illustration, instance, representative",
	baseForm:"primjer",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"idea, thought",
	baseForm:"misao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"decision, determination, conclusion",
	baseForm:"odluka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"kind, sort, form, variety",
	baseForm:"vrsta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brand, make",
	baseForm:"marka proizvoda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rule, regulation",
	baseForm:"propisan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"part, section, division",
	baseForm:"divizija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"center, kernel, substance, core, centre, essence, gist, heart, heart and soul, inwardness, marrow, meat, nub, pith, sum, nitty-gritty",
	baseForm:"bit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"memory",
	baseForm:"uspomena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"opinion, sentiment, persuasion, view, thought",
	baseForm:"mišljenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"religion, faith, religious belief",
	baseForm:"vjera",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"will",
	baseForm:"volja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"education",
	baseForm:"obrazovanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"theory",
	baseForm:"teorija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"discipline, subject, subject area, subject field, field, field of study, study, bailiwick",
	baseForm:"disciplina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"science, scientific discipline",
	baseForm:"znanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"page",
	baseForm:"stranica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"newspaper, paper",
	baseForm:"novine",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"language, linguistic communication",
	baseForm:"jezik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"word",
	baseForm:"riječ",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"name",
	baseForm:"ime",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"writing",
	baseForm:"pisanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"form",
	baseForm:"formular",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"list, listing",
	baseForm:"popis",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"invoice, bill, account",
	baseForm:"izvješće",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ticket",
	baseForm:"ulaznica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"law",
	baseForm:"zakon",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"will, testament",
	baseForm:"oporuka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"letter, missive",
	baseForm:"pismo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"argument, statement",
	baseForm:"argument",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"secret",
	baseForm:"tajnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"answer, reply, response",
	baseForm:"odgovor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"note, annotation, notation",
	baseForm:"bilješka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"agreement, understanding",
	baseForm:"ugovor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stamp, postage, postage stamp",
	baseForm:"poštarina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"line",
	baseForm:"crta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"letter, letter of the alphabet, alphabetic character",
	baseForm:"slovo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"note, musical note, tone",
	baseForm:"tipka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smile, smiling, grin, grinning",
	baseForm:"osmijeh",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"music",
	baseForm:"glazba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"song, vocal",
	baseForm:"pjesma",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rhythm, beat, musical rhythm",
	baseForm:"ritam",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"voice, vocalization, vocalisation, vocalism, phonation, vox",
	baseForm:"glas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cry, outcry, call, yell, shout, vociferation",
	baseForm:"zov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"discussion, give-and-take, word",
	baseForm:"diskusija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"order",
	baseForm:"naredba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"argument, controversy, contention, contestation, disputation, disceptation, tilt, arguing",
	baseForm:"svađa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"offer, offering",
	baseForm:"ponuda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"request, asking",
	baseForm:"molba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"question, inquiry, enquiry, query, interrogation",
	baseForm:"upit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"yes",
	baseForm:"da",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"no",
	baseForm:"ne",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"protest, protestation",
	baseForm:"prosvjed",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"advertisement, ad, advertizement, advertising, advertizing, advert",
	baseForm:"oglas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"marker, marking, mark",
	baseForm:"oznaka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"experience",
	baseForm:"iskustvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wages, reward, payoff",
	baseForm:"nagrada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"movement, motion",
	baseForm:"kretanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"birth, nativity, nascency, nascence",
	baseForm:"rođenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cause",
	baseForm:"uzrok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"jump, leap,  saltation",
	baseForm:"skok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"touch, touching",
	baseForm:"dodir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"damage, harm, impairment",
	baseForm:"šteta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"outburst, burst, flare-up",
	baseForm:"provala",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"contest, competition",
	baseForm:"natjecanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pleasure, pleasance",
	baseForm:"zadovoljstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"surprise",
	baseForm:"iznenađenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shock, daze, stupor",
	baseForm:"šok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fear, fearfulness, fright",
	baseForm:"strah",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"love",
	baseForm:"ljubav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hate, hatred",
	baseForm:"mržnja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"meal, repast",
	baseForm:"obrok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"soup",
	baseForm:"juha",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"meat",
	baseForm:"meso",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bread, breadstuff, staff of life",
	baseForm:"kruh",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"potato, white potato, Irish potato, murphy, spud, tater",
	baseForm:"krumpir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"apple",
	baseForm:"jabuka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"orange",
	baseForm:"naranča",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rice",
	baseForm:"riža",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"salt, table salt, common salt",
	baseForm:"sol",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"milk",
	baseForm:"mlijeko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"butter",
	baseForm:"maslac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cheese",
	baseForm:"sir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"drink, beverage, drinkable, potable",
	baseForm:"napitak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wine, vino",
	baseForm:"vino",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"milkshake, milk shake, shake",
	baseForm:"mliječni napitak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"society",
	baseForm:"društvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"family, family unit",
	baseForm:"obitelj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sex",
	baseForm:"seks",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"package, bundle, packet, parcel",
	baseForm:"paket",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"organization, organisation",
	baseForm:"organizacija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"government, authorities, regime",
	baseForm:"vlada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"company",
	baseForm:"trgovačko društvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"business, concern, business concern, business organization, business organisation",
	baseForm:"firma",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"religion, faith, organized religion",
	baseForm:"vjera",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nation, land, country",
	baseForm:"narod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"public, populace, world",
	baseForm:"javnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"army, regular army, ground forces",
	baseForm:"vojska",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"band, dance band, dance orchestra",
	baseForm:"glazbena skupina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"table, tabular array",
	baseForm:"tablica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"committee, commission",
	baseForm:"odbor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"system, scheme",
	baseForm:"sustav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stream, flow, current",
	baseForm:"tok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"country, state, land",
	baseForm:"zemlja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"edge, border",
	baseForm:"rub",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"field",
	baseForm:"polje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"front, front end, forepart",
	baseForm:"naslovnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"position, place",
	baseForm:"mjesto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"seat, place",
	baseForm:"mjesto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"side",
	baseForm:"strana",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"place, topographic point, spot",
	baseForm:"stanovito mjesto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"town",
	baseForm:"grad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"trend, tendency",
	baseForm:"sklonost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bit, chip, flake, fleck, scrap",
	baseForm:"komadić",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cloud",
	baseForm:"oblak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"crack, cleft, crevice, fissure, scissure",
	baseForm:"pukotina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Earth, earth, world, globe",
	baseForm:"Zemlja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hole",
	baseForm:"rupa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"island",
	baseForm:"otok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"land, dry land, earth, ground, solid ground, terra firma",
	baseForm:"tlo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Moon, moon",
	baseForm:"prirodni satelit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"plain, field, champaign",
	baseForm:"ravnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"river",
	baseForm:"rijeka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stone, rock",
	baseForm:"kamenac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sea",
	baseForm:"more",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sky",
	baseForm:"nebo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"spring, fountain, outflow, outpouring, natural spring",
	baseForm:"izvor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"star",
	baseForm:"zvijezda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sun, Sun",
	baseForm:"zvijezda sa satelitima",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"expert",
	baseForm:"stručnjak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"female, female person",
	baseForm:"žena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"male, male person",
	baseForm:"muškarac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"baby, babe, infant",
	baseForm:"beba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dear, beloved, dearest, honey, love",
	baseForm:"dragi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brother, blood brother",
	baseForm:"brat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cook",
	baseForm:"kuharica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"daughter, girl",
	baseForm:"kćerka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"director, manager, managing director",
	baseForm:"upravitelj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"father, male parent, begetter",
	baseForm:"otac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"friend",
	baseForm:"prijatelj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"general, full general",
	baseForm:"general",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"girl, miss, missy, young lady, young woman, fille",
	baseForm:"djevojčica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"judge, justice, jurist",
	baseForm:"sudac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"boy, male child",
	baseForm:"dječak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"man, adult male",
	baseForm:"muškarac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mother, female parent",
	baseForm:"majka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"owner, possessor",
	baseForm:"posjednik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"representative",
	baseForm:"trgovački putnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"secretary, secretarial assistant",
	baseForm:"tajnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"servant, retainer",
	baseForm:"sluga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sister, sis",
	baseForm:"sestra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"son, boy",
	baseForm:"sin",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"woman, adult female",
	baseForm:"žena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"consequence, effect, outcome, result, event, issue, upshot",
	baseForm:"posljedica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"reaction",
	baseForm:"reakcija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"death",
	baseForm:"smrt",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"light, visible light, visible radiation",
	baseForm:"svjetlost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rain, rainfall",
	baseForm:"kiša",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smoke, fume",
	baseForm:"isparina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"weather, weather condition, conditions, atmospheric condition",
	baseForm:"vrijeme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wind, air current, current of air",
	baseForm:"vjetar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"flower",
	baseForm:"cvijet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"grass",
	baseForm:"trava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tree",
	baseForm:"stablo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"root",
	baseForm:"korijen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stem, stalk",
	baseForm:"stabljika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fruit",
	baseForm:"plod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"seed",
	baseForm:"sjeme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nut",
	baseForm:"orah",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"leaf, leafage, foliage",
	baseForm:"list",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"branch",
	baseForm:"grana",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"property, belongings, holding",
	baseForm:"svojstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"profit, net income, net, net profit, lucre, profits, earnings",
	baseForm:"profit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"payment",
	baseForm:"isplata",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tax, taxation, revenue enhancement",
	baseForm:"porez",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"interest",
	baseForm:"korist",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rate, charge per unit",
	baseForm:"stopa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"right",
	baseForm:"pravo na",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"money",
	baseForm:"novac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"change",
	baseForm:"sitniš",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"banknote, bill, note, government note, bank bill, banker's bill, bank note, Federal Reserve note, greenback",
	baseForm:"novčanica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"evolution, development",
	baseForm:"razvoj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fire, flame, flaming",
	baseForm:"plamen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"increase, increment, growth",
	baseForm:"rast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"operation, functioning, performance",
	baseForm:"u tijeku",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"number",
	baseForm:"broj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"unit, unit of measurement",
	baseForm:"jedinična vrijednost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"degree",
	baseForm:"stupanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"step, footstep, pace, stride",
	baseForm:"jeka koraka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"drop, drib, driblet",
	baseForm:"kap",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"part, portion, component part, component, constituent",
	baseForm:"komad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rest, remainder, balance, residual, residue, residuum",
	baseForm:"ostatak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"direction",
	baseForm:"smjer",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"north, due north, northward, N",
	baseForm:"sjeverni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"east, due east, eastward, E",
	baseForm:"istok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"south, due south, southward, S",
	baseForm:"jug",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"west, due west, westward, W",
	baseForm:"zapad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"competition",
	baseForm:"natjecanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"opposite, reverse, contrary",
	baseForm:"suprotnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"curve, curved shape",
	baseForm:"zavoj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"circle",
	baseForm:"krug",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"coil, whorl, roll, curl, curlicue, ringlet, gyre, scroll",
	baseForm:"navoj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"square, foursquare",
	baseForm:"kvadrat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"angle",
	baseForm:"kut",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"point, dot",
	baseForm:"točka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"condition, status",
	baseForm:"stanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"account, business relationship",
	baseForm:"račun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"company, companionship, fellowship, society",
	baseForm:"pratnja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"top, peak, summit, acme, height, elevation, pinnacle,  superlative, meridian, tiptop",
	baseForm:"vrhunac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"existence, being, beingness",
	baseForm:"postojanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"peace",
	baseForm:"mir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"war, state of war",
	baseForm:"rat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"balance",
	baseForm:"uravnoteženost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sleep, slumber",
	baseForm:"spavanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"disease",
	baseForm:"bolest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cold, common cold",
	baseForm:"prehlada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pain, hurting",
	baseForm:"bol",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cough, coughing",
	baseForm:"kašalj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dominance, ascendance, ascendence, ascendancy, ascendency, control",
	baseForm:"moć",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dominion, rule",
	baseForm:"vlast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"demand, need",
	baseForm:"potrebe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chance, opportunity",
	baseForm:"prilika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"moisture, wet",
	baseForm:"vlažnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"danger",
	baseForm:"opasnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"material, stuff",
	baseForm:"materijal",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"acid",
	baseForm:"kiselina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"metallic element, metal",
	baseForm:"metal",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"gold, Au, atomic number 79",
	baseForm:"zlato",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"iron, Fe, atomic number 26",
	baseForm:"željezo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lead, Pb, atomic number 82",
	baseForm:"olovo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"silver, Ag, atomic number 47",
	baseForm:"srebro",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"leather",
	baseForm:"koža",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"steel",
	baseForm:"čelik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chemical, chemical substance",
	baseForm:"kemija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"coal",
	baseForm:"ugljen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dust",
	baseForm:"prašina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"air",
	baseForm:"zrak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"breath",
	baseForm:"dah",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"earth, ground",
	baseForm:"zemlja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"water, H2O",
	baseForm:"voda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"waste, waste material, waste matter, waste product",
	baseForm:"otpad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fat",
	baseForm:"mast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"glass",
	baseForm:"staklo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ice, water ice",
	baseForm:"led",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ink",
	baseForm:"tinta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"liquid",
	baseForm:"tekućina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"oil",
	baseForm:"ulje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"paper",
	baseForm:"papir",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"oil, petroleum, crude oil, crude, rock oil, fossil oil",
	baseForm:"nafta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"color, colour, coloring material, colouring material",
	baseForm:"boje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"powder, pulverization, pulverisation",
	baseForm:"prašak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sand",
	baseForm:"pijesak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"poison, toxicant, poisonous substance",
	baseForm:"otrov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"steam",
	baseForm:"para",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wood",
	baseForm:"drvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wool",
	baseForm:"vuna",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"past, past times, yesteryear",
	baseForm:"prošlost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"history",
	baseForm:"povijest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"future, hereafter, futurity, time to come",
	baseForm:"budućnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"time, fourth dimension",
	baseForm:"vrijeme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"week, calendar week",
	baseForm:"tjedan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"day, twenty-four hours, twenty-four hour period, 24-hour interval, solar day, mean solar day",
	baseForm:"dan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tomorrow",
	baseForm:"sutra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"morning, morn, morning time, forenoon",
	baseForm:"jutro",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"night, nighttime, dark",
	baseForm:"noc",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"year, twelvemonth, yr",
	baseForm:"godina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"month, calendar month",
	baseForm:"mjesec",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hour, hr, 60 minutes",
	baseForm:"sat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"minute, min",
	baseForm:"minuta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"second, sec, s",
	baseForm:"sekunda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"autumn, fall",
	baseForm:"jesen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"spring, springtime",
	baseForm:"proljeće",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"summer, summertime",
	baseForm:"ljeto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"winter, wintertime",
	baseForm:"zima",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"while, piece, spell, patch",
	baseForm:"neko vrijeme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beginning, commencement, first, outset, get-go, start, kickoff, starting time, showtime, offset",
	baseForm:"početak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"phase, stage",
	baseForm:"faza",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cough",
	baseForm:"kašalj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smile",
	baseForm:"smiješiti se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"laugh, express joy, express mirth",
	baseForm:"smijati se",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"cry, weep",
	baseForm:"plakati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"injure, wound",
	baseForm:"raniti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"change, alter, modify",
	baseForm:"promijeniti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"become, go, get",
	baseForm:"postati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"limit, restrict, restrain, trammel, bound, confine, throttle",
	baseForm:"ograničiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"prepare, fix, set up, ready, gear up, set",
	baseForm:"pripremiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"let",
	baseForm:"dopustiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"process, treat",
	baseForm:"obraditi",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"train, develop, prepare, educate",
	baseForm:"obrazovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"measure, mensurate, measure out",
	baseForm:"mjeriti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"classify, class, sort, assort, sort out, separate",
	baseForm:"klasificirati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"rate, rank, range, order, grade, place",
	baseForm:"procijeniti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"estimate, gauge, approximate, guess, judge",
	baseForm:"ocijeniti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"doubt",
	baseForm:"sumnjati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"surprise",
	baseForm:"iznenaditi",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"request, bespeak, call for, quest",
	baseForm:"zamoliti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"call, telephone, call up, phone, ring",
	baseForm:"nazvati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"reply, answer, respond",
	baseForm:"odgovoriti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"introduce, present, acquaint",
	baseForm:"predstaviti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"protest",
	baseForm:"prosvjed",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"shout, shout out, cry, call, yell, scream, holler, hollo, squall",
	baseForm:"vikati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"talk, speak, utter, mouth, verbalize, verbalise",
	baseForm:"govoriti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"record, tape",
	baseForm:"snimiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"say, tell, state",
	baseForm:"reći",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"name, call",
	baseForm:"zvati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"send, mail, post",
	baseForm:"slati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"play",
	baseForm:"igrati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fight, contend, struggle",
	baseForm:"tući se",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"beat, beat out, crush, shell, trounce, vanquish",
	baseForm:"pobijediti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"attack, assail, assault, set on",
	baseForm:"napad",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"fire, open fire",
	baseForm:"pucati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"use, utilize, utilise, apply, employ",
	baseForm:"koristiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"drink, imbibe",
	baseForm:"piti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"take, get hold of",
	baseForm:"uzeti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"peel, skin, pare",
	baseForm:"ljuštiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"join, bring together",
	baseForm:"spojiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"sew, run up, sew together, stitch",
	baseForm:"sašiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"close, shut",
	baseForm:"zatvoriti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"open, open up",
	baseForm:"otvoriti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"kick",
	baseForm:"udariti nogom",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"kiss, snog, buss, osculate",
	baseForm:"poljubiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pull, draw, force",
	baseForm:"izvući",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"put, set, place, pose, position, lay",
	baseForm:"položiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"clean, make clean",
	baseForm:"čistit",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"wash, launder",
	baseForm:"prati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"cut",
	baseForm:"rezati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"design, plan",
	baseForm:"plan",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"cook",
	baseForm:"kuhati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"copy, re-create",
	baseForm:"kopirati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"print, impress",
	baseForm:"štampati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"hate, detest",
	baseForm:"mrziti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"love",
	baseForm:"voljeti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"like",
	baseForm:"sviđati se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hope",
	baseForm:"nadati se",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"desire, want",
	baseForm:"željeti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"travel, go, move, locomote",
	baseForm:"hodati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"come, come up",
	baseForm:"doći",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"move, displace",
	baseForm:"micati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"stop, halt",
	baseForm:"zaustaviti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"walk",
	baseForm:"hodati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"turn",
	baseForm:"okrenuti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"run",
	baseForm:"trčanje",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"fly, wing",
	baseForm:"letjeti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"jump, leap, bound, spring",
	baseForm:"skakati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"fall",
	baseForm:"pasti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lift, raise, elevate, get up, bring up",
	baseForm:"podići",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"land, set down",
	baseForm:"polje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lead, take, direct, conduct, guide",
	baseForm:"vođenje",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"see",
	baseForm:"vidjeti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"look",
	baseForm:"gledati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"look, appear, seem",
	baseForm:"izgledati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"watch, see, view,  catch, take in",
	baseForm:"promatrati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"taste, savor, savour",
	baseForm:"okusiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"give",
	baseForm:"dati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"own, have, possess",
	baseForm:"posjedovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"trade, merchandise",
	baseForm:"trgovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"offer",
	baseForm:"ponuditi",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"act, move",
	baseForm:"djelovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"free, liberate, release, unloose, unloosen, loose",
	baseForm:"osloboditi",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"respect, honor, honour, abide by, observe",
	baseForm:"poštivati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"divide, split, split up, separate, dissever, carve up",
	baseForm:"podijeliti u grupe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"try, seek, attempt, essay, assay",
	baseForm:"pokušaj",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"test, prove, try, try out, examine, essay",
	baseForm:"ispitati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"help, assist, aid",
	baseForm:"pomoći",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"support, back up",
	baseForm:"poduprijeti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"poison",
	baseForm:"otrovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"rule, govern",
	baseForm:"voditi",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"be",
	baseForm:"biti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"end, stop, finish, terminate, cease",
	baseForm:"završiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"survive, last, live, live on, go, endure, hold up, hold out",
	baseForm:"potrajati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"need, necessitate, ask, postulate, require, take, involve, call for, demand",
	baseForm:"zahtijevati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"embrace, encompass, comprehend, cover",
	baseForm:"obuhvatiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"exceed, transcend, overstep, pass, go past, top",
	baseForm:"nadmašiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"keep, maintain, hold",
	baseForm:"smiren",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"able",
	baseForm:"sposoban",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sticky, gluey, glutinous, gummy, mucilaginous, pasty, viscid, viscous",
	baseForm:"ljepljiv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dead",
	baseForm:"mrtav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"automatic",
	baseForm:"automatski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"awake",
	baseForm:"budan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beautiful",
	baseForm:"lijep",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"broken",
	baseForm:"razbijen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"certain, sure",
	baseForm:"siguran",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"blue, bluish, blueish",
	baseForm:"plav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"brown, brownish, chocolate-brown, dark-brown",
	baseForm:"smeđa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"green, greenish, light-green, dark-green",
	baseForm:"zelen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"orange, orangish",
	baseForm:"oranje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"yellow, yellowish, xanthous",
	baseForm:"žut",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"gray, grey, greyish, grayish",
	baseForm:"siv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"black",
	baseForm:"crn",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"white",
	baseForm:"bijel",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bright, brilliant, vivid",
	baseForm:"svijetao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dark",
	baseForm:"mračan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"clean",
	baseForm:"čist",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dirty, soiled, unclean",
	baseForm:"prljav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"clear",
	baseForm:"vedar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sharp, astute, shrewd",
	baseForm:"pronicav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"far",
	baseForm:"daleko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"near, close, nigh",
	baseForm:"skoro",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"common",
	baseForm:"uobičajen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"special, especial, exceptional, particular",
	baseForm:"poseban",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"full, total",
	baseForm:"potpun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sparse, thin",
	baseForm:"rijedak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"correct, right",
	baseForm:"točan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wrong, incorrect",
	baseForm:"netočan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"delicate",
	baseForm:"spretan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fragile, delicate, frail",
	baseForm:"nježan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"difficult, hard",
	baseForm:"teško",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"simple, elementary, uncomplicated, unproblematic",
	baseForm:"lak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"early",
	baseForm:"ran",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"late",
	baseForm:"kasno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"equal",
	baseForm:"jednak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"even, fifty-fifty",
	baseForm:"ravan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"flat, level, plane",
	baseForm:"gladak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"even",
	baseForm:"parni brojevi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cheap, inexpensive",
	baseForm:"jeftin",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"strange, unusual",
	baseForm:"čudan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"usual, common",
	baseForm:"običan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"slow",
	baseForm:"spor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fat",
	baseForm:"debeo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fat, fatty",
	baseForm:"obilan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"last",
	baseForm:"zadnji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rigid, stiff",
	baseForm:"krut",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"foreign, strange",
	baseForm:"inozeman",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"poor, hapless, miserable, misfortunate, pathetic, piteous, pitiable, pitiful, wretched",
	baseForm:"siromašan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"free",
	baseForm:"slobodan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"full",
	baseForm:"pun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"general",
	baseForm:"općenit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"good",
	baseForm:"dobar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"great, bang-up, bully, corking, cracking, dandy, groovy, keen, neat, nifty, not bad, peachy, slap-up, swell, smashing",
	baseForm:"odličan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bad",
	baseForm:"slab",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sudden",
	baseForm:"nenadan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"happy",
	baseForm:"sretan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"firm, solid",
	baseForm:"jak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"soft",
	baseForm:"mekan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"healthy",
	baseForm:"zdrav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"light",
	baseForm:"lagan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"high",
	baseForm:"visok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"low",
	baseForm:"nizak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"under, nether",
	baseForm:"ispod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cold",
	baseForm:"hladan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cruel, barbarous, brutal, fell, roughshod, savage, vicious",
	baseForm:"grub",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sad",
	baseForm:"tužan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"kind",
	baseForm:"prijateljski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"great",
	baseForm:"velik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"small, little",
	baseForm:"malen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"minute, infinitesimal",
	baseForm:"neznatan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"different, unlike, dissimilar",
	baseForm:"koji nije sličan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"probable, likely",
	baseForm:"vjerojatno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"long",
	baseForm:"dugi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"short",
	baseForm:"kratak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tight",
	baseForm:"tijesan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"loud",
	baseForm:"glasan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"male",
	baseForm:"muška biljka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"married",
	baseForm:"oženjen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"male, manful, manlike, manly, virile",
	baseForm:"muški",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"military",
	baseForm:"vojnički",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"metal, metallic",
	baseForm:"metalan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"much",
	baseForm:"puno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"natural",
	baseForm:"prirodan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fake, false, faux, imitation, simulated",
	baseForm:"lažan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"necessary",
	baseForm:"potreban",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"normal",
	baseForm:"normalan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"old",
	baseForm:"star",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"young, immature",
	baseForm:"mlado",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"open, unfastened",
	baseForm:"otvoreno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"closed, shut, unopen",
	baseForm:"zatvoren",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"secret, clandestine, cloak-and-dagger, hole-and-corner, hugger-mugger, hush-hush, surreptitious, undercover, underground",
	baseForm:"tajni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"free, complimentary, costless, gratis, gratuitous",
	baseForm:"besplatna ulaznica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"parallel",
	baseForm:"paralelan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"past",
	baseForm:"prošlost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"present",
	baseForm:"sadašnji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"future",
	baseForm:"budući",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"complete, consummate",
	baseForm:"potpun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"private",
	baseForm:"osobni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sharp, acuate, acute, needlelike",
	baseForm:"oštar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"political",
	baseForm:"politički",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"possible",
	baseForm:"moguć",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"quiet",
	baseForm:"tih",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"silent, soundless, still",
	baseForm:"tih",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ready",
	baseForm:"spreman",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"regular",
	baseForm:"redovit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"responsible",
	baseForm:"imati odgovornost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"right",
	baseForm:"desna strana",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"left",
	baseForm:"lijevo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"round, circular",
	baseForm:"okrugao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"square",
	baseForm:"četverokutan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"safe",
	baseForm:"zaštićen",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"same",
	baseForm:"isti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"other",
	baseForm:"drugi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"different",
	baseForm:"različit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"new",
	baseForm:"nov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"opposite",
	baseForm:"suprotan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"separate",
	baseForm:"odvojen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"serious",
	baseForm:"ozbiljan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"common, mutual",
	baseForm:"zajednički",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"second, 2nd, 2d",
	baseForm:"drugi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"skilful, adept, expert, good, practiced, proficient, skillful",
	baseForm:"vješt",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smooth",
	baseForm:"gladak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rough, unsmooth",
	baseForm:"osoran",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"solid",
	baseForm:"krut",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"liquid",
	baseForm:"tekućina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"any, whatever, whatsoever",
	baseForm:"neki",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"no",
	baseForm:"nijedan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"all",
	baseForm:"sve",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"every",
	baseForm:"svaki",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"straight",
	baseForm:"ravan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"strong",
	baseForm:"snažan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sweet",
	baseForm:"sladak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tall",
	baseForm:"visok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bitter",
	baseForm:"gorak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thin",
	baseForm:"tanak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thick",
	baseForm:"gust",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tired",
	baseForm:"umoran",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"true",
	baseForm:"istinit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"down",
	baseForm:"dolje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"violent",
	baseForm:"divlji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"warm",
	baseForm:"topao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ill, sick",
	baseForm:"bolestan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wet",
	baseForm:"mokar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dry",
	baseForm:"suh",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"healthy, salubrious, good for you",
	baseForm:"zdrav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wide, broad",
	baseForm:"širok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"narrow",
	baseForm:"uzak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wise",
	baseForm:"mudar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chemical, chemic",
	baseForm:"kemijski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"medical",
	baseForm:"liječnički",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"electric, electrical",
	baseForm:"električni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"simply, merely, just, only, but",
	baseForm:"samo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"approximately, about, close to, just about, some, roughly, more or less, around, or so",
	baseForm:"približno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"entirely, exclusively, solely, alone, only",
	baseForm:"sam",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"well, good",
	baseForm:"zdrav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"even",
	baseForm:"čak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"equally, as, every bit",
	baseForm:"kao",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"not, non",
	baseForm:"nemati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"still",
	baseForm:"još uvijek",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"very, really, real, rattling",
	baseForm:"zaista",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"again, once again, once more, over again",
	baseForm:"opet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"immediately, instantly, straightaway, straight off, directly, now, right away, at once, forthwith, like a shot",
	baseForm:"smjesta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"now, at present",
	baseForm:"sad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"directly, straight, direct",
	baseForm:"ravno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"almost, about, most, nearly, near, nigh, virtually, well-nigh",
	baseForm:"skoro",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"forward, forwards, frontward, frontwards, forrad, forrard",
	baseForm:"naprijed",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"down, downwards, downward, downwardly",
	baseForm:"dolje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"little",
	baseForm:"mali",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"late, belatedly, tardily",
	baseForm:"kasno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"early, early on",
	baseForm:"rano",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"first, firstly, foremost, first of all, first off",
	baseForm:"ponajprije",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"here",
	baseForm:"na ovom mjestu",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"here  ; hither",
	baseForm:"ovdje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"there  ; at that place  ; in that location",
	baseForm:"tamo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"together",
	baseForm:"zajedno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"then  ; so  ; and so  ; and then",
	baseForm:"onda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"enough  ; plenty",
	baseForm:"dovoljno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"so",
	baseForm:"tako",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"such",
	baseForm:"takav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"slowly  ; slow  ; easy  ; tardily",
	baseForm:"sporo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tomorrow",
	baseForm:"sutra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"between  ; betwixt",
	baseForm:"između",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"in  ; inwards  ; inward",
	baseForm:"unutra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chemistry  ; chemical science",
	baseForm:"kemija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Germany  ; Federal Republic of Germany  ; Deutschland  ; FRG",
	baseForm:"Savezna Republika Njemačka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"France  ; French Republic",
	baseForm:"Francuska Republika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"India  ; Republic of India  ; Bharat",
	baseForm:"Republika Indija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"December  ; Dec",
	baseForm:"Prosinac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"October  ; Oct",
	baseForm:"Listopad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"November  ; Nov",
	baseForm:"Studeni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"April  ; Apr",
	baseForm:"Travanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"June",
	baseForm:"Lipanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"July",
	baseForm:"Srpanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"January  ; Jan",
	baseForm:"Siječanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Italy  ; Italian Republic  ; Italia",
	baseForm:"Italija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"February  ; Feb",
	baseForm:"Veljača",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Spain  ; Kingdom of Spain  ; Espana",
	baseForm:"Kraljevina Španjolska",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lion  ; king of beasts  ; Panthera leo",
	baseForm:"lav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beer",
	baseForm:"pivo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Japan  ; Nippon  ; Nihon",
	baseForm:"Japan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sugar  ; refined sugar",
	baseForm:"šećer",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"United States  ; United States of America  ; America  ; the States  ; US  ; U.S.  ; USA  ; U.S.A.",
	baseForm:"SAD",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Monday  ; Mon",
	baseForm:"Ponedjeljak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"biology  ; biological science",
	baseForm:"biologija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dictionary  ; lexicon",
	baseForm:"rječnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Friday  ; Fri",
	baseForm:"Petak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Thursday  ; Th",
	baseForm:"Četvrtak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"coffee  ; java",
	baseForm:"kava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Wednesday  ; Midweek  ; Wed",
	baseForm:"Srijeda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"United Kingdom  ; UK  ; U.K.  ; Britain  ; United Kingdom of Great Britain and Northern Ireland  ; Great Britain",
	baseForm:"Britanija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Sunday  ; Lord's Day  ; Dominicus  ; Sun",
	baseForm:"Nedjelja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tea",
	baseForm:"čajevi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"energy  ; free energy",
	baseForm:"energija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"democracy  ; republic  ; commonwealth",
	baseForm:"republika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Czech Republic",
	baseForm:"Češka Republika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lake",
	baseForm:"jezero",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chocolate",
	baseForm:"čokolada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"German  ; High German  ; German language",
	baseForm:"German",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"elephant",
	baseForm:"slon",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"car  ; auto  ; automobile  ; machine  ; motorcar",
	baseForm:"automobil",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"theater  ; theatre  ; house",
	baseForm:"kazalište",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"doctor  ; doc  ; physician  ; MD  ; Dr.  ; medico",
	baseForm:"liječnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"culture  ; civilization  ; civilisation",
	baseForm:"kultura",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tennis  ; lawn tennis",
	baseForm:"tenis",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"city  ; metropolis  ; urban center",
	baseForm:"grad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"three  ; 3  ; iii",
	baseForm:"tri",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bank  ; depository financial institution  ; banking concern  ; banking company",
	baseForm:"banka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"poetry  ; poesy  ; verse",
	baseForm:"poezija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nature",
	baseForm:"priroda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"eight  ; 8  ; viii",
	baseForm:"osam",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ten  ; 10  ; x",
	baseForm:"deset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"actor  ; histrion  ; player  ; thespian  ; role player",
	baseForm:"glumac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thousand  ; one thousand  ; 1000  ; M  ; K  ; chiliad  ; G  ; grand  ; thou  ; yard",
	baseForm:"znamenka tisuću",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"game",
	baseForm:"igra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"big  ; large",
	baseForm:"velik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bus  ; autobus  ; coach  ; charabanc  ; double-decker  ; jitney  ; motorbus  ; motorcoach  ; omnibus  ; passenger vehicle",
	baseForm:"autobus",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"airport  ; airdrome  ; aerodrome  ; drome",
	baseForm:"uzletište",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beach",
	baseForm:"plaža",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"castle",
	baseForm:"tvrđava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"forest  ; wood  ; woods",
	baseForm:"šuma",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"six  ; 6  ; vi  ; half dozen  ; half-dozen",
	baseForm:"šest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bear",
	baseForm:"medvjed",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Hindi",
	baseForm:"Hindski jezik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"technology  ; engineering",
	baseForm:"tehnologija",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"nine  ; 9  ; ix",
	baseForm:"deveti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beak  ; bill  ; neb  ; nib  ; pecker",
	baseForm:"kljun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Saturday  ; Sabbatum  ; Sat",
	baseForm:"Subota",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"century",
	baseForm:"stoljeće",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mirror",
	baseForm:"zrcalo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chemical element  ; element",
	baseForm:"kemijski element",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"police  ; police force  ; constabulary  ; law",
	baseForm:"redarstveni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"China  ; People's Republic of China  ; mainland China  ; Communist China  ; Red China  ; PRC  ; Cathay",
	baseForm:"Kina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"health  ; wellness",
	baseForm:"zdravlje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chair",
	baseForm:"stolac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"life",
	baseForm:"život",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"teacher  ; instructor",
	baseForm:"učitelj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"million  ; 1000000  ; one thousand thousand  ; meg",
	baseForm:"milijun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"matter",
	baseForm:"tvar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"king  ; male monarch  ; Rex",
	baseForm:"kralj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"capital",
	baseForm:"glavni grad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"population",
	baseForm:"stanovništvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"evening  ; eve  ; even  ; eventide",
	baseForm:"večer",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rope",
	baseForm:"konop",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"eat",
	baseForm:"jesti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"gene  ; cistron  ; factor",
	baseForm:"gen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"age",
	baseForm:"starost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"computer  ; computing machine  ; computing device  ; data processor  ; electronic computer  ; information processing system",
	baseForm:"računalo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"museum",
	baseForm:"muzej",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"five  ; 5  ; v",
	baseForm:"broj ili brojka pet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hotel",
	baseForm:"hotel",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"one  ; 1  ; i  ; ane",
	baseForm:"jedan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"student  ; pupil  ; educatee",
	baseForm:"student",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"accident",
	baseForm:"nesreća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"English  ; English language",
	baseForm:"Engleski jezik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"writer  ; author",
	baseForm:"pisac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"carpet  ; rug  ; carpeting",
	baseForm:"sag",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"soldier",
	baseForm:"vojnika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"musician  ; instrumentalist  ; player",
	baseForm:"glazbenik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"snow",
	baseForm:"snijeg",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cellphone  ; cellular telephone  ; cellular phone  ; cell  ; mobile phone",
	baseForm:"mobilni telefon",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"baseball  ; baseball game",
	baseForm:"bejzbol",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"people",
	baseForm:"ljudi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"husband  ; hubby  ; married man",
	baseForm:"muž",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wife  ; married woman",
	baseForm:"žena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"subject  ; topic  ; theme",
	baseForm:"tema",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"risk  ; hazard  ; jeopardy  ; peril  ; endangerment",
	baseForm:"opasnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"too  ; besides  ; also  ; likewise  ; as well",
	baseForm:"također",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"set",
	baseForm:"skup",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"factory  ; mill  ; manufacturing plant  ; manufactory",
	baseForm:"tvornica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"village  ; small town  ; settlement",
	baseForm:"selo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"birthday",
	baseForm:"rođendan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nothing  ; nil  ; nix  ; nada  ; null  ; aught  ; cipher  ; cypher  ; goose egg  ; naught  ; zero  ; zilch  ; zip  ; zippo",
	baseForm:"ništa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"charge  ; electric charge",
	baseForm:"naboj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"program  ; programme  ; computer program  ; computer programme",
	baseForm:"program",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"election",
	baseForm:"izbor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"address",
	baseForm:"adresa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"announcement  ; proclamation  ; annunciation  ; declaration",
	baseForm:"najava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fast",
	baseForm:"brz",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"grandfather  ; gramps  ; granddad  ; grandad  ; granddaddy  ; grandpa",
	baseForm:"djed",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"occupation  ; business  ; job  ; line of work  ; line",
	baseForm:"zanimanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"advice",
	baseForm:"savjet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lunch  ; luncheon  ; tiffin  ; dejeuner",
	baseForm:"ručak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"management  ; direction",
	baseForm:"vodstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"movie  ; film  ; picture  ; moving picture  ; moving-picture show  ; motion picture  ; motion-picture show  ; picture show  ; pic  ; flick",
	baseForm:"tanki sloj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thirty  ; 30  ; xxx",
	baseForm:"trideset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"orchestra",
	baseForm:"orkestar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"guest  ; invitee",
	baseForm:"gost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sentence",
	baseForm:"rečenica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"concert",
	baseForm:"koncert",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"date  ; day of the month",
	baseForm:"datum",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mail  ; mail service  ; postal service  ; post",
	baseForm:"pošta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"eighteen  ; 18  ; xviii",
	baseForm:"osamnaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thirteen  ; 13  ; xiii",
	baseForm:"broj ili znamenka trinaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"eleven  ; 11  ; xi",
	baseForm:"jedanaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sixty  ; 60  ; lx  ; threescore",
	baseForm:"šezdeset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"season",
	baseForm:"sezona",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"state",
	baseForm:"država",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"minister  ; government minister",
	baseForm:"ministar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"plan  ; program  ; programme",
	baseForm:"nacrt",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"home  ; place",
	baseForm:"kuca",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"write",
	baseForm:"pisati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"always  ; ever  ; e'er",
	baseForm:"uvijek",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tie  ; necktie",
	baseForm:"kravata",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"information  ; info",
	baseForm:"informacija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"speech  ; speech communication  ; spoken communication  ; spoken language  ; language  ; voice communication  ; oral communication",
	baseForm:"govor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"worker",
	baseForm:"manualni radnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"court  ; tribunal  ; judicature",
	baseForm:"sud",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"eighty  ; 80  ; lxxx  ; fourscore",
	baseForm:"osamdeset",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"read",
	baseForm:"čitati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"forehead  ; brow",
	baseForm:"čelo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"customer  ; client",
	baseForm:"kupac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"today",
	baseForm:"danas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wish  ; wishing  ; want",
	baseForm:"želja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"case  ; instance  ; example",
	baseForm:"okolnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"interview",
	baseForm:"intervju",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"envelope",
	baseForm:"omotnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"garage",
	baseForm:"garaža",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sailor  ; crewman",
	baseForm:"mornar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fourteen  ; 14  ; xiv",
	baseForm:"četrnaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cell",
	baseForm:"stanica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"soon  ; shortly  ; presently  ; before long",
	baseForm:"uskoro",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"ask  ; inquire  ; enquire",
	baseForm:"pitati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"marriage  ; matrimony  ; union  ; spousal relationship  ; wedlock",
	baseForm:"brak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"research",
	baseForm:"znanstveno istraživanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"afternoon",
	baseForm:"poslije podne",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"method",
	baseForm:"metoda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"contract",
	baseForm:"utanačenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"possibly  ; perchance  ; perhaps  ; maybe  ; mayhap  ; peradventure",
	baseForm:"možda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"manner  ; mode  ; style  ; way  ; fashion",
	baseForm:"držanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"percent  ; percentage  ; per centum  ; pct",
	baseForm:"posto",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"sing",
	baseForm:"pjevati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"passenger  ; rider",
	baseForm:"putnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"journalist",
	baseForm:"novinar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sale",
	baseForm:"prodaja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"gate",
	baseForm:"ograda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"wedding  ; marriage  ; marriage ceremony",
	baseForm:"vjenčanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sauce",
	baseForm:"umak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sixteen  ; 16  ; xvi",
	baseForm:"šesnaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"seventy  ; 70  ; lxx",
	baseForm:"sedamdeset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"salad",
	baseForm:"salata",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"component  ; constituent  ; element  ; factor  ; ingredient",
	baseForm:"element",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"style",
	baseForm:"stil",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"education",
	baseForm:"obrazovanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"shower",
	baseForm:"tuš",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"throw",
	baseForm:"baciti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"sit  ; sit down",
	baseForm:"posjesti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"moment  ; mo  ; minute  ; second  ; bit",
	baseForm:"moment",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pronunciation",
	baseForm:"izgovor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"height  ; altitude",
	baseForm:"nadmorska visina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"kitchen",
	baseForm:"kuhinja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"procedure  ; process",
	baseForm:"postupak",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"buy  ; purchase",
	baseForm:"kupiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"check  ; bank check  ; cheque",
	baseForm:"ček",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"project  ; projection",
	baseForm:"projekt",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"difference",
	baseForm:"razlika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"income",
	baseForm:"prihod",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cupboard  ; closet",
	baseForm:"sobica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"success",
	baseForm:"uspjeh",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"breakfast",
	baseForm:"doručak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ninety  ; 90  ; xc",
	baseForm:"devedeset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"passport",
	baseForm:"putovnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fresh",
	baseForm:"svjež",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stupid",
	baseForm:"glup",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"moment  ; minute  ; second  ; instant",
	baseForm:"trenutak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"choice  ; selection  ; option  ; pick",
	baseForm:"izbor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"already",
	baseForm:"već",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"seven  ; 7  ; vii",
	baseForm:"sedam",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"teach  ; learn  ; instruct",
	baseForm:"učiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"artist  ; creative person",
	baseForm:"umjetnik",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"accept  ; take  ; have",
	baseForm:"prihvatiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"department  ; section",
	baseForm:"odsjek",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"furniture  ; piece of furniture  ; article of furniture",
	baseForm:"pokućstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"half  ; one-half",
	baseForm:"polovica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"advantage  ; vantage",
	baseForm:"prednost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cinema  ; movie theater  ; movie theatre  ; movie house  ; picture palace",
	baseForm:"kino",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"policy",
	baseForm:"politika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"park  ; commons  ; common  ; green",
	baseForm:"park",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fifteen  ; 15  ; xv",
	baseForm:"petnaest",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pressure  ; pressure level  ; force per unit area",
	baseForm:"pritisak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"heavy",
	baseForm:"težak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"change  ; alteration  ; modification",
	baseForm:"promjena",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"data  ; information",
	baseForm:"podaci",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"midnight",
	baseForm:"ponoć",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pause  ; intermission  ; break  ; interruption  ; suspension",
	baseForm:"prekid",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"visit  ; see",
	baseForm:"posjetiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"patient",
	baseForm:"bolesnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"above  ; higher up  ; in a higher place  ; to a higher place",
	baseForm:"iznad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thousand  ; one thousand  ; 1000  ; m  ; k",
	baseForm:"broj tisuću",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"glue  ; gum  ; mucilage",
	baseForm:"ljepilo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fifty  ; 50  ; l",
	baseForm:"pedeset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pilot  ; airplane pilot",
	baseForm:"pilot",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"standard  ; criterion  ; measure  ; touchstone",
	baseForm:"kriterij",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"class  ; form  ; grade  ; course",
	baseForm:"razred",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"often  ; frequently  ; oftentimes  ; oft  ; ofttimes",
	baseForm:"cesto",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"suggest  ; propose  ; advise",
	baseForm:"predlagati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"clothing  ; article of clothing  ; vesture  ; wear  ; wearable  ; habiliment",
	baseForm:"odjeća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"exactly  ; precisely  ; just",
	baseForm:"točno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"job  ; task  ; chore",
	baseForm:"posao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"inside  ; within",
	baseForm:"iznutra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"visit",
	baseForm:"posjet",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"sell",
	baseForm:"prodati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bank",
	baseForm:"nasip",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"understand",
	baseForm:"razumjeti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"toilet  ; lavatory  ; lav  ; can  ; john  ; privy  ; bathroom",
	baseForm:"toalet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"complaint  ; charge",
	baseForm:"teret",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"region  ; part",
	baseForm:"oblast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"child  ; kid",
	baseForm:"dijete",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"chest  ; breast",
	baseForm:"grudi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"reason  ; ground",
	baseForm:"razlog",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"build  ; construct  ; make",
	baseForm:"sagraditi",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"easy",
	baseForm:"lagan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"service",
	baseForm:"usluga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"club  ; social club  ; society  ; guild  ; gild  ; lodge  ; order",
	baseForm:"klub",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"expect  ; look  ; await  ; wait",
	baseForm:"iščekivati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"training  ; preparation  ; grooming",
	baseForm:"obuka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"really  ; actually",
	baseForm:"stvarno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"piece",
	baseForm:"dio",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"refuse  ; reject  ; pass up  ; turn down  ; decline",
	baseForm:"odbiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"show  ; demo  ; exhibit  ; present  ; demonstrate",
	baseForm:"pokazati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"wait  ; hold off  ; hold back",
	baseForm:"čekati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"compare",
	baseForm:"uspoređivati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"happen  ; hap  ; go on  ; pass off  ; occur  ; pass  ; fall out  ; come about  ; take place",
	baseForm:"dogoditi se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"championship  ; title",
	baseForm:"prvenstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"team  ; squad",
	baseForm:"momčad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"golf  ; golf game",
	baseForm:"golf",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"type",
	baseForm:"tip",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"council",
	baseForm:"vijeće",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dangerous  ; unsafe",
	baseForm:"opasan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lie  ; prevarication",
	baseForm:"laž",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"singer  ; vocalist  ; vocalizer  ; vocaliser",
	baseForm:"pjevač",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"matter  ; affair  ; thing",
	baseForm:"sadržaj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"magazine  ; mag",
	baseForm:"časopis",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"study",
	baseForm:"studirati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"boring  ; deadening  ; dull  ; ho-hum  ; irksome  ; slow  ; tedious  ; tiresome  ; wearisome",
	baseForm:"dosadan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sometimes",
	baseForm:"ponekad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"desk",
	baseForm:"pisaći stol",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"dance  ; trip the light fantastic  ; trip the light fantastic toe",
	baseForm:"plesati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"lose",
	baseForm:"izgubiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"find  ; regain",
	baseForm:"naići na",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"neighbor  ; neighbour",
	baseForm:"susjed",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"receive  ; have",
	baseForm:"primiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"explain  ; explicate",
	baseForm:"objasniti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"economy  ; economic system",
	baseForm:"gospodarstvo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"now",
	baseForm:"sada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bedroom  ; sleeping room  ; sleeping accommodation  ; chamber  ; bedchamber",
	baseForm:"spavaća soba",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"decide  ; make up one's mind  ; determine",
	baseForm:"odrediti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"politician  ; politico  ; pol  ; political leader",
	baseForm:"političar",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"human",
	baseForm:"ljudski",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"describe  ; depict  ; draw",
	baseForm:"opisati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"menu  ; bill of fare  ; card  ; carte du jour  ; carte",
	baseForm:"meni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"international",
	baseForm:"internacionalni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"holiday  ; vacation",
	baseForm:"godišnji odmor",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"exist  ; be",
	baseForm:"postojati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"achieve  ; accomplish  ; attain  ; reach",
	baseForm:"postići",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"capital  ; working capital",
	baseForm:"kapital",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nurse",
	baseForm:"medicinska sestra",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"institution  ; establishment",
	baseForm:"institucija",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"break",
	baseForm:"polomiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"interesting",
	baseForm:"zanimljiv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hall  ; anteroom  ; antechamber  ; entrance hall  ; foyer  ; lobby  ; vestibule",
	baseForm:"predvorje hotela",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"friendly",
	baseForm:"prijateljski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"photographer  ; lensman",
	baseForm:"fotograf",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"twenty  ; 20  ; xx",
	baseForm:"dvadeset",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"practice",
	baseForm:"praksa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"real  ; existent",
	baseForm:"stvaran",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"world",
	baseForm:"svijet",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"follow",
	baseForm:"slijediti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"original",
	baseForm:"izvorno",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"stay  ; remain  ; rest",
	baseForm:"ostati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"painting  ; picture",
	baseForm:"slika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hot",
	baseForm:"topao",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"kill",
	baseForm:"ubiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hungry",
	baseForm:"gladan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"total  ; sum  ; amount",
	baseForm:"iznos",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"arrive  ; make it  ; get in  ; go far",
	baseForm:"stići",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"listen  ; hear  ; take heed",
	baseForm:"slušati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"never",
	baseForm:"nikad",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"surface",
	baseForm:"površina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"supermarket",
	baseForm:"velika samoposluga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"majority  ; bulk",
	baseForm:"većina",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"steal",
	baseForm:"krasti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"pay",
	baseForm:"platiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"contain  ; incorporate  ; comprise",
	baseForm:"sadržavati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"section  ; subdivision",
	baseForm:"odjeljenje",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"represent  ; stand for  ; correspond",
	baseForm:"predstavljati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"death  ; decease  ; expiry",
	baseForm:"smrt",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"forget",
	baseForm:"zaboraviti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"really  ; truly  ; genuinely",
	baseForm:"zaista",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"club",
	baseForm:"kijača",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"main  ; chief  ; primary  ; principal  ; master",
	baseForm:"vrhovni",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"thank  ; give thanks",
	baseForm:"zahvaliti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"argue  ; contend  ; debate  ; fence",
	baseForm:"svađati se",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"meet  ; run into  ; encounter  ; run across  ; come across  ; see",
	baseForm:"nabasati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"quickly  ; rapidly  ; speedily  ; chop-chop  ; apace",
	baseForm:"brzo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"union",
	baseForm:"savez",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"better",
	baseForm:"bolji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"period  ; time period  ; period of time",
	baseForm:"doba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"therefore  ; hence  ; thence  ; thus  ; so",
	baseForm:"zato",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"environment  ; environs  ; surroundings  ; surround",
	baseForm:"okolica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"nice",
	baseForm:"lijep",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"economic  ; economical",
	baseForm:"ekonomičan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"leader",
	baseForm:"vođa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"following  ; next",
	baseForm:"sljedeći",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"excellent  ; first-class  ; fantabulous  ; splendid",
	baseForm:"odličan",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"lie",
	baseForm:"ležati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"treat  ; care for",
	baseForm:"postupati s",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"save  ; preserve",
	baseForm:"spremiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"quiet  ; repose  ; placidity  ; serenity  ; tranquillity  ; tranquility",
	baseForm:"vedrina",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"continue  ; go on  ; proceed  ; go along  ; keep",
	baseForm:"nastavljati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ability  ; power",
	baseForm:"sposobnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"alive  ; live",
	baseForm:"živ",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"intelligent",
	baseForm:"inteligentan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"another  ; some other",
	baseForm:"drugi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sandwich",
	baseForm:"sendvič",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"responsibility  ; responsibleness",
	baseForm:"dužnost",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"be  ; live",
	baseForm:"živjeti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"jacket",
	baseForm:"jakna",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"learn  ; larn  ; acquire",
	baseForm:"učiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"campaign  ; cause  ; crusade  ; drive  ; movement  ; effort",
	baseForm:"ratni pohod",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"manage  ; deal  ; care  ; handle",
	baseForm:"upravljati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"national",
	baseForm:"narodni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"particularly  ; peculiarly  ; especially  ; specially",
	baseForm:"napose",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"staff",
	baseForm:"osoblje",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"win",
	baseForm:"pobijediti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"share",
	baseForm:"udio",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"surely  ; certainly  ; sure  ; for sure  ; for certain  ; sure enough  ; sure as shooting",
	baseForm:"zacijelo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"agree  ; hold  ; concur  ; concord",
	baseForm:"složiti se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"industrial",
	baseForm:"industrijski",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"wish",
	baseForm:"željeti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"break  ; respite  ; recess  ; time out",
	baseForm:"predah",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"carry  ; transport",
	baseForm:"nositi",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"difficulty",
	baseForm:"poteškoća",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"lose",
	baseForm:"izgubiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"university",
	baseForm:"sveučilište",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"once  ; one time  ; in one case",
	baseForm:"jednom",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hello  ; hullo  ; hi  ; howdy  ; how-do-you-do",
	baseForm:"zdravo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"many",
	baseForm:"mnogo",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"forgive",
	baseForm:"oprostiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"competitor  ; rival  ; challenger  ; competition  ; contender",
	baseForm:"natjecatelj",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"admit  ; acknowledge",
	baseForm:"priznati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"press",
	baseForm:"privinuti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"firm  ; house  ; business firm",
	baseForm:"tvrtka",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"enter  ; come in  ; get into  ; get in  ; go into  ; go in  ; move into",
	baseForm:"ući",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"discuss  ; hash out  ; talk over",
	baseForm:"raspravljati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"hear",
	baseForm:"saznati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"find  ; detect  ; observe  ; discover  ; notice",
	baseForm:"detektirati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"leave  ; leave of absence",
	baseForm:"dopust",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"legal",
	baseForm:"zakonit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"each",
	baseForm:"svaki",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"proposal",
	baseForm:"natječaj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"subway  ; metro  ; tube  ; underground  ; subway system",
	baseForm:"podzemna željeznica",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"supply  ; provide  ; render  ; furnish",
	baseForm:"opremiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"patient",
	baseForm:"strpljiv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"treatment  ; handling",
	baseForm:"liječenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"date  ; appointment  ; engagement",
	baseForm:"termin",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"reach  ; make  ; attain  ; hit  ; arrive at  ; gain",
	baseForm:"stići",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whole",
	baseForm:"cjelina",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"enhance  ; heighten  ; raise",
	baseForm:"poboljšati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"party",
	baseForm:"priredba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"risk  ; gamble  ; chance  ; hazard  ; take chances  ; adventure  ; run a risk  ; take a chance",
	baseForm:"dogoditi se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rise  ; rising  ; ascent  ; ascension",
	baseForm:"uspon",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"avoid",
	baseForm:"izbjegavati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"vogue  ; trend  ; style",
	baseForm:"moda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"various  ; diverse",
	baseForm:"raznolik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"behind",
	baseForm:"iza",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"actress",
	baseForm:"glumica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"economic",
	baseForm:"gospodarski",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"establish  ; found  ; plant  ; constitute  ; institute",
	baseForm:"utemeljiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"stylish  ; fashionable",
	baseForm:"po modi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"royal  ; imperial  ; majestic  ; purple  ; regal",
	baseForm:"kraljevski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"final  ; last  ; concluding  ; terminal",
	baseForm:"konačan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"football  ; football game",
	baseForm:"nogomet",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"weekend",
	baseForm:"vikend",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"issue",
	baseForm:"predmet",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"fill  ; fill up  ; make full",
	baseForm:"napuniti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"reflect  ; reverberate",
	baseForm:"odražavati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"alone  ; lone  ; lonely  ; solitary",
	baseForm:"sam",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"mention  ; advert  ; bring up  ; cite  ; name  ; refer",
	baseForm:"spomenuti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"allow  ; let  ; permit",
	baseForm:"propusnica",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"remove  ; take  ; take away  ; withdraw",
	baseForm:"ukloniti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"modern",
	baseForm:"moderan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"recently  ; late  ; lately  ; of late  ; latterly",
	baseForm:"nedavno",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"report",
	baseForm:"izvijestiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"single  ; unmarried",
	baseForm:"neoženjen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bring  ; convey  ; take",
	baseForm:"dovesti do",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"specific",
	baseForm:"specifičan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"personal",
	baseForm:"osobno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ugly",
	baseForm:"ružan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"finish  ; goal  ; destination",
	baseForm:"odredište",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"user",
	baseForm:"korisnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"successful",
	baseForm:"uspješan",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"raise  ; rear  ; bring up  ; nurture  ; parent",
	baseForm:"odgojiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"single",
	baseForm:"jedan jedini",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"situation  ; state of affairs",
	baseForm:"stanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"goal",
	baseForm:"gol",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"reveal  ; unwrap  ; disclose  ; let on  ; bring out  ; discover  ; expose  ; divulge  ; break  ; give away  ; let out",
	baseForm:"otkriti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"problem  ; job",
	baseForm:"poteškoća",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"environment",
	baseForm:"okoliš",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"return  ; homecoming",
	baseForm:"povratak",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"stand  ; stand up",
	baseForm:"stajati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"trace  ; draw  ; line  ; describe  ; delineate",
	baseForm:"crtati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"impatient",
	baseForm:"nestrpljiv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"relationship  ; human relationship",
	baseForm:"odnos",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hit  ; hitting  ; striking",
	baseForm:"udarac",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"bear",
	baseForm:"nositi",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"spelling",
	baseForm:"sricanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"marry  ; get married  ; wed  ; conjoin  ; hook up with  ; get hitched with  ; espouse",
	baseForm:"oženiti se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"third  ; 3rd  ; tertiary",
	baseForm:"treći",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"mean  ; intend  ; think",
	baseForm:"kaniti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"activity  ; action  ; activeness",
	baseForm:"aktivnost",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bag  ; handbag  ; pocketbook  ; purse",
	baseForm:"torba",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"save  ; salvage  ; salve  ; relieve",
	baseForm:"spasiti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"accuse  ; charge",
	baseForm:"optužiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"character  ; grapheme  ; graphic symbol",
	baseForm:"slovo",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"grow",
	baseForm:"rasti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"diversity  ; diverseness  ; multifariousness  ; variety",
	baseForm:"raznovrsnost",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"reduce  ; cut down  ; cut back  ; trim  ; trim down  ; trim back  ; cut  ; bring down",
	baseForm:"smanjiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thirsty",
	baseForm:"žedan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"project  ; undertaking  ; task  ; labor",
	baseForm:"zadatak",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"identify  ; place",
	baseForm:"identificirati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"obviously  ; evidently  ; manifestly  ; patently  ; apparently  ; plainly  ; plain",
	baseForm:"očito",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"best",
	baseForm:"najbolji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"feature  ; characteristic",
	baseForm:"značajka",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"do  ; practice  ; practise  ; exercise",
	baseForm:"uvježbati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"businessman  ; man of affairs",
	baseForm:"poslovan čovjek",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tonight  ; this evening  ; this night",
	baseForm:"večeras",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"show",
	baseForm:"predstava",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"defense  ; defence  ; defense force  ; defence force",
	baseForm:"obrana",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ago  ; agone",
	baseForm:"prošao",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"boyfriend  ; fellow  ; beau  ; swain  ; young man",
	baseForm:"dečko",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"load  ; charge",
	baseForm:"napuniti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"duty",
	baseForm:"dužnost",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"wear  ; have on",
	baseForm:"nositi",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pink  ; pinkish",
	baseForm:"ružičast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"central",
	baseForm:"središnji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"result  ; resultant  ; final result  ; outcome  ; termination",
	baseForm:"ishod",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"announce  ; denote",
	baseForm:"najaviti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"throw",
	baseForm:"bacanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"professional  ; professional person",
	baseForm:"profesionalac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"few",
	baseForm:"malo njih",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"tomato",
	baseForm:"rajčica",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"prevent  ; forestall  ; foreclose  ; preclude  ; forbid",
	baseForm:"spriječiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"girlfriend  ; girl  ; lady friend",
	baseForm:"djevojka",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"believe",
	baseForm:"vjerovati",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"choose  ; take  ; select  ; pick out",
	baseForm:"izabrati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"couple  ; pair  ; twosome  ; twain  ; brace  ; span  ; yoke  ; couplet  ; distich  ; duo  ; duet  ; dyad  ; duad",
	baseForm:"dvoje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"menstruation  ; menses  ; menstruum  ; catamenia  ; period  ; flow",
	baseForm:"mjesečnica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"television  ; tv set  ; television receiver  ; television set  ; tv  ; idiot box  ; boob tube  ; telly  ; goggle box",
	baseForm:"televizor",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bathroom  ; bath",
	baseForm:"kupaonica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"develop",
	baseForm:"razviti fotografski film",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"restaurant  ; eating house  ; eating place  ; eatery",
	baseForm:"restoran",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"spend  ; pass",
	baseForm:"provesti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"effort  ; elbow grease  ; exertion  ; travail  ; sweat",
	baseForm:"trud",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sincere",
	baseForm:"istinski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"slice  ; piece",
	baseForm:"komadić",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"private  ; individual",
	baseForm:"osoban",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whole",
	baseForm:"čitav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mean  ; mean value",
	baseForm:"sredina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lucky",
	baseForm:"sretan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"suitcase  ; bag  ; traveling bag  ; travelling bag  ; grip",
	baseForm:"ručni kovčeg",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"basic",
	baseForm:"osnovan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"see  ; consider  ; reckon  ; view  ; regard",
	baseForm:"držati za",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"violet  ; purple  ; purplish",
	baseForm:"ljubičast",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"available",
	baseForm:"dostupan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"officer  ; officeholder",
	baseForm:"javni službenik",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"hold  ; take hold",
	baseForm:"držati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"production",
	baseForm:"proizvodnja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"area  ; expanse  ; surface area",
	baseForm:"površina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"win",
	baseForm:"pobjeda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"unemployed",
	baseForm:"nezaposlen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"public",
	baseForm:"javno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"course  ; class  ; course of study  ; course of instruction",
	baseForm:"razred",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"standard",
	baseForm:"standardan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"similar",
	baseForm:"slično",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"popular  ; pop",
	baseForm:"razumljiva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"scientist",
	baseForm:"znanstvenik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"outside",
	baseForm:"napolju",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"local",
	baseForm:"mjesni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"language  ; natural language  ; tongue",
	baseForm:"jezik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"award  ; accolade  ; honor  ; honour  ; laurels",
	baseForm:"odlikovanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"state",
	baseForm:"stanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"set",
	baseForm:"komplet",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"part  ; share  ; portion  ; percentage",
	baseForm:"dijeliti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"drive",
	baseForm:"voziti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bargain  ; deal",
	baseForm:"pogodba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"sink",
	baseForm:"slivnik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"either",
	baseForm:"oba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"option  ; alternative  ; choice",
	baseForm:"alternativa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"unusual",
	baseForm:"neobičan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"finally  ; last  ; lastly  ; in conclusion",
	baseForm:"konačno",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"research  ; inquiry  ; enquiry",
	baseForm:"istraga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"evidence",
	baseForm:"dokaz",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"recent",
	baseForm:"posljednji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"about  ; around",
	baseForm:"okolo",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"express  ; limited",
	baseForm:"brzi vlak",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"die  ; decease  ; perish  ; go  ; exit  ; pass away  ; expire  ; pass  ; kick the bucket  ; cash in one's chips  ; buy the farm  ; conk  ; give-up the ghost  ; drop dead  ; pop off  ; choke  ; croak  ; snuff it",
	baseForm:"umrijeti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"attitude  ; mental attitude",
	baseForm:"stav",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"former  ; erstwhile  ; old  ; onetime  ; one-time  ; quondam  ; sometime",
	baseForm:"prošli",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"financial  ; fiscal",
	baseForm:"financijski",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"skill  ; science",
	baseForm:"spretnost",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"leave",
	baseForm:"ostaviti",
	class:1,
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"lie",
	baseForm:"lagati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"major",
	baseForm:"velik",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"render  ; return",
	baseForm:"vratiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"remember  ; retrieve  ; recall  ; call back  ; call up  ; recollect  ; think",
	baseForm:"sjetiti se",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"usual",
	baseForm:"uobičajen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"report  ; study  ; written report",
	baseForm:"izvješće",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"parent",
	baseForm:"roditelj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"usually  ; normally  ; unremarkably  ; commonly  ; ordinarily",
	baseForm:"obično",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"weigh",
	baseForm:"težiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"title  ; entitle",
	baseForm:"dati ime",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"set  ; laid",
	baseForm:"ustaljen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mean  ; hateful",
	baseForm:"namjeran",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"pass  ; hand  ; reach  ; pass on  ; turn over  ; give",
	baseForm:"predati",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"important  ; significant",
	baseForm:"važan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"president",
	baseForm:"predsjednik",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"along",
	baseForm:"duž",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"mostly  ; by and large  ; generally  ; more often than not",
	baseForm:"obično",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"particular",
	baseForm:"poseban",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"publish  ; bring out  ; put out  ; issue  ; release",
	baseForm:"objaviti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"own  ; ain",
	baseForm:"vlastit",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"good  ; just  ; upright",
	baseForm:"pošten",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"include",
	baseForm:"uključiti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"further  ; farther",
	baseForm:"dalje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"least  ; to the lowest degree",
	baseForm:"najmanje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"indeed  ; so",
	baseForm:"zaista",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"instead  ; alternatively  ; or else",
	baseForm:"umjesto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"hit  ; smash  ; smasher  ; strike  ; bang",
	baseForm:"pogodak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"call  ; phone call  ; telephone call",
	baseForm:"poziv",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"discover  ; find",
	baseForm:"otkriti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"function  ; office  ; part  ; role",
	baseForm:"funkcija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"image",
	baseForm:"glas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"individual",
	baseForm:"pojedinac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"member  ; fellow member",
	baseForm:"član",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"encourage",
	baseForm:"ohrabriti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"several",
	baseForm:"nekoliko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"against",
	baseForm:"protiv",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"among  ; amongst  ; amid  ; amidst",
	baseForm:"između",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"and",
	baseForm:"i",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"anyone",
	baseForm:"bilo tko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"because",
	baseForm:"budući da  ; jer",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"beside",
	baseForm:"pokraj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"during",
	baseForm:"za vrijeme",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"everybody  ; everyone",
	baseForm:"svatko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"everything",
	baseForm:"sve",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"for",
	baseForm:"zbog",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"for",
	baseForm:"za",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"from",
	baseForm:"od",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"her",
	baseForm:"njen",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"herself",
	baseForm:"se  ; sebe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"him",
	baseForm:"mu  ; njemu",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"himself",
	baseForm:"se  ; sebe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"his",
	baseForm:"njegov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"if",
	baseForm:"ako",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"into",
	baseForm:"u",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"it",
	baseForm:"to",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"itself",
	baseForm:"se  ; sebe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"me",
	baseForm:"mene",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"my",
	baseForm:"moj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"of",
	baseForm:"od",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"or",
	baseForm:"ili",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"our",
	baseForm:"naš",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"she",
	baseForm:"ona",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"since",
	baseForm:"od",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"than",
	baseForm:"nego",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"their",
	baseForm:"njihov",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"them",
	baseForm:"ih  ; njih",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"these",
	baseForm:"ovi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"they",
	baseForm:"oni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"this",
	baseForm:"ovaj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"those",
	baseForm:"oni",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"to",
	baseForm:"u",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"until",
	baseForm:"do  ; sve dok",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"us",
	baseForm:"nas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"we",
	baseForm:"mi",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"what",
	baseForm:"što",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"when",
	baseForm:"kada",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whenever",
	baseForm:"uvijek",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"which",
	baseForm:"koji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"who",
	baseForm:"tko",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whom",
	baseForm:"kome",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"whose",
	baseForm:"čiji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"with",
	baseForm:"s",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"without",
	baseForm:"bez",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"you",
	baseForm:"ti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"your",
	baseForm:"tvoj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"yourself",
	baseForm:"se  ; sebe",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"that",
	baseForm:"onaj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"the",
	baseForm:"taj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"at",
	baseForm:"u",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"why",
	baseForm:"zašto",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"on",
	baseForm:"na",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"he",
	baseForm:"on",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"a  ; an",
	baseForm:"neki",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"anything",
	baseForm:"bilo što  ; išta",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thunder",
	baseForm:"grmljavina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"September  ; Sep  ; Sept",
	baseForm:"Rujan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"May",
	baseForm:"svibanj",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"Tuesday  ; Tues",
	baseForm:"Utorak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"August  ; Aug",
	baseForm:"kolovoz",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lemon",
	baseForm:"limun",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ecology  ; bionomics  ; environmental science",
	baseForm:"ekologija",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"storm  ; violent storm",
	baseForm:"oluja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"carrot  ; cultivated carrot  ; Daucus carota sativa",
	baseForm:"mrkva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"how are you",
	baseForm:"kako si",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"on",
	baseForm:"na",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"from",
	baseForm:"od",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"you're welcome",
	baseForm:"nema na čemu",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"I don't know",
	baseForm:"ne znam",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cheers",
	baseForm:"uzdravlje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"at",
	baseForm:"u",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"many thanks",
	baseForm:"puno hvala",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"good day",
	baseForm:"dobar dan",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"thank you very much",
	baseForm:"hvala lijepa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"which",
	baseForm:"koji",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"with",
	baseForm:"s",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"garlic  ; ail",
	baseForm:"češnjak",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rainbow",
	baseForm:"duga",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"plum",
	baseForm:"šljiva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"onion  ; onion plant  ; Allium cepa",
	baseForm:"luk",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cucumber  ; cuke",
	baseForm:"krastavac",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"bean  ; edible bean",
	baseForm:"grah",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"strawberry",
	baseForm:"jagoda",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"peach",
	baseForm:"breskva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"banana",
	baseForm:"banana",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"raspberry",
	baseForm:"malina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cabbage  ; chou",
	baseForm:"kupus",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"rich",
	baseForm:"bogat",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"lightning",
	baseForm:"munja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"weak",
	baseForm:"slab",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"apricot",
	baseForm:"marelica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pear",
	baseForm:"kruške",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"ozone",
	baseForm:"vrsta kisika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"dew",
	baseForm:"rosa",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"olive",
	baseForm:"maslina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"atmosphere  ; air",
	baseForm:"atmosfera",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pollution",
	baseForm:"zagađenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"pineapple  ; ananas",
	baseForm:"ananas",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"cherry",
	baseForm:"trešnja",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"global warming",
	baseForm:"globalno zatopljenje",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"greenhouse effect  ; greenhouse warming",
	baseForm:"efekt staklenika",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"recycling",
	baseForm:"oporaba",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"frost  ; hoar  ; hoarfrost  ; rime",
	baseForm:"mraz",
	rnd : Math.random()
      });


      Verbs.insert({    
	english:"hide  ; conceal",
	baseForm:"prikriti",
	class:1,
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"radish",
	baseForm:"rotkvica",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"acid rain  ; acid precipitation",
	baseForm:"kisela kiša",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fog",
	baseForm:"magla",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"fossil fuel",
	baseForm:"fosilna goriva",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"smog  ; smogginess",
	baseForm:"smog",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"blackberry",
	baseForm:"kupina",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"climate change  ; global climate change",
	baseForm:"klimatske promjene",
	rnd : Math.random()
      });

			      
      Nouns.insert({    
	english:"parsnip  ; Pastinaca sativa",
	baseForm:"korijen",
	rnd : Math.random()
      });


    }
});

// Auto configure FB integration server side
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});

ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "820265274656879",
  secret: "6334c88ce31bd78b4fadbbbf13793736"
});

// Support for playing D&D: Roll 3d6 for dexterity
Accounts.onCreateUser(function(options, user) {
  
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  
  user.profile.stats = {
    verbs: {
      t: 0,
      f: 0
    },
    nouns: {
      t: 0,
      f: 0
    },
    adjectives: {
      t: 0,
      f: 0
    },
    score: 0
  }
  
  return user;
});


Meteor.publish("verbs", function () {
  return Verbs.find({});
});

Meteor.publish("nouns", function () {
  return Nouns.find({});
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},{fields: {'profile': 1}});
});

Meteor.publish("playerScores", function () {
  return Meteor.users.find({},{fields: {'profile.name' : 1, 'profile.stats': 1}});
});

