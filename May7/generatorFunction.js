function* gen() {
    console.log("Hello");
    yield 12;
  
    console.log("World");
    yield 2;
  
    console.log("Goodbye");
  }
  
  const g = gen();
  
  console.log(g.next()); 
  console.log(g.next()); 
  console.log(g.next()); 
  console.log(g.next()); 
  