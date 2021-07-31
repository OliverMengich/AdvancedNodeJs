// ======================================== process.nextTick() =========================================
// function hideString(str,done){
//     done(str.replace(/[a-za-Z]/g,'X'));
// }
// var hidden = hideString("Hello world",(hidden)=>{
//     console.log(hidden)
// });
// console.log("end");
//====================================================================== callbacks
// function  delay(seconds,callback){
//     setTimeout(callback,seconds*1000)
// }
// delay(2,()=>{
//     console.log('two seconds');
//     delay(1,()=>{
//         console.log('three seconds')
//     })
// })
// console.log("starting delay")
//====================================================================== promises=============================
// var delay = (seconds)=> new Promise((resolves,rejects)=>{
//     //setTimeout(resolves,seconds*1000)
//     if(seconds > 3){ // the rejects function makes you rejects a promise passed on
//         rejects(new Error('number is too long'))
//     }
//     setTimeout(()=>{
//         resolves('long delay has ended') // prints out as the message of the .then function
//     } ,seconds*1000);
// });
// delay(1,(err,msg)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(msg)
//     }
// })
// delay(1)
// .then(console.log)
// .then(()=>'Oliver')
// .then((number)=> console.log('Hello :-)'+number))
// .catch(err=>{
//     console.log('error is '+err) // when an error occurs in a promise this catchh method handles the error
// });
//console.log('End of TicK')

//============================ handling functions as promises ================================================
var { promisify} = require('util');
var delay = (seconds,callback) =>{
    if(seconds > 3){
        callback(new Error('Seconds too long'));
    }else{
        setTimeout(()=>{
            callback(null, `the ${seconds} seconds wait is over`);
        },3*1000)
    }
}
var promiseDelay = promisify(delay);
promiseDelay(2)
.then(console.log)
.catch(err=>{
    console.log(err);
});
console.log('End of TikTok')