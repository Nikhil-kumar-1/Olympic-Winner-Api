const express = require('express');
const router = require("../src/routers/men")
require("../src/database/connection");

const MensRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);
app.listen(port, ()=>{
    console.log(`Connection is live at port no ${port}`)
})