const http = require('http');
const qs = require('querystring');
const url = require('url');
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

const session ={};

http.createServer((req,res)=>{
    const cookies = parseCookies(req.url.cookie);
    if(req.url.startsWith('/login')){
        const {name} = url.parse(req.url);
        const {value} = qs.parse(name);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);
        const randomInt = +new Date();
        session[randomInt] = {
            name,
            value,
        };
        res.writeHead(302,{
            location:'/',
            'Set-Cookie':`session = ${randomInt}; Expires=${expires.toGMTString()}; HttpOnly Path=/`
        });
        
        res.end();
    }

    else if(cookies.session && session[cookies.session] > new Date()){
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(`${session[randomInt].value} 님 안녕하세요.`);
    }
    else{
        fs.readFile('0213_server.html',(err,data)=>{
            if(err){
                throw err;
            }
            else{
                res.end(data);
            }
        });
    }
}).listen(8080,()=>{
    console.log('8080 포트에서 서버 대기중.');
});