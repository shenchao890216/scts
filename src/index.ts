// function demo1 (arg: string): string 
// function demo1 (arg: number):number
// function demo1 (arg): any {
//   return arg
// }

function demo1 <U>(arg: U): U {
	return arg
}

interface Demo2 {
	<U>(arg: U): U
}

interface Demo3<D> {
	(arg: D): D
}

let demo2: Demo2 = function<T>(arg: T): T {
	return arg
}

class Demo<U> {
	name: string
	sayHello: (theName: U) => U 
}

let d = new Demo<string>()
d.name = 'w3ctalk'
d.sayHello = function (theName) {
	return 'hello ' + theName
}

function identity <T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}

let returnNum = identity(['ss', 'ss'])

let identityOwn: <U>(arg: U[]) => U[] = identity

interface Lengthwise {
  length: number
}

function loggingIndentity <T extends Lengthwise>(arg: T): T {
	console.log(arg.length)
	return arg
}

// arg参数要有length.
// loggingIndentity(2)

loggingIndentity({
    length: 30,
    name: 'w3ctalk'
})

function getProperty <T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = {
    a: 1,
    b: 2,
    c: 3
}

getProperty(x, 'a')
// getProperty(x, 'd')