const prompt = require("prompt-sync")();
let str = prompt("Enter the sentence: ");
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
	rev += str[i];
}
console.log(rev);