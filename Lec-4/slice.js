let items = [1, 2, 3, 4, 5];

console.log(items.slice()); //whole array
console.log(items.slice(1)); //whole array from starting index 1

let another = items.slice(3, 5); //whole array from starting index 3 and ending index 5, where 5 is included and 3 is not
console.log(another);
another[0] = 10;
console.log(another);

console.log(items.slice(-2)); //last 2 items