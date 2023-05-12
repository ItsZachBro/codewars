function backwardsPrime(start, stop) {
    const result = []
    for (let num = start; 
         num <= stop; num++) {
      let isPrime = true
      let reverseNum = parseInt(num.toString().split("").reverse().join(""), 10)
  
      // check if number are primes
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false
          break
        }
      }
  
      // check if reversed number are primes
      for (let i = 2; i <= Math.sqrt(reverseNum); i++) {
        if (reverseNum % i === 0) {
          isPrime = false
          break
        }
      }
  
      if (isPrime && num !== reverseNum) {
        result.push(num)
      }
    }  
    return result
  }
  