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
  const getall = services.getall();
  if (err) throw res.status(404).json(err);
  res.status(200).json(getall);
});

app.get("/high", (req, res) => {
  const get = services.get("*", "priority", "High");
  if (err) throw res.status(404).json(err);
  res.status(200).json(get);
});

app.get("/today", (req, res) => {
  const get = services.get("*", "due_on", "GETDATE()");
  if (err) throw res.status(404).json(err);
  res.status(200).json(get);
});

app.get("/home", (req, res) => {
  const get = services.get("*", "type", "home");
  if (err) throw res.status(404).json(err);
  res.status(200).json(get);
});

app.get("/school", (req, res) => {
  const get = services.get("*", "type", "school");
  if (err) throw res.status(404).json(err);
  res.status(200).json(get);
});

app.post("/create", (req, res) => {
  const create = services.create("1", "test", "test", "test", "test", "test");
  if (err) throw res.status(404).json(err);
  res.status(200).json(create);
});

app.delete("/delete", (req, res) => {
  const del = services.del("status", "done");
  if (err) throw res.status(404).json(err);
  res.status(200).json(del);
});
