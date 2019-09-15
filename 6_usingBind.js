
(function() {

    function getUserName() {
        console.log("Value of name: " + this.name);
    }

    window.name = "Anshul";

    var userDetails = {
        name: "Mayank",
        age: 20
    }

    var otherUserDetails = {
        name: "Rupa",
        age: 10
    }

    getUserName.call(userDetails);

    getUserName.call(otherUserDetails);

    getUserName.call(window);

    
})();