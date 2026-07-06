const favMovie = "avenger";

let guess = prompt ("guess my favourite movie ");

 while((guess != favMovie) &&(guess != "quit")){
     guess= prompt("wrong guess,Please try again !")
 }
 
 if (guess == favMovie){
    console.log("CONGRATS !! ");
 }else{
    console.log("you quit");
 }