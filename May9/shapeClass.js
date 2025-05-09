class Shape {
    area() {
        console.log("Area calculation not defined for generic shape.");
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        const result = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle: ${result.toFixed(2)}`);
        return result;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        const result = 0.5 * this.base * this.height;
        console.log(`Area of Triangle: ${result}`);
        return result;
    }
}

const myCircle = new Circle(5);
myCircle.area();  

const myTriangle = new Triangle(10, 6);
myTriangle.area();  
