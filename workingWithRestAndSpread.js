function calculateSum(...inputArray) {
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i]
    }

    console.log(sum);
}

calculateSum(1, 2, 5);

calculateSum(1, 2);

calculateSum(1, 2, 5, 10);


var myArray = [1, 2, 3];

[a, b, c] = [...myArray];

[x, y, z] = [1, 2, 3]

var data = 10;