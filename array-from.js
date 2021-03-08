const str = "abcdefghijklmnopqrstuvwxyz"

const res = Array.from(str) // returns str in an array
// console.log(res)

const numbers = "1234567"
const result = Array.from(numbers, Number)
// const result = Array.from(numbers, x => Number(x))
console.log(result)



// Remove duplicated numbers
const nums = [1,2,3,4,5,6,2,2,3,3,3,35,2,2,1]

const output = new Set(nums)
const newNumsArr = Array.from(output)

console.log(newNumsArr);


// Remove duplicated names
const friends = ["Emmanuel", "Ngozi", "Edwige", "David", "Reign", "Zoe", "Reign", "Edwige", "Edwige"]
const removedDups = new Set(friends)
const newArrOfFriends = Array.from(removedDups)

console.log(newArrOfFriends)