// Test Case 1: Simple if
let score1 = 85;
if (score1 > 80) {
  console.log("Test Case 1: Passed with distinction");
}

// Test Case 2: if-else
let score2 = 45;
if (score2 >= 50) {
  console.log("Test Case 2: Passed");
} else {
  console.log("Test Case 2: Failed");
}

// Test Case 3: if-else if-else
let score3 = 70;
if (score3 >= 90) {
  console.log("Test Case 3: Grade A");
} else if (score3 >= 75) {
  console.log("Test Case 3: Grade B");
} else if (score3 >= 60) {
  console.log("Test Case 3: Grade C");
} else {
  console.log("Test Case 3: Fail");
}

// Test Case 4: Nested else-if inside if
let userRole = "admin";
let userStatus = "active";

if (userRole === "admin") {
  if (userStatus === "active") {
    console.log("Test Case 4: Admin access granted");
  } else if (userStatus === "inactive") {
    console.log("Test Case 4: Admin account is inactive");
  } else {
    console.log("Test Case 4: Unknown admin status");
  }
} else {
  console.log("Test Case 4: Not an admin");
}

// Test Case 5: Nested else-if with multiple roles
let role = "user";
let isLoggedIn = true;

if (isLoggedIn) {
  if (role === "admin") {
    console.log("Test Case 5: Admin Dashboard");
  } else if (role === "moderator") {
    console.log("Test Case 5: Moderator Panel");
  } else if (role === "user") {
    console.log("Test Case 5: User Home");
  } else {
    console.log("Test Case 5: Unknown Role");
  }
} else {
  console.log("Test Case 5: Please log in first");
}
