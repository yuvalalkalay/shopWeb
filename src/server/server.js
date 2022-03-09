const express = require('express');
const connectDB = require('./DB/DB');
const cors = require('cors');
const usersRoute = require('./routers/users');
const app = express();
const port = 3030;


connectDB();
app.use(cors());
app.use(express.json());
app.use('/shopUsers', usersRoute);
app.listen( port, ()=>{
    console.log(`listen tp port ${port} :) /shopUsers`);
})