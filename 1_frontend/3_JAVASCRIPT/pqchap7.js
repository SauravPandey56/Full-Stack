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