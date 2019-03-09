//프로미스 사용
const true1 = true;
let promise = new Promise((resolve,reject) =>{
    if(true1){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});
promise.then((message)=> {
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});