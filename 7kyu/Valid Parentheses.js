function validParentheses(parenStr) {
    while(/\(\)/.test(parenStr)) {
      // Replace any pair of parentheses with empty space/nothing in between them
      parenStr = parenStr.replace(/\(\)/g, "");
    }
    // If string is empty, the parentheses are used correctly because they are balanced
    return parenStr == "";
  }
  