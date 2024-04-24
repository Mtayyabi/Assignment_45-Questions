"use strict";
/* 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
//My name is Muhammad Tayyab in this program I converted name into lower case nd Upper case
let Name = "muhammad tayyab";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
let title = Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(title);
