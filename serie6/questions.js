var CreationTableauLangages = function () {
    let tab = [ 'Html', 'CSS', 'Java', 'PHP' ];
    return tab;
}

var CreationTableauNombres = function () {
    let tab = [ 0, 1, 2, 3, 4, 5 ];
    return tab;
}

var RemplacementElement = function (langages) {
    let tab = [ 'Html', 'CSS', 'Java', 'PHP' ];
    tab[2] = 'Javascript'
    return tab;
}

var AjoutElementLangages = function (langages) {
    let tab = [ 'Html', 'CSS', 'Javascript', 'PHP' ];
    tab.push('Ruby', 'Python');
    return tab;
}

var AjoutElementNombres = function (nombres) {
    let tab = [ 0, 1, 2, 3, 4, 5 ];
    tab.unshift(-2, -1 );
    return tab; 
}

var SuppressionPremierElement = function (langages) {
    let tab = ["Html", "CSS", "Javascript", "PHP", "Ruby", "Python"];
    tab.shift();
    return tab;
}

var SuppressionDernierElement = function (langages) {
    let tab = [ 'CSS', 'Javascript', 'PHP', 'Ruby',"Python"]
    tab.pop()
    return tab;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let chaine = "Facebook_Twitter_Google +_Viadeo_LinkedIn"
    let tab =  chaine.split(['_']);
    return tab; 
}

var ConversionTableauChaine = function (langages) {
    let tab = [ 'CSS', 'Javascript', 'PHP', 'Ruby']
    let chaine = tab.toString(); 
    return chaine
}

var TriTableau = function (reseaux_sociaux) {
    let tab = ["Facebook", "Twitter", "Google +", "Viadeo", "LinkedIn"];
    tabOrder = tab.sort();
    return tabOrder
}

var InversionTableau = function (reseaux_sociaux){
    let tab = [ 'CSS', 'Javascript', 'PHP', 'Ruby'];
    let tabReverse = tab.reverse();
    return tabReverse;
}

