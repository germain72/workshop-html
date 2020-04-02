/**
 * Code JavaScript Standard
 */

/**
 * Déclarations des variables globales
 * pour toute la page web qui charge ce fichier.
 */

var message1 = "";
var message2 = "";

/**
 * Utilisation de la fonction JS alert(...)
 * Affiche par une fenêtre modale du navigateur le contenu de la variable.
 * @param {variable de type chaîne de caractères} pmessage 
 */
function afficheMessage(pmessage) {
    alert(pmessage);
}

/**
 * Utilisation de la fonction JS prompt(...)
 * affiche une fenêtre de saisie dans une fenêtre modale du naviagteur.
 * @param {variable de type chaîne de caractères} pconntenuInit 
 * @param {variable de type variant} pvaleurInit 
 */
function retourSaisie(pconntenuInit, pvaleurInit) {
    return prompt(pconntenuInit, pvaleurInit);
}

/**
 * Fonction permettant de rendre selon un id nommé 'section01' d'afficher une texte
 * dans l'attribut innerHTML d'un id nommé 'monlabel'. 
 */
function deplacement() {
    var id;
    id = 'section01';
    if (document.getElementById(id).style.visibility == "hidden") {
        document.getElementById(id).style.visibility = "visible";
        document.getElementById('monlabel').innerHTML = 'Cacher le texte';
    } else {
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById('monlabel').innerHTML = 'Afficher le texte';
    }
    return true;
}

/**
 * Cette fonction vérifie si dans le formulaire (name='formulaire'), l'input name='saisie' a été saisi
 * Attention : on passe toujours par l'objet document pour accéder directement au name d'une balise 
 * form.
 * Sinon il faut passer l'objet this en argument d'une fonction.
 */
function verif() {
    var saisie;
    saisie = document.formulaire.saisie.value;
    if (saisie == null || saisie == '') {
        //alert("Vous devez saisir");
        document.formulaire.saisie.style.backgroundColor = "red";
        document.getElementById('monlabel').innerHTML = 'Saisie non valide !';
        document.formulaire.saisie.focus();
        return false;
    } else {
        document.formulaire.saisie.style.backgroundColor = "white";
        document.getElementById('monlabel').innerHTML = 'saisie valide';

    }
    return true;
}