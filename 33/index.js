"use strict";
/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
message. */
function makeShirt(size, text) {
    if (size == "large") {
        console.log("I love typeScript");
    }
    else if (size == "medium") {
        console.log("I love typeScript m");
    }
    else {
        console.log(`This is the size of the shirt ${size}, and this is the tex to print on the shirt. " ${text}" `);
    }
}
makeShirt(55, "Hello");
