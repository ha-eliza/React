import "./App.css";
import { useState } from "react";
// import Form from "./Form";
// import Task from "./Task";
import Counter from "./Counter";
import Text from "./Text";

function App() {
  let [tasks, setTasks] = useState([]);
  let addTask = text => {
    let newTask = [...tasks, { text }];
    setTasks(newTask);
  };
  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = !newTask[index].done
    setTasks(newTask);
  }

  let [isCounter, setCounter] = useState(false)
  return (
    <div className="App">
      {/* <div className="task-list">
        {
          console.log(tasks)
        }
        {tasks.map((task, index) => (
          <Task
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          doneTask={() => doneTask(index)}/>
        ))}
        <Form addTask={addTask} />
      </div> */}
      <button onClick={() => setCounter(!isCounter)}>Toggle Counter</button>
      <br />
      {isCounter && <Counter />}
      <Text />
    </div>
  );
}

export default App;
