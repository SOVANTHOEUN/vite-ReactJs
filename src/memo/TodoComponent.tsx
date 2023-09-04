import { useState } from "react";
import Todos from "./Todos";

const TodoComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount(count + 1);
    // setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button style={{ marginLeft: "10px" }} onClick={increment}>
          +
        </button>
      </div>
    </>
  );
};

export default TodoComponent;
