//Exercice 10 - utilisation de la boucle for

/*
Créer un bouton. Au click de ce bouton, lancer la fonction somme.
Cette fonction demande trois fois à l'utilisateur de saisir un nombre et affiche ensuite la somme de ces trois nombres.
*/



function somme() {
  var add = 0;

  for (var i = 0; i < 3; i++) {
    var nbr = prompt("donner un nombre: ");
    nbr = parseInt(nbr);
    add += nbr;
    }
    alert(add);
}
