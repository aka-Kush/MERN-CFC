//* refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let fruits = ["apple", "mango", "guava"];

//for loop
for (let idx = 0; idx < fruits.length; idx++){
    console.log(fruits[idx]);
}

//for-each loop
fruits.forEach(function (fruit) { //iterate over every index and add function to it
    console.log(fruit);
})

function eat(fruit) {
    console.log("Eat", fruit);
}
fruits.forEach(eat);

//for-of loop
for (const fruit of fruits) { //finds items on index
    console.log(fruit);
}

//for-in loop
for (const fruit in fruits) { //finds index
    console.log(fruit);
}