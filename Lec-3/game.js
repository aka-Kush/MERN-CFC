class Human {
    constructor(name) {
        this.name = name;
        this.alive = true;
    }

    dance = function() {
        console.log(this.name, "is dancing.");
    }
}

class Shooter extends Human {
    constructor(name) {
        super(name);
        this.kills = 0;
    }

    kill = function (target) {
        target.alive = false;
        console.log();
    }
}

// class Zombie extends Human {
//     constructor(name) {
//         super(name);
//         this.name = false;
//         this.kills = 0;
//     }
// }

let joe = new Human("Joe Mama");
let doe = new Shooter("Doe Sam");
// let ded = new Zombie("Ded Sir");

console.log(joe);
console.log(doe);
// console.log(ded);

// joe.dance();
// doe.dance();