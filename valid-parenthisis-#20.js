// validParenthisis
// leetcode 20

//check for valid parenthisis
var isValid = function (s) {
  const stack = [];
  const hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let x of s) {
    console.log(x);
    if (x in hashMap) {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const popedValue = stack.pop();
      console.log({ popedValue: hashMap[popedValue] });
      if (hashMap[popedValue] !== x) return false;
    }
  }

  console.log({ stack: stack });
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

isValid("()[]{}}");
