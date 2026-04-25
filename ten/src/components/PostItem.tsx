import { Post } from "../types/types"

function PostItem({post}: {post: Post}) {
  return <div style={{borderBottom: '1px solid #eee', margin: '20px'}}>
    <h3>{post.id}. {post.title}</h3>
    <p>{post.body}</p>
  </div>
}
export default PostItem
