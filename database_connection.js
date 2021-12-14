const mysql = require("mysql2/promise");

const connection = async ()=>{

    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "./",
            database: "tasks",
            
        });
        
    }
    catch(ex){
        console.error(ex);
    }
}



const query = async (query)=>{
    
    await connection.query(query, (err,res) => {
        if (err) throw res.status(404).json(err);
        
        });
};


module.exports.query = query;
