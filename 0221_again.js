const http = require('http');
const fs = require('fs');


const parseCookies = (cookie = '')=>
    cookie
    .split(';')
    .map(v=>v.split('='))
    .map(([k, ...vs])=>[k, vs.join('=')])
    .reduce((acc,[k,v])=>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    },{});

const server = http.createServer((req,res)=>{
 
    console.log(req.url, parseCookies(req.headers.cookie));
    res.writeHead(200,{'Set-Cookie':`name=${encodeURIComponent('배고프다')};`});
    res.end('Hello Cookie');
}).listen(2020);
server.on('listening',()=>{
    console.log('2020포트에서 서버 대기중입니다!');
});
server.on('error',(error)=>{
    console.log('32번줄 에러');
    console.error(error);
});