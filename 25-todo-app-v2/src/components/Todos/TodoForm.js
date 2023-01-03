import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles.todoFormContainer}>
      <input
        placeholder="Enter new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <Button type="submit" title="Submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
