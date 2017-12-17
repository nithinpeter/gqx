import { createElement } from '../utils/createElement';
import GQXRenderer from '../reconciler/';

function render(element, path) {
  const container = createElement('ROOT');
  const node = GQXRenderer.createContainer(container);
  GQXRenderer.updateContainer(element, node, null);

  return container.document.render();
}

export default render;
