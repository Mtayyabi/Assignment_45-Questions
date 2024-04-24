"use strict";
/* 38. Cities: Write a function called describe_city() that accepts the name of
a city and its country.
The function should print a simple sentence, such as
Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country. */
function describeCities(city1, city2, city3, country) {
    console.log(`${city1} is in ${country = "Pakistan"}`);
    console.log(`${city2} is in ${country}`);
    console.log(`${city3} is not in ${country}`);
}
describeCities("Karachi", "Lahore", "Delhi", "");
//done
