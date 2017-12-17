import { Base } from './Base';

// Props
// 1. name
// 2. alias
// 3. args = [ { key: string, value: args | string } ]

export class Field extends Base {
  children = [];

  constructor(root, props) {
    super(root, props);
  }

  render() {
    const head = this.props.alias
      ? `${this.props.alias}: ${this.props.name}`
      : this.props.name;

    if (this.children.length > 0) {
      const args = parseArgs(this.props.args);
      return `${head} ${args} { ${this.renderChildren()} }`;
    } else {
      return head;
    }
  }
}

const parseArgs = args => {
  if (!args) return '';

  const body = Object.keys(args).map(key => {
    if (typeof args[key] === 'string') {
      return `${key}: "${args[key]}"`;
    } else {
      return `${key}: ${parseArgs(args[key])}`;
    }
  });

  return `(${body})`;
};
