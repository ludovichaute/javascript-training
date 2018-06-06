//Exercice 7

function faireChoix(){
    var x = prompt("choix")
    var choix = parseInt(x);

    switch (choix){
      case 1:
        alert("1. Merci");
        break;
      case 2:
        alert("2. Bonjour");
        break;
      case 3:
        alert("3. Au revoir")
        break;
      default:
      alert("Pardon, que voulez-vous ?");
        break;
    }

}
