var FizzBuzz = function() {};


FizzBuzz.prototype.isDivisibleByFifteen = function(n) {
  return this._isDivisibleBy(n, 15);
};

FizzBuzz.prototype.isDivisibleByFive = function (n) {
  return this._isDivisibleBy(n, 5);
};

FizzBuzz.prototype.isDivisibleByThree = function (n) {
  return this._isDivisibleBy(n, 3);
};

FizzBuzz.prototype.says = function (n) {
  if (this.isDivisibleByFifteen(n)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleByThree(n)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(n)) {
    return "Buzz";
  }
  return n;
};

FizzBuzz.prototype._isDivisibleBy = function(n, divisor) {
  return (n % divisor === 0);
};
