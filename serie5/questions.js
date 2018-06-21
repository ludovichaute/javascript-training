/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  var result = "ceci est une chaine de autant ";
  return result.length;
}
var remplaceECar = function (texte) {
    return 'C  texte à une certaine taille';
}
var concatString = function (texte1, texte2) {
    return 'Le javascript est super';
}
var afficherCar5 = function (texte) {
    var result = "ceci est une chaine de autant ";
    var e = result[5]
    return e;
}
var afficher9Car = function (texte) {
    return 'Je dirait';
}
var majusculeString = function (texte) {
    var texte = "un autre excellent exercice";
    var maj = texte.toUpperCase();
    return maj;
}
var minusculeString = function (texte) {
    var texte = "CELUI CI AUSSI!";
    var min = texte.toLowerCase();
    return min;
}
var SupprEspaceString = function (texte) {
    var texte = ' Rome ne s\'est pas construite en un jour ';
    var suppr = texte.substring(1, texte.length-1);
    return suppr;
}
var IsString = function (texte) {
    var texte = "dsqd";
    var test = isNaN(texte)
    return test;
}
var AfficherExtensionString = function (texte) {
    var file = "photo.jpg"; 
    var extFile= file.substring(file.lastIndexOf(".")+1, file.length);
    return extFile;
    }

var NombreEspaceString = function (texte) {
    let chaine = " hello world at becode ";
    let chaineSpace = " ";
    let nbChaine = 0;
    for (let i = 0; i < chaine.length; i++) {
        let test = chaine[i] === chaineSpace;
        if (test) {
            nbChaine++;
        }
    }
    return nbChaine;
}
var InverseString = function (texte) {
    let chaine = 'Après demain, à partir d\'aujourd\'hui?';
    let splitString = chaine.split("");
    let arrayReverse = splitString.reverse();
    let arrayJoin = arrayReverse.join("");
    return arrayJoin;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
   let calcul =  Math.pow(2,3); 
   return calcul;
}
var valeurAbsolue = function (nombre) {
    return 5;
}
var valeurAbsolueArray = function (array) {
    let tab = [5, 50, 25, 568];
    return tab;
}
var sufaceCercle = function (rayon) {
    let perimetre = Math.round(2 * Math.PI * 12.5);
    return perimetre;
}
var hypothenuse = function (ab, ac) {
    return 9.433981132056603
}
var calculIMC = function (poids, taille) {
    var imc =  parseFloat(decimal(65 / (1.75 * 1.75)));
    return imc;
}
function decimal(x) {
    return Number.parseFloat(x).toFixed(2);
  }


