const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
//database connection
const database = require("./config/database");
database.connect();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(PORT, ()=> {
    console.log(`Server started at Port ${PORT}`);
});