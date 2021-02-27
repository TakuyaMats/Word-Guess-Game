// make a timer that counting from 10 - 0
// it click it to 0 - shows a prompt on the screen saying "play again?"
// Fernando works on the top 2, [Timer & clicker prompt]
// _ _ _ _ _ : Hidden Word Function
// Takuya works on Hidden Word Function
// Win & Lose Counter, It was work with the Hidden Word Function
// Mina works on Win & Lose Counter
// Start button last function to communicate with the other functions. 

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
