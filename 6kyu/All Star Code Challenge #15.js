function rotate(text) {
    // Create an empty array to store the rotated versions of the string
    const rotations = []
  
    for (let i = 0; i < text.length; i++) { 
      // Loop through each position in the input string
      // Extract a portion of the string starting from index i to the end,
      // and concatenate it with the portion from the start to index i
      rotations.push(text.substring(i) + text.substring(0, i))
    }
   // Return the array containing all the rotated versions of the string
    return rotations
  }