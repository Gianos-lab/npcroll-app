// Patch util._extend at process startup to avoid DeprecationWarning
const util = require('util');
if (!util._extend) {
  util._extend = function(origin, add) {
    if (!add) return origin;
    for (const k in add) {
      if (Object.prototype.hasOwnProperty.call(add, k)) origin[k] = add[k];
    }
    return origin;
  };
}
