const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });



// // logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// });

// app.get("/api", (req, res) => {
//     res.send("data");
// });

// const checkToken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// };

// app.get("/api", checkToken, (req, res) => {
//     res.send("data");
// });


const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

 app.get("/err", (req, res) => {
    abcd = abcd;
});
// app.use((err, req, res, next) => {
//     console.log("-------- ERROR --------");
//     res.send(err);
// });


app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

  app.use((err, req, res, next) => {
    console.log(err.name);
    next(err);
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});


const handleValidationErr = (err) => {
    console.log("Validation error occurred");
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);

    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }

    next(err);
});

app.listen(8000, () => {
    console.log("server listening to port 8000");
});