/*
Exercice 2
Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.

*/

document.getElementsByTagName("a")[0].addEventListener("click", afficher);
document.getElementsByTagName("a")[1].addEventListener("click", masquer);

let text = window.document.getElementById("texte");  

function afficher(){
    console.log("afficher");
    
   text.style.display = "block";
   
}
function masquer(){
    text.style.display = "none";
   
}