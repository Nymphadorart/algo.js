const readlineSync = require("readline-sync") ;

let favoritenumber = readlineSync.question("Quel est ton nombre favori?")

favoritenumber=parseInt(favoritenumber)

let n = 0;

while (n < 100 ){
    if (favoritenumber == 42) {
        console.log("Bonne réponse!");
        break;
    }
    

    else{
        console.log("Are you sure?");
        favoritenumber = readlineSync.question("Quel est ton nombre favori?");
        
    }
}