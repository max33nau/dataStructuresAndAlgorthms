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
      assert.deepEqual(myShift(testArray), 1, 'did not pass');
    });
    it('should unshift(push) value into first index of array', function() {
      var testArray = [1, 2, 3];
      assert.deepEqual(myUnshift(testArray, 'foo'), ['foo', 1, 2, 3], 'did not pass');
    });
    it('should take a array and return a copy of the array with all the unique values', function(){
      var testArray = [1,2,3,2,4,4];
      assert.deepEqual(unique(testArray), [1,2,3,4], 'did not pass');
    });
    it('should return the total amount of times a specified letter returns in a array of words', function(){
      var testArray = ['foo', 'max', 'code', 'foobuzz', 'buzz'];
      assert.deepEqual(frequency(testArray,'o'), 3, 'did not pass');
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
/* Shift */
function myShift(array) {
    var length = array.length;
    var shiftVal = array[0];
    for(var i=1;i<length;i++) {
      array[i-1]=array[i]
    }
    myPop(array);
    return shiftVal;
}
/* Unshift */
function myUnshift(array, val) {
  var length = array.length;
  array.length = length+1;
  for(var i=length;i>0;i--) {
    array[i]=array[i-1]
  };
  array[0] = val
  return array;
};

/* No more Pair Programming for these next two */
/* unique */
function unique(array) {
  array.sort();
  for (var ii = 0; ii < array.length; ii++) {
    if (array[ii] == array[ii + 1]) {
      array.splice(ii,1);
    }
  }
  return array;
};

/* frequency */
function foundLetter(word, letter) {
  var letterArray = word.split('');
  for(var ii = 0; ii < letterArray.length; ii++) {
    if(letterArray[ii] == letter) {
      return true;
    }
  }
  return false;
}

function frequency(array, specifiedLetter) {
  var numberOfWordsWithLetter = 0;
  for (var ii = 0; ii < array.length; ii++) {
    if ( foundLetter(array[ii], specifiedLetter) ) {
      numberOfWordsWithLetter++;
    }
  }
  return numberOfWordsWithLetter;
}
