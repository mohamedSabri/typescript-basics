"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    // private _likesCount: number;
    // private _isSelected: boolean;
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
        // this._likesCount = likesCount;
        // this._isSelected = isSelected;
    }
    /**
     * a method that count likes by checking the button is not selected before so increase likes count by one and make is selected true
     * if it is selected before then decrease the likes count and make isSelected alse.
     */
    LikeComponent.prototype.onClick = function () {
        // if (this._isSelected) {
        //     this._likesCount--;
        //     this._isSelected = false;
        // } else {
        //     this._likesCount++;
        //     this._isSelected = true;
        // }
        this._likesCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
