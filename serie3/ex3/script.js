//exercice 3

/* 
Dans le fichier HTML fourni, afficher, 
dès que l'on entre une valeur dans l'input, une boite de dialogue avec la valeur de cet input.
*/

let a = document.getElementById("nom");

a.addEventListener("keypress", inputKey);

 a = document.getElementById("nom").value;

function inputKey(event){
  a = document.getElementById("nom").value;

  if (event.which == 13 || event.keyCode == 13) {
    a = document.getElementById("nom").value;
    alert(a)
    return false;
}
return true;

}