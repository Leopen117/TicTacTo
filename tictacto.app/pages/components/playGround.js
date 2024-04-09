import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const initialCache = ["", "", "", "", "", "", "", "", ""];
  const [courtState, setCourtState] = useState(initialCache);
  const [playCache, setPlayCache] = useState([[...courtState]]);
  // console.log("plaCache: ", playCache);
  // console.log("courtState: ", courtState);

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
        playCache={playCache}
        setPlayCache={setPlayCache}
      ></Court>
      {/* <PlaysCache countTurn={countTurn} playCache={playCache}></PlaysCache> */}
    </div>
  );
};

export { Playground };
