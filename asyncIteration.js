function iteratorFunction() {
    for(var i=0; i< 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}


function iteratorFunctionOther() {

    var i;
    
    for(i=0; i< 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}

iteratorFunctionOther();