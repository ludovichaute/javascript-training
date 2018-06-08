//Exercice 8

/*
Créer un bouton. Au click de ce bouton, lancer la fonction jourDeLaSemaine().
Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.
*/



function jourDeLaSemaine(){
  var date =  new Date();
  var day = date.getDay();
  var text = "Nous somme: ";
  switch (day) {
    case 1:
      alert(text+"Lundi")
      break;
    case 2:
      alert(text+"Mardi")
      break;
    case 3:
      alert(text+"Mercredi")
      break;
    case 4:
      alert(text+"Jeudi")
      break;
    case 5:
      alert(text+"Vendredi")
      break;
    case 6:
      alert(text+"Samedi")
        break;
    default:
      alert(text+"Dimanche")
  }

}
