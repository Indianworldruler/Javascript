const arr = ["apple", "banana", "cherry"];

console.log("Original array:", arr);
console.log("Length:", arr.length);

arr.push("date");
console.log("After push:", arr);

console.log("Popped element:", arr.pop());
console.log("After pop:", arr);

arr.unshift("avocado");
console.log("After unshift:", arr);

console.log("Shifted element:", arr.shift());
console.log("After shift:", arr);

console.log("Index of 'banana':", arr.indexOf("banana"));

console.log("Includes 'cherry'?", arr.includes("cherry"));

console.log("Slice (0, 2):", arr.slice(0, 2));
console.log("Array after slice (unchanged):", arr);

console.log("Splice at index 1, delete 1:", arr.splice(1, 1));
console.log("After splice:", arr);

const arr2 = ["elderberry", "fig"];
console.log("Concatenated array:", arr.concat(arr2));

console.log("Joined with ', ':", arr.join(", "));

console.log("Reversed array:", [...arr].reverse()); // use spread to keep original

console.log("Sorted array:", [...arr].sort());

console.log("Array to string:", arr.toString());

const filled = new Array(4).fill("x");
console.log("Filled array:", filled);

const mapped = arr.map(item => item.toUpperCase());
console.log("Mapped to uppercase:", mapped);

const filtered = arr.filter(item => item.length > 5);
console.log("Filtered (>5 chars):", filtered);

console.log("forEach output:");
arr.forEach((item, index) => {
    console.log(index + ":", item);
});
