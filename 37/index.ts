/*41. Magicians: Make a array of magician’s names.
Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */ 

let magician :string [] = ["Usama", "Sohail", "Rizwan"];

function showMagicians(magicians : string []){
magicians.forEach(nam => {
    console.log(nam)
});
}
showMagicians(magician)