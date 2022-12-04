timer=3000
console.log(`set the waiting time as ${timer/1000} seconds`);

const finished=()=>console.log("done");

setTimeout(finished, timer);