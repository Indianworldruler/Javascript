const person1 = {
    name: "John"
  };
  
  const person = {
    Pname: function () {
      console.log("Person name is: " + this.name);
    }
  };
  
  person.Pname.apply(person1);  
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let iter = arr[Symbol.iterator]();  
  
  console.log(iter.next()); 
  console.log(iter.next()); 
  console.log(iter.next()); 
  console.log(iter.next()); 
  