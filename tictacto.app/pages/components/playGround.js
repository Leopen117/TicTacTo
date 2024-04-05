import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";
import { useState } from "react";

const Playground = () => {
  const [activePlayer, setActivePlayer] = useState(0);

  return (
    <div className="container">
      <CurrentPlayer
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      ></CurrentPlayer>
      <Court
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
      ></Court>
      <PlaysCache></PlaysCache>
    </div>
  );
};

export { Playground };
