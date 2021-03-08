const number = [1,2,3,2,1,3,3,3,5,6,7,8,3,7,9,5,9,6,5,3]

// Remove duplicate numbers with filter
const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index
})

console.log(nums)
// Returns [1,2,3,5,6,7,8,9]

