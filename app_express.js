'use strict';

const express = require('express');
const app = express();
const port = 8000;

const {getDurationInMilliseconds} = require('./time.js');

app.get('/', (req, res) =>{
    res.send('Hello World!')
    res.on('finish', ()=> {
        const timeTaken  = getDurationInMilliseconds(process.hrtime())
        console.log(timeTaken); 
    } )
})

app.listen(port, ()=> {
    console.log('App listening at http://localhost:${port}')
})