function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var divideBy5 = multiplyAndDivideBy5(35, 10);
console.log('divideBy5', divideBy5);

function subtractTwoNumbers(num1, num2) {
  var result = (num1 - num2);
  return result;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('subtract', subtract);

function getCircleCircumference(radius) {
  var result = (radius * 2) * 3.14;
  return result;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  var result = (firstName + lastName);
  return result;
}
var fullName = getFullName('Juan', ' Ramirez');
console.log('Full Name', fullName);

function cube(number) {
  var result = (number * number) * number;
  return result;
}

var cubeResult = cube(5);
console.log('Cube', cubeResult);
