const mysql= require('mysql');
const connection = mysql.createConnection({
    host :'localhost',
    user :'root',
    password : './',
    database :'tasks'
});

module.export=function insert(query){
    connection.connect();
    connection.query(query,(err)=>{
        if(err)throw err;
        console.log('inserted!!');
    }
    );
    connection.end();
};

module.export=function getData(query){
    connection.connect();
    connection.query(query,(err,res)=>{
        if (err) throw err;
        console.log(res);
    })
    connection.end();
};


