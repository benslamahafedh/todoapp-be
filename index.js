const db = require("./database_connection");
const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

// db.query (`TRUNCATE TABLE tasks;`,'delete')

const port = process.env.PORT || 3000;

function validate(input) {
  const schema = {
    name: Joi.string().required(),
  };
  return Joi.valid(input, schema);
}

app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});

app.get("/", (req, res) => {
  
  res.send(db.query("SELECT * FROM tasks;",'selection'));
});

// app.get ('/add',(req,res)=>{
//   res.send(db.query(`INSERT INTO TASKS VALUES (##################)`,'insertion'))
// });

app.get ('/high',(req,res)=>{
  res.send (db.query(`SELECT * FROM TASKS 
                    WHERE 'priority'='High';`,'selection'))
});

app.get ("/today",(req,res)=>{
  res.send(db.query(`SELECT * FROM TASKS 
                    WHERE 'due_on'=GETDATE(); `,'selection'))
});

app.get( '/home',(req,res)=>{
  res.send(db.query(`SELECT * FROM TASKS 
                    WHERE 'type'='home';`))
});

app.get( '/school',(req,res)=>{
  res.send(db.query(`SELECT * FROM TASKS 
                    WHERE 'type'='school';`))
});
