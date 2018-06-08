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
function calculMoyenne(){

    var nb = prompt("entrer un nombre entier:");
    var nombres = parseInt(nb);
    var nbr = isNaN(nb);

    while (nbr === true){
      if (nbr === true){
        alert("Erreur");
        var nb = prompt("entrer un nombre entier:");
        var nombres = parseInt(nb);
        var nbr = isNaN(nb);
      }
      else {
        while (nombres >= 0) {

        }
        var add = 0;

        for (var i = 0; i < 3; i++) {
          var nbr = prompt("entrer un nombre entier:");
          nbr = parseInt(nbr);
          add += nbr;
          }
          var nbAdd = add;

      }

      }


console.log(nbr);
console.log(nombre);
}
