const findAll = (array, n) => {
    return array.reduce((acc, curr, index) => {
      if (curr == n) {
        acc.push(index)
      }
      return acc
    }, [])
  }
  
  // Uses reduce() to iterate over array elements and accumulate information
  // (acc, curr, index) => { ... } is the callback function:
  // acc- accumulator for storing the accumulated result
  // curr- current element being processed
  // index- index of the current element
  // if curr matches n, the index is added to the accumulator using push()
  // returns the modified accumulator after each iteration
  // the initial value [] initializes the accumulator as an empty array