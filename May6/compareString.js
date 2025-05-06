function compareStrings(str1, str2) {
    return str1 === str2;
  }
  
  let input1 = prompt("Enter first string:");
  let input2 = prompt("Enter second string:");
  
  let result = compareStrings(input1, input2);
  console.log("Are the strings equal?", result);
  