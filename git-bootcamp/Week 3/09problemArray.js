// JavaScript File
// Travis Rand
// 2/23/17
var myArray = [1, 5, 0, 1, 2];
//var reverseArray = myArray.reverse();

function printReverse () {
  console.log(myArray.reverse());
}
printReverse();

function isUniform () {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[0] != myArray[i]) {
            return false;
        }
    }
    return true;
}
console.log(isUniform());

function sumArray () {
    var result = 0;
    for (var i = 0; i < myArray.length; i++) {
        result += myArray[i];
    }
    return result;
}
console.log(sumArray());

function maximum () {
    var flag = myArray[0];
    for (var i = 0; i < myArray.length; i++) {
        /*if (myArray[i] >= myArray[i+1]) {
            flag = myArray[i];
        }
            else {
                flag = myArray[i+1];
            }*/
        if (myArray[i] > flag) {
            flag = myArray[i]
        }
    }
    return flag;
}

console.log(maximum());