"use strict";

var assert = require('assert');

describe('test our array functions', function() {
    it('should pop last index value of array', function() {
        var testArray = [1, 2, 3];
        assert.equal(myPop(testArray), 3, 'did not pass');
    });
    it('should push a value into the last index of the array', function() {
        var testArray = [1, 2, 3];
        assert.deepEqual(myPush(testArray, 'foo'), [1, 2, 3, 'foo'], 'did not pass');
    });
    it('should shift the first value out of the array', function() {
      var testArray = [1, 2, 3];
      assert.deepEqual(myShift(testArray), 1, 'did not pass')
    })
    it('should unshift(push) value into first index of array', function() {
      var testArray = [1, 2, 3];
      assert.deepEqual(myUnshift(testArray, 'foo'), ['foo', 1, 2, 3], 'did not pass')
    })

});

/* ALEX DRIVER
MAX NAVIGATOR */
/*Pop*/
function myPop(array) {
    var length = array.length;
    var popVal = array[length - 1];
    array.length = length - 1;
    return popVal;
}

/* MAX DRIVER
ALEX NAVIGATOR */
/* Push */
function myPush(array, val) {
    array[array.length] = val;
    return array;
}
/* ALEX DRIVER
MAX NAVIGATOR */
function myShift(array) {
    var length = array.length;
    var shiftVal = array[0];
    for(var i=1;i<length;i++) {
      array[i-1]=array[i]
    }
    myPop(array);
    return shiftVal;
}
function myUnshift(array, val) {
  var length = array.length;
  array.length = length+1;
  for(var i=length;i>0;i--) {
    array[i]=array[i-1]
  };
  array[0] = val
  return array;
};
