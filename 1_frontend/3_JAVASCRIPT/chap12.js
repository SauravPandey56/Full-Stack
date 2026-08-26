// async function [bydefault return promise]
async function greet() {
    //throw "404 page not found";    // [using *throw* keyword we can throw ant error ]
    return "hello!";
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err : ", err);
    });


// async  by Arrow function
let demo = async()=>{
    return 5;
};

// use of await keyword [we can only use await when async function]
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}



h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    changeColor("blue", 1000);
}



// handling rejection with the help of await 

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}

// Accessing data from json

let jsonRes =
    '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "shradha",
    marks: 95,
};

JSON.stringify(student);


// our frist request [api]
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("data1 = ", data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR = ", err);
    });


    // using fetch with async-await
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("error - ", e);
    }

    console.log("bye");
}    