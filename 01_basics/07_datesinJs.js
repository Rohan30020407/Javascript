// Dates

let myDate = new Date()
// console.log(myDate)
// not able to understand as in miliseconds
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// Datatype of date is object
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// let mycreatedDate = new Date(2026,3,7)
// only for dates
// let mycreatedDate = new Date(2026, 23,4,5,15)
// for date and time
// let mycreatedDate = new Date("2026-04-23")
// for yy-mm-dd format
let mycreatedDate = new Date("04-23-2026")
// for mm-dd--yy format
// console.log(mycreatedDate.toLocaleString())
let myTimeStamp = Date.now()
// ms from 1970
// Time stamp -used for polls,quizes,comparisions

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));
// ## Converting miliseconds into seconds here 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// // indexing here from 0 so 1 behind
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    // weekday:"long"
    // weekday:"short"
    weekday:"narrow"
})
)


