export class LikeComponent {

    // private _likesCount: number;
    // private _isSelected: boolean;

    constructor(private _likesCount: number, private _isSelected: boolean) {
        // this._likesCount = likesCount;
        // this._isSelected = isSelected;
    }

    /**
     * a method that count likes by checking the button is not selected before so increase likes count by one and make is selected true
     * if it is selected before then decrease the likes count and make isSelected alse.
     */
    public onClick() {

        // if (this._isSelected) {
        //     this._likesCount--;
        //     this._isSelected = false;
        // } else {
        //     this._likesCount++;
        //     this._isSelected = true;
        // }

        this._likesCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}