class Human {
    static population = [];
    #surname = undefined;
    #fatherName = undefined;

    constructor(name) {
        this.name = name;
        this.#surname = "Doe"; //private
        this.#fatherName = null;
        this.hands = 2;
        this.money = 1000;
        Human.population.push(this);
    }
    accident = function () {
        if (this.hands > 0) {
            this.hands -= 1;
        }
    }
    party = function () {
        if (this.money >= 200) {
            this.money -= 200;
            console.log("Party!!!");
        }
        else {
            console.log("Get some money");
        }
    }
    get surname(){ //getter function binds an object property to a function that will be called when that property is looked up
        return this.#surname; //it can be used to access private property outside class
    }
    get fatherName() {
        return this.#fatherName;
    }
    set fatherName(value) { //setter function binds an object property to a function to be called when there is an attempt to set that property
        this.#fatherName = value; //it can be used to change the value of a private property outside the class
    }
}

let john = new Human("John");
let sam = new Human("Sam");

// sam.accident();
// john.party();
// john.party();
// john.party();
// john.party();
// john.party();
// john.party(); //not enough money

// john.surname = "Smith" //this will not work as surname is a getter function, not a setter function
// console.log(john.surname); //private ; not accessible outside class *if getter function is not declared*

sam.fatherName = "Ronny";
console.log(sam.fatherName);

// console.log(Human.population);
// console.log(john, sam);
