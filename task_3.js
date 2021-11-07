const getCompileTime = () => {
  console.log('Автор: Наживотов Олександр');
  console.log('Дата та час компiляцii', new Date());
};

const shellSort = (arr) => {
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
};

const arr5 = Array.apply(null, { length: 5000 })
  .map(Function.call, Math.random)
  .map((num) => Math.round(num * 5000, 2));

const arr10 = Array.apply(null, { length: 10000 })
  .map(Function.call, Math.random)
  .map((num) => Math.round(num * 10000, 2));

const startTime = Date.now();
const sortedArr5 = shellSort(arr5);
const sortedArr10 = shellSort(arr10);
const endTime = Date.now();

const factTime = endTime - startTime;
console.log(sortedArr5);
console.log(sortedArr10);
console.log('time spend', factTime, 'ms');
getCompileTime();
