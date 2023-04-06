import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoHeader } from "./components/TodoHeader";
import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";
import { Todo } from "./components/Todo";
import clipBoard from "./assets/Clipboard.svg";

export const App = () => {
  const [todo, setTodo] = useState(["0", "1", "2"])

  return (
    <div>
      <Header />
      <Input />
      <main className={styles.main}>
        <TodoHeader />
        <div className={styles.todoContainer}>
          {todo.length ?
            todo.map((todo, index) => {
              return (
                <Todo
                  content={todo}
                  key={index}
                />
              );
            }) :
            (<div className={styles.clipboard}>
              <img src={clipBoard} alt="ClipBoard image" />
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>)
          }
        </div>
      </main>
    </div>
  )
}
