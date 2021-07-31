const {PassThrough} = require('stream');
const {createReadStream, createWriteStream} = require('fs');
const readStream = createReadStream('./vid.mkv');
const writestream = createWriteStream('./video-copy.mkv');

const report = new PassThrough();

var total = 0;
report.on('data',(chunk)=>{
    total += chunk.length
    console.log('bytes', total)
})

readStream.pipe(report).pipe(writeStream)