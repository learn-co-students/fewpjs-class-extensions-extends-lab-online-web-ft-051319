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
    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i] !== this.sides[i+1]) {
                return false;
            } else {
                return true;
            }
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}