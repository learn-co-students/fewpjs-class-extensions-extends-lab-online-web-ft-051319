class Polygon{
    constructor(sidesArray){
        this.sides = sidesArray
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((sum, side) => (sum + side))
    }
}

class Triangle extends Polygon{
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]

        if ((a + b) > c && (b + c) > a && (a + c) > b){
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){

        if (this.sides.every(side => (side === this.sides[0]))){
            return true
        }
        else {
            return false
        }
    }

    get area(){
        return this.sides[0]**2
    }
}