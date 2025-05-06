function filterRange(arr, num1, num2) {
    return arr.filter(x => x > num1 && x < num2);
  }
  
  console.log(filterRange([1, 5, 10, 15, 20], 5, 18)); 
  