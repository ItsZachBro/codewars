function factorial(n) {
    if (n < 0) {
      return "Undefined"; // Return "Undefined" for negative inputs
    } else if (n == 1 || n == 0) {
      return 1; // Return 1 for 0 and 1
    } else {
      return n * factorial(n - 1); // Recursive call for n > 1
    }
  }