//Exercice 9 - utilisation de la boucle while

/*
Créer un bouton. Au click de ce bouton, lancer la fonction testWhile.
Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant la lettre p,
et le redemande tant que l'utilisateur ne l'a pas fait.
Il affiche ensuite la chaîne saisie entre guillemets.
*/



function testWhile() {
  let verif = false;
  while (verif == false){
    let lettre = prompt("entrer un mot content la lettre p")
    let lettrelow = lettre.toLocaleLowerCase();
    verif = lettrelow.includes("p");
  }
  alert("\""+lettre+'"');


}
