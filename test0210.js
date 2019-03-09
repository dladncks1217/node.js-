const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','이게 열쇠다');
let result = cipher.update('암호화했음','utf8','base64');
result += cipher.final('base64');
console.log('암호화했다.:',result);

const decipher = crypto.createDecipher('aes-256-cbc','이게 열쇠다');
let result2 = decipher.update('result','base64',"utf8");
result2 += decipher.final('utf8');
console.log('복호화:',result2);