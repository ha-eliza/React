import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './About.css'

function About() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="about">
      <h2>About</h2>
      <ul>
        {posts.map((e) => (
          <li key={e.id}>
            <Link to={`/about/${e.id}`}>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default About;
