class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.species} makes a sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound); 
        this.color = color;
    }

    makeSound() {
        console.log(`${this.color} ${this.species} barks: ${this.sound}`);
    }
}

const myDog = new Dog("Dog", "Woof", "Brown");
myDog.makeSound();  
