//exercice 2

/*
Dans le fichier HTML fourni, afficher une boite de dialogue avec le message :
"Merci de votre participation" quand le champ de saisie perd le focus.
*/

var x = document.getElementById("nom");

x.addEventListener("focusout", myOutFunction);
x.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
  x.getAttributeNode("value").value = "";
}

function myOutFunction() {
  x.getAttributeNode("value").value = "Merci de votre participation";
}

