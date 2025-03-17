
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

console.log(loginUserMessage())