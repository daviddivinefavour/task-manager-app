require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('./src/config/dbConfig')

const routes = require("./src/routes")

// middlewares
app.use(express.json());// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded


routes(app)
// set up the server to accept request.
app.listen(port||8000, ()=>{
          console.log('Server is listening on port ',port)
})