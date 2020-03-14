export default class Piece {
  constructor(ctx, x, y, width, height, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color || "#b8782a";
    this.selected = false;
  }

  draw() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    this.ctx.fillStyle = this.color
    if (this.selected && this.color !== "red") {
      this.ctx.fillStyle = "#8a571a";
    } else if (this.selected && this.color === "red") {
      this.ctx.fillStyle = "#c41414"
    }
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    this.draw();
  }

  moveRight() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    if (this.x + this.width + 70 < this.ctx.canvas.width) {
      this.x += 70
      this.draw();
    } else if (this.x + this.width + 70 > this.ctx.canvas.width){
      this.x = this.ctx.canvas.width - this.width - 1;
      this.draw();
    }
  }

  moveLeft() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    if (this.x - 70 > 0) {
      this.x -= 70
      this.draw();
    } else if (this.x - 70 < 0) {
      this.x = 1;
      this.draw();
    }
  }

  moveUp() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    if (this.y - 70 > 0) {
      this.y -= 70
      this.draw();
    } else if (this.y - 70 < 0) {
      this.y = 1;
      this.draw();
    }
  }

  moveDown() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
    if (this.y + this.height + 70 < this.ctx.canvas.height) {
      this.y += 70
      this.draw();
    } else if (this.y + this.height + 70 > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.height - 1;
      this.draw();
    }
  }

  reachExit() {
    if (this.color === "red" && this.x === 281) {
      return true;
    } else {
      return false;
    }
  }
}