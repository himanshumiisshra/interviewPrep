// whats is a scope ----- A scope is a certain region of program where a defined variable is exist and can be recognized and beyond that it cannot be recognized. There can be multiple type of scopes for instance bloack scope,global scope , functional scope etc...

// var a = 5; // globl scope
// console.log(a)

//block scope
//  {
//      let a = 5;  //wont't be able to access outside curly braces if declared using let or const  
//      console.log(a)
// }

// variable shaddowing

// function test() {
//     let a  = 'Hello';

//     if(true){
//         let a = 'hell';  // only let works if try redeclaring using var then it will throw error and this is called illegal shaddowing
//         console.log(a)
//     }

//     console.log(a)

// }
// test()

// Declaration
// if try to declare vriable like we did below using let it will throw an error and same goes with const
// so let and const cannot be redeclare within same scope
// var a;
// var a;

// this will works cause of variable shafddowing
// let a;
// {
//     let a;
// }

// Declaration without initialisation
// only const  throws an error for declaration without initialisation
// const   a;

// Re Initialisation





