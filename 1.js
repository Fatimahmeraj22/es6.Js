
{ 
    let name = "Peter";
    console.log(name); // Peter
}


console.log(name);


const fruit = "Apple";

console.log(fruit);

fruit = "Banana";

console.log(fruit);


const firstName = "Jack";
const lastName = "Sparrow";

console.log("Hello " + firstName + " " + lastName);

const firstName = "Jack";
const lastName = "Sparrow";

console.log(`Hello ${firstName} ${lastName}`);

// function to find sum of two numbers
function sum(numA, numB = 5) {

    // default value of numB is 5
    console.log(numA + numB);
};

sum(10);  // 15

 
sum(5, 15);  // 20