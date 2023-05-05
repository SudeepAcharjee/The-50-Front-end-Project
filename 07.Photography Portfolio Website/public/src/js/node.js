/*-----------------------------------------------
|   DomNode
-----------------------------------------------*/
class DomNode {
  constructor(node) {
    this.node = node;
  }

  addClass(className) {
    this.isValidNode() && this.node.classList.add(className);
  }

  removeClass(className) {
    this.isValidNode() && this.node.classList.remove(className);
  }

  toggleClass(className) {
    this.isValidNode() && this.node.classList.toggle(className);
  }

  hasClass(className) {
    this.isValidNode() && this.node.classList.contains(className);
  }

  data(key) {
    if (this.isValidNode()) {
      try {
        return JSON.parse(this.node.dataset[this.camelize(key)]);
      } catch (e) {
        return this.node.dataset[this.camelize(key)];
      }
    }
    return null;
  }

  attr(name) {
    return this.isValidNode() && this.node[name];
  }

  setAttribute(name, value) {
    this.isValidNode() && this.node.setAttribute(name, value);
  }

  removeAttribute(name) {
    this.isValidNode() && this.node.removeAttribute(name);
  }

  setProp(name, value) {
    this.isValidNode() && (this.node[name] = value);
  }

  on(event, cb) {
    this.isValidNode() && this.node.addEventListener(event, cb);
  }

  isValidNode() {
    return !!this.node;
  }

  // eslint-disable-next-line class-methods-use-this
  camelize(str) {
    const text = str.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
    return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;
  }
}

export default DomNode;
