// 7. Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.

// Input: x = 123
// Output: 321

var reverse = function (x) {
  const reversedInt = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );

  if (reversedInt > 2 ** 31) return 0;

  return reversedInt * Math.sign(x);
};

reverse(-2147483648);
