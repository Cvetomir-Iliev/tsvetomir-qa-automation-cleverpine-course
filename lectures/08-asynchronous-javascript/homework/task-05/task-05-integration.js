// Integration

// From Task 1
function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(true); }, ms);
  });
}

// From Task 2
function simulateApiCall(name, shouldFail) {
  const delayMs = Math.floor(800 + Math.random() * 700);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error('Request failed: ' + name));
      } else {
        resolve({ name: name, status: 'OK', tookMs: delayMs });
      }
    }, delayMs);
  });
}

// From Task 4
async function runSafeOperation(name, shouldFail) {
  try {
    await simulateApiCall(name, shouldFail);
    return { ok: true, name: name };
  } catch (error) {
    return { ok: false, name: name, error: error.message };
  }
}

// --- Runner ---
async function run() {
  console.log('Preparing test data...');
  delayedLog('Preparation step A done', 500);
  await delay(700); 

  const operations = ['alpha', 'beta-fail', 'gamma', 'delta-fail', 'epsilon'];

  const results = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < operations.length; i++) {
    const name = operations[i];
    const shouldFail = name.includes('fail');
    const res = await runSafeOperation(name, shouldFail);
    results.push(res);
    if (res.ok) passed++; else failed++;
    console.log('[RESULT]', res);
  }

  const summary = { total: operations.length, passed, failed };
  console.log('[SUMMARY]', summary);

  return { results, summary };
}

// Kick off the run
run().catch(function (err) {
  console.log('[FATAL]', err.message);
});


module.exports = { delayedLog, delay, simulateApiCall, runSafeOperation, run };
