//Qs1.Create a program that generate a random number representing a dice roll.
let diceRoll = Math.floor(Math.random()*6)+1;
console.log(diceRoll);

// Qs2.Create an object representing a car that stores the following properties for the
//car:name,model,color
//Print the car’s name.

const car = {
    name:"Mercdes",
    model:"maybach",
    color:"black"
};
console.log(car);

// Qs3.Create an object Person with their name,age and city  
//Edit their city’s original value to change it to “NewYork”.
//Add a new property country and set it to the United States.

const Person  ={
     name:"saurav",
     age:22,
     city:"Patan"
};
console.log(Person);

Person.city ="NewYork";
Person.country ="United states"

console.log(Person);