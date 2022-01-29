const mysql = require("mysql2/promise");



const main = async (db_request)=>{

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "./",
            database: "tasks",
        });
        const result= await connection.execute(db_request)
        
    }
    catch(ex){
        console.error(ex);
    }
};
module.exports.main = main;


