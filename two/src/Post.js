function Post(props) {
  let {name, title, id, removePost} = props
  return(
    <div className="">
      <fieldset>
        <legend>
          {name}
        </legend>
        <p>{title}</p>
        <button onClick={() => removePost(id)}>delete</button>
      </fieldset>
    </div>
  )
}
export default Post;
