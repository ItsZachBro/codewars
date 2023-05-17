function longestRepetition(s) {
    if (s === "") {
      return ["", 0];
    }
    
    let maxChar = "";
    let maxCount = 0;
  
    let currentChar = "";
    let currentCount = 0;
  
    for (const char of s) {
      if (char === currentChar) {
        currentCount++;
      } else {
        if (currentCount > maxCount) {
          maxChar = currentChar;
          maxCount = currentCount;
        }
        currentChar = char;
        currentCount = 1;
      }
    }
  
    if (currentCount > maxCount) {
      maxChar = currentChar;
      maxCount = currentCount;
    }
  
    return [maxChar, maxCount];
  }