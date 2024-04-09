import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const initialPlayCache = [{ id: 0, value: [0, 0, 0, 0, 0, 0, 0, 0, 0] }];
  let squareId = 0;
  const [playCache, setPlayCache] = useState(initialPlayCache);

  return (
    <div className="container">
      <CurrentPlayer
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      ></CurrentPlayer>
      <Court
        squareId={squareId}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        playCache={playCache}
        setPlayCache={setPlayCache}
      ></Court>
      <PlaysCache squareId={squareId} playCache={playCache}></PlaysCache>
    </div>
  );
};

export { Playground };
