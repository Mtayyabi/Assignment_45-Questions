/* 35.. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */

let animal : string [] = ["cat", "lion", "tiger"];

for(let commonCharacteristic of animal){
    console.log(`${commonCharacteristic}`)
}


for(let commonCharacteristic of animal){
    if(commonCharacteristic == "cat"){
        console.log(`${commonCharacteristic} is a good pet`)
    }else if(commonCharacteristic == "lion"){
        console.log(`${commonCharacteristic} is dangerous to be pet`)
    }else if(commonCharacteristic == "tiger"){
        console.log(`${commonCharacteristic} not a good choice to pet the ${commonCharacteristic}`)
    }
}
console.log(`Three of them have a tail, sharp claws, fast movement and three of them eat raw meat`)

//DONE