let fruits = ["apple", "banana", "orange", "mango", "grape"];

let userInput = prompt("Enter a fruit name to find its index:");

let index = fruits.indexOf(userInput);

if (index !== -1) {
  console.log(`The index of "${userInput}" is: ${index}`);
} else {
  console.log(`"${userInput}" is not found in the array.`);
}

