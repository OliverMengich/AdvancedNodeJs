// const {createReadStream, createWriteStream} = require('fs');
// const readStream = createReadStream('./vid.mkv');
// const writestream = createWriteStream('./file.txt',{
//     //highWaterMark:1634434
// });//
// readStream.pipe(writestream)
// .on('error',(err)=>{
//     console.log(err)
// });
const { createWriteStream } = require('fs');
const writestream = createWriteStream('./file.txt');
process.stdin.pipe(writestream);