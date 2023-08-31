import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'
import Todo from './assets/direct-hit.png'
import Done from './assets/check-mark-button.png'
import Doing from './assets/glowing-star.png'

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks)

 const App = () =>  {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  
  useEffect(() => {
 localStorage.setItem("tasks",JSON.stringify(tasks))
}, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }
  
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To Do" icon={Todo} status="todo" tasks={tasks}
        handleDelete = {handleDelete} />
        <TaskColumn title="Doing" icon={Doing} status="doing" tasks={tasks}
        handleDelete = {handleDelete}/>
        <TaskColumn title="Done" icon={Done} status="done" tasks={tasks}
        handleDelete = {handleDelete} />
      </main>

    </div>
  )
}

export default App

