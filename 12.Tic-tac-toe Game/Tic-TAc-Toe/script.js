var board = document.getElementById("board");
var cells = board.getElementsByTagName("td");
var player = "X";

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.innerHTML === "") {
      this.innerHTML = player;

      if (player === "X") {
        player = "O";
      } else {
        player = "X";
      }
    }
  });
}
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    player = "X";
});
function share() {
  // code for sharing the game
}

function like() {
  // code for liking the game
}
