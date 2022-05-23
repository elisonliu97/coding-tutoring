var password = 'password';
var number = 12345;
var array = ['123', '12341234'];
var boolean = true;
var object = {
  key1: 12345,
  key2: 'password',
};

// console.log(password - '12345');
// console.log(password);

// function to add two words together
function editor(word1, word2) {
  return word1 + word2;
}

function isBigger(num1, num2) {
  if (num1 > num2) {
    return 'Num 1 is bigger than Num 2';
  } else if (num1 == num2) {
    return 'Num 1 is equal to Num 2';
  } else {
    return 'Num 1 is not bigger than Num 2';
  }
}

function isEqual(num1, num2) {
  if (num1 > num2) {
    return 'Num 1 is Equal to Num 2';
  } else {
    return 'Num1 is not equal to Num 2';
  }
}

function isBigger(array, num) {
  var resultArr = [];
  for (var i = 0; i < array.length; i++) {
    resultArr.push(array[i] > num);
    console.log(resultArr);
  }
  return resultArr;
}

// console.log(editor(password, number));
// console.log(12 % 5);
// console.log(isBigger([1, 2, 3, 4, 5], 2));

// we would want to create a function that takes a number of characters and returns a password of that length
// ex: randomizePassword(5) -> a5c*e
function randomizePassword(number) {
  var possibleChars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  var password = '';
  for (var i = 0; i < number; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password = password + possibleChars[randomIndex];
  }
  return password;
}

console.log(randomizePassword(8));

// Want to make a function that turns 'password' ->  'oZrrvnqc'
// declare function
// get an array of all possible characters to compare against

function changePassword(password) {
  var possibleChars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  //   declare a way to return the new password
  var newPassword = '';
  // for each character inside the initial password
  for (var i = 0; i < password.length; i++) {
    var position;
    // for each character inside the possible character array
    // e -> d
    // l -> k
    var charFound = false;
    for (var x = 0; x < possibleChars.length; x++) {
      // if character at character array === character in password
      if (possibleChars[x] === password[i]) {
        charFound = true;
        //   track position and move backwards 1
        position = x - 2;
        //  if new position is out of bounds (negative) move to back of array
        if (position === -1) {
          position = possibleChars.length - 1;
        }
        if (position === -2) {
          position = possibleChars.length - 2;
        }
      }
    }
    if (charFound === false) {
      return 'Your input is invalid';
    }
    // add each new character to new password
    newPassword = newPassword + possibleChars[position];
  }
  return newPassword;
}

console.log(changePassword('abcd/'));

// elison -> dkhrnm

// Q1: given an array, return the largest number in that list
// Q2: Given a string, remove all spaces
// Q3: Given a number, find all numbers before it that are squares
