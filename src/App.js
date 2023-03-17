// import Todo from "../components/Todo";
import "./styles.css";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <div className="home__header">
        <h1>Todo App</h1>
      </div>
      <div className="home__todoMainCont">
        <TodoList />
      </div>
    </div>
  );
}
