function rotate(str) {
  // Check if the input string is empty
  if (str === '') {
    // If it's empty, return an empty array
    return [];
  }

  // Create an empty array to store the rotated strings
  const rotations = [];
  
  // Get the length of the input string
  const length = str.length;

  // Iterate over each character of the input string
  for (let i = 0; i < length; i++) {
    // Rotate the string by moving the first character to the end
    str = str.slice(1) + str[0];
    
    // Add the rotated string to the rotations array
    rotations.push(str);
  }

  // Return the array of rotated strings
  return rotations;
}
