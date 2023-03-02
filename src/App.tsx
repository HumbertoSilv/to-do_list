import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoHeader } from "./components/TodoHeader";
import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";
import { Todo } from "./components/Todo";
import clipBoard from "./assets/Clipboard.svg";

export const App = () => {
  const [todos, setTodos] = useState([1])

  return (
    <div>
      <Header />
      <Input />
      <main className={styles.main}>
        <TodoHeader />
        <div className={styles.todoContainer}>
          {todos.length ?
            (<div className={styles.clipboard}>
              <img src={clipBoard} alt="ClipBoard image" />
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>) : (<Todo />)
          }
        </div>
      </main>
    </div>
  )
}
