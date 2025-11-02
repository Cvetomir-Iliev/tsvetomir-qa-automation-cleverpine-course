// Then / Catch

function simulateApiCall(name, shouldFail) {
  const delay = Math.floor(800 + Math.random() * 700); // 800–1500ms
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


simulateApiCall('login', false).then(function (result) {
  console.log('[SUCCESS]', result.name, result.status, result.tookMs + 'ms');
});


simulateApiCall('broken', true)
  .then(function (result) {
    console.log('[UNEXPECTED SUCCESS]', result);
  })
  .catch(function (error) {
    console.log('[ERROR]', error.message);
  });


simulateApiCall('transform-me', false)
  .then(function (result) {
    return { ...result, processed: true, processedAt: Date.now() };
  })
  .then(function (transformed) {
    console.log('[TRANSFORMED]', transformed);
  })
  .catch(function (error) {
    console.log('[CHAIN ERROR]', error.message);
  });


module.exports = { simulateApiCall };
