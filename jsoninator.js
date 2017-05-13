const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  result = ''

  if (obj === null) {
    result += 'null';

  } else if (typeof obj === 'string'){
    result += `"${obj}"`;

  } else if (Array.isArray(obj)) {
    result += '[';

    obj.forEach((value, index, arr) => {
      (index === arr.length - 1) ? (result += stringify(value)) : (result += stringify(value) + ',')
    });

    result += ']';

  } else if (typeof obj === 'object') {
    result += '{';

    for (var key in obj) {
      let value = obj[key];
      result += `"${key}":`;
      
      if (typeof value === 'object' || Array.isArray(value)) {
        result += stringify(value);
      } else {
        result += `"${value}"`;
      };
    };

    result += '}';
    
  } else {
    result += obj.toString();
  }

  return result;
};

module.exports = {
  stringify: stringify
};


