let msg = "     hello     ";
console.log(msg.trim());
// Trim method 
let password = prompt("set your passsword");
console.log(password.trim());

let str = "sauravPandey";
console.log(str.indexOf("Pan"))

// chaining method 
 let newmsg = msg.trim().toUpperCase();
 console.log(newmsg);
// slice method 
let meg = "sauravPandey";
console.log(meg.slice(1,4));
console.log(meg.slice(5));
console.log(meg.slice(-4)); // =>12 - 4 ;

// replace method 
let cng = "ILoveCoding";
console.log(cng.replace("Love","do"));

// repeat method
let srt = "mango";
console.log(srt.repeat(3));