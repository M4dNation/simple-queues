class Queue {
  /**
   * Build a new queue structure.
   */
  constructor() {

    this._name = "";
    this.oldestIndex = 1;
    this.newestIndex = 1;
	
    this.storage = {};
  }

  /**
   * @getter
   * Get the name of the queue
   * @return {String} The name of the queue
   */
  get name(){
    return this._name;
  }
	
  /**
   * @setter
   * Set the name of the queue
   * @return {String} The name of the queue
   */
  set name(name){
   this._name = name;
   return this._name; 
  }

  /**
   * @getter
   * Get current size of the queue.
   * @return   {Number}    The size of the queue
   */
  get size() {
    return this.newestIndex - this.oldestIndex;
  }

  /**
   * Add data to the end of the queue.
   * @param    {Object}    data    The data you need to add to the queue
   */
  enqueue(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
  }

  /**
   * Get data from the beginning of the queue.
   * @return   {Object}    The oldest data in the queue
   */
  dequeue() {
    const deletedData = this.storage[this.oldestIndex];

    delete this.storage[this.oldestIndex];
    this.oldestIndex++;

    if (this.size === 0) {
      this.newestIndex = 1;
      this.oldestIndex = 1;
    }

    return deletedData;
  }
}

module.exports = Queue;
