function findAverage(array) {
    // check if array is empty
    if (array.length === 0) {
      // if array is empty return 0
      return 0
    }
    
    // calculate sum of numbers in array using reduce
    const sum = array.reduce((acc, num) => acc + num, 0)
    
    // calculate average (divide sum by the length of the array)
    const average = sum / array.length
    
    // rturn average
    return average
}