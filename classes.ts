class Point {
    // members or fields the default value is undefined
    // use access modifiers to control access to certain members of a class to the outside.
    // you can apply these access modifiers to fields, propeties and methods
    // the default access modifier is public
    private x: number;
    private y: number;

    // there is no multiple constructor in typescript ,So if you want to declare a point() with no arguments (like calling the default constructor)
    // you need to make the parameter you don't need to pass optional and we do this by put a ? after its name 
    // here is a rule in typesrcipt if you make a parameter optional then you have to make all the parameter on its right side optional too.
    // so if you make the like this constructor(x?: number, y?: number) we can call it using Point() and Point(1,2)
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    // methods 
    draw() {
        console.log('x: ' + this.x + ' y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point();
// point.x = 1;
// point.y = 2;
let point1 = new Point(111, 222);
point.draw();
point1.draw();