import styles from "./Input.module.css";

export const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button>Criar + </button>
    </div>
  )
}