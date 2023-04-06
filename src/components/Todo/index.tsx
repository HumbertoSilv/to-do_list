import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";
import { useState } from "react";

export const Todo = ({ content }: { content: string}) => {
  const [check, setCheck] = useState(false)

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setCheck(e.target.checked)
  }

  return (
    <div className={check ? `${styles.done} ${styles.todo}` : styles.todo}>
      <input 
        type="checkbox" 
        id={content} 
        value={0}
        checked={check}
        onChange={handleChecked}
      />
      <label  htmlFor={content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illo eligendi nesciunt aut libero. Dolor dolorum velit ea autem maxime sapiente ad quae quia, officiis incidunt expedita fugiat pariatur sit!
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