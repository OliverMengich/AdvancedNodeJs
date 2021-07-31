const {createReadStream, createWriteStream} = require('fs');
const readStream = createReadStream('./vid.mkv');
const writestream = createWriteStream('./vid-copy.mkv',{
    //highWaterMark:1634434
});
readStream.on('data',(chunk)=>{
    //console.log(' size',chunk.length)
    const result = writestream.write(chunk);
    //backpressure
    if(!result){
        console.log('Backpressure')
        readStream.pause() // if writestream is full pause the readstream
    }
});
readStream.on('end',(chunk)=>{
    console.log('write stream finished');
    writestream.end();
});
readStream.on('error',(err)=>{
    console.log('Error has occured '+err);
});
writestream.on('drain',()=>{
    console.log('drained');
    readStream.resume();
})
writestream.on('close',()=>{
    process.stdout.write('file copied\n');
})