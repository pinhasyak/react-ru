import * as ReactDOM from "react-dom";
import * as React from "react";

function RandomeNumber() {
  const [randomNumber, generateRandomNumber] = React.useState(100);
  const onButtonClick = () => {
    generateRandomNumber(Math.random());
  };
  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={onButtonClick}>Generate new rendome number</button>
    </div>
  );
}

export default RandomeNumber;
