const names = ["Fred", "Tommy", "Francis", "Evelyn", "Robert"]
const res = names.find(findUser)

function findUser(user) {
  return user === "Tommy"
}

console.log(res)



// Find a person, return the person and get the age of the person

const people = [
  {name: "FLorin", age: 35},
  {name: "Tracy", age: 20},
  {name: "George", age: 28},
  {name: "Evelyn", age: 15},
  {name: "David", age: 5},
]

const result = people.find(findPerson).age

function findPerson(person){
  return person.name === "David"
}

console.log(result)

