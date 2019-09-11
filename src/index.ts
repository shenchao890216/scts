import { Person } from './ownInterface'

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