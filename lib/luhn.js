// change to luhn
function luhnCheck(num) {
  var numString = num.toString();
  var numArray = numString.split("");
  // 1. a) Double every other digit and
  //    b) If the result is greater than 9, add the two digits together.
  for (var i = 1; i <= numArray.length; i++) {
    numArray[numArray.length - i] = Number(numArray[numArray.length - i]);
    if (i % 2 === 0) {
      numArray[numArray.length - i] = numArray[numArray.length - i] * 2;
      if (numArray[numArray.length - i] > 9) {
        numArray[numArray.length - i] -= 9;
      }
    }
  }
  // 2. Sum the digits together
  var sum = numArray.reduce(function(a, b) {
    return a + b;
  });
  // 3. if the sum modulo 10 === 0 return true, else return false
  return (sum % 10 === 0);
}

module.exports = luhnCheck;

// luhnCheck("79927398713")
// luhnCheck(79927398716)
// luhnCheck("79927398713")
// luhnCheck(79927398716)