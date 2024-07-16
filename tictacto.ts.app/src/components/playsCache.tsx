import { ReturnButton } from "./returnButton";

const PlaysCache = ({ playHistory, returnToTurn } : {playHistory: string[][], returnToTurn: (index: number) => void}) => {
  return (
    <div>
      <label>Past plays:</label>
      <ol id="playsList">
        {playHistory.map((play: string[], index: number) => (
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
