// // datatype -> 8
// // array js => object


// // code A (a, b, c) parent ===>inherit ===>         Code B (a, b, c, d) child
// // object parent ====inherit==> array (object) child + parent

// let obj = {
//   name: 'User1',
//   age: 10
// }

// let arr = [1, "ravi", {name: 'new Name'}, true, function(){}]

// console.log(arr)




// 2 groups ==> primitive, ref/non-primitive


// except from object and symbols ==> primivite (string, number, bigint , null, etc)
// object and symbols ==> ref
// primitive they can be compare by their values

let a = true;
let b = 1;

console.log(a == b); // value compare
console.log(a === b); // value + datatype compare

// non primitive they can't be compare by their values // compare by their address
let obj1 = {name: 'a'} // 00010
let obj2 = {name: 'a'} // 00011

// console.log(obj1 == obj2)






