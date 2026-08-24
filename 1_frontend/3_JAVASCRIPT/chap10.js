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
let btns = document.querySelectorAll("button");
 for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("dek dek kaise dekh raha hai ...");

    });
 }

 function sayHello(){
     alert("hello mitrrrrr");
}

 function sayName(){
     alert("mara name hai namaaa");
}