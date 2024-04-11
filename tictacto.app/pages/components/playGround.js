import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const initialCache = ["2", "", "", "", "", "", "", "", "", ""];
  const [courtState, setCourtState] = useState(initialCache);
  const [playHistory, setPlayHistory] = useState([[...courtState]]);

  function returnToTurn(id) {
    setCourtState(playHistory[id]);
    setPlayHistory(playHistory.slice(0, id + 1));
    setActivePlayer(playHistory[id][0] == 1 ? 2 : 1);
    resetTheSquares();
  }
  function resetTheSquares() {
    const squareArray = document.getElementsByClassName("square");
    for (var i = 0; i < squareArray.length; i++) {
      squareArray[i].removeAttribute("disabled");
      squareArray[i].style.backgroundColor = "white";
    }
  }

  return (
    <div className="container">
      <CurrentPlayer
        resetTheSquares={resetTheSquares}
        returnToTurn={returnToTurn}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      ></CurrentPlayer>
      <Court
        courtState={courtState}
        setCourtState={setCourtState}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        playHistory={playHistory}
        setPlayHistory={setPlayHistory}
      ></Court>
      <PlaysCache
        returnToTurn={returnToTurn}
        setActivePlayer={setActivePlayer}
        setPlayHistory={setPlayHistory}
        playHistory={playHistory}
        setCourtState={setCourtState}
      ></PlaysCache>
    </div>
  );
};

export { Playground };
