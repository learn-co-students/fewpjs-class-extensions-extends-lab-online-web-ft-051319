class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce( (sum, side) => {
            return sum + side;
        }, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ( ((this.sides[0] + this.sides[1]) < this.sides[2]) || ((this.sides[1] + this.sides[2]) < this.sides[0]) || ((this.sides[2] + this.sides[0]) < this.sides[1]) ) {
            return false;
        } else {
            return true;
        }

        // another option
        // if (!Array.isArray(this.sides)) return;
        // if (this.count !== 3) return;
        // let side1 = this.sides[0]
        // let side2 = this.sides[1]
        // let side3 = this.sides[2]
        // return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        // better option
        // if (!Array.isArray(this.sides)) return;
        // if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))

        // for (let i = 0; i < this.sides.length; i++) {
        //     if (this.sides[i] !== this.sides[i+1]) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}