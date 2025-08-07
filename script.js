const randomNumber = Math.floor(Math.random() * 10 + 1);
const feedback = document.getElementById("feedback");
let userGuess;

//add event
document.getElementById("guessBtn").addEventListener("click", function () {
  //get value  from the input
  userGuess = parseInt(document.getElementById("guessInput").value);
  //check the guess
  guessCheck();
});

//check guess function

function guessCheck() {
  while (userGuess !== randomNumber) {
    if (userGuess < randomNumber) {
      //update ui
      feedback.textContent = "Too Low!, Try Again";
    } else if (userGuess > randomNumber) {
      feedback.textContent = "Too High!, Try again";
    }
    return;
  }
  feedback.textContent = "Bravo!, you guess the right number ";
}
