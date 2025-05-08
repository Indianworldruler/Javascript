function Person(name, age, loc) {
    this.name = name;
    this.age = age;
    this.loc = loc;

    this.Prame = function () {
        console.log("Hi");
    };
}


const p2 = new Person("John", 30, "New York");

Person.prototype.con = "India";

console.log(p2.con); 
