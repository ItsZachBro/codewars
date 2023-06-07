function solve(arr) {
    return arr.filter((item, index) => arr.lastIndexOf(item) == index);
  }
  
  /*
  The "solve" function removes duplicates from an array while keeping the last occurrence of each element.

  It uses the "filter" method to create a new array with filtered elements that meet a specific condition.

  The "filter" method accepts a callback function that runs for each element in the array.

  The callback function receives two arguments: "item" (current element) and "index" (index of the current element).
  
  The "lastIndexOf" method is used to check if the current element is the last occurrence in the array.
  
  The condition "arr.lastIndexOf(item) == index" compares the last occurrence index with the current index.
  
  If the condition is true, the element is included in the new array.
  
  If the condition is false, the element is excluded from the new array.
  
  The "filter" method returns the new array with the duplicates removed, which maintains the order of the last occurrences.
  */