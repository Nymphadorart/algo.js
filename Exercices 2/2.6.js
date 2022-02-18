const readlineSync = require("readline-sync") ;

let day = readlineSync.question("Donnez un nombre entre 1 et 7 svp")

if (day > 0 && day <= 7) {
        if(day == 1){
        console.log("Lundi");
    }
    else if (day == 2){
        console.log("Mardi");
    }
    else if (day == 3){
        console.log("Mercredi");
    }
    else if (day == 4){
        console.log("Jeudi");
    }
    else if (day == 5){
        console.log("Vendredi");
    }
    else if (day == 6){
        console.log("Samedi");
    }
    else if (day == 7){
        console.log("Dimanche")
    }
}
else{
    console.log("On avait dis entre 1 et 7, qu'est ce que vous n'avez pas compris ?")
}
 