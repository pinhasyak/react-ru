import Todo from "./Todo";

function TodoList({ todos, deleteTodo, completeTodo }) {
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  );
}
export default TodoList;
