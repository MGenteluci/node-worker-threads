const {
  Worker,
  isMainThread,
  parentPort
} = require('worker_threads');

if (isMainThread) {
  module.exports = function fib() {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename);

      worker.on('message', resolve);
      worker.on('error', reject);
    });
  };
} else {
  function calculate(number) {
    return number === 0
      ? 0
      : number <= 2
      ? 1
      : calculate(number - 1) + calculate(number - 2);
  }

  parentPort.postMessage(calculate(45));
}
