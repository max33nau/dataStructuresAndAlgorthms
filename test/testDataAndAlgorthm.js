"use strict";

var assert = require('assert');
var arrayMethods = require('../lib/index.js');

describe('test our array functions', function() {
    it('should pop last index value of array', function() {
        var testArray = [1, 2, 3];
        assert.equal(arrayMethods.myPop(testArray), 3, 'did not pass');
    });
    it('should push a value into the last index of the array', function() {
        var testArray = [1, 2, 3];
        assert.deepEqual(arrayMethods.myPush(testArray, 'foo'), [1, 2, 3, 'foo'], 'did not pass');
    });
    it('should shift the first value out of the array', function() {
      var testArray = [1, 2, 3];
      assert.deepEqual(arrayMethods.myShift(testArray), 1, 'did not pass');
    });
    it('should unshift(push) value into first index of array', function() {
      var testArray = [1, 2, 3];
      assert.deepEqual(arrayMethods.myUnshift(testArray, 'foo'), ['foo', 1, 2, 3], 'did not pass');
    });
    it('should take a array and return a copy of the array with all the unique values', function(){
      var testArray = [1,2,3,2,4,4];
      assert.deepEqual(arrayMethods.unique(testArray), [1,2,3,4], 'did not pass');
    });
    it('should return the letter that occurs in the most words', function(){
      var testArray = ['foo', 'max', 'code', 'foobuzz', 'buzz'];
      assert.deepEqual(arrayMethods.frequency(testArray), 'o', 'did not pass');
    });

});
