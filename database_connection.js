const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "./",
    database: "tasks",
    waitForConnections :true,
    connectionLimit : 10,
    queueLimit:0
});

const query = (query)=>{
    connection.query(query, (err,res) => {
        if (err) throw res.status(404).json(err);
        
        });
};


module.exports.query = query;
