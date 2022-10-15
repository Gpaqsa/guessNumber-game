'use strict'
const mainTag = document.querySelector('main');

// text
const message = document.getElementById("correctNumber");
const maxScore = document.getElementById("max-score");
const highScore = document.getElementById('high-score');

// buttons
const againButton = document.getElementById("againButton");
const checkButton = document.getElementById("checkButton");

// assing 13
const assing = document.getElementById("assing");

//  add function
const displayMessage = function(messages){
  message.textContent = messages;
}


// variables
let secretNumber = Math.trunc(Math.random() *20 ) +1;
let userScore = 10;
let userHighScore = 0;


// check button' s logic
checkButton.addEventListener('click', () => {

  // input number
  const guessNumber = Number(document.getElementById("guessNumber").value);

  // when guesNumbe is empty;
  if (!guessNumber) {
      displayMessage("⛔ No number");    // message.textContent = '⛔ No number';
      // When guessNumbe is correct
  } else if (guessNumber === secretNumber) {
      assing.textContent = guessNumber;
      displayMessage("🎉 Correct Number !");          // message.textContent = "🎉 Correct Number !"; 
      mainTag.style.backgroundColor = '#60b147';
      
      // highScore logic
    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }

    // When guessNumber is wrong!
  } else if (guessNumber !== secretNumber) {
    if (userScore > 1) {
      displayMessage(guessNumber > secretNumber ? "📈 To high!" : "📉 To Low!"); // message.textContent = guessNumber > secretNumber ? " 📈 To high!" : "📉 To Low!";
      userScore--;
      maxScore.textContent = userScore;
    } else {
      displayMessage("❌ You lose the game!");  // message.textContent = "❌ You lose the game!";
      maxScore.textContent = 0;
      mainTag.style.backgroundColor = '#E60000';
    }

  }
    // When guessNumber is too high
  //   } else if (guessNumber > secretNumber) {
  //   if (userScore > 1) {
  //     message.textContent = " 📈 To high!";
  //     userScore--;
  //     maxScore.textContent = userScore;
  //   } else {
  //     message.textContent = "❌ You lose the game!";
  //     mainTag.style.backgroundColor = '#E60000';

  //   }

    //When guessNumber is too high;
  // } else if (guessNumber < secretNumber) {
  //   if (userScore > 1) {
  //     message.textContent = "📉 To Low!";
  //     userScore--;
  //     maxScore.textContent = userScore;
  //   } else {
  //     message.textContent = "❌ You lose the game!";
  //     mainTag.style.backgroundColor = '#E60000';
  //   }
  // }
  
});



againButton.addEventListener('click', ()=>{
  userScore = 10;
  secretNumber = Math.trunc(Math.random() *20 ) +1;
  displayMessage(" Start guessing...");        // message.textContent = " Start guessing...";
  maxScore.textContent = userScore;
  assing.textContent = '?'
  guessNumber.value = "";

  mainTag.style.backgroundColor = 'rgb(41, 41, 41)';

});


