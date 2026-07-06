const favMovie = "avenger";

let guess = prompt ("guess my favourite movie ");

 while((guess != favMovie) ){
    if(guess != "quit"){
        console.log("you quit ")
        break;
    }
     guess= prompt("wrong guess,Please try again !")
 }

 if (guess == favMovie){
    console.log("CONGRATS !! ");
 }