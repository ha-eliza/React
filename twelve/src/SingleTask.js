import { useDispatch } from "react-redux";
import { taskDelete } from "./redux/action";

function SingleTask({data}) {
  const dispatch = useDispatch()

  const { title, id } = data

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(taskDelete(id))
  }

  return (
      <div style={{display: 'flex', borderBottom: '1px solid #eee', padding: '2px', justifyContent: 'space-between'}}>
        <p>{title || ''}</p>
        <button onClick={handleDelete} style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '5px', cursor: 'pointer'}}>delete</button>
      </div>
  )
}
export default SingleTask
