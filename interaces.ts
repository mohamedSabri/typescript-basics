
// using inline annotation it works fine for simple cases here you say that this function will take 2 parameters x,y with type number only
let drawPoint = (point: { x: number ,y:number }) => {

}

drawPoint({
    x: 1,
    y: 2
})

// another best practise way is to use interface to define the shape of an object (point object) and you can easily use it anywhere else

interface Point{

    x: number,
    y: number
}

let drawPointWithInterace = (point: Point) =>{

}
drawPoint({
    x: 1,
    y: 2
})