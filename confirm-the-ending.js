/*
Check if a string (first argument, str) 
ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, 
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str) {
    
    //Apply Two pointers
    let first = 0;
    let last = str.length - 1;
    while ( first < last) {
        first ++;
        last --;
    }
    return str;
  }
  
  console.log(confirmEnding("Bastian"));