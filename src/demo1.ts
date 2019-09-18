import { Person } from './ownInterface'
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

