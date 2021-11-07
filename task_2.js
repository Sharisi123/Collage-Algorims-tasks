class Queue {
  constructor() {
    this._data = [];
  }
  enqueue(v) {
    this._data.push(v);
  }
  dequeue() {
    return this._data.shift();
  }
  isEmpty() {
    return this._data.length === 0;
  }
  size() {
    return this._data.length;
  }
  clear() {
    this._data.length = 0;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

class PriorityQueue extends Queue {
  enqueue(v) {
    if (typeof v !== 'object') {
      throw newError(`Ожидается объект, а получен ${typeof v}`);
    } else if (v.priority === undefined) {
      throw newError('У объекта отсутствует поле priority');
    } else {
      super.enqueue(v);
    }
  }

  dequeue() {
    let priority = this._data[0].priority;
    let pos = 0;
    this._data.forEach((o, i) => {
      if (o.priority < priority) {
        priority = o.priority;
        pos = i;
      }
    });
    return this._data.splice(pos, 1)[0];
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ value: 5, priority: 5 });
priorityQueue.enqueue({ value: 2, priority: 4 });
priorityQueue.enqueue({ value: 3, priority: 3 });
console.log(priorityQueue.dequeue());

const getCompileTime = () => {
  console.log('Автор: Наживотов Олександр');
  console.log('Дата та час компiляцii', new Date());
};
getCompileTime();
