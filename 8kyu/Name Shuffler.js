function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
  }
  
  //str.split(' ') SPLITS the words at THE SPACE between them (' ')
  //.reverse REVERSES the array's order
  //.join(' ')joins them back while mainting a space between the words