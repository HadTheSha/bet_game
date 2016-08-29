var colors = require('colors');
var prompt = require('prompt-sync')();
var user_bankroll = 100 ; 
var random_number = Math.floor(Math.random() * 11);

function the_game(guess,amount){
  console.log("the number generated is :" + random_number)
   if (guess == random_number){
    user_bankroll += amount;
    console.log("You just won $"+amount.green);
  } else if (guess == random_number-1 || guess == random_number+1){
    console.log("Close one! No Loses".yellow);
  }
  else{
    user_bankroll -= amount
    console.log("Ops! wrog guess costed you $".red+ amount.red);
  }
}

var bet_answer = prompt('How much you would like to bet on? ');
var guessed_answer=prompt('What is your guess? ');
the_game(guessed_answer, bet_answer)