import { useState } from "react"

function EventsExample() {
  const [value, setValue] = useState<string>('')
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value)
  }
  return <>
    <input  value={value} onChange={changeHandle}/>
    <button onClick={clickHandle}>Click</button>
  </>
}
export default EventsExample
