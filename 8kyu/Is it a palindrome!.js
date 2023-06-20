function isPalindrome(x) {
    const cleanedString = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedString == cleanedString.split('').reverse().join('');
  }
  
  