var fs = require('fs');
var {promisify} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = process.stdout.write("\x07"); // beeps
var readdir = promisify(fs.readdir);
var delay = (seconds)=> new Promise((resolves)=>{
    setTimeout(resolves,seconds*1000);
});
Promise.all([ // pass in the array of promises to be executed
    writeFile('read.md','olivermemeu'),
    writeFile('file.txt','also yrhty'),
    writeFile('file.json','{"message":"hello world", "name":"oliver"}')
])
.then(()=>readdir(__dirname))
.then(console.log)
.then(()=>{
    unlink('read.md')
    unlink('file.json')
    unlink('file.txt')
})