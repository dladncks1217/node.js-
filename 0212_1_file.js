const fs = require('fs');

const ReadStream = fs.ReadStream('./0212file.txt',{highWaterMark:16});
const data = [];

ReadStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data:',chunk,chunk.length);
});

ReadStream.on('end',()=>{
    console.log('end:',Buffer.concat(data).toString());
});

ReadStream.on('error',(err)=>{
    console.log('error',err);
});