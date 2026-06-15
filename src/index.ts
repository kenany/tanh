/**
 * Computes the hyperbolic tangent of a number.
 *
 * @param x A numeric expression that contains an angle measured in radians.
 * @returns The hyperbolic tangent of `x`.
 */
export const tanh: (x: number) => number =
  Math.tanh ||
  function tanh(x) {
    if (Object.is(x, -0)) {
      return -0;
    }

    if (x === Number.POSITIVE_INFINITY) {
      return 1;
    }

    if (x === Number.NEGATIVE_INFINITY) {
      return -1;
    }

    const y = Math.exp(x * 2);
    return (y - 1) / (y + 1);
  };
