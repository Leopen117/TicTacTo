import React, { useState } from "react";

const CurrentPlayer = () => {
  const [activePlayer, setActivePlayer] = useState("white");
  function startGame() {
    setActivePlayer("aqua");
    let playerOneInput = document.getElementById("playerOneInput");
    let playerTwoInput = document.getElementById("playerTwoInput");
    playerOneInput.setAttribute("readOnly", "true");
    playerTwoInput.setAttribute("readOnly", "true");
  }

  return (
    <div className="player">
      <div className="playerOne">
        <label for="playerOneInput">Ready Player One</label>
        <input
          id="playerOneInput"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
          style={{ backgroundColor: activePlayer }}
        ></input>
      </div>

      <div className="playerTwo">
        <label for="playerTwoInput">Ready Player Two</label>
        <input
          id="playerTwoInput"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
        ></input>
      </div>
      <button className="startButton" onClick={startGame}>
        Start the Game!
      </button>
    </div>
  );
};

export { CurrentPlayer };
