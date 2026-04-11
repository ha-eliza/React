import { useState, useEffect } from "react";

function Counter() {
  let [cnt, setCnt] = useState(0);
  function increment() {
    setCnt(cnt + 1);
  }
  let decrement = () => setCnt(cnt - 1);
  useEffect(() => {

  }, [cnt])
  return (
    <>
      <button onClick={() => setCnt(cnt - 2)}>--</button>
      <button onClick={decrement}>-</button>
      <span> {cnt} </span>
      <button onClick={increment}>+</button>
      <button onClick={() => setCnt(cnt + 2)}>++</button>
    </>
  );
}
export default Counter;
