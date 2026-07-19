// // ARRAY METHOD 
// // 1.forEach 
// let arr = [1,2,3,4,5,6,7];
// arr.forEach((el)=>{
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// });

// let print =  function(el){
//     console.log(el);
// };
// arr.forEach(print);

// // for oobject
// let ary =[
//     {
//         name:"aman",
//         marks:95
//     },{
//         name:"shradha",
//         marks:96
//     }
// ];
// ary.forEach((student)=>{
//     console.log(student.marks);
// });

// // MAP
// let num = [1,2,3,4,5,66,7,77];
// let double = num.map((el)=>{
//     return el*el;
// });

// // for object 
// let students = [{
//     name : "saurav",
//     marks:86
// },
// {
//     name :"pankaj",
//     marks : 88
// }
// ];

// let gpa = students.map((el)=>{
//     return el.marks/10 ;
// });

// // FILTER 

// let nums = [1,2,3,45,6,7,89,9,0];
// let ans = nums.filter ((el)=>{
//     return el<5;
// });

// //EVERY 
// let evry = [2,4,6];
//  let rslt = evry.every((el)=>{
//    return el%2==0;
// });

// // if you use curly brace {} then you must use return keyword 

// // some 
// let sme = [11,3,7,9];
// let reslt = sme.some((el)=> (el % 2 == 0));

// // REDUCE 

// let rdc = [1,2,3,4];
// let result = rdc.reduce ((res , el)=>(res +el));

// let nms = [1,2,3,4,5,6,7];
// let finalVal = nms .reduce((res ,el)=>{
//     console.log(res);
//     return res+el;
// });

// let array = [1,4,2,5,6,7,8,7,6,9];
// let max = array.reduce((max , el)=>{
//     if (max <el){
//         return el ;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// // PQ check if all numbers in our array are multiple of 1 or not

// let nums = [10,20,30,40];
// let ans = nums.every((el)=>
//     el%10 == 0
// );
// console.log (ans);

// // create a function to find the min number in an array 

// let arr = [1,2,3,4,5,6,7,8,0,-1];
// let min = arr.reduce((min , el)=>{
//     if(min <el){
//         return min;
//     }else{
//         return el ;
//     }
// });

// console.log(min);
       //  or

// function getMin(nums){
//         let min = nums.reduce((min , el)=>{
//         if(min <el){
//             return min;
//         }else{
//             return el ;
//         }
//     });
//     return min ;
// }
// let nums = [1,2,3,4,5,6,7,-22,-1,0];
// console.log(getMin(nums)); // -22

// // default parameter

// function fxn (a,b=3){
//     return a+b ;

// }
// fxn(2);

// // spread 
// console.log (..."apnacollege");
// let arr = [1,2,3,4,5];
// Math.min (...arr);
// console.log(...arr);

// // with Array literals

// let arr = [1,2,3,4,5];
// let newArr = [...arr];


// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even =[2,4,6,8,10];
// let nums = [...odd ,...even];
// console.log(nums);

// // with object literals 
// const data = {
//     email : "ironmen@gmail.com",
//     password :"abcd"
// };

// const datacopy = {...data.email,id:123 , country:"INDIA"};

// let arr = [1,2,3,4,5];
// let obj1={...arr};
// let obj2 = {..."hello"};


// // REST 

// function  min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el ;
//         }else{
//             return min ;
//         }
//     });
// }

//DESTRUCTURING

let names =["tony","bruce",]