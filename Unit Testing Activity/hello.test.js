var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello("Andrew")).toBe("Hello, Andrew");
});

test('outputs the correct string', () => {
  expect(hello("")).toBe("");
});

test('outputs the correct string', () => {
  expect(hello("ANDREW")).toBe("HELLO ANDREW!")
});