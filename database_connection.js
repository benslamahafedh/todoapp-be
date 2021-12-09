const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "./",
    database: "tasks",
});

const query = function query(query,operation){
    connection.query(query, (err,res) => {
        console.log('#######{ '+operation+' }#######');
        if (operation==='update' || operation==='select' ){console.log(res);};
        if (err) throw err;
        
        });
};


module.exports.query = query;
