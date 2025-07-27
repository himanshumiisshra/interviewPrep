// promises--it handles asynchronous tasks in javascript by providing more readable and structured approach than callbacks or handling outputs.


// promises are split intp three parks 
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.




const data = {name: "john", age: 36, city: "new India"}


function fetchData(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(data);
       }, 2000)
    })
}

fetchData().then((data) => {
    console.log("DATA: ", data)
}).catch((err) => {
    console.error("Failed to fetch Data", err)
})