class Point {
    /**
     *  members or fields the default value is undefined 
     * use access modifiers to control access to certain members of a class to the outside.
     * you can apply these access modifiers to fields, propeties and methods
     * the default access modifier is public
     */
    // private  _x: number;
    // private  _y: number;

    /** there is no multiple constructor in typescript ,So if you want to declare a point() with no arguments (like calling the default constructor)
        you need to make the parameter you don't need to pass optional and we do this by put a ? after its name 
        here is a rule in typesrcipt if you make a parameter optional then you have to make all the parameter on its right side optional too.
        so if you make the like this constructor( _x?: number,  _y?: number) we can call it using Point() and Point(1,2)
     */
    // constructor( _x?: number, _y?: number) {
    //     this._x =  _x;
    //     this._y =  _y;
    // }
    /**
     * you can use access modifiers with the constructor parameters so the typescript compiler with declare a 2 fields 
     * with the same name  _x, _y and initialize them with the values which will be passed to the constructor if there  is any.
     * you no longer need to declare private  _x:number; and initialize it in the constructor this. _x =  _x
     * and you can make  _x public in the constructor and use it like point. _x = 5
     */
    constructor(private _x?: number, private _y?: number) { }


    // methods 
    draw() {
        console.log(' _x: ' + this._x + '  _y: ' + this._y);
    }

    getDistance(another: Point) {
        // ...
    }

    /**
     * a property looks like a field from the outside but internally its a method in 
     * the class (getter or a setter or a combination of both)ز
     * the convension is to make it with the same name as the field name so it will 
     * appear as you access the field itself like point. _x
     * you need to change the name of the field to avoid Duplicate identifier compilation error.
     * so the convension is to put underscore before the field name So  _x will be _x if you declare it as 
     * a sepaate field or in constructor parameters.
     */
    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error("Value can not be less than zero.")
        }

        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        if (value < 0)
            throw new Error('Value can not be less than zero.');
        this._y = value;
    }
}

let point = new Point();
// point._x = 1;
// point._y = 2;
let point1 = new Point(111, 222);
point.draw();
point1.draw();

// use the property like a setter 
point.x = 10;
point.y = 20;

// use the property like a getter
let x = point.x;
let y = point.y;

console.log('property x:' + x, ' property y:' + y);