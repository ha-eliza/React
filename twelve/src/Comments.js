import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { commentCreate, commentsLoad } from "./redux/action"
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comments.comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentCreate(textComment));
    setTextComment('');
  };

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, [dispatch]);
  return (
    <div className="comments-wrapper">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          placeholder="Оставьте комментарий"
        />
        <input type="submit" hidden/>
      </form>

      <div className="comments-list">
        {comments && comments.map(comment => (
          <SingleComment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  )
}
export default Comments
