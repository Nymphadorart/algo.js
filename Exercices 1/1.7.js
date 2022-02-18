const readlineSync = require("readline-sync") ;

let pointure = readlineSync.question("Donne moi ta popinture")
console.log("Merci, la suite..")
let date = readlineSync.question("Donne moi ton année de naissance")
console.log("Résultat du calcul", (((pointure*2+5)*50)-date)+1766 )