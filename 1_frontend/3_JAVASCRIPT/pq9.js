// (1) a<p> with red text that says "hey I'm red!"

let para1 = document.createElement("p");
para1.innerText="hey I'm red!"
document.querySelector("body").prepend(para1);

para1.classList.add("red")

// (2) an<h3>with blue text that says "I'm a blue h3!"

let h3 = document.createElement("h3");
h3.innerText="hey I'm blue!"
document.querySelector("body").prepend(h3);

h3.classList.add("blue")

// (3)a<div>with a black border and pink background color with the following elements inside of it:
//  . another <h1>that says "I'm in a div"
//  . a<p> that says "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="ME TOO!";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").prepend(div);
