const resultBox = document.querySelector(".result-box");

const btnIncreasement = document.querySelector(`.btnincreasement`);

const btnDecreasement = document.querySelector(`.btndecreasement`);

const btnReset = document.querySelector(`.btnreset`);

let counter = 0;

function updateCounterDisplay() {
  resultBox.textContent = counter;
  // add colour
  if (counter === 0) {
    resultBox.style.backgroundColor = "red";
  } else {
    resultBox.style.backgroundColor = "green";
  }
}
// increasement function
btnIncreasement.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
});

// discreasement function
btnDecreasement.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateCounterDisplay();
  }
});
updateCounterDisplay();

// reset button
btnReset.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
});
