/*
Create a simple calculator that given a string of operators (), +, -, *, / 
and numbers separated by spaces returns the value of that expression

Example:
```
Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
```

Remember about the order of operations! Multiplications 
and divisions have a higher priority and should be performed left-to-right. 
Additions and subtractions have a lower priority and should also be performed left-to-right.
*/

const Calculator = function() {
  this.evaluate = (params) => {
    return eval(params)
  }   
};

// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 125)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log(calculate.evaluate('9 + 5'))
console.log(calculate.evaluate('2 + 3'));
console.log(calculate.evaluate('2 - 3 - 4'));
console.log(calculate.evaluate('10 *  5 / 2'));

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);