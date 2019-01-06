const express = require('express');
const fs = require('fs');

var routes = require('./routes/routes');
const app = express();

// Use middleware to set the default Content-Type
app.use(express.json());

// log here
app.use(function(req, res, next){
    let method = req.method;
    let time = new Date().toString();
    let url = req.url;
    let log = `time: ${time} method: ${method} url: ${url} \n`;
    fs.appendFileSync(__dirname+'/public/log/debug.log', log);
    next();
})

//define routing
app.use('/v1/api', routes);

// listen to port
app.listen(3000, ()=>{
    console.log('This application is accessed on port 3000');
})