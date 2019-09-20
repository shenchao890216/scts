import { Snake } from './classdemo'

interface func {
  (name: string): boolean
}

function warnUser(person: Person) : void {
  if (!person.age) {
    person.age = 12
  }

  console.log(person.name + ' - ' + person.age)
}

warnUser({
  name: 'scrd',
  age: 30
})

class Greeter {
  greeting: string

  constructor (message: string) {
    this.greeting = message
  }

  greet () {
    return "Hello " + this.greeting
  }
}

let g1 = new Greeter('scrd')
console.log(g1.greet())

let s1 = new Snake('Snake ~ ')
s1.move()
s1.move(34)

enum Color {
  Red,
  Green,
  Blue
}

interface LabelledValue {
  label: string
}

function printLabel (labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myLabel = {
  label: 'my-label',
  size: 10
}

printLabel(myLabel)

// printLabel({
//   label: 'own-laebl',
//   size: 10
// })

interface MyArray {
  [index: number]: string
}

let myArr: MyArray = ['a', 'b']

interface Point {
  x: number,
  y: number
}

interface Point {
  z: number
}

class MyPoint implements Point {
  x: number
  y: number
  z: number
}

let foo: Point = new MyPoint()
// console.log(foo)

interface Crazy {
  new (): {
    hello: string
  }
}

import { Employee } from './classdemo'
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

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())

interface Named {
  name: string
}

let x: Named;
let y = {
  name: 'w3ctalk',
  age: 18
}

x = y