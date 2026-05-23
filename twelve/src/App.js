import { useEffect } from "react";
import "./App.css";
import Input from "./Input";
import SingleTask from "./SingleTask";
import { tasksLoad } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(tasksLoad())
  }, [dispatch])

  return (
    <div className="App" style={{maxWidth: '764px', width: '100%', margin: '0 auto'}}>
      <div className="">
        <h1>To-Do List</h1>
        <Input />
      </div>
      <div className="wrap">
        <h2>Your tasks</h2>
        {tasks.map((task) => (
          <SingleTask key={task.id} data={task}/>
        ))}
      </div>
    </div>
  );
}

export default App;
