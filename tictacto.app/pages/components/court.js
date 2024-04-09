import { Square } from "./square.js";

const Court = ({ activePlayer, setActivePlayer, playCache, setPlayCache }) => {
  return (
    <div className="courtContainer">
      <div className="court">
        <Square
          id="1"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="2"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="3"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
      <div className="court">
        <Square
          id="4"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="5"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="6"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
      <div className="court">
        <Square
          id="7"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="8"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
        <Square
          id="9"
          playCache={playCache}
          setPlayCache={setPlayCache}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        ></Square>
      </div>
    </div>
  );
};

export { Court };
