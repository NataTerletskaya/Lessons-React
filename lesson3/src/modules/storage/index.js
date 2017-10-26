
class Storage {
  constructor() {
    this.db = localStorage;
    this.categoryKey = 'lesson3.category';
    this.taskKey = 'lesson3.task';

    this.getItems = this.getItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
  }

  getNewId() {
    return Math.random().toString().slice(2, 10);
  }

  getItems(key) {
    let items = this.db.getItem(key);
    if (typeof items === 'string') {
      return JSON.parse(items);
    }
    return items && items.length > 0 ? items : [];
  }

  updateStorage(key, data) {
    this.db.setItem(key, JSON.stringify(data));
  }

  addItem(key, item) {
    let items = this.getItems(key);
    items.push(item);
    this.updateStorage(key, items);
  }

  getItem(key, itemId) {
    let items = this.getItems(key);
    const item = items.filter(item => item.id === itemId);
    return item[0];
  }

  deleteItem(key, itemId) {
    let items = this.getItems(key);
    this.updateStorage(key, items.filter(item => item.id !== itemId));
  }
}

export default new Storage();