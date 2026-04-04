import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Task from "./Task";

function App() {
  let [tasks, setTasks] = useState([
    {
      text: "Задача 1",
      done: false,
    },
    {
      text: "Задача 2",
      done: false,
    },
    {
      text: "Задача 3",
      done: false,
    },
  ]);
  let addTask = (text) => {
    let newTask = [...tasks, { text }];
    setTasks(newTask);
  };
  let deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };
  return (
    <div className="App">
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
        ))}
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
