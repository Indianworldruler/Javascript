
const greetArrow = () => {
    console.log("Hello from arrow function!");
  };
  
  const greetAnonymous = function() {
    console.log("Hello from anonymous function!");
  };
  
  function add(a, b) {
    console.log("Sum is:", a + b);
  }
  
  const multiply = (x, y) => {
    console.log("Product is:", x * y);
  };
  
  greetArrow();
  greetAnonymous();
  add(5, 3);         
  multiply(4, 2);     
  