'use strict';

const danses = [
    "La symphonie",
    "Le rigaudon"
];
const travailleurs = [
    "de l'URSSAF",
    "des travailleurs",
    "des tâcherons"
];

function aleatoire(maximum, minimum = 0) {
    const difference = maximum - minimum;
    return (Math.floor(Math.random() * difference)) + minimum;
}

function selectionAleatoireTitreAmusant() {
    let danseIndex = aleatoire(danses.length);
    let travailleurIndex = aleatoire(travailleurs.length);
    
    let titreAmusant = `${danses[danseIndex]} ${travailleurs[travailleurIndex]} - Musique médiévale : Frédéric LAURENT - YouTube`;
    console.log(titreAmusant);

    document.title = titreAmusant;
    document.getElementsByTagName("h1")[0].children[0].innerText = titreAmusant;
}

function fonctionnementNormal() {
    let intervalle = aleatoire(2000, 6000);
    console.log(intervalle);
    setTimeout(selectionAleatoireTitreAmusant, intervalle)
    setTimeout(fonctionnementNormal, intervalle);
}

setTimeout(selectionAleatoireTitreAmusant, 0);
setTimeout(fonctionnementNormal, 0);

// Pas de commentaire