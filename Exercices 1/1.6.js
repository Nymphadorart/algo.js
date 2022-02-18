const readlineSync = require("readline-sync") ;

let a = readlineSync.question("Donne moi un nombre entier") ;
console.log("Merci, encore une questions") ;
let b = readlineSync.question("Donne moi un second nombre entier") ;
console.log("Voici le reste de la division des deux nombres", a%b);