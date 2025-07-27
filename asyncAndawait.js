// async --- declaring  function with async makes it return a promise

// await --- it pauses the execution of the code untill the promise it's waiting for is resolved , then returns the resolved value


async function fetchData () {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const data = await response.json();
        console.log("DATA: ", data)

    }catch(error) {
        console.error("ERROR", error)
    }
}

fetchData();