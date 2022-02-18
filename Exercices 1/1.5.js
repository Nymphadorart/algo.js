const readlineSync = require("readline-sync") ;

let a = readlineSync.question("Donne moi un nombre avec decimale") ;
console.log("Merci, encore une questions") ;
let b = readlineSync.question("Donne moi un second nombre avec decimale") ;
console.log("Merci, c'est fini")
a = Math.round(a);
console.log("Voici la multiplication finale des deux nombres", a*b);