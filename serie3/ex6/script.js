/*
Exercice 5

Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.
*/

var img = document.getElementById('image1');

document.getElementById("image1").addEventListener("mouseover", mouseOver);
document.getElementById("image5").addEventListener("mouseout", mouseOut);

var zPlus = 0;


function mouseOver() { 
  console.log('in'); 
  function start(counter){
    if(counter < 5){
      setTimeout(function(){
        zPlus++;
        counter++;
        document.querySelector("img:nth-child("+counter+")").style.zIndex = zPlus;
        console.log(counter);
        start(counter);
      }, 2000);
    }
  }
  start(0);  
}


function mouseOut() {
  console.log('out');
  zPlus++;
  document.querySelector("img:nth-child(1)").style.zIndex = zPlus;
}