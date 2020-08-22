
// // litrial
// let a = 10 // number
// let obj = {} // object 
// let arr = [] // array

// // constructor
// let a = new Number(10)
// let obj = new Object({})
// let arr = new Array([])




// array ==> some object functionality + array functionality

// .length
// includes
// indexOf


let marks = [100, 200, 300, 400]

for(let i = 0; i < marks.length; i++){
  // console.log('marks[i]', marks[i])
}

let result = marks.includes(200); // return boolean values compare
// console.log('result', result);

result = marks.indexOf(401) // reutrn number // value found ==> index, not found = -1
console.log('index', result)
