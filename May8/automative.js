// Base Product
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.startEngine = function () {
        console.log(`${this.brand} ${this.model} engine started.`);
    };

    this.basicInfo = function () {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    };
}

// Variant 1: ElectricCar
function ElectricCar(brand, model, year, batteryRange) {
    Car.call(this, brand, model, year);
    this.batteryRange = batteryRange;

    this.charge = function () {
        console.log(`${this.model} is charging. Range: ${this.batteryRange} km.`);
    };
}
ElectricCar.prototype = Object.create(Car.prototype);

// Variant 2: SportsCar
function SportsCar(brand, model, year, topSpeed) {
    Car.call(this, brand, model, year);
    this.topSpeed = topSpeed;

    this.launchMode = function () {
        console.log(`${this.model} launching at top speed of ${this.topSpeed} km/h!`);
    };
}
SportsCar.prototype = Object.create(Car.prototype);

// Variant 3: SUV
function SUV(brand, model, year, offroadMode) {
    Car.call(this, brand, model, year);
    this.offroadMode = offroadMode;

    this.toggleOffroad = function () {
        console.log(`${this.model} Offroad mode: ${this.offroadMode ? "Enabled" : "Disabled"}`);
    };
}
SUV.prototype = Object.create(Car.prototype);

// Variant 4: LuxuryCar
function LuxuryCar(brand, model, year, massageSeats) {
    Car.call(this, brand, model, year);
    this.massageSeats = massageSeats;

    this.activateMassage = function () {
        console.log(`${this.model} massage seats: ${this.massageSeats ? "On" : "Off"}`);
    };
}
LuxuryCar.prototype = Object.create(Car.prototype);
