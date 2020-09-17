/**
 * storage封裝
 */

const STORAGE_KEY = 'meta';

// @@遞迴
export default { // ## storage倉庫是個物件
  // methods: {
  setItem(key, value, moduleName) { // ##重載
    if (moduleName) {
      const obj = this.getItem(moduleName); // 沒模塊 && meta父模塊
      obj[key] = value;
      this.setItem(moduleName, value);
    } else {
      const obj = this.getStorage();
      obj[key] = value;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    }
  },
  getItem(key, moduleName) { // 屬性，模塊下的屬性
    if (moduleName) {
      const obj = this.getItem(moduleName);// @@js呼叫自己
      if (obj) {
        return obj[key];// @@js
      }
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, moduleName) {
    const obj = this.getStorage();
    if (moduleName) {
      if (!obj[moduleName]) return;
      delete obj[moduleName][key];
    } else {
      delete obj[key];
    }
  },
  // },
};
