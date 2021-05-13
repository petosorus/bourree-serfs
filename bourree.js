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
    ["Le branle", "Le bransle"],
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
    "La musique",
    "Le psaume démoniaque"
];
const travailleurs = [
    "de l'URSSAF",
    ["des travailleurs", "des travailleuses"],
    ["des tâcherons", "des tâcheronnes"],
    ["des micro-entrepreneurs", "des micro-entrepreneuses"],
    "du genre travailleur",
    "des cégétistes",
    ["des employés", "des employées"],
    "des péons",
    ["des villageois", "des villageoises"],
    ["des syndiqués", "des syndiquées"],
    "des macronistes",
    "des gilets-jaunes",
    ["des agriculteurs", "des agricultrices"],
    "des commis de cuisine",
    ["des bâtisseurs", "des bâtisseuses"],
    "de Lionel Jospin",
    "des tourneurs-fraiseurs",
    ["des boulangers", "des boulangères"],
    "des pizzaïolos",
    ["des enculés", "des enculées"],
    "des serfs",
    "des esclaves",
    "du commerce triangulaire",
    ["des éboueurs", "des éboueuses"],
    ["des caissiers", "des caissières"],
    "du genre humain",
    ["des sous-humains", "des sous-humaines"],
    ["des videurs", "des videuses"],
    "des anticapitalistes",
    "des ananas",
    "des réceptionnistes",
    ["du KRAKEEEEEEEEEEEEEN", "du Kraken"],
    "des socialistes",
    "des communistes",
    "des travailleurs sociaux",
    "des livreurs cyclistes",
    ["des salariés", "des salariées"],
    "des cotiseurs à la caisse du régime de retraite du service public",
    "des majordomes",
    ["des servants", "des servantes"],
    ["des boniches", "des bonniches"],
    ["des besogneurs", "des besogneuses"],
    ["des procrastinateurs", "des procrastinatrices"],
    "des plombiers portugais",
    "des valets",
    ["des stewarts", "des hôtesses de l'air"],
    "de l'Intendant du Gondor",
    ["des laneurs", "des laneuses"],
    "de Satan"
];

function aleatoire(maximum, minimum = 0) {
    const difference = maximum - minimum;
    return (Math.floor(Math.random() * difference)) + minimum;
}

function selectionAleatoireTitreAmusant() {
    let danseIndex = aleatoire(danses.length);
    let travailleurIndex = aleatoire(travailleurs.length);

    let danseSelectionnee = danses[danseIndex];
    let travailSelectionne = travailleurs[travailleurIndex];

    if (Array.isArray(danseSelectionnee)) {
        let index = aleatoire(danseSelectionnee.length);
        danseSelectionnee = danseSelectionnee[index];
    }

    if (Array.isArray(travailSelectionne)) {
        let index = aleatoire(travailSelectionne.length);
        travailSelectionne = travailSelectionne[index];
    }

    
    let titreAmusant = `${danseSelectionnee} ${travailSelectionne} - Musique médiévale : Frédéric LAURENT - YouTube`;
    // console.log(titreAmusant);

    document.title = titreAmusant;
    console.log('prout');
    document.getElementsByTagName("h1")[1].children[0].innerText = titreAmusant;
}

function fonctionnementNormal() {
    let intervalle = aleatoire(INTERVALLE_MINIMUM, INTERVALLE_MAXIMUM);
    // console.log(intervalle);
    setTimeout(selectionAleatoireTitreAmusant, intervalle)
    setTimeout(fonctionnementNormal, intervalle);
}

setTimeout(selectionAleatoireTitreAmusant, 5000);
setTimeout(fonctionnementNormal, 0);

// Pas de commentaire