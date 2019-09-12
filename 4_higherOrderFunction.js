// Function return another Function...

function outerFunction() {
    return function innerFunction() {
        return function deepInnerFunction() {
            console.log("Hello All");
        }
    }
}

var abc = outerFunction();

var inner = abc();

var deep = inner();

// Function takes another function as input parameter.

function acceptParameters(someFunction) {
    someFunction();
}

var someFunction = () => console.log("Arrow Passed as parameter");

// Both represent the same scenerio....

acceptParameters(someFunction);

acceptParameters(() => console.log("Other Method"));

