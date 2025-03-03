let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateddate = new Date(2003, 3, 7)
// let myCreateddate = new Date(2003, 3, 7, 5, 10)
// let myCreateddate = new Date("2003-04-14");
let myCreateddate = new Date("01-14-2003")
// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default'{
    weekday: "long"
})