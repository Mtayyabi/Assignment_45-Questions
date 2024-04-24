"use strict";
/* 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
let userName = ["tayyab", "admin", "usama", "faheem", "hamza", "maaz"];
if (userName.length == 0) {
    console.log(" We need to find some users!");
}
else {
    console.log("We have users now");
}
userName.length = 0; // Its remove all items from the array
if (userName.length == 0) {
    console.log(" We need to find some users!");
}
else {
    console.log("We have users now");
}
