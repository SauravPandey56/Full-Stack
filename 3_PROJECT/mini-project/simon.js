let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

// Get previous highest score from localStorage
let highScore = Number(localStorage.getItem("highScore")) || 0;

let h2 = document.querySelector("h2");
let highScoreDisplay = document.querySelector("#high-score");

// Show saved highest score immediately
highScoreDisplay.innerText = `Highest Score: ${highScore}`;

// Start game
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
   // console.log("cur level :",level);
   

    if(userSeq[idx]===gameSeq[idx]){
        //user completed this level
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        }else{

        // wrong answer
        gameOver();
    }
   
}

function gameOver() {

    // Update highest score if current score is greater
    if (level > highScore) {
        highScore = level;
        localStorage.setItem("highScore", highScore);
    }

    // Always show the current highest score
    highScoreDisplay.innerText = `Highest Score: ${highScore}`;

    h2.innerHTML = `
        Game Over! Your score was <b>${level}</b><br>
        Press any key to start
    `;

    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);

   let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level = 0;
}