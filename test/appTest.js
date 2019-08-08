const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function(){

  // sayHello Tests
  describe('sayHello()', function(){
    // Test that it returns 'hello'
    it('sayHello should return hello', function(){
      assert.equal(sayHelloResult, 'hello');
    });
    // Test that it returns a string
    it('sayHello should return type string', function(){
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  // addNumbers Tests
  describe('addNumbers()', function(){
    // Test that it returns a number greater than 5
    it('addNumbers should be above 5', function(){
      assert.isAbove(addNumbersResult, 5);
    });
    // Test that it returns a number
    it('addNumbers should return a number', function(){
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
