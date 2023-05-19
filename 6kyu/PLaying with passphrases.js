function playPass(s, n) {
    return [...s].map((char, i) =>
      char.replace(/[A-Za-z0-9]/g, (c) => {
        if (c.match(/[A-Za-z]/)) {
          let code = c.charCodeAt(0) + n; // Calculate the shifted character code
          code = (code - (c < 'a' ? 65 : 97)) % 26 + (c < 'a' ? 65 : 97); // Apply circular shift within alphabetic character range
          c = String.fromCharCode(code); // Convert the character code back to a string character
          c = i % 2 === 0 ? c.toUpperCase() : c.toLowerCase(); // Toggle case based on position
        } else if (c.match(/[0-9]/)) {
          c = String.fromCharCode(57 - c); // Perform digit complement transformation
        }
        return c; // Return transformed character
      })
    ).reverse().join(''); // Reverse array and join characters into a string
  }

//super difficult.