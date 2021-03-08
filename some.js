const numbers = [1,2,3,4,5]
const result = numbers.every(greaterThan4)

function greaterThan4(item){
  return item > 4
}
console.log(result)


// Check if at least one person is an adult
const persons = [
  {name: "FLorin", age: 17},
  {name: "Emmanuel", age: 5},
  {name: "David", age: 4},
  {name: "Reign", age: 1},
]

const res = persons.some(isAdult)

function isAdult(item) {
  return item.age >= 18
}

console.log(res) // false