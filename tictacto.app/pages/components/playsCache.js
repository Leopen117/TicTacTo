import { ReturnButton } from "./returnButton";

const PlaysCache = ({ playCache, countTurn }) => {
  return (
    <div>
      <label>Past plays:</label>
      <ol id="playsList">
        {playCache.map((turn) => (
          <li key={a}>
            <ReturnButton></ReturnButton>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { PlaysCache };
