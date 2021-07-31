// Readable stream reads all the data and passses it one by one chunck by chunk
const peaks = [
    "Tallacs",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peak",
    "Rose",
    "Freel Peak"
];
const { Readable } = require('stream');
class StreamFromArray extends Readable{
    constructor(array){
        super({ objectMode: true });
        this.array = array;
        this.index = 0;
    }
    _read(){
        // read one line of array
        //1. get chunk
        if(this.index < this.array.length){
            const chunk = {
                data: this.array[this.index],
                index: this.index
            };
            //const chunk = this.array[this.index];
            this.push(chunk)
            this.index +=1;
        }else{
            this.push(null); //stream is over hence you push null to it
        }
    }
}
const peakStream = new StreamFromArray(peaks);
peakStream.on('data',(data)=>console.log(data));
peakStream.on('end',()=> console.log('done'));