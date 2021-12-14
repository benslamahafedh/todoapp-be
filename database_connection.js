const mysql = require("mysql2/promise");

const query = async ()=>{

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "./",
            database: "tasks",
            
        });
        const query = async (query)=>{
            await connection.query(query, (err,res) => {
                if (err) throw res.status(404).json(err);
                
                });
        };
        
    }
    catch(ex){
        console.error(ex);
    }
}






module.exports.query = query;
