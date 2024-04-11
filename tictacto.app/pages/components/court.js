import { Square } from "./square.js";

const Court = ({
  activePlayer,
  setActivePlayer,
  playHistory,
  setPlayHistory,
  courtState,
  setCourtState,
}) => {
  let currentTurn = [...courtState];
  // set a "X" or "O" inside the picked Square
  function picked(currentSquare) {
    if (currentTurn[currentSquare] === "") {
      function pick(p, s) {
        setActivePlayer(p);
        currentTurn[currentSquare] = s;
        currentTurn[0] = p == 2 ? 1 : 2;
        setCourtState(currentTurn);
        setPlayHistory([...playHistory, currentTurn]);
      }
      switch (activePlayer) {
        case 1:
          pick(2, "X");
          andTheWinnerIs("X");
          break;
        case 2:
          pick(1, "O");
          andTheWinnerIs("O");
          break;
        default:
          alert("At first start the game!");
          break;
      }
    } else {
      alert("It is already picked!");
    }
  }

  // Checking if there is a Winner
  function andTheWinnerIs(s) {
    if ((currentTurn[1] == s) & (currentTurn[2] == s) & (currentTurn[3] == s)) {
      addColorToWinnerSquares(0, 1, 2);
    } else if (
      (currentTurn[4] == s) &
      (currentTurn[5] == s) &
      (currentTurn[6] == s)
    ) {
      addColorToWinnerSquares(3, 4, 5);
    } else if (
      (currentTurn[7] == s) &
      (currentTurn[8] == s) &
      (currentTurn[9] == s)
    ) {
      addColorToWinnerSquares(6, 7, 8);
    } else if (
      (currentTurn[1] == s) &
      (currentTurn[4] == s) &
      (currentTurn[7] == s)
    ) {
      addColorToWinnerSquares(0, 3, 6);
    } else if (
      (currentTurn[2] == s) &
      (currentTurn[5] == s) &
      (currentTurn[8] == s)
    ) {
      addColorToWinnerSquares(1, 4, 7);
    } else if (
      (currentTurn[3] == s) &
      (currentTurn[6] == s) &
      (currentTurn[9] == s)
    ) {
      addColorToWinnerSquares(2, 5, 8);
    } else if (
      (currentTurn[1] == s) &
      (currentTurn[5] == s) &
      (currentTurn[9] == s)
    ) {
      addColorToWinnerSquares(0, 4, 8);
    } else if (
      (currentTurn[3] == s) &
      (currentTurn[5] == s) &
      (currentTurn[7] == s)
    ) {
      addColorToWinnerSquares(2, 4, 6);
    }
  }
  function addColorToWinnerSquares(first, sec, third) {
    const squareArray = document.getElementsByClassName("square");
    squareArray[first].style.backgroundColor = "red";
    squareArray[sec].style.backgroundColor = "red";
    squareArray[third].style.backgroundColor = "red";
    for (var i = 0; i < squareArray.length; i++) {
      squareArray[i].setAttribute("disabled", "true");
    }
  }

  return (
    <div className="courtContainer">
      <div className="court">
        <Square picked={() => picked(1)} label={courtState[1]}></Square>
        <Square picked={() => picked(2)} label={courtState[2]}></Square>
        <Square picked={() => picked(3)} label={courtState[3]}></Square>
      </div>
      <div className="court">
        <Square picked={() => picked(4)} label={courtState[4]}></Square>
        <Square picked={() => picked(5)} label={courtState[5]}></Square>
        <Square picked={() => picked(6)} label={courtState[6]}></Square>
      </div>
      <div className="court">
        <Square picked={() => picked(7)} label={courtState[7]}></Square>
        <Square picked={() => picked(8)} label={courtState[8]}></Square>
        <Square picked={() => picked(9)} label={courtState[9]}></Square>
      </div>
    </div>
  );
};

export { Court };
