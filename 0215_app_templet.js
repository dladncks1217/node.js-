const express = require('express');
const app = express();
app.get('./count',(req,res)=>{
    res.send('count: ')
});
app.listen(3003,()=>{
    console.log('Connected 3003 port');
});