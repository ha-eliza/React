import { useState } from "react";

function Task(props) {
  let { task, deleteTask, doneTask } = props;

  return (
    <>
      <div className="task">
        <div style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</div>
        <div className="buttons">
          <button onClick={doneTask}>Done</button>
          <button onClick={deleteTask}>&times;</button>
        </div>
      </div>
    </>
  );
}
export default Task;
