import styles from "./footer.module.css";

export default function Footer({ completedTodo, totalTodo }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed Task: {completedTodo}/{totalTodo}
      </span>
    </div>
  );
}
