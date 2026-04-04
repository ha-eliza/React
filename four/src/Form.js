import { useState } from "react";

function Form(props) {
  let [value, setValue] = useState("");
  let {addTask} = props;

  let sendSubmit = e => {
    e.preventDefault();
    addTask(value);
    setValue("");
  }

  return (
    <>
    <form onSubmit={sendSubmit}>
      <input type="text" className="input" value={value}
      onChange={e => setValue(e.target.value)}/>
    </form>
    </>
  )
}
export default Form;
