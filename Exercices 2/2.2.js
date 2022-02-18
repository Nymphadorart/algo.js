const readlineSync = require("readline-sync") ;

let min = readlineSync.question("Donne moi un premier nombre minimum");
let max = readlineSync.question("Donne moi un nombre maximum");

min=parseInt(min);
max=parseInt(max);

if (min < max) {
    let current = readlineSync.question("Donne moi un nombre entre les deux");
    if ((current < max ) && ( current >min)) {
        console.log("Ton nombre est bien entre " + min + " et "+ max) ;
    }
    else {
        console.log("Arrete de fumer la moquette!") ;
    }
}
