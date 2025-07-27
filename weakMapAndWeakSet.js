//. weakMap === A weakmap is a collection of key-value pairs where the keys are required to be objects.
// weakSet === A collection of unique object references that can only store objects and does not allow nay primitives.
//. Both weakmap and weakSet are non iterable having no size property and are ideal for temporary data storage and memory efficient management of objects.


// weakMap
// let weakMap = new WeakMap();
// let obj = {name: "Himanshu"};
// weakMap.set(obj,"employee")
// // obj = null;
// console.log(weakMap.get(obj))


//weakSet

let weakSet = new WeakSet();
let obj = {name: "Himanshu"};
weakSet.add(obj,"employee")
// obj = null;
console.log(weakSet.has(obj))