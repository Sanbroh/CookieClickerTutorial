currScore = 0;
booster = 1;

function cookieClick() {
  currScore += booster;
  document.getElementById("score").innerHTML = currScore;

  if (currScore >= 1000) {
    document.getElementById("score").innerHTML = "Good Job! You won!";
  }
}

function boosterClick() {
  if (currScore >= 10) {
    currScore -= 10;
    booster += 1;
    document.getElementById("score").innerHTML = currScore;
    document.getElementById("warning").style.display = 'none';
  } else {
    document.getElementById("warning").style.display = 'block';
  }
}

function showRules() {
  document.getElementById("rules").style.display = 'block';
}

function hideRules() {
  document.getElementById("rules").style.display = 'none';
}
