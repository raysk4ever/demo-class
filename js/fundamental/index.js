// web browser

function myAlert(){
  alert('Hey this is an alert')
}

function myPrompt(){
  let name = prompt('What is your name?', 'No Name')
  if(name){
    console.log('my name is', name.toUpperCase());
  }else {
    console.log('No Name Provided');
  }
}

function myConfirm(){
  const result = confirm('Are you 18+?')
  if(result) console.log('Yes')
  else console.log('no')
}