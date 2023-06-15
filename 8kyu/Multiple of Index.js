function multipleOfIndex(array) {
    return array.filter((x, i) => x == 0 || x % i == 0)
}

//array.filter() method is a built-in JavaScript array method that creates a new array with all the elements that pass a specific test (condition) provided as a callback function.
//This line uses the filter() method on the input array to create a new array based on a specific condition.
//The filter() method takes a callback function as an argument. In this case, the callback function is defined inline using an arrow function (x, i) =>.
//The arrow function takes two parameters: x represents the current element of the array, and i represents the index of the current element.
//The arrow function checks if the current element x is equal to 0 or if x is divisible by its index i without leaving a remainder.
//If the condition is true for an element, it is kept in the filtered array.
//The filter() method returns the resulting filtered array as the output of the multipleOfIndex function.