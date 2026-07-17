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