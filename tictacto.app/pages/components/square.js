import { useState } from "react";

const Square = ({
  activePlayer,
  setActivePlayer,
  id,
  playCache,
  setPlayCache,
}) => {
  const [pickedSquare, setPickedSquare] = useState("");
  let squareValue = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  function picked() {
    if (pickedSquare === "") {
      switch (activePlayer) {
        case 1:
          setPickedSquare("X");
          setActivePlayer(2);
          squareValue[id - 1] = 1;
          setPlayCache([
            ...playCache,
            {
              id: { id },
              value: [{ squareValue }],
            },
          ]);
          break;
        case 2:
          setPickedSquare("O");
          setActivePlayer(1);
          squareValue.splice({ id } - 1, 1, "2");
          setPlayCache([
            ...playCache,
            {
              id: { id },
              value: [{ squareValue }],
            },
          ]);
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
    <div className="squareConatiner">
      <button className="square" onClick={picked}>
        <h1 className="squareText">{pickedSquare}</h1>
      </button>
    </div>
  );
};

export { Square };
