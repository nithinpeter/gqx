import { Root, Query, Mutation, Field } from '../components/';

let ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
  if (typeof rootNode !== undefined) {
    return (ROOT_NODE_INSTANCE = rootNode);
  } else {
    return (ROOT_NODE_INSTANCE = new Root());
  }
}

// Creates an element with an element type, props and a root instance
function createElement(type, props) {
  const COMPONENTS = {
    ROOT: () => new Root(),
    QUERY: () => new Query(ROOT_NODE_INSTANCE, props),
    MUTATION: () => new Mutation(ROOT_NODE_INSTANCE, props),
    FIELD: () => new Field(ROOT_NODE_INSTANCE, props),
    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export { createElement, getHostContextNode };
