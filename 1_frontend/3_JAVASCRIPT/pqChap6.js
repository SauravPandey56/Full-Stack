// function in js 
function hello(){
    console.log("hello");
}
hello();

// 1PQ
//create a function that print a poem

function printPoem(){
    console.log("twinkwl twinkwl little star");
    console.log("how i wonder what you are");
}
printPoem();

//2PQ Create a function to roll  a dice and always display the value of the dice (1 to 6)

function diceRoll(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
diceRoll();

// function with arguments

function printInfo(name , age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Saurav" , 21);
printInfo("saurav");
printInfo(21);
// pass the value of parameter order wise because js take value order wise
// and if you miss the passing any value js consider is as undeifned.

// 3PQ create a function that gives us the average of 3 numbers.

function calcAvg(a,b,c){
    let avg = (a+b+c)/3
    console.log(avg);
}
calcAvg(1,2,3);

// 4PQ create a function that prints the multiplication  table of a number 

function table(n){
    for(let i=n ; i<= n*10 ; i+=n){
        console.log(i);
    }
}
table(5);

//return keyword 

function isAdult(age){
    if(age >= 18){
        return " adult";
    }else{
        return " not adult";
    }
}
let adult = isAdult(13);
console.log(adult);

// 5PQ create a function that return the sum of numbers from 1 to n.

function getSum(n){
    
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}

// 6PQ create a function that return the concatnation of all strings in an array.

let str = ["hi","hello","namesta","bye","!"];

function concat(str){
    result = "";
    for(let i = 0 ; i<str.length;i++){
        result+= str[i];
    }
    return result;
}