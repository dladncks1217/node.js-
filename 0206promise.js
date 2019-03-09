const Promise1 = new Promise((resolve, reject)=>{
    
    console.log('야 이거 프로미스다');
});
Promise1.then(()=>{
    console.log('성공했다');
}).catch(()=>{
    console.log('실패했다');``
});