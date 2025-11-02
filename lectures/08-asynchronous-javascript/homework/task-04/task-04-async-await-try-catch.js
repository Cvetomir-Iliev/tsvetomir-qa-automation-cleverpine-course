// Await / Try / Catch

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

async function runSafeOperation(name, shouldFail) {
  try {
    await simulateApiCall(name, shouldFail);
    return { ok: true, name: name };
  } catch (error) {
    console.log('[runSafeOperation ERROR]', error.message);
    return { ok: false, name: name };
  }
}

runSafeOperation('profile', false).then(function (v) {
  console.log('[SAFE RESULT]', v);
});

runSafeOperation('report', true).then(function (v) {
  console.log('[SAFE RESULT]', v);
});


module.exports = { runSafeOperation, simulateApiCall };
