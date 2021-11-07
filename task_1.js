const getCompileTime = () => {
  console.log('Автор: Наживотов Олександр');
  console.log('Дата та час компiляцii', new Date());
};

const arr5 = Array.apply(null, { length: 5000 })
  .map(Function.call, Math.random)
  .map((num) => Math.round(num * 5000, 2));

const arr10 = Array.apply(null, { length: 10000 })
  .map(Function.call, Math.random)
  .map((num) => Math.round(num * 10000, 2));

const sort = (arr) => {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
};
const startTime = Date.now();
const sortedArr5 = sort(arr5);
const sortedArr10 = sort(arr10);
const endTime = Date.now();

const factTime = endTime - startTime;
console.log(sortedArr5);
console.log(sortedArr10);
console.log('time spend', factTime, 'ms');

getCompileTime();
