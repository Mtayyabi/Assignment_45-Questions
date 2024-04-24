"use strict";
23.; //Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this.
console.clear();
//Condition 1
let carModel = "Toyota";
let con1 = carModel == "Toyota" ? "Its True" : "False";
console.log("If model is right it print true otherwise false", con1);
console.log();
//Condition 2
let age = 2;
if (age > 18) {
    console.log("You are adult");
}
else
    console.log("Not adult");
//condition 3
let phoneModel = "Samsung";
switch (phoneModel) {
    case "amsung":
        console.log("Its a good quality phone");
        break;
    case "Iphone":
        console.log("Its expensive but a good built quality");
        break;
    case "realme":
        console.log("Good phone");
        break;
    case "One plus":
        console.log("Its a flagship phone");
        break;
    default:
        console.log("Enter mobile phone model");
}
//Condition 4
let mode = "rk mode";
if (mode == "dark mode") {
    console.log("black");
}
else if (mode == "light") {
    console.log("White");
}
else {
    console.log("default");
}
//Condition 5
let Name = "Tayyab";
if (Name.length == 8 || Name.length == 7) {
    console.log("Correct lenght", Name.toUpperCase());
}
else {
    console.log("Enter correct characters", Name.charAt(4));
}
//Condition 6
let user = "Tayyab";
if (user == user.toLowerCase()) {
    console.log("Name in lowercase");
}
else {
    console.log("Print your name in lowercase");
}
//Condition 7
let num1 = 3;
let num2 = 1;
let sum = num1 + num2;
if (sum == 4) {
    console.log("Correct");
}
else {
    console.log("Please add two number that sum is equal to 4");
}
//Condition 8
//Multiple of 5
let _num1 = 4;
if (_num1 % 5 == 0) {
    console.log("Its a multiple of 5");
}
else {
    console.log("Not a multiple of a 5");
}
//Condition 9
//Number even or odd
let numEO = 5;
if (numEO % 2 == 0) {
    console.log("Its an even number", numEO);
}
else {
    console.log("Its an odd number", numEO);
}
;
//Condition 10
let time = "1:45";
time == "2:00pm" ? console.log("Open") : console.log("close");
