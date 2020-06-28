function Queue(arr = []) {
  const _items = arr;

  // 从队列尾部添加一个元素
  this.enqueue = function (item) {
    _items.push(item);
  };
  // 从队列头部删除一个元素
  this.deenqueue = function () {
    return _items.shift();
  };
  // 返回头部的元素
  this.head = function () {
    return _items[0];
  };
  // 返回队列大小
  this.size = function () {
    return _items.length;
  };
  // 清空队列
  this.clear = function () {
    _items = [];
  };
  // 判断队列是否为空
  this.isEmpty = function () {
    return _items.length === 0;
  };
  // 返回队尾节点
  this.tail = function () {
    return _items[_items.length - 1];
  };

  this.str = function () {
    console.log(_items);
  };
}

// 约瑟夫环，给出一个长为100的数组，每隔两个删除一个元素，删到最后，继续从头开始，直到删除到最后一个元素为止
// 思路：1. 将数组中的元素加入队列
// 2.使用一个变量index计数，从0开始
// 3. while 队列的长度不等于1时，每当index%3！=0时，取出的队首的元素重新放入队列中
// 4. 一直循环此操作，直到元素只剩一个为止
function yue(arr = []) {
  let index = 0;
  const queue = new Queue(arr);

  while (queue.size() !== 1) {
    const item = queue.deenqueue();
    index++;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }
  return queue.head();
}

const arr = [3, 4, 5, 1, 19, 0, 56];
// console.log(yue(arr));
// 3 4 1 19    56
// 56 3 1 19
// 3 1

// 斐波那契数列 使用队列计算斐波那契数列的第n项
// 斐波那契数据前两列是1,1，此后的每一列都是前两项之和
// 思路：
// 1. 初始化队列的前两个元素为1,1
// 2. 使用一个变量index计数，index初始值为2
// 3. 当index<n时
// 4. 删除队首元素，取出第二个元素（此时是队首）
// 5. 计算上述两个元素之和，放在队尾
// 6. 只要index<n，一直重复上述操作，直到n===index，返回队尾元素
function fei(n = 1) {
  const queue = new Queue([1, 1]);
  let index = 2;
  while (index < n) {
    const t1 = queue.deenqueue();
    const t2 = queue.head();
    const t3 = t1 + t2;
    queue.enqueue(t3);
    index++;
  }

  return queue.tail();
}

// console.log(fei(6));

// 两个队列实现一个栈
function Stack() {
  const _q1 = new Queue();
  const _q2 = new Queue();
  let data_q = null;
  let empty_q = null;

  function init() {
    if (_q1.isEmpty() && _q2.isEmpty()) {
      data_q = _q1;
      empty_q = _q2;
    } else if (_q1.isEmpty()) {
      data_q = _q2;
      empty_q = _q1;
    } else {
      data_q = _q1;
      empty_q = _q2;
    }
  }

  this.push = function (item) {
    init();

    const size = data_q.size();

    empty_q.enqueue(item);

    for (let i = 0; i < size; i++) {
      const _item = data_q.deenqueue();
      empty_q.enqueue(_item);
    }
    // empty_q.str();
  };

  this.pop = function () {
    init();

    return data_q.deenqueue();
  };

  this.top = function () {
    init();

    return data_q.head();
  };
}

const s = new Stack();
s.push(5);
s.push(9);
s.push(10);

s.pop();

s.push(100);
s.push(101);
s.push(102);

// 使用队列打印杨辉三角
function triangle1(n = 1) {
  const q = new Queue();
  q.enqueue(1);

  for (let i = 1; i <= n; i++) {
    // 此处决定打印的三角的层数
    let line = "";
    let pre = 0; // 定义一个初始的pre值
    for (let j = 0; j < i; j++) {
      // 此处决定当层的打印多少、哪些元素
      const _item1 = q.deenqueue(); // 取出队首的元素
      line += `${_item1} `; // 将上层的元素拼接起来
      let val = _item1 + pre; // 取出的元素与pre相加得到当层对应的值
      q.enqueue(val); // 将得到的和添加到队尾
      pre = _item1; // pre值设置为当前取出的值
    }
    q.enqueue(1); // 上面的循环中最后没有添加1、需在此处给队尾补1
    console.log(line);
  }
}
function triangle2(n = 1) {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(0); // 用0来标识当层的数据计算完毕

  for (let i = 1; i <= n; i++) {
    let line = "";
    let pre = 0;
    while (true) {
      const item = q.deenqueue();
      if (item === 0) {
        // 如果档当前元素为0，则在队尾添加一个1和一个0
        q.enqueue(1);
        q.enqueue(0);
        break;
      } else {
        line += `${item} `; // 此处拼接的是上一层的内容
        const val = item + pre;
        q.enqueue(val); // 此处添加的是当层的内容
        // if (i === 8) {
        //   console.log(val);
        // }
        pre = item;
      }
    }
    console.log(line);
  }
}
triangle2(8);
