function findMultiples(num, limit) {
    // array that stores the multiples
    const multiples = []
  
    // iterate from num up to limit with a step of num
    for (let i = num; i <= limit; i += num) {
      multiples.push(i) // add the current number to the multiples array
    }
  
    return multiples
  }