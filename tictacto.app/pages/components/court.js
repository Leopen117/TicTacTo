import { Square } from "./square.js";

const Court = ({ activePlayer, setActivePlayer }) => {
  return (
    <div className="courtContainer">
      <div className="court">
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
      <div className="court">
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
      <div className="court">
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
    </div>
  );
};

export { Court };
