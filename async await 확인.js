"use strict"
      let func = async()=>{
        try{
          const two = await console.log('2');
          const three = await console.log('3');
          const four = await console.log('4');
        }catch(err){
          console.error(err);
        }
      }
      func();