const express = require("express");
const app = express();
let port = 8080;
app.listen(port,()=>{
    console.log(`app listen on port ${port}`);
});


// app.use((req,res)=>{
//     console.log("new incomimg request");
// })

// app.use((req,res)=>{
//     console.log("request recived");
//     res.send("heloo brtelfj");
// })

// app.use((req,res)=>{
//     console.log("new incomimg request");
//     let code = "<h1>fruits</h1><ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// })

app.get("/",(req,res)=>{
    res.send("hello , i am root");
});

app.get("/:username/:id",(req,res)=>{
    let {username , id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});