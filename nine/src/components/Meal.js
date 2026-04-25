import { Link } from "react-router-dom";

function Meal({ strMeal, strCategory ,strMealThumb, idMeal }) {
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} />
      <div className="">
        <h3>{strMeal}</h3>
        <Link to={`/category/${strCategory}/${idMeal}`}>See more &rarr;</Link>
      </div>
    </div>
  );
}
export default Meal;
