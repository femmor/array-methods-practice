// const numbers = [1,2,3,4,5]

// numbers.forEach(countNum)

// function countNum(item, index, arr){
//   console.log(item)
// }



// Add up all the items in the array of numbers
// let sum = 0

// forEach method
// numbers.forEach(item => sum += item)
// console.log(sum) // Prints 15

// reduce method
// const reducer = (accumulator, currentValue) => accumulator + currentValue
// const total = numbers.reduce(reducer)

// console.log(total)


// How many times a letter appears in an array
const letters = ["a", "b", "a", "b", "c", "j","a", "z"]

const count = {}

letters.forEach(item =>{
  if(count[item]){
    count[item] += 1
  } else {
    count[item] = 1
  }
})

console.log(count)