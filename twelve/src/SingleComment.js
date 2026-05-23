import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from '../src/redux/action';

function SingleComment({data}) {
  const [commentText, setCommentText] = useState('');
  const {text, id} = data
  const dispatch = useDispatch()

  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text]);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id))
  }
  const handleInput = (e) => {
    setCommentText(e.target.value);
  }
  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(commentDelete(id))
  }
  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comment-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  )
}
export default SingleComment
