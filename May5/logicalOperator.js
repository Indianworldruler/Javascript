// Logical Operators Demonstration Program

let a = 10, b = 5;
let x = true, y = false;
let str = "hello", emptyStr = "";
let num = 0;

// AND (&&)
console.log("AND (&&) Examples:");
console.log("a === 10 && b === 5:", a === 10 && b === 5);           // true
console.log("x && y:", x && y);                                     // false
console.log("str && emptyStr:", str && emptyStr);                   // ""
console.log("x && a > b:", x && a > b);                             // true
console.log("num && a:", num && a);                                 // 0 (falsy)

// OR (||)
console.log("\nOR (||) Examples:");
console.log("a === 10 || b === 1:", a === 10 || b === 1);           // true
console.log("x || y:", x || y);                                     // true
console.log("emptyStr || str:", emptyStr || str);                   // "hello"
console.log("y || a < b:", y || a < b);                             // false
console.log("num || b:", num || b);                                 // 5

// NOT (!)
console.log("\nNOT (!) Examples:");
console.log("!x:", !x);                                             // false
console.log("!y:", !y);                                             // true
console.log("!str:", !str);                                         // false
console.log("!emptyStr:", !emptyStr);                               // true
console.log("!num:", !num);                                         // true

// Combined Logical Operations
console.log("\nCombined Logical Operations:");
console.log("!(a < b || x && !y):", !(a < b || x && !y));           // false
console.log("(a > b && x) || (b > a && y):", (a > b && x) || (b > a && y)); // true

// Optional: Equality and Inequality for Reference
console.log("\nEquality/Inequality:");
console.log("a !== b:", a !== b);                                   // true
console.log("a === 10:", a === 10);                                 // true
console.log("b <= a:", b <= a);                                     // true
