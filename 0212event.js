const Event = require('events');
const fs = require('fs');

const eventmake = new Event();

fs.copyFile('0212file.txt','0212eventfs.txt',(error)=>{
    if(error){
        console.log(error);
    }
});
eventmake.on('event1',(err)=>{
    if(err){
        throw err;
    }
    console.log('이벤트 1번입니다.');
});
eventmake.on('event2',(err)=>{
    if(err){
        throw err;
    }
    console.log('이벤트 2번입니다.');
});
eventmake.emit('event1');
eventmake.emit('event2');
eventmake.addListener('event3',(err)=>{
    if(err){
        throw err;
    }
    console.log('이벤트 3입니다.');
});
eventmake.emit('event3');
eventmake.once('event4',()=>{
    console.log('이벤트 4번 once메서드 사용입니다.');
});
eventmake.emit('event4');
eventmake.emit('event4');
eventmake.on('event2',()=>{
    console.log('event2의 두 번째 이벤트입니다.');
});
eventmake.off('event4',)