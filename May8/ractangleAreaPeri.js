class Rectangle {
    // Method to calculate area
    getArea(width, height) {
        return width * height;
    }

    // Method to calculate perimeter
    getPerimeter(width, height) {
        return 2 * (width + height);
    }
}

// Create object
const rect = new Rectangle();

console.log("Area:", rect.getArea(10, 5));         // Output: 50
console.log("Perimeter:", rect.getPerimeter(10, 5)); // Output: 30
