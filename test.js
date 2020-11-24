const DL = require('./src/index.js')
const bday = new DL(1973, 7, 7, 3, 9, 5)
const date_test = bday

test('year', () => {
    expect(date_test.year.toBe='1973')
}),

test('shortYear', () => {
    expect(date_test.shortYear.toBe='73')
}),

test('month', () => {
    expect(date_test.month.toBe='August')
}),

test('monthShrt', () => {
    expect(date_test.monthShrt.toBe='Aug')
}),

test('day', () => {
    expect(date_test.day.toBe='7')
}),

test('hours', () => {
    expect(date_test.hours.toBe='3')
}),

test('mins', () => {
    expect(date_test.mins.toBe='9')
}),

test('secs', () => {
    expect(date_test.secs.toBe='5')
}),

test('day_pad', () => {
    expect(date_test.day_pad.toBe='07')
}),

test('hours_pad', () => {
    expect(date_test.day_pad.toBe='03')
}),

test('mins_pad', () => {
    expect(date_test.mins_pad.toBe='09')
}),

test('secs_pad', () => {
    expect(date_test.day_pad.toBe='05')
    });
