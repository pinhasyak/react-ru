import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      isComleted: false,
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const comleteTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isComleted = !todo.isComleted;
        }
        return todo;
      })
    );
  };
  const deleteComletedTodosHendler = () => {
    setTodos(todos.filter((todo) => todo.isComleted === false));
  };
  const copletedTodosCount = todos.filter((todo) => todo.isComleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          deleteComletedTodos={deleteComletedTodosHendler}
          copletedTodosCount={copletedTodosCount}
        />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          completeTodo={comleteTodoHandler}
        />
      ) : (
        <h2>Todo lis is empty</h2>
      )}
    </div>
  );
}

export default App;
