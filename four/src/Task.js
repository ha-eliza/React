import { useState } from "react";

function Task(props) {
  let { task, deleteTask } = props;

  let [done, SetDone] = useState(false);
  let isDone = () => SetDone(true);

  let taskDelete = () => {
    deleteTask(task.id);
  }

  return (
    <>
      <div className="task">
        <div style={{ textDecoration: done ? 'line-through' : 'none' }}>{task.text}</div>
        <div className="buttons">
          <button onClick={isDone}>Done</button>
          <button onClick={taskDelete}>&times;</button>
        </div>
      </div>
    </>
  );
}
export default Task;
