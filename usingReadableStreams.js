const fs = require('fs');
const readStream = fs.createReadStream('./vid.mkv');

readStream.on('data',(chunk)=>{
    console.log('reading chunk size',chunk.length)
});
readStream.on('end',(chunk)=>{
    console.log('read stream fnished');
});
readStream.on('error',(err)=>{
    console.log('Error has occured '+err);
});
// to enter into non-flowing mode. entering data to the input only causes you to read data from readstream
readStream.pause();
process.stdin.on('data',(chunk)=>{
    if(chunk.toString().trim()=== 'finish'){
        readStream.resume();
    }
    readStream.read();
})

// const quiz = [
//     "what's your name",
//     "where do you come from",
//     "how old are you",
//     "call me tomorrow"
// ];
// let index = 0;
// if(index <=quiz.length){
//     console.log('welcome to quizy quiz')
//     //console.log(quiz[index]);
//     process.stdin.on('data',(chunk)=>{
//         console.log(chunk +'\n')
//         console.log(quiz[index]);
//         index++;
//     });
    
// }
