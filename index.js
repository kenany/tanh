'use strict';

/**
 * @param {number} x A numeric expression that contains an angle measured in
 *  radians.
 * @returns {number} Hyperbolic tangent of `x`.
 */
module.exports = Math.tanh || function tanh(x) {
  if (x === Infinity) {
    return 1;
  }

  if (x === -Infinity) {
    return -1;
  }

  var y = Math.exp(x * 2);
  return (y - 1) / (y + 1);
};
