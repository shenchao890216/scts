class Animal {
  name: string
  
  constructor (theName: string) {
    this.name = theName
  }

  move (distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m`)
  }
}

export class Snake extends Animal {
  constructor (name: string) {
    super(name)
  }

  move (distanceInMeters: number = 5) {
    console.log("Slithering...")
    super.move(distanceInMeters)
  }
}

class Person {
  constructor (protected name: string) {}
}

export class Employee extends Person {
  constructor (name: string, private department: string) {
    super(name)
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}