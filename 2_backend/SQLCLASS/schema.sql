CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

let user = ["123@abc2", "random_user2", "random@gmail.com2", "random@123"];

connection.query(
    `INSERT INTO user (userId, username, email, password) VALUES (?, ?, ?, ?)`,
    user,
    function (err, results) {
        if (err) throw err;
        console.log(results);
    }
);