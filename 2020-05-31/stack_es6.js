// 使用Symbol来创建stack
let _items = Symbol();

class Stack {
  constructor() {
    this[_items] = [];
  }

  push(item) {
    this[_items].push(item);
  }
}

const t = new Stack();

// console.log(Object.getOwnPropertySymbols(t));

const ll = Object.create({ dk: "l" });

console.log(Object.getOwnPropertyDescriptor(ll.dk));
