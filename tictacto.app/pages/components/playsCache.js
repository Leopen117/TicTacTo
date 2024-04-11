import { ReturnButton } from "./returnButton";

const PlaysCache = ({
  playHistory,
  setCourtState,
  setPlayHistory,
  setActivePlayer,
}) => {
  function returnToTurn(id) {
    setCourtState(playHistory[id]);
    setPlayHistory(playHistory.slice(0, id + 1));
    setActivePlayer(playHistory[id][0] == 1 ? 2 : 1);
  }
  return (
    <div>
      <label>Past plays:</label>
      <ol id="playsList">
        {playHistory.map((play, index) => (
          <li key={index}>
            <ReturnButton
              returnToTurn={returnToTurn}
              index={index}
            ></ReturnButton>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { PlaysCache };
