function solution(number) {
    const romanNumeral = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
  
    // initialize an empty string to store the final Roman numerals
    let str = "";
  
    // get keys from the `romanNumeral` object and convert them to numbers
    // then sort them in descending order inorder to ensure that the conversions are acurate
    let keys = Object.keys(romanNumeral).map(Number).sort((a, b) => b - a);
  
    // for each key in the sorted keys array...
    for (var value of keys) {
      // as long as the the input number is greater than or equal to the current key...
      while (number >= value) {
        // append the Roman numeral conversion of the current key to the `str` variable
        str += romanNumeral[value];
        // subtract the current key from the input number
        number -= value;
      }
    }
  
    return str;
  }
