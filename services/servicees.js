const db = require("./database_connection");


const  getall= ()=>{
    db.query("SELECT * FROM tasks;");
};

const get =(coloumn,conditionColumn,condition)=>{
    db.query(`SELECT ${coloumn} FROM tasks
            WHERE ${conditionColumn}=${condition};`)
};

const update =(updatedColoumn,value,conditionColumn,condition)=>{
    db.query(`UPDATE tasks
                SET ${updatedColoumn}=${value}
                WHERE ${conditionColumn}=${condition};`)
};


const create = (value1,value2,value3,value4,value6)=>{
    db.query(`INSERT INTO tasks 
                VALUES (${value1},${value2},${value3},${value4},${value5},${value6}); `)
};
const del=(column,condition)=>{
    db.query(`DELETE FROM tasks WHERE ${column}=${condition};`)
};


module.exports.getall = getall;
module.exports.get = get;
module.exports.update = update;
module.exports.del = del;
module.exports.create = create;