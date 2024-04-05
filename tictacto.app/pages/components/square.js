import { useState } from "react";

const Square = ({ activePlayer, setActivePlayer }) => {
  const [pickedSquare, setPickedSquare] = useState("");
  function picked() {
    console.log("activePlayer", activePlayer);
    if (pickedSquare === "") {
      switch (activePlayer) {
        case 1:
          setPickedSquare("X");
          setActivePlayer(2);
          break;
        case 2:
          setPickedSquare("O");
          setActivePlayer(1);
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
