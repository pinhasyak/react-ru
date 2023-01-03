import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = ["button 1", "button 2", "button 3"];
function App() {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetHidden = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <div className="fb-lik">
        <Button text={texts[0]} onClick={incrementCount} />
        <Button text={texts[1]} onClick={incrementCount} />
        <Button text={texts[2]} onClick={incrementCount} />
      </div>
      {count > 0 && <button onClick={resetHidden}>Reset</button>}
    </div>
  );
}

export default App;
