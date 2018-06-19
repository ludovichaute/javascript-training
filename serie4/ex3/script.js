/*
Exercice 3
Dans le fichier HTML fourni, changer la couleur du texte en fonction du bouton choisi.

*/

document.getElementsByClassName("color")[0].addEventListener("click", green);
document.getElementsByClassName("color")[1].addEventListener("click", red);
document.getElementsByClassName("color")[2].addEventListener("click", blue);

function green(){
    console.log("green")
    document.getElementsByTagName("p")[0].classList.add("green");
}
function red(){
    console.log("red")
    document.getElementsByTagName("p")[0].classList.add("red");
}
function blue(){
    console.log("blue")
    document.getElementsByTagName("p")[0].classList.add("blue");
}