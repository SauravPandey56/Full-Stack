let num = 100 ;
if (num % 10 == 0 ){
    console.log("good number");
}else{
    console.log("bad number");
}
console.log("hi");


//question 2

let name = prompt("enter user name" );
let age = prompt("enter age name");
let user = alert(`${name} is ${age} years old`)

// // question 3

let quarter = 1;
switch(quarter){
    case 1 :
        console.log("january, februry, march");
        break;
    case 2:
        console.log("april, may june");
        break;
    case 3 :
        console.log("july , august , september ");
        break;
    case 4:
        console.log("october, novemember, december");
        break;
    default :
     console.log ("invalid number ")        
}
let str = "apples";
if((str[0]=='a'|| str[0]=='A') && (str.length == 5)){
    console.log("golden string");
}else{
    console.log("bad string");
}

// question 5 

 let frist = 5;
let sec = 10;
let third = 15;
 if ((frist > sec) && (frist > third)){
    console.log("frist is greatest number")
 }else if ((sec > frist ) && (sec < third)){
    console.log("third  is greates number");
 }else{
    console.log("sec is greates number");
 }

// question 6 
let num1 = 32 ;
let num2 = 47842;
if ((num1 % 10) == (num2 % 10)){
    console.log ("same value", num1 % 10);
}else{
    console.log ("not same")
}
