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

// function to check if hiddenWord and computerWord are identical
function checkArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        } 
    }
    return true;
  }
  // function to display words photo after a win
  function PrintImage(source)
  {
      var Pagelink = "about:blank";
      var pwa = window.open(Pagelink, "_new");
      pwa.document.open();
      pwa.document.write(ImagetoPrint(source));
      pwa.document.close();
  }
  
  