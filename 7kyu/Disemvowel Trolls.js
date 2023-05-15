function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g,'');
  }
  
  /*
  str.replace() is a method that replace text within a string.
  takes two arguments: the pattern to match and the replacement value.
  
  /[aeiouAEIOU]/g is used as the first argument to str.replace().
  In this case, it matches any character within the square brackets [aeiouAEIOU].
  The /g flag makes the pattern global,
  os all occurrences of the vowels are replaced
  
  
  The second argument to str.replace() is an empty string '', which is basically deleting them.
  
  */