const services = require("./services/servicees");
const express = require("express");
const app = express();
app.use(express.json());
app.set('view engine','pug');

const response=services.getall();

// services.get('1');
// services.update('name','hafedh');


// app.get ('/:id',(req,res)=>{
//   try{
//     const id =req.params.id
//     const get = services.get('*',id,'?');
//     res.status(200).json(get);
    
//   }
//   catch(err){
//     console.error(err);
//   };  
// });

// app.get("/:priority", (req, res) => {
//   try{
//     const get = services.get("*", "priority", "?");
  
//   res.status(200).json(get);}
//   catch(err){
//     console.error(err);
//   }
// });

// app.get("/:due_on", (req, res) => {
//   try{
//     const get = services.get("*", "due_on", "?");
  
//   res.status(200).json(get);}
//   catch(err){
//     console.error(err);
//   }
// });

// app.get("/:type", (req, res) => {
//   try{
//     const get = services.get("*", "type", "?");
  
//   res.status(200).json(get);}
//   catch(err){
//     console.error(err);
//   }
// });

// app.post("/create", (req, res) => {
//   try{const create = services.create("1", "test", "test", "test", "test", "test");
//       res.status(200).json(create)}
//   catch(err){
//     console.error(err);
//   };
// });

// app.delete("/delete", (req, res) => {
//   try{
//     const del = services.del("status", "done");
  
//   res.status(200).json(del);}
//   catch(err){
//     console.error(err);
//   }
// });

// app.update
