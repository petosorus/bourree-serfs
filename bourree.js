'use strict';

const INTERVALLE_MINIMUM = 40 * 1000;
const INTERVALLE_MAXIMUM = 2 * 60 * 1000;

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
    "Le carnaval",
    "La complainte",
    "Le canon",
    "Le bœuf",
    "La bande originale du film",
    "L'orchestre",
    "Le thème musical",
    "Le chant ethnique",
    "Le freestyle",
    "Le clip officiel de la chanson",
    "La carioca",
    "La ballade",
    "La musique"
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
    "des ananas",
    "des réceptionnistes",
    "du KRAKEEEEEEEEEEEEEN",
    "du Kraken",
    "des socialistes",
    "des communistes",
    "des travailleurs sociaux",
    "des livreurs cyclistes",
    "des salariés",
    "des cotiseurs à la caisse du régime de retraite du service public",
    "des majordomes",
    "des servants",
    "des besogneurs",
    "des procrastinateurs",
    "des plombiers portugais",
    "des valets",
    "des stewarts",
    "des hôtesses de l'air",
    "de l'Intendant du Gondor",
    "des laneurs"
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