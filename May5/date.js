// Create a new Date object for the current date and time
let now = new Date();

// Get individual components
let day = now.getDate();         // Day of the month (1–31)
let hour = now.getHours();       // Hour (0–23)
let minute = now.getMinutes();   // Minute (0–59)
let second = now.getSeconds();   // Second (0–59)

// Log the values
console.log("Day:", day);
console.log("Hour:", hour);
console.log("Minute:", minute);
console.log("Second:", second);
