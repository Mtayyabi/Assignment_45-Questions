"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following.
//• Tests for equality and inequality with strings
let userName = "Tayyab";
let userNameTwo = "tayyab";
let userNameThree = "tayyabi";
if (userName == userNameTwo) {
    console.log("Same name");
}
else {
    console.log("Different");
}
if (userName != userNameTwo) {
    console.log("Not same");
}
else {
    console.log("Same");
}
// • Tests using the lower case function
if (userName == userName.toLowerCase()) {
    console.log(" correct case");
}
else {
    console.log("Type in lowercase");
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Numerical tests involving equality and inequality
//Equality
let num = 4;
if (num % 2 == 0) {
    console.log("Its an even num");
}
else {
    console.log("Its an odd nuber");
}
//Inequality
let numI = 5;
if (numI % 2 != 0) {
    console.log("Its an odd nuber");
}
else {
    console.log("Its an even nuber");
}
//Greater than and less than.
// >>>
let age = 18;
if (age > 18) {
    console.log("Adult");
}
else {
    console.log("Not adult");
}
//<<
let price = 999;
if (price < 1000) {
    console.log("Under my range");
}
else {
    console.log("Not in my range");
}
//Greater than or equal to.
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Not adult");
}
//Less than or equal to
if (price <= 1000) {
    console.log("In my range");
}
{
    // • Tests using "and" and "or" operators
    let mobile = "xiomi";
    if (mobile == "samsung") {
        console.log("Buy it");
    }
    else if (mobile == "tecno" || "spark" || "infinix") {
        console.log("Don't buy it");
    }
    else if (mobile == "xiomi" && "realme") {
        console.log("Good companies");
    }
    else {
        console.log("Enter company name");
    }
}
// • Test whether an item is in a array
let arr = ["Tayyab", "Yasir"];
if (arr.includes("Tayyab")) {
    console.log("Item in array");
}
// • Test whether an item is not in a array
if (arr.includes("Hamza")) {
    console.log("Its in array");
}
else {
    console.log("Not in Array");
}
