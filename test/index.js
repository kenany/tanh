'use strict';

const tanh = require('../');
const test = require('tape');
const isFunction = require('lodash.isfunction');
const isNaN = require('lodash.isnan');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(tanh));
});

test('NaN', function(t) {
  t.plan(1);
  t.ok(isNaN(tanh(NaN)));
});

test('+0', function(t) {
  t.plan(1);
  t.equal(tanh(+0), +0);
});

test('-0', function(t) {
  t.plan(1);
  t.equal(tanh(-0), -0);
});

test('+INFINITY', function(t) {
  t.plan(1);
  t.equal(tanh(Number.POSITIVE_INFINITY), +1);
});

test('-INFINITY', function(t) {
  t.plan(1);
  t.equal(tanh(Number.NEGATIVE_INFINITY), -1);
});
