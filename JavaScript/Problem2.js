const prompt = require("prompt-sync")();
let str = prompt("Enter the array: ");
let arr=str.split(" ").map(Number);
arr.sort().reverse();
console.log(arr);