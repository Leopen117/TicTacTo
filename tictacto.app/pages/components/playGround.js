import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";
import { ReturnButton } from "./returnButton";
import { Square } from "./square";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const initialCache = ["2", "", "", "", "", "", "", "", "", ""];
  const [courtState, setCourtState] = useState(initialCache);
  const [playHistory, setPlayHistory] = useState([[...courtState]]);

  // console.log("playHistory: ", playHistory);
  // console.log("courtState: ", courtState);

  //[[X,X,X][X,X,X][X,X,X]]
  //foo[0][0]

  return (
    <div className="container">
      <CurrentPlayer
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
        setActivePlayer={setActivePlayer}
        setPlayHistory={setPlayHistory}
        playHistory={playHistory}
        setCourtState={setCourtState}
      ></PlaysCache>
    </div>
  );
};

export { Playground };
