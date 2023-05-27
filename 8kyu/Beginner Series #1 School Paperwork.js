function paperwork(n, m) {
    // check if either n or m is negative
   if (n < 0 || m < 0) {
     // return 0 if either n or m is negative
     return 0;
   }
   // calculate the total number of blank pages needed by multiplying n and m
   return (n * m)
 }