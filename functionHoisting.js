

(function() {


    function functionHoisting() {
        
        innerFunction();


        function innerFunction() {
            console.log("Inner Function");
        }
    }

    functionHoisting();

})();


(function() {


    function functionHoisting() {

        function innerFunction() {
            console.log("Inner Function");
        }


        for(var index=0; index<10; index++) {
            console.log(index)
        }

        innerFunction();
    }

    functionHoisting();

})();