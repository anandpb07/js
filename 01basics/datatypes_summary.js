
// 7 types : String ,Number , Boolean ,null , undefined, Symbol , 
//  BigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);
const bigNumber = 848945322354612132849864545n
// Refrence (Non Primitive)

// Array, Object, Functions
// Primitive

const heros = ["Ironman", "Superman", "Saitama"];
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3