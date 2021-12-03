const db=require('./database_connection');
const Joi =require('joi');
const express = require("express");
const app = express();
app.use(express.json())
// db.query (`INSERT INTO tasks VALUES(1,'yh','h',NOW(),'t','h');`,'insertion');


// db.query (`TRUNCATE TABLE tasks;`,'data cleared')

