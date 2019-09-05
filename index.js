class Polygon {
    constructor(sideArray) {
        this.name = "Polygon";
        this.sides = sideArray;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        const perimeter = this.sides.reduce((total, side) => total += side, 0);
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[1] + this.sides[2] <= this.sides[0] || this.sides[0] + this.sides[2] <= this.sides[1]) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let squareValidator = this.sides.every((side, index, sidesArray) => sidesArray[0] === side)
            return squareValidator;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2;
        }
    }
}