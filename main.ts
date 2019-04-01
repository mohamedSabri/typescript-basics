//viedo number 014 Your First TypeScript Program
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);

// =======================================================================================================================================
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
    console.log('Finally: ' + i);
}
doSomethingWithLet()
// =======================================================================================================================================
//video number 016 Types
// num variable will be of type number and will give us compilation error 
//if you assign any other type to it, but still compiles well like var which accept any type.
let num = 5 ;
num = 'a';

// This will be of any type and won't give a compilation error to solve this problem you need to use type annotations to specify a type to the variable.
let a;
a = 1 ;
a = true;
a = 'a';

// using Type Annotation
let b : number;
b = 1;
b = true;
b = 'b';

let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[] = [1,2,3];
let h: any[] = [1, true, 'a', false];

const ColorRed = 11;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 33, Green = 1, Blue = 2};
let backgroundColor = Color.Red;
console.log("backgroundColor:"+backgroundColor); // 33
// =======================================================================================================================================
//video number 017 Type Assertions

let myMessage ;
myMessage = 'abc';
let endsWithC = (<String>myMessage).endsWith('c');
let alternativeWay = (myMessage as String).endsWith('c');
console.log("endsWithC:"+endsWithC+" alternativeWay:"+alternativeWay);

// =======================================================================================================================================
//video number 018 Arrow Functions

let log1 = function(message){
    console.log(message);
}

let log2 = (message) => {
    console.log(message);
}

// if your function has only one line you can remove the brackets as well as with the parameters,but it isn't a readable code

let log3 = message => console.log(message);

// you can has no parameters also 
let log4 = () => {
    console.log("Arrow Function With No Parameters");
}

log1('logging 1 ') 
log2('Logging 2') 
log3('Logging 3') 
log4()