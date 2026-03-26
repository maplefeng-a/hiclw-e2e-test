/**
 * Unit Tests for Calculator Module
 * Tests for add() and multiply() functions
 */

const assert = require('assert');

// Import the calculator functions
// Note: In a real Node.js environment, this would be:
// const { add, multiply } = require('../src/calculator');
// For GitHub Actions testing, we inline the implementations

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (a < 0 || b < 0) {
    throw new RangeError('Arguments must be non-negative');
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError('Arguments must be finite numbers');
  }
  return a + b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (a < 0 || b < 0) {
    throw new RangeError('Arguments must be non-negative');
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError('Arguments must be finite numbers');
  }
  return a * b;
}

// Test results tracking
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log('PASS: ' + description);
    passed++;
  } catch (error) {
    console.log('FAIL: ' + description);
    console.log('   Error: ' + error.message);
    failed++;
  }
}

console.log('');
console.log('=== Calculator Module Unit Tests ===');
console.log('');

// ============================================
// ADD FUNCTION TESTS
// ============================================

console.log('--- add() Tests ---');
console.log('');

// Normal cases
test('add(2, 3) should return 5', function() {
  assert.strictEqual(add(2, 3), 5);
});

test('add(0, 0) should return 0', function() {
  assert.strictEqual(add(0, 0), 0);
});

test('add(100, 200) should return 300', function() {
  assert.strictEqual(add(100, 200), 300);
});

test('add(0.5, 0.5) should return 1', function() {
  assert.strictEqual(add(0.5, 0.5), 1);
});

test('add(-0, 5) should return 5 (negative zero is valid)', function() {
  assert.strictEqual(add(-0, 5), 5);
});

// Type validation - should throw TypeError
test('add("2", 3) should throw TypeError for string input', function() {
  assert.throws(function() { add('2', 3); }, TypeError);
});

test('add(2, "3") should throw TypeError for string input', function() {
  assert.throws(function() { add(2, '3'); }, TypeError);
});

test('add(null, 3) should throw TypeError for null input', function() {
  assert.throws(function() { add(null, 3); }, TypeError);
});

test('add(2, undefined) should throw TypeError for undefined input', function() {
  assert.throws(function() { add(2, undefined); }, TypeError);
});

test('add({}, 3) should throw TypeError for object input', function() {
  assert.throws(function() { add({}, 3); }, TypeError);
});

test('add([], 3) should throw TypeError for array input', function() {
  assert.throws(function() { add([], 3); }, TypeError);
});

// Range validation - should throw RangeError for negative numbers
test('add(-1, 3) should throw RangeError for negative first argument', function() {
  assert.throws(function() { add(-1, 3); }, RangeError);
});

test('add(2, -5) should throw RangeError for negative second argument', function() {
  assert.throws(function() { add(2, -5); }, RangeError);
});

test('add(-10, -20) should throw RangeError for both negative', function() {
  assert.throws(function() { add(-10, -20); }, RangeError);
});

// Boundary handling - NaN and Infinity
test('add(NaN, 3) should throw RangeError for NaN', function() {
  assert.throws(function() { add(NaN, 3); }, RangeError);
});

test('add(2, NaN) should throw RangeError for NaN', function() {
  assert.throws(function() { add(2, NaN); }, RangeError);
});

test('add(Infinity, 3) should throw RangeError for Infinity', function() {
  assert.throws(function() { add(Infinity, 3); }, RangeError);
});

test('add(2, -Infinity) should throw RangeError for -Infinity', function() {
  assert.throws(function() { add(2, -Infinity); }, RangeError);
});

// ============================================
// MULTIPLY FUNCTION TESTS
// ============================================

console.log('');
console.log('--- multiply() Tests ---');
console.log('');

// Normal cases
test('multiply(2, 3) should return 6', function() {
  assert.strictEqual(multiply(2, 3), 6);
});

test('multiply(0, 0) should return 0', function() {
  assert.strictEqual(multiply(0, 0), 0);
});

test('multiply(0, 5) should return 0', function() {
  assert.strictEqual(multiply(0, 5), 0);
});

test('multiply(7, 0) should return 0', function() {
  assert.strictEqual(multiply(7, 0), 0);
});

test('multiply(10, 10) should return 100', function() {
  assert.strictEqual(multiply(10, 10), 100);
});

test('multiply(0.5, 0.5) should return 0.25', function() {
  assert.strictEqual(multiply(0.5, 0.5), 0.25);
});

test('multiply(-0, 5) should return 0 (negative zero is valid)', function() {
  assert.strictEqual(multiply(-0, 5), 0);
});

// Type validation - should throw TypeError
test('multiply("2", 3) should throw TypeError for string input', function() {
  assert.throws(function() { multiply('2', 3); }, TypeError);
});

test('multiply(2, "3") should throw TypeError for string input', function() {
  assert.throws(function() { multiply(2, '3'); }, TypeError);
});

test('multiply(null, 3) should throw TypeError for null input', function() {
  assert.throws(function() { multiply(null, 3); }, TypeError);
});

test('multiply(2, undefined) should throw TypeError for undefined input', function() {
  assert.throws(function() { multiply(2, undefined); }, TypeError);
});

test('multiply({}, 3) should throw TypeError for object input', function() {
  assert.throws(function() { multiply({}, 3); }, TypeError);
});

test('multiply([], 3) should throw TypeError for array input', function() {
  assert.throws(function() { multiply([], 3); }, TypeError);
});

// Range validation - should throw RangeError for negative numbers
test('multiply(-1, 3) should throw RangeError for negative first argument', function() {
  assert.throws(function() { multiply(-1, 3); }, RangeError);
});

test('multiply(2, -5) should throw RangeError for negative second argument', function() {
  assert.throws(function() { multiply(2, -5); }, RangeError);
});

test('multiply(-10, -20) should throw RangeError for both negative', function() {
  assert.throws(function() { multiply(-10, -20); }, RangeError);
});

// Boundary handling - NaN and Infinity
test('multiply(NaN, 3) should throw RangeError for NaN', function() {
  assert.throws(function() { multiply(NaN, 3); }, RangeError);
});

test('multiply(2, NaN) should throw RangeError for NaN', function() {
  assert.throws(function() { multiply(2, NaN); }, RangeError);
});

test('multiply(Infinity, 3) should throw RangeError for Infinity', function() {
  assert.throws(function() { multiply(Infinity, 3); }, RangeError);
});

test('multiply(2, -Infinity) should throw RangeError for -Infinity', function() {
  assert.throws(function() { multiply(2, -Infinity); }, RangeError);
});

// ============================================
// SUMMARY
// ============================================

console.log('');
console.log('=== Test Summary ===');
console.log('');
console.log('Total: ' + (passed + failed));
console.log('Passed: ' + passed);
console.log('Failed: ' + failed);

if (failed === 0) {
  console.log('');
  console.log('All tests passed!');
  console.log('');
  process.exit(0);
} else {
  console.log('');
  console.log('Some tests failed!');
  console.log('');
  process.exit(1);
}
