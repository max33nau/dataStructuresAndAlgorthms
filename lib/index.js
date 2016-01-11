"use strict";
var arrayMethods = {
  /* ALEX DRIVER
  MAX NAVIGATOR */
  /*Pop*/
  myPop: function(array) {
    var length = array.length;
    var popVal = array[length - 1];
    array.length = length - 1;
    return popVal;
  },
  /* MAX DRIVER
  ALEX NAVIGATOR */
  /* Push */
  myPush: function(array, val) {
    array[array.length] = val;
    return array;
  },
  /* ALEX DRIVER
  MAX NAVIGATOR */
  /* Shift */
  myShift: function(array) {
    var length = array.length;
    var shiftVal = array[0];
    for(var i=1;i<length;i++) {
      array[i-1]=array[i];
    }
    this.myPop(array);
    return shiftVal;
  },
  /* Unshift */
  myUnshift: function(array, val) {
    var length = array.length;
    array.length = length+1;
    for(var i=length;i>0;i--) {
      array[i]=array[i-1];
    }
    array[0] = val;
    return array;
  },
  /* No more Pair Programming for these next two */
  /* unique */
  unique: function(array) {
    array.sort();
    for (var ii = 0; ii < array.length; ii++) {
      if (array[ii] === array[ii + 1]) {
        array.splice(ii,1);
      }
    }
    return array;
  },
  /* frequency */
  frequency: function(array) {
    var stringOfWords = array.join();
    var seenInCurrentWord = [];
    var arrayOfUniqueLetters = [];
    var objectOfLetters = {};
    for (var ii = 0; ii < stringOfWords.length; ii++) {
      var currentLetter = stringOfWords[ii];
      if (currentLetter === ',') {
        seenInCurrentWord = [];
      } else {
        if (seenInCurrentWord[currentLetter] !== currentLetter) {
          if(objectOfLetters[currentLetter]) {
            objectOfLetters[currentLetter] += 1;
          } else {
            this.myPush(arrayOfUniqueLetters, currentLetter);
            objectOfLetters[currentLetter] = 1;
          }
          seenInCurrentWord[currentLetter] = currentLetter;
        }
      }
    }
    var highestValue = objectOfLetters[arrayOfUniqueLetters[0]]; // Initializes highest value
    var lettersWithHighestValue = []; // Empty array which will hold on the letters with highest Frequency
    for(var jj = 0; jj < arrayOfUniqueLetters.length; jj++) {
      var currentUniqueLetter = arrayOfUniqueLetters[jj];
      var currentValue = objectOfLetters[currentUniqueLetter];
      if(currentValue > highestValue) {
        lettersWithHighestValue = [];
        highestValue = currentValue;
        lettersWithHighestValue.push(currentUniqueLetter);
      } else if (currentValue === highestValue) {
        highestValue = currentValue;
        lettersWithHighestValue.push(currentUniqueLetter);
      }
    }
    // Returns all the letters in a array with the highest frequency
    // Changed it to array so if multiple letters have the highest
    // frequency you will know.
    return lettersWithHighestValue;
  }
};


module.exports = arrayMethods;
