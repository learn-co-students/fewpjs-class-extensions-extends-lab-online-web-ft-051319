// Your code here
class Polygon{
  constructor(array){
    this.sides = array
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total,side)=>total+side)
  }
}


class Triangle extends Polygon{
  get isValid(){
    let max=Math.max(...this.sides)
    let maxIndex=this.sides.indexOf(max)
    let copy=[...this.sides] //so that the splice doesn't affect the original array of this.sides
    copy.splice(maxIndex,1) //spliced copy
    if (copy.reduce((total,side)=>total+side)>max){
      return true
    }else{
      return false
    }
  }
}

class Square extends Polygon{
  get isValid(){
    if(this.sides.every(side=>side===this.sides[0])){
      return true
    }else{
      return false
    }
  }

  get area(){
    return this.sides[0]**2
  }
}
