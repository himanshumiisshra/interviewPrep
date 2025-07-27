function add(s){
    return function (d){
        return s * d
    }

}

const double = add(2)
console.log(double(9))
