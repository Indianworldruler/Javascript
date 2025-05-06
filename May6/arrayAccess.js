const arr1 = new Array("this", "is", "a", "string");

console.log("First element:", arr1[0]);


arr1.push("added");
console.log("After push:", arr1);

arr1.pop();
console.log("After pop:", arr1);

for (let i = 0; i < arr1.length; i++) {
    console.log("Index", i + ":", arr1[i]);
}

for (let x of arr1) {
    console.log("Value:", x);
}
