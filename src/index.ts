import { inflate } from "zlib"

interface Person {
  name: string
  age: number
}

let p1: Person = {
  name: 'w3ctalk',
  age: 18
}

// let p2: Person = {
//   name: 'w3c'
// }

// let p3: Person = {
//   name: 'w3c-talk',
//   age: 19,
//   weight: 90
// }

// function sum ({x, y}: {x: number, y: number}): number {
//   console.log(x + y)
//   return x + y
// }

// interface IsSum {
//   x: number
//   y: number
// }

// function sum ({x, y}: IsSum): number {
//   console.log(x + y)
//   return x + y
// }

// sum({x: 1, y: 2})

function sayHello (person: {name: string, age: number}) {
  console.log('hello', person.name, ', age-', person.age)
}

sayHello({
  name: 'w3ctalk',
  age: 18
})

sayHello(p1)

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare (config: SquareConfig): {
  color: string
  area: number
} {
  let defaultSquare = {
    color: 'white',
    area: 100
  }

  if (config.color) {
    defaultSquare.color = config.color
  }

  if (config.width) {
    defaultSquare.area = config.width * config.width
  }

  return defaultSquare
}

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = "blue"
square.sideLength = 10
square.penWidth = 5.0