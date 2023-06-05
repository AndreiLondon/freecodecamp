// Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(' ');
    //console.log(words);
    let maxLength = 0;
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length
            longestWord = words[i]
        }
    }
    // return str.length;
    //return longestWord;
    return maxLength;
    // console.log(maxLength);
    // console.log(longestWord);
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));