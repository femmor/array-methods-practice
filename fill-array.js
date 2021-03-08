const numbers = [1,2,3,4,5]
const num2 = numbers.fill("*", 1, 4)

console.log(numbers);
console.log(num2);

// Fill in numbers with fill method
function fillNumbers(n) {
  return Array(n)
        .fill(0)
        .map((_, idx) => idx + 1)
}

const newNumbers = fillNumbers(10)
console.log(newNumbers)