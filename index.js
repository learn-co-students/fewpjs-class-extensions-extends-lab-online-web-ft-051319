// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((x,y) => x + y, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        let s1 = this.sides[0]
        let s2 = this.sides[1]
        let s3 = this.sides[2]
        return ((s1 + s2 > s3) && (s2 + s3 > s1) && (s1 + s3 > s2))
    }
}

class Square extends Polygon {
    get isValid(){
        let s1 = this.sides[0]
        let s2 = this.sides[1]
        let s3 = this.sides[2]
        let s4 = this.sides[3]
        return ((s1 === s2) && (s3 === s4) && (s2 === s3))
    }
    get area() {
        return this.sides[0] ** 2;
    }
}
