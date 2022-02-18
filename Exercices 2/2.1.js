const readlineSync = require("readline-sync") ;

let age = readlineSync.question("Quel age as tu ?");

if (age >=18) {
    console.log("Bravo tu es un.e adulte !");
}
else {
    console.log("Profites de ta jeunesse, tu n'est pas encore adulte !");
}