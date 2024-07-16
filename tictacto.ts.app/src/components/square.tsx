const Square = ({ picked , label }: {picked: () => void, label: string}) => {
    return (
      <div className="squareConatiner">
        <button className="square" onClick={picked}>
          <h1 className="squareText">{label}</h1>
        </button>
      </div>
    );
  };
  
  export { Square };