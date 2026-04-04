import { useState } from "react";

function Item() {
  let [item, setItem] = useState([]);
  let addItem = () => setItem([
    ...item,
    Math.floor(Math.random() * 10) + 1
  ])
  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <br />
      {
        item.map((i,index) => (
          <div className="" key={index} style={{background: index % 2 ? "black" : "pink", color: "white"}}>
            {i}
          </div>
        ))
      }
    </>
  );
}
export default Item;
