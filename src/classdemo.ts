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