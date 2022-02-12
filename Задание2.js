let age;
console.log (typeof age); // "undefined"
let num = 20;
console.log (typeof num); // "number"
let cif = 1234569n;
console.log (typeof cif); // "bigInt"
let str = 'Привет';
console.log (typeof str); // "string"
let TF = true;
console.log (typeof TF); // "boolean"
let sim = Symbol();
console.log (typeof sim); // "symbol"
let user = {age:30};
console.log (typeof user); // "object"
let per = null;
console.log (typeof per); // "object"  (1)
let us = function(){};
console.log (typeof us); // "function"  
