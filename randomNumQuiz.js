/*
The Random Number guessing game generates a number btw 1 and 10 and gives a player two attempts to guess the correct number
*/

// assume the player did not guess correctly
var correctGuess = false;

// generate a random number btw 1 and 10 including 10
var randomNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt('I am thinking of a number between 1 and 10.  What is it?');

/*
Test to see if player is
1.) correct
2.) guessed too high
3.) guessed too low
*/
if(parseInt(guess) === randomNumber){
  //use parseInt to convert guess to a number from a string
  correctGuess = true;
} else if(parseInt(guess) < randomNumber){
  // if num is lower than prompt to guess again
  var guessMore = prompt('Try again. The number I am thinking of is greater than ' + guess);
  //if the players guess is less than the random num then the if below will run.
  if (parseInt(guessMore)=== randomNumber){
    correctGuess = true;
  }
} else if (parseInt(guess) < randomNumber ){
  // if num is higher than prompt to guess again
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if(parseInt(guessLess) === randomNumber){
    correctGuess = true;
  }
}

// write another if/else to print the message to the page if it is correct or not correct
if (correctGuess){
  document.write('<p>You guessed the number!</p>')
} else {
  document.write('<p>Sorry, the correct number was ' + randomNumber + '.</p>');

}
