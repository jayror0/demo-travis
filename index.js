class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

module.exports = {
  Calculator,
  greet
};

if (require.main === module) {
  console.log(greet());
  
  const calc = new Calculator();
  console.log('Calculator Demo:');
  console.log('2 + 3 =', calc.add(2, 3));
  console.log('5 - 2 =', calc.subtract(5, 2));
  console.log('4 * 3 =', calc.multiply(4, 3));
  console.log('10 / 2 =', calc.divide(10, 2));
}
