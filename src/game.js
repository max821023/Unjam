import Board from "./board";
import Piece from "./piece";

export default class Unjam {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.pieces = []
    this.drawBorder();
    this.createPieces();
    this.drawPieces();
    this.inputHandlers();
    this.keyboardInput();
    this.reset();
  }

  drawBorder() {
    this.ctx.beginPath();
    this.ctx.moveTo(420, 210);
    this.ctx.lineTo(420, 420);
    this.ctx.lineTo(0, 420);
    this.ctx.lineTo(0, 0);
    this.ctx.lineTo(420, 0);
    this.ctx.lineTo(420, 140);
    this.ctx.strokeStyle = "gray";
    this.ctx.stroke();
  }

  drawPieces() {
    this.startingPiece.draw();
    this.pieces.forEach(piece => piece.draw());
  }

  createPieces() {
    const startingValues = [
      [1, 1, 68, 138],
      [71, 1, 208, 68],
      [141, 71, 68, 208],
      [211, 71, 68, 138],
      [211, 211, 68, 138],
      [1, 211, 138, 68],
      [1, 281, 68, 138],
      [71, 351, 138, 68],
      [211, 351, 138, 68],
      [281, 281, 138, 68],
    ]
    this.startingPiece = new Piece(this.ctx, 1, 141, 138, 68, "red")
    this.pieces = [];
    this.pieces.push(this.startingPiece)
    startingValues.forEach((value) => {
      this.pieces.push(new Piece(this.ctx, ...value))
    })
  }

  inputHandlers() {
    this.canvas.addEventListener('click', event => {
      this.pieces.forEach(piece => {
        if (event.offsetX > piece.x && 
          event.offsetX < piece.x + piece.width &&
          event.offsetY > piece.y &&
          event.offsetY < piece.y + piece.height) {
            piece.selected = true;
            piece.update();
        } else {
          piece.selected = false;
          piece.update();
        }
      })
    })
  }

  keyboardInput() {
    document.addEventListener('keydown', event => {
      let selectedPiece = this.pieces.find(piece => piece.selected)
      if (selectedPiece.width > selectedPiece.height) {
        switch (event.key) {
          case "ArrowLeft":
            if (!this.collisionLeft(selectedPiece)) {
              selectedPiece.moveLeft();
            }
            break;
          case "ArrowRight":
            if (!this.collisionRight(selectedPiece)) {
              selectedPiece.moveRight();
              this.isWon();
            }
            break;
        }
      } else if (selectedPiece.width < selectedPiece.height) {
        switch (event.key) {
          case "ArrowUp":
            if (!this.collisionUp(selectedPiece)) {
              selectedPiece.moveUp();
            }
            break;
          case "ArrowDown":
            if (!this.collisionDown(selectedPiece)) {
              selectedPiece.moveDown();
            }
            break;
        }
      }
    })
  }

  isWon() {
    if (this.pieces[0].reachExit()) {
      let winDiv = document.getElementById("win-message");
      winDiv.innerHTML = "<p>YOU WON!</p>";
    }
  }

  collisionRight(selectedPiece) {
    let filteredPieces = this.pieces.filter(piece => !piece.selected)
    let collided = false;
    filteredPieces.forEach(piece => {
      if (selectedPiece.x + selectedPiece.width + 2 === piece.x &&
        selectedPiece.y >= piece.y &&
        selectedPiece.y <= piece.y + piece.height) {
        collided = true;
      } 
    })
    return collided;
  }

  collisionLeft(selectedPiece) {
    let filteredPieces = this.pieces.filter(piece => !piece.selected)
    let collided = false;
    filteredPieces.forEach(piece => {
      if (selectedPiece.x - 2 === piece.x + piece.width &&
        selectedPiece.y >= piece.y &&
        selectedPiece.y <= piece.y + piece.height) {
        collided = true;
      } 
    })
    return collided;
  }

  collisionUp(selectedPiece) {
    let filteredPieces = this.pieces.filter(piece => !piece.selected)
    let collided = false;
    filteredPieces.forEach(piece => {
      if (selectedPiece.y - 2 === piece.y + piece.height &&
        selectedPiece.x >= piece.x &&
        selectedPiece.x <= piece.x + piece.width) {
        collided = true;
      } 
    })
    return collided;
  }

  collisionDown(selectedPiece) {
    let filteredPieces = this.pieces.filter(piece => !piece.selected)
    let collided = false;
    filteredPieces.forEach(piece => {
      if (selectedPiece.y + selectedPiece.height + 2 === piece.y &&
        selectedPiece.x >= piece.x &&
        selectedPiece.x <= piece.x + piece.width) {
        collided = true;
      } 
    })
    return collided;
  }
  
  reset() {
    let refreshBtn = document.getElementById("refresh");
    refreshBtn.addEventListener('click', event => {
      this.ctx.clearRect(0, 0, 420, 420);
      this.drawBorder();
      this.createPieces();
      this.drawPieces();
      let winDiv = document.getElementById("win-message");
      winDiv.innerHTML = "";
    })
  }
}