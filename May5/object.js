let person = {
    name: "Alice",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "gaming", "traveling"],
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.city = "New York"; 
  
  person["email"] = "alice@example.com";
  
  console.log("After insertion:", person);
  
  delete person.age;
  
  delete person.isStudent;
  
  console.log("After deletion:", person);
  
  console.log(person);
  