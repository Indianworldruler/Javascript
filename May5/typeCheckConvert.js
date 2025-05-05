function detectInputType() {
    let input = prompt("Enter any value:");
    
    // Handle null (cancel)
    if (input === null) {
      console.log("You pressed cancel.");
      console.log("Type: null");
      return;
    }
  
    // Try to interpret as boolean
    if (input.toLowerCase() === "true") {
      console.log("Converted value:", true);
      console.log("Type: boolean");
      return;
    } else if (input.toLowerCase() === "false") {
      console.log("Converted value:", false);
      console.log("Type: boolean");
      return;
    }
  
    // Try to interpret as number
    let num = Number(input);
    if (!isNaN(num) && input.trim() !== "") {
      console.log("Converted value:", num);
      console.log("Type: number");
      return;
    }
  
    // Otherwise, treat as string
    console.log("Converted value:", input);
    console.log("Type: string");
  }
  
  // Call the function
  detectInputType();
  