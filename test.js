require

const DL = require('./umd/date-lib.js');

const bday = new DL(1973, 7, 7, 3, 9, 5);

const date_test = bday;
test('year', () => {
    expect(date_test.year.toBe = '1973');
}),

test('shortYear', () => {
  expect(date_test.shortYear.toBe = '73');
}),

test('month', () => {
  expect(date_test.month.toBe = 'August');
}),

test('monthShrt', () => {
  expect(date_test.monthShrt.toBe = 'Aug');
}),

test('day', () => {
  expect(date_test.day.toBe = '7');
}),

test('hours', () => {
  expect(date_test.hours.toBe = '3');
}),

test('mins', () => {
  expect(date_test.mins.toBe = '9');
}),

test('secs', () => {
  expect(date_test.secs.toBe = '5');
}),

test('dayPad', () => {
  expect(date_test.dayPad.toBe = '07');
}),

test('hoursPad', () => {
  expect(date_test.dayPad.toBe = '03');
}),

test('minsPad', () => {
  expect(date_test.minsPad.toBe = '09');
}),

test('secsPad', () => {
  expect(date_test.dayPad.toBe = '05');
});
