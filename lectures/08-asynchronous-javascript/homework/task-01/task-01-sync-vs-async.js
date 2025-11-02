
function logSynchronousFlow() {
  console.log('Start');
  console.log('Middle');
  console.log('End');
}

function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}

console.log('Before delay');
delayedLog('After 1000ms', 1000);
console.log('After scheduling delay');

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true); // resolve any simple value
    }, ms);
  });
}


logSynchronousFlow();


module.exports = { delayedLog, delay, logSynchronousFlow };
