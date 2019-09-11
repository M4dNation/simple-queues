const Queue = require("../src/queue");

describe("Queue", () => {
  test("Instanciate should return an empty queue.", () => {
    const queue = new Queue();

    expect(queue).toBeInstanceOf(Queue);
    expect(queue.newestIndex).toBe(1);
    expect(queue.oldestIndex).toBe(1);
  });

  test("Queue name should be set and returned (get).", () => {
    const queue = new Queue();
    queue.name = "name";

    expect(queue.name).toBe("name");
  });

  test("Adding an element to the queue updates newest index.", () => {
    const queue = new Queue();
    queue.enqueue("test");

    expect(queue.newestIndex).toBe(2);
  });

  test("Poping an element to the queue updates oldest index.", () => {
    const queue = new Queue();
    queue.enqueue("test");
    queue.enqueue("test1");

    queue.dequeue();

    expect(queue.oldestIndex).toBe(2);
  });

  test("Poping last element resets queue indexes.", () => {
    const queue = new Queue();
    queue.enqueue("test");
    queue.enqueue("test1");
    queue.enqueue("test2");

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.newestIndex).toBe(1);
    expect(queue.oldestIndex).toBe(1);
  });
});
