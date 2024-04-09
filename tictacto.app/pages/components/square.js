const Square = ({ picked, label }) => {
  return (
    <div className="squareConatiner">
      <button className="square" onClick={picked}>
        <h1 className="squareText">{label}</h1>
      </button>
    </div>
  );
};

export { Square };
