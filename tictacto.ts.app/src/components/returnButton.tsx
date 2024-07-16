const ReturnButton = ({ index, returnToTurn }: {index:number, returnToTurn: (index: number) => void}) => {
    return (
      <button onClick={() => returnToTurn(index)}>Return to turn: {index}</button>
    );
  };
  
  export { ReturnButton };
  