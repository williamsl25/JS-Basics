// quiz begins no answers correct
var correct = 0;
//
// ask questions
// 1)
var answer1 = prompt("What is the capital of Michigan?");
if(answer1.toUpperCase() === 'LANSING'){
  correct += 1;
}

// 2)
var answer2 = prompt("What is the capital of South Carolina?");
if ( answer2.toUpperCase() === 'COLUMBIA' ) {
 correct += 1;
}
// 3)
var answer3 = prompt("What is the capital of Washington?");
if(answer3.toUpperCase() === 'OLYMPIA'){
  correct += 1;
}
// 4)
var answer4 = prompt("What is the capital of California?");
if(answer4.toUpperCase() === 'SACRAMENTO'){
  correct += 1;
}
var answer5 = prompt("What is the capital of Arkansas?");
if(answer5.toUpperCase() === 'LITTLE ROCK'){
  correct += 1;
}
// results
document.write("<p>You got " + correct +  " out of 5 questions correct.</p>");

// rank based on # correct
if( correct === 5 ){
  document.write("<p><strong> Congratulations!! You earned gold!<strong></p>");
} else if( correct >= 3){
  document.write("<p><strong> Great Job! You earned silver!<strong></p>");
} else if( correct >= 1){
  document.write("<p><strong> Keep up the good work! You earned bronze!<strong></p>");
} else {
  document.write("<p><strong> Sorry, you did not win an award!<strong></p>");
}
