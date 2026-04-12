function ArticleOne({name, title}) {
  return <div style={{
    boxShadow: '0 0 2px #000',
    padding: '5px',
    textAlign: 'center'
  }}>
  <h3>{name}</h3>
  <p>{title}</p>
  </div>
}
export default ArticleOne
