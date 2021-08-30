function square(num) {
    return num * num;
}
console.log(square(10));

function say_hello() {
    console.log('Hello');
}
say_hello();

let another = say_hello; //another reference pointing to same object
another();
