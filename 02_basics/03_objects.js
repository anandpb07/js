
const mySym = Symbol("key1")

const JsUser = {
    name : "Anand",
    "full name" : "Anand Bhandarkar",
    [mySym] : "mykey1",   // use square brackets to declare symbols in objects
    age : 21,
    loaction : "Akola",
    mail : "anand@mail.com",
    isLoggedIn : false,

}

console.log(JsUser.mail);
console.log(JsUser["mail"]);
console.log(JsUser["full name"])
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym)

JsUser.mail = "anand.onedrive.mail.com"
// Object.freeze(JsUser);            // used to freeze the object so no changes can be done further

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());