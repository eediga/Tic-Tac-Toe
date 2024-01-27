function createPlayer(type) {
  //create our player objects
  const playerType = type;
  return { playerType };
}

 let isOver = false;
 function initializeGame(){ 
      const players = {
        playerX: createPlayer("x"),
        playerO: createPlayer("o"),
      };
const createGameBoard = function () {
  const board = Array(9).fill(null);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
const result = document.querySelector(".game-result")
  const checkWinner = function (piece) {
    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] &&
        board[a] === piece
      ) {
        console.log(piece + " has won!");
        board.fill(0, null, 9);
        isOver = true;
       
        if(piece === "x"){
            result.textContent = "Tiger Is King Of The Jungle"
            return
        } else if(piece === "o"){
            result.textContent = "Gorilla Is King Of The Jungle"
            return
      } 
        return
    }
        });
      if(!board.includes(null) && !isOver){
        result.textContent = "Draw!"
        console.log("Draw!")
        board.fill(0,null,9)
        isOver = true
      }
      return;
  };
  return { board, checkWinner, result};
};

const gameFlow = function () {
    const {board, checkWinner, result} = createGameBoard()
  const cells = document.querySelectorAll(".cell");
  const restart = document.getElementById("restart")
  const commentary = document.querySelector(".game-commentary")
  let currentPlayer = players.playerX;
  const startGame = () => {

    cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        const id = event.target.id;
        if (
          currentPlayer === players.playerX &&
          !isOver && board[id - 1] == null
        ) {
          board[id - 1] = "x";
          cell.style.backgroundImage = "url(assets/tiger.png)";
          currentPlayer = players.playerO;
          checkWinner("x");
          console.log(board);
          console.log(isOver);
          commentary.textContent = "";
        } else if (
          currentPlayer === players.playerO &&
          !isOver && board[id - 1] == null
        ) {
          board[id - 1] = "o";
          cell.style.backgroundImage = "url(assets/gorilla.png)";
          currentPlayer = players.playerX;
          checkWinner("o");
          console.log(board);
          console.log(isOver)
          commentary.textContent = "";
        } else if (isOver) {
            restartGame()
        } else{
            commentary.textContent = "You Can't Do That!"
        }
      });
    });
      const restartGame = function () {
        result.textContent = ""
        board.fill(null);
        currentPlayer = players.playerX;
        isOver = false;
        commentary.textContent = ""
        cells.forEach((cell) => {
          cell.style.backgroundImage = "";
        });
        restart.addEventListener("click", restartGame)
      };
      return restartGame()
  };
  return startGame();
};


gameFlow();
 }

 initializeGame()

 console.log(window.innerWidth)