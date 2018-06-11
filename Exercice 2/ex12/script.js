// Excercice 12

/*

Créer un bouton. Au click de ce bouton, on lance la fonction conversionTemperature.

L'utilisateur choisit d'abord dans le menu affiché quel type de conversion il souhaite, il indique son choix en indiquant le numéro correspondant
dans le menu au moyen d'un prompt javascript

Ensuite, un second prompt va lui demander la température à convertir et afficher le résultat dans une boîte d'alerte.

Le menu :

Fin du programme
1. De Celsius vers Fahrenheit
2. De Celsius vers Kelvin
3. De Fahrenheit vers Celsius
4. De Fahrenheit vers Kelvin
5. De Kelvin vers Celsius
6. De Kelvin vers Fahrenheit
Pour calculer la conversion, utilisez les formules suivantes :

[°F] = ([°C] x 9/5) + 32
[K] = [°C] + 273,15
[°C] = ([°F] - 32) / (9/5)
[K] = (([°F] - 32) x (5/9)) + 273,15
[°C] = [K] - 273,15
[°F] = ([K] x 9/5) - 459,67

où [K] représente la température en kelvin
où [°F] représente la température en degrés Fahrenheit
où [°C] représente la température en degrés Celsius
*/
function conversionTemperature() {
  var kelvin, celsius, fahrenheit;

  var menu = prompt("1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit");
  menu = parseInt(menu);

  switch (menu) {
    case 1:
      var valeur = prompt("Entrer la température en celsius à convertir (en fahrenheit):");
      valeur = parseInt(valeur);
      var fahrenheit = (valeur * 9/5) + 32;
      alert("1. la temperature en celsius "+valeur+ "°C\nEn fahrenheit est égal à " +fahrenheit+ " °F");
      break;
    case 2:
      var valeur = prompt("Entrer la température en celsius à convertir (en kelvin):");
      valeur = parseInt(valeur);
      var kelvin = valeur + 273.15;
      alert("2. la temperature en celsius "+valeur+ "°C\nEn kelvin est égal à " +kelvin+ " K");
      break;
    case 3:
      var valeur = prompt("Entrer la température en fahrenheit à convertir (en celsius):");
      valeur = parseInt(valeur);
      var celsius = (valeur - 32) / (9/5);
      alert("2. la temperature en fahrenheit "+valeur+ "°C\nEn celsius est égal à " +celsius+ " °C");
      break;
    case 4:
      var valeur = prompt("Entrer la température en fahrenheit à convertir (en kelvin):");
      valeur = parseInt(valeur);
      var kelvin = (valeur - 32) * (5/9) + 273.15;
      alert("2. la temperature en fahrenheit "+valeur+ "°C\nEn kelvin est égal à " +kelvin+ " K");
      break;
    case 5:
      var valeur = prompt("Entrer la température en kelvin à convertir (en celsius):");
      valeur = parseInt(valeur);
      var celsius = valeur - 273.15;
      alert("2. la temperature en kelvin "+valeur+ "K\nEn celsius est égal à " +celsius+ " °C");
      break;
    default:
      var valeur = prompt("Entrer la température en kelvin à convertir (en fahrenheit):");
      valeur = parseInt(valeur);
      var fahrenheit = (valeur * (9/5)) - 459.67;
      alert("2. la temperature en kelvin "+valeur+ "K\nEn celsius est égal à " +fahrenheit+ " °F");

  }
}
