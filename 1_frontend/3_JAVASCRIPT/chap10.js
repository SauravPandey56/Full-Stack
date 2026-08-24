// let btn  = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     alert("button was clicked ");
// };

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("kaya re tu fir aa gaya ");
//     };
//     console.dir(btn);
// }

// function sayHello(){
//     alert("hello mitrrrrr")
// }

// event listner 
// let btns = document.querySelectorAll("button");
//  for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("dek dek kaise dekh raha hai ...");

//     });
//  }

//  function sayHello(){
//      alert("hello mitrrrrr");
// }

//  function sayName(){
//      alert("mara name hai namaaa");
// }

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("kaya ji shanti sa nhi rahega")
// });

// "this " keyword use in event listeners

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

//bydefault event argument

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//  console.log(event);
//  console.log("button clicked")
// });

// btn.addEventListener("dblclick",function(event){
//  console.log(event);
//  console.log("button  double clicked")
// })

// keyboard EVENT 

let inp = document.querySelector("input");
// keydown
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was pressed");
// });

// //keyup
// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was released");
// });

// inp.addEventListener("keydown",function(event){
//      console.log("code = ",event.code);

//      if(event.code == "KeyU"){
//         console.log("character moves up");
//      }else  if(event.code == "KeyD"){
//         console.log("character moves down");
//      }else  if(event.code == "KeyL"){
//         console.log("character moves left");
//      }else  if(event.code == "KeyR"){
//         console.log("character moves right");
//      }
   
// });

// form event

// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // extracting form data

//     let inp= document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);

//     let user = document.querySelector("#user");
//     let pass= document.querySelector("#pass") ;
    
//     console.log(user.value);
//     console.log(user.value);

//     alert(`hi ${user.value},your password is set to ${pass.value}`);
// });

// both are same 

// let form =document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[0];
    
//     console.log(user.value);
//     console.log(user.value);

//     alert(`hi ${user.value},your password is set to ${pass.value}`);
// });
