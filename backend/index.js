const express = require("express");
const app = express();
const mongoose=require('mongoose')
var cors = require("cors");
const dotenv=require('dotenv')



app.use(cors())
app.use(express.json())

//Db connectivity
dotenv.config({path:'./config.env'})
require("./db/conn")
// const User=require('./model/userSchema')
app.use(require('./router/auth'))


const PORT =process.env.PORT

const Cars=require("./Api/cars")

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

app.get("/cars", (req, res) => {
  res.status(200).send(Cars);
});
