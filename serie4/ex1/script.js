/*
Exercice 1
Dans le fichier HTML fourni, 
au survol de l'image ajouter une bordure de 3px rouge et la retirer 
quand la souris ne la survole plus.

*/

document.getElementById("image1").addEventListener("mouseover", mouseOver);

function mouseOver(){
    x = document.getElementById("image1");
    x.style.border = "solid 3px";
    x.style.borderColor= "red";
}