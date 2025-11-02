// Await

function simulateApiCall(name, shouldFail) {
  const delay = Math.floor(800 + Math.random() * 700);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error('Request failed: ' + name));
      } else {
        resolve({ name: name, status: 'OK', tookMs: delay });
      }
    }, delay);
  });
}

async function runSingleOperation(name, shouldFail) {
  console.log('[runSingleOperation] starting:', name);
  const result = await simulateApiCall(name, shouldFail);
  console.log('[runSingleOperation] result:', result);
  return result;
}

runSingleOperation('getUser', false).then(function (v) {
  console.log('[final returned]', v);
});


module.exports = { runSingleOperation, simulateApiCall };
