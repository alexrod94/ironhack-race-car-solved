class BackgroundImage extends GameObject {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
    this.speedY = 3;
  }

  updatePosition() {
    this.y += this.speedY;
    this.y %= canvas.height;
  }

  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, this.y - canvas.height, this.width, this.height);
  }
}
