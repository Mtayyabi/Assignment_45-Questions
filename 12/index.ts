/* 15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
 */

const guestList = [ "Usama", "Hamza", "Rizwan", "Sohail"];
    

console.log(`${guestList[1]} and ${guestList[2]} are not coming to the dinner.`);

guestList[1] = "Tayyab";
guestList[2] = "Saud";

console.log(`Assalamualikum, dear ${guestList[0]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[1]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[2]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[3]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
