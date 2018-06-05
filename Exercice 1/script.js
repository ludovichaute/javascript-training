//Exercice 1 à 4

/*
var name = prompt("Quel est ton nom ?");
var prenom = prompt("Quel est ton prénom ?");
var ville = prompt("tu habite dans quel ville ?");


alert("Nom: " +name+ "\nPrénom: " +prenom+ "\nville: " +ville);

var nom = prompt("Quel est ton prénom ?");

alert("Bonjour: " +nom);
*/

//Exercice 5

/*
var nbOne = prompt("Saisi le premier nombre (à virgule) :");
var nbTwo = prompt("Saisi le deuxième nombre (à virgule) :");

var total = parseInt(nbOne * nbTwo );

alert("le total est: "+total);
*/

//Exercice 6
function modulo(nb1 , nb2){
  var rest = nb1 % nb2;
  return rest;
};

alert(modulo(2, 2));

//Exercice 7

var pointure = prompt("Quel est ta pointure ?");
var dateAn = prompt("Quel est ton année de naissance ?");

function total(){
  var resultat = (pointure *=2) +5;
  resultat*= 50;
  resultat-= dateAn;
  resultat+= 1766;

  return  resultat;
};

alert(total());


//Exercice 8

var age = prompt("quel est ton age ?");

if (age >= 18) {
  alert("vous êtes majeur");
} else {
  alert("vous êtes mineur");
}
