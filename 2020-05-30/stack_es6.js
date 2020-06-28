// 使用es6语法创建栈
class Stack {
  constructor() {
    this.items = [];
    this.k = 9;
  }
  k = 8;
  push = (item) => {
    this.items.push(item);
    console.log(this.k);
  };
  print() {
    console.log(this.items);
  }
}

const s = new Stack();
s.push(9);
s.print();
console.log(s);

const t = new Stack();
console.log(t.items);
