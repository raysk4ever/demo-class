// ------------------------PRIMITIVE------------------

// number

let a = 10


// bigint 
let big = 1234567890123456789012345678901234567890n;

// string
let name = 'Ravi';
let age = 20;
let str1 = "Hey " + name + ', \nage: ' + age + '.'
let str2 = 'Hey ' + name + ', \nage: ' + age + '.'
let str3 = `Hey ${name}, 
age: ${age}.`

console.log(str1)
console.log(str2)
console.log(str3)

// Boolean

let isPass = true

console.log(isPass)

if(isPass){
  console.log('Pass')
}else {
  console.log('Fail')
}

// null 

let message = null; // false, 0 

console.log(message)


// undefined

let school = undefined;
console.log(school)

// ------------------------NON - PRIMITIVE / REF------------------

// object ==> data store/ Data struc ==> js 
// coll ==> (key, value ==> any data type)
// key no repeat unique ==> lvl 


let obj = { 
  key: 'value',
  number: 20,
  number: 10,
  number: 30,
  otherObj: {
    number: 1
  },
  arr: [1, 2, 3, 'asd', '1236'],
  boolean: true,
  isPass: function(){
  }
}

console.log(obj)


// symbol
// user define datatype with the help of symbol

