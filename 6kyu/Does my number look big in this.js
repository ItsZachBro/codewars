function narcissistic(value) {
    const stringValue = String(value);
    const power = stringValue.length;
    let sum = 0;
    for (let i = 0; i < power; i++) {
      sum += Math.pow(parseInt(stringValue[i]), power);
    }
    return sum === value;
  }
  