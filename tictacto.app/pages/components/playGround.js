import { CurrentPlayer } from "./currentPlayer";
import { Court } from "./court";
import { PlaysCache } from "./playsCache";

const Playground = () => {
  return (
    <div className="container">
      <CurrentPlayer></CurrentPlayer>
      <Court></Court>
      <PlaysCache></PlaysCache>
    </div>
  );
};

export { Playground };
