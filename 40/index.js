"use strict";
/* 44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich.
The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered.
Call the function three times, using a different number
of arguments each time. */
function sandwitches(order) {
    console.log(`\n What you want to add on the sandwithes?`);
    order.forEach(Element => {
        console.log("- " + Element);
    });
    console.log(`\n Thank you for the order!`);
}
sandwitches(["Lettuce", "Tomatoes", "Cucumber"]);
sandwitches([" Cheese", "Chicken", "BBQ sauce"]);
;
;
sandwitches([" Beef", "Carrot"]);