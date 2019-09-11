(function() {


    function functionHoisting() {

        function innerFunction() {
            console.log("Inner Function");
        }


        for(var index=0; index<10; index++) {
            console.log(index)
        }

        debugger;
        console.log(`Final Index Value: ${index}`);

        innerFunction();
    }

    functionHoisting();

})();