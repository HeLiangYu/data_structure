// 栈 stack 先进后出（后进先出）

// 创建栈
function Stack() {
  // 选择数组来保存栈里的元素
  let items = [];

  // 添加一个或多个新元素到栈顶
  this.push = (item) => {
    // for (let i = 0; i < arg.length; i++) {
    //   items.push(arg[i]);
    // }
    items.push(item);
  };

  // 删除一个栈顶元素，并返回该元素
  this.pop = () => {
    return items.pop();
  };

  // 返回栈顶元素，但不对栈做任何操作
  this.peek = () => {
    return items[items.length - 1];
  };

  // 判断栈是否为空，空则返回true否则返回false
  this.isEmpty = () => {
    // return items.length ? true : false;
    return items.length === 0;
  };

  // 打印栈内元素
  this.print = () => {
    console.log(items.toString());
  };

  // 移除栈内的所有元素
  this.clear = () => {
    items = [];
  };

  // 返回栈内的元素个数
  this.size = () => {
    return items.length;
  };
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(9);
stack.push(10);

stack.print();

stack.pop();

stack.print();

console.log(stack.size());

const stack2 = new Stack();

console.log(stack2.size());
