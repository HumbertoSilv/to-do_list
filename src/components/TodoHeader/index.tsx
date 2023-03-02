import styles from "./TodoHeader.module.css";

export const TodoHeader = () => {
  return (
    <header className={styles.header}>
      <p>Tarefas criadas <span>0</span></p>
      <p>Concluídas <span>0</span></p>
    </header>
  )
}