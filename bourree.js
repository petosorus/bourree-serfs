'use strict';

const INTERVALLE_MINIMUM = 15 * 60 * 1000;
const INTERVALLE_MAXIMUM = 60 * 60 * 1000;

const danses = [
    "La symphonie",
    "Le rigaudon",
    "La clameur",
    "L'internationale",
    "La marche",
    "Le menuet",
    "La gigue",
    "Le branle",
    "Le bransle",
    "L'ôde",
    "La polka",
    "Le chœur",
    "L'harmonie",
    "L'hymne",
    "Le tango",
    "Le ballet",
    "L'arabesque",
    "Le boléro",
    "Le fest-noz",
    "La bourrée",
    "La valse",
    "Le bal",
    "La gavotte",
    "Le passepieds",
    "La contredanse",
    "Le quadrille",
    "L'an dro",
    "La ronde",
    "La ribambelle",
    "La mazurka",
    "La guinguette",
    "Le carnaval"
];
const travailleurs = [
    "de l'URSSAF",
    "des travailleurs",
    "des tâcherons",
    "des micro-entrepreneurs",
    "du genre travailleur",
    "des cégétistes",
    "des employés",
    "des péons",
    "des villageois",
    "des villageoises",
    "des syndiqués",
    "des macronistes",
    "des gilets-jaunes",
    "des agriculteurs",
    "des commis de cuisine",
    "des bâtisseurs",
    "de Lionel Jospin",
    "des tourneurs-fraiseurs",
    "des boulangers",
    "des pizzaïolos",
    "des enculés",
    "des serfs",
    "des esclaves",
    "du commerce triangulaire",
    "des éboueurs",
    "des caissiers",
    "du genre humain",
    "des sous-humains",
    "des videurs",
    "des anticapitalistes",
    "des ananas"
];

function aleatoire(maximum, minimum = 0) {
    const difference = maximum - minimum;
    return (Math.floor(Math.random() * difference)) + minimum;
}

function selectionAleatoireTitreAmusant() {
    let danseIndex = aleatoire(danses.length);
    let travailleurIndex = aleatoire(travailleurs.length);
    
    let titreAmusant = `${danses[danseIndex]} ${travailleurs[travailleurIndex]} - Musique médiévale : Frédéric LAURENT - YouTube`;
    // console.log(titreAmusant);

    document.title = titreAmusant;
    console.log('prout');
    document.getElementsByTagName("h1")[0].children[0].innerText = titreAmusant;
}

function fonctionnementNormal() {
    let intervalle = aleatoire(INTERVALLE_MINIMUM, INTERVALLE_MAXIMUM);
    // console.log(intervalle);
    setTimeout(selectionAleatoireTitreAmusant, intervalle)
    setTimeout(fonctionnementNormal, intervalle);
}

setTimeout(selectionAleatoireTitreAmusant, 30000);
setTimeout(fonctionnementNormal, 0);

// Pas de commentaire