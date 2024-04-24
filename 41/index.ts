/* 45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly. */

function carInfo(manufacturer:string, modelName:string, ...extraInfo:{ [key : string] : any }[]):object {
   
   const info = { 
        manufacturer,
        modelName ,
        ...Object.assign({}, ...extraInfo)
   }
return info
}

let printCarInfo = carInfo;

console.log(carInfo("Toyota","new",{color: "black"}, {Dent: 7}, {Features:["A/C", "Buffer", "Black tinted"]}))


//done
