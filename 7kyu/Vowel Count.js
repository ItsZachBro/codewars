function getCount(str) {
    const count = str.split("").filter(cons => /[aeiou]/.test(cons)).length
    return count
  }
  
  //str.split("") SPLITs the strings between each characer
  //filter(cons => /[aeiou]/.test(cons)) can add "i" between the "/" and the "." to make case sensative
  // "/[ ]/" is a pattern that we can use to find specific characters in a string. 
  //The square brackets [ ] tell the pattern to match any character that appears inside the brackets.