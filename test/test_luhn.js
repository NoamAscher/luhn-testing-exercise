var assert = require("chai").assert;
var luhnCheck = require("../lib/luhn");

// luhnCheck("79927398713")
// luhnCheck(79927398716)
// luhnCheck("79927398713")
// luhnCheck(79927398716)

// From https://www.rosettacode.org/wiki/Luhn_test_of_credit_card_numbers
// 49927398716: T
// 49927398717: F
// 1234567812345678: F
// 1234567812345670: T

describe("Luhn", function() {
  it("should return true for the string \"49927398716\"", function() {
    var num = "49927398716";
    var result = luhnCheck(num);
    assert.isTrue(result);
  });

  it("should return true for the number 49927398716", function() {
    var num = 49927398716;
    var result = luhnCheck(num);
    assert.isTrue(result);
  });

  it("should return false for the string \"49927398717\"", function() {
    var num = "49927398717";
    var result = luhnCheck(num);
    assert.isFalse(result);
  });

  it("should return false for the number 49927398717", function() {
    var num = 49927398717;
    var result = luhnCheck(num);
    assert.isFalse(result);
  });

  it("should return false for the string \"1234567812345678\"", function() {
    var num = "1234567812345678";
    var result = luhnCheck(num);
    assert.isFalse(result);
  });

  it("should return false for the number 1234567812345678", function() {
    var num = 1234567812345678;
    var result = luhnCheck(num);
    assert.isFalse(result);
  });

  it("should return true for the string \"1234567812345670\"", function() {
    var num = "1234567812345670";
    var result = luhnCheck(num);
    assert.isTrue(result);
  });

  it("should return true for the number 1234567812345670", function() {
    var num = 1234567812345670;
    var result = luhnCheck(num);
    assert.isTrue(result);
  });
});

