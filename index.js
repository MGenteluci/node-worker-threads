const fib = require('./worker');

(() => {
  fib()
    .then(res => console.log(`Fibonacci de 45: ${res}`))
    .catch(console.error);

  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,].map(item => {
    if (item % 2 === 0) return item * 17222;

    return item * 12000;
  });

  console.log(newArr);
})();
