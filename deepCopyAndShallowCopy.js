const original = { namew: "himanshu", address: {city: "noida"}}

// object.assign

// const shallowCopy = Object.assign({}, original)

// using spread operator
// const shallowCopy2 = {...original}

// shallowCopy2.address.city = "New City";
// console.log("shaloow Copy", shallowCopy2);
// console.log("original", original)




// deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "new City";
console.log("Deep copy", deepCopy);
console.log("original ", original)