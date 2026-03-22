import "./Article.css";
import mars from "../../icons/mars.png";
import female from "../../icons/female.png";

function Article(props) {
  let { db } = props;
  let icon;
  return (
    <article className="app">
      {
        Object.keys(db).map((e, index) => {
          if(db[e].pol === 'female') {
            icon = female;
          } else {
            icon = mars;
          }
          return (
            <div className="card" key={index}>
              <img src={db[e].photo} alt="" />
              <div className="name">
                {db[e].name} {db[e].surname}
              </div>
              <div className="pol">
                <img src={icon} alt="" />
              </div>
              <div className="age">{db[e].age}</div>
            </div>
          );
        })
      }
    </article>
  );
}
export default Article;
