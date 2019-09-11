(function() {


    function functionHoisting() {

        function innerFunction() {
            console.log("Inner Function");
        }


        for(let index=0; index<10; index++) {
            console.log(index)
        }

        console.log("Final Value: " + index);

        innerFunction();
    }

    functionHoisting();

})();