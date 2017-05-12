const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const result = flattenTreeToArray(root).filter(element => {
    if (element.id && element.id === id) {
      return element;
    };
  });

  return result.length === 1 ? result[0] : result

};

const getElementsByClassName = function(root, className) {
  return flattenTreeToArray(root).filter(element => {
    if (element.className && element.className.includes(className)) {
      return element;
    };
  });
};

const getElementsByTagName = function(root, tagName) {
  return flattenTreeToArray(root).filter(element => { 
    if (element.tagName && element.tagName.includes(tagName)) {
      return element;
    };
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
