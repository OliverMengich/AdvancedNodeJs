const { createServer } = require('http');
const {stat, createReadStream } = require('fs');
const filename = "./vid.mkv";
const {promisify} = require('util');
const fileinfo = promisify(stat);
createServer(async (req,res)=>{
    const { size } = await fileinfo(filename);
    const range = req.headers.range();

    console.log('range: ',range);
    res.writeHead(200,
    {
        'Content-Type':'video/mkv',
        'Content-Length': size
    });
    createReadStream(filename).pipe(res);
}).listen(3000,()=>{
    console.log('server runing')
});