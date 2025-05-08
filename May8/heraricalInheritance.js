function Vehicle(brand) {
    this.brand = brand;

    this.start = function () {
        console.log(`${this.brand} is starting.`);
    };
}

function Bike(brand, type) {
    Vehicle.call(this, brand); 
    this.type = type;

    this.wheelie = function () {
        console.log(`${this.brand} bike doing a wheelie!`);
    };
}
Bike.prototype = Object.create(Vehicle.prototype);

function Car(brand, fuel) {
    Vehicle.call(this, brand);
    this.fuel = fuel;

    this.honk = function () {
        console.log(`${this.brand} car honking with ${this.fuel} fuel.`);
    };
}
Car.prototype = Object.create(Vehicle.prototype);
