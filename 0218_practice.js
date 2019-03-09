const http =require('http');
const url = require('url');
const querys = require('querystring');
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
    parseCookies(req.headers.cookie);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.writeHead(200,{'Set-Cookie':`key1=${encodeURIComponent(key1)};`});
    const {query} = url.parse(req.url);
    const {key1} = querys.parse(query);
    
    console.log(key1);
    res.end();
    

}).listen(2019,(err)=>{
    throw err;
})