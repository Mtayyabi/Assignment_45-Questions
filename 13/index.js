"use strict";
/* 16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
const guestList = ["Usama", "Hamza", "Rizwan", "Sohail"];
console.log(`${guestList[1]} and ${guestList[2]} are not coming to the dinner.`);
guestList[1] = "Tayyab";
guestList[2] = "Saud";
console.log(`I am happy to announce that, I found a bigger table so now I want to invite more people to the dinner.`);
guestList.unshift("Yasir");
guestList.push("Wasif");
guestList.splice(2, 1, "Shoaib");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Assalamualikum, dear ${guestList[i]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
}
console.log(guestList);
// console.log(`Assalamualikum, dear ${guestList[0]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
// console.log(`Assalamualikum, dear ${guestList[1]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
// console.log(`Assalamualikum, dear ${guestList[2]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
// console.log(`Assalamualikum, dear ${guestList[3]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
// console.log(`Assalamualikum, dear ${guestList[4]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
// console.log(`Assalamualikum, dear ${guestList[5]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
