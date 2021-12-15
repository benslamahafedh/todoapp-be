const services = require("./services/servicees");
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
  try{
    const getall = services.getall();
    res.status(200).json(getall);
  }catch(err){
    console.error(err);
  }
});

app.get("/high", (req, res) => {
  try{
    const get = services.get("*", "priority", "High");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.get("/today", (req, res) => {
  try{
    const get = services.get("*", "due_on", "GETDATE()");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.get("/home", (req, res) => {
  try{
    const get = services.get("*", "type", "home");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.get("/school", (req, res) => {
  try{
    const get = services.get("*", "type", "school");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.post("/create", (req, res) => {
  try{const create = services.create("1", "test", "test", "test", "test", "test");
      res.status(200).json(create)}
  catch(err){
    console.error(err);
  };
});

app.delete("/delete", (req, res) => {
  try{
    const del = services.del("status", "done");
  
  res.status(200).json(del);}
  catch(err){
    console.error(err);
  }
});

app.update
