const express = require('express')
const slowServer = express()

slowServer.use(express.urlencoded())
slowServer.post('/submit-form', (req, res) => {
    await sleep(5000);
 });
 
 async function sleep(sleepTime){
     return new Promise((resolve)=>{
        setTimeout(resolve, sleepTime);
    })
 }