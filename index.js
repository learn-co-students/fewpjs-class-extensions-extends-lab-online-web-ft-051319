// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    return this.sides.reduce((a,b)=> a+b)
  }


}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3)
      return false;
    let isTriangleIneq = ((this.sides[0]+this.sides[1]) > this.sides[2]) && ((this.sides[1]+this.sides[2]) > this.sides[0])
      && ((this.sides[0]+ this.sides[2]) > this.sides[1])
    return isTriangleIneq

  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4)
      return false;
    let squareEq = (this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]) && (this.sides[3] === this.sides[0])
    return squareEq
    }
  get area() {
    return this.sides[0]*this.sides[1]
  }

}
