// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol ,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 65675675656756756n
// no.- very large by using n in alst becomes bigInt

const heroes = ['doga', 'nagraaj', 'Shaktimaan']


// Reference(Non-Primitive)

// Array, Objects, Functions

let myObj = 
{
    name:"Rohan",
    age:"22",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof (bigNumber));//undefines as commented
console.log(typeof outsideTemp);//null datatype is object
console.log(typeof scoreValue);//number
console.log(typeof myFunction);//function
console.log(typeof myObj);//object
console.log(typeof heroes);//object
console.log(typeof anotherId);//Symbol


// 🔹 Important Types jo typeof return karta hai:
// Value	        Output
// 10	            number
// "hello"	        string
// true	        boolean
// undefined	    undefined
// null	        object ❗ (ye JS ka famous bug hai)
// {}	             object
// function(){}	function



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Stack (Primitive),Heap (Non-Primitive)

let myYoutubename = "RohanSonidotcom"

