class Game {
  constructor(background, player) {
    this.background = background;
    this.player = player;
    this.obstacles = [];
    this.frames = 0;
    this.score = 0;
    this.animationId;
  }

  start = () => {
    this.updateGame();
  };

  updateGame = () => {
    this.clear();

    this.background.updatePosition();
    this.background.draw();

    this.player.updatePosition();
    this.player.draw();

    this.updateObstacles();

    this.updateScore();

    this.animationId = requestAnimationFrame(this.updateGame);

    this.checkGameOver();
  };

  updateObstacles = () => {
    this.frames++;

    this.obstacles.forEach((obs) => {
      obs.updatePosition();
      obs.draw();
    });

    /*for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].updatePosition();
      this.obstacles[i].draw();
    } */

    if (this.frames % 120 === 0) {
      const originY = 0;

      const minX = 50;
      const maxX = 100;
      const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

      const minWidth = 50;
      const maxWidth = 240;
      const randomWidth =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

      const obstacle = new Obstacle(randomX, originY, randomWidth, 20);

      this.obstacles.push(obstacle);

      this.score++;
    }
  };

  checkGameOver = () => {
    const crashed = this.obstacles.some((obstacle) => {
      return this.player.crashWith(obstacle);
    });

    if (crashed) {
      //crashSound.play();

      cancelAnimationFrame(this.animationId);

      this.gameOver();
    }
  };

  updateScore() {
    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${this.score}`, 80, 40);
  }

  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.font = "60px Verdana";
    ctx.fillText("Game Over!", canvas.width / 6, 200);

    ctx.font = "30px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(`Your Final Score: ${this.score}`, canvas.width / 6, 400);
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
