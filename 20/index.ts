{
23. //Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this.
console.clear()
//Condition 1 True
let carModel : string = "Toyota"

let con1 = carModel == "Toyota"? "Its True" : "False";
console.log( "If model is right it print true otherwise false", con1);
console.log()

//Condition 2 True
let age = 24;

if(age > 18){
    console.log("You are adult");
}else console.log("Not adult")

//condition 3 True

let phoneModel = "Samsung"

switch(phoneModel){
    case "Samsung" :
        console.log("Its a good quality phone");
        break;
    case "Iphone":
        console.log("Its expensive but a good built quality");
        break;
    case "realme":
        console.log("Good phone");
        break;
    case "One plus":
        console.log("Its a flagship phone");
        break;
        default :
        console.log("Enter mobile phone model")
    
}

//Condition 4 True

let mode = "dark mode"

if(mode == "dark mode"){
    console.log("black")
}else if (mode == "light"){
    console.log("White");
}else {
    console.log("default")
}

//Condition 5 True

let Name = "Tayyab86"

if(Name.length == 8 || Name.length == 7){
    console.log("True", Name.toUpperCase())
}else {
    console.log("False", Name.charAt(4))
}

//Condition 6 False
let user = "Tayyab"

if(user == user.toLowerCase()){
    console.log("Name in lowercase")
}else{
    console.log("Print your name in lowercase")
}

//Condition 7 False
let num1 : number = 3; 
let num2 : number = 3 ; 
let sum = num1 + num2;
if(sum == 4){
    console.log("Correct")
}else{
    console.log("Please add two number that sum is equal to 4")
}

//Condition 8 False
//Multiple of 5
let _num1 = 3

if(_num1 % 5 == 0 ){
    console.log("Its a multiple of 5")
}else{
    console.log("Not a multiple of a 5")
}

//Condition 9
//Number even or odd False
let numEO = 5;

if(numEO % 2 == 0){
    console.log("Its an even number", numEO)
}else{
    console.log("Its an odd number", numEO)
};

//Condition 10 False

let time = "1:45"
time == "2:00pm"? console.log("Open") : console.log("close")

}