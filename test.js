/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-expressions
require;

const DL = require('./umd/date-lib.js');

const bday = new DL(1973, 7, 7, 3, 9, 5);

const dateTest = bday;

test('year', () => {
  expect(dateTest.year.toBe = '1973');
});

test('shortYear', () => {
  expect(dateTest.shortYear.toBe = '73');
});

test('month', () => {
  expect(dateTest.month.toBe = 'August');
});

test('monthShrt', () => {
  expect(dateTest.monthShrt.toBe = 'Aug');
});

test('day', () => {
  expect(dateTest.day.toBe = '7');
});

test('hours', () => {
  expect(dateTest.hours.toBe = '3');
});

test('mins', () => {
  expect(dateTest.mins.toBe = '9');
});

test('secs', () => {
  expect(dateTest.secs.toBe = '5');
});

test('dayPad', () => {
  expect(dateTest.dayPad.toBe = '07');
});

test('hoursPad', () => {
  expect(dateTest.dayPad.toBe = '03');
});

test('minsPad', () => {
  expect(dateTest.minsPad.toBe = '09');
});

test('secsPad', () => {
  expect(dateTest.dayPad.toBe = '05');
});
