// Does not change original

const numbers = [1,2,3,4,5,6,7,8]
const numbersCopy = numbers.slice()

console.log(numbers)
console.log(numbersCopy)

// Return first 3 numbers
const first3 = numbersCopy.slice(0,3)
console.log(first3)

// Return last 3 numbers

// Get first 3 participants
const participants = ["Emmanuel", "James", "Brad", "Brian", "Chris", "Wells"]
const first3Parts = participants.slice(0, 3)

console.log(first3Parts)

// Get last 3 participants
const last3Parts = participants.slice(-3)

console.log(last3Parts)