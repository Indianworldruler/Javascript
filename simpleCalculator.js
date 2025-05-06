function stringCalculator(input) {
    let expression = input.replace(/\s+/g, "");
  
    let match = expression.match(/^([-+]?\d+\.?\d*)([+\-*/])([-+]?\d+\.?\d*)$/);
  
    if (!match) {
      return "Invalid input format. Use format like: 5 + 3";
    }
  
    let num1 = parseFloat(match[1]);
    let operator = match[2];
    let num2 = parseFloat(match[3]);
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      default:
        return "Unsupported operator";
    }
  }
  
  let input = prompt("Enter calculation (e.g., 5 + 3):");
  let result = stringCalculator(input);
  console.log("Result:", result);
  