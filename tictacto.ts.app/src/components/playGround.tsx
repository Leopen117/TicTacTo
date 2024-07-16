import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState<number>(0);
  const initialCache: string[] = ["2", "", "", "", "", "", "", "", "", ""];
  const [courtState, setCourtState] = useState<string[]>(initialCache);
  const [playHistory, setPlayHistory] = useState<string[][]>([[...courtState]]);

  function returnToTurn(id: number): void {
    setCourtState(playHistory[id]);
    setPlayHistory(playHistory.slice(0, id + 1));
    setActivePlayer(playHistory[id][0] == "1" ? 2 : 1);
    resetTheSquares();
  }
  function resetTheSquares() {
    const squareArray = Array.from(document.getElementsByClassName("square") as HTMLCollectionOf<HTMLElement>);;
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
        playHistory={playHistory}
      ></PlaysCache>
    </div>
  );
};

export { Playground };
