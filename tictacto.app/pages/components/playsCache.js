import { ReturnButton } from "./returnButton";

const PlaysCache = ({ playHistory, returnToTurn }) => {
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
