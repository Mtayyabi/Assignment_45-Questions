/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */

let magician :string [] = ["Usama", "Sohail", "Rizwan"];

let phrase = "The Great";



function makeGreat(magicians: string []){

    for(let i = 0; i < magicians.length; i++){
      magician[i] = `${phrase} ${magicians[i]}`
        
    }
}



function showMagicians(magicians : string []){
magicians.forEach(nam => {
    console.log(nam)
});
}

makeGreat(magician)

showMagicians(magician)