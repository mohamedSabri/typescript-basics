var Point = /** @class */ (function () {
    function Point() {
    }
    // methods 
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ' y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
