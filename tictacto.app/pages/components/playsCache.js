import { ReturnButton } from "./returnButton";

const PlaysCache = ({ playCache }) => {
  return (
    <div>
      <label for="playsList">Past plays:</label>
      <ol id="playsList">
        {playCache.map((turn) => (
          <li key={turn.id}>
            <ReturnButton id={turn.id}></ReturnButton>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { PlaysCache };
