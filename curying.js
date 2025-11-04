// currying -- It involves breaking down a function that takes multiple arguments into a series of functions that takse one arguemnt each



function add(s){
    return function (d){
        return s * d
    }

}

const double = add(2)
console.log(double(9))
