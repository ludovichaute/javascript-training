//Exercice 4

/*
Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.
*/

document.getElementById('button').onclick = function(){button()};
function button(){
  var tab = document.getElementsByTagName("input");
    for (let i = 0; i < tab.length; i++) {
      document.getElementsByTagName("input")[i].value = "";
    }
}