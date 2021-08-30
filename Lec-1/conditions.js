//< > <= >= == != ===

// a = 10 => assign
// a == 10 => value comparison i.e. LHS=RHS
// a === 10 => value and type comparison

console.log(10 == '10'); //true
console.log(10 === '10'); //false

let value = 1 + '5'; //+ operator is defined in string as concatenation aka implicit type conversion
console.log(typeof value, value);

let value2 = '5' - 1; //- operator is not defined in string
console.log(typeof value2, value2);