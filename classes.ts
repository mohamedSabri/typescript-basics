class Point {
    // members or fields the default value is undefined
    x: number;
    y: number;

    // methods 
    draw() {
        console.log('x: ' + this.x + ' y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();