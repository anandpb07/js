let a = 10;
const b = 20;
// .. scope is the two curly brackets = {}
// console.log(c);

if (true) {
    let a = 100
    const b = 200
    // console.log("Inner: ", a)
}
// console.log(a);

//Nested Scope

function one(){
    const username = "Anand"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    // two()
}
one()

if(true){
    const username = "Anand"
    if(username === "Anand"){
        const website = " youtube"
        // console.log(username + website);   
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
console.log(addone(5));


function addone(num){
    return num + 1
}

addTwo(5)

const addTwo = function(num){
    return num + 2;
}


