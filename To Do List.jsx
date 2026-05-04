//https://www.greatfrontend.com/questions/user-interface/todo-list
import {useState } from "react"

export default function App() {
  const [val, setVal] = useState("")
  const [tasks, setTasks] = useState([])

  function handleClick() {
    if(val==="")
    return
    let data=val.trim()

    setTasks(currentTasks=> {
      return [...currentTasks, {name: data, id: crypto.randomUUID()}]
    })

    setVal("")

  }

  function handleDelete(id)
  {
    setTasks(currentTasks=> { return currentTasks.filter(currentTask => {if(currentTask.id!==id) return currentTask
    else
    return})
    })
  }

  console.log(tasks)


  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={val} onChange={e=> setVal(e.target.value)} />
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      <ul>
      {tasks.map(task=> {
        return <li key={task.id}>
          <span>{task.name}</span>
          <button onClick={()=> handleDelete(task.id)}>Delete</button>
        </li>
      })}
        
      </ul>
    </div>
  );
}


