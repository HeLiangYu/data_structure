function Stack() {
  const _items = [];

  // 添加元素
  this.push = function (item) {
    _items.push(item);
  };

  // 弹出栈顶元素
  this.pop = function (item) {
    return _items.pop();
  };

  // 获取栈顶元素
  this.top = function () {
    return _items[_items.length - 1];
  };

  // 判断栈是否为空
  this.isEmpty = function () {
    return _items.length === 0;
  };

  // 清空栈
  this.clear = function () {
    _items = [];
  };
}

const k = new Stack();

// console.log(k);

// 括号匹配 jfsdfj()(ejdj(djks))
// 使用栈来解决这个问题
// 1. 遍历字符串
// 2. 遇到左括号的时候将其压入栈中
// 3. 遇到右括号，判断栈是否为空，为空则是非法字符、不为空的话弹出栈内的第一个元素，继续判断下一个字符，知道字符遍历完成

const str = "fgdfgj()od(kdl(dsfksf))";

function checkStr(str = "") {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const s = str[i];

    // 遇到左括号，压栈
    if (s === "(") {
      stack.push("(");
    } else if (s === ")") {
      // 遇到右括号、判断栈是否为空
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  // 如果栈不为空，则说明左括号比右括号多，字符不合法
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}

// console.log(checkStr(str));

// Word的回退与前进可以使用两个栈来进行

// 后缀表达式 运算符在 数组的中间
// 1 2 +
// 1 2 3 + +
// 编译器中计算是将中缀转换为后缀表达式来计算
// [4, 13, 5, /, +]  ===  4 + (13 / 5)
// 每遇到符号，拿出符号的前两位来进行计算

// 中缀表达式 运算符在数的中间
// 1+2 2+3+9

// 思路：1. 遍历数组
// 2. 如果元素不是符号，则将数字压入栈中
// 3. 如果元素是符号、则从栈中连续弹出两个元素，并对这两个元素进行计算，将结果压入栈中
// 注：此处如果要返回最后拼接的过程，可以用括号将其中一个表达式用括号包裹后压入栈中
function change(str = []) {
  const stack = new Stack();
  str.forEach((item) => {
    if (typeof item === "number") {
      stack.push(item);
    } else {
      const s1 = stack.pop();
      const s2 = stack.pop();
      stack.push(`(${s2}${item}${s1})`);
    }
  });

  return stack.top();
}

const s = change([4, 13, 5, "/", "+"]);
// console.log(s);
// (4+(13/5))

// 实现一个栈、提供一个min方法，返回栈内最小的元素，且时间复杂度为o(1)

// 使用两个栈来实现队列
