import { Link } from "react-router-dom";
import "./CategoryItem.css";

function CategoryItem({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {

  return (
    <div className="card">
      <img src={strCategoryThumb} alt={strCategory} />
      <div className="">
        <h2>{strCategory}</h2>
        <p>{strCategoryDescription.slice(0, 150)}...</p>
      </div>
      <Link to={`/category/${strCategory}`}>See more &rarr;</Link>
    </div>
  );
}
export default CategoryItem;
