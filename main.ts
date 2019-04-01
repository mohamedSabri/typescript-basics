//viedo number 014 Your First TypeScript Program
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);

//video number 015 Declaring Variables

var number = 1;
let count = 2;
//difference between var and let

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    // the variable i is avaliable here as it is avaliable to the nearest function scope function (inside doSomething() method)
    console.log('Finally: ' + i)
}
doSomething()

function doSomethingWithLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // the variable i is not avaliable here as it is avaliable to the nearest block scope 
    //(inside for loop) but it still compile well and run with the same result
    // even with compilation error and generate main.js with var instead of let as it compiles to ECMAScript5
    console.log('Finally: ' + i)
}
doSomethingWithLet()