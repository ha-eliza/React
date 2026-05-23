import { useState } from "react"
import { taskCreate } from "./redux/action"
import { useDispatch } from "react-redux"

function Input(props) {
  const [taskInput, setTaskInput] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) => {
    e.preventDefault()
    setTaskInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(taskCreate(taskInput))
    setTaskInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskInput} onChange={handleInput}/>
      <button type="submit">Add Task</button>
    </form>
  )
}
export default Input
