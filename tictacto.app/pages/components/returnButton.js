const ReturnButton = ({ index, returnToTurn }) => {
  return (
    <button onClick={() => returnToTurn(index)}>Return to turn: {index}</button>
  );
};

export { ReturnButton };
