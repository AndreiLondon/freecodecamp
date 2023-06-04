
// const myArray = [];
// let i = 5;
// while (i != -1) {
//   myArray.push(i);
// console.log(i)
//   i--;
// }

// const myArray = [];
// for (let i = 1; i < 6; i++) {
//     console.log(i)
//   myArray.push(i);
// }

// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
//   console.log(i)
// }

// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for (let i = 0; i < myArr.length; i++) {
//     total = total + myArr[i]
//     console.log(total)
// }
// return total;

const arr = [
    [1, 2], [3, 4], [5, 6]
];
total = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        total = total + (arr[i][j])
        //console.log(arr[i][j]);
        console.log(total);
    }
}

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * (arr[i][j])
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

