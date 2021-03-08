const numbers = [1,2,3,4,5]

// const reducer = (accumulator, currentValue) => accumulator + currentValue
// const total = numbers.reduce(reducer)

// console.log(total)

// 2nd method
// const total = numbers.reduce(sum, 0)

// function sum(accumulator, value){
//   return accumulator + value
// }

// console.log(total)


// Get the maximum number in an array
const max = numbers.reduce(callback, -Infinity)

function callback(accumulator, value){
  if(accumulator > value) {
    return accumulator
  } else {
    return value
  }
}

console.log(max);
