// console.log(10>7);
// console.log(10>=7);
// console.log(50<63);
// console.log(77<=56);
// console.log(100==10);
// console.log(99!=66);

// console.log("2">1);
// console.log("02">1);comparing different datatypes dont always gives same results

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// It gives unpredictable results when we use >= because it converts here null into 0 as equality operators and null operators works differently in this.kai baar null 0 value lega kai baar Nan to inconsistency hai
// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// like null undefined takes values 0 or 1 but keep in mind ki undefined maximum times gives false results deta hai

// ye different datatypes k inconsistent wale codes jyadatar avoid kro kyunki ye confusion create krte hain

// strict check(compares datatype with values)
console.log("2"===2);

