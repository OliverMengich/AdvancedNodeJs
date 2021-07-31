var fs = require('fs');
var {promisify} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = process.stdout.write("\x07"); // beeps
var delay = (seconds)=> new Promise((resolves)=>{
    setTimeout(resolves,seconds*1000);
});
const delayFunctionality = ()=> Promise.resolve()
    .then(console.log('starting'))
    .then(delay(1))
    .then(()=>'waiting') //waits for the delay to be over
    .then(console.log)
    .then(()=> delay(2))
    .then(writeFile('file.txt','helloooo is oliver learning about promises in node.js'))
    .then(beep) // beeps to indicate it finished writing to the file
    .then(()=>'file.txt created')
    .then(console.log)
    .then(()=> delay(3))
    .then(()=> unlink('file.txt')) //delete the file.txt
    .then(beep)
    .then(()=>'file.txt removed')
    .then(console.log)
    .then(console.log)
    .catch(console.error);
delayFunctionality();