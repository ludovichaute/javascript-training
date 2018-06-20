/*
Exercice 4
Dans le fichier HTML fourni, mettre les bordures 
des inputs en rouge si les mots de passe sont différents. Sinon les mettre en vert.
*/

document.getElementsByTagName("button")[0].onclick = verification;

function verification(){
    console.log("verification");
    let pass =  document.getElementById("motdepasse").value;
    let confirm =  document.getElementById("confirmation").value;
    let test = pass === confirm;
    let classTag1 = document.getElementsByTagName("input")[0]
    let classTag2 = document.getElementsByTagName("input")[1]
    console.log(pass);
    console.log(confirm);
    console.log(test);
    classTag1.classList.remove("red");
    classTag1.classList.remove("green");
    classTag2.classList.remove("red");
    classTag2.classList.remove("green");
    if (test === false) {
        classTag1.classList.add("red");
        classTag2.classList.add("red");
    } else{
        classTag1.classList.add("green");
        classTag2.classList.add("green");
    }
}

// A faire:
// une verification directement des que l'on presse une touche.