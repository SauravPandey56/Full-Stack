const max = prompt ("enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number ");

while(true){
    if(guess== "quit"){
        console.log("you quit the game !!");
        break;
    }

    if (guess == random){
        console.log("you are right ! congrats !! random number was :",random);
        break;
    }else{
        guess = prompt ("your guess was wrong . please try again ");
    }
}