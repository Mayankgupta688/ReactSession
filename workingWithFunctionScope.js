window.age = 10;

(function() {

    var desig = "ABC";

    function functionScope() {
        var userNameData = "Mayank";

        function innerFunction() {
            var data = "xyz";
            console.log(age);
            console.log(desig)
            console.log(userNameData);
            console.log(data);
        }

        return {
            dummyFunction: innerFunction
        }
    }

    var returnData = functionScope();

    returnData.dummyFunction();

    console.log(age);
    console.log(desig)
    console.log(userNameData);
    console.log(data);

})();