import { LinkedList } from '..';

describe('LinkedList', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('should initialize with count 0', () => {
    expect(linkedList.count).toBe(0);
  });

  test('should initialize with undefined head', () => {
    expect(linkedList.head).toBeUndefined();
  });
});
