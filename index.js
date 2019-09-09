class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => {
            return sum + side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];

        if (((side1 + side2) < side3) || ((side2 + side3) < side1) || ((side1 + side3) < side2)) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0] ** 2
    }

    get isValid() {
        return this.sides.every(side => side === this.sides[0])
    }
}