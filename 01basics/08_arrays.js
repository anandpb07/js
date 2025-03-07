const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

// Array methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop()
// pop out last element of array
// myArr.unshift(9) // adds the element to starting
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // converts array to string 

// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

console.log("A " ,myArr);
const mya1 = myArr.slice(1,3);

console.log(mya1);
console.log("B ", myArr);

const mya2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(mya2);


// splice changes the original array and slice doesnt 
// splice includes last index and slice doesnt 