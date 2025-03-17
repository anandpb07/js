
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2
}
const result = addTwoNumbers(1, 8);

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        }
    return `${username} just logged in` 
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1){   //... = rest and spread operator
    return num1
}

// console.log(calculateCartPrice(2, 45, 100));


const user = {
    username: "Anand",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

// handleObject(user)
handleObject({
    username: "Amm",
    price: 799
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));




