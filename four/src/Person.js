import { useState } from "react";

function Person() {
  let [person, setPerson] = useState({
    firstName: 'Igor',
    lastName: 'Pavlov'
  });
  let p = person;
  let { firstName: f, lastName: l } = p;
  let rename = () => setPerson({...p, firstName: 'Sergey'})
  return (
    <>
      <p>{f} {l}</p>
      <button onClick={rename}>Rename</button>
    </>
  )
}
export default Person;
