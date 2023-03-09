//Function
//function with parameter
//function without parameter
let cars = ['honda', 'toyota', 'peugeot', 'chevrolet']
console.log('This is a boy')

function addTwo(suppliedValue) {
  return suppliedValue + 2
}
console.log(addTwo(3))

function addTwoValues(value1, value2) {
  return value1 + value2
}
//bukunmi's salary is ----

console.log(addTwoValues(400, 230))
function printSalary(name, salary) {
  let bonus = salary * (10 / 100)
  let total = salary + bonus
  console.log(name + "'s" + ' salary is  ' + salary)
  console.log('Bonus is : ' + bonus)
  console.log('total :' + total)
  return 'done'
}
let hisName = 'johnson'
let names = [
  'bukunmi',
  'praise',
  'halleluya',
  'lanre',
  'sunkanmi',
  'anu',
  hisName,
]

function shareFruit(arr, item) {
  let i
  for (i = 0; i < arr.length; i++) {
    console.log(names[i] + ' take ' + item)
  }
  return 'done'
}

console.log(printSalary('Mr Johnson', 1000000))
console.log(shareFruit(names, 'mango'))
// let addLastName = (name1, name2) => {
//   return name1 + ' ' + name2
// }
// console.log(addLastName('kunle', 'Balogun'))






function christmasGreeting() {
    return 'Merry christmas and Happy new year in advance!'
  }
  function christmasGreetingName(name) {
    return 'Merry christmas and Happy new year in advance! ' + name
  }
  function addTwo(suppliedValue) {
    return suppliedValue + 2
  }
  function addValues(a, b) {
    if (typeof a == 'number' && typeof b == 'number') return a + b
    else return 'incompatible data type for this operation!'
  }
  //Arrow function
  let addValueV2 = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') return a + b
    else return 'incompatible data type for this operation!'
  }
  let age = 56
  console.log(addValues(3, 4))
  console.log(addValueV2(10, 30))
  console.log(addValues('lanre', 'balogun'))
  console.log(typeof age)