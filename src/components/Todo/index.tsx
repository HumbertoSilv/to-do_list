import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";
import { useEffect, useState } from "react";
import { TodoClass } from "../../application/models/Todo";

interface ITodo {
  todo: TodoClass
  onCompleteTodo: (todoId: string) => void
}

export const Todo = ({ todo, onCompleteTodo }: ITodo) => {
  const [check, setCheck] = useState(todo.done)

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked)
    onCompleteTodo(todo.id)
  }

  return (
    <div className={check ? `${styles.done} ${styles.todo}` : styles.todo}>
      <input 
        type="checkbox" 
        id={todo.id} 
        checked={check}
        onChange={handleChecked}
      />
      <label  htmlFor={todo.id}>
        {todo.content}
      </label>
      <button
        onClick={() => { }}
        title="Delete todo"
      >
        <Trash size={25} />
      </button>
    </div>
  )
}