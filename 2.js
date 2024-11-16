// function expression
let product = function(x, y) {
    return x * y;
 };
 
 result = product(5, 10);
 
 console.log(result);  // 50

 
let product = (x, y) => x * y;

result = product(5, 10);

console.log(result);  // 50

// constructor function
function Person(name) {
    this.name = name;
};

// create objects
var p1 = new Person("John");
var p2 = new Person("Rachel");

// print object properties
console.log(p1.name);  // John
console.log(p2.name);  // Rachel

// declare a class
class Person {

    // constructor function
    constructor(name) {
        this.name = name;
    };
};


let p1 = new Person("John");
let p2 = new Person("Rachel");


console.log(p1.name);  // John
console.log(p2.name);  // Rachel