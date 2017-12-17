import { Base } from './Base';

// Props
// 1. name
export class Mutation extends Base {
  constructor(root, props) {
    super(root, props);
  }

  render() {
    return `mutation ${this.props.name || ''} { ${this.renderChildren()} }`;
  }
}
