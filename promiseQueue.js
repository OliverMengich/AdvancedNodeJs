var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
});
var tasks = [
    delay(3),
    delay(7),
    delay(4),
    delay(6),
    delay(10),
    delay(4),
    delay(5),
    delay(2),
    delay(4),
    delay(9)
];
class PromiseQueue {
    constructor(promises=[], concurrentCount = 1) {
        // save variabs
        this.concurrent = concurrentCount;
        this.total = promises.length;
        this.todo = promises;
        this.running = [];
        this.complete = [];
    }
    get runAnother(){
        // tells whether its time to run
        return(this.running.length < this.concurrent) && this.todo.length // makesure thus the number of running tasks are not more than the concurrentCount and their are still some items in the todo
    }

    run(){
        while(this.runAnother) {// if it returns true
            var promise = this.todo.shift(); // removes promise on todolist and sets it to the variable promise
            promise.then(()=>{
                this.complete.push(this.running.shift());
                this.run();
            })
            this.running.push(promise);
        }
    }
}
var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();