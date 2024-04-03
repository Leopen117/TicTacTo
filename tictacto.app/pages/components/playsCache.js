import { ReturnButton } from "./returnButton";

const PlaysCache = () => {
  return (
    <div>
      <label for="playsList">past plays:</label>
      <ol id="playsList">
        <li>
          <ReturnButton>Return to game start</ReturnButton>
        </li>
      </ol>
    </div>
  );
};

export { PlaysCache };
