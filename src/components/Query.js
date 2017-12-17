import { Base } from './Base';

// Props
// 1. name

export class Query extends Base {
  constructor(root, props) {
    super(root, props);
  }

  render() {
    return `query ${this.props.name || ''} { ${this.renderChildren()} }`;
  }
}
