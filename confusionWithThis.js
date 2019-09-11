var name = "Rupa...";

function outerFunction() {

    this.name = "Mayank";

    this.age = 0;

    var that = this;

    debugger;

    setTimeout(function() {

        // "that" is a closure variable, which saves the value of current context...
        
        console.log(that.name);
    }, 1000)

    console.log("End....")
}

var data = new outerFunction();

console.dir(data);