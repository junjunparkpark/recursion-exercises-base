
const visitAllNodes = function(node, callback) {
  if (node.childNodes) {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  const values = [];
  visitAllNodes(node, (currentNode) => {
    values.push(currentNode);
  });

  return values
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};


