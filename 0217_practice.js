const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        res.end('login check');
    }
    else{
        fs.readFile('./0213_server.html',(err,data)=>{
            if(err){
                throw err;
            }
            else{
                res.end(data);
                
            }

        })
    }


}).listen(9999,()=>{
    console.log('9999번 포트에서 서버 대기중');x
});