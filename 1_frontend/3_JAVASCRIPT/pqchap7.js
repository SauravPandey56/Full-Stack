// THIS KEYWORD 
const student = {
    name : "saurav",
    age : 21,
    eng : 95,
    math:93 ,
    phy : 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg(){
    console.log(this);
}

// try and catch

console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error ...");
    console.log(err);
}
console.log("hello2");

// Arrow Function
const sum = (a,b) =>{
    console.log(a+b);
};
sum(4,5);

const square = n =>{
    console.log(n*n);
};

square(4);

//  IMPLICIT RETURN IN ARROW Function 

const mul = (a,b)=>(
    a*b
);
console.log(mul(3,4));

// SET TIMEOUT
 
console.log("hi there !");
setTimeout(() => {
    console.log("apna college");
}, 4000);
console.log ("welcome  to ");

// set interval 

setInterval(() => {
    console.log("saurav ");
}, 2000);

// problem in setINterval fixed 
let id =setInterval(() => {
             console.log("hello ");
        }, 2000);

console.log(`id is : ${id}`);

clearInterval(id);        

// this with Arrow functions

const studnt = {
    name:"aman",
    marks:95,
    prop : this , // global scope
    getname : function (){
        console.log(this);
        return this .name ; 
    },
    getmarks:()=>{
        console.log(this); // parent's scope-> window object
        return this.marks
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this); // student 
        },2000);
    },
    getInfo2:function(){
        setTimeout(function (){
            console.log(this); // window  
        },2000);
    },
};
studnt. getInfo1();

//write an arrow function that returns the square of an number'n'.

const squar =n => n*n;
console.log(squar(4));

// write an arrow function that prints "hello world " 5 times at interv al of 2s each.

let idd = setInterval(()=>{
    console.log("hello worlds")
},2000);

setTimeout(()=>{
    clearInterval(idd);
    console.log("clear interval ran ....");

},10000);