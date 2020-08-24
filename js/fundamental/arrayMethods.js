// search
// includes // boolean
// indexOf // number
// forEach
// map
// filter
// delete
// push, unshift
// pop, shift (last delete)

// CRUD ==> Create, Read, Update and Delete

let numbers = [1, 20, 39, 0, 100]

// create (add)

// push ==> add new element at the end
numbers.push(99)

// unshift ==> add new element at the starting
numbers.unshift(90)

// --------------------------------------------READ----------------------
// Read 

// console.log(numbers[numbers.length - 1])

// loop
for(let key in numbers){
  // console.log(numbers[key])
}

// forEach 
// callback function ==> function which is passed while a function call as a parameter
let result = numbers.forEach(function(value, index){
  // console.log('value, index', value, index);
})
// console.log('result from forEach', result)

// map
result = numbers.map(function(value, index, arr){
  // console.log('valasdue, index', value, index, arr);
  if(value > 10) return value
})
// console.log('result from map', result)

// filter

result = numbers.filter(function(value, index, arr){
  if(value > 10) return value;
})
// console.log('result from filter', result)


// --------------------------------------------UPDATE----------------------


numbers[0] = 200
numbers[1] = 404

// index find

// indexOf
let index = numbers.indexOf(404) // return index found => index, notfound = -1
if(index != -1) {
  numbers[index] = 800
}else {
  console.log('number not found')
}

// let users = [
//   {
//     name: 'ravi1',
//     age: 10
//   },
//   {
//     name: 'ravi2',
//     age: 20
//   },
//   {
//     name: 'ravi3',
//     age: 30
//   },
// ]

// // findIndex // non - primitive
// // [{}, {}, {}]

// index = users.findIndex(function(ele1, ele2){
//   if(ele1.name == 'ravi3') return 1 
// })

// users[index].age = 12
// console.log('users', users)

// ----------------DELETE-----------

// numbers 90
console.log(numbers)
index = numbers.indexOf(200)
if(index != -1) {
  delete numbers[index]
}else {
  console.log('number not found')
}