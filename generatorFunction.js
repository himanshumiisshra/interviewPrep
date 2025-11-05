// generator function --  A generator function is a special type of function that can be paused or resumed during its execution.It allows generating a sequence of values over time, using the yield function


function* infiniteSequence(){
    let num = 0;
    while(true){
        yield num;
        num++;

    }
}

const seq = infiniteSequence()
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
