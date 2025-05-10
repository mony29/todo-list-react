import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(name) {
    console.log("You delete item :", name);
    console.log(
      "Todos:",
      todos.filter((todo) => todo !== name)
    );
    setTodos(todos.filter((todo) => todo !== name));
  }

  function handleUpdate(name) {
    console.log("Clicked update item:", name);
    // try java-script play ground first if not sure
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const isUpdated = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleUpdate(item.name)} className={isUpdated}>
          {" "}
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.btnDelete}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
