(function() {

    class Employee {
        name = "Mayank"

        getUserName() {
            console.log("User Name: " + this.name)
        }
    }

    var user = new Employee();
    user.getUserName();

    var otherUser = new Employee();
    otherUser.name = "Rupa";
    otherUser.getUserName();


    otherUser.getUserName.call(user);

    var userTwo = new Employee();
    userTwo.getUserName.call({
        name: "Random"
    });

})()