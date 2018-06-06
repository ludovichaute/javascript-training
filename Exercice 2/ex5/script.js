//Exercice 5


/*
b est toujours initialisée à 2 Quel est le résultat des opérations suivantes ?

a=b++;
a=++b;
a=b--;
a=--b;
a+=b++;
a=1; a+=++b;
a=1; a-=b++;
a=1; a-=++b;
a=1; a+=b--;
a=1; a+=--b;
Pour chacune des opérations, afficher l'opération effectuée, la valeur de a après l'opération et la valeur de b après l'opération.

*/
var a;
var b =2;

a=b++;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=++b;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=--b;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a+=b++;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=1; a+=++b;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=1; a-=b++;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=1; a-=++b;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=1; a+=b--;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
a=1; a+=--b;
console.log("valeur de a: "+a+"\nvaleur de b: "+b);
