let a = [];
a.push(10);
a.push("Happy");
a.push({ name: "John" });
console.log(a);

let arr = new Array(100); //declaration of new array with size 100 (index) 
arr[0] = 1;
arr[10] = 10;
console.log(arr); //only initialized indices will be used, rest will be empty
console.log(arr[20]); //undefined
console.log(arr.length);