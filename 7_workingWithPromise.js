function workingWithPromises() {
    var userName = "Mayank";
    var age = 10;

    var myPromise = new Promise((resolve, reject) => {
        console.log("Inside Promise");

        setTimeout(() => {
            resolve({
                name: "Mayank"
            });
        }, 5000)
        
    });

    var myOtherPromise = $.get("someApiUrl");

    myPromise.then((data) => {
        debugger;
        console.log("User Data: " + data.name)
    }, (error) => {
        debugger;
        console.log("Error is: " + error.name)
    });

    myPromise.then((data) => {
        debugger;
        console.log("User Data: " + data.name + " Gupta")
    });

     myPromise.then((data) => {
         debugger;
        console.log("User Data: " + data.name + " Gupta 10")
    });


    console.log(userName);
    console.log(age);
}

workingWithPromises();