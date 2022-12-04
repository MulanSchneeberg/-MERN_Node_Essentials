const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
}
setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incrementTime = () => {
    currentTime += waitInterval
    console.log(`waiting ${currentTime / 1000} second`)
}

const interval = setInterval(incrementTime, waitInterval);
/*
setting a 3 second delay
waiting 0.5 second
waiting 1 second
waiting 1.5 second
waiting 2 second
waiting 2.5 second
done
*/