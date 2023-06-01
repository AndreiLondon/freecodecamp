//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three") + arr + arr.push(7, "VIII", 9)
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

/* 
.push() an easy way to append data to the end of an array is via the push() function.
arr1.push(4); arr2.push(["happy", "joy"]);

.pop()removes the last element 
from an array and returns that element.
const oneDown = threeArr.pop();

.shift() comes in if you want to remove the first element of an array.
const removedFromOurArray = ourArray.shift();

.unshift() works exactly like .push() 
unshift() adds the element at the beginning of the array.
ourArray.unshift("Happy");
*/

//Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop(["challenge", "is", "not", "complete"]);
  let shifted = arr.shift(["challenge", "complete"]);
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Remove Items Using splice()
/*
splice() allows us to do just that: 
remove any number of consecutive elements 
from anywhere in an array.

splice() can take up to 3 parameters
splice()'s first parameter represents the index on the array 
from which to begin removing elements, 
while the second parameter indicates the number of elements to delete
Example
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);

splice() not only modifies the array it's being called on, 
but it also returns a new array containing the value of the removed elements:
Example
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);

*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 2);
arr.splice(1, 2);
arr.splice(2, 3);
// Only change code above this line
console.log(arr);

//Add Items Using splice()

function htmlColorNames(arr) {
  // Only change code below this line
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex, amountToDelete, "DarkSalmon", "BlanchedAlmond")

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//Copy Array Items Using slice()
/*
slice() copies or extracts a given number of elements to a new array, 
leaving the array it is called upon untouched. 
slice() takes only 2 parameters — the first is the index at which to begin extraction, 
and the second is the index at which to stop extraction 
(extraction will occur up to, but not including the element at this index).
*/

function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Copy an Array with the Spread Operator
/*
ES6's new spread operator allows us to easily copy all of an array's elements, 
in order, with a simple and highly readable syntax. 
The spread syntax simply looks like this: ...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//Combine Arrays with the Spread Operator
/*
Another huge advantage of the spread operator is the ability 
to combine arrays, or to insert all the elements 
of one array into another, at any index. 
With more traditional syntaxes, we can concatenate arrays, 
but this only allows us to combine arrays at the end of one, 
and at the start of another. q
*/
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());


//Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {

  if (arr.indexOf(elem) >= 0) {
    return true
  } else {
    return false
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*
indexOf(), that allows us to quickly and easily check 
for the presence of an element on an array. 
indexOf() takes an element as a parameter, 
and when called, it returns the position, 
or index, of that element, 
or -1 if the element does not exist on the array.

*/

//Iterate Through All an Array's Items Using For Loops

/*
JavaScript offers several built in methods that each iterate 
over arrays in slightly different ways to achieve different 
results (such as every(), forEach(), map(), etc.),
*/

// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays

//First approach
let myNestedArray = [
  // Only change code below this line
  'level 1',                   /* myNestedArray[0]             */
  ['level 2'],	               /* myNestedArray[1][0]          */
  [['level 3', 'deep']],	       /* myNestedArray[2][0][0]       */
  [[['level 4', 'deeper']]],    /* myNestedArray[3][0][0][0]    */
  [[[['level 5', 'deepest']]]]  /* myNestedArray[4][0][0][0][0] */
  // Only change code above this line
];
//Second approach
let myNestedArray2 = [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  // change code above this line
];

// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

// Modify an Object Nested Within an Object

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.totalUsers
// Only change code above this line

console.log(userActivity);


//Check if an Object has a Property

let userss = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan");
}

// or 
//   function isEveryoneHere(userObj) {
//     return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//       userObj.hasOwnProperty(name)
//     );
//   }

// Iterate Through the Keys of an Object with a for...in Statement

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users));

//Generate an Array of All Object Keys with Object.keys()
let usersss = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));

//Modify an Array Stored in an Object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, "Pete"));