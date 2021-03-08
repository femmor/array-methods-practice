// Splice array method changes the array on which it's called.

const numbers = [1,2,3,4,5]
const replacedArr = numbers.splice(2, 3, 6, 7, 8)

console.log(numbers) // [1,2,6,7,8]
console.log(replacedArr) // [3,4,5]