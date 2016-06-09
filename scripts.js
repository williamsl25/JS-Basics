var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day! ');

var yearsAlive = 38;
var daysPerYear = 365;
var secondsAlive = secondsPerDay * daysPerYear * yearsAlive;
document.write(' I have been alive for more than ' + secondsAlive + '.')

// convert strings to numbers => parseInt  only returns a whole number
  // var str = '49 steps';
  // var num = parseInt(str);

  // var width = '190px';
  // var numOfDivs = 10;
  // var totalWidth = parseInt(width) * numOfDivs;

// num now holds the number 49
// convert string to decimal => parseFloat
  // parseFloat('3.14');  => 3.14 converts string to a number
