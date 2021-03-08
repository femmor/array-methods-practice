const fruits = ["Pineapple", "Apple", "Mango", "Orange", "Pawpaw", "Guava", "Plum"]

// Replace Apple with Grape
const idx = fruits.indexOf('Apple')
fruits[idx] = "Grape"

function findFruit(fruit) {
  if(fruits.indexOf(fruit) > -1) {
    console.log(`We have ${fruit}`)
  } else {
    console.log(`${fruit} is not available at the moment`)
  }
}

findFruit("Apple")
// Apple is not available at the moment

// indexOf - starts at the beginning
// lastIndexOf - starts at the end