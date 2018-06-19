/*
Exercice 5

Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.
*/

var img = document.getElementById('image1');

document.getElementById("image1").addEventListener("mouseover", mouseOver);

function mouseOver() {  
  function start(counter){
    if(counter < 5){
      setTimeout(function(){
        counter++;
        document.querySelector("img:nth-child("+counter+")").style.zIndex = "100";
        console.log(counter);
        start(counter);
      }, 1000);
    }
  }
  start(0); 
}

