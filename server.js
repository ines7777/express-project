const express = require('express');
const logger = require('./middleware/logger');
const app = express();


app.use(logger)
app.use(express.static(__dirname + "/public"))



const port = 4001;



app.listen(port, (error)=>{
    error ? console.log(error) :  console.log(`server running on ${port}`)
    
})

