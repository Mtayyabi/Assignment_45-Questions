"use strict";
const guestList = ["Usama", "Hamza", "Rizwan", "Sohail"];
console.clear();
console.log(`${guestList[1]} and ${guestList[2]} are not coming to the dinner.`);
guestList[1] = "Tayyab";
guestList[2] = "Saud";
console.log(`Assalamualikum, dear ${guestList[0]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[1]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[2]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
console.log(`Assalamualikum, dear ${guestList[3]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
