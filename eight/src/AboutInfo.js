import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function AboutInfo() {
  let { id } = useParams();
  let [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find((item) => item.id === id);
        setPost(foundPost);
      })
      .catch((err) => console.error("Ошибка:", err));
  }, [id]);

  return (
    <>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Загрузка или пост не найден...</p>
      )}
    </>
  );
}
export default AboutInfo;
