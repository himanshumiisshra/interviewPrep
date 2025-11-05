// async -- declaeing a function with async makes it return a promise

// await -- it pauses the execution of the code untill the promise is resolved or rejected

// async function fetchData() {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//         const data = await response.json();
//         console.log("DATA:", data)
        
//     } catch (error) {
//         console.error("Error:", error)
        
//     }
// }

// fetchData();

// call -- invokes the function immediayely , with this set of arguments and accepts argument one by one
// function cook(ing1, ing2) {
//     console.log(`${this.name} is having meals with ${ing1} adn ${ing2}`)
// }

// const himanshu = {name: "Himanshu"}

// cook.call(himanshu, 'gg', 'garvit')

//apply -- invokes function immediately , with this set of arguments and accepts arguments as an array

// cook.apply(himanshu, ['gg', 'garvit'])

// bind -- returns a new function this set of arguments but doesn't invokes immediately

// const cookForHimanshu = cook.bind(himanshu, 'gg', 'garvit');

// cookForHimanshu();


// in javascript closure is a function that remebers the environment in which it was created even after the outer function has finished executing

// function outerFunction() {
//     let outerVariable = 'This is from outside!';

//     function innerFunction() {
//         console.log(outerVariable)
//     }

//     return innerFunction
// }

// const closureFunction = outerFunction();
// closureFunction();

// function counter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function () {
//             count--;
//             return count;
//         },

//         displayCount: function () {
//             let message  = `current count is ${count}`
//             return message;
//         }
//     }
// }

// const myCounter = counter();
// console.log(myCounter.increment());
// console.log(myCounter.displayCount());
// console.log(myCounter.increment());
// console.log(myCounter.displayCount());
// console.log(myCounter.decrement());
// console.log(myCounter.displayCount())

// currying --it is used in javascript to break down complex function calls into smaller more manageable steps.it transforms a function with multiple arguments into a series of functions, each taking a single argument
// it converts a function with multiple parameters into sequence of functions
// each function takes a single argument and returns another function untill all arguments are received
// helps in functional programming by enabling functiion resuseability and composition 

// function add(s) {
//     return function (d) {
//         return s * d
//     }
// }
// const double = add(2);
// console.log(double(9))

// const original = {name: "himanshu", address: {city:"Bhilwara"}}

// Object assign

// const shallowCopy = Object.assign({}, original);

// const shallowCopy = {...original};
// shallowCopy.address.city = "New City";
// console.log("Shallow Copy", shallowCopy)
// console.log("Original", original)


// Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.address.city = "new City";
// console.log("Deep Copy", deepCopy);
// console.log("Original", original)
