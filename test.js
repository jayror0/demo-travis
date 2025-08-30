const assert = require('assert');
const { Calculator, greet } = require('./index');

let testsPassed = 0;
let testsFailed = 0;

function runTest(testName, testFunction) {
  try {
    testFunction();
    console.log(`✓ ${testName}`);
    testsPassed++;
  } catch (error) {
    console.error(`✗ ${testName}`);
    console.error(`  Error: ${error.message}`);
    testsFailed++;
  }
}
console.log('='.repeat(50));
console.log('Testing function');
console.log('='.repeat(50));

runTest('greet() should return "Hello, World!"', () => {
  assert.strictEqual(greet(), 'Hello, World!');
});

runTest('greet("Travis") should return "Hello, Travis!"', () => {
  assert.strictEqual(greet('Travis'), 'Hello, Travis!');
});

console.log('\nTesting Calculator class...');
const calc = new Calculator();

runTest('add(2, 3) should return 5', () => {
  assert.strictEqual(calc.add(2, 3), 5);
});

runTest('add(-1, 1) should return 0', () => {
  assert.strictEqual(calc.add(-1, 1), 0);
});

runTest('subtract(5, 2) should return 3', () => {
  assert.strictEqual(calc.subtract(5, 2), 3);
});

runTest('subtract(0, 5) should return -5', () => {
  assert.strictEqual(calc.subtract(0, 5), -5);
});

runTest('multiply(4, 3) should return 12', () => {
  assert.strictEqual(calc.multiply(4, 3), 12);
});

runTest('multiply(0, 100) should return 0', () => {
  assert.strictEqual(calc.multiply(0, 100), 0);
});

runTest('divide(10, 2) should return 5', () => {
  assert.strictEqual(calc.divide(10, 2), 5);
});

runTest('divide(7, 2) should return 3.5', () => {
  assert.strictEqual(calc.divide(7, 2), 3.5);
});

runTest('divide by zero should throw error', () => {
  assert.throws(() => calc.divide(5, 0), /Division by zero is not allowed/);
});

console.log('\n' + '='.repeat(50));
console.log(`Test Results: ${testsPassed} passed, ${testsFailed} failed`);
console.log('='.repeat(50));

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('\nAll tests passed!');
  process.exit(0);
}
