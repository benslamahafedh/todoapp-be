const mysql = require("mysql2/promise");



const main = async (req)=>{

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "./",
            database: "tasks",
        });
        const res= await connection.execute(req)
        connection.end()
        return res [0]

    }
    catch(ex){
        console.error(ex);
    }
};
module.exports.main = main;


main("Select * from tasks")