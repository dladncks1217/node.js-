const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('./0214practice.html',(err,data)=>{
        if(err){
        console.log('파일을 읽는 도중 에러 발생!');
        throw err;
        }
        res.end(data);
    });
}).listen(8082,()=>{
    console.log('8082번 포트에서 대기중입니다!');
});