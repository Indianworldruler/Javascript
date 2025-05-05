// Set the correct password (hardcoded for this example)
const correctPassword = "secret123";

// Ask user for password
let userPassword = prompt("Enter your password:");

// Check if user cancelled
if (userPassword === null) {
  console.log("Authentication cancelled.");
} else if (userPassword === correctPassword) {
  console.log("Access granted. ✅");
} else {
  console.log("Access denied. ❌ Incorrect password.");
}
