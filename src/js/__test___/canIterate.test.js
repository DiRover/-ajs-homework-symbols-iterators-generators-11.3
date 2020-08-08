/* eslint-disable import/extensions */
import canIterate from '../canIterate.js';

test('test iteration 1', () => {
  const expected = false;
  const received = canIterate({ a: 1, b: 2 });
  expect(received).toBe(expected);
});

test('test iteration 2', () => {
  const expected = true;
  const received = canIterate([1, 2, 3]);
  expect(received).toBe(expected);
});

test('test iteration 3', () => {
  const expected = true;
  const received = canIterate('dsada');
  expect(received).toBe(expected);
});

test('test iteration 4', () => {
  const expected = false;
  const received = canIterate(null);
  expect(received).toBe(expected);
});

test('test iteration 5', () => {
  const expected = false;
  const received = canIterate(undefined);
  expect(received).toBe(expected);
});

test('test iteration 6', () => {
  const expected = false;
  const received = canIterate(123);
  expect(received).toBe(expected);
});

test('test iteration 7', () => {
  const expected = false;
  const received = canIterate(false);
  expect(received).toBe(expected);
});

test('test iteration 8', () => {
  const expected = false;
  const received = canIterate(true);
  expect(received).toBe(expected);
});

test('test iteration 9', () => {
  const expected = true;
  const received = canIterate(new Map());
  expect(received).toBe(expected);
});

test('test iteration 10', () => {
  const expected = true;
  const received = canIterate(new Set());
  expect(received).toBe(expected);
});
