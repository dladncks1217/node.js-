const fs = require('fs');

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    };
    console.log(data);
    console.log(data.toString());
})
fs.writeFileSync('./승혁하이루.txt','승혁 안녕하누',(err)=>{
    if(err){
        throw err;
    }
})