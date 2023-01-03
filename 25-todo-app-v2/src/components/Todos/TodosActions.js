import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
function TodosActions({ deleteComletedTodos, copletedTodosCount }) {
  console.log(`copletedTodosCount: ${!!copletedTodosCount}`);
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        disabled={!!copletedTodosCount ? false : true}
      >
        <RiDeleteBin2Line onClick={() => deleteComletedTodos()} />
      </Button>
    </>
  );
}

export default TodosActions;
