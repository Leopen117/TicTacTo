import { Square } from "./square.js";

const Court = ({
  activePlayer,
  setActivePlayer,
  playCache,
  setPlayCache,
  courtState,
  setCourtState,
}) => {
  // set a "X" or "O" inside the picked Square
  function picked(currentSquare) {
    let currentTurn = [...courtState];
    if (currentTurn[currentSquare - 1] === "") {
      function pick(p, s) {
        setActivePlayer(p);
        currentTurn[currentSquare - 1] = s;
        setCourtState(currentTurn);
        setPlayCache([...playCache, currentTurn]);
      }
      switch (activePlayer) {
        case 1:
          pick(2, "X");
          break;
        case 2:
          pick(1, "O");
          break;
        default:
          alert("At first start the game!");
          break;
      }
    } else {
      alert("It is already picked!");
    }
  }

  return (
    <div className="courtContainer">
      <div className="court">
        <Square picked={() => picked(1)} label={courtState[0]}></Square>
        <Square picked={() => picked(2)} label={courtState[1]}></Square>
        <Square picked={() => picked(3)} label={courtState[2]}></Square>
      </div>
      <div className="court">
        <Square picked={() => picked(4)} label={courtState[3]}></Square>
        <Square picked={() => picked(5)} label={courtState[4]}></Square>
        <Square picked={() => picked(6)} label={courtState[5]}></Square>
      </div>
      <div className="court">
        <Square picked={() => picked(7)} label={courtState[6]}></Square>
        <Square picked={() => picked(8)} label={courtState[7]}></Square>
        <Square picked={() => picked(9)} label={courtState[8]}></Square>
      </div>
    </div>
  );
};

export { Court };
