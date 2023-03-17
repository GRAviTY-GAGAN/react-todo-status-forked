import { useState } from "react";
// import TodoItem from "./components/TodoItem";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

function TodoList({ text }) {
  const [allTodos, setAllTodos] = useState([]);

  function handleAdd(text, setText) {
    let newTodo = {
      id: new Date().getTime(),
      title: text,
      status: false,
    };

    setAllTodos([...allTodos, newTodo]);
    setText("");
  }

  return (
    <div>
      <div>
        <Todo handleAdd={handleAdd} />
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        {allTodos.map((item) => {
          return (
            <TodoItem
              item={item}
              allTodos={allTodos}
              setAllTodos={setAllTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
