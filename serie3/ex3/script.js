//exercice 3
// Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.

document.getElementById("nom").addEventListener("keypress", myFunction);

var x = document.getElementById("myText").value;

function myFunction() {
    document.getElementById("nom").style.backgroundColor = "red";
}
