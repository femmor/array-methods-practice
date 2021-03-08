const numbers = [1,2,3,4,5]

const positiveNums = numbers.every(isPositive)

function isPositive(item) {
  return item > 0
}

console.log(positiveNums)


const persons = [
  {
    name: "jerry"
  },
  {
    name: "tom"
  },
  {
    name: "john"
  },
  {
    firstName: 'doe'
  }
]

const names = persons.every(person => person.name !== undefined)
console.log(names) // false

const arrys = [
  [1,2,3],
  [4,5,6],
  {} // [7,8,9] === true
]

const res = arrys.every(arr => Array.isArray(arr))
console.log(res) // False