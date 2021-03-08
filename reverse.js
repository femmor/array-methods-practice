// Reverse numbers
const numbers = [1,2,3,4,5]
const newArr = numbers.concat().reverse()
const spreadNums = [...numbers].reverse()

console.log(numbers)
console.log(newArr)
console.log(spreadNums)


// Reverse characters in a string
const str = "Programming is fun!"
const result = str.split("").reverse().join("")
console.log(result)