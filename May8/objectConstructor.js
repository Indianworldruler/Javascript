function Animal(type, sound) {
    this.type = type;
    this.sound = sound;

    this.makeSound = function () {
        console.log(this.sound);
    };
}

const dog = new Animal("Dog", "Woof");
dog.makeSound(); 

const cat = new Animal("Cat", "Meow");
cat.makeSound(); 
