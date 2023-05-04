function arrayPlusArray(arr1, arr2) {
    let array3 = arr1.concat(arr2)
    let total= array3.reduce((a, b) => a + b)
    return total
  }