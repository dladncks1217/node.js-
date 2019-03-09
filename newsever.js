const http = require('http');

const server = http.createServer((req,res) =>{
    res.write('<h1>Hello Node</h1>');
    res.write('<h2>This is h2</h2>');
    res.end('<p>Hello Server!</p>');

});
server.listen(8080);
server.on('listening',()=>{
    console.log('8080포트 서버에서 서버 대기중!');
});
server.on('error',(error)=>{
    console.log(error);
});