function checkForEven(number) {
  if(number%2 == 0) return true
  return false
}

function checkForPrime(number) {
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
  if(number % i === 0) return false; 
  return number > 1;
}

function onClickHandler (value) {
  let count = document.getElementById('count')
  let currentCount = parseInt(count.innerHTML)
  let message = currentCount + ' is ';
  switch(value) {
    case '+1': 
      currentCount = currentCount + 1
      count.innerHTML = currentCount
      break;
    case '+5': 
      currentCount = currentCount + 5
      count.innerHTML = currentCount
      break;
    case 'isEven':
      let isEven = checkForEven(currentCount);
      if(isEven) message += 'a Even Number'
      else message += 'not a Even Number'
      alert(message)
      break;
    case 'isOdd':
      let isOdd = checkForEven(currentCount);
      if(isOdd) message += 'not a Odd Number'
      else message += 'a Odd Number'
      alert(message)
      break;

    case 'isPrime': 
      let isPrime = checkForPrime(currentCount);
      if(isPrime) message += 'a Prime number';
      else message += 'not a Prime number';
      alert(message)
      break;
  }
}