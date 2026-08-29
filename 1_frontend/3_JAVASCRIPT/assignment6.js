// // Write a  JavaScript function that returns array elements larger than a  number.

            // 1st approaach
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// // elements larger than a number num
// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);


                       // 2nd approaach

                       // with the help of for each loop
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// function getElements(arr, num) {
//     arr.forEach((element) => {
//         if (element > num) {
//             console.log(element);
//         }
//     });
// }

// getElements(arr, num);


                          // 3rd approaach

// let arr = [2, 4, 6, 8, 9, 10];
// let num = 6;

// function largerElement(arr, num) {
//     let largenum = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (num < arr[i]) {
//             largenum.push(arr[i]);
//         }
//     }

//     return largenum;
// }

// console.log(largerElement(arr, num));



                      // 4th approaach

// with the help of filter

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    let result = arr.filter((element) => {
        return element > num;
    });

    return result;
}

console.log(getElements(arr, num));


// Qs2. Write a JavaScript function to extract unique characters from a string.

// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”