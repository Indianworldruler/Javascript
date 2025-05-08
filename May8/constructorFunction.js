function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.Pname = function () {
        console.log(this.name); 
        return this.name;
    };
}

const person1 = new Person("John", 30, "New York");
person1.Pname(); 

Person.prototype.country = "Unknown";

console.log(person1.country); 

const person2 = new Person("Alice", 25, "London");
console.log(person2.country); 