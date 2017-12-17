export class Base {
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  renderChildren() {
    const acc = [];
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        acc.push(this.children[i]);
      } else if (typeof this.children[i] === 'object') {
        acc.push(this.children[i].render());
      }
    }
    return acc;
  }

  render() {}
}
