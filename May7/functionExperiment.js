console.log("hello");

const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person1);              
console.log(person.fullName());   