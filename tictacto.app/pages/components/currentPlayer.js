const CurrentPlayer = ({ activePlayer, setActivePlayer }) => {
  function startGame() {
    const playerOneInput = document.getElementById("playerOneInput");
    const playerTwoInput = document.getElementById("playerTwoInput");
    playerOneInput.setAttribute("readOnly", "true");
    playerTwoInput.setAttribute("readOnly", "true");
    setActivePlayer(1);
  }
  return (
    <div className="player">
      <div className="playerOne">
        <label htmlFor="playerOneInput">Ready Player One</label>
        <input
          id="playerOneInput"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
          style={
            activePlayer === 1
              ? { backgroundColor: "aqua" }
              : { backgroundColor: "white" }
          }
        ></input>
      </div>

      <div className="playerTwo">
        <label htmlFor="playerTwoInput">Ready Player Two</label>
        <input
          id="playerTwoInput"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
          style={
            activePlayer === 2
              ? { backgroundColor: "aqua" }
              : { backgroundColor: "white" }
          }
        ></input>
      </div>
      <button className="startButton" onClick={startGame}>
        Start the Game!
      </button>
    </div>
  );
};

export { CurrentPlayer };
