function Gameboard(size) {
  this.size = size;
  this.board = [];

  // Create the gameboard
  this.createBoard = function () {
    this.board = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.board[i] = new Array(this.size).fill(null);
    }
  };

  // Render the gameboard as a square grid
  this.render = function () {
    const gameboardElement = document.getElementById("gameboard");
    gameboardElement.innerHTML = "";

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.board[i][j] || "";
        gameboardElement.appendChild(cell);
      }
    }
    gameboardElement.style.gridTemplateColumns = `repeat(${this.size}, 100px)`;
  };

  // Initialize the gameboard
  this.createBoard();
  this.render();
}

// Initialize a 3x3 gameboard by default
const defaultGameboard = new Gameboard(3);

// Event listeners for the size buttons
document.getElementById("btn3x3").addEventListener("click", function () {
  const gameboard = new Gameboard(3);
  gameboard.render();
});

document.getElementById("btn4x4").addEventListener("click", function () {
  const gameboard = new Gameboard(4);
  gameboard.render();
});

document.getElementById("btn5x5").addEventListener("click", function () {
  const gameboard = new Gameboard(5);
  gameboard.render();
});

// Event listeners for the squares
document.getElementById("cell").addEventListener("click", function () {});
