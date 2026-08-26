// let h1 = document.querySelector("h1");

// function changeColor(color , delay , nextColorChange){
//  setTimeout(()=>{
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//  } , delay);
// }

// // callbacks nesting -> callback nesting

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("orange",1000,()=>{
//                 });
//             });
//         });
//     }) ;               
// });



// function savetoDb(data , success , failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }




// savetoDb(
//     "apna college",
//     () => {
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "shraddha",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );

// promises 

function savetoDb(data){
   return new Promise((resolve , reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success : data was saved ");
        }else{
        reject("failur : weak connection");
        }
   });
}

// let request = saveToDb("apna college");
// request
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });

        // more compact and better
savetoDb("apna college")
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });


    //this is promise chning

savetoDb("apna college")
    .then(() => {
        console.log("data1 saved");
        return saveToDb("helloworld");
    })
    .then(() => {
        console.log("data2 saved");
        return saveToDb("shradha");
    })
    .then(() => {
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });    

    // hm ya bhi dek sakte hai ki kaya result aya hai or kaya error aya esko dekhne ke liya 
    // then and catch function mai ek argement pass kr denge jaise then(result) and catch mai (error)
    // and phir ese print krwa denge [app argument ka kuch bhi naam rakh sakte hai koi jruri nhi ki result abd error he ho ]

savetoDb("apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise: ", result);
        return saveToDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise: ", result);
        return saveToDb("shradha");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    });    

// callback hell code is improved by promise chaining

    h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color was completed");
    });