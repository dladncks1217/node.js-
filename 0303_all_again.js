const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '')=>
    cookie
    .split(';')
    .map(v=>v.split('='))
    .map(([k, ...vs])=>[k, vs.join('=')])
    .reduce((acc,[k,v])=>{
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    },{});

const session = {};

http.createServer((req,res)=>{
    parseCookies(req.headers.cookie);
    if(req.url.startsWith === '/login'){
        const {name} = url.parse(req.url);
        const {key} = qs.parse(name);
        const expire = new Date();
        const cookie = +new Date();
        session[cookie] = {
            name,
            expire,
        };
        res.writeHead(302,{
            location:'/',
            
        })

    }

    else{
        fs.readFile('/0213_server.html',(err,data)=>{
            if(err){
                console.error(err);
                throw err;
            }
            else{
                res.end(data);
            }
        })

    }

}).listen(8080,()=>{
    console.log('8080포트에서 서버 대기중.');
});