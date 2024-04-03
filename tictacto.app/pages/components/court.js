import { Square } from "./square.js";

const Court = () => {
  return (
    <div id="courtContainer">
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
};

export { Court };
