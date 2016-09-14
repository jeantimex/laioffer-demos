var assert = require('assert');
var calculator = require('../lib/calculator.js');
var greetings = require('../lib/greetings.js');

// Test array
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

// Test Greeting
describe('Greeting', function () {
    it('should return HELLO', function () {
        assert.equal("HELLO", greetings.sayHelloInEnglish());
    });
});

// Test Calculator
describe('Calculator', function () {
    it('should return 9', function () {
        assert.equal(9, calculator(1, 2));
    });
});
