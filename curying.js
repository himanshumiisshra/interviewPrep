// currying --- it is used in javascript to break down complex function calls into smaller more manageable steps.it transforms a function with multiple arguments into a series of functions , each taking a single argument
// it converts a function with multiple parameters into sequence of functions
// each function takes a single argument and returns another function until all arguments  are received
// helps in functional programming by  enabling function reuseability and composition 

function add(s){
    return function (d){
        return s * d
    }

}

const double = add(2)
console.log(double(9))
