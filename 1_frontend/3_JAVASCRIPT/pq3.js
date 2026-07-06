let msg = "   help  !  "
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

let name = "apnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("apna","our"));
let newName = name.slice(4).replaceAll('l','t');
console.log(newName);

// 2nd pq

let months = ["january","july","march", "august"];
console.log(months);
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

//3rd pq 
let month = ["january","july","march", "august"];
month.splice(0,2,"july","june");
console.log("month");

let lngs = ["c","c++","html","javascript","python","java","c#"]
lngs.push("sql");
let newLngs = lngs.reverse().indexOf("javascript");
console.log(lngs);
console.log(newLngs);

//pq 4 
// Create a nexted array to show the following tic-tac-toe  game state
let game =[["x,",null,'0'],["null",'x','null'],["0",null,'x']] 