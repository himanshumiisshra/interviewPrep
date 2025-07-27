// in javascript setTimeout and setInterval are functions used to schedulr a task to run after a specified amount of time

//They're both part of the web apis provided by the browser(or nodejs in a server environment) and they allow you to create delays or repeated actions in your code

//setTimeout =====  used to excute function once  after a specified delay

// setInterval-------used to execute a function repeatedly at specified intervals


//setTimeout

// const timerID = setTimeout(() => {
//     console.log("this message is ruuned after 2 seconds")
// }, 2000)

// clearInterval(timerID);

//SetInterval

const timerID = setInterval(() => {
    console.log("hello after every 2 seconds")
}, 2000)

setTimeout(() => {
clearInterval(timerID)
},6000)


