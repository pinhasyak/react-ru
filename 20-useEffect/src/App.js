import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log("App rendering");
  console.log(todo);
  return <div className="App"></div>;
}

export default App;
