import { useState } from "react";
import styles from "./Input.module.css";
import { TodoClass } from "../../application/models/Todo";
import { v4 as uuiv4 } from "uuid";

interface IInputParams {
  onCreateTodo: (newTodo: TodoClass) => void
}

export const Input = ({ onCreateTodo }: IInputParams) => {
  const [input, setInput] = useState<string>('')

  const handleCreateTodo = () => {
    const newTodo = new TodoClass({
      id: uuiv4(),
      content: input,
    })

    onCreateTodo(newTodo)
    setInput('')
  }
  return (
    <div className={styles.inputContainer}>
      <textarea
        value={input}
        placeholder="Adicione uma nova tarefa"
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={!input}
        onClick={handleCreateTodo}
      >Criar + </button>
    </div>
  )
}