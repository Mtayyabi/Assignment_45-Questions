// QS.20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Quetta"];
const languages = ["Urdu", "English", "Arabic", "Pashtoo", "Balochi"];
const countries = ["Pakistan", "India", "Dubai", "Canada", "Malaysia"];

console.log("The list of items")
cities.map((items) => {
    console.log(items)
})
