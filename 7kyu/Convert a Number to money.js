var numberToMoney = function(n) {
    const rounded = Math.floor(n * 100) / 100
    return rounded.toLocaleString({maximumFractionDigits: 2})
  }
  
  //Intl.NumberFormat would be a better choice if rounding, commas, and currency sign requirements where different