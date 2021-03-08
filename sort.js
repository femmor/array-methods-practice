// Converts all the elements to string

// Sorting Strings
const names = ["Florin", "Brad", "Steven", "Smilga", "Vadim", "Emmanuel"]
const sortedNames = names.sort()

console.log(sortedNames)


// Sorting Numbers
const numbers = [74,18,43,205,45,72,1,6,10]
const sortedNumbers = numbers.sort(compareFunction)

console.log(sortedNumbers)

const compareFunction = (a, b) => {
  return a - b
}


// Sorting Objects
// Sort the array using the price in descending order
const products = [
  {
    name: 'laptop',
    price: 500,
    qty: 5
  },
  {
    name: 'blackberry',
    price: 10,
    qty: 15
  },
  {
    name: 'desktop',
    price: 1500,
    qty: 3
  },
  {
    name: 'phone',
    price: 300,
    qty: 20
  },
]

// Sort by Price (Ascending order) - Reverse the return for descending order
const sortedProducts = products.sort((a, b) => {
  return a.price - b.price
})
console.log(sortedProducts)

// Sort by Quantity (Ascending order) - Reverse the return for descending order
const sortedQty = products.sort((a, b) => {
  return a.qty - b.qty
})
console.log(sortedQty)

// Sort by Product Names
let productNames = []
products.forEach(item => {
  productNames.push(item.name)
})

const sortByProductName = productNames.sort()

console.log(sortByProductName);
