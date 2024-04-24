"use strict";
/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program. */
const guestList = ["Usama", "Hamza", "Rizwan", "Sohail"];
console.log(`${guestList[1]} and ${guestList[2]} are not coming to the dinner.`);
console.log(`I can invite only two people for the dinner.`);
guestList[1] = "Tayyab";
guestList[2] = "Saud";
guestList.unshift("Yasir");
guestList.push("Wasif");
guestList.splice(2, 1, "Shoaib");
console.log(`\n I am sorry ${guestList[0]} I can’t invite you to dinner`);
guestList.splice(0, 1);
console.log(`\n I am sorry ${guestList[0]} I can’t invite you to dinner`);
guestList.splice(0, 1);
console.log(`\n I am sorry ${guestList[0]} I can’t invite you to dinner`);
guestList.splice(0, 1);
console.log(`\n I am sorry ${guestList[0]} I can’t invite you to dinner`);
guestList.splice(0, 1);
for (let i = 0; i < guestList.length; i++) {
    console.log(`\n Assalamualikum, dear ${guestList[i]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
}
guestList.splice(0, 2);
console.log(`\n Empty List ${guestList}`);
// I have done 17 question from the 45 questions. Its 2:30 am 02/29/2024 Thursday
console.log(guestList);
