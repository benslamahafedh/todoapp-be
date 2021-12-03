const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "./",
    database: "tasks",
});

const query = function query(query,operation){
    connection.query(query, (err) => {
        if (err) throw err;
        console.log('#######{ '+operation+' }#######');
        });
};


module.exports.query = query;
