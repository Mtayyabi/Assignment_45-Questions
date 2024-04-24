"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favFruits = ["Mango", "Banana", "Apple", "Lichi",];
if (favFruits.includes("Mango")) {
    console.log("yes Mango in the array");
}
else {
    console.log("no mango not in the array");
}
if (favFruits.includes("Apple")) {
    console.log(`yes Apple in the array`);
}
else {
    console.log("no Apple not in the array");
}
if (favFruits.includes("Guava")) {
    console.log(`yes Guava in the array`);
}
else {
    console.log("no Guava not in the array");
}
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//1
if (favFruits.includes("Mango")) {
    console.log("Tayyab really like mango!");
}
//2
if (favFruits.includes("Orange")) {
    console.log("Tayyab really like orange!");
}
//3
if (favFruits.includes("Guava")) {
    console.log("Tayyab really like guava!");
}
//4
if (favFruits.includes("Lichi")) {
    console.log("Tayyab really like lichi!");
}
//5
if (favFruits.includes("Banana")) {
    console.log("Tayyab really like guava!");
}
