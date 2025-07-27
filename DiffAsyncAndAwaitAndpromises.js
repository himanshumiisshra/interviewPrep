//  fetchData1().then(result1 => {
//     return fetchData2(result1)
// }).thren(result2 => {
//     console.log(result2)
// }).catch(err => {
//     console.error("ERROR", err)


// })

async function fetchData () {
    try {
        const result1 = await fetchData1();
        const result2 = await fetchData2(result1);
        console.log(result2)
        
    } catch (error) {
        console.error("ERROR", error)
    }
}

fetchData();
    