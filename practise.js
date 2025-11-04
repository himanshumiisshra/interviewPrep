// async -- declaring function with makes it to return a promise
// await. -- it pauses the execution of the code until a promise is resolved or rejected

// async function fetchData() {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//         const data = await response.json();
//         console.log(data)
//     }catch(error) {
//         console.error("ERROR: ", error)
//     }
// }
// fetchData();

// call -- invokes the function immediately, with this set of arguments and accepts argument one by one
// function cook(in1, ing2) {
//     console.log(`${this.name} is having meals with ${in1} and ${ing2}`)
// }

// const himanshu = {name: "Himanshu"};

// cook.call(himanshu, 'gg','ashish')
// apply-- invokes the function immediately , with this set of arguments and accepts arguments in the form os array

// cook.apply(himanshu, ['gg','garvit'])
//bind -- return a new function with set of arguments  and doesnot invoke function immediately

// const cookForHimanshu = cook.bind(himanshu, 'gg','ashi')
// cookForHimanshu()

// closure -- in javascript closure is a feature where we can acess a variable even after the outer function has finished executed as they rememeber the environment in which they where created

// function outerFunction () {
//     let outerVariable = 'This is from outer variable'

//     function innerFunction() {
//         console.log(outerVariable)
//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction()
// closureFunction()

// function counter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         displayCount: function() {
//             const message = `current value of count is ${count}`
//             return message;
//         }
//     }
// }

// const myCounter = counter()
// console.log(myCounter.increment());
// console.log(myCounter.displayCount());
// console.log(myCounter.increment());
// console.log(myCounter.displayCount());
// console.log(myCounter.decrement());
// console.log(myCounter.displayCount())

// currying -- it involves breaking down a function that takes multiple arguments into a series of functions that takes one arfument each 

// function add(d) {
//     return function (f) {
//         return d * f;
//     }
// }

// const multi = add(6)
// console.log(multi(6)

// const original = {name: "himanshu", addresss: {city: "bhilwara"}}

// const shallowCopy = Object.assign({} , original)

// shallowCopy.addresss.city = "gandu"

// console.log(original)
// console.log(shallowCopy)

// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.addresss.city = "gandu"
// console.log(original)
// console.log(deepCopy)

//generator function -- a generator function is a special type of function that can be paused and resumed during ots execution, it allows generating a  sequence of values overtime. using the yield keyword.

// function* infiniteSequence() {
//     let num = 0;
//     while(true) {
//         yield num;
//         num++
//     }
// }

// const seq = infiniteSequence();
// console.log(seq.next().value)
// console.log(seq.next().value)
//higher order function -- the function that can either takes a function  as an argument aor return a function as a result

// const number = [1,2,3,4,5];
// const double = number.map(function (num) {
//     return num * 2;
// })


// console.log(double)

// promise -- it handles asynchronous tasks in javascript by providing more readable and structured approach than callbacks or handling outputs

const data = {name: "john", age: 30, city: "BHILWARA"}

function fetchData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(data)
        }, 1000);
    })
}

fetchData().then((data) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
})