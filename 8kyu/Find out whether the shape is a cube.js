var cubeChecker = function(volume, side){
  
    if (volume <= 0 | side <= 0) return false
    let answer = (side * side * side) 
    if (answer == volume) return true
    
    else return false
  }