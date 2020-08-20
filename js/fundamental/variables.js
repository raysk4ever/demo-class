// lexical env ==> work
// let  ==> block scope
// const ==> block scope
// var ==> function scope

// js ==> single threaded, sync interpretertor program lang

// let message = 10; // undefined
// message = 20
// const constMessage = 'Hey';
// // constMessage = 'Hiii'
// var varMessage = 'var'
// varMessage = 'newVar'
// console.log(message, constMessage, varMessage);


function myFnc() {
  let name = 'user1';
  var age = 10;
  console.log(name, age)
  if(name == 'user1') {
    let age = 20;
  }
  console.log(name, age)
}

// user1 10*2 || user1 10, error || user1 10, user1 20 || error


// console.log(name, age)

myFnc()



// let const  || var => imp => interview 