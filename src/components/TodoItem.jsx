function TodoItem({ item, allTodos, setAllTodos }) {
  console.log(item, "item");

  function handleDelete(id) {
    let updatedTodos = allTodos.filter((todo) => {
      return todo.id !== id;
    });
    setAllTodos([...updatedTodos]);
  }

  function handleToggle(id) {
    let updatedTodos = allTodos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
        return item;
      }
      return item;
    });

    setAllTodos([...updatedTodos]);
  }

  return (
    <div>
      <div className="todoItem__singleTodoItem">
        <div className="todoItem__singleTodoItemTitle">
          <p>{item.title}</p>
        </div>{" "}
        <div className="todoItem__statusAndToggle">
          <div>
            <p>{item.status ? "Completed" : "Not Completed"}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handleToggle(item.id);
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              <span role="img">🗑️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
