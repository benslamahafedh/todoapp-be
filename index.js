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

// app.get('/:id',(req,res)=>{
//   res.status(200).json(req.params.id);
// });

app.get("/", (req, res) => {
  try{
    const getall = services.getall();
    res.status(200).json(getall);
    
  }catch(err){
    console.error(err);
  }
});

app.get ('/:id',(req,res)=>{
  try{
    const id =req.params.id
    const get = services.get('*',id,'?');
    res.status(200).json(get);
    
  }
  catch(err){
    console.error(err);
  };
});

app.get("/:priority", (req, res) => {
  try{
    const get = services.get("*", "priority", "?");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.get("/:due_on", (req, res) => {
  try{
    const get = services.get("*", "due_on", "?");
  
  res.status(200).json(get);}
  catch(err){
    console.error(err);
  }
});

app.get("/:type", (req, res) => {
  try{
    const get = services.get("*", "type", "?");
  
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
