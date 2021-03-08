// Converts all the elements to string

// Sorting Strings
// const names = ["Florin", "Brad", "Steven", "Smilga", "Vadim", "Emmanuel"]
// const sortedNames = names.sort()

// console.log(sortedNames)


// Sorting Numbers
const numbers = [74,18,43,205,45,72,1,6,10]
const sortedNumbers = numbers.sort(compareFunction)

console.log(sortedNumbers)

const compareFunction = (a, b) => {
  return a - b
}