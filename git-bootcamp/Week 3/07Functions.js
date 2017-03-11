// JavaScript File
/* Travis Rand
    2/11/17 */
function functionz(){
    var input = document.getElementById("even").value;
    var isItEven = isEven(input);
    console.log(isItEven);
    
   var inputFact = document.getElementById("factory").value;
   var alternativeFacts = factorialize(inputFact);
   console.log(alternativeFacts);
    
}
   
    
    
    
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

console.log(isEven(20));

function factorialize(num) {
    if (num == 0 || num == 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

console.log(factorialize(5));

function kebabToSnake() {
    var input = document.getElementById("yoHomes").value;
    input = input.replace(/-/g, "_");
    console.log(input);
    return;
}