import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";
import { useEffect, useState } from "react";
import { TodoClass } from "../../application/models/Todo";

interface ITodo {
  todo: TodoClass
  onCompleteTodo: (todoId: string) => void
  onDeleteTodo: (todoId: string) => void
}

export const Todo = ({ todo, onCompleteTodo, onDeleteTodo }: ITodo) => {
  const [check, setCheck] = useState(todo.done)  

  const handleChecked = () => {
    onCompleteTodo(todo.id)
  }

  const handleDelete = () => {
    onDeleteTodo(todo.id)
  }

   useEffect(() => {
    setCheck(todo.done)
   }, [todo.done])

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
        onClick={handleDelete}
        title="Delete todo"
      >
        <Trash size={25} />
      </button>
    </div>
  )
}