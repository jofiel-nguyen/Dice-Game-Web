document.addEventListener("DOMContentLoaded", function () {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
  
    const diceImages = [
      "./images/dice1.png",
      "./images/dice2.png",
      "./images/dice3.png",
      "./images/dice4.png",
      "./images/dice5.png",
      "./images/dice6.png",
    ];
  
    function getRandomDiceImage() {
      // Generate a random index to select a random image from the diceImages array
      const randomIndex = Math.floor(Math.random() * diceImages.length);
  
      return diceImages[randomIndex];
    }
  
    img1.addEventListener("click", function () {
      img1.src = getRandomDiceImage();
    });
  
    img2.addEventListener("click", function () {
      img2.src = getRandomDiceImage();
    });
  });
  