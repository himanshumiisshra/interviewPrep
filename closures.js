// in javascript closure is a function that remembers the environment in which it was created even after the outer function has finished executing

// function outerFunction (){
//     let outerVariable = 'This is from outside!' 

//     function innerFunction() {
//         console.log(outerVariable)

//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction();

function counter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count
        },

        decrement: function () {
            count--;
            return count;
        },
        displayCount: function () {
            let message = `current count is ${count}`;
            return message;
        }
    }
}

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.displayCount());
console.log(myCounter.decrement());
console.log(myCounter.displayCount());
