const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// const crashSound = new Audio();
// crashSound.src = "./sounds/car-crash.wav";
// crashSound.volume = 0.1;

function startGame() {
  // Instanciando todas as imagens
  const bgImg = new Image();
  bgImg.src = "./images/road.png";

  const carImg = new Image();
  carImg.src = "./images/car.png";

  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width,
    canvas.height,
    bgImg
  );
  const player = new GameObject(250 - 25, canvas.height - 120, 50, 100, carImg);

  const game = new Game(backgroundImage, player);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.speedX = -3;
    } else if (event.code === "ArrowRight") {
      game.player.speedX = 3;
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
  });
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
