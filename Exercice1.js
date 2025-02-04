let result = 1 + 2 + 3; 


function addition3Numbers() {
    console.log('Le resultat de la somme est' + " " + result);
    console.log(`Le resultat de la somme est ${result}`);
}
addition3Numbers(result);


/* Autre méthode mais plus longue : 
function addition3Numbers (number1,number2,number3)
{
    console.log("Le resultat de la somme est" + " " + (number1 + number2 + number3))

}
let one = 1 
let two = 2 
let tree = 3 

addition3Numbers(one, two, tree) */


function addition3NumbersWithArg(number1, number2, number3)
{ 
     const resultat = number1 + number2 + number3; 
    console.log("le resultat de la somme est" + " " + resultat) 

}
let nbr1 = 3
let nbr2 = 2
let nbr3 = 4

addition3NumbersWithArg(nbr1, nbr2, nbr3)
addition3NumbersWithArg(100, 200, 300)
addition3NumbersWithArg(50, 44, 34)
