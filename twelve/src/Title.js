import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/action";

function Title() {
  const dispatch = useDispatch()
  const text = useSelector(state => {
    return state.input.text;
  })
  const handleChange = (e) => {
    dispatch(inputText(e.target.value))
  }
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" placeholder="Title" onChange={handleChange}/>
      </div>
      <p className="top">{text}</p>
    </div>
  )
}

export default Title
