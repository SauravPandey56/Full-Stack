// // print odd number from 1 to 15 
// for(let i = 1 ; i <=15; i+=2 ){
//     console.log (i);
// } 
// // print even number from 1 to 10 
// for(let i = 2 ; i <=10; i+=2 ){
//     console.log (i);
// } 

// // print the multiplication table of 5 
// for(let i = 5 ; i <=50; i+=5 ){
//     console.log (i);
// } 
// by taking user input 
//  let n = prompt("enter the number ");
//  n = parseInt(n); // parseInt convert string into INTEGER
//  for( let i= n ; i <=n*10; i+=n ){
//     console.log (i);
// }
// nested for loop
// for(let i = 1 ; i <=3; i++ ){
//     console.log(`outer loop ${i}`)
//     for(let j = 1 ; j <=3; j++ ){
//         console.log(j);
//     }
// }

// while loop 

// let i = 1; 
// while(i<=20){
//     console.log(i);
//     i++;
// }

// loops with Array 
// let fruits =["mango","apple","banana","litchi","orange"];
// for(let i = 0; i<fruits.length; i++){
//     console.log(i , fruits[i]);
// }

// nested loop with nested array 
// let student = [
//     ["aman" ,94],
//     ["saurav", 62],
//     ["prk", 66]
// ];
// for(let i = 0; i<student.length; i++){
//     console.log(`info of student ${i}`);
//     for(let j = 0 ; j<student.length;j++){
//         console.log(student[i][j]);
//     }
// }

//for of loop 
// let fruits =["mango","apple","banana","litchi","orange"];
// for(fruitList of fruits){
//     console.log(fruitList);
// }

// Nested for of loop 
let student = [
    ["aman" ,94],
    ["saurav", 62],
    ["prk", 66]
];
for(list of student){
    for(info of list){
        console.log(info)
    }
    
}
