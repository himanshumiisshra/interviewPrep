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
