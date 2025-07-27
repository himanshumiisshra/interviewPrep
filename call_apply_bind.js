//call ----invokes the function immediately , with this set to thisARG and accepts argument one by one



function cook(ing1, ing2) {
console.log(`${this.name} is having meals with ${ing1} and ${ing2}`);
}

const himanshu = {name: "Himanshu"}

cook.call(himanshu,'gg',"garvit")
//apply ----invokes the function immediately , with this set to thisARG and accepts arguments as an array
cook.apply(himanshu, ['gg', 'garvit']);


//bind ----returns a new function with this set to thisARG and any present arguments, but doesn't nvoke it immediately
const cookForHimanshu = cook.bind(himanshu,'gg','garvit');
cookForHimanshu();



// Differnce beween call, apply and bind
//calls ---uns the function immediately passing each argument separately
//apply -- uns the function immediately  , passing arguments as an array
//bind --- creates a new function with present this and arguments, which you can call later


