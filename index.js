const services = require("./services/servicees");
const express = require("express");
const app = express();
app.use(express.json());
app.set('view engine','pug');


services.getAll()

services.get();
services.update();
services.create();
services.del();


