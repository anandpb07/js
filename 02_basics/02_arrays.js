const marvel_heros = ["thor","Ironman","Spidermab"];
const dc_heros = ["Superman","flash","Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

// const allnewheros = [...marvel_heros,...dc_heros];
// console.log(allnewheros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4,5]]];
const real_anotherarray = another_array.flat(Infinity);

console.log(real_anotherarray);
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));