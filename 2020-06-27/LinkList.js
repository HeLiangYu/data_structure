// 链表
function Node(data) {
  this.data = data;
  this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n1.next = n2;
n2.next = n3;

// console.log(n1.data);
// console.log(n1.next.data);
// console.log(n1.next.next.data);

function LinkList() {
  const Node = function (data) {
    this.data = data;
    this.next = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  // 添加新节点
  this.append = function (data) {
    // 创建新节点
    const node = new Node(data);

    // 如果头部节点为null，将该节点设置为头节点与尾节点
    if (head === null) {
      head = node;
      tail = node;
    } else {
      // head不为null，让尾节点的next指向当前节点
      // 将尾节点设置为当前节点
      tail.next = node;
      tail = node;
    }

    length++; // 链表长度+1
    return true;
  };

  // 打印节点
  this.print = function () {
    let curr_node = head;
    let str_link = "";
    while (curr_node) {
      str_link += curr_node.data.toString() + "->";
      curr_node = curr_node.next;
    }

    str_link += "null";
    console.log(str_link);
    console.log("长度为：", length);
  };

  // 指定位置插入节点
  this.insert = function (index, data) {
    if (index > length || index < 0) {
      return false;
    } else if (index === length) {
      this.append(data);
      return true;
    } else if (index === 0) {
      const node = new Node(data);
      node.next = head;
      head = node;
      length++;
    } else {
      const node = new Node(data);
      let _index = 0;
      let curr_node = head;
      while (_index < index - 1) {
        // 一直循环，循环到当前节点为需要插入的位置的节点
        curr_node = curr_node.next;
        _index++;
      }
      // 确定当前插入位置的节点之后，先当前节点的下已节点拆开
      const next_node = curr_node.next;
      // 将当前节点的下一节点指向要插入的节点
      curr_node.next = node;
      // 要插入的节点的下一节点指向被拆开的那个节点
      node.next = next_node;
      length++;
      return true;
    }
  };
  // 删除指定位置节点
  this.remove = function (index) {
    if (index > length || index < 0) {
      return false;
    } else if (index === 0) {
      let del_node = head;
      head = head.next;
      return del_node.data;
    } else {
      let _index = 0;
      let pre_node = null; // 初始化设置前一个节点为null
      let curr_node = head; // 初始化设置当前节点为head
      while (_index < index) {
        pre_node = curr_node; // 前一个节点设为当前节点
        curr_node = curr_node.next; // 当前节点设为下一个节点
        _index++;
      }

      const next_node = curr_node.next;
      const del_node = curr_node; // 删除的节点设为当前节点
      pre_node.next = next_node; // 前一个节点的下一个节点指向当前节点的下一个节点
      if (next_node === null) {
        // 如果当前节点的下一节点为null，让尾节点指向null
        tail = pre_node;
      }
      del_node.next = null;
      length--;
      return del_node.data;
    }
  };
  // 获得指定位置的节点
  this.get = function (index) {
    if (index < 0 || index > length) {
      return false;
    } else {
      let curr_node = head;
      let _index = 0;
      while (_index < index - 1) {
        curr_node = curr_node.next;
        _index++;
      }

      return curr_node.data;
    }
  };
  // 返回指定元素所在位置、如果链表中没有这个元素，则返回-1，如果存在多个，则返回第一个
  this.indexOf = function (data) {
    let _index = 0;
    let curr_node = head;
    while (curr_node) {
      if (curr_node.data === data) {
        return _index;
      }
      curr_node = curr_node.next;
      _index++;
    }

    return -1;
  };
  // 返回链表长长度
  this.length = function () {
    return length;
  };
  // 删除尾节点
  this.remove_tail = function () {
    return this.remove(length);
  };
  // 删除头节点
  this.remove_head = function () {
    return this.remove(1);
  };
  // 返回链表头节点的值
  this.head = function () {
    return head.data;
  };
  // 返回链表尾节点的值
  this.tail = function () {
    return tail.data;
  };
  // 链表是否为空
  this.isEmpty = function () {
    return length === 0;
  };
  // 清空链表
  this.clear = function () {
    head = null;
    tail = null;
    length = 0;
  };
}

const linkList = new LinkList();

linkList.append(4);
linkList.append(7);
linkList.append(34);
linkList.append(29);
linkList.insert(2, "oep");
linkList.remove(3);
// linkList.print();

// console.log("indexOf", linkList.indexOf(74));
// console.log("get", linkList.get(1));
