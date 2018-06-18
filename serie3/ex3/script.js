//exercice 3

/* 
Dans le fichier HTML fourni, afficher, 
dès que l'on entre une valeur dans l'input, une boite de dialogue avec la valeur de cet input.
*/

var x = document.getElementById("nom");

x.addEventListener("focusout", myOutFunction);
x.addEventListener("focusin", myFocusFunction);


document.getElementById("nom").addEventListener("keypress", input);


function myFocusFunction() {
  x.getAttributeNode("value").value = "";
}

function myOutFunction() {
  x.getAttributeNode("value").value = "Merci de votre participation";
}

function input()
{
  var input = document.getElementById("nom").value;
  alert(input);
}   

