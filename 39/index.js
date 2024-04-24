"use strict";
/* 43. Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */
let magician = ["Usama", "Sohail", "Rizwan"];
let phrase = "The Great";
function copyArr(arr) {
    return [...arr];
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magician[i] = `${phrase} ${magicians[i]}`;
    }
}
function showMagicians(magicians) {
    magicians.forEach(nam => {
        console.log(nam);
    });
}
const newArray = copyArr(magician);
makeGreat(magician);
console.log(`\n this is Old array`);
showMagicians(magician);
console.log(`\n this is New array`);
showMagicians(newArray);
