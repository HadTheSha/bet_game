var user_bankroll = 100 ; 
var random_number = Math.floor(Math.random() * 11);

function the_game(guess,amount){
  alert("the number generated is :" + random_number)
   if (guess == random_number){
    user_bankroll += amount;
    alert("You just won $"+amount);
  } else if (guess == random_number-1 || guess == random_number+1){
    alert("Close one! No Loses");
  }
  else{
    user_bankroll -= amount
    alert("Ops! wrog guess costed you $"+ amount);
  }
}

$(document).ready(function(){
// Function to get input value.
  $('#the_button').click(function() {
    var money_value = $("#money_value").val();
    var number_value = $("#number_value").val();
    if(money_value =='' || number_value =='') {
      alert("Enter Some Text In Input Field");
    }else if ( money_value > user_bankroll ){
          alert("Opsy, you don't have that much");
    }else{
      the_game(number_value, money_value);

    }
  });

  $('#restart').click(function() {
     $("#money_value").val("");
     user_bankroll = 100 ;
     $("#number_value").val("");
     random_number = Math.floor(Math.random() * 11);
  });

});



