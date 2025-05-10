import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  // 'slice' use to copy the list of 'todos' then apply the 'sort' function
  const sorted = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sorted.map((i) => (
        <TodoItem key={i.name} item={i} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
