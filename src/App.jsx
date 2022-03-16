import { useEffect, useState } from 'react'

import { Form } from './components/form'

function App() {
  const [tasks, setTasks] = useState([
    {name: 'Pagar Boleto', completed:false},
    {name: 'Lavar Carro', completed:false},
    {name: 'Fazer trabalho', completed:false},
  ])

  const handleSubmit = (newTask) => {
    setTasks([... tasks, newTask])
  }

  const remove = (taskName) => {
    const tasksUpdate = tasks.filter(task => task.name != taskName)
    setTasks(tasksUpdate)
  }

  const completed = (taskIndex) => {
    const tasksUpdate = [...tasks]
    tasksUpdate[taskIndex].completed = !tasksUpdate[taskIndex].completed
    setTasks(tasksUpdate)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <ul>
        {tasks.map( (task, index) => <li key={task.name}>{task.name} <button onClick={() => remove(task.name)}>Remover</button> <button onClick={() => completed(index)}>{task.completed ? 'desmarcar' : 'completar'}</button></li>)}
      </ul>
    </div>
  )
}

export default App
