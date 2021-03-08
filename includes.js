const fruits = ["Pineapple", "Apple", "Mango", "Orange", "Pawpaw", "Guava", "Plum"]

function hasFruit(fruit){
  if (fruits.includes(fruit)) {
    return `${fruit} is available`
  } else {
    return `${fruit} is not available`
  }
} 

console.log(hasFruit("Grape"))