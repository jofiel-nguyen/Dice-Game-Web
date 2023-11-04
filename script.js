document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const resultText = document.querySelector("h1"); // Assuming h1 element is directly inside the HTML body
  
  const diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
  ];

  function getRandomDiceImage() {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
  }

  img1.addEventListener("click", function () {
    img1.src = getRandomDiceImage();
    checkWinner();
  });

  img2.addEventListener("click", function () {
    img2.src = getRandomDiceImage();
    checkWinner();
  });

  function checkWinner() {
    const value1 = parseInt(img1.src.split("dice")[1].charAt(0));
    const value2 = parseInt(img2.src.split("dice")[1].charAt(0));
    
    if (value1 > value2) {
      resultText.textContent = "Player 1 wins!";
    } else if (value2 > value1) {
      resultText.textContent = "Player 2 wins!";
    } else {
      resultText.textContent = "It's a tie!";
    }
  }
});
