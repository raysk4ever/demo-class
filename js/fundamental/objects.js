// objects ==> non - primitive

// Object.assign // object
// Object.keys // arr
// Object.values // arr
// obj.hasOwnProperty() // boolean compare key

// forin // loop
// loops object ==> keys forin
let student1 = {
  name: 'ABC',
  age: 10,
  hobbies: ['a', 'b', 'c'],
  c: {
    d: true
  }
}
// console.log(student1.hobbies['2'])
// console.log(student1.c.hasOwnProperty('d'))

// console.log(student1) // js objects ==> keys access 2 method => . | []

// dot

// console.log(student1.name)
// console.log(student1.age)

// squre
// console.log(student1['name'])
// console.log(student1['age'])

let student2 = student1 // value copy x | address copy
// std1 ==> addres 001

// std2 ==> addres 001

// console.log('student1', student1);
student2.name = 'XYZ';

// console.log('student2', student2);
// console.log('student1', student1);

// objects => ref type

let a = 10
let b = 10

let c = {} // address 001
let d = {} // address 002

// let student1 = {}
// let student2 = student1 // copy ref type ==> address copy

// non primitive ==> 2 object, symbol ==> ref
// primitive ==> 6 => value

// console.log(a == b) // true
// console.log(d == c) // false ref check 
// console.log(student2 == student1) // true

// student1 = student2

a = {
  name: 'a',
  someText: 'abc'
}
// b = a; // value copy x | copy ref

// b.name = 'askdguasd';
// console.log('a', a, 'b', b)

b = Object.assign({}, a); // clone copy new ref create //1 return obj
b.name = 'b';
// console.log('a', a)
// console.log('b', b)
// console.log(a == b);

let keys = Object.keys(student2); // return arr (object)
// console.log('keys student2', keys);

let obj = {
  a: 'b',
  b: 10,
  c: {
    d: 'd',
    e: true,
    z: {
      as: {
        keu: 'value'
      }
    }
  },
  f: true
}

keys = Object.keys(obj.c);
// console.log('keys', keys)

let values = Object.values(obj); // reutrn arr [values]
console.log('values', values);


let firstValue = values['2']['e']
console.log('firstValue', firstValue);



const result = obj.hasOwnProperty('d') // boolean
console.log('result', result);

// if(obj.hasOwnProperty('a')){ // true
//   let a = obj.a;  
//   if(a.hasOwnProperty('value')){ // false
//     console.log(obj.a.value.first)
//   }else {
//     console.log('obj.a does not contain value')
//   }
// }else {
//   console.log('obj does not contain a')
// }


// loops object ==> keys forin
console.log('--------------------------------')
for (let key in obj.c) { 
  console.log('key', key, 'value', obj['c'][key]);
}