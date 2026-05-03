import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);


  function handleSubmit() {
    if (value.trim() === "") return
    else
    setTasks(currentTasks=> {

      return [...currentTasks, {taskName: value.trim(), id: crypto.randomUUID()}]
  })
   setValue("")
  }

function handleDelete(id) {
  setTasks(currentTasks=>currentTasks.filter(task=>task.id!==id))
}


  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={value} onChange={e=> setValue(e.target.value)}/>
        <div>
          <button onClick={()=> handleSubmit()}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(task => {
        return <li key={task.id}>
          <span>{task.taskName}</span>
          <button onClick={()=>handleDelete(task.id)}>Delete</button>
        </li>
        })}
      </ul>
    </div>
  );
}
