//viedo number 014 Your First TypeScript Program
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
// =======================================================================================================================================
//video number 015 Declaring Variables
var number = 1;
var count = 2;
//difference between var and let
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // the variable i is avaliable here as it is avaliable to the nearest function scope function (inside doSomething() method)
    console.log('Finally: ' + i);
}
doSomething();
function doSomethingWithLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // the variable i is not avaliable here as it is avaliable to the nearest block scope 
    //(inside for loop) but it still compile well and run with the same result
    // even with compilation error and generate main.js with var instead of let as it compiles to ECMAScript5
    console.log('Finally: ' + i);
}
doSomethingWithLet();
// =======================================================================================================================================
//video number 016 Types
// num variable will be of type number and will give us compilation error 
//if you assign any other type to it, but still compiles well like var which accept any type.
var num = 5;
num = 'a';
// This will be of any type and won't give a compilation error to solve this problem you need to use type annotations to specify a type to the variable.
var a;
a = 1;
a = true;
a = 'a';
// using Type Annotation
var b;
b = 1;
b = true;
b = 'b';
var c;
var d;
var e;
var f;
var g = [1, 2, 3];
var h = [1, true, 'a', false];
var ColorRed = 11;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 33] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log("backgroundColor:" + backgroundColor); // 33
// =======================================================================================================================================
//video number 017 Type Assertions
var myMessage;
myMessage = 'abc';
var endsWithC = myMessage.endsWith('c');
var alternativeWay = myMessage.endsWith('c');
console.log("endsWithC:" + endsWithC + " alternativeWay:" + alternativeWay);
// =======================================================================================================================================
//video number 018 Arrow Functions
var log1 = function (message) {
    console.log(message);
};
var log2 = function (message) {
    console.log(message);
};
// if your function has only one line you can remove the brackets as well as with the parameters,but it isn't a readable code
var log3 = function (message) { return console.log(message); };
// you can has no parameters also 
var log4 = function () {
    console.log("Arrow Function With No Parameters");
};
log1('logging 1 ');
log2('Logging 2');
log3('Logging 3');
log4();
