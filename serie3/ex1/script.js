//Exercice 1

//Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.

var img = document.getElementById('image1');

document.getElementById("image1").addEventListener("mouseover", mouseOver);
document.getElementById("image1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    img.getAttributeNode("src").value = "images/image1_2.jpg";
}

function mouseOut() {
  img.getAttributeNode('src').value = "images/image1.jpg";
}
