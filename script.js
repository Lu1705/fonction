"use strict";


let x= "samuel";
let y= "antoine";  // nous créons deux variables correspondantes à des prénoms dont nous voulons comparer l'égalité

function checkName(name1, name2){ // nous créons donc une fonction qui va tester l'égalité de deux facteur
    if(name1===name2){
        return true  // si ces deux facteurs sont égaux alors sera renvoyé à la fonction l'affirmation "true"
    } else {
        return false // si ce n'est pas le cas alors ce sera l'affirmation "false"
    }
}

let result = checkName(x, y); /*
 nous créons une nouvelle variable qui possède pour valeur l'affirmation renvoyé par la fonction lors de la comparaison de nos prénoms
*/
console.log(result); // nous allons alors faire console.log pour montrer le résultats de cette comparaison
