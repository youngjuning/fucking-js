import { ListNode } from './ListNode';

export class LinkedList {
  count: number;
  head: ListNode | undefined;
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  /**
   * 循环迭代链表直到目标位置
   */
  getElementAt(index) {
    // 检查越界值
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      // 迭代整个链表直到目标 index。结束循环时，node 元素将是 index 位置元素的引用。
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  /**
   * 向链表尾部添加元素
   */
  push(element) {
    const node = new ListNode(element);
    let current;
    if (this.head == null) {
      // 如果链表为空，将头节点指向新节点
      this.head = node;
    } else {
      current = this.head;
      // 遍历链表，找到最后一个节点
      while (current.next != null) {
        current = current.next;
      }
      // 将最后一个节点的 next 指针指向新节点
      current.next = node;
    }
    // 递增链表的长度
    this.count++;
  }

  /**
   * 从链表的特定位置移除一个元素。
   * @param {number} index - 要移除的元素的索引。
   * @returns {any} - 被移除的元素的值。
   */
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined; // 如果索引无效，则返回 undefined
  }

  /**
   * 在任意位置插入元素
   */
  insert(element, index) {
    // 由于我们处理的是位置，就需要检查越界值
    if (index >= 0 && index <= this.count) {
      const node = new ListNode(element);
      if (index === 0) {
        // 在第一个位置添加
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++; // 更新链表长度
      return true;
    }

    return false;
  }

  /**
   * 返回一个元素的位置
   */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  /**
   * 从链表中移除元素
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
