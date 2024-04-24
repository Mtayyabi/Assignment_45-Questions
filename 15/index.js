"use strict";
/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
//. Store the locations in a array. Make sure the array is not in alphabetical order.
const placesToVisit = ["India", "USA", "Saudia Arabia", "Dubai", "France", "Germany", "Africa"];
//• Print your array in its original order.
console.log("\n In original order", placesToVisit);
//• Print your array in alphabetical order without modifying the actual list.
console.log("\n In A to Z sorted order without modifying original", [...placesToVisit.sort()]);
// const inAlphabeticOrder = placesToVisit.toSorted();
// console.log("In A to Z sorted order without modifying original",inAlphabeticOrder);
//• Show that your array is still in its original order by printing it.
console.log("\n In original order after sorted", placesToVisit);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n In Z to A order without modifying original", [...placesToVisit.sort().reverse()]);
// const inReverseAlphabeticalOrder = placesToVisit.toSorted().toReversed();
// console.log("In Z to A order without modifying original",inReverseAlphabeticalOrder);
//• Show that your array is still in its original order by printing it again.
console.log("\n In original order after reversed alphabetical order", placesToVisit);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Order has been chabged ", [...placesToVisit.reverse()]);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n In reverse order", [...placesToVisit.reverse()], "and in original order ", placesToVisit);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("\n After sort in original order", placesToVisit);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.reverse();
console.log(placesToVisit);
