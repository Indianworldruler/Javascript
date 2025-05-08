class person {
    constructor(name, age, loc) {
        this.name = name;
        this.age = age;
        this.loc = loc;
    }

    PaymentMethodChangeEvent()
    {
        console.log(this.name + " " + this.age);
        return this.age;
    }
}

const p1 = new person("John", 30, "New York")

console.log(p1.Pname())
