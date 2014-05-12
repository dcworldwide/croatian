Meteor.startup(function () {

    var rebuildDb = false;

    if (rebuildDb || Words.find().count() === 0) {

        // Temporarily build up datasource via server code
        Words.remove({});

        Words.insert({ rnd: Math.random(), type: "v", english: "answer", baseForm: "javiti se", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "call", baseForm: "nasvati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "clean", baseForm: "cistiti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "do/work", baseForm: "raditi", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "drink", baseForm: "piti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "drink", baseForm: "popiti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "eat", baseForm: "jesti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "give", baseForm: "dobiti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "go", baseForm: "ici", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "go", baseForm: "otici", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "leave", baseForm: "ostaviti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "must", baseForm: "morati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "need", baseForm: "trebati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "play", baseForm: "igrati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "prepare", baseForm: "preprimati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "read", baseForm: "citati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "repeat", baseForm: "ponoviti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "take", baseForm: "uzeti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "talk", baseForm: "razgovariti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "think", baseForm: "misliti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "want", baseForm: "zeliti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "write", baseForm: "pisati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "accept, take, have", baseForm: "prihvatiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "accuse, charge", baseForm: "optužiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "act, move", baseForm: "djelovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "admit, acknowledge", baseForm: "priznati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "announce, denote", baseForm: "najaviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "ask, inquire, enquire", baseForm: "pitati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "avoid", baseForm: "izbjegavati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "be", baseForm: "biti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "be born", baseForm: "rodjati?", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "be, live", baseForm: "živjeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "bear", baseForm: "nositi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "beat, beat out, crush, shell, trounce, vanquish", baseForm: "pobijediti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "become, go, get", baseForm: "postati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "believe", baseForm: "vjerovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "break", baseForm: "polomiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "build, construct, make", baseForm: "sagraditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "buy, purchase", baseForm: "kupiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "call, telephone, call up, phone, ring", baseForm: "nazvati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "carry, transport", baseForm: "nositi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "change, alter, modify", baseForm: "promijeniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "choose, take, select, pick out", baseForm: "izabrati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "classify, class, sort, assort, sort out, separate", baseForm: "klasificirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "close, shut", baseForm: "zatvoriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "compare", baseForm: "uspoređivati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "contain, incorporate, comprise", baseForm: "sadržavati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "continue, go on, proceed, go along, keep", baseForm: "nastavljati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "cook", baseForm: "kuhati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "copy, reCreate", baseForm: "kopirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "cry, weep", baseForm: "plakati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "cut", baseForm: "rezati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "dance, trip the light fantastic, trip the light fantastic toe", baseForm: "plesati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "decide, make up one's mind, determine", baseForm: "odrediti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "describe, depict, draw", baseForm: "opisati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "desire, want", baseForm: "željeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "die, decease, perish, go, exit, pass away, expire, pass, kick the bucket, cash in one's chips, buy the farm, conk, giveUp the ghost, drop dead, pop off, choke, croak, snuff it", baseForm: "umrijeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "discover, find", baseForm: "otkriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "discuss, hash out, talk over", baseForm: "raspravljati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "do, practice, practise, exercise", baseForm: "uvježbati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "doubt", baseForm: "sumnjati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "drink, imbibe", baseForm: "piti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "drive", baseForm: "voziti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "eat", baseForm: "jesti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "embrace, encompass, comprehend, cover", baseForm: "obuhvatiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "encourage", baseForm: "ohrabriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "end, stop, finish, terminate, cease", baseForm: "završiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "enhance, heighten, raise", baseForm: "poboljšati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "establish, found, plant, constitute, institute", baseForm: "utemeljiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "estimate, gauge, approximate, guess, judge", baseForm: "ocijeniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "exceed, transcend, overstep, pass, go past, top", baseForm: "nadmašiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "exist, be", baseForm: "postojati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "expect, look, await, wait", baseForm: "iščekivati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "explain, explicate", baseForm: "objasniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "fall", baseForm: "pasti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "fill, fill up, make full", baseForm: "napuniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "find, detect, observe, discover, notice", baseForm: "detektirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "fire, open fire", baseForm: "pucati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "fly", baseForm: "letjeti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "fly, wing", baseForm: "letjeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "follow", baseForm: "slijediti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "forget", baseForm: "zaboraviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "forgive", baseForm: "oprostiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "free, liberate, release, unloose, unloosen, loose", baseForm: "osloboditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "give", baseForm: "dati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "give my regards", baseForm: "pozdraviti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "grow", baseForm: "rasti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "hate, detest", baseForm: "mrziti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "have", baseForm: "imati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "have breakfast", baseForm: "doruckovati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "have dinner", baseForm: "vecerati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "have lunch", baseForm: "rucati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "hear", baseForm: "saznati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "hide, conceal", baseForm: "prikriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "hold, take hold", baseForm: "držati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "identify, place", baseForm: "identificirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "include", baseForm: "uključiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "injure, wound", baseForm: "raniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "introduce", baseForm: "upoznati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "introduce, present, acquaint", baseForm: "predstaviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "join, bring together", baseForm: "spojiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "jump, leap, bound, spring", baseForm: "skakati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "kill", baseForm: "ubiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "kind of know", baseForm: "poznati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "kiss, snog, buss, osculate", baseForm: "poljubiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "learn, larn, acquire", baseForm: "učiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "leave", baseForm: "ostaviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "let", baseForm: "dopustiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "let/allow me", baseForm: "dopusti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "lie", baseForm: "ležati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "like/love", baseForm: "voliti", class: 3 });

        Words.insert({ rnd: Math.random(), type: "v", english: "limit, restrict, restrain, trammel, bound, confine, throttle", baseForm: "ograničiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "listen", baseForm: "slusati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "listen, hear, take heed", baseForm: "slušati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "load, charge", baseForm: "napuniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "look", baseForm: "gledati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "look, appear, seem", baseForm: "izgledati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "lose", baseForm: "izgubiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "lose", baseForm: "izgubiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "love", baseForm: "voljeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "make a phone call", baseForm: "telefonirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "manage, deal, care, handle", baseForm: "upravljati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "mean, intend, think", baseForm: "kaniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "measure, mensurate, measure out", baseForm: "mjeriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "meet", baseForm: "sresti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "meet, run into, encounter, run across, come across, see", baseForm: "nabasati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "mention, advert, bring up, cite, name, refer", baseForm: "spomenuti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "mistake, error, fault", baseForm: "pogriješiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "move, displace", baseForm: "micati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "name, call", baseForm: "zvati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "need, necessitate, ask, postulate, require, take, involve, call for, demand", baseForm: "zahtijevati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "nine, 9, ix", baseForm: "deveti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "not, non", baseForm: "nemati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "offer", baseForm: "ponuditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "open, open up", baseForm: "otvoriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "own, have, possess", baseForm: "posjedovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "part, share, portion, percentage", baseForm: "dijeliti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "pass, hand, reach, pass on, turn over, give", baseForm: "predati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "pay", baseForm: "platiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "peel, skin, pare", baseForm: "ljuštiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "play", baseForm: "igrati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "poison", baseForm: "otrovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "prepare, fix, set up, ready, gear up, set", baseForm: "pripremiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "press", baseForm: "privinuti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "prevent, forestall, foreclose, preclude, forbid", baseForm: "spriječiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "print, impress", baseForm: "štampati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "process, treat", baseForm: "obraditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "publish, bring out, put out, issue, release", baseForm: "objaviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "put, set, place, pose, position, lay", baseForm: "položiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "raise, rear, bring up, nurture, parent", baseForm: "odgojiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "rate, rank, range, order, grade, place", baseForm: "procijeniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "read", baseForm: "čitati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "receive, have", baseForm: "primiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "record, tape", baseForm: "snimiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "reduce, cut down, cut back, trim, trim down, trim back, cut, bring down", baseForm: "smanjiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "reflect, reverberate", baseForm: "odražavati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "refuse, reject, pass up, turn down, decline", baseForm: "odbiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "remove, take, take away, withdraw", baseForm: "ukloniti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "render, return", baseForm: "vratiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "reply, answer, respond", baseForm: "odgovoriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "report", baseForm: "izvijestiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "represent, stand for, correspond", baseForm: "predstavljati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "request, bespeak, call for, quest", baseForm: "zamoliti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "respect, honor, honour, abide by, observe", baseForm: "poštivati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "reveal, unwrap, disclose, let on, bring out, discover, expose, divulge, break, give away, let out", baseForm: "otkriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "rule, govern", baseForm: "voditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "same", baseForm: "isti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "save, preserve", baseForm: "spremiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "save, salvage, salve, relieve", baseForm: "spasiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "see", baseForm: "vidjeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "sell", baseForm: "prodati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "send, mail, post", baseForm: "slati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "sew, run up, sew together, stitch", baseForm: "sašiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "shout, shout out, cry, call, yell, scream, holler, hollo, squall", baseForm: "vikati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "show, demo, exhibit, present, demonstrate", baseForm: "pokazati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "sing", baseForm: "pjevati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "sit, sit down", baseForm: "posjesti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "speak", baseForm: "govoriti", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "spend, pass", baseForm: "provesti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "stand, stand up", baseForm: "stajati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "stay, remain, rest", baseForm: "ostati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "steal", baseForm: "krasti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "stop, halt", baseForm: "zaustaviti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "study", baseForm: "studirati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "suggest, propose, advise", baseForm: "predlagati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "supply, provide, render, furnish", baseForm: "opremiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "support, back up", baseForm: "poduprijeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "surprise", baseForm: "iznenaditi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "survive, last, live, live on, go, endure, hold up, hold out", baseForm: "potrajati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "take, get hold of", baseForm: "uzeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "talk, speak, utter, mouth, verbalize, verbalise", baseForm: "govoriti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "taste, savor, savour", baseForm: "okusiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "teach, learn, instruct", baseForm: "učiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "test, prove, try, try out, examine, essay", baseForm: "ispitati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "thank, give thanks", baseForm: "zahvaliti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "throw", baseForm: "baciti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "trace, draw, line, describe, delineate", baseForm: "crtati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "trade, merchandise", baseForm: "trgovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "train, develop, prepare, educate", baseForm: "obrazovati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "travel, go, move, locomote", baseForm: "hodati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "turn", baseForm: "okrenuti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "understand", baseForm: "razumjeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "use, utilize, utilise, apply, employ", baseForm: "koristiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "visit, see", baseForm: "posjetiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "wait, hold off, hold back", baseForm: "čekati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "walk", baseForm: "hodati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "wash, launder", baseForm: "prati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "watch", baseForm: "gledati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "watch, see, view, catch, take in", baseForm: "promatrati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "wear, have on", baseForm: "nositi", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "weigh", baseForm: "težiti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "win", baseForm: "pobijediti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "wish", baseForm: "željeti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "write", baseForm: "pisati", class: 1 });

        Words.insert({ rnd: Math.random(), type: "v", english: "write down", baseForm: "zapisati", class: 4 });

        Words.insert({ rnd: Math.random(), type: "v", english: "you", baseForm: "ti", class: 1 });

        Words.insert({ rnd: Math.random(), type: "n", english: "april, apr", baseForm: "travanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "august, aug", baseForm: "kolovoz" });

        Words.insert({ rnd: Math.random(), type: "n", english: "china, people's republic of china, mainland china, communist china, red china, prc, cathay", baseForm: "kina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "czech republic", baseForm: "češka republika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "december, dec", baseForm: "prosinac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "earth, earth, world, globe", baseForm: "zemlja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "english, english language", baseForm: "engleski jezik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "february, feb", baseForm: "veljača" });

        Words.insert({ rnd: Math.random(), type: "n", english: "france, french republic", baseForm: "francuska republika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "friday, fri", baseForm: "petak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "german, high german, german language", baseForm: "german" });

        Words.insert({ rnd: Math.random(), type: "n", english: "germany, federal republic of germany, deutschland, frg", baseForm: "savezna republika njemačka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hindi", baseForm: "hindski jezik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "i don't know", baseForm: "ne znam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "india, republic of india, bharat", baseForm: "republika indija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "italy, italian republic, italia", baseForm: "italija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "january, jan", baseForm: "siječanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "japan, nippon, nihon", baseForm: "japan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "july", baseForm: "srpanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "june", baseForm: "lipanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "may", baseForm: "svibanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "monday, mon", baseForm: "ponedjeljak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "moon, moon", baseForm: "prirodni satelit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "november, nov", baseForm: "studeni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "october, oct", baseForm: "listopad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "saturday, sabbatum, sat", baseForm: "subota" });

        Words.insert({ rnd: Math.random(), type: "n", english: "september, sep, sept", baseForm: "rujan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spain, kingdom of spain, espana", baseForm: "kraljevina španjolska" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sunday, lord's day, dominicus, sun", baseForm: "nedjelja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thursday, th", baseForm: "četvrtak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tuesday, tues", baseForm: "utorak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "united kingdom, uk, u.k., britain, united kingdom of great britain and northern ireland, great britain", baseForm: "britanija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "united states, united states of america, america, the states, us, u.s., usa, u.s.a.", baseForm: "sad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wednesday, midweek, wed", baseForm: "srijeda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "a, an", baseForm: "neki" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ability, power", baseForm: "sposobnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "able", baseForm: "sposoban" });

        Words.insert({ rnd: Math.random(), type: "n", english: "about, around", baseForm: "okolo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "above, higher up, in a higher place, to a higher place", baseForm: "iznad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "accident", baseForm: "nesreća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "account, business relationship", baseForm: "račun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "achieve, accomplish, attain, reach", baseForm: "postići" });

        Words.insert({ rnd: Math.random(), type: "n", english: "acid", baseForm: "kiselina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "acid rain, acid precipitation", baseForm: "kisela kiša" });

        Words.insert({ rnd: Math.random(), type: "n", english: "act, deed, human action, human activity", baseForm: "čin" });

        Words.insert({ rnd: Math.random(), type: "n", english: "activity, action, activeness", baseForm: "aktivnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "actor, histrion, player, thespian, role player", baseForm: "glumac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "actress", baseForm: "glumica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "addition, addOn, improver", baseForm: "dodatak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "addition, summation, plus", baseForm: "dodavanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "address", baseForm: "adresa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "advantage, vantage", baseForm: "prednost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "advertisement, ad, advertizement, advertising, advertizing, advert", baseForm: "oglas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "advice", baseForm: "savjet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "afternoon", baseForm: "poslije podne" });

        Words.insert({ rnd: Math.random(), type: "n", english: "again, once again, once more, over again", baseForm: "opet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "against", baseForm: "protiv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "age", baseForm: "starost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ago, agone", baseForm: "prošao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "agree, hold, concur, concord", baseForm: "složiti se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "agreement, understanding", baseForm: "ugovor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "air", baseForm: "zrak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "airport, airdrome, aerodrome, drome", baseForm: "uzletište" });

        Words.insert({ rnd: Math.random(), type: "n", english: "alive, live", baseForm: "živ" });

        Words.insert({ rnd: Math.random(), type: "n", english: "all", baseForm: "sve" });

        Words.insert({ rnd: Math.random(), type: "n", english: "allow, let, permit", baseForm: "propusnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "almost, about, most, nearly, near, nigh, virtually, wellNigh", baseForm: "skoro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "alone, lone, lonely, solitary", baseForm: "sam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "along", baseForm: "duž" });

        Words.insert({ rnd: Math.random(), type: "n", english: "already", baseForm: "već" });

        Words.insert({ rnd: Math.random(), type: "n", english: "always, ever, e'er", baseForm: "uvijek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "among, amongst, amid, amidst", baseForm: "između" });

        Words.insert({ rnd: Math.random(), type: "n", english: "amount", baseForm: "količina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "and", baseForm: "i" });

        Words.insert({ rnd: Math.random(), type: "n", english: "angle", baseForm: "kut" });

        Words.insert({ rnd: Math.random(), type: "n", english: "animal, animate being, beast, brute, creature, fauna", baseForm: "životinja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "announcement, proclamation, annunciation, declaration", baseForm: "najava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "another, some other", baseForm: "drugi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "answer, reply, response", baseForm: "odgovor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ant, emmet, pismire", baseForm: "mrav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "any, whatever, whatsoever", baseForm: "neki" });

        Words.insert({ rnd: Math.random(), type: "n", english: "anyone", baseForm: "bilo tko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "anything", baseForm: "bilo što, išta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "apple", baseForm: "jabuka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "approval, blessing, approving", baseForm: "odobrenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "approximately, about, close to, just about, some, roughly, more or less, around, or so", baseForm: "približno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "apricot", baseForm: "marelica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "area, expanse, surface area", baseForm: "površina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "argue, contend, debate, fence", baseForm: "svađati se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "argument, controversy, contention, contestation, disputation, disceptation, tilt, arguing", baseForm: "svađa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "argument, statement", baseForm: "argument" });

        Words.insert({ rnd: Math.random(), type: "n", english: "arm", baseForm: "ruka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "army, regular army, ground forces", baseForm: "vojska" });

        Words.insert({ rnd: Math.random(), type: "n", english: "arrive, make it, get in, go far", baseForm: "stići" });

        Words.insert({ rnd: Math.random(), type: "n", english: "art, fine art", baseForm: "umjetnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "artist, creative person", baseForm: "umjetnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "at", baseForm: "u" });

        Words.insert({ rnd: Math.random(), type: "n", english: "at", baseForm: "u" });

        Words.insert({ rnd: Math.random(), type: "n", english: "atmosphere, air", baseForm: "atmosfera" });

        Words.insert({ rnd: Math.random(), type: "n", english: "attack, assail, assault, set on", baseForm: "napad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "attack, onslaught, onset, onrush", baseForm: "napad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "attempt, effort, endeavor, endeavour, try", baseForm: "pokušaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "attention, attending", baseForm: "pozor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "attitude, mental attitude", baseForm: "stav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "authority, authorization, authorisation, potency, dominance, saySo", baseForm: "ovlaštenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "automatic", baseForm: "automatski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "autumn, fall", baseForm: "jesen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "available", baseForm: "dostupan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "awake", baseForm: "budan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "award, accolade, honor, honour, laurels", baseForm: "odlikovanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "baby, babe, infant", baseForm: "beba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "back", baseForm: "stražnji dio" });

        Words.insert({ rnd: Math.random(), type: "n", english: "back, dorsum", baseForm: "leđa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bad", baseForm: "slab" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bag, handbag, pocketbook, purse", baseForm: "torba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "balance", baseForm: "uravnoteženost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ball", baseForm: "lopta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "banana", baseForm: "banana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "band, dance band, dance orchestra", baseForm: "glazbena skupina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bank", baseForm: "nasip" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bank, depository financial institution, banking concern, banking company", baseForm: "banka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "banknote, bill, note, government note, bank bill, banker's bill, bank note, federal reserve note, greenback", baseForm: "novčanica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bargain, deal", baseForm: "pogodba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "base, base of operations", baseForm: "osnova" });

        Words.insert({ rnd: Math.random(), type: "n", english: "baseball, baseball game", baseForm: "bejzbol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "basic", baseForm: "osnovan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "basket, handbasket", baseForm: "košara" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bathroom, bath", baseForm: "kupaonica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beach", baseForm: "plaža" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beak, bill, neb, nib, pecker", baseForm: "kljun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bean, edible bean", baseForm: "grah" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bear", baseForm: "medvjed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beautiful", baseForm: "lijep" });

        Words.insert({ rnd: Math.random(), type: "n", english: "because", baseForm: "budući da, jer" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bed", baseForm: "krevet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bedroom, sleeping room, sleeping accommodation, chamber, bedchamber", baseForm: "spavaća soba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bee", baseForm: "pčela" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beer", baseForm: "pivo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beginning, commencement, first, outset, getGo, start, kickoff, starting time, showtime, offset", baseForm: "početak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "behavior, demeanor, demeanour, behaviour, conduct, deportment", baseForm: "način ponašanja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "behind", baseForm: "iza" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bell", baseForm: "zvono" });

        Words.insert({ rnd: Math.random(), type: "n", english: "beside", baseForm: "pokraj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "best", baseForm: "najbolji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "better", baseForm: "bolji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "between, betwixt", baseForm: "između" });

        Words.insert({ rnd: Math.random(), type: "n", english: "big, large", baseForm: "velik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bike, bicycle, wheel, cycle", baseForm: "bicikl" });

        Words.insert({ rnd: Math.random(), type: "n", english: "biology, biological science", baseForm: "biologija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bird", baseForm: "ptica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "birth, nativity, nascency, nascence", baseForm: "rođenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "birthday", baseForm: "rođendan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bit, chip, flake, fleck, scrap", baseForm: "komadić" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bitter", baseForm: "gorak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "black", baseForm: "crn" });

        Words.insert({ rnd: Math.random(), type: "n", english: "blackberry", baseForm: "kupina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "blade", baseForm: "oštrica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "blood", baseForm: "krv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "blow", baseForm: "udarac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "blue, bluish, blueish", baseForm: "plav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "boat", baseForm: "čamac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "body, torso, trunk", baseForm: "trup bez udova" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bone, os", baseForm: "kostur" });

        Words.insert({ rnd: Math.random(), type: "n", english: "book, volume", baseForm: "tekst" });

        Words.insert({ rnd: Math.random(), type: "n", english: "boot", baseForm: "čizma" });

        Words.insert({ rnd: Math.random(), type: "n", english: "boring, deadening, dull, hoHum, irksome, slow, tedious, tiresome, wearisome", baseForm: "dosadan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bottle", baseForm: "boca" });

        Words.insert({ rnd: Math.random(), type: "n", english: "box", baseForm: "kutija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "boy, male child", baseForm: "dječak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "boyfriend, fellow, beau, swain, young man", baseForm: "dečko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brain, encephalon", baseForm: "mozak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "branch", baseForm: "grana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brand, make", baseForm: "marka proizvoda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bread, breadstuff, staff of life", baseForm: "kruh" });

        Words.insert({ rnd: Math.random(), type: "n", english: "break, respite, recess, time out", baseForm: "predah" });

        Words.insert({ rnd: Math.random(), type: "n", english: "breakfast", baseForm: "doručak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "breath", baseForm: "dah" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brick", baseForm: "cigla" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bridge, span", baseForm: "most" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bright, brilliant, vivid", baseForm: "svijetao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bring, convey, take", baseForm: "dovesti do" });

        Words.insert({ rnd: Math.random(), type: "n", english: "broken", baseForm: "razbijen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brother, blood brother", baseForm: "brat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brown, brownish, chocolateBrown, darkBrown", baseForm: "smeđa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "brush", baseForm: "četka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "building, edifice", baseForm: "građevina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "bus, autobus, coach, charabanc, doubleDecker, jitney, motorbus, motorcoach, omnibus, passenger vehicle", baseForm: "autobus" });

        Words.insert({ rnd: Math.random(), type: "n", english: "business, concern, business concern, business organization, business organisation", baseForm: "firma" });

        Words.insert({ rnd: Math.random(), type: "n", english: "businessman, man of affairs", baseForm: "poslovan čovjek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "butter", baseForm: "maslac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "button, push button, push", baseForm: "dugme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cabbage, chou", baseForm: "kupus" });

        Words.insert({ rnd: Math.random(), type: "n", english: "call, phone call, telephone call", baseForm: "poziv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "camera, photographic camera", baseForm: "fotoaparat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "campaign, cause, crusade, drive, movement, effort", baseForm: "ratni pohod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "capital", baseForm: "glavni grad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "capital, working capital", baseForm: "kapital" });

        Words.insert({ rnd: Math.random(), type: "n", english: "car, auto, automobile, machine, motorcar", baseForm: "automobil" });

        Words.insert({ rnd: Math.random(), type: "n", english: "care, attention, aid, tending", baseForm: "briga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "carpet, rug, carpeting", baseForm: "sag" });

        Words.insert({ rnd: Math.random(), type: "n", english: "carrot, cultivated carrot, daucus carota sativa", baseForm: "mrkva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "case, instance, example", baseForm: "okolnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "castle", baseForm: "tvrđava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cat, true cat", baseForm: "mačka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cause", baseForm: "uzrok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cell", baseForm: "stanica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cellphone, cellular telephone, cellular phone, cell, mobile phone", baseForm: "mobilni telefon" });

        Words.insert({ rnd: Math.random(), type: "n", english: "center, kernel, substance, core, centre, essence, gist, heart, heart and soul, inwardness, marrow, meat, nub, pith, sum, nittyGritty", baseForm: "bit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "central", baseForm: "središnji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "century", baseForm: "stoljeće" });

        Words.insert({ rnd: Math.random(), type: "n", english: "certain, sure", baseForm: "siguran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chain", baseForm: "lanac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chair", baseForm: "stolac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "championship, title", baseForm: "prvenstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chance, opportunity", baseForm: "prilika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "change", baseForm: "sitniš" });

        Words.insert({ rnd: Math.random(), type: "n", english: "change, alteration, modification", baseForm: "promjena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "character, grapheme, graphic symbol", baseForm: "slovo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "charge, electric charge", baseForm: "naboj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cheap, inexpensive", baseForm: "jeftin" });

        Words.insert({ rnd: Math.random(), type: "n", english: "check, bank check, cheque", baseForm: "ček" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cheers", baseForm: "uzdravlje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cheese", baseForm: "sir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chemical element, element", baseForm: "kemijski element" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chemical, chemic", baseForm: "kemijski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chemical, chemical substance", baseForm: "kemija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chemistry, chemical science", baseForm: "kemija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cherry", baseForm: "trešnja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chest, breast", baseForm: "grudi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chest, thorax, pectus", baseForm: "grudi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "child, kid", baseForm: "dijete" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chin, mentum", baseForm: "brada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "chocolate", baseForm: "čokolada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "choice, selection, option, pick", baseForm: "izbor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "church, church building", baseForm: "crkva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cinema, movie theater, movie theatre, movie house, picture palace", baseForm: "kino" });

        Words.insert({ rnd: Math.random(), type: "n", english: "circle", baseForm: "krug" });

        Words.insert({ rnd: Math.random(), type: "n", english: "city, metropolis, urban center", baseForm: "grad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "class, form, grade, course", baseForm: "razred" });

        Words.insert({ rnd: Math.random(), type: "n", english: "clean", baseForm: "čist" });

        Words.insert({ rnd: Math.random(), type: "n", english: "clean, make clean", baseForm: "čistit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "clear", baseForm: "vedar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "climate change, global climate change", baseForm: "klimatske promjene" });

        Words.insert({ rnd: Math.random(), type: "n", english: "clock", baseForm: "sat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "closed, shut, unopen", baseForm: "zatvoren" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cloth, fabric, material, textile", baseForm: "sukno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "clothing, article of clothing, vesture, wear, wearable, habiliment", baseForm: "odjeća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cloud", baseForm: "oblak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "club", baseForm: "kijača" });

        Words.insert({ rnd: Math.random(), type: "n", english: "club, social club, society, guild, gild, lodge, order", baseForm: "klub" });

        Words.insert({ rnd: Math.random(), type: "n", english: "coal", baseForm: "ugljen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "coat", baseForm: "kaput" });

        Words.insert({ rnd: Math.random(), type: "n", english: "coffee, java", baseForm: "kava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "coil, whorl, roll, curl, curlicue, ringlet, gyre, scroll", baseForm: "navoj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cold", baseForm: "hladan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cold, common cold", baseForm: "prehlada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "collar, neckband", baseForm: "ovratnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "color, colour, coloring material, colouring material", baseForm: "boje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "come, come up", baseForm: "doći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "committee, commission", baseForm: "odbor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "common", baseForm: "uobičajen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "common, mutual", baseForm: "zajednički" });

        Words.insert({ rnd: Math.random(), type: "n", english: "company", baseForm: "trgovačko društvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "company, companionship, fellowship, society", baseForm: "pratnja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "comparison, comparing", baseForm: "usporedba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "competition", baseForm: "natjecanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "competitor, rival, challenger, competition, contender", baseForm: "natjecatelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "complaint, charge", baseForm: "teret" });

        Words.insert({ rnd: Math.random(), type: "n", english: "complete, consummate", baseForm: "potpun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "component, constituent, element, factor, ingredient", baseForm: "element" });

        Words.insert({ rnd: Math.random(), type: "n", english: "computer, computing machine, computing device, data processor, electronic computer, information processing system", baseForm: "računalo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "concert", baseForm: "koncert" });

        Words.insert({ rnd: Math.random(), type: "n", english: "condition, status", baseForm: "stanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "connection, connexion, connector, connecter, connective", baseForm: "poveznik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "consequence, effect, outcome, result, event, issue, upshot", baseForm: "posljedica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "contest, competition", baseForm: "natjecanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "contract", baseForm: "utanačenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "control", baseForm: "nadzor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cook", baseForm: "kuharica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "correct, right", baseForm: "točan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cough", baseForm: "kašalj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cough, coughing", baseForm: "kašalj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "council", baseForm: "vijeće" });

        Words.insert({ rnd: Math.random(), type: "n", english: "country, state, land", baseForm: "zemlja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "couple, pair, twosome, twain, brace, span, yoke, couplet, distich, duo, duet, dyad, duad", baseForm: "dvoje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "course, class, course of study, course of instruction", baseForm: "razred" });

        Words.insert({ rnd: Math.random(), type: "n", english: "court, tribunal, judicature", baseForm: "sud" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cover, screen, covert, concealment", baseForm: "kapak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cow, mooCow", baseForm: "krava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "crack, cleft, crevice, fissure, scissure", baseForm: "pukotina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "crime, offense, criminal offense, criminal offence, offence, lawBreaking", baseForm: "kazneno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cruel, barbarous, brutal, fell, roughshod, savage, vicious", baseForm: "grub" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cry, outcry, call, yell, shout, vociferation", baseForm: "zov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cucumber, cuke", baseForm: "krastavac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "culture, civilization, civilisation", baseForm: "kultura" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cup", baseForm: "šalica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cup, loving cup", baseForm: "pehar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cupboard, closet", baseForm: "sobica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "curtain, drape, drapery, mantle, pall", baseForm: "zavjesa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "curve, bend", baseForm: "krivina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "curve, curved shape", baseForm: "zavoj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "customer, client", baseForm: "kupac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "cut, cutting", baseForm: "sječa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "damage, harm, impairment", baseForm: "šteta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "danger", baseForm: "opasnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dangerous, unsafe", baseForm: "opasan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dark", baseForm: "mračan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "data, information", baseForm: "podaci" });

        Words.insert({ rnd: Math.random(), type: "n", english: "date, appointment, engagement", baseForm: "termin" });

        Words.insert({ rnd: Math.random(), type: "n", english: "date, day of the month", baseForm: "datum" });

        Words.insert({ rnd: Math.random(), type: "n", english: "daughter, girl", baseForm: "kćerka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "day, twentyFour hours, twentyFour hour period, 24Hour interval, solar day, mean solar day", baseForm: "dan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dead", baseForm: "mrtav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dear, beloved, dearest, honey, love", baseForm: "dragi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "death", baseForm: "smrt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "death, decease, expiry", baseForm: "smrt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "decision, determination, conclusion", baseForm: "odluka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "decoration, ornament, ornamentation", baseForm: "ukras" });

        Words.insert({ rnd: Math.random(), type: "n", english: "defense, defence, defense force, defence force", baseForm: "obrana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "degree", baseForm: "stupanj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "degree, grade, level", baseForm: "razina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "delicate", baseForm: "spretan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "demand, need", baseForm: "potrebe" });

        Words.insert({ rnd: Math.random(), type: "n", english: "democracy, republic, commonwealth", baseForm: "republika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "department, section", baseForm: "odsjek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "design, designing", baseForm: "nacrt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "design, plan", baseForm: "plan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "desk", baseForm: "pisaći stol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "destruction, devastation", baseForm: "uništavanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "develop", baseForm: "razviti fotografski film" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dew", baseForm: "rosa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dictionary, lexicon", baseForm: "rječnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "difference", baseForm: "razlika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "different", baseForm: "različit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "different, unlike, dissimilar", baseForm: "koji nije sličan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "difficult, hard", baseForm: "teško" });

        Words.insert({ rnd: Math.random(), type: "n", english: "difficulty", baseForm: "poteškoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "direction", baseForm: "smjer" });

        Words.insert({ rnd: Math.random(), type: "n", english: "directly, straight, direct", baseForm: "ravno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "director, manager, managing director", baseForm: "upravitelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dirty, soiled, unclean", baseForm: "prljav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "discipline, subject, subject area, subject field, field, field of study, study, bailiwick", baseForm: "disciplina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "discovery, find, uncovering", baseForm: "pronaći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "discussion, giveAndTake, word", baseForm: "diskusija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "disease", baseForm: "bolest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "distance", baseForm: "udaljenost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "diversity, diverseness, multifariousness, variety", baseForm: "raznovrsnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "divide, split, split up, separate, dissever, carve up", baseForm: "podijeliti u grupe" });

        Words.insert({ rnd: Math.random(), type: "n", english: "doctor, doc, physician, md, dr., medico", baseForm: "liječnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dog, domestic dog, canis familiaris", baseForm: "pas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dominance, ascendance, ascendence, ascendancy, ascendency, control", baseForm: "moć" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dominion, rule", baseForm: "vlast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "door", baseForm: "vrata" });

        Words.insert({ rnd: Math.random(), type: "n", english: "doubt, uncertainty, incertitude, dubiety, doubtfulness, dubiousness", baseForm: "nesigurnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "down", baseForm: "dolje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "down, downwards, downward, downwardly", baseForm: "dolje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "drawer", baseForm: "ladica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "drink, beverage, drinkable, potable", baseForm: "napitak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "drop, drib, driblet", baseForm: "kap" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dry", baseForm: "suh" });

        Words.insert({ rnd: Math.random(), type: "n", english: "during", baseForm: "za vrijeme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "dust", baseForm: "prašina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "duty", baseForm: "dužnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "each", baseForm: "svaki" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ear", baseForm: "uho" });

        Words.insert({ rnd: Math.random(), type: "n", english: "early", baseForm: "ran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "early, early on", baseForm: "rano" });

        Words.insert({ rnd: Math.random(), type: "n", english: "earth, ground", baseForm: "zemlja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "east, due east, eastward, e", baseForm: "istok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "easy", baseForm: "lagan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ecology, bionomics, environmental science", baseForm: "ekologija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "economic", baseForm: "gospodarski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "economic, economical", baseForm: "ekonomičan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "economy, economic system", baseForm: "gospodarstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "edge, border", baseForm: "rub" });

        Words.insert({ rnd: Math.random(), type: "n", english: "education", baseForm: "obrazovanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "education", baseForm: "obrazovanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "education, instruction, teaching, pedagogy, didactics, educational activity", baseForm: "obrazovanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "effort, elbow grease, exertion, travail, sweat", baseForm: "trud" });

        Words.insert({ rnd: Math.random(), type: "n", english: "egg", baseForm: "jaje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "eight, 8, viii", baseForm: "osam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "eighteen, 18, xviii", baseForm: "osamnaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "eighty, 80, lxxx, fourscore", baseForm: "osamdeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "either", baseForm: "oba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "election", baseForm: "izbor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "electric, electrical", baseForm: "električni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "elephant", baseForm: "slon" });

        Words.insert({ rnd: Math.random(), type: "n", english: "elevator, lift", baseForm: "dizalo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "eleven, 11, xi", baseForm: "jedanaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "energy, free energy", baseForm: "energija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "engine", baseForm: "motor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "enough, plenty", baseForm: "dovoljno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "enter, come in, get into, get in, go into, go in, move into", baseForm: "ući" });

        Words.insert({ rnd: Math.random(), type: "n", english: "entertainment, amusement", baseForm: "zabava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "entirely, exclusively, solely, alone, only", baseForm: "sam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "envelope", baseForm: "omotnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "environment", baseForm: "okoliš" });

        Words.insert({ rnd: Math.random(), type: "n", english: "environment, environs, surroundings, surround", baseForm: "okolica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "equal", baseForm: "jednak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "equally, as, every bit", baseForm: "kao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "even", baseForm: "čak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "even", baseForm: "parni brojevi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "even, fiftyFifty", baseForm: "ravan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "evening, eve, even, eventide", baseForm: "večer" });

        Words.insert({ rnd: Math.random(), type: "n", english: "event", baseForm: "događaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "every", baseForm: "svaki" });

        Words.insert({ rnd: Math.random(), type: "n", english: "everybody, everyone", baseForm: "svatko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "everything", baseForm: "sve" });

        Words.insert({ rnd: Math.random(), type: "n", english: "evidence", baseForm: "dokaz" });

        Words.insert({ rnd: Math.random(), type: "n", english: "evolution, development", baseForm: "razvoj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "exactly, precisely, just", baseForm: "točno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "example, illustration, instance, representative", baseForm: "primjer" });

        Words.insert({ rnd: Math.random(), type: "n", english: "excellent, firstClass, fantabulous, splendid", baseForm: "odličan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "existence, being, beingness", baseForm: "postojanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "experience", baseForm: "iskustvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "experience", baseForm: "iskustvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "expert", baseForm: "stručnjak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "express, limited", baseForm: "brzi vlak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "expression, look, aspect, facial expression, face", baseForm: "pogled" });

        Words.insert({ rnd: Math.random(), type: "n", english: "eye, oculus, optic", baseForm: "oko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "face, human face", baseForm: "lice" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fact", baseForm: "činjenica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "factory, mill, manufacturing plant, manufactory", baseForm: "tvornica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fake, false, faux, imitation, simulated", baseForm: "lažan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fall, spill, tumble", baseForm: "politički" });

        Words.insert({ rnd: Math.random(), type: "n", english: "family, family unit", baseForm: "obitelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "far", baseForm: "daleko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "farm", baseForm: "farma" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fast", baseForm: "brz" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fat", baseForm: "debeo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fat", baseForm: "mast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fat, fatty", baseForm: "obilan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "father, male parent, begetter", baseForm: "otac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fear, fearfulness, fright", baseForm: "strah" });

        Words.insert({ rnd: Math.random(), type: "n", english: "feather, plume, plumage", baseForm: "pero" });

        Words.insert({ rnd: Math.random(), type: "n", english: "feature, characteristic", baseForm: "značajka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "feeling", baseForm: "osjećaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "female, female person", baseForm: "žena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "few", baseForm: "malo njih" });

        Words.insert({ rnd: Math.random(), type: "n", english: "field", baseForm: "polje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fifteen, 15, xv", baseForm: "petnaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fifty, 50, l", baseForm: "pedeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fight, contend, struggle", baseForm: "tući se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fight, fighting, combat, scrap", baseForm: "borba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "final, last, concluding, terminal", baseForm: "konačan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "finally, last, lastly, in conclusion", baseForm: "konačno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "financial, fiscal", baseForm: "financijski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "find, regain", baseForm: "naići na" });

        Words.insert({ rnd: Math.random(), type: "n", english: "finger", baseForm: "prst" });

        Words.insert({ rnd: Math.random(), type: "n", english: "finish, goal, destination", baseForm: "odredište" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fire, flame, flaming", baseForm: "plamen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "firm, house, business firm", baseForm: "tvrtka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "firm, solid", baseForm: "jak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "first, firstly, foremost, first of all, first off", baseForm: "ponajprije" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fish", baseForm: "riba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "five, 5, v", baseForm: "broj ili brojka pet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "flag", baseForm: "nacionalna zastava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "flat, apartment", baseForm: "stan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "flat, level, plane", baseForm: "gladak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "flight, flying", baseForm: "let" });

        Words.insert({ rnd: Math.random(), type: "n", english: "floor, flooring", baseForm: "pod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "floor, level, storey, story", baseForm: "kat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "flower", baseForm: "cvijet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fly", baseForm: "muha" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fog", baseForm: "magla" });

        Words.insert({ rnd: Math.random(), type: "n", english: "following, next", baseForm: "sljedeći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "food, nutrient", baseForm: "hrana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "foot, human foot, pes", baseForm: "stopalo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "football, football game", baseForm: "nogomet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "for", baseForm: "zbog" });

        Words.insert({ rnd: Math.random(), type: "n", english: "for", baseForm: "za" });

        Words.insert({ rnd: Math.random(), type: "n", english: "forehead, brow", baseForm: "čelo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "foreign, strange", baseForm: "inozeman" });

        Words.insert({ rnd: Math.random(), type: "n", english: "forest, wood, woods", baseForm: "šuma" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fork", baseForm: "vilica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "form", baseForm: "formular" });

        Words.insert({ rnd: Math.random(), type: "n", english: "former, erstwhile, old, onetime, oneTime, quondam, sometime", baseForm: "prošli" });

        Words.insert({ rnd: Math.random(), type: "n", english: "forward, forwards, frontward, frontwards, forrad, forrard", baseForm: "naprijed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fossil fuel", baseForm: "fosilna goriva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fourteen, 14, xiv", baseForm: "četrnaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fragile, delicate, frail", baseForm: "nježan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "frame", baseForm: "okvir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "free", baseForm: "slobodan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "free, complimentary, costless, gratis, gratuitous", baseForm: "besplatna ulaznica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fresh", baseForm: "svjež" });

        Words.insert({ rnd: Math.random(), type: "n", english: "friend", baseForm: "prijatelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "friendly", baseForm: "prijateljski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "from", baseForm: "od" });

        Words.insert({ rnd: Math.random(), type: "n", english: "from", baseForm: "od" });

        Words.insert({ rnd: Math.random(), type: "n", english: "front, front end, forepart", baseForm: "naslovnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "frost, hoar, hoarfrost, rime", baseForm: "mraz" });

        Words.insert({ rnd: Math.random(), type: "n", english: "fruit", baseForm: "plod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "full", baseForm: "pun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "full, total", baseForm: "potpun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "function, office, part, role", baseForm: "funkcija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "furniture, piece of furniture, article of furniture", baseForm: "pokućstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "further, farther", baseForm: "dalje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "future", baseForm: "budući" });

        Words.insert({ rnd: Math.random(), type: "n", english: "future, hereafter, futurity, time to come", baseForm: "budućnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "game", baseForm: "igra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "garage", baseForm: "garaža" });

        Words.insert({ rnd: Math.random(), type: "n", english: "garden", baseForm: "vrt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "garlic, ail", baseForm: "češnjak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "gate", baseForm: "ograda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "gene, cistron, factor", baseForm: "gen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "general", baseForm: "općenit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "general, full general", baseForm: "general" });

        Words.insert({ rnd: Math.random(), type: "n", english: "girl, miss, missy, young lady, young woman, fille", baseForm: "djevojčica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "girlfriend, girl, lady friend", baseForm: "djevojka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "glass", baseForm: "staklo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "glass, drinking glass", baseForm: "čaša" });

        Words.insert({ rnd: Math.random(), type: "n", english: "global warming", baseForm: "globalno zatopljenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "glue, gum, mucilage", baseForm: "ljepilo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "goal", baseForm: "gol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "goat, caprine animal", baseForm: "koza" });

        Words.insert({ rnd: Math.random(), type: "n", english: "gold, au, atomic number 79", baseForm: "zlato" });

        Words.insert({ rnd: Math.random(), type: "n", english: "golf, golf game", baseForm: "golf" });

        Words.insert({ rnd: Math.random(), type: "n", english: "good", baseForm: "dobar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "good day", baseForm: "dobar dan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "good, just, upright", baseForm: "pošten" });

        Words.insert({ rnd: Math.random(), type: "n", english: "government, authorities, regime", baseForm: "vlada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "grade, mark, score", baseForm: "ocjena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "grandfather, gramps, granddad, grandad, granddaddy, grandpa", baseForm: "djed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "grass", baseForm: "trava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "gray, grey, greyish, grayish", baseForm: "siv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "great", baseForm: "velik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "great, bangUp, bully, corking, cracking, dandy, groovy, keen, neat, nifty, not bad, peachy, slapUp, swell, smashing", baseForm: "odličan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "green, greenish, lightGreen, darkGreen", baseForm: "zelen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "greenhouse effect, greenhouse warming", baseForm: "efekt staklenika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "group, grouping", baseForm: "skupina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "guest, invitee", baseForm: "gost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "gun", baseForm: "puška" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hair", baseForm: "kosa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hair, pilus", baseForm: "dlaka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "half, oneHalf", baseForm: "polovica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hall, anteroom, antechamber, entrance hall, foyer, lobby, vestibule", baseForm: "predvorje hotela" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hammer", baseForm: "malj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hand, manus, mitt, paw", baseForm: "šaka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "handle, grip, handgrip, hold", baseForm: "kvaka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "happen, hap, go on, pass off, occur, pass, fall out, come about, take place", baseForm: "dogoditi se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "happy", baseForm: "sretan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hat, chapeau, lid", baseForm: "šešir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hate, hatred", baseForm: "mržnja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "he", baseForm: "on" });

        Words.insert({ rnd: Math.random(), type: "n", english: "head, caput", baseForm: "glava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "health, wellness", baseForm: "zdravlje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "healthy", baseForm: "zdrav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "healthy, salubrious, good for you", baseForm: "zdrav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "heart, pump, ticker", baseForm: "srce" });

        Words.insert({ rnd: Math.random(), type: "n", english: "heavy", baseForm: "težak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "height, altitude", baseForm: "nadmorska visina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hello, hullo, hi, howdy, howDoYouDo", baseForm: "zdravo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "help, aid, assist, assistance", baseForm: "pomoć" });

        Words.insert({ rnd: Math.random(), type: "n", english: "help, assist, aid", baseForm: "pomoći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "her", baseForm: "njen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "here", baseForm: "na ovom mjestu" });

        Words.insert({ rnd: Math.random(), type: "n", english: "here, hither", baseForm: "ovdje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "herself", baseForm: "se, sebe" });

        Words.insert({ rnd: Math.random(), type: "n", english: "high", baseForm: "visok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "him", baseForm: "mu, njemu" });

        Words.insert({ rnd: Math.random(), type: "n", english: "himself", baseForm: "se, sebe" });

        Words.insert({ rnd: Math.random(), type: "n", english: "his", baseForm: "njegov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "history", baseForm: "povijest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hit, hitting, striking", baseForm: "udarac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hit, smash, smasher, strike, bang", baseForm: "pogodak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hole", baseForm: "rupa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "holiday, vacation", baseForm: "godišnji odmor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "home, place", baseForm: "kuca" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hook, claw", baseForm: "kvaka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hope", baseForm: "nadati se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "horse, equus caballus", baseForm: "domaći konj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hospital, infirmary", baseForm: "bolnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hot", baseForm: "topao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hotel", baseForm: "hotel" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hour, hr, 60 minutes", baseForm: "sat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "house", baseForm: "kuca" });

        Words.insert({ rnd: Math.random(), type: "n", english: "how are you", baseForm: "kako si" });

        Words.insert({ rnd: Math.random(), type: "n", english: "human", baseForm: "ljudski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "human, homo, man, human being", baseForm: "čovjek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "humor, humour, sense of humor, sense of humour", baseForm: "raspoloženje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "hungry", baseForm: "gladan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "husband, hubby, married man", baseForm: "muž" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ice, water ice", baseForm: "led" });

        Words.insert({ rnd: Math.random(), type: "n", english: "idea, thought", baseForm: "misao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "if", baseForm: "ako" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ill, sick", baseForm: "bolestan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "image", baseForm: "glas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "immediately, instantly, straightaway, straight off, directly, now, right away, at once, forthwith, like a shot", baseForm: "smjesta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "impatient", baseForm: "nestrpljiv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "important, significant", baseForm: "važan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "in, inwards, inward", baseForm: "unutra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "income", baseForm: "prihod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "increase, increment, growth", baseForm: "rast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "indeed, so", baseForm: "zaista" });

        Words.insert({ rnd: Math.random(), type: "n", english: "individual", baseForm: "pojedinac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "industrial", baseForm: "industrijski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "industry, manufacture", baseForm: "industrija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "information, info", baseForm: "informacija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ink", baseForm: "tinta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "insect", baseForm: "kukac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "inside, within", baseForm: "iznutra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "instead, alternatively, or else", baseForm: "umjesto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "institution, establishment", baseForm: "institucija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "instrument", baseForm: "alat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "intelligent", baseForm: "inteligentan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "interest", baseForm: "korist" });

        Words.insert({ rnd: Math.random(), type: "n", english: "interest, involvement", baseForm: "interes" });

        Words.insert({ rnd: Math.random(), type: "n", english: "interesting", baseForm: "zanimljiv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "international", baseForm: "internacionalni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "internet, net, cyberspace", baseForm: "internet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "interview", baseForm: "intervju" });

        Words.insert({ rnd: Math.random(), type: "n", english: "into", baseForm: "u" });

        Words.insert({ rnd: Math.random(), type: "n", english: "invention, innovation, excogitation, conception, design", baseForm: "pronalazak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "invoice, bill, account", baseForm: "izvješće" });

        Words.insert({ rnd: Math.random(), type: "n", english: "iron, fe, atomic number 26", baseForm: "željezo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "island", baseForm: "otok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "issue", baseForm: "predmet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "it", baseForm: "to" });

        Words.insert({ rnd: Math.random(), type: "n", english: "itself", baseForm: "se, sebe" });

        Words.insert({ rnd: Math.random(), type: "n", english: "jacket", baseForm: "jakna" });

        Words.insert({ rnd: Math.random(), type: "n", english: "jewel, gem, precious stone", baseForm: "dragulj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "job, task, chore", baseForm: "posao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "journalist", baseForm: "novinar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "journey, journeying", baseForm: "putovanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "judge, justice, jurist", baseForm: "sudac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "jump, leap, saltation", baseForm: "skok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "keep, maintain, hold", baseForm: "smiren" });

        Words.insert({ rnd: Math.random(), type: "n", english: "key", baseForm: "ključ" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kick", baseForm: "udariti nogom" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kick, boot, kicking", baseForm: "udarac nogom" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kind", baseForm: "prijateljski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kind, sort, form, variety", baseForm: "vrsta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "king, male monarch, rex", baseForm: "kralj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kiss, buss, osculation", baseForm: "ljubljenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "kitchen", baseForm: "kuhinja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "knee, knee joint, human knee, articulatio genus, genu", baseForm: "koljeno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "knife", baseForm: "nož" });

        Words.insert({ rnd: Math.random(), type: "n", english: "knot", baseForm: "čvor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "knowledge, cognition, noesis", baseForm: "znanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lake", baseForm: "jezero" });

        Words.insert({ rnd: Math.random(), type: "n", english: "land, dry land, earth, ground, solid ground, terra firma", baseForm: "tlo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "land, set down", baseForm: "polje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "language, linguistic communication", baseForm: "jezik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "language, natural language, tongue", baseForm: "jezik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "last", baseForm: "zadnji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "late", baseForm: "kasno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "late, belatedly, tardily", baseForm: "kasno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "laugh, express joy, express mirth", baseForm: "smijati se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "law", baseForm: "zakon" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lead, pb, atomic number 82", baseForm: "olovo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lead, take, direct, conduct, guide", baseForm: "vođenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "leader", baseForm: "vođa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "leaf, leafage, foliage", baseForm: "list" });

        Words.insert({ rnd: Math.random(), type: "n", english: "least, to the lowest degree", baseForm: "najmanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "leather", baseForm: "koža" });

        Words.insert({ rnd: Math.random(), type: "n", english: "leave, leave of absence", baseForm: "dopust" });

        Words.insert({ rnd: Math.random(), type: "n", english: "left", baseForm: "lijevo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "leg", baseForm: "noga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "legal", baseForm: "zakonit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lemon", baseForm: "limun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "letter, letter of the alphabet, alphabetic character", baseForm: "slovo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "letter, missive", baseForm: "pismo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "library", baseForm: "biblioteka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lie, prevarication", baseForm: "laž" });

        Words.insert({ rnd: Math.random(), type: "n", english: "life", baseForm: "život" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lift, raise, elevate, get up, bring up", baseForm: "podići" });

        Words.insert({ rnd: Math.random(), type: "n", english: "light", baseForm: "lagan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "light, visible light, visible radiation", baseForm: "svjetlost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lightning", baseForm: "munja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "like", baseForm: "sviđati se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "limit, bound, boundary", baseForm: "granica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "line", baseForm: "crta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lion, king of beasts, panthera leo", baseForm: "lav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lip", baseForm: "usna" });

        Words.insert({ rnd: Math.random(), type: "n", english: "liquid", baseForm: "tekućina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "liquid", baseForm: "tekućina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "list, listing", baseForm: "popis" });

        Words.insert({ rnd: Math.random(), type: "n", english: "little", baseForm: "mali" });

        Words.insert({ rnd: Math.random(), type: "n", english: "local", baseForm: "mjesni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "long", baseForm: "dugi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "loss", baseForm: "gubitak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "loud", baseForm: "glasan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "love", baseForm: "ljubav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "low", baseForm: "nizak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lucky", baseForm: "sretan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "lunch, luncheon, tiffin, dejeuner", baseForm: "ručak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "machine", baseForm: "stroj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "magazine, mag", baseForm: "časopis" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mail, mail service, postal service, post", baseForm: "pošta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "main, chief, primary, principal, master", baseForm: "vrhovni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "major", baseForm: "velik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "majority, bulk", baseForm: "većina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "male", baseForm: "muška biljka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "male, male person", baseForm: "muškarac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "male, manful, manlike, manly, virile", baseForm: "muški" });

        Words.insert({ rnd: Math.random(), type: "n", english: "man, adult male", baseForm: "muškarac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "management, direction", baseForm: "vodstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "manner, mode, style, way, fashion", baseForm: "držanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "many", baseForm: "mnogo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "many thanks", baseForm: "puno hvala" });

        Words.insert({ rnd: Math.random(), type: "n", english: "map", baseForm: "zemljovid" });

        Words.insert({ rnd: Math.random(), type: "n", english: "marker, marking, mark", baseForm: "oznaka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "market, marketplace, market place", baseForm: "tržište" });

        Words.insert({ rnd: Math.random(), type: "n", english: "marriage, matrimony, union, spousal relationship, wedlock", baseForm: "brak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "married", baseForm: "oženjen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "marry, get married, wed, conjoin, hook up with, get hitched with, espouse", baseForm: "oženiti se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mass", baseForm: "masa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mass, bulk, volume", baseForm: "mnoštvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "match, lucifer, friction match", baseForm: "žigica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "material, stuff", baseForm: "materijal" });

        Words.insert({ rnd: Math.random(), type: "n", english: "matter", baseForm: "tvar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "matter, affair, thing", baseForm: "sadržaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "me", baseForm: "mene" });

        Words.insert({ rnd: Math.random(), type: "n", english: "meal, repast", baseForm: "obrok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mean, hateful", baseForm: "namjeran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mean, mean value", baseForm: "sredina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "means, agency, way", baseForm: "način" });

        Words.insert({ rnd: Math.random(), type: "n", english: "measurement, measuring, measure, mensuration", baseForm: "mjerenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "meat", baseForm: "meso" });

        Words.insert({ rnd: Math.random(), type: "n", english: "medical", baseForm: "liječnički" });

        Words.insert({ rnd: Math.random(), type: "n", english: "meeting, coming together", baseForm: "sastanak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "member, fellow member", baseForm: "član" });

        Words.insert({ rnd: Math.random(), type: "n", english: "memory", baseForm: "uspomena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "memory, retention, retentiveness, retentivity", baseForm: "pamćenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "menstruation, menses, menstruum, catamenia, period, flow", baseForm: "mjesečnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "menu, bill of fare, card, carte du jour, carte", baseForm: "meni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "metal, metallic", baseForm: "metalan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "metallic element, metal", baseForm: "metal" });

        Words.insert({ rnd: Math.random(), type: "n", english: "method", baseForm: "metoda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "midnight", baseForm: "ponoć" });

        Words.insert({ rnd: Math.random(), type: "n", english: "military", baseForm: "vojnički" });

        Words.insert({ rnd: Math.random(), type: "n", english: "milk", baseForm: "mlijeko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "milkshake, milk shake, shake", baseForm: "mliječni napitak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "million, 1000000, one thousand thousand, meg", baseForm: "milijun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mind, head, brain, psyche, nous", baseForm: "pamet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mine", baseForm: "rudnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "minister, government minister", baseForm: "ministar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "minute, infinitesimal", baseForm: "neznatan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "minute, min", baseForm: "minuta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mirror", baseForm: "zrcalo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "modern", baseForm: "moderan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "moisture, wet", baseForm: "vlažnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "moment, minute, second, instant", baseForm: "trenutak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "moment, mo, minute, second, bit", baseForm: "moment" });

        Words.insert({ rnd: Math.random(), type: "n", english: "money", baseForm: "novac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "monkey", baseForm: "majmun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "month, calendar month", baseForm: "mjesec" });

        Words.insert({ rnd: Math.random(), type: "n", english: "morning, morn, morning time, forenoon", baseForm: "jutro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mostly, by and large, generally, more often than not", baseForm: "obično" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mother, female parent", baseForm: "majka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "mouth, oral cavity, oral fissure, rima oris", baseForm: "usta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "movement, motion", baseForm: "kretanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "movie, film, picture, moving picture, movingPicture show, motion picture, motionPicture show, picture show, pic, flick", baseForm: "tanki sloj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "much", baseForm: "puno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "muscle, musculus", baseForm: "mišić" });

        Words.insert({ rnd: Math.random(), type: "n", english: "museum", baseForm: "muzej" });

        Words.insert({ rnd: Math.random(), type: "n", english: "music", baseForm: "glazba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "musician, instrumentalist, player", baseForm: "glazbenik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "my", baseForm: "moj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nail", baseForm: "nokat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nail", baseForm: "čavao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "name", baseForm: "ime" });

        Words.insert({ rnd: Math.random(), type: "n", english: "narrow", baseForm: "uzak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nation, land, country", baseForm: "narod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "national", baseForm: "narodni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "natural", baseForm: "prirodan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nature", baseForm: "priroda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "near, close, nigh", baseForm: "skoro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "necessary", baseForm: "potreban" });

        Words.insert({ rnd: Math.random(), type: "n", english: "neck, cervix", baseForm: "vrat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "needle", baseForm: "igla za šivanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "neighbor, neighbour", baseForm: "susjed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nerve, nervus", baseForm: "živac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "net, network, mesh, meshing, meshwork", baseForm: "zamka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "never", baseForm: "nikad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "new", baseForm: "nov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "newspaper, paper", baseForm: "novine" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nice", baseForm: "lijep" });

        Words.insert({ rnd: Math.random(), type: "n", english: "night, nighttime, dark", baseForm: "noc" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ninety, 90, xc", baseForm: "devedeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "no", baseForm: "ne" });

        Words.insert({ rnd: Math.random(), type: "n", english: "no", baseForm: "nijedan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "noise, dissonance, racket", baseForm: "buka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "normal", baseForm: "normalan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "north, due north, northward, n", baseForm: "sjeverni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nose, olfactory organ", baseForm: "vršak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "note, annotation, notation", baseForm: "bilješka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "note, musical note, tone", baseForm: "tipka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nothing, nil, nix, nada, null, aught, cipher, cypher, goose egg, naught, zero, zilch, zip, zippo", baseForm: "ništa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "now", baseForm: "sada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "now, at present", baseForm: "sad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "number", baseForm: "broj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nurse", baseForm: "medicinska sestra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nut", baseForm: "matica vijka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "nut", baseForm: "orah" });

        Words.insert({ rnd: Math.random(), type: "n", english: "obviously, evidently, manifestly, patently, apparently, plainly, plain", baseForm: "očito" });

        Words.insert({ rnd: Math.random(), type: "n", english: "occupation, business, job, line of work, line", baseForm: "zanimanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "of", baseForm: "od" });

        Words.insert({ rnd: Math.random(), type: "n", english: "offer, offering", baseForm: "ponuda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "office, business office", baseForm: "kancelarija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "officer, officeholder", baseForm: "javni službenik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "often, frequently, oftentimes, oft, ofttimes", baseForm: "cesto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "oil", baseForm: "ulje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "oil, petroleum, crude oil, crude, rock oil, fossil oil", baseForm: "nafta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "old", baseForm: "star" });

        Words.insert({ rnd: Math.random(), type: "n", english: "olive", baseForm: "maslina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "on", baseForm: "na" });

        Words.insert({ rnd: Math.random(), type: "n", english: "on", baseForm: "na" });

        Words.insert({ rnd: Math.random(), type: "n", english: "once, one time, in one case", baseForm: "jednom" });

        Words.insert({ rnd: Math.random(), type: "n", english: "one, 1, i, ane", baseForm: "jedan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "onion, onion plant, allium cepa", baseForm: "luk" });

        Words.insert({ rnd: Math.random(), type: "n", english: "open, unfastened", baseForm: "otvoreno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "operation, functioning, performance", baseForm: "u tijeku" });

        Words.insert({ rnd: Math.random(), type: "n", english: "operation, surgery, surgical operation, surgical procedure, surgical process", baseForm: "operacija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "opinion, sentiment, persuasion, view, thought", baseForm: "mišljenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "opposite", baseForm: "suprotan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "opposite, reverse, contrary", baseForm: "suprotnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "option, alternative, choice", baseForm: "alternativa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "or", baseForm: "ili" });

        Words.insert({ rnd: Math.random(), type: "n", english: "orange", baseForm: "naranča" });

        Words.insert({ rnd: Math.random(), type: "n", english: "orange, orangish", baseForm: "oranje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "orchestra", baseForm: "orkestar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "order", baseForm: "naredba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "organization, organisation", baseForm: "organizacija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "original", baseForm: "izvorno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "other", baseForm: "drugi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "our", baseForm: "naš" });

        Words.insert({ rnd: Math.random(), type: "n", english: "outburst, burst, flareUp", baseForm: "provala" });

        Words.insert({ rnd: Math.random(), type: "n", english: "outside", baseForm: "napolju" });

        Words.insert({ rnd: Math.random(), type: "n", english: "oven", baseForm: "pećnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "own, ain", baseForm: "vlastit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "owner, possessor", baseForm: "posjednik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ozone", baseForm: "vrsta kisika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "package, bundle, packet, parcel", baseForm: "paket" });

        Words.insert({ rnd: Math.random(), type: "n", english: "page", baseForm: "stranica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pain, hurting", baseForm: "bol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "paint, pigment", baseForm: "nalič" });

        Words.insert({ rnd: Math.random(), type: "n", english: "painting, picture", baseForm: "slika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "paper", baseForm: "papir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "parallel", baseForm: "paralelan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "parent", baseForm: "roditelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "park, commons, common, green", baseForm: "park" });

        Words.insert({ rnd: Math.random(), type: "n", english: "parsnip, pastinaca sativa", baseForm: "korijen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "part, portion, component part, component, constituent", baseForm: "komad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "part, section, division", baseForm: "divizija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "particular", baseForm: "poseban" });

        Words.insert({ rnd: Math.random(), type: "n", english: "particularly, peculiarly, especially, specially", baseForm: "napose" });

        Words.insert({ rnd: Math.random(), type: "n", english: "party", baseForm: "priredba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "passenger, rider", baseForm: "putnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "passport", baseForm: "putovnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "past", baseForm: "prošlost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "past, past times, yesteryear", baseForm: "prošlost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "patient", baseForm: "strpljiv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "patient", baseForm: "bolesnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pause, intermission, break, interruption, suspension", baseForm: "prekid" });

        Words.insert({ rnd: Math.random(), type: "n", english: "payment", baseForm: "isplata" });

        Words.insert({ rnd: Math.random(), type: "n", english: "peace", baseForm: "mir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "peach", baseForm: "breskva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pear", baseForm: "kruške" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pen", baseForm: "nalivpero" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pencil", baseForm: "olovka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "people", baseForm: "ljudi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "percent, percentage, per centum, pct", baseForm: "posto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "period, time period, period of time", baseForm: "doba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "person, individual, someone, somebody, mortal, soul", baseForm: "čovjek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "personal", baseForm: "osobno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "phase, stage", baseForm: "faza" });

        Words.insert({ rnd: Math.random(), type: "n", english: "photographer, lensman", baseForm: "fotograf" });

        Words.insert({ rnd: Math.random(), type: "n", english: "picture, image, icon, ikon", baseForm: "odraz" });

        Words.insert({ rnd: Math.random(), type: "n", english: "piece", baseForm: "dio" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pig, hog, grunter, squealer, sus scrofa", baseForm: "svinja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pilot, airplane pilot", baseForm: "pilot" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pin", baseForm: "igla" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pineapple, ananas", baseForm: "ananas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pink, pinkish", baseForm: "ružičast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pipe, pipage, piping", baseForm: "cijev" });

        Words.insert({ rnd: Math.random(), type: "n", english: "place, topographic point, spot", baseForm: "stanovito mjesto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plain, field, champaign", baseForm: "ravnica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plan, program, programme", baseForm: "nacrt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plane, airplane, aeroplane", baseForm: "zrakoplov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plant, flora, plant life", baseForm: "biljka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plate", baseForm: "tanjur" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pleasure, pleasance", baseForm: "zadovoljstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "plum", baseForm: "šljiva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "poetry, poesy, verse", baseForm: "poezija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "point, dot", baseForm: "točka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "poison, toxicant, poisonous substance", baseForm: "otrov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "police, police force, constabulary, law", baseForm: "redarstveni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "policy", baseForm: "politika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "political", baseForm: "politički" });

        Words.insert({ rnd: Math.random(), type: "n", english: "politician, politico, pol, political leader", baseForm: "političar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pollution", baseForm: "zagađenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "poor, hapless, miserable, misfortunate, pathetic, piteous, pitiable, pitiful, wretched", baseForm: "siromašan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "popular, pop", baseForm: "razumljiva" });

        Words.insert({ rnd: Math.random(), type: "n", english: "population", baseForm: "stanovništvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "position, place", baseForm: "mjesto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "possible", baseForm: "moguć" });

        Words.insert({ rnd: Math.random(), type: "n", english: "possibly, perchance, perhaps, maybe, mayhap, peradventure", baseForm: "možda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "potato, white potato, irish potato, murphy, spud, tater", baseForm: "krumpir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "powder, pulverization, pulverisation", baseForm: "prašak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "power, powerfulness", baseForm: "moć" });

        Words.insert({ rnd: Math.random(), type: "n", english: "practice", baseForm: "praksa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "present", baseForm: "sadašnji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "president", baseForm: "predsjednik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pressure, pressure level, force per unit area", baseForm: "pritisak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "price, cost, toll", baseForm: "cijena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "prison, prison house", baseForm: "zatvor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "private", baseForm: "osobni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "private, individual", baseForm: "osoban" });

        Words.insert({ rnd: Math.random(), type: "n", english: "probable, likely", baseForm: "vjerojatno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "problem, job", baseForm: "poteškoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "procedure, process", baseForm: "postupak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "process, physical process", baseForm: "proces" });

        Words.insert({ rnd: Math.random(), type: "n", english: "production", baseForm: "proizvodnja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "professional, professional person", baseForm: "profesionalac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "profit, net income, net, net profit, lucre, profits, earnings", baseForm: "profit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "program, programme, computer program, computer programme", baseForm: "program" });

        Words.insert({ rnd: Math.random(), type: "n", english: "project, projection", baseForm: "projekt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "project, undertaking, task, labor", baseForm: "zadatak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pronunciation", baseForm: "izgovor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "property", baseForm: "svojstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "property, belongings, holding", baseForm: "svojstvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "proposal", baseForm: "natječaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "protest", baseForm: "prosvjed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "protest, protestation", baseForm: "prosvjed" });

        Words.insert({ rnd: Math.random(), type: "n", english: "public", baseForm: "javno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "public, populace, world", baseForm: "javnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pull, draw, force", baseForm: "izvući" });

        Words.insert({ rnd: Math.random(), type: "n", english: "pump", baseForm: "sisaljka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "punishment, penalty, penalization, penalisation", baseForm: "kazna" });

        Words.insert({ rnd: Math.random(), type: "n", english: "purpose, function, role, use", baseForm: "funkcija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "quality", baseForm: "kakvoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "question, inquiry, enquiry, query, interrogation", baseForm: "upit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "quickly, rapidly, speedily, chopChop, apace", baseForm: "brzo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "quiet", baseForm: "tih" });

        Words.insert({ rnd: Math.random(), type: "n", english: "quiet, repose, placidity, serenity, tranquillity, tranquility", baseForm: "vedrina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "radish", baseForm: "rotkvica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rain, rainfall", baseForm: "kiša" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rainbow", baseForm: "duga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "range, scope, reach, orbit, compass, ambit", baseForm: "opseg" });

        Words.insert({ rnd: Math.random(), type: "n", english: "raspberry", baseForm: "malina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rate, charge per unit", baseForm: "stopa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "reach, make, attain, hit, arrive at, gain", baseForm: "stići" });

        Words.insert({ rnd: Math.random(), type: "n", english: "reaction", baseForm: "reakcija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ready", baseForm: "spreman" });

        Words.insert({ rnd: Math.random(), type: "n", english: "real, existent", baseForm: "stvaran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "really, actually", baseForm: "stvarno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "really, truly, genuinely", baseForm: "zaista" });

        Words.insert({ rnd: Math.random(), type: "n", english: "reason, ground", baseForm: "razlog" });

        Words.insert({ rnd: Math.random(), type: "n", english: "recent", baseForm: "posljednji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "recently, late, lately, of late, latterly", baseForm: "nedavno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "record", baseForm: "rekord" });

        Words.insert({ rnd: Math.random(), type: "n", english: "recycling", baseForm: "oporaba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "region, part", baseForm: "oblast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "regular", baseForm: "redovit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "relation", baseForm: "odnosi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "relationship, human relationship", baseForm: "odnos" });

        Words.insert({ rnd: Math.random(), type: "n", english: "religion, faith, organized religion", baseForm: "vjera" });

        Words.insert({ rnd: Math.random(), type: "n", english: "religion, faith, religious belief", baseForm: "vjera" });

        Words.insert({ rnd: Math.random(), type: "n", english: "remember, retrieve, recall, call back, call up, recollect, think", baseForm: "sjetiti se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "report, study, written report", baseForm: "izvješće" });

        Words.insert({ rnd: Math.random(), type: "n", english: "representative", baseForm: "trgovački putnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "request, asking", baseForm: "molba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "research", baseForm: "znanstveno istraživanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "research, inquiry, enquiry", baseForm: "istraga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "responsibility, responsibleness", baseForm: "dužnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "responsible", baseForm: "imati odgovornost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rest, ease, repose, relaxation", baseForm: "mirnoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rest, remainder, balance, residual, residue, residuum", baseForm: "ostatak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "restaurant, eating house, eating place, eatery", baseForm: "restoran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "result, resultant, final result, outcome, termination", baseForm: "ishod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "return, homecoming", baseForm: "povratak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rhythm, beat, musical rhythm", baseForm: "ritam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rice", baseForm: "riža" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rich", baseForm: "bogat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "right", baseForm: "pravo na" });

        Words.insert({ rnd: Math.random(), type: "n", english: "right", baseForm: "desna strana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rigid, stiff", baseForm: "krut" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ring, band", baseForm: "prsten" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rise, rising, ascent, ascension", baseForm: "uspon" });

        Words.insert({ rnd: Math.random(), type: "n", english: "risk, gamble, chance, hazard, take chances, adventure, run a risk, take a chance", baseForm: "dogoditi se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "risk, hazard, jeopardy, peril, endangerment", baseForm: "opasnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "river", baseForm: "rijeka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "road, route", baseForm: "cesta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "roof", baseForm: "krov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "room", baseForm: "soba" });

        Words.insert({ rnd: Math.random(), type: "n", english: "root", baseForm: "korijen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rope", baseForm: "konop" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rough, unsmooth", baseForm: "osoran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "round, circular", baseForm: "okrugao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "royal, imperial, majestic, purple, regal", baseForm: "kraljevski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "rule, regulation", baseForm: "propisan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "run", baseForm: "trčanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sad", baseForm: "tužan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "safe", baseForm: "zaštićen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sail, canvas, canvass, sheet", baseForm: "jedro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sailor, crewman", baseForm: "mornar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "salad", baseForm: "salata" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sale", baseForm: "prodaja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "salt, table salt, common salt", baseForm: "sol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sand", baseForm: "pijesak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sandwich", baseForm: "sendvič" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sauce", baseForm: "umak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "say, tell, state", baseForm: "reći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "school, schoolhouse", baseForm: "škola" });

        Words.insert({ rnd: Math.random(), type: "n", english: "science, scientific discipline", baseForm: "znanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "scientist", baseForm: "znanstvenik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sea", baseForm: "more" });

        Words.insert({ rnd: Math.random(), type: "n", english: "season", baseForm: "sezona" });

        Words.insert({ rnd: Math.random(), type: "n", english: "seat, place", baseForm: "mjesto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "second, 2nd, 2d", baseForm: "drugi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "second, sec, s", baseForm: "sekunda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "secret", baseForm: "tajnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "secret, clandestine, cloakAndDagger, holeAndCorner, huggerMugger, hushHush, surreptitious, undercover, underground", baseForm: "tajni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "secretary, secretarial assistant", baseForm: "tajnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "section, subdivision", baseForm: "odjeljenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "see, consider, reckon, view, regard", baseForm: "držati za" });

        Words.insert({ rnd: Math.random(), type: "n", english: "seed", baseForm: "sjeme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sentence", baseForm: "rečenica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "separate", baseForm: "odvojen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "serious", baseForm: "ozbiljan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "servant, retainer", baseForm: "sluga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "service", baseForm: "usluga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "set", baseForm: "komplet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "set", baseForm: "skup" });

        Words.insert({ rnd: Math.random(), type: "n", english: "set, laid", baseForm: "ustaljen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "seven, 7, vii", baseForm: "sedam" });

        Words.insert({ rnd: Math.random(), type: "n", english: "seventy, 70, lxx", baseForm: "sedamdeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "several", baseForm: "nekoliko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sex", baseForm: "seks" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shape, form, cast", baseForm: "oblik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "share", baseForm: "udio" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sharp, acuate, acute, needlelike", baseForm: "oštar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sharp, astute, shrewd", baseForm: "pronicav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "she", baseForm: "ona" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sheep", baseForm: "ovca" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ship", baseForm: "brod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shirt", baseForm: "košulja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shock, daze, stupor", baseForm: "šok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shoe", baseForm: "cipela" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shop, store", baseForm: "dućan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "short", baseForm: "kratak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "show", baseForm: "predstava" });

        Words.insert({ rnd: Math.random(), type: "n", english: "shower", baseForm: "tuš" });

        Words.insert({ rnd: Math.random(), type: "n", english: "side", baseForm: "strana" });

        Words.insert({ rnd: Math.random(), type: "n", english: "silence, quiet", baseForm: "tišina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "silent, soundless, still", baseForm: "tih" });

        Words.insert({ rnd: Math.random(), type: "n", english: "silk", baseForm: "svila" });

        Words.insert({ rnd: Math.random(), type: "n", english: "silver, ag, atomic number 47", baseForm: "srebro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "similar", baseForm: "slično" });

        Words.insert({ rnd: Math.random(), type: "n", english: "simple, elementary, uncomplicated, unproblematic", baseForm: "lak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "simply, merely, just, only, but", baseForm: "samo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "since", baseForm: "od" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sincere", baseForm: "istinski" });

        Words.insert({ rnd: Math.random(), type: "n", english: "singer, vocalist, vocalizer, vocaliser", baseForm: "pjevač" });

        Words.insert({ rnd: Math.random(), type: "n", english: "single", baseForm: "jedan jedini" });

        Words.insert({ rnd: Math.random(), type: "n", english: "single, unmarried", baseForm: "neoženjen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sink", baseForm: "slivnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sister, sis", baseForm: "sestra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "situation, state of affairs", baseForm: "stanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "six, 6, vi, half dozen, halfDozen", baseForm: "šest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sixteen, 16, xvi", baseForm: "šesnaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sixty, 60, lx, threescore", baseForm: "šezdeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "size", baseForm: "veličina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "skilful, adept, expert, good, practiced, proficient, skillful", baseForm: "vješt" });

        Words.insert({ rnd: Math.random(), type: "n", english: "skill, science", baseForm: "spretnost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "skin, tegument, cutis", baseForm: "koža" });

        Words.insert({ rnd: Math.random(), type: "n", english: "skirt", baseForm: "suknja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sky", baseForm: "nebo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sleep, slumber", baseForm: "spavanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "slice, piece", baseForm: "komadić" });

        Words.insert({ rnd: Math.random(), type: "n", english: "slow", baseForm: "spor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "slowly, slow, easy, tardily", baseForm: "sporo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "small, little", baseForm: "malen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smell, olfactory property, aroma, odor, odour, scent", baseForm: "miris" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smile", baseForm: "smiješiti se" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smile, smiling, grin, grinning", baseForm: "osmijeh" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smog, smogginess", baseForm: "smog" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smoke, fume", baseForm: "isparina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "smooth", baseForm: "gladak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "snake, serpent, ophidian", baseForm: "zmija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "snow", baseForm: "snijeg" });

        Words.insert({ rnd: Math.random(), type: "n", english: "so", baseForm: "tako" });

        Words.insert({ rnd: Math.random(), type: "n", english: "soap", baseForm: "sapun" });

        Words.insert({ rnd: Math.random(), type: "n", english: "society", baseForm: "društvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sock", baseForm: "čarapa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "soft", baseForm: "mekan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "soldier", baseForm: "vojnika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "solid", baseForm: "krut" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sometimes", baseForm: "ponekad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "son, boy", baseForm: "sin" });

        Words.insert({ rnd: Math.random(), type: "n", english: "song, vocal", baseForm: "pjesma" });

        Words.insert({ rnd: Math.random(), type: "n", english: "soon, shortly, presently, before long", baseForm: "uskoro" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sound", baseForm: "zvuk" });

        Words.insert({ rnd: Math.random(), type: "n", english: "soup", baseForm: "juha" });

        Words.insert({ rnd: Math.random(), type: "n", english: "south, due south, southward, s", baseForm: "jug" });

        Words.insert({ rnd: Math.random(), type: "n", english: "space, infinite", baseForm: "svemir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sparse, thin", baseForm: "rijedak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "special, especial, exceptional, particular", baseForm: "poseban" });

        Words.insert({ rnd: Math.random(), type: "n", english: "specific", baseForm: "specifičan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "speech, speech communication, spoken communication, spoken language, language, voice communication, oral communication", baseForm: "govor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spelling", baseForm: "sricanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spoon", baseForm: "žlica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spring", baseForm: "opruga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spring, fountain, outflow, outpouring, natural spring", baseForm: "izvor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "spring, springtime", baseForm: "proljeće" });

        Words.insert({ rnd: Math.random(), type: "n", english: "square", baseForm: "četverokutan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "square, foursquare", baseForm: "kvadrat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "staff", baseForm: "osoblje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stage", baseForm: "pozornica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stamp", baseForm: "sprava za žigosanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stamp, postage, postage stamp", baseForm: "poštarina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "standard", baseForm: "standardan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "standard, criterion, measure, touchstone", baseForm: "kriterij" });

        Words.insert({ rnd: Math.random(), type: "n", english: "star", baseForm: "zvijezda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "state", baseForm: "stanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "state", baseForm: "država" });

        Words.insert({ rnd: Math.random(), type: "n", english: "station", baseForm: "baza" });

        Words.insert({ rnd: Math.random(), type: "n", english: "steam", baseForm: "para" });

        Words.insert({ rnd: Math.random(), type: "n", english: "steel", baseForm: "čelik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stem, stalk", baseForm: "stabljika" });

        Words.insert({ rnd: Math.random(), type: "n", english: "step, footstep, pace, stride", baseForm: "jeka koraka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "step, stair", baseForm: "stepenica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stick", baseForm: "štap" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sticky, gluey, glutinous, gummy, mucilaginous, pasty, viscid, viscous", baseForm: "ljepljiv" });

        Words.insert({ rnd: Math.random(), type: "n", english: "still", baseForm: "još uvijek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stitch", baseForm: "šav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stomach, tummy, tum, breadbasket", baseForm: "želudac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stone, rock", baseForm: "kamenac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "storm, violent storm", baseForm: "oluja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "straight", baseForm: "ravan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "strange, unusual", baseForm: "čudan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "strawberry", baseForm: "jagoda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stream, flow, current", baseForm: "tok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "street", baseForm: "ulica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "strength, force, forcefulness", baseForm: "snaga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "strong", baseForm: "snažan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "structure", baseForm: "struktura" });

        Words.insert({ rnd: Math.random(), type: "n", english: "structure, construction", baseForm: "sastav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "student, pupil, educatee", baseForm: "student" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stupid", baseForm: "glup" });

        Words.insert({ rnd: Math.random(), type: "n", english: "style", baseForm: "stil" });

        Words.insert({ rnd: Math.random(), type: "n", english: "stylish, fashionable", baseForm: "po modi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "subject, topic, theme", baseForm: "tema" });

        Words.insert({ rnd: Math.random(), type: "n", english: "subway, metro, tube, underground, subway system", baseForm: "podzemna željeznica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "success", baseForm: "uspjeh" });

        Words.insert({ rnd: Math.random(), type: "n", english: "successful", baseForm: "uspješan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "such", baseForm: "takav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sudden", baseForm: "nenadan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sugar, refined sugar", baseForm: "šećer" });

        Words.insert({ rnd: Math.random(), type: "n", english: "suitcase, bag, traveling bag, travelling bag, grip", baseForm: "ručni kovčeg" });

        Words.insert({ rnd: Math.random(), type: "n", english: "summer, summertime", baseForm: "ljeto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sun, sun", baseForm: "zvijezda sa satelitima" });

        Words.insert({ rnd: Math.random(), type: "n", english: "supermarket", baseForm: "velika samoposluga" });

        Words.insert({ rnd: Math.random(), type: "n", english: "support", baseForm: "potpora" });

        Words.insert({ rnd: Math.random(), type: "n", english: "surely, certainly, sure, for sure, for certain, sure enough, sure as shooting", baseForm: "zacijelo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "surface", baseForm: "površina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "surprise", baseForm: "iznenađenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sweet", baseForm: "sladak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "sweet, sweetness, sugariness", baseForm: "slatkoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "system, scheme", baseForm: "sustav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "table", baseForm: "stol" });

        Words.insert({ rnd: Math.random(), type: "n", english: "table, tabular array", baseForm: "tablica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tail", baseForm: "rep" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tall", baseForm: "visok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "taste, gustation, sense of taste, gustatory modality", baseForm: "naklonost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tax, taxation, revenue enhancement", baseForm: "porez" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tea", baseForm: "čajevi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "teacher, instructor", baseForm: "učitelj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "team, squad", baseForm: "momčad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "technology, engineering", baseForm: "tehnologija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "television camera, tv camera, camera", baseForm: "kamera" });

        Words.insert({ rnd: Math.random(), type: "n", english: "television, tv set, television receiver, television set, tv, idiot box, boob tube, telly, goggle box", baseForm: "televizor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ten, 10, x", baseForm: "deset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tennis, lawn tennis", baseForm: "tenis" });

        Words.insert({ rnd: Math.random(), type: "n", english: "than", baseForm: "nego" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thank you very much", baseForm: "hvala lijepa" });

        Words.insert({ rnd: Math.random(), type: "n", english: "that", baseForm: "onaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "the", baseForm: "taj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "theater, theatre, house", baseForm: "kazalište" });

        Words.insert({ rnd: Math.random(), type: "n", english: "their", baseForm: "njihov" });

        Words.insert({ rnd: Math.random(), type: "n", english: "them", baseForm: "ih, njih" });

        Words.insert({ rnd: Math.random(), type: "n", english: "then, so, and so, and then", baseForm: "onda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "theory", baseForm: "teorija" });

        Words.insert({ rnd: Math.random(), type: "n", english: "there, at that place, in that location", baseForm: "tamo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "therefore, hence, thence, thus, so", baseForm: "zato" });

        Words.insert({ rnd: Math.random(), type: "n", english: "these", baseForm: "ovi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "they", baseForm: "oni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thick", baseForm: "gust" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thin", baseForm: "tanak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thing", baseForm: "predmet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "third, 3rd, tertiary", baseForm: "treći" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thirsty", baseForm: "žedan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thirteen, 13, xiii", baseForm: "broj ili znamenka trinaest" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thirty, 30, xxx", baseForm: "trideset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "this", baseForm: "ovaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "those", baseForm: "oni" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thousand, one thousand, 1000, m, k, chiliad, g, grand, thou, yard", baseForm: "znamenka tisuću" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thousand, one thousand, 1000, m, k", baseForm: "broj tisuću" });

        Words.insert({ rnd: Math.random(), type: "n", english: "three, 3, iii", baseForm: "tri" });

        Words.insert({ rnd: Math.random(), type: "n", english: "throat, pharynx", baseForm: "ždrijelo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "throw", baseForm: "bacanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thumb, pollex", baseForm: "palac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "thunder", baseForm: "grmljavina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ticket", baseForm: "ulaznica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tie, necktie", baseForm: "kravata" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tight", baseForm: "tijesan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "time, fourth dimension", baseForm: "vrijeme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tired", baseForm: "umoran" });

        Words.insert({ rnd: Math.random(), type: "n", english: "title, entitle", baseForm: "dati ime" });

        Words.insert({ rnd: Math.random(), type: "n", english: "to", baseForm: "u" });

        Words.insert({ rnd: Math.random(), type: "n", english: "today", baseForm: "danas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "together", baseForm: "zajedno" });

        Words.insert({ rnd: Math.random(), type: "n", english: "toilet, lavatory, lav, can, john, privy, bathroom", baseForm: "toalet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tomato", baseForm: "rajčica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tomorrow", baseForm: "sutra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tomorrow", baseForm: "sutra" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tongue, lingua, glossa, clapper", baseForm: "jezik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tonight, this evening, this night", baseForm: "večeras" });

        Words.insert({ rnd: Math.random(), type: "n", english: "too, besides, also, likewise, as well", baseForm: "također" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tooth", baseForm: "zub" });

        Words.insert({ rnd: Math.random(), type: "n", english: "top, peak, summit, acme, height, elevation, pinnacle, superlative, meridian, tiptop", baseForm: "vrhunac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "total, sum, amount", baseForm: "iznos" });

        Words.insert({ rnd: Math.random(), type: "n", english: "touch, touching", baseForm: "dodir" });

        Words.insert({ rnd: Math.random(), type: "n", english: "town", baseForm: "grad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "track, rail, rails, runway", baseForm: "šine" });

        Words.insert({ rnd: Math.random(), type: "n", english: "trade", baseForm: "trgovina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "train, railroad train", baseForm: "vlak" });

        Words.insert({ rnd: Math.random(), type: "n", english: "training, preparation, grooming", baseForm: "obuka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "treat, care for", baseForm: "postupati s" });

        Words.insert({ rnd: Math.random(), type: "n", english: "treatment, handling", baseForm: "liječenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "tree", baseForm: "stablo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "trend, tendency", baseForm: "sklonost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "trick", baseForm: "lukavština" });

        Words.insert({ rnd: Math.random(), type: "n", english: "trouble, problem", baseForm: "poteškoća" });

        Words.insert({ rnd: Math.random(), type: "n", english: "true", baseForm: "istinit" });

        Words.insert({ rnd: Math.random(), type: "n", english: "try, seek, attempt, essay, assay", baseForm: "pokušaj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "twenty, 20, xx", baseForm: "dvadeset" });

        Words.insert({ rnd: Math.random(), type: "n", english: "type", baseForm: "tip" });

        Words.insert({ rnd: Math.random(), type: "n", english: "ugly", baseForm: "ružan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "under, nether", baseForm: "ispod" });

        Words.insert({ rnd: Math.random(), type: "n", english: "unemployed", baseForm: "nezaposlen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "union", baseForm: "savez" });

        Words.insert({ rnd: Math.random(), type: "n", english: "unit, unit of measurement", baseForm: "jedinična vrijednost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "university", baseForm: "sveučilište" });

        Words.insert({ rnd: Math.random(), type: "n", english: "until", baseForm: "do, sve dok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "unusual", baseForm: "neobičan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "us", baseForm: "nas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "use, usage, utilization, utilisation, employment, exercise", baseForm: "korištenje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "user", baseForm: "korisnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "usual", baseForm: "uobičajen" });

        Words.insert({ rnd: Math.random(), type: "n", english: "usual, common", baseForm: "običan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "usually, normally, unremarkably, commonly, ordinarily", baseForm: "obično" });

        Words.insert({ rnd: Math.random(), type: "n", english: "value", baseForm: "vrijednost" });

        Words.insert({ rnd: Math.random(), type: "n", english: "various, diverse", baseForm: "raznolik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "very, really, real, rattling", baseForm: "zaista" });

        Words.insert({ rnd: Math.random(), type: "n", english: "village, small town, settlement", baseForm: "selo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "violent", baseForm: "divlji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "violet, purple, purplish", baseForm: "ljubičast" });

        Words.insert({ rnd: Math.random(), type: "n", english: "visit", baseForm: "posjet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "vogue, trend, style", baseForm: "moda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "voice, vocalization, vocalisation, vocalism, phonation, vox", baseForm: "glas" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wages, reward, payoff", baseForm: "nagrada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wall", baseForm: "zid" });

        Words.insert({ rnd: Math.random(), type: "n", english: "war, state of war", baseForm: "rat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "warm", baseForm: "topao" });

        Words.insert({ rnd: Math.random(), type: "n", english: "waste, waste material, waste matter, waste product", baseForm: "otpad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "watch, ticker", baseForm: "ručni sat" });

        Words.insert({ rnd: Math.random(), type: "n", english: "water, h2o", baseForm: "voda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "we", baseForm: "mi" });

        Words.insert({ rnd: Math.random(), type: "n", english: "weak", baseForm: "slab" });

        Words.insert({ rnd: Math.random(), type: "n", english: "weather, weather condition, conditions, atmospheric condition", baseForm: "vrijeme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wedding, marriage, marriage ceremony", baseForm: "vjenčanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "week, calendar week", baseForm: "tjedan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "weekend", baseForm: "vikend" });

        Words.insert({ rnd: Math.random(), type: "n", english: "weight", baseForm: "težina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "well", baseForm: "bunar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "well, good", baseForm: "zdrav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "west, due west, westward, w", baseForm: "zapad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wet", baseForm: "mokar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "what", baseForm: "što" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wheel", baseForm: "kotač" });

        Words.insert({ rnd: Math.random(), type: "n", english: "when", baseForm: "kada" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whenever", baseForm: "uvijek" });

        Words.insert({ rnd: Math.random(), type: "n", english: "which", baseForm: "koji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "which", baseForm: "koji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "while, piece, spell, patch", baseForm: "neko vrijeme" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whip", baseForm: "bič" });

        Words.insert({ rnd: Math.random(), type: "n", english: "white", baseForm: "bijel" });

        Words.insert({ rnd: Math.random(), type: "n", english: "who", baseForm: "tko" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whole", baseForm: "cjelina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whole", baseForm: "čitav" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whom", baseForm: "kome" });

        Words.insert({ rnd: Math.random(), type: "n", english: "whose", baseForm: "čiji" });

        Words.insert({ rnd: Math.random(), type: "n", english: "why", baseForm: "zašto" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wide, broad", baseForm: "širok" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wife, married woman", baseForm: "žena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "will", baseForm: "volja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "will, testament", baseForm: "oporuka" });

        Words.insert({ rnd: Math.random(), type: "n", english: "win", baseForm: "pobjeda" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wind, air current, current of air", baseForm: "vjetar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "window", baseForm: "prozor" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wine, vino", baseForm: "vino" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wing", baseForm: "strana igrališta" });

        Words.insert({ rnd: Math.random(), type: "n", english: "winter, wintertime", baseForm: "zima" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wire", baseForm: "žica" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wise", baseForm: "mudar" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wish, wishing, want", baseForm: "želja" });

        Words.insert({ rnd: Math.random(), type: "n", english: "with", baseForm: "s" });

        Words.insert({ rnd: Math.random(), type: "n", english: "with", baseForm: "s" });

        Words.insert({ rnd: Math.random(), type: "n", english: "without", baseForm: "bez" });

        Words.insert({ rnd: Math.random(), type: "n", english: "woman, adult female", baseForm: "žena" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wood", baseForm: "drvo" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wool", baseForm: "vuna" });

        Words.insert({ rnd: Math.random(), type: "n", english: "word", baseForm: "riječ" });

        Words.insert({ rnd: Math.random(), type: "n", english: "work", baseForm: "rad" });

        Words.insert({ rnd: Math.random(), type: "n", english: "worker", baseForm: "manualni radnik" });

        Words.insert({ rnd: Math.random(), type: "n", english: "world", baseForm: "svijet" });

        Words.insert({ rnd: Math.random(), type: "n", english: "writer, author", baseForm: "pisac" });

        Words.insert({ rnd: Math.random(), type: "n", english: "writing", baseForm: "pisanje" });

        Words.insert({ rnd: Math.random(), type: "n", english: "wrong, incorrect", baseForm: "netočan" });

        Words.insert({ rnd: Math.random(), type: "n", english: "year, twelvemonth, yr", baseForm: "godina" });

        Words.insert({ rnd: Math.random(), type: "n", english: "yellow, yellowish, xanthous", baseForm: "žut" });

        Words.insert({ rnd: Math.random(), type: "n", english: "yes", baseForm: "da" });

        Words.insert({ rnd: Math.random(), type: "n", english: "you're welcome", baseForm: "nema na čemu" });

        Words.insert({ rnd: Math.random(), type: "n", english: "young, immature", baseForm: "mlado" });

        Words.insert({ rnd: Math.random(), type: "n", english: "your", baseForm: "tvoj" });

        Words.insert({ rnd: Math.random(), type: "n", english: "yourself", baseForm: "se, sebe" });
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
Accounts.onCreateUser(function (options, user) {

    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=square";
        user.profile = options.profile;
    }

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


Meteor.publish("words", function () {
    return Words.find({});
});

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId}, {fields: {'profile': 1}});
});

Meteor.publish("playerScores", function () {
    return Meteor.users.find({}, {fields: {'profile.name': 1, 'profile.stats': 1}});
});
