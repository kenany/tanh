var tanh = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(tanh));
});

test('calculates hyperbolic tangent', function(t) {
  t.plan(3);
  t.equal(tanh(0), 0);
  t.equal(tanh(Infinity), 1);
  t.equal(tanh(1), 0.7615941559557649);
});