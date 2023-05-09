function toNumberArray(stringarray){
    return stringarray.map(parseFloat)
  }
  
  //Inside the map method, the parseFloat function is applied to each element of the stringarray array.
  //parseFloat is a built-in JavaScript function that converts a string representation of a number into an actual number.
  //map method returns new array with converted numbers
  //toNumberArray function returns the resulting array of numbers 