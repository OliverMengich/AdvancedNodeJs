const database = [];
var registration = (name,email) => new Promise((resolves,rejects)=>{
    if(name.length< 4){
        return rejects(new Error('Name too short to be added to the database'));
    }
    addData(()=>{
        resolves('Done adding data to the database')
    },name,email)
})
function addData(callback,name, email){
    database.push(name);
    database.push(email);
    callback();
}
registration('ol','kemei')
.then(console.log(' data stored is '+database))
.catch(err=>{
    console.log('Error is ' + err)
})
console.log("hello nigga")