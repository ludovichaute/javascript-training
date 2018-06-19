//Exercice 4

/*
Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.
*/

document.getElementById('button').onclick = button;

function button(){
  
      document.getElementById("nom").value = "";
      document.getElementById("ville").value = "";
      document.getElementById("prenom").value = "";

}