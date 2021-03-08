const numbers = [1,2,3,4,5]
const result = numbers.findIndex(findPosition)

function findPosition(value){
  return value === 4
}

console.log(result);
