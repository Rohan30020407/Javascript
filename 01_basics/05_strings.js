const name = "Rohan"
const repoCount = 2

// console.log(name + repoCount + " Value");
// not recommended less readable

// console.log(`Hello , my name is ${name} and i have ${repoCount} repo's in my github account`);

const gameName = new String("Rohan-rc-rajaji")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'))

const newstring = gameName.substring(0,6)
// console.log(newstring);


const newstring1 = gameName.substring(-8,6)
// console.log(newstring1);
// subsstring does not accept or obeys negative values ,simply gives the desired results according to positive

const anotherstring = gameName.slice(-8,4)
// console.log(anotherstring);

const string1 = gameName.slice(-10,4)
// console.log(string1)
// if range increases the lenth then the digit will be considered from starting if near ending point else ending


const string2="  rohan.     "
// console.log(string2)
// console.log(string2.trim())

const url = "https://rohan.com/rohan%20soni "
// console.log(url.replace('%20',"-"))

// console.log(url.includes('rohan'))
// console.log(url.includes('rajaji'));

// console.log(gameName.split('-'))
// console.log(gameName.split('-',2))

// console.log(gameName.big())
// console.log(gameName.blink())
// console.log(gameName.charCodeAt(3))
// console.log(gameName.codePointAt(3))
// charcode and codepoint gives same output in unicode but when we have emojiis basically divided into 2 parts then charCodeAt gives only half value and codePointAt gives us the full value as we have 2 halves-1st and 2nd.


// console.log(gameName.bold())
// console.log(gameName.concat(string2))
console.log(gameName.endsWith("rajaji"))
console.log(gameName.endsWith(""))
// if quotations only it will check with nothing and every string ends with nothing
console.log(gameName.endsWith())
// if empty means its checking its ending with undefined or not
console.log(gameName.fixed())
// teletype text(text like typewriter)