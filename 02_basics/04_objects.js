// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Anand";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)
const regularUser = {
    email: "name@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Anand",
            lastName: "Bhandarkar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2} // spread operator
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "h@gmail.com"
    
    },
    {
        id : 1,
        email: "h@gmail.com"
    
    }
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh" 
}

const{courseInstructor: instructor} = course; // destructuring the objects  
console.log(instructor);

// JSON

// {
//     "name": "Anand",
//     "coursename": "Js in Hindi",
//     "price": "999"
// }
// Json
[
    {},
    {},
    {}
]

