const fs = require('fs');

const writeStream = fs.WriteStream('./0212file.txt');
writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료.');
});
writeStream.write('이 글을 쓸게요.');
writeStream.end();
