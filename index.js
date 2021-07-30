const chalk = require('chalk');
var readlineSync = require("readline-sync");


var score = 0;
var userName = readlineSync.question(chalk.blue("what's your name?"));

console.log(chalk.red("welcome ! "+ userName ));


// play function

function play(question, answer){
var userAnswer = readlineSync.question(question);

if(userAnswer === answer){
  console.log("Right!");
  score++;
}
else{
  console.log("wrong!")
}

  console.log("The score is", score)
}


var question = [{question:"\nWhat is the first color of rainbow? \na.violet \nb.indio \nc.red", answer:"a"}, 
{question:"\n whats the national emblem of India \na.lion \nb.fourheadedlion \nc.golden eagle", answer:"b"},{question:"\nwhat is the national animal of india \na.elephant \nb.Peacock \nc.Tiger ", answer:"c"}];


for(var i=0; i<question.length; i++){
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}


// high score

var highScore=2;

if (score>highScore){
  console.log(chalk.green("\nyou have got a high score"));
}else{
  console.log(chalk.yellow("\nThe high score is",score));
}




