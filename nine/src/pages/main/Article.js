function Article({ title, author, text }) {
  return (
    <article style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
      <h2>{title}</h2>
      <p style={{ color: '#555', fontStyle: 'italic' }}>Автор: {author}</p>
      <p>{text}</p>
    </article>
  );
}

export default Article;
