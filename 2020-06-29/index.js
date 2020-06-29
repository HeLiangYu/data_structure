// 栈
const { Stack } = require("../2020-06-26/stack");

// 1. 实现一个栈，除了基础的push、pop方法等还有一个min方法，返回当前栈的最小元素
function StackMin() {
  const data_stack = new Stack(); // 存储数据
  const min_stack = new Stack(); // 存储最小值

  this.push = function (item) {
    // 当两个栈都是空的时候直接入栈
    if (data_stack.isEmpty() && min_stack.isEmpty()) {
      data_stack.push(item);
      min_stack.push(item);
      return true;
    }

    // 取min_stack的栈顶
    let min_val = min_stack.top();

    // 用min_stack的栈顶与要入栈的值比较
    // 如果小于当前的最小值，则将其值压入min栈中，否则将当前值再压入一次
    if (item < min_val) {
      min_val = item;
    }

    data_stack.push(item);
    min_stack.push(min_val);

    return true;
  };

  this.pop = function () {
    // 直接将data、min两个栈的栈顶数据出栈
    const data = data_stack.pop();
    min_stack.pop();

    return data;
  };

  this.min = function () {
    if (!min_stack.isEmpty()) {
      // 如果min栈不为空，则直接返回栈顶元素
      return min_stack.top();
    }

    return null;
  };
}

const stackTest1 = new StackMin();
// stackTest1.push(9);
// stackTest1.push(25);
// stackTest1.push(1);
// stackTest1.push(290);
// stackTest1.push(56);
// stackTest1.pop();
// stackTest1.pop();
// stackTest1.pop();
// console.log(stackTest1.min());

// 2. 使用栈，完成中缀表达式转后缀表达式
// 输入：['12', '+', '3']
// 输出：['12', '3', '+']
// (1+(4+5+3)-3)+(9+8)
function stackChange(value) {
  const arr = []; // 用于存储后缀表达式
  const stack = new Stack();

  // 定义符号的优先级
  const priority_map = {
    "*": 2,
    "/": 2,
    "-": 1,
    "+": 1,
  };
  for (let i = 0; i < value.length; i++) {
    const item = value[i];
    if (item === "(") {
      // 遇到左括号入栈
      stack.push("(");
    } else if (!isNaN(+item)) {
      // 遇到数字，直接放入数组中
      arr.push(item);
    } else if (item === ")") {
      // 遇到右括号，弹出栈顶元素，直到遇到左括号
      // 在遇到左括号之前，栈内的符号都是要计算的
      while (stack.top() !== "(") {
        arr.push(stack.pop());
      }

      stack.pop(); // 左括号出栈
    } else {
      // 遇到其他符号，把栈顶的元素弹出，直到栈顶的符号优先级小于当前符号
      while (
        !stack.isEmpty() &&
        ["-", "+", "*", "/"].indexOf(stack.top()) > 0 &&
        priority_map[stack.top()] > priority_map[item]
      ) {
        // 1. 运算符栈不为空
        // 2. 栈顶元素为四个运算符中的任意一个
        // 3. 栈顶符号的运算优先级大于当前符号
        // 此处为什么要判断运算符的优先级？根据中缀表达式中优先级高德要先计算，
        // 同理，后缀表达式中先出现的符号先计算，所以需要判断即将出栈的的符号是否要先计算
        // 如果不是就将当前符号入栈，当前符号的优先级大于即将出栈的符号
        // 当前符号入栈较晚、所以出栈较早，会比即将出栈的符号先计算
        arr.push(stack.pop());
      }
      stack.push(item);
    }
  }
  // 栈中可能还剩余符号，将其一项项插入数组中
  while (!stack.isEmpty()) {
    arr.push(stack.pop());
  }

  return arr;
}

// console.log(stackChange("(1+(4+5+3)-3)+(9+8)"));
// ["1", "4", "5", "3", "+", "+", "3", "-", "+", "9", "8", "+", "+"];

// 队列
const { Queue } = require("../2020-06-26/queue");
// 使用队列实现一个栈
function quStack() {
  const qu1 = new Queue();
  const qu2 = new Queue();

  let data_qu = null;
  let empty_qu = null;

  // 根据栈和队列的特性
  // 栈是先进后出，队列是先进先出
  // 所以只要保证队列里的数据与栈的是相反的即可
  // 即栈顶出栈对应队的队首出队、栈顶如入栈对应队尾入队
  // 所以定义的两个队列的元素只需倒来倒去即可
  function initQu() {
    data_qu = qu1;
    empty_qu = qu2;

    if (!qu2.isEmpty()) {
      data_qu = qu2;
      empty_qu = qu1;
    }
  }

  this.push = function (item) {
    initQu();

    // 先将入栈的元素添加到空队列的队尾
    // 再依次将非空队列的元素出队然后加入到空队列的队尾
    empty_qu.enqueue(item);
    while (!data_qu.isEmpty()) {
      empty_qu.enqueue(data_qu.deenqueue());
    }
  };

  this.pop = function () {
    initQu();
    return data_qu.deenqueue();
  };

  this.print = function () {
    initQu();
    data_qu.str();
  };
}

const quTest1 = new quStack();
quTest1.push(36);
quTest1.push("ksd");
quTest1.push(91);
quTest1.push("iwo");

quTest1.pop();
// quTest1.print();

// 打印杨辉三角
function triangle(n) {
  const qu = new Queue();

  qu.enqueue(1);
  // 杨辉三角的每一行的行数与这一行元素的个数相等，所以可以使用两个for循环来控制打印的内容
}
