let myPromise = new Promise(function(myResolve, myReject) {
    let sucess = true;

    if(sucess) {
        myResolve("operation was successfull")
    }else {
        myReject("Something went wrong")
    }
});

myPromise.then(function (value) { console.log(value)}, function (error) {console.log(error)})