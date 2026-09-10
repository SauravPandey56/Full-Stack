const mongoose = require("mongoose");

main()
.then(() =>{
    console.log("connection successful");
})
 .catch((err) => console.log(err));

async function main() {
    await mongoose.connect ("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
 name: String,
 email: String,
 age : Number,
});





const User = mongoose.model("User" ,userSchema);
//const Employee = mongoose.model("Employee" ,userSchema);

// User.find({age : { $gt:47}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });


// User.findOne({age : { $gt:36}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// User.findById('6aa122771e00fc71fb08c6c9')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// User.updateOne({name:"Bruce"}, {age:49})
//  .then((res) => {
// console.log(res);
// })
// .catch((err) =>{
//      console.log(err);
//  });

// User.updateMany({age: { $gt: 45} }, {age:45}).then ((res) =>{
//  console.log(res);
// })
// .catch((err) =>{
//      console.log(err);
//  });


// User.findOneAndUpdate({ name:"Tony"}, { age: 60} , {new:true}).then((data) =>{
//  console.log(data);
// })
// .catch((err) =>{
//  console.log(err);
// });


// User.findByIdAndUpdate('6aa122771e00fc71fb08c6ca',  { age: 60} , {new:true}).then((data) =>{
//  console.log(data);
// })
// .catch((err) =>{
//  console.log(err);
// });
 
// User.deleteOne({name:"saurav"}).then((res) =>{
//  console.log(res);
// })
// .catch((err) =>{
//  console.log(err);
// });


// User.deleteMany({age:{ $gt:40 }}).then((res) =>{
//  console.log(res);
// })
// .catch((err) =>{
//  console.log(err);
// });

// User.findByIdAndDelete("6aa123bf12569b9a713a07ee").then((res) =>{
//  console.log(res);
// })
// .catch((err) =>{
//  console.log(err);
// });

User.findOneAndDelete({name:"Peter"}).then((res) =>{
 console.log(res);
})
.catch((err) =>{
 console.log(err);
});



// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 50 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 47 },
//     { name: "Peter", email: "peter@gmail.com", age: 30 },
// ])
// .then((data) => {
//     console.log(data);
// });

//const user1 = new User({
//  name:"saurav",
//  email: "saurav@gmail.com",
//  age : 45,
// });
// user1.save();

// const user2 = new User({
//  name:"keashav",
//  email: "keshav@gmail.com",
//  age : 25,
// });

// user2.save()
// .then((res)=>{
//  console.log(res);
// })
// .catch((err)=>{
//  console.log(err);
// });
