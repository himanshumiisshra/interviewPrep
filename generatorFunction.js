// generator Function--A generator function is a special type of function that can be paused and resumed  during its execution. it allows generating a sequence of values overtime , using the yield keyword.

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
