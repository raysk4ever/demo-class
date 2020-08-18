// // // console.log('Hey from js')
// // // console.error('Hey from js')
// // // console.warn('Hey from js')

// // // Vanilla js ==> pure javascript

// // // es5, es6 ==> updates

// // // DOM
// // //
// // // document = {
// // // getElementById: function(id) { return element}
// // // }

// // // console.log('my element', document.getElementById('myId')) // object
// // // console.log('class element', document.getElementsByClassName('class2')) // array

// // // variables

// // // var, let, const

// // var element1 = 10; // function scope
// // let element2 = 11; // block scope
// // const element3 = 12; // block scope

// // // console.log(element1, element2, element3);

// // let myA = document.getElementById("myA");

// // // console.log('innerHTML', myA.innerHTML)

// // myA.innerHTML = "<p>asd</[]>";

// // // console.log('innerHTML', myA.innerHTML)

// // let newSpan = document.getElementById("myId");

// // newSpan.appendChild(myA);

// // // newSpan.style.color = "red";
// // // newSpan.style.fontSize = "100px";




// let box1 = document.getElementById('box1')
// let newText = document.getElementById('newText')


// box1.appendChild(newText)



function a(){
  let count = document.getElementById('count')
  let value = count.innerHTML; // return string + number = string
  value = parseInt(value);
  value = value + 1

  count.innerHTML = value
}
