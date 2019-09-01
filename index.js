// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides 
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
         return this.sides.reduce(function(total, side) {
            return total += side 
        }, 0 )
    }
}

class Triangle extends Polygon {
    
    get isValid(){
        if (this.sides.length !== 3) {
            return false
        } else {
            if(((this.sides[0] + this.sides[1]) > this.sides[2]) && ((this.sides[0] + this.sides[2]) > this.sides[1]) && ((this.sides[1] + this.sides[2]) > this.sides[0])) {
                return true 
            } else {
                return false 
            }   
        }
    }
}


class Square extends Polygon {

    get isValid(){
        if(this.sides.length !== 4) {
            return false 
        } else {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            if((side1 === side2) && (side2 === side3) && (side3 === side4)){
                return true 
            } else {
                return false 
            } 
        }
    }
   
    get area(){
        if(this.isValid) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            return side1 * side2
        } else {
            return "Not a valid Square"
        }
   } 
}