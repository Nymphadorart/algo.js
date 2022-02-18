let myArray = [1, 5, 6, 2, 3];
let m = Math.min.apply (Math, myArray);
let n = Math.max.apply (Math, myArray);
console.log( " Min " + m + " Max " + n);