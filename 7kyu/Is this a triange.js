function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
  
    const sinA = a / c;
    const sinB = b / c;
    const sinC = c / c;
    
    if (sinA + sinB > sinC && sinB + sinC > sinA && sinC + sinA > sinB) {
      return true;
    } else {
      return false;
    }
  }

  //this took longer than it should have