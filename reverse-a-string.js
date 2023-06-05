/*
Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

function reverseString(str) {
    let word = "";
    for (let i = str.length -1; i >=0; i--) {
        word = word + str[i]
        console.log(word);
    }
    return word;
  }
  
  reverseString("hello");
