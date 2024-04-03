const CurrentPlayer = () => {
  return (
    <div>
      <div>
        <label for="playerOne">Ready Player One:</label>
        <input
          id="playerOne"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
        ></input>
      </div>
      <div>
        <label for="playerTwo">Ready Player Two:</label>
        <input
          id="playerTwo"
          name="player"
          required
          minLength="1"
          maxLength="10"
          size="10"
        ></input>
      </div>
    </div>
  );
};

export { CurrentPlayer };
