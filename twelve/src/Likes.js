import { connect } from 'react-redux'
import { decrementLikes, incrementLikes } from './redux/action';

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>&hearts; {props.likes}</button>
      <button onClick={props.onDecrementLikes}>DisLike</button>
    </div>
  )
}
function mapStateToProps(state) {
  console.log(state);
  return {
    likes: state.likes.likes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);

