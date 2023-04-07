import styles from "./TodoHeader.module.css";

interface ITodoHeader {
  registeredTodo: number;
  completedTodo: number;
}

export const TodoHeader = ({registeredTodo, completedTodo}: ITodoHeader) => {
  return (
    <header className={styles.header}>
      <p>Tarefas criadas <span>{registeredTodo}</span></p>
      <p>Concluídas <span>{completedTodo}</span></p>
    </header>
  )
}