class Obstacle extends GameObject {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speedY = 3;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
