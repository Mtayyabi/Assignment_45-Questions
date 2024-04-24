// Qs.19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const guestList = [ "Usama", "Hamza", "Rizwan", "Sohail"];
    

console.log(`${guestList[1]} and ${guestList[2]} are not coming to the dinner.`);

guestList[1] = "Tayyab";
guestList[2] = "Saud";

console.log(`I am happy to announce that, I found a bigger table so now I want to invite more people to the dinner.`);
guestList.unshift("Yasir")
guestList.push("Wasif");
guestList.splice(2,1, "Shoaib");

for(let i = 0; i<guestList.length; i++){
    console.log(`Assalamualikum, dear ${guestList[i]} I invite you to the dinner at my house on Saturday at 8 o clock.`);
}

console.log("I invite",guestList.length, "people to the dinner");