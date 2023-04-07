import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TodoHeader } from "./components/TodoHeader";
import styles from "./App.module.css";
import "./global.css";
import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";
import clipBoard from "./assets/Clipboard.svg";
import { TodoClass } from "./application/models/Todo";


export const App = () => {
  const [todo, setTodo] = useState<Array<TodoClass>>(JSON.parse(localStorage.getItem("@Todo:environment") || ''))
  const [completedTodo, setCompletedTodo] = useState<number>(0)
  const [registeredTodo, setRegisteredTodo] = useState<number>(0)  

  const createTodo = (newTodo: TodoClass) => {    
    const alreadyExists = todo.filter((todo) => todo.content === newTodo.content)    
    if (alreadyExists.length) {
      return alert("Todo already exists!")
    }
    setTodo([...todo, newTodo])
  }

  const completeTodo = (todoId: string) => {    
    todo.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done
      }
    })

    const completed = todo.filter((todo) => todo.done)    
    setCompletedTodo(completed.length)    
  }

  const deleteTodo = (todoId: string) => {
    const newTodoArray = todo.filter((todo) => todo.id !== todoId)
    setTodo(newTodoArray)
  }

  useEffect(() => {    
    setRegisteredTodo(todo.length)
    setCompletedTodo(todo.filter((todo) => todo.done).length)

    localStorage.setItem("@Todo:environment", JSON.stringify(todo))
  }, [todo, completedTodo, registeredTodo])

  return (
    <div>
      <Header />
      <Input onCreateTodo={createTodo}/>
      <main className={styles.main}>
        <TodoHeader 
          registeredTodo={registeredTodo}
          completedTodo={completedTodo}
        />
        <div className={styles.todoContainer}>
          {todo.length ?
            todo.map((todo, index) => {
              return (
                <Todo
                  todo={todo}
                  onCompleteTodo={completeTodo}
                  onDeleteTodo={deleteTodo}
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
