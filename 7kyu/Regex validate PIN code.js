function validatePIN (pin) {
    //return true or false 
      return /^(\d{4}|\d{6})$/.test(pin) 
  }
  
  //The "\d" means any number from 0 to 9
  //The "{4}" means the code is looking for exactly four numbers
  //The "{6}" means it's looking for exactly six numbers.
  //The "|" means "or" 
  //"test" sends true or false automatically, depnding on the result