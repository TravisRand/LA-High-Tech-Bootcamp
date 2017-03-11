// JavaScript File
//Travis Rand
//  2/11/17
var secretNumber = Math.floor((Math.random() * 10) + 1);
var guess = prompt("What is the secret number?");

if (guess == secretNumber) {
    console.log("wowzers, you got it!");
}
else if (guess < secretNumber) {
    console.log("higher!");
}
else {
    console.log("lower!");
}