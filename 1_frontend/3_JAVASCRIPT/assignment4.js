//Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example: if arr=[1,2,3,4,5,6,2,3] & num=2 
//Result should be arr=[1,3,4,5,6,3]

let arr =[1,2,3,4,5,6,2,3];
let num = 2;

for( let i = 0 ; i <= arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
//Example:if number = 287152 ,count=6

let number = 234344;
let count = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log(count);

//Qs3  Write a JS program to find the sum of digits in a number.
//Example:if number = 287152 ,sum=25
let numb = 287152 ;
let sum = 0;
while (numb >0){
     let remainder = numb%10;
    sum = sum + remainder;
    numb = Math.floor(numb / 10);
} 
console.log(sum);

//Qs4.Print thef actorial of a number n.
let n = prompt("enter the number ");
let fact = 1;
for(let i = 1 ; i<=n ; i++){
    if(n == 0 ){
        console.log(`factorial of zero is 1`);
    }
    fact*=i;
}
console.log(`factorial of ${n} is ${fact}`);