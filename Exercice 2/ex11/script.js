//Exercice 11 - utilisation des boucles et tests
/*
Créer un bouton. Au click de ce bouton, lancer la fonction calculMoyenne.

Cette fonction va calculer la moyenne des nombres entrés au clavier :

- demande à l'utilisateur d'entrer un nombre entier.
- si l'utilisateur entre autre chose qu'un nombre entier, un message d'alerte signale l'erreur et ensuite,
  la fonction redemande à l'utilisateur d'entrer un nombre entier.
- tant que le nombre entré est positif ou nul, la fonction mémorise ce nombre et l'additionne aux autres nombres précédemment entrés.
- si le nombre est négatif, alors la fonction calcule la moyenne de tous les nombres entrés en divisant la somme totale par le nombre de valeurs entrées.
- la fonction affiche le nombre de valeurs entrées
- la fonction affiche la moyenne
*/
isFloat = function(number) {
   try {
     return (number.toString().indexOf(".") != -1);
   } catch (ex) { return false; }
}

function calculMoyenne() {



var tab = [];
var nbTotal = 0;
var nbIn = 0;
var moyenne = 0;

  do {
    var input = prompt("enter un nombre entier:");
    var testIn =  isNaN(input);

    if (testIn === true || isFloat(input) === true) {
        alert("Erreur vous n'avez pas enter un nombre entier");
    } if (testIn === false && input >= 0 && isFloat(input) === false) {
      var input = parseFloat(input);
      tab.push(input);
    }
  } while (input >= 0 || testIn === true);

  for (var i = 0; i < tab.length; i++) {
    nbTotal = tab[i] + nbTotal;
    nbIn++;
  }

  moyenne = nbTotal / nbIn;

  alert("Vous avez entrés "+nbIn+" chiffre(s)\n et " +moyenne+ " est la moyenne.")


 }
