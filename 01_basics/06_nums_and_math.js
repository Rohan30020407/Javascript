const score = 400
// console.log(score)
// difference between automatically thinking as number and manually typing as number.

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString())

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toFixed(4))


const otherNumber = 1234.23424
// console.log(otherNumber.toPrecision(4))
// console.log(otherNumber.toPrecision(5))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(1))
// console.log(otherNumber.toPrecision(0))
// console.log(otherNumber.toPrecision())
// console.log(otherNumber.toPrecision(6))

const sau = 100000000
// console.log(sau.toLocaleString())
// According to U.S. number system

// console.log(sau.toLocaleString('en-IN'))
// According to Indian Number System 

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))
// Absolute-->negative values converted into positive only
// console.log(Math.round(4.4))
// Round-->rounds off the decimal values
// console.log(Math.round(4.6))
// console.log(Math.floor(3.9))
// console.log(Math.ceil(2.1))
// ceil-top,floor-bottom
// console.log(Math.round(4.5))
// console.log(Math.round(4.4))
// console.log(Math.min(4,6,7,1))
// console.log(Math.max(4,6,7,1))

// console.log(Math.random());
// random-it gives values between 0 and 1 in points
// console.log(Math.random()*10);
// to get values between 1 to 9 so multiplied by 10
// console.log((Math.random()*10) +1);
// if second decimal place is also 0 we are adding 1 to it to get bigger values and also using proper brackets for bodmass 
// console.log(Math.floor(Math.random()*10) +1);

const max=20
const min=10
console.log(Math.floor(Math.random() * (max - min +1))+min)