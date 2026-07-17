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
// lexical scope 

function outerFunction(){
    let x = 5;
    let y = 6;
    function innerFunction(){
        console.log(x);
    }
    innerFunction();
}

// or we can also do this 
// without declarinf varible frist we can use it in function 
// this is known [HOISTING]

function outerFunc(){
    function innerFunction(){
        console.log(y);
    }
    let x = 5;
    let y = 6;
    innerFunction();
    
}
// 7PQ what will be the output ?
let greet = "hello";
function changeGreet(){
    let greet = 'namaste';
    console.log (greet);

    function ineerGreet(){
        console.log(greet);
    }
}console.log(greet);
changeGreet();

// FUNCTION EXPRESSION 
 // -->> ALL THE OPERATION WHICH CAN WE PERFORM ON VARIABLE
 //  WE CAN ALSO PERFORM ON A FUNCTION BY USINF FINCTION EXPRESSION
const sum = function(a,b){
    return a+b;

}
sum(2,3);
let hell = function(){
    console.log("hello");
}

// update the value
hell = function(){
    console.log("hi");
}

//HIGHER ORDER FUNCTION
// 1. THIS FUNCTION TAKES ONE OR MULTIPLE FUNCTION AS ARGUMENTS

function multipleGreet(func , n){
    for(let i = 1 ; i<= n; i++){
        func();
    }
}
let gret = function(){
    console.log("hello");
}
multipleGreet(gret , 3);//-->> if we use this so we dont need use ()
 //after gret . we only required to write function NAME for  example  above line 150 gret

// we can also do this we can directly use function defination 
multipleGreet(function(){console.log("hiii");},6);
// but when we use this type here we need write function with() EX line 154 function()