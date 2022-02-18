const readlineSync = require("readline-sync") ;

console.log("Désolée de te prendre de ton temps, on va créer une histoire ensemble")
let animal= readlineSync.question("Quel est ton animal favori ?")
console.log ("Je vais te poser encore x questions")
let country= readlineSync.question("Ou est tu ne.e ?")
console.log("Encore x questions, courage !")
let activity= readlineSync.question("Ton activité favorite ?")
console.log("Plus que x questions")
let tommorow= readlineSync.question("Que vas tu faire demain ?")
console.log("C'est l'histoire du/de la" +animal + " qui vivait a " + country + ",il/elle a voulu tester " + activity + " et finalement il/elle a " + tommorow)